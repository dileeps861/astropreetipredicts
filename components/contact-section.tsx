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
      className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(250,239,211,0.76))] p-7 shadow-2xl shadow-gold/10 sm:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, label }: CtaLink) {
  const isExternalLink = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      className="rounded-full border border-gold/20 bg-white/85 px-5 py-4 text-center text-sm font-semibold text-starlight shadow-lg shadow-gold/5 transition hover:border-gold/50 hover:text-gold"
    >
      {label}
    </a>
  );
}
