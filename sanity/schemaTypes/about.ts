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
      name: "location",
      title: "Location",
      type: "string",
      description: "Shown as the based-in location on the homepage.",
    }),
    defineField({
      name: "details",
      title: "About Details",
      type: "array",
      description: "Short customer-facing detail cards shown below the bio.",
      of: [
        {
          title: "Detail",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        },
      ],
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
