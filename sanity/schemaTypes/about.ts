import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "experienceYears",
      title: "Experience Years",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "clientsServed",
      title: "Clients Served",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "accuracy",
      title: "Accuracy",
      type: "number",
      description: "Percentage value from 0 to 100.",
      validation: (rule) => rule.required().min(0).max(100),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "profileImage",
    },
  },
});
