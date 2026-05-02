import homepageJson from "@/content/homepage.json";

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  longDescription?: string;
  price: string;
  priceLabel?: string;
  detail: string;
  iconUrl?: string;
  iconAlt?: string;
  badge?: string;
  actionLabel?: string;
  highlights?: string[];
  bestFor?: string[];
  subServices?: ServiceSubService[];
  whatsappTemplate?: string;
  whatsappPhoneNumber?: string;
  whatsappUrl?: string;
  slug?: string;
};

export type ServiceSubService = {
  title: string;
  description: string;
  price?: string;
};

export type Review = {
  name: string;
  city: string;
  rating: string;
  text: string;
};

export type Video = {
  title: string;
  description?: string;
  duration?: string;
  provider?: "youtube" | "instagram";
  thumbnailUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type FeaturedReading = {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  marker: string;
  details: Array<{
    label: string;
    value: string;
  }>;
};

export type HeroSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: Stat[];
  featuredReading: FeaturedReading;
};

export type AboutDetail = {
  label: string;
  value: string;
};

export type ServicesSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  availabilityNote?: string;
  services: Service[];
};

export type AboutSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  profileLabel: string;
  profileInitials: string;
  profileName?: string;
  profileImageUrl?: string;
  location?: string;
  details?: AboutDetail[];
  stats: Stat[];
};

export type TestimonialsSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  reviews: Review[];
};

export type VideosSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  videos: Video[];
};

export type ContactSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  whatsappPhoneNumber?: string;
  links: CtaLink[];
};

export type HomepageData = {
  heroSection: HeroSectionData;
  servicesSection: ServicesSectionData;
  aboutSection: AboutSectionData;
  testimonialsSection: TestimonialsSectionData;
  videosSection: VideosSectionData;
  contactSection: ContactSectionData;
};

function applyHomepageDefaults(data: HomepageData): HomepageData {
  const whatsappPhoneNumber = data.contactSection.whatsappPhoneNumber;

  return {
    ...data,
    servicesSection: {
      ...data.servicesSection,
      services: data.servicesSection.services.map((service) => ({
        ...service,
        whatsappPhoneNumber: service.whatsappPhoneNumber || whatsappPhoneNumber,
      })),
    },
  };
}

export const defaultHomepageData = applyHomepageDefaults(
  homepageJson as HomepageData,
);
export const stats = defaultHomepageData.heroSection.stats;
export const heroSection = defaultHomepageData.heroSection;
export const servicesSection = defaultHomepageData.servicesSection;
export const aboutSection = defaultHomepageData.aboutSection;
export const testimonialsSection = defaultHomepageData.testimonialsSection;
export const videosSection = defaultHomepageData.videosSection;
export const contactSection = defaultHomepageData.contactSection;
