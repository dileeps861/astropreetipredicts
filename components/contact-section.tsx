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
      className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(247,239,225,0.055),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-black/15 sm:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
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
      className="rounded-full border border-white/10 bg-deep-blue/50 px-5 py-4 text-center text-sm font-semibold text-starlight shadow-lg shadow-black/10 transition hover:border-gold/60 hover:text-gold"
    >
      {label}
    </a>
  );
}
