import { PageContainer } from "@/components/page-container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-deep-blue/65 backdrop-blur-xl">
      <PageContainer className="flex h-[4.5rem] items-center justify-between">
        <a href="#" className="text-base font-semibold text-starlight sm:text-lg">
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
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
