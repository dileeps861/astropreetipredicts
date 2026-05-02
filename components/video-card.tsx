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
  provider,
  youtubeUrl,
  instagramUrl,
  index,
  onPlay,
}: VideoCardProps) {
  const label = provider === "instagram" || instagramUrl ? "Instagram" : "YouTube";

  return (
    <motion.article
      className="overflow-hidden rounded-[1.5rem] border border-gold/15 bg-white/85 shadow-xl shadow-gold/5"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() =>
          onPlay({ title, duration, provider, youtubeUrl, instagramUrl })
        }
        className="flex aspect-video w-full items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(248,224,138,0.46)_58%,rgba(82,39,122,0.06))]"
      >
        <motion.span
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-white/85 text-sm font-semibold text-gold shadow-lg shadow-gold/10 sm:h-14 sm:w-14"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Play
        </motion.span>
      </button>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase text-gold">
          Video {index + 1}
        </p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
          <span className="text-sm text-muted-foreground">
            {duration || label}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
