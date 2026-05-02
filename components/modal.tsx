"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-deep-blue/85 px-4 backdrop-blur-xl"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
          onClick={onClose}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-deep-blue shadow-2xl shadow-black/25"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-5 py-4">
              <h2 className="text-base font-semibold text-starlight">
                {title}
              </h2>
              <button
                aria-label="Close modal"
                className="rounded-full border border-white/[0.08] px-3 py-1 text-sm text-muted-foreground transition hover:border-gold/50 hover:text-gold-soft"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
