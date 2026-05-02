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
      className="group flex min-h-72 flex-col rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/15 transition hover:border-gold/35 hover:bg-white/[0.065] sm:min-h-80 sm:p-6"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <p className="text-xs font-semibold uppercase text-gold">{detail}</p>
      <h3 className="mt-4 text-xl font-semibold text-starlight sm:text-2xl">
        {title}
      </h3>
      <p className="mt-4 text-sm text-muted-foreground sm:mt-5">
        {description}
      </p>
      <div className="mt-auto flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
        <span className="text-xl font-semibold text-gold sm:text-2xl">
          {price}
        </span>
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full border border-gold/45 px-4 text-sm font-semibold text-gold transition group-hover:bg-gold group-hover:text-deep-blue"
        >
          Inquire Now
        </a>
      </div>
    </motion.article>
  );
}
