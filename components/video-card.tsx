"use client";

import type { Video } from "@/lib/homepage-data";
import { motion } from "framer-motion";

type VideoCardProps = Video & {
  index: number;
  onPlay: (video: Video) => void;
};

export function VideoCard({
  title,
  description,
  duration,
  provider,
  thumbnailUrl,
  youtubeUrl,
  instagramUrl,
  index,
  onPlay,
}: VideoCardProps) {
  const label = provider === "instagram" || instagramUrl ? "Instagram" : "YouTube";

  return (
    <motion.article
      className="material-box material-box-interactive group overflow-hidden rounded-[1.5rem]"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() =>
          onPlay({
            title,
            description,
            duration,
            provider,
            thumbnailUrl,
            youtubeUrl,
            instagramUrl,
          })
        }
        className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(248,224,138,0.46)_58%,rgba(82,39,122,0.06))]"
      >
        {thumbnailUrl ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        ) : null}
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,240,0.12),rgba(43,36,27,0.36))]" />
        <motion.span
          className="material-button material-button-light relative flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-gold sm:h-14 sm:w-14"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Play
        </motion.span>
      </button>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase text-gold">
          {label} {index + 1}
        </p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
          <span className="text-sm text-muted-foreground">
            {duration || label}
          </span>
        </div>
        {description ? (
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </motion.article>
  );
}
