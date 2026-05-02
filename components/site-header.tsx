import { PageContainer } from "@/components/page-container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-deep-blue/75 backdrop-blur-md">
      <PageContainer className="flex h-16 items-center justify-between">
        <a href="#" className="text-base font-semibold text-gold sm:text-lg">
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
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
