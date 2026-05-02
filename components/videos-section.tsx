"use client";

import { useMemo, useState } from "react";
import type { Video } from "@/lib/homepage-data";
import { Modal } from "@/components/modal";
import { SectionHeading } from "@/components/section-heading";
import { VideoCard } from "@/components/video-card";
import { getVideoEmbed } from "@/lib/youtube";

type VideosSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  videos: Video[];
};

export function VideosSection({
  eyebrow,
  title,
  description,
  videos,
}: VideosSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const embed = useMemo(
    () => getVideoEmbed(selectedVideo || undefined),
    [selectedVideo],
  );
  const isVerticalVideo =
    embed?.provider === "instagram" ||
    selectedVideo?.youtubeUrl?.includes("/shorts/");

  return (
    <section id="videos" className="space-y-12">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {videos.map((video, index) => (
          <VideoCard
            key={video.title}
            index={index}
            onPlay={setSelectedVideo}
            {...video}
          />
        ))}
      </div>
      <Modal
        isOpen={Boolean(selectedVideo)}
        title={selectedVideo?.title || "Video"}
        onClose={() => setSelectedVideo(null)}
      >
        {embed ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={
              isVerticalVideo
                ? "mx-auto aspect-[9/16] max-h-[78vh] w-full max-w-sm"
                : "aspect-video w-full"
            }
            src={embed.url}
            title={selectedVideo?.title || "Video"}
          />
        ) : (
          <div className="grid aspect-video place-items-center px-6 text-center text-muted-foreground">
            This video preview is currently unavailable.
          </div>
        )}
      </Modal>
    </section>
  );
}
