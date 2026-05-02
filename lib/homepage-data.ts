export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  price: string;
  detail: string;
  subServices?: ServiceSubService[];
  whatsappTemplate?: string;
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
  eyebrow: "Vedic wisdom, clarity, guidance",
  title: "Guidance for love, energy, spaces, and your next chapter.",
  description:
    "Personal consultations across astrology, tarot, vastu, numerology, and Reiki healing, shaped to bring calm clarity and practical direction.",
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
  title: "Choose the guidance that fits your question.",
  description:
    "Every service can be edited in Sanity, including pricing, currency, descriptions, WhatsApp templates, and detailed sub-services.",
  services: [
    {
      title: "Tarot",
      description:
        "Intuitive card guidance for emotional clarity, decision-making, and the patterns influencing your current situation.",
      price: "₹1,100",
      detail: "Focused card reading",
      whatsappTemplate:
        "Hi, I would like to inquire about a Tarot reading.",
      subServices: [
        {
          title: "Love Reading",
          description:
            "Clarity around attraction, emotional availability, and the energy surrounding a romantic connection.",
          price: "₹799",
        },
        {
          title: "Relationship Reading",
          description:
            "A deeper look at communication patterns, current blocks, and the direction of an existing relationship.",
          price: "₹999",
        },
        {
          title: "Career Reading",
          description:
            "Guidance for career decisions, workplace energy, opportunities, and next-step timing.",
          price: "₹999",
        },
      ],
    },
    {
      title: "Vastu",
      description:
        "Space and direction guidance for homes or workplaces, focused on energetic balance, flow, and practical remedies.",
      price: "₹5,100",
      detail: "Home or workspace review",
      whatsappTemplate:
        "Hi, I would like to inquire about a Vastu consultation.",
    },
    {
      title: "Numerology",
      description:
        "Name, date, and number analysis to understand personal patterns, favorable vibrations, and alignment options.",
      price: "₹1,500",
      detail: "Name and date analysis",
      whatsappTemplate:
        "Hi, I would like to inquire about a Numerology consultation.",
    },
    {
      title: "Astrology",
      description:
        "Birth chart and timing guidance for relationships, career, family, health themes, and important life decisions.",
      price: "₹2,100",
      detail: "Chart-based consultation",
      whatsappTemplate:
        "Hi, I would like to inquire about an Astrology consultation.",
    },
    {
      title: "Reiki Healing",
      description:
        "Gentle energy healing support for emotional release, grounding, balance, and spiritual restoration.",
      price: "₹1,800",
      detail: "Energy healing session",
      whatsappTemplate:
        "Hi, I would like to inquire about a Reiki Healing session.",
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
    "Watch selected Instagram Reels and video previews for future astrology guidance.",
  videos: [
    {
      title: "Astropreeti Instagram Reel",
      description:
        "A short spiritual guidance reel from Astropreeti Predicts with practical insight for everyday clarity.",
      duration: "Instagram",
      provider: "instagram",
      thumbnailUrl: "/page_logo.png",
      instagramUrl:
        "https://www.instagram.com/reel/DMQg4uyzhiV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      title: "Vedic Guidance Reel",
      description:
        "A quick Vedic wisdom reel focused on intuitive direction, reflection, and grounded decision-making.",
      duration: "Instagram",
      provider: "instagram",
      thumbnailUrl: "/page_logo.png",
      instagramUrl:
        "https://www.instagram.com/reel/DNJAx8aTctb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      title: "How Compatibility Readings Work",
      description:
        "An introduction to relationship guidance and how chart patterns can reveal emotional compatibility.",
      duration: "06:45",
      provider: "youtube",
      thumbnailUrl: "/page_logo.png",
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
    {
      label: "Instagram",
      href: "https://www.instagram.com/astropreetipredicts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
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
