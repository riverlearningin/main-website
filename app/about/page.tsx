import type { Metadata } from "next";
import Link from "next/link";
import { Boat } from "@/components/Boat";
import { Carousel, Slide } from "@/components/Carousel";
import { CTAPanel } from "@/components/CTAPanel";
import { Icon, type IconName } from "@/components/Icon";
import { SITE } from "@/components/site";
import { Wave } from "@/components/Wave";
import { Words } from "@/components/Words";

export const metadata: Metadata = {
  title: "About Gopal Kamath",
  description:
    "Gopal Kamath, founder of River Learning: 30+ years from the shop floor to the boardroom, helping organisations turn chaotic operations into disciplined, growth-ready businesses.",
  alternates: { canonical: "/about" },
};

const JOURNEY: { icon?: IconName; who: string; title: string; text: string }[] = [
  { icon: "factory", who: "Lincoln Industrial", title: "Sales & Service Engineer", text: "Designed, supplied, installed and commissioned automatic lubrication systems for integrated steel plants across India — a ground-level view of heavy industry." },
  { icon: "monitor", who: "Tech Mahindra · 10 years", title: "Engineer → Delivery lead → Dealmaker", text: "COBOL billing development in the UK, mission-critical support for British Telecom, global pre-sales and bid leadership, and new-market accounts in Germany." },
  { icon: "users", who: "Amdocs", title: "Director, Business Operations", text: "Led a 200+ person team delivering managed billing services for Tier-1 mobile operators worldwide, and a LEAN transformation with McKinsey for 20%+ cost optimisation." },
  { who: "River Learning · 2011 – today", title: "Founder & Consultant", text: "Hands-on consulting with owners, boards and C-suite leaders — ERP and SAP rollouts, shop-floor digitisation, Lean and 5S, KPI-driven performance management." },
];

const STATS = [
  { v: "30+", l: "years of industry and consulting experience" },
  { v: "200+", l: "person team led at Amdocs", hi: true },
  { v: "20%+", l: "cost optimisation through LEAN with McKinsey" },
  { v: "48+", l: "business transformation case studies", dark: true },
];

const RESULTS = [
  "A tobacco manufacturer cut machine breakdowns from 11% to 4%",
  "A furniture company freed up shop-floor space while cutting order execution time",
  "A 45-year-old manufacturer grew revenue 60% in two years",
  "Dozens of businesses replaced spreadsheets, guesswork and gut instinct with systems, data and clarity",
];

const STRENGTHS = [
  "Business Transformation",
  "Process Improvement (Lean, 5S)",
  "Project & Change Management",
  "Performance Management (KPI Design, Dashboards)",
  "Software Project Management",
  "Cross-Functional Leadership",
  "Family Business Advisory",
];

const INDUSTRIES = ["Heavy Engineering", "Furniture", "Food", "FMCG", "IT Services", "Amusement Parks", "Education", "Healthcare"];

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="band" aria-hidden="true" />
        <div aria-hidden="true">
          <Wave shape={1} color="#008ED5" opacity={0.45} top={560} />
          <Wave shape={2} color="#20325B" opacity={0.16} top={594} />
          <Wave shape={3} color="#008ED5" opacity={0.25} top={628} />
        </div>
        <div className="in">
          <div className="txt">
            <div className="eyebrow ld l0">About Gopal</div>
            <h1><Words text="Gopal Kamath" load /></h1>
            <div className="role ld l3">Business Management Consultant · Founder, River Learning</div>
            <p className="sum ld l4">
              For over 30 years, Gopal has helped organisations — from heavy engineering shops to food, FMCG and furniture manufacturers — turn chaotic, legacy operations into disciplined, measurable, growth-ready businesses.
            </p>
            <div className="acts ld l5">
              <Link href="/contact" className="btn btn-primary sm-h">Talk to Gopal <Icon name="arrow" size={18} /></Link>
              <Link href="/services" className="btn btn-ghost sm-h">View services</Link>
            </div>
          </div>
          <div className="portrait ld l4">
            <span className="gk" aria-hidden="true">GK</span>
            <span className="lab">[Portrait of Gopal Kamath]</span>
            <div className="stamp"><b>30+ years</b><span>shop floor · IT · boardroom</span></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ gap: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="eyebrow rv">The journey</div>
          <h2 className="h2 rvw" style={{ maxWidth: 760 }}><Words text="From the shop floor to the boardroom." /></h2>
          <p className="lead rv d1" style={{ maxWidth: 640 }}>Engineer, delivery lead and dealmaker in one career — a rare fluency across operations, the IT stack and the boardroom.</p>
        </div>
        <div className="tl-wrap">
          <div className="tl-line rv-line" aria-hidden="true" />
          <Carousel cols={4} gap={0} count={JOURNEY.length} label="Career journey">
            {JOURNEY.map((j, i) => (
              <Slide key={j.who}>
                <div className={`tl rv d${i}`}>
                  <span className={`dot${j.icon ? "" : " fin"}`}>
                    {j.icon ? <Icon name={j.icon} /> : <Boat tone="dark" strokeWidth={38} small />}
                  </span>
                  <div className="who">{j.who}</div>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </div>
              </Slide>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="stats-band rv-panel" aria-label="Career highlights">
        <div className="in">
          {STATS.map((s, i) => (
            <div key={s.v} className={`stat-lg rv d${i % 4}${s.hi ? " hi" : ""}${s.dark ? " dark" : ""}`}>
              <b>{s.v}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sec approach">
        <div className="eyebrow rv">Gopal&apos;s approach</div>
        <blockquote className="rv">
          Understand the business as deeply as its owner does, design a solution that&apos;s practical — not theoretical — and <span>stay in the trenches until it&apos;s truly working.</span>
        </blockquote>
      </section>

      <section className="sec facts">
        <div className="fact rv-l">
          <h3>Results that speak for themselves</h3>
          <ul className="ticks">
            {RESULTS.map((r) => (
              <li key={r}><Icon name="check" size={18} stroke={2.5} /><span>{r}</span></li>
            ))}
          </ul>
        </div>
        <div className="fact rv-r">
          <h3>Core strengths</h3>
          <div className="chips">{STRENGTHS.map((s) => <span key={s} className="chip">{s}</span>)}</div>
          <h4>Industries</h4>
          <div className="chips">{INDUSTRIES.map((s) => <span key={s} className="chip outline" style={{ color: "#20325B" }}>{s}</span>)}</div>
        </div>
      </section>

      <CTAPanel
        heading="Every transformation starts with one honest conversation."
        body="Tell Gopal where your business stands today — and where you want it to go."
        primary={{ label: "Start the conversation", href: "/contact" }}
        secondary={{ label: SITE.email, href: `mailto:${SITE.email}` }}
      />
    </>
  );
}
