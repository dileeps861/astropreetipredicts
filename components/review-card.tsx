"use client";

import type { Review } from "@/lib/homepage-data";
import { motion } from "framer-motion";

type ReviewCardProps = Review;

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/15 sm:p-6"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-sm font-semibold text-gold">
          {rating}
        </span>
      </div>
      <p className="mt-5 text-sm text-gold">★★★★★</p>
      <p className="mt-4 text-sm text-muted-foreground">{text}</p>
    </motion.article>
  );
}
