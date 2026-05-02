import { AboutSection } from "@/components/about-section";
import { AnimatedSection } from "@/components/animated-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { VideosSection } from "@/components/videos-section";
import { getHomepageData } from "@/lib/sanity";

export default async function Home() {
  const {
    aboutSection,
    contactSection,
    heroSection,
    servicesSection,
    testimonialsSection,
    videosSection,
  } = await getHomepageData();

  return (
    <div className="space-y-24 sm:space-y-36">
      <AnimatedSection>
        <HeroSection {...heroSection} />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesSection {...servicesSection} />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSection {...aboutSection} />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection {...testimonialsSection} />
      </AnimatedSection>
      <AnimatedSection>
        <VideosSection {...videosSection} />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection {...contactSection} />
      </AnimatedSection>
    </div>
  );
}
