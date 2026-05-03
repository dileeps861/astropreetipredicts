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
  iconUrl,
  iconAlt,
  badge,
  actionLabel = "Inquire Now",
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
      className="material-box-strong material-box-interactive group relative flex min-h-[17rem] cursor-pointer flex-col overflow-hidden rounded-[1.15rem] p-5 outline-none hover:-translate-y-1 focus-visible:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/20 sm:p-6"
      role="button"
      tabIndex={0}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      {badge ? (
        <span className="material-chip absolute right-5 top-5 rounded-full px-2.5 py-1 text-xs font-semibold text-starlight">
          {badge}
        </span>
      ) : null}
      <div className="material-chip relative mx-auto mt-1 grid h-14 w-14 place-items-center rounded-full text-xl font-semibold text-gold">
        {iconUrl ? (
          <span
            role="img"
            aria-label={iconAlt || `${title} icon`}
            className="h-11 w-11 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${iconUrl})` }}
          />
        ) : (
          title.slice(0, 1)
        )}
      </div>
      <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#a97815]">
        {detail}
      </p>
      <h3 className="relative mt-3 text-xl font-semibold leading-tight text-starlight">
        {title}
      </h3>
      <p className="relative mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <div className="relative mt-auto flex flex-col gap-3 pt-4">
        <span className="text-xl font-semibold text-gold">
          {price}
        </span>
        <button
          type="button"
          className="material-button material-button-light inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold hover:text-gold"
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
          className="material-button material-button-primary inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold"
          onClick={(event) => event.stopPropagation()}
        >
          {actionLabel}
        </a>
      </div>
    </motion.article>
  );
}
