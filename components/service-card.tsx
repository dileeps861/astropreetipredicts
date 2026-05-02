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
      className="group flex min-h-72 cursor-pointer flex-col rounded-[1.5rem] border border-gold/15 bg-white/85 p-6 shadow-xl shadow-gold/5 outline-none transition hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white focus-visible:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/20 sm:min-h-80 sm:p-7"
      role="button"
      tabIndex={0}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <p className="text-xs font-semibold uppercase text-gold">{detail}</p>
      <h3 className="mt-5 text-2xl font-semibold text-starlight">
        {title}
      </h3>
      <p className="mt-5 text-sm text-muted-foreground">
        {description}
      </p>
      {subServices?.length ? (
        <div className="mt-6 space-y-3 border-t border-gold/15 pt-5">
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
      <div className="mt-auto flex flex-col gap-5 pt-8">
        <span className="text-2xl font-semibold text-gold">
          {price}
        </span>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-full border border-gold/20 bg-white/75 px-5 text-sm font-semibold text-starlight transition hover:border-gold/50 hover:text-gold"
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
          className="inline-flex h-11 items-center justify-center rounded-full border border-gold/35 bg-[#fffaf0] px-5 text-sm font-semibold text-gold transition group-hover:bg-gold-soft group-hover:text-starlight"
          onClick={(event) => event.stopPropagation()}
        >
          Inquire Now
        </a>
      </div>
    </motion.article>
  );
}
