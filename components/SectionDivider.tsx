"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative my-10 h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-slate-200/80" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#1E9BE0] to-[#7C5CFC]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
