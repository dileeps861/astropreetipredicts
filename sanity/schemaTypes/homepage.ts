import { defineField, defineType } from "sanity";

const ctaFields = [
  defineField({
    name: "label",
    title: "Label",
    type: "string",
  }),
  defineField({
    name: "href",
    title: "Link",
    type: "string",
  }),
];

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      initialValue: "Homepage",
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "primaryCta",
          title: "Primary CTA",
          type: "object",
          fields: ctaFields,
        }),
        defineField({
          name: "secondaryCta",
          title: "Secondary CTA",
          type: "object",
          fields: ctaFields,
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "availabilityNote",
          title: "Availability Note",
          type: "text",
          rows: 2,
          description:
            "Optional note shown below the services heading, such as in-person availability.",
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: "videos",
      title: "Videos Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "whatsappPhoneNumber",
          title: "WhatsApp Phone Number",
          type: "string",
          description:
            "Digits only or formatted phone number. Used for service inquiry buttons.",
        }),
        defineField({
          name: "links",
          title: "Contact Links",
          type: "array",
          of: [
            {
              title: "Contact Link",
              type: "object",
              fields: ctaFields,
              preview: {
                select: {
                  title: "label",
                  subtitle: "href",
                },
              },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Homepage Content",
      };
    },
  },
});
