import { PageContainer } from "@/components/page-container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/55 bg-white/35 backdrop-blur-2xl">
      <PageContainer className="flex min-h-[4.5rem] flex-col justify-center gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>Astropreeti Predicts</span>
        <span className="text-gold">Vedic wisdom, clarity, guidance.</span>
      </PageContainer>
    </footer>
  );
}
