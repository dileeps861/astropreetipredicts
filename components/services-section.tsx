"use client";

import { useState } from "react";
import type { Service } from "@/lib/homepage-data";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ServiceDetailsModal } from "@/components/service-details-modal";

type ServicesSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  availabilityNote?: string;
  services: Service[];
};

export function ServicesSection({
  eyebrow,
  title,
  description,
  availabilityNote,
  services,
}: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="space-y-12">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      {availabilityNote ? (
        <div className="inline-flex max-w-3xl rounded-2xl border border-gold/20 bg-white/80 px-5 py-4 text-sm font-medium leading-6 text-starlight shadow-sm shadow-gold/5">
          {availabilityNote}
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            onSelect={() => setSelectedService(service)}
            {...service}
          />
        ))}
      </div>
      <ServiceDetailsModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
