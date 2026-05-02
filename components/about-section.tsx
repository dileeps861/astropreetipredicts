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
      className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
    >
      <div className="rounded-[1.75rem] border border-white/[0.08] bg-[linear-gradient(150deg,rgba(215,187,115,0.10),rgba(38,22,79,0.46)_48%,rgba(6,7,19,0.9))] p-3 shadow-2xl shadow-black/[0.12] sm:p-4">
        {profileImageUrl ? (
          <div
            role="img"
            aria-label={profileName || "Astrology profile"}
            className="aspect-[4/5] w-full rounded-[1.35rem] border border-white/[0.08] bg-cover bg-center"
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          />
        ) : (
          <div className="flex aspect-[4/5] items-end rounded-[1.35rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(251,244,229,0.07),rgba(6,7,19,0.36))] p-6">
            <div>
              <p className="text-xs font-semibold uppercase text-gold-soft">
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
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-lg shadow-black/[0.08]"
            >
              <p className="text-3xl font-semibold text-gold-soft">
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
