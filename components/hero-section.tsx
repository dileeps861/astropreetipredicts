import Image from "next/image";
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
    <section className="grid gap-12 py-6 lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-10">
      <div className="flex flex-col justify-between">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-gold/20 bg-white/70 px-5 py-3 text-sm font-semibold text-gold shadow-sm shadow-gold/5">
            {eyebrow}
          </p>
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold text-starlight sm:text-7xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <a
              href={primaryCta.href}
              className="inline-flex h-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f3d96f,#d7b33f)] px-7 text-base font-semibold text-starlight shadow-xl shadow-gold/15 transition hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex h-16 items-center justify-center rounded-2xl border border-gold/25 bg-white/80 px-7 text-base font-semibold text-starlight shadow-xl shadow-gold/10 transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 lg:max-w-3xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gold/15 bg-white/80 p-5 shadow-sm shadow-gold/5"
            >
              <p className="text-2xl font-semibold text-gold">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-4 top-12 hidden h-[74%] w-[84%] -rotate-3 rounded-[2rem] bg-gold/10 lg:block" />
        <FeaturedReadingPanel {...featuredReading} />
      </div>
    </section>
  );
}

function FeaturedReadingPanel({
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt,
  details,
}: FeaturedReading) {
  return (
    <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[2rem] border border-gold/20 bg-white/90 p-6 shadow-2xl shadow-gold/10 sm:p-8">
      <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-gold/10 blur-3xl" />
      <div>
        <p className="text-xs font-semibold uppercase text-gold">
          {eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-starlight">
          {title}
        </h2>
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
      </div>
      <div className="relative my-8 grid flex-1 place-items-center">
        <Image
          src={imageUrl || "/assets/images/page_logo.png"}
          alt={imageAlt || title}
          width={420}
          height={420}
          className="w-full max-w-xs rounded-[1.75rem] object-cover sm:max-w-sm"
          priority
        />
      </div>
      <div className="grid gap-3 text-sm sm:grid-cols-3">
        {details.map((detail) => (
          <FeaturedDetailCard key={detail.label} detail={detail} />
        ))}
      </div>
    </div>
  );
}

function FeaturedDetailCard({
  detail,
}: {
  detail: FeaturedReading["details"][number];
}) {
  const className = getFeaturedDetailClassName(detail);
  const content = (
    <>
      <p className="text-muted-foreground">{detail.label}</p>
      <p className="mt-1 font-semibold text-starlight">{detail.value}</p>
    </>
  );

  if (!detail.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={detail.href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {content}
      <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-[#1b8c4a]">
        Inquire on WhatsApp
      </span>
    </a>
  );
}

function getFeaturedDetailClassName(
  detail: FeaturedReading["details"][number],
) {
  if (detail.href) {
    return "rounded-2xl border border-[#25d366]/25 bg-[linear-gradient(135deg,rgba(237,252,244,0.96),rgba(248,224,138,0.58))] p-4 shadow-sm shadow-[#25d366]/10 transition hover:-translate-y-0.5 hover:border-[#25d366]/45";
  }

  const label = detail.label.toLowerCase();

  if (label.includes("starting")) {
    return "rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,rgba(255,250,240,0.98),rgba(248,224,138,0.68))] p-4 shadow-sm shadow-gold/10";
  }

  if (label.includes("best")) {
    return "rounded-2xl border border-[#df5d8f]/20 bg-[linear-gradient(135deg,rgba(255,245,250,0.98),rgba(255,218,188,0.7),rgba(226,219,255,0.56))] p-4 shadow-sm shadow-[#df5d8f]/10";
  }

  return "rounded-2xl border border-gold/15 bg-[#fffaf0]/90 p-4";
}
