import type { Metadata } from "next";
import Link from "next/link";
import { CTAPanel } from "@/components/CTAPanel";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/components/site";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudiesList } from "@/components/CaseStudiesList";
import { Words } from "@/components/Words";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "48 client stories from River Learning — manufacturers, IT services firms, food producers and more — showing the challenge, what we did and the result.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Real businesses. Real challenges. Measurable results."
        lede={`${CASE_STUDIES.length} stories from the businesses we've worked with — what was holding them back, what we did about it, and what changed.`}
        height={520}
        waveTop={370}
      >
        <Link href="/contact" className="btn btn-primary sm-h">Talk to us <Icon name="arrow" size={18} /></Link>
      </PageHeader>

      <section className="stats-band rv-band" aria-label="Results at a glance">
        <div className="in">
          <div className="stat-lg dark rv d0"><b>11% → 4%</b><span>Machine breakdown rate at a tobacco products manufacturer — roughly ₹2 Cr in annual benefit.</span></div>
          <div className="stat-lg hi rv d1"><b>60%</b><span>Revenue increase over two years after building a sales function from scratch.</span></div>
          <div className="stat-lg hi rv d2"><b>~50%</b><span>Drop in transportation costs after redesigning vehicle dispatch at an FMCG agri-food manufacturer.</span></div>
          <div className="stat-lg rv d3"><b>18 → 4</b><span>Months to launch an automotive marketplace that had been stuck for 18 months.</span></div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 72, paddingBottom: 40 }} aria-labelledby="cs-h">
        <div className="sec-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">All stories</div>
          <h2 id="cs-h" className="rvw"><Words text="Find a story that looks like your business." /></h2>
        </div>
        <CaseStudiesList />
      </section>

      <CTAPanel
        heading="Have a challenge like these?"
        body="Tell us where your business is stuck — we'll tell you honestly how we'd approach it."
        primary={{ label: "Start the conversation", href: "/contact" }}
        secondary={{ label: SITE.phone, href: SITE.phoneHref }}
      />
    </>
  );
}
