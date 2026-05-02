import type { CtaLink, FeaturedReading, Stat } from "@/lib/homepage-data";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: Stat[];
  featuredReading: FeaturedReading;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  featuredReading,
}: HeroSectionProps) {
  return (
    <section className="grid overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(130deg,rgba(43,26,85,0.96),rgba(16,24,61,0.95)_48%,rgba(7,8,22,0.98))] shadow-2xl shadow-black/20 lg:min-h-[620px] lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-between px-5 py-9 sm:px-10 sm:py-12 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase text-gold sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold text-starlight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:mt-7 sm:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href={primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-deep-blue shadow-lg shadow-black/15 transition hover:bg-gold-soft"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] px-7 text-sm font-semibold text-starlight transition hover:border-gold/70 hover:text-gold"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:mt-14 sm:grid-cols-3 lg:max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-semibold text-gold sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-deep-blue/30 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
        <FeaturedReadingPanel {...featuredReading} />
      </div>
    </section>
  );
}

function FeaturedReadingPanel({
  eyebrow,
  title,
  description,
  marker,
  details,
}: FeaturedReading) {
  return (
    <div className="flex h-full min-h-[380px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.045] p-5 sm:min-h-[420px] sm:p-6">
      <div>
        <p className="text-xs font-semibold uppercase text-gold sm:text-sm">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-starlight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="my-8 grid flex-1 place-items-center sm:my-10">
        <div className="relative aspect-square w-full max-w-64 rounded-full border border-gold/40 sm:max-w-72">
          <div className="absolute inset-6 rounded-full border border-white/15" />
          <div className="absolute inset-14 rounded-full border border-gold/25" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-4xl font-semibold text-gold sm:text-5xl">
              {marker}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="rounded-lg border border-white/10 bg-deep-blue/55 p-4"
          >
            <p className="text-muted-foreground">{detail.label}</p>
            <p className="mt-1 font-semibold text-starlight">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
