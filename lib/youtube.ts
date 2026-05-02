export function getYouTubeEmbedUrl(url?: string) {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return undefined;
  }

  return `https://www.youtube.com/embed/${videoId}`;
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
