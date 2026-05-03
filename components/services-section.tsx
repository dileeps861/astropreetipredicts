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
        <div className="material-box-strong relative overflow-hidden rounded-[1.5rem] px-5 py-5 sm:px-7">
          <div className="absolute right-5 top-4 h-16 w-16 rounded-full bg-gold/15 blur-2xl" />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="material-chip inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              Delhi NCR
            </span>
            <p className="max-w-3xl text-sm font-semibold leading-6 text-starlight sm:text-base">
              {availabilityNote}
            </p>
          </div>
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
