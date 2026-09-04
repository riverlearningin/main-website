"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection } from "@/components/FadeInSection";
import { ProfileImage } from "@/components/ProfileImage";
import { strengths, timeline } from "@/lib/data/site";

export default function AboutPage() {
  return (
    <main className="page-shell section-padding">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeInSection>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
            <ProfileImage />
            <div className="mt-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">Gopal Kamath</div>
              <h1 className="text-h2 mt-3 text-[#1B2A4A]">Business Management Consultant</h1>
              <p className="text-body mt-4 text-slate-600">
                For over 30 years, Gopal Kamath has helped organizations turn chaotic, legacy operations into disciplined, measurable, growth-ready businesses.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">About Gopal</div>
          <h2 className="text-h1 mt-3 text-[#1B2A4A]">A rare blend of shop-floor reality, technology delivery, and boardroom leadership.</h2>
          <div className="mt-6 space-y-5 text-body text-slate-600">
            <p>
              His career began on the shop floor itself as a Sales and Service Engineer at Lincoln Industrial, where he designed, supplied, installed, and commissioned automatic lubrication systems for Integrated Steel Plants across India.
            </p>
            <p>
              From there, Gopal moved into technology delivery at Tech Mahindra, then led large-scale operations at Amdocs as Director of Business Operations. Since 2011, he has built River Learning around the same principle: understand the business as deeply as its owner does, design a practical solution, and stay in the trenches until it truly works.
            </p>
            <p>
              The results speak for themselves: a tobacco manufacturer that cut machine breakdowns from 11% to 4%, a furniture company that freed up shop-floor space while cutting order execution time, and a 45-year-old manufacturer that grew revenue 60% in two years.
            </p>
          </div>
        </FadeInSection>
      </div>

      <section className="mt-16">
        <FadeInSection className="mb-8">
          <h2 className="text-h2 text-[#1B2A4A]">Career Timeline</h2>
        </FadeInSection>
        <div className="relative space-y-0 lg:pl-8">
          <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-gradient-to-b from-[#1E9BE0] to-[#7C5CFC] lg:block" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pb-8 lg:pb-10"
            >
              <div className="absolute left-0 top-6 hidden h-6 w-6 rounded-full border-4 border-white bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] lg:block" />
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(27,42,74,0.04)] lg:ml-12">
                <div className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1E9BE0]">{item.period}</div>
                <h3 className="text-h2 mt-2 text-[#1B2A4A]">{item.title}</h3>
                <p className="mt-3 text-body text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <FadeInSection>
          <div className="rounded-[28px] border border-slate-200 bg-[#F7F9FC] p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">Results</div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white p-5">
                <div className="text-stat text-4xl text-[#22C55E]">64%</div>
                <div className="mt-2 text-sm text-slate-600">Machine breakdown reduction</div>
              </div>
              <div className="rounded-xl bg-white p-5">
                <div className="text-stat text-4xl text-[#22C55E]">60%</div>
                <div className="mt-2 text-sm text-slate-600">Revenue growth over two years</div>
              </div>
              <div className="rounded-xl bg-white p-5">
                <div className="text-stat text-4xl text-[#22C55E]">₹2Cr</div>
                <div className="mt-2 text-sm text-slate-600">Annual operational benefit</div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="mt-16">
        <FadeInSection className="mb-6">
          <h2 className="text-h2 text-[#1B2A4A]">Core Strengths</h2>
        </FadeInSection>
        <div className="flex flex-wrap gap-3">
          {strengths.map((strength) => (
            <span key={strength} className="rounded-full border border-[#1E9BE0]/20 bg-[#1E9BE0]/5 px-4 py-2 text-sm font-medium text-slate-700">
              {strength}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-16 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(30,155,224,0.2)] transition hover:scale-[1.03]"
        >
          Contact Gopal <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
