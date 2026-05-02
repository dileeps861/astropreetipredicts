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
  ],
  preview: {
    select: {
      title: "title",
      provider: "provider",
      youtubeUrl: "youtubeUrl",
      instagramUrl: "instagramUrl",
    },
    prepare({ title, provider, youtubeUrl, instagramUrl }) {
      return {
        title,
        subtitle:
          provider === "youtube"
            ? youtubeUrl || "YouTube"
            : instagramUrl || "Instagram",
      };
    },
  },
});
