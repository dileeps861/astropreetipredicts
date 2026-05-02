import type { Service } from "@/lib/homepage-data";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

type ServicesSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
};

export function ServicesSection({
  eyebrow,
  title,
  description,
  services,
}: ServicesSectionProps) {
  return (
    <section id="services" className="space-y-12">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
