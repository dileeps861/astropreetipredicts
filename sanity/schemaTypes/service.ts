import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Detailed Description",
      type: "text",
      rows: 6,
      description:
        "Longer customer-facing explanation shown in the service detail popup.",
    }),
    defineField({
      name: "detail",
      title: "Short Detail",
      type: "string",
      description: "Short label shown above the service title.",
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Optional small badge shown on the service card.",
    }),
    defineField({
      name: "actionLabel",
      title: "Action Label",
      type: "string",
      description:
        "Optional button label for the inquiry action, such as Order Now or Check Now.",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "priceLabel",
      title: "Price Label Override",
      type: "string",
      description:
        "Optional display text such as Free or Contact. Leave empty to format the numeric price with the selected currency.",
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "INR",
      options: {
        list: [
          { title: "Indian Rupee (INR)", value: "INR" },
          { title: "US Dollar (USD)", value: "USD" },
          { title: "Canadian Dollar (CAD)", value: "CAD" },
          { title: "Euro (EUR)", value: "EUR" },
          { title: "British Pound (GBP)", value: "GBP" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Short bullets explaining what the session covers.",
    }),
    defineField({
      name: "bestFor",
      title: "Best For",
      type: "array",
      of: [{ type: "string" }],
      description: "Short bullets explaining who should choose this service.",
    }),
    defineField({
      name: "subServices",
      title: "Sub Services",
      type: "array",
      of: [
        {
          title: "Sub Service",
          type: "object",
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
              name: "price",
              title: "Price",
              type: "number",
              validation: (rule) => rule.min(0),
            }),
            defineField({
              name: "currency",
              title: "Currency",
              type: "string",
              initialValue: "INR",
              options: {
                list: [
                  { title: "Indian Rupee (INR)", value: "INR" },
                  { title: "US Dollar (USD)", value: "USD" },
                  { title: "Canadian Dollar (CAD)", value: "CAD" },
                  { title: "Euro (EUR)", value: "EUR" },
                  { title: "British Pound (GBP)", value: "GBP" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "price",
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle:
                  typeof subtitle === "number" ? `Price: ${subtitle}` : undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "whatsappTemplate",
      title: "WhatsApp Template",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
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
      subtitle: "price",
      priceLabel: "priceLabel",
      currency: "currency",
    },
    prepare({ title, subtitle, priceLabel, currency }) {
      return {
        title,
        subtitle: priceLabel ||
          (typeof subtitle === "number"
            ? new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: currency || "INR",
                maximumFractionDigits: 0,
              }).format(subtitle)
            : undefined),
      };
    },
  },
});
