"use client";

import type { Service } from "@/lib/homepage-data";
import { createWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

type ServiceCardProps = Service;

export function ServiceCard({
  title,
  description,
  price,
  detail,
  whatsappTemplate,
  whatsappUrl,
}: ServiceCardProps) {
  const inquiryUrl =
    whatsappUrl ||
    createWhatsAppInquiryUrl({
      serviceTitle: title,
      template: whatsappTemplate,
    });

  return (
    <motion.article
      className="group flex min-h-72 flex-col rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-xl shadow-black/10 transition hover:border-gold/30 hover:bg-white/[0.055] sm:min-h-80 sm:p-7"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <p className="text-xs font-semibold uppercase text-gold-soft">{detail}</p>
      <h3 className="mt-5 text-2xl font-semibold text-starlight">
        {title}
      </h3>
      <p className="mt-5 text-sm text-muted-foreground">
        {description}
      </p>
      <div className="mt-auto flex flex-col gap-5 pt-8">
        <span className="text-2xl font-semibold text-gold-soft">
          {price}
        </span>
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full border border-gold/35 px-5 text-sm font-semibold text-gold-soft transition group-hover:bg-gold group-hover:text-deep-blue"
        >
          Inquire Now
        </a>
      </div>
    </motion.article>
  );
}
