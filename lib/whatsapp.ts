const defaultPhoneNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER ||
  process.env.WHATSAPP_PHONE_NUMBER ||
  "919818441342";

export function createWhatsAppInquiryUrl({
  phoneNumber = defaultPhoneNumber,
  serviceTitle,
  template,
}: {
  phoneNumber?: string;
  serviceTitle: string;
  template?: string;
}) {
  const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const message = [`Service: ${serviceTitle}`, template || ""]
    .filter(Boolean)
    .join("\n\n");

  return `https://wa.me/${sanitizedPhoneNumber}?text=${encodeURIComponent(
    message,
  )}`;
}
