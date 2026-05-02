import { PageContainer } from "@/components/page-container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-deep-blue/70">
      <PageContainer className="flex min-h-16 flex-col justify-center gap-2 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>Astrology</span>
        <span className="text-gold">Cosmic guidance, grounded insight.</span>
      </PageContainer>
    </footer>
  );
}
