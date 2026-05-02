# Astropreetipredicts

Minimal Next.js App Router project with TypeScript and Tailwind CSS.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:7001](http://localhost:7001).

## Scripts

```bash
npm run lint
npm run build
npm run sanity:dev
npm run sanity:build
```

The Next.js app runs on [http://localhost:7001](http://localhost:7001).
The Sanity Studio runs on [http://localhost:7002](http://localhost:7002).

Copy `sanity/.env.example` to `sanity/.env` and set a real
`SANITY_STUDIO_PROJECT_ID` before using a hosted Sanity dataset.
The frontend reads the same Sanity env values server-side, and also supports
`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and
`NEXT_PUBLIC_SANITY_API_VERSION` when deploying.

## CMS Content

Sanity stores editable content as structured JSON-like documents. The homepage
uses:

- `Homepage Content` for editable page copy and CTA labels.
- `Homepage Content > Contact Section` for editable contact links and the
  WhatsApp phone number used by service inquiry buttons.
- `Service` documents for service details, pricing, currency, WhatsApp copy,
  ordering, and optional sub-services like Tarot love, relationship, and career
  readings.
- `About` for name, bio, experience years, clients served, clarity rate, and
  profile image.
- `Review` and `Video` documents for the other homepage sections.

If Sanity is not configured or has no content yet, the app uses fallback content
from `content/homepage.json`.

## Structure

```text
app/
components/
lib/
```

The homepage lives at `app/page.tsx`.
