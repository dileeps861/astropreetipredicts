import { PageContainer } from "@/components/page-container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-deep-blue/55">
      <PageContainer className="flex min-h-[4.5rem] flex-col justify-center gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>Astrology</span>
        <span className="text-gold-soft">Cosmic guidance, grounded insight.</span>
      </PageContainer>
    </footer>
  );
}
