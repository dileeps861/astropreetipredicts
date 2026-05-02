import Image from "next/image";
import type { AboutDetail, Stat } from "@/lib/homepage-data";
import { SectionHeading } from "@/components/section-heading";

type AboutSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  profileLabel: string;
  profileInitials: string;
  profileName?: string;
  profileImageUrl?: string;
  location?: string;
  details?: AboutDetail[];
  stats: Stat[];
};

export function AboutSection({
  eyebrow,
  title,
  description,
  profileLabel,
  profileInitials,
  profileName,
  profileImageUrl,
  location,
  details = [],
  stats,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
    >
      <div className="rounded-[1.75rem] border border-gold/20 bg-[linear-gradient(150deg,rgba(255,255,255,0.96),rgba(255,248,226,0.9))] p-3 shadow-2xl shadow-gold/10 sm:p-4">
        {profileImageUrl ? (
          <div
            role="img"
            aria-label={profileName || "Astrology profile"}
            className="aspect-[4/5] w-full rounded-[1.35rem] border border-gold/15 bg-cover bg-center"
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          />
        ) : (
          <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.35rem] border border-gold/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,239,211,0.74))] p-6">
            <Image
              src="/assets/images/page_logo.png"
              alt="Astropreeti Predicts logo"
              width={420}
              height={420}
              className="mx-auto mt-4 w-full max-w-72 rounded-3xl object-cover"
            />
            <div>
              <p className="text-xs font-semibold uppercase text-gold">
                {profileLabel}
              </p>
              <p className="mt-3 text-5xl font-semibold text-starlight">
                {profileInitials}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="lg:pl-10">
        {location ? (
          <div className="mb-5 inline-flex items-center rounded-full border border-gold/20 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-starlight/70 shadow-sm shadow-gold/5">
            Based in {location}
          </div>
        ) : null}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {details.length ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {details.map((detail, index) => (
              <AboutDetailCard
                detail={detail}
                index={index}
                key={`${detail.label}-${detail.value}`}
              />
            ))}
          </div>
        ) : null}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gold/15 bg-white/85 p-6 shadow-lg shadow-gold/5"
            >
              <p className="text-3xl font-semibold text-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutDetailCard({
  detail,
  index,
}: {
  detail: AboutDetail;
  index: number;
}) {
  const styles = [
    {
      className:
        "border-[#25d366]/20 bg-[linear-gradient(135deg,rgba(237,252,244,0.98),rgba(248,224,138,0.52))]",
      icon: "C",
    },
    {
      className:
        "border-[#df5d8f]/20 bg-[linear-gradient(135deg,rgba(255,245,250,0.98),rgba(255,218,188,0.64),rgba(226,219,255,0.58))]",
      icon: "S",
    },
    {
      className:
        "border-gold/25 bg-[linear-gradient(135deg,rgba(255,250,240,0.98),rgba(248,224,138,0.66))]",
      icon: "A",
    },
  ];
  const style = styles[index % styles.length];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 shadow-lg shadow-gold/5 ${style.className}`}
    >
      <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-white/45 blur-2xl" />
      <div className="relative flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/80 text-sm font-semibold text-gold shadow-sm shadow-gold/10">
          {style.icon}
        </span>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {detail.label}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-starlight">
            {detail.value}
          </p>
        </div>
      </div>
    </div>
  );
}
