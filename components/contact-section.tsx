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
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {formattedPhoneNumber && sanitizedPhoneNumber ? (
            <div className="mt-7 inline-flex w-fit flex-col gap-3 rounded-2xl border border-[#1b8c4a]/20 bg-[linear-gradient(135deg,rgba(237,252,244,0.98),rgba(248,224,138,0.72))] px-5 py-4 shadow-xl shadow-gold/10 sm:flex-row sm:items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b8c4a]">
                <PhoneIcon />
                Call or WhatsApp
              </span>
              <a
                href={`https://wa.me/${sanitizedPhoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/90 px-4 py-2 text-lg font-semibold text-starlight shadow-sm shadow-gold/10 transition hover:text-[#1b8c4a]"
              >
                {formattedPhoneNumber}
              </a>
            </div>
          ) : null}
        </div>
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
  const style = getContactStyle(label, href);

  return (
    <a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      className={`group flex min-h-24 items-center gap-4 rounded-2xl border px-5 py-4 text-left shadow-lg transition hover:-translate-y-0.5 ${style.className}`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/85 shadow-sm">
        {style.icon}
      </span>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        <span className="mt-1 block text-xs font-medium opacity-75">
          {style.helper}
        </span>
      </span>
    </a>
  );
}

function getContactStyle(label: string, href: string) {
  const normalized = `${label} ${href}`.toLowerCase();

  if (normalized.includes("instagram")) {
    return {
      className:
        "border-[#df5d8f]/25 bg-[linear-gradient(135deg,rgba(255,245,250,0.98),rgba(255,218,188,0.78),rgba(226,219,255,0.72))] text-[#5a233f] shadow-[#df5d8f]/10 hover:border-[#df5d8f]/45",
      helper: "Reels and updates",
      icon: <InstagramIcon />,
    };
  }

  if (normalized.includes("whatsapp") || normalized.includes("wa.me")) {
    return {
      className:
        "border-[#25d366]/25 bg-[linear-gradient(135deg,rgba(237,252,244,0.98),rgba(214,247,226,0.82))] text-[#123d25] shadow-[#25d366]/10 hover:border-[#25d366]/45",
      helper: "Fast inquiry",
      icon: <WhatsAppIcon />,
    };
  }

  if (normalized.includes("youtube")) {
    return {
      className:
        "border-[#ff2d2d]/20 bg-[linear-gradient(135deg,rgba(255,246,246,0.98),rgba(255,218,218,0.82))] text-[#5a1616] shadow-[#ff2d2d]/10 hover:border-[#ff2d2d]/45",
      helper: "Videos and shorts",
      icon: <YouTubeIcon />,
    };
  }

  if (normalized.includes("mailto") || normalized.includes("email")) {
    return {
      className:
        "border-gold/25 bg-[linear-gradient(135deg,rgba(255,250,240,0.98),rgba(248,224,138,0.58))] text-starlight shadow-gold/10 hover:border-gold/45",
      helper: "Send an email",
      icon: <MailIcon />,
    };
  }

  return {
    className:
      "border-gold/25 bg-[linear-gradient(135deg,rgba(255,250,240,0.98),rgba(248,224,138,0.7))] text-starlight shadow-gold/10 hover:border-gold/45",
    helper: "Direct call",
    icon: <PhoneIcon />,
  };
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.2 4.8L9.4 9L7.8 10.6C8.9 13 11 15.1 13.4 16.2L15 14.6L19.2 16.8V19C19.2 19.7 18.7 20.2 18 20.2C10.1 20.2 3.8 13.9 3.8 6C3.8 5.3 4.3 4.8 5 4.8H7.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.5 19L6.4 15.8C5.8 14.7 5.5 13.4 5.5 12.1C5.5 8.1 8.6 5 12.5 5C16.4 5 19.5 8.1 19.5 12C19.5 15.9 16.4 19 12.5 19C11.2 19 10 18.7 8.9 18.1L5.5 19Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M10 9.3C10.2 12 12 13.8 14.7 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        height="13.5"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
        width="13.5"
        x="5.25"
        y="5.25"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="8" fill="currentColor" r="1" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        height="10"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
        width="16"
        x="4"
        y="7"
      />
      <path d="M11 10L15 12L11 14V10Z" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
        width="16"
        x="4"
        y="6"
      />
      <path
        d="M5.5 8.5L12 13L18.5 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
