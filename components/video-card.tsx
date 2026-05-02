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
      className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-xl shadow-black/15"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() => onPlay({ title, duration, youtubeUrl })}
        className="flex aspect-video w-full items-center justify-center bg-[linear-gradient(135deg,rgba(216,185,107,0.18),rgba(43,26,85,0.82)_48%,rgba(7,8,22,0.95))]"
      >
        <motion.span
          className="flex h-13 w-13 items-center justify-center rounded-full border border-gold/50 bg-deep-blue/75 text-sm font-semibold text-gold sm:h-14 sm:w-14"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Play
        </motion.span>
      </button>
      <div className="p-5">
        <p className="text-sm font-semibold text-gold">Video {index + 1}</p>
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
