import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient, defineQuery } from "next-sanity";
import {
  defaultHomepageData,
  type HomepageData,
  type Review,
  type Service,
  type Stat,
  type Video,
} from "@/lib/homepage-data";
import { createWhatsAppInquiryUrl } from "@/lib/whatsapp";

loadLocalEnv(resolve(/* turbopackIgnore: true */ process.cwd(), ".env.local"));
loadLocalEnv(
  resolve(/* turbopackIgnore: true */ process.cwd(), "sanity", ".env"),
);

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-09";
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  "production";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const homepageQuery = defineQuery(`{
  "services": *[_type == "service" && isActive != false] | order(_createdAt asc) {
    title,
    "slug": slug.current,
    description,
    price,
    whatsappTemplate,
    isActive
  },
  "reviews": *[_type == "review"] | order(featured desc, _createdAt desc)[0...3] {
    name,
    city,
    "text": review,
    rating,
    featured
  },
  "videos": *[_type == "video"] | order(_createdAt desc)[0...3] {
    title,
    youtubeUrl
  },
  "about": *[_type == "about"][0] {
    name,
    bio,
    experienceYears,
    clientsServed,
    accuracy,
    "profileImageUrl": profileImage.asset->url
  }
}`);

type SanityService = {
  title?: string;
  slug?: string;
  description?: string;
  price?: number;
  whatsappTemplate?: string;
  isActive?: boolean;
};

type SanityReview = {
  name?: string;
  city?: string;
  text?: string;
  rating?: number;
  featured?: boolean;
};

type SanityVideo = {
  title?: string;
  youtubeUrl?: string;
};

type SanityAbout = {
  name?: string;
  bio?: string;
  experienceYears?: number;
  clientsServed?: number;
  accuracy?: number;
  profileImageUrl?: string;
};

type HomepageQueryResult = {
  services?: SanityService[];
  reviews?: SanityReview[];
  videos?: SanityVideo[];
  about?: SanityAbout | null;
};

export async function getHomepageData(): Promise<HomepageData> {
  if (!sanityClient) {
    return defaultHomepageData;
  }

  try {
    const data = await sanityClient.fetch<HomepageQueryResult>(homepageQuery);
    return mapHomepageData(data);
  } catch {
    return defaultHomepageData;
  }
}

function mapHomepageData(data: HomepageQueryResult): HomepageData {
  const aboutSection = mapAboutSection(data.about);
  const services = mapServices(data.services);
  const reviews = mapReviews(data.reviews);
  const videos = mapVideos(data.videos);
  const featuredService = services[0];

  return {
    ...defaultHomepageData,
    heroSection: {
      ...defaultHomepageData.heroSection,
      stats: aboutSection.stats,
      featuredReading: featuredService
        ? {
            eyebrow: "Featured reading",
            title: featuredService.title,
            description: featuredService.description,
            marker: featuredService.price.replace(/[^0-9]/g, "") || "1",
            details: [
              { label: "Focus", value: "Personal" },
              { label: "Format", value: "Private call" },
            ],
          }
        : defaultHomepageData.heroSection.featuredReading,
    },
    servicesSection: {
      ...defaultHomepageData.servicesSection,
      services: services.length
        ? services
        : defaultHomepageData.servicesSection.services,
    },
    aboutSection,
    testimonialsSection: {
      ...defaultHomepageData.testimonialsSection,
      reviews: reviews.length
        ? reviews
        : defaultHomepageData.testimonialsSection.reviews,
    },
    videosSection: {
      ...defaultHomepageData.videosSection,
      videos: videos.length ? videos : defaultHomepageData.videosSection.videos,
    },
  };
}

function mapServices(services: SanityService[] = []): Service[] {
  return services
    .filter((service) => service.title && service.description)
    .map((service) => ({
      title: service.title || "",
      description: service.description || "",
      price: formatPrice(service.price),
      detail: service.whatsappTemplate ? "WhatsApp booking" : "Available session",
      whatsappTemplate: service.whatsappTemplate,
      whatsappUrl: createWhatsAppInquiryUrl({
        serviceTitle: service.title || "",
        template: service.whatsappTemplate,
      }),
      slug: service.slug,
    }));
}

function mapReviews(reviews: SanityReview[] = []): Review[] {
  return reviews
    .filter((review) => review.name && review.text)
    .map((review) => ({
      name: review.name || "",
      city: review.city || "",
      rating:
        typeof review.rating === "number" ? review.rating.toFixed(1) : "5.0",
      text: review.text || "",
    }));
}

function mapVideos(videos: SanityVideo[] = []): Video[] {
  return videos
    .filter((video) => video.title && video.youtubeUrl)
    .map((video) => ({
      title: video.title || "",
      youtubeUrl: video.youtubeUrl,
    }));
}

function mapAboutSection(about?: SanityAbout | null) {
  if (!about) {
    return defaultHomepageData.aboutSection;
  }

  const name = about.name || "Astrology";
  const stats: Stat[] = [
    {
      label: "Years of Practice",
      value: formatYears(about.experienceYears),
    },
    {
      label: "Private Clients",
      value: formatCompactNumber(about.clientsServed),
    },
    {
      label: "Client Clarity Score",
      value: formatPercent(about.accuracy),
    },
  ];

  return {
    ...defaultHomepageData.aboutSection,
    title: `Meet ${name}`,
    description: about.bio || defaultHomepageData.aboutSection.description,
    profileLabel: name,
    profileInitials: getInitials(name),
    profileName: name,
    profileImageUrl: about.profileImageUrl,
    stats,
  };
}

function formatPrice(price?: number) {
  if (typeof price !== "number") {
    return "Contact";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function formatYears(value?: number) {
  return typeof value === "number" ? `${value}+` : "0+";
}

function formatPercent(value?: number) {
  return typeof value === "number" ? `${value}%` : "0%";
}

function formatCompactNumber(value?: number) {
  if (typeof value !== "number") {
    return "0";
  }

  if (value >= 1000) {
    return `${Number(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`;
  }

  return `${value}`;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function loadLocalEnv(envPath: string) {
  if (!existsSync(envPath)) {
    return;
  }

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    process.env[key] ||= valueParts.join("=").trim();
  }
}
