import Image from "next/image";
import { PageContainer } from "@/components/page-container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gold/15 bg-background/90 backdrop-blur-xl">
      <PageContainer className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/assets/images/page_logo.png"
            alt="Astropreeti Predicts logo"
            width={44}
            height={44}
            className="material-chip rounded-xl"
            priority
          />
          <span className="text-base font-semibold text-gold sm:text-xl">
            {siteConfig.name}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
          <a className="transition hover:text-gold" href="#services">
            Services
          </a>
          <a className="transition hover:text-gold" href="#about">
            About
          </a>
          <a className="transition hover:text-gold" href="#videos">
            Videos
          </a>
          <a className="transition hover:text-gold" href="#contact">
            Contact
          </a>
        </nav>
      </PageContainer>
    </header>
  );
}
