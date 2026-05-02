import type { Stat } from "@/lib/homepage-data";
import { SectionHeading } from "@/components/section-heading";

type AboutSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  profileLabel: string;
  profileInitials: string;
  profileName?: string;
  profileImageUrl?: string;
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
  stats,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center"
    >
      <div className="rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(216,185,107,0.12),rgba(43,26,85,0.68)_46%,rgba(7,8,22,0.98))] p-3 shadow-2xl shadow-black/20 sm:p-4">
        {profileImageUrl ? (
          <div
            role="img"
            aria-label={profileName || "Astrology profile"}
            className="aspect-[4/5] w-full rounded-xl border border-white/10 bg-cover bg-center"
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          />
        ) : (
          <div className="flex aspect-[4/5] items-end rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(247,239,225,0.08),rgba(7,8,22,0.42))] p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase text-gold">
                {profileLabel}
              </p>
              <p className="mt-2 text-4xl font-semibold text-starlight">
                {profileInitials}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="lg:pl-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-lg shadow-black/10"
            >
              <p className="text-2xl font-semibold text-gold sm:text-3xl">
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
