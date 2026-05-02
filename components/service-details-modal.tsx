"use client";

import type { Service } from "@/lib/homepage-data";
import { createWhatsAppInquiryUrl } from "@/lib/whatsapp";
import { AnimatePresence, motion } from "framer-motion";

type ServiceDetailsModalProps = {
  service: Service | null;
  onClose: () => void;
};

export function ServiceDetailsModal({
  service,
  onClose,
}: ServiceDetailsModalProps) {
  const inquiryUrl = service
    ? service.whatsappUrl ||
      createWhatsAppInquiryUrl({
        phoneNumber: service.whatsappPhoneNumber,
        serviceTitle: service.title,
        template: service.whatsappTemplate,
      })
    : "";

  return (
    <AnimatePresence>
      {service ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#fff6df]/85 px-4 py-8 backdrop-blur-xl"
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-gold/20 bg-[#fffaf0] shadow-2xl shadow-gold/20"
            initial={{ opacity: 0, rotateX: -8, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotateX: 6, scale: 0.98, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(248,224,138,0.42))] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase text-gold">
                  {service.detail}
                </p>
                <h2 className="mt-5 text-4xl font-semibold text-starlight sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-base text-muted-foreground">
                  {service.longDescription || service.description}
                </p>
                <div className="mt-8 rounded-2xl border border-gold/15 bg-white/75 p-5">
                  <p className="text-sm text-muted-foreground">
                    Starting from
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gold">
                    {service.price}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={inquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gold-soft px-6 text-sm font-semibold text-starlight shadow-lg shadow-gold/15 transition hover:-translate-y-0.5"
                  >
                    Inquire Now
                  </a>
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-gold/25 bg-white/75 px-6 text-sm font-semibold text-starlight transition hover:border-gold/50 hover:text-gold"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="space-y-7 p-7 sm:p-9">
                {service.highlights?.length ? (
                  <DetailList title="What This Covers" items={service.highlights} />
                ) : null}
                {service.bestFor?.length ? (
                  <DetailList title="Best For" items={service.bestFor} />
                ) : null}
                {service.subServices?.length ? (
                  <div>
                    <h3 className="text-sm font-semibold uppercase text-gold">
                      Reading Options
                    </h3>
                    <div className="mt-4 space-y-3">
                      {service.subServices.map((subService) => (
                        <div
                          key={subService.title}
                          className="rounded-2xl border border-gold/15 bg-white/75 p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-semibold text-starlight">
                              {subService.title}
                            </h4>
                            {subService.price ? (
                              <span className="shrink-0 font-semibold text-gold">
                                {subService.price}
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {subService.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase text-gold">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-gold/15 bg-white/75 px-4 py-3 text-sm text-muted-foreground"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
