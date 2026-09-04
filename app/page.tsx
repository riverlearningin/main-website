"use client";

import Link from "next/link";
import { BriefcaseBusiness, GraduationCap, Lightbulb, ShieldCheck, Target, TrendingUp, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FadeInSection } from "@/components/FadeInSection";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { StatCounter } from "@/components/StatCounter";

const valueCards = [
  { label: "Businesses transformed", value: 48, suffix: "+", color: "gradient-text" },
  { label: "Years of experience", value: 30, suffix: "+", color: "gradient-text" },
  { label: "Breakdown reduction", value: 64, suffix: "%", color: "text-[#22C55E]" },
  { label: "Revenue growth", value: 60, suffix: "%", color: "text-[#22C55E]" },
];

const pillars = [
  { icon: BriefcaseBusiness, title: "Consulting", description: "Hands-on business solutions built around your reality, not a template.", href: "/services" },
  { icon: GraduationCap, title: "Training", description: "Practical programs that build capability your teams use on the job.", href: "/learning" },
  { icon: Users, title: "Mentoring", description: "One-on-one leadership and growth guidance for high-stakes moments.", href: "/learning" },
  { icon: ShieldCheck, title: "Certifications", description: "Progressive certification tracks that validate real capability and growth.", href: "/learning" },
  { icon: Lightbulb, title: "Products", description: "Purpose-built tools to structure hiring, execution, and operations.", href: "/products" },
];

const principles = [
  {
    icon: Users,
    title: "We've sat where you sit.",
    description: "With 30+ years spanning shop floors, boardrooms, and global technology delivery, Gopal Kamath brings a rare fluency across operations, IT, and business strategy.",
  },
  {
    icon: Target,
    title: "We measure success in results.",
    description: "Cost reductions, revenue growth, faster execution, cleaner data, happier customers — not frameworks for their own sake.",
  },
  {
    icon: TrendingUp,
    title: "We build systems that outlast the engagement.",
    description: "Our goal is to leave your business stronger with processes, people, and tools that keep growing after we leave.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="page-shell section-padding">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((item) => (
            <FadeInSection key={item.label}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_30px_rgba(27,42,74,0.04)]">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                <div className="mt-4 flex items-end justify-center">
                  <StatCounter value={item.value} suffix={item.suffix} color={item.color} />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="page-shell section-padding">
        <FadeInSection className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">What We Do</div>
          <h2 className="text-h2 mt-3 text-[#1B2A4A]">Practical solutions across strategy, operations, and people.</h2>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map(({ icon: Icon, title, description, href }) => (
            <FadeInSection key={title}>
              <Link href={href} className="group block h-full rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(27,42,74,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#7C5CFC]/35 hover:shadow-[0_18px_40px_rgba(124,92,252,0.09)]">
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-[#1E9BE0]/10 to-[#7C5CFC]/10 p-3 text-[#1E9BE0]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-h3 text-[#1B2A4A]">{title}</h3>
                <p className="mt-3 text-body text-slate-600">{description}</p>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="page-shell section-padding">
        <FadeInSection className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">Why River Learning</div>
          <h2 className="text-h2 mt-3 text-[#1B2A4A]">We bring business context, operational depth, and real accountability.</h2>
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, description }) => (
            <FadeInSection key={title}>
              <div className="h-full rounded-[24px] border border-slate-200 bg-[#F7F9FC] p-7">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-[#1E9BE0]/10 to-[#7C5CFC]/10 p-3 text-[#1E9BE0]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-h2 text-[#1B2A4A]">{title}</h3>
                <p className="mt-4 text-body text-slate-600">{description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
