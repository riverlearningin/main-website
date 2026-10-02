import type { Metadata } from "next";
import { CTAPanel } from "@/components/CTAPanel";
import { PageHeader } from "@/components/PageHeader";
import { ServicesList } from "@/components/ServicesList";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: "Consulting services",
  description:
    "19 consulting services from growth strategy to the shop floor: diagnostics, process improvement and AI, software implementation, talent management, sales and finance setup, and compliance.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Consulting services"
        title="Practical solutions, built around your business — not a template."
        lede="From growth strategy to the shop floor, we diagnose what's holding you back, design the fix and implement it alongside your team."
        height={470}
        waveTop={320}
      />
      <section className="sec" style={{ paddingTop: 64, gap: 36 }}>
        <ServicesList />
      </section>
      <CTAPanel
        heading="Not sure where to start?"
        body="Our Organisation, Sales and Ops Diagnostics give you a clear, prioritised roadmap of where to act first."
        primary={{ label: "Book a diagnostic", href: "/contact" }}
        secondary={{ label: SITE.phone, href: SITE.phoneHref }}
      />
    </>
  );
}
