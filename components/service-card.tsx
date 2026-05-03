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
      className="group relative flex min-h-[17rem] cursor-pointer flex-col overflow-hidden rounded-[1.15rem] border border-[#ead3a6] bg-[linear-gradient(145deg,#fffaf0_0%,#fff2cf_54%,#f7ddb4_100%)] p-5 shadow-[0_18px_36px_rgba(137,100,34,0.14),0_2px_0_rgba(255,255,255,0.85)_inset,0_-14px_22px_rgba(145,94,18,0.06)_inset] outline-none transition hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_46px_rgba(137,100,34,0.18),0_2px_0_rgba(255,255,255,0.9)_inset,0_-14px_22px_rgba(145,94,18,0.07)_inset] focus-visible:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/20 sm:p-6"
      role="button"
      tabIndex={0}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      {badge ? (
        <span className="absolute right-5 top-5 rounded-full bg-white/65 px-2.5 py-1 text-xs font-semibold text-starlight shadow-sm shadow-gold/10">
          {badge}
        </span>
      ) : null}
      <div className="relative mx-auto mt-1 grid h-14 w-14 place-items-center rounded-full border border-gold/35 bg-[linear-gradient(145deg,#fffdf7,#f6daa5)] text-xl font-semibold text-gold shadow-[0_10px_20px_rgba(137,100,34,0.14),0_2px_0_rgba(255,255,255,0.9)_inset]">
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
          className="inline-flex h-10 items-center justify-center rounded-md border border-gold/35 bg-transparent px-4 text-sm font-semibold text-starlight transition hover:border-gold/60 hover:bg-white/45 hover:text-gold"
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
          className="inline-flex h-10 items-center justify-center rounded-md border border-gold/35 bg-white/75 px-4 text-sm font-semibold text-gold shadow-[0_6px_14px_rgba(137,100,34,0.08)] transition group-hover:bg-gold-soft group-hover:text-starlight"
          onClick={(event) => event.stopPropagation()}
        >
          {actionLabel}
        </a>
      </div>
    </motion.article>
  );
}
