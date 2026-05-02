"use client";

import type { KeyboardEvent } from "react";
import type { Service } from "@/lib/homepage-data";
import { createWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

type ServiceCardProps = Service & {
  onSelect?: () => void;
};

export function ServiceCard({
  title,
  description,
  price,
  detail,
  badge,
  actionLabel = "Inquire Now",
  subServices,
  whatsappTemplate,
  whatsappPhoneNumber,
  whatsappUrl,
  onSelect,
}: ServiceCardProps) {
  const inquiryUrl =
    whatsappUrl ||
    createWhatsAppInquiryUrl({
      phoneNumber: whatsappPhoneNumber,
      serviceTitle: title,
      template: whatsappTemplate,
    });

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect?.();
    }
  }

  return (
    <motion.article
      className="group relative flex min-h-[25rem] cursor-pointer flex-col overflow-hidden rounded-lg border border-gold/25 bg-[#fff4dd] p-5 shadow-[0_18px_50px_rgba(159,118,25,0.08)] outline-none transition hover:-translate-y-0.5 hover:border-gold/50 hover:bg-[#fff8e8] focus-visible:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/20 sm:p-6"
      role="button"
      tabIndex={0}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <div className="pointer-events-none absolute inset-3 rounded-md border border-gold/25" />
      {badge ? (
        <span className="absolute right-6 top-6 rounded-md bg-white/55 px-3 py-1 text-xs font-semibold text-starlight shadow-sm shadow-gold/5">
          {badge}
        </span>
      ) : null}
      <div className="relative mx-auto mt-5 grid h-24 w-24 place-items-center rounded-full border border-gold/55 bg-[#fffaf0] text-3xl font-semibold text-gold shadow-inner shadow-gold/10">
        {title.slice(0, 1)}
      </div>
      <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
        {detail}
      </p>
      <h3 className="relative mt-4 text-2xl font-semibold leading-tight text-starlight">
        {title}
      </h3>
      <p className="relative mt-4 text-base leading-7 text-muted-foreground">
        {description}
      </p>
      {subServices?.length ? (
        <div className="relative mt-6 space-y-3 border-t border-gold/20 pt-5">
          {subServices.map((service) => (
            <div key={service.title}>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-sm font-semibold text-starlight">
                  {service.title}
                </h4>
                {service.price ? (
                  <span className="shrink-0 text-sm font-semibold text-gold">
                    {service.price}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      ) : null}
      <div className="relative mt-auto flex flex-col gap-4 pt-8">
        <span className="text-2xl font-semibold text-gold">
          {price}
        </span>
        <button
          type="button"
          className="inline-flex h-12 items-center justify-center rounded-md border border-gold/35 bg-transparent px-5 text-sm font-semibold text-starlight transition hover:border-gold/60 hover:bg-white/45 hover:text-gold"
          onClick={(event) => {
            event.stopPropagation();
            onSelect?.();
          }}
        >
          View Details
        </button>
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-md border border-gold/45 bg-white/70 px-5 text-sm font-semibold text-gold transition group-hover:bg-gold-soft group-hover:text-starlight"
          onClick={(event) => event.stopPropagation()}
        >
          {actionLabel}
        </a>
      </div>
    </motion.article>
  );
}
