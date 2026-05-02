"use client";

import type { Review } from "@/lib/homepage-data";
import { motion } from "framer-motion";

type ReviewCardProps = Review;

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <motion.article
      className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-xl shadow-black/10 sm:p-7"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
        <span className="rounded-full bg-gold/[0.12] px-3 py-1 text-sm font-semibold text-gold-soft">
          {rating}
        </span>
      </div>
      <p className="mt-6 text-sm text-gold-soft">★★★★★</p>
      <p className="mt-5 text-base text-muted-foreground">{text}</p>
    </motion.article>
  );
}
