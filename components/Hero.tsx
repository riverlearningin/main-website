"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#10192E] pb-20 pt-28 lg:pb-32 lg:pt-40">
      {/* ── Chaos → Clarity background motif ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Scattered dots — left "chaos" side */}
        {[
          [8, 20], [12, 55], [5, 78], [18, 35], [3, 90], [22, 12], [15, 68],
          [9, 44], [25, 82], [6, 30], [20, 60], [11, 15],
        ].map(([left, top], i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#1E9BE0]/30"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
        {/* Larger accent nodes */}
        {[
          [15, 25], [7, 65], [20, 50],
        ].map(([left, top], i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute h-3 w-3 rounded-full border border-[#7C5CFC]/30"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}

        {/* Gradient glow — right "clarity" side */}
        <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#1E9BE0]/10 to-[#7C5CFC]/10 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-[200px] w-[200px] rounded-full bg-[#7C5CFC]/8 blur-2xl" />

        {/* Flowing line — resolving "into order" */}
        <svg
          className="absolute bottom-0 left-0 h-40 w-full opacity-10"
          viewBox="0 0 1280 160"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 120 C200 60 400 140 640 80 C880 20 1080 100 1280 60"
            stroke="url(#waveGrad)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#1E9BE0" />
              <stop offset="100%" stopColor="#7C5CFC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Hero content ── */}
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E9BE0]/30 bg-[#1E9BE0]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]"
          >
            30+ years · 48+ businesses transformed
          </motion.div>

          <motion.h1
            className="text-hero text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Turning Business Challenges Into{" "}
            <span className="bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] bg-clip-text text-transparent">
              Measurable Growth
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            For over 30 years, businesses across heavy engineering, manufacturing, food &amp; FMCG,
            and IT services have trusted River Learning to turn chaos into clarity — and clarity into
            growth.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <Link
              href="/contact"
              id="hero-cta-primary"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(30,155,224,0.3)] transition hover:scale-[1.03]"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-[#1E9BE0]/60 hover:bg-white/10"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>

        {/* Floating stat badge */}
        <motion.div
          className="mt-14 inline-flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-white/5 p-5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E9BE0] to-[#7C5CFC]">
            <span className="text-xl font-bold text-white">48</span>
          </div>
          <div>
            <div className="font-space text-2xl font-bold text-white">48+</div>
            <div className="text-sm text-slate-400">Businesses transformed</div>
          </div>
          <div className="ml-4 border-l border-slate-700 pl-4">
            <div className="text-sm text-slate-400">Contact us</div>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-sm font-semibold text-[#1E9BE0] hover:underline"
            >
              {contactInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
