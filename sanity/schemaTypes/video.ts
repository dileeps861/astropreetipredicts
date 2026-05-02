import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "provider",
      title: "Provider",
      type: "string",
      initialValue: "instagram",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "YouTube", value: "youtube" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram Reel URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      description: "Preferred preview image shown on the website video card.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "thumbnailUrl",
      title: "External Thumbnail URL",
      type: "url",
      description:
        "Optional fallback if the thumbnail is hosted outside Sanity.",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnailImage",
      provider: "provider",
      youtubeUrl: "youtubeUrl",
      instagramUrl: "instagramUrl",
    },
    prepare({ title, media, provider, youtubeUrl, instagramUrl }) {
      return {
        title,
        media,
        subtitle:
          provider === "youtube"
            ? youtubeUrl || "YouTube"
            : instagramUrl || "Instagram",
      };
    },
  },
});
