export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  price: string;
  detail: string;
  whatsappTemplate?: string;
  whatsappUrl?: string;
  slug?: string;
};

export type Review = {
  name: string;
  city: string;
  rating: string;
  text: string;
};

export type Video = {
  title: string;
  duration?: string;
  youtubeUrl?: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type FeaturedReading = {
  eyebrow: string;
  title: string;
  description: string;
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

export type ServicesSectionData = {
  eyebrow: string;
  title: string;
  description: string;
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

export const stats: Stat[] = [
  { label: "Years of Practice", value: "12+" },
  { label: "Private Clients", value: "4.8k" },
  { label: "Client Clarity Score", value: "96%" },
];

export const heroSection = {
  eyebrow: "Private astrology readings",
  title: "Clarity for love, timing, and your next chapter.",
  description:
    "Premium chart readings designed to translate complex planetary patterns into grounded decisions, useful timing, and personal direction.",
  primaryCta: {
    label: "Explore Services",
    href: "#services",
  },
  secondaryCta: {
    label: "Watch Video",
    href: "#videos",
  },
  stats,
  featuredReading: {
    eyebrow: "Featured reading",
    title: "Annual Forecast",
    description:
      "Transit windows, personal themes, and the months that deserve your attention.",
    marker: "12",
    details: [
      { label: "Focus", value: "Timing" },
      { label: "Format", value: "Private call" },
    ],
  },
};

export const servicesSection = {
  eyebrow: "Services",
  title: "Focused sessions with a polished, personal feel.",
  description:
    "Each reading is structured around a clear question, a refined interpretation, and a practical takeaway you can actually use.",
  services: [
    {
      title: "Natal Blueprint",
      description:
        "A complete birth chart interpretation across identity, emotional rhythm, strengths, and recurring life themes.",
      price: "$95",
      detail: "75 min session",
      whatsappTemplate:
        "Hi, I would like to inquire about a Natal Blueprint reading.",
    },
    {
      title: "Relationship Synastry",
      description:
        "A two-chart reading for emotional patterns, communication style, chemistry, and long-term compatibility.",
      price: "$125",
      detail: "2 charts included",
      whatsappTemplate:
        "Hi, I would like to inquire about a Relationship Synastry reading.",
    },
    {
      title: "Career Timing",
      description:
        "Astrological guidance for work decisions, visibility windows, transitions, and purpose-aligned growth.",
      price: "$110",
      detail: "Includes timeline",
      whatsappTemplate:
        "Hi, I would like to inquire about a Career Timing reading.",
    },
    {
      title: "Annual Forecast",
      description:
        "A refined look at the next twelve months with major transits, key dates, and recommended focus areas.",
      price: "$165",
      detail: "12 month outlook",
      whatsappTemplate:
        "Hi, I would like to inquire about an Annual Forecast reading.",
    },
  ] satisfies Service[],
};

export const aboutSection = {
  eyebrow: "About",
  title: "Intuitive astrology with a refined client experience.",
  description:
    "Sessions are calm, direct, and carefully prepared. Every reading turns chart patterns into plain-language insight, so clients leave with context, timing, and a stronger sense of direction.",
  profileLabel: "Profile placeholder",
  profileInitials: "AP",
  stats,
};

export const testimonialsSection = {
  eyebrow: "Testimonials",
  title: "Quiet confidence from real conversations.",
  description:
    "Sample feedback from clients using astrology for perspective, timing, and personal growth.",
  reviews: [
    {
      name: "Maya R.",
      city: "Toronto",
      rating: "5.0",
      text: "The reading felt thoughtful, specific, and grounded. I left with clear timing and practical next steps.",
    },
    {
      name: "Aarav S.",
      city: "Vancouver",
      rating: "5.0",
      text: "The relationship guidance helped me understand patterns I had been missing for years.",
    },
    {
      name: "Priya K.",
      city: "New York",
      rating: "4.9",
      text: "Beautifully explained and easy to follow. The yearly forecast was detailed without feeling overwhelming.",
    },
  ] satisfies Review[],
};

export const videosSection = {
  eyebrow: "Videos",
  title: "A preview of the teaching style.",
  description:
    "Static video previews for future educational content and guided astrology explainers.",
  videos: [
    {
      title: "Understanding Your Moon Sign",
      duration: "08:24",
      youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "Planetary Transits This Month",
      duration: "12:10",
      youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "How Compatibility Readings Work",
      duration: "06:45",
      youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
  ] satisfies Video[],
};

export const contactSection = {
  eyebrow: "Contact",
  title: "Connect for your next reading.",
  description:
    "Reach out through WhatsApp, Instagram, or email when you are ready to explore a session.",
  links: [
    { label: "WhatsApp", href: "https://wa.me/10000000000" },
    { label: "Instagram", href: "https://instagram.com/astrology" },
    { label: "Email", href: "mailto:hello@example.com" },
  ] satisfies CtaLink[],
};

export const defaultHomepageData = {
  heroSection,
  servicesSection,
  aboutSection,
  testimonialsSection,
  videosSection,
  contactSection,
} satisfies HomepageData;
