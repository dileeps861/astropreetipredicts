export function getYouTubeEmbedUrl(url?: string) {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return undefined;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

export function getInstagramEmbedUrl(url?: string) {
  const reelId = getInstagramReelId(url);

  if (!reelId) {
    return undefined;
  }

  return `https://www.instagram.com/reel/${reelId}/embed`;
}

export function getVideoEmbed(video?: {
  instagramUrl?: string;
  youtubeUrl?: string;
}) {
  const instagramUrl = getInstagramEmbedUrl(video?.instagramUrl);

  if (instagramUrl) {
    return {
      provider: "instagram" as const,
      url: instagramUrl,
    };
  }

  const youtubeUrl = getYouTubeEmbedUrl(video?.youtubeUrl);

  if (youtubeUrl) {
    return {
      provider: "youtube" as const,
      url: youtubeUrl,
    };
  }

  return undefined;
}

function getYouTubeVideoId(url?: string) {
  if (!url) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    if (parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1]?.split("/")[0];
    }

    return parsedUrl.searchParams.get("v") || undefined;
  } catch {
    return undefined;
  }
}

function getInstagramReelId(url?: string) {
  if (!url) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url);

    if (!parsedUrl.hostname.includes("instagram.com")) {
      return undefined;
    }

    const [, type, id] = parsedUrl.pathname.split("/");

    if (!["reel", "p", "tv"].includes(type)) {
      return undefined;
    }

    return id || undefined;
  } catch {
    return undefined;
  }
}
