import type { Metadata } from "next";
import { PageContainer } from "@/components/page-container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astropreeti Predicts",
  description: "Vedic wisdom, clarity, and guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex flex-1">
            <PageContainer className="py-10 sm:py-16">
              {children}
            </PageContainer>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
