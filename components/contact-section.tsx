import type { CtaLink } from "@/lib/homepage-data";
import { SectionHeading } from "@/components/section-heading";

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  whatsappPhoneNumber?: string;
  links: CtaLink[];
};

export function ContactSection({
  eyebrow,
  title,
  description,
  whatsappPhoneNumber,
  links,
}: ContactSectionProps) {
  const formattedPhoneNumber = formatPhoneNumber(whatsappPhoneNumber);
  const sanitizedPhoneNumber = whatsappPhoneNumber?.replace(/\D/g, "");

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
        {formattedPhoneNumber && sanitizedPhoneNumber ? (
          <div className="mt-7 inline-flex w-fit flex-col gap-3 rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,rgba(255,244,221,0.98),rgba(248,224,138,0.72))] px-5 py-4 shadow-xl shadow-gold/10 sm:flex-row sm:items-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Call or WhatsApp
            </span>
            <a
              href={`https://wa.me/${sanitizedPhoneNumber}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/85 px-4 py-2 text-lg font-semibold text-starlight shadow-sm shadow-gold/10 transition hover:text-gold"
            >
              {formattedPhoneNumber}
            </a>
          </div>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function formatPhoneNumber(phoneNumber?: string) {
  const digits = phoneNumber?.replace(/\D/g, "");

  if (!digits) {
    return undefined;
  }

  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }

  return `+${digits}`;
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
