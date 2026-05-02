"use client";

import type { Video } from "@/lib/homepage-data";
import { motion } from "framer-motion";

type VideoCardProps = Video & {
  index: number;
  onPlay: (video: Video) => void;
};

export function VideoCard({
  title,
  duration,
  youtubeUrl,
  index,
  onPlay,
}: VideoCardProps) {
  return (
    <motion.article
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-xl shadow-black/10"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() => onPlay({ title, duration, youtubeUrl })}
        className="flex aspect-video w-full items-center justify-center bg-[linear-gradient(135deg,rgba(215,187,115,0.14),rgba(38,22,79,0.64)_48%,rgba(6,7,19,0.9))]"
      >
        <motion.span
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-deep-blue/75 text-sm font-semibold text-gold-soft sm:h-14 sm:w-14"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Play
        </motion.span>
      </button>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase text-gold-soft">
          Video {index + 1}
        </p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
          <span className="text-sm text-muted-foreground">
            {duration || "YouTube"}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
