import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient, defineQuery } from "next-sanity";
import {
  defaultHomepageData,
  type AboutDetail,
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

const isValidSanityProjectId = (value: string) => /^[a-z0-9-]+$/.test(value);

export const sanityClient = projectId && isValidSanityProjectId(projectId)
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const homepageQuery = defineQuery(`{
  "services": *[_type == "service" && isActive != false] | order(_createdAt asc) {
    displayOrder,
    title,
    "slug": slug.current,
    description,
    longDescription,
    detail,
    price,
    currency,
    highlights,
    bestFor,
    subServices[] {
      title,
      description,
      price,
      currency
    },
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
  "videos": *[_type == "video"] | order(displayOrder asc, _createdAt desc)[0...6] {
    title,
    description,
    provider,
    youtubeUrl,
    instagramUrl,
    thumbnailUrl,
    "thumbnailImageUrl": thumbnailImage.asset->url
  },
  "about": *[_type == "about"][0] {
    name,
    bio,
    location,
    details[] {
      label,
      value
    },
    experienceYears,
    clientsServed,
    accuracy,
    "profileImageUrl": profileImage.asset->url
  },
  "homepage": *[_type == "homepage"][0] {
    hero,
    services,
    testimonials,
    videos,
    contact {
      eyebrow,
      title,
      description,
      whatsappPhoneNumber,
      links[] {
        label,
        href
      }
    }
  }
}`);

type SanityService = {
  displayOrder?: number;
  title?: string;
  slug?: string;
  description?: string;
  longDescription?: string;
  detail?: string;
  price?: number;
  currency?: string;
  highlights?: string[];
  bestFor?: string[];
  subServices?: SanitySubService[];
  whatsappTemplate?: string;
  isActive?: boolean;
};

type SanitySubService = {
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
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
  description?: string;
  provider?: "youtube" | "instagram";
  youtubeUrl?: string;
  instagramUrl?: string;
  thumbnailUrl?: string;
  thumbnailImageUrl?: string;
};

type SanityAbout = {
  name?: string;
  bio?: string;
  location?: string;
  details?: AboutDetail[];
  experienceYears?: number;
  clientsServed?: number;
  accuracy?: number;
  profileImageUrl?: string;
};

type SanityCta = {
  label?: string;
  href?: string;
};

type SanitySectionCopy = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

type SanityHeroCopy = SanitySectionCopy & {
  primaryCta?: SanityCta;
  secondaryCta?: SanityCta;
};

type SanityHomepage = {
  hero?: SanityHeroCopy;
  services?: SanitySectionCopy;
  testimonials?: SanitySectionCopy;
  videos?: SanitySectionCopy;
  contact?: SanitySectionCopy & {
    whatsappPhoneNumber?: string;
    links?: SanityCta[];
  };
};

type HomepageQueryResult = {
  services?: SanityService[];
  reviews?: SanityReview[];
  videos?: SanityVideo[];
  about?: SanityAbout | null;
  homepage?: SanityHomepage | null;
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
  const homepage = data.homepage;
  const services = mapServices(
    data.services,
    homepage?.contact?.whatsappPhoneNumber,
  );
  const reviews = mapReviews(data.reviews);
  const videos = mapVideos(data.videos);
  const featuredService = services[0];

  return {
    ...defaultHomepageData,
    heroSection: {
      ...defaultHomepageData.heroSection,
      ...pickSectionCopy(homepage?.hero),
      primaryCta: {
        ...defaultHomepageData.heroSection.primaryCta,
        ...pickCta(homepage?.hero?.primaryCta),
      },
      secondaryCta: {
        ...defaultHomepageData.heroSection.secondaryCta,
        ...pickCta(homepage?.hero?.secondaryCta),
      },
      stats: aboutSection.stats,
      featuredReading: featuredService
        ? {
            eyebrow: "Featured service",
            title: featuredService.title,
            description:
              featuredService.longDescription || featuredService.description,
            marker: featuredService.price.replace(/[^0-9]/g, "") || "1",
            details: [
              { label: "Starting from", value: featuredService.price },
              { label: "Format", value: "WhatsApp / Call" },
              {
                label: "Best for",
                value:
                  featuredService.bestFor?.slice(0, 2).join(", ") ||
                  featuredService.detail,
              },
            ],
          }
        : defaultHomepageData.heroSection.featuredReading,
    },
    servicesSection: {
      ...defaultHomepageData.servicesSection,
      ...pickSectionCopy(homepage?.services),
      services: services.length
        ? services
        : defaultHomepageData.servicesSection.services,
    },
    aboutSection,
    testimonialsSection: {
      ...defaultHomepageData.testimonialsSection,
      ...pickSectionCopy(homepage?.testimonials),
      reviews: reviews.length
        ? reviews
        : defaultHomepageData.testimonialsSection.reviews,
    },
    videosSection: {
      ...defaultHomepageData.videosSection,
      ...pickSectionCopy(homepage?.videos),
      videos: videos.length ? videos : defaultHomepageData.videosSection.videos,
    },
    contactSection: {
      ...defaultHomepageData.contactSection,
      ...pickSectionCopy(homepage?.contact),
      whatsappPhoneNumber:
        homepage?.contact?.whatsappPhoneNumber ||
        defaultHomepageData.contactSection.whatsappPhoneNumber,
      links: mapContactLinks(homepage?.contact?.links),
    },
  };
}

function mapServices(
  services: SanityService[] = [],
  whatsappPhoneNumber?: string,
): Service[] {
  return services
    .filter((service) => service.title && service.description)
    .sort(
      (left, right) => (left.displayOrder || 0) - (right.displayOrder || 0),
    )
    .map((service) => ({
      title: service.title || "",
      description: service.description || "",
      longDescription: service.longDescription,
      price: formatPrice(service.price, service.currency),
      detail:
        service.detail ||
        (service.subServices?.length
          ? `${service.subServices.length} focused options`
          : "Available session"),
      highlights: service.highlights,
      bestFor: service.bestFor,
      subServices: mapSubServices(service.subServices, service.currency),
      whatsappTemplate: service.whatsappTemplate,
      whatsappPhoneNumber,
      whatsappUrl: createWhatsAppInquiryUrl({
        phoneNumber: whatsappPhoneNumber,
        serviceTitle: service.title || "",
        template: service.whatsappTemplate,
      }),
      slug: service.slug,
    }));
}

function mapContactLinks(links: SanityCta[] = []) {
  const mappedLinks = links
    .filter((link) => link.label && link.href)
    .map((link) => ({
      label: link.label || "",
      href: link.href || "",
    }));

  return mappedLinks.length ? mappedLinks : defaultHomepageData.contactSection.links;
}

function mapSubServices(
  subServices: SanitySubService[] = [],
  fallbackCurrency?: string,
) {
  return subServices
    .filter((service) => service.title && service.description)
    .map((service) => ({
      title: service.title || "",
      description: service.description || "",
      price:
        typeof service.price === "number"
          ? formatPrice(service.price, service.currency || fallbackCurrency)
          : undefined,
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
    .filter((video) => video.title && (video.youtubeUrl || video.instagramUrl))
    .map((video) => ({
      title: video.title || "",
      description: video.description,
      provider:
        video.provider ||
        (video.instagramUrl ? "instagram" : video.youtubeUrl ? "youtube" : undefined),
      thumbnailUrl: video.thumbnailImageUrl || video.thumbnailUrl,
      youtubeUrl: video.youtubeUrl,
      instagramUrl: video.instagramUrl,
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
      value: formatClientsServed(about.clientsServed),
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
    location: about.location || defaultHomepageData.aboutSection.location,
    details: sanitizeAboutDetails(about.details),
    stats,
  };
}

function sanitizeAboutDetails(details: AboutDetail[] = []) {
  const mappedDetails = details
    .filter((detail) => detail.label && detail.value)
    .map((detail) => ({
      label: detail.label,
      value: detail.value,
    }));

  return mappedDetails.length
    ? mappedDetails
    : defaultHomepageData.aboutSection.details;
}

function formatPrice(price?: number, currency = "INR") {
  if (typeof price !== "number") {
    return "Contact";
  }

  return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function pickSectionCopy(section?: SanitySectionCopy) {
  return Object.fromEntries(
    Object.entries({
      eyebrow: section?.eyebrow,
      title: section?.title,
      description: section?.description,
    }).filter(([, value]) => Boolean(value)),
  );
}

function pickCta(cta?: SanityCta) {
  return Object.fromEntries(
    Object.entries({
      label: cta?.label,
      href: cta?.href,
    }).filter(([, value]) => Boolean(value)),
  );
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

function formatClientsServed(value?: number) {
  if (typeof value !== "number") {
    return "0+";
  }

  return `${formatCompactNumber(value)}+`;
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
