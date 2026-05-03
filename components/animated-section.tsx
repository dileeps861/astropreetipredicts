"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, amount: 0.04 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
