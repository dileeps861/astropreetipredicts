"use client";

import type { Review } from "@/lib/homepage-data";
import { motion } from "framer-motion";

type ReviewCardProps = Review;

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <motion.article
      className="material-box material-box-interactive rounded-[1.5rem] p-6 sm:p-7"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
        <span className="material-chip rounded-full px-3 py-1 text-sm font-semibold text-gold">
          {rating}
        </span>
      </div>
      <p className="mt-6 text-sm text-gold">★★★★★</p>
      <p className="mt-5 text-base text-muted-foreground">{text}</p>
    </motion.article>
  );
}
