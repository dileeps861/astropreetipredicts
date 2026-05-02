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
    <section className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[radial-gradient(circle_at_18%_10%,rgba(215,187,115,0.12),transparent_26rem),linear-gradient(132deg,rgba(38,22,79,0.78),rgba(16,23,53,0.86)_52%,rgba(6,7,19,0.94))] shadow-2xl shadow-black/15 lg:min-h-[660px] lg:grid-cols-[1.12fr_0.88fr]">
      <div className="flex flex-col justify-between px-6 py-12 sm:px-12 sm:py-16 lg:px-14">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase text-gold-soft">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold text-starlight sm:text-7xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-deep-blue shadow-lg shadow-gold/10 transition hover:bg-gold-soft"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.025] px-7 text-sm font-semibold text-starlight transition hover:border-gold/55 hover:text-gold-soft"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-4 border-t border-white/[0.08] pt-7 sm:mt-16 sm:grid-cols-3 lg:max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/[0.035] p-4">
              <p className="text-2xl font-semibold text-gold-soft">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] bg-deep-blue/25 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
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
    <div className="flex h-full min-h-[380px] flex-col justify-between rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-6 sm:min-h-[460px] sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase text-gold-soft">
          {eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-starlight">
          {title}
        </h2>
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
      </div>
      <div className="my-10 grid flex-1 place-items-center">
        <div className="relative aspect-square w-full max-w-72 rounded-full border border-gold/30 bg-deep-blue/20">
          <div className="absolute inset-8 rounded-full border border-white/[0.12]" />
          <div className="absolute inset-16 rounded-full border border-gold/20" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.08]" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/[0.08]" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-5xl font-semibold text-gold-soft">
              {marker}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="rounded-2xl border border-white/[0.08] bg-deep-blue/45 p-4"
          >
            <p className="text-muted-foreground">{detail.label}</p>
            <p className="mt-1 font-semibold text-starlight">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
