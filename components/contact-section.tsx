import type { CtaLink } from "@/lib/homepage-data";
import { SectionHeading } from "@/components/section-heading";

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  links: CtaLink[];
};

export function ContactSection({
  eyebrow,
  title,
  description,
  links,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(251,244,229,0.052),rgba(255,255,255,0.02))] p-7 shadow-2xl shadow-black/10 sm:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, label }: CtaLink) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/[0.08] bg-deep-blue/45 px-5 py-4 text-center text-sm font-semibold text-starlight shadow-lg shadow-black/[0.08] transition hover:border-gold/50 hover:text-gold-soft"
    >
      {label}
    </a>
  );
}
