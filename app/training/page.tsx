import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Boat } from "@/components/Boat";
import { Carousel, Slide } from "@/components/Carousel";
import { CTAPanel } from "@/components/CTAPanel";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/components/site";
import { Words } from "@/components/Words";
import { INTRO, TRACKS } from "@/lib/training";

export const metadata: Metadata = {
  title: "Training programmes",
  description:
    "21 practical training programmes in management, sales and people skills, delivered in person or online and customised to your industry, team size and business context.",
  alternates: { canonical: "/training" },
};

export default function Training() {
  return (
    <>
      <PageHeader
        eyebrow="Training"
        title="Build capability that outlasts any single project."
        lede="Focused, practical programmes that build lasting capability inside your organisation — not one-off workshops that fade after a week, but skills your teams actually apply on the job."
        height={520}
        waveTop={370}
      >
        <Link href="/contact" className="btn btn-primary sm-h">Plan a programme <Icon name="arrow" size={18} /></Link>
      </PageHeader>

      <section className="sec" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <Carousel cols={3} gap={16} count={INTRO.length} label="How our training works">
          {INTRO.map((c, i) => (
            <Slide key={c.title}>
              <div className={`t-card rv d${i}`}>
                <span className="iconbox"><Icon name={c.icon} size={23} /></span>
                <div><h3>{c.title}</h3><p>{c.text}</p></div>
              </div>
            </Slide>
          ))}
        </Carousel>
      </section>

      <section className="sec" style={{ paddingTop: 72, paddingBottom: 40 }}>
        {TRACKS.map((t, ti) => (
          <Accordion
            key={t.title}
            as="h2"
            className="trk"
            headClassName="trk-head"
            defaultOpen={ti === 0}
            head={
              <>
                <span className="iconbox rv-l"><Icon name={t.icon} size={25} /></span>
                <span className="trk-t">
                  <span className="trk-label">{t.label}</span>
                  <span className="trk-title rvw"><Words text={t.title} /></span>
                </span>
              </>
            }
          >
            <p className="trk-desc">{t.desc}</p>
            <ul className="trk-items">
              {t.items.map(([name, text], i) => (
                <li key={name} className={i % 2 === 0 ? "rv-l" : "rv-r"}>
                  <Icon name="check" size={18} stroke={2.5} />
                  <div><b>{name}</b><span>{text}</span></div>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </section>

      <section className="sec" style={{ paddingTop: 0, paddingBottom: 20 }}>
        <div className="grow-panel rv-grow">
          <div className="mini-sea" aria-hidden="true">
            <Boat small />
            <svg className="wa" style={{ position: "absolute", left: 0, top: 49, width: 328, height: 24 }} viewBox="0 0 328 24" fill="none">
              <path d="M0 12 Q 15 4 30 12 T 60 12 T 90 12 T 120 12 T 150 12 T 180 12 T 210 12 T 240 12 T 270 12 T 300 12 T 330 12 T 360 12 T 390 12 T 420 12" stroke="#008ED5" strokeOpacity="0.6" strokeWidth="2.5" />
            </svg>
            <svg className="wb" style={{ position: "absolute", left: 0, top: 59, width: 328, height: 24 }} viewBox="0 0 328 24" fill="none">
              <path d="M0 12 Q 20 5 40 12 T 80 12 T 120 12 T 160 12 T 200 12 T 240 12 T 280 12 T 320 12 T 360 12 T 400 12 T 440 12" stroke="#20325B" strokeOpacity="0.25" strokeWidth="2" />
            </svg>
          </div>
          <p>All programmes are hands-on and customised to your industry, team size and business context — because training that doesn&apos;t reflect your reality doesn&apos;t stick.</p>
        </div>
      </section>

      <CTAPanel
        heading="Let's design a programme for your team."
        body="Tell us who you want to train and what you want them to do differently — we'll shape the programme around it."
        primary={{ label: "Plan a programme", href: "/contact" }}
        secondary={{ label: SITE.phone, href: SITE.phoneHref }}
      />
    </>
  );
}
