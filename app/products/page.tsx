import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Carousel, Slide } from "@/components/Carousel";
import { CTAPanel } from "@/components/CTAPanel";
import { Icon, type IconName } from "@/components/Icon";
import { HunrReport, TraqBoard } from "@/components/Mocks";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: "Products — hunR, TraQ, Appraisal System, AI Agents",
  description:
    "Digital tools that bring structure and clarity to day-to-day operations: hunR skills assessment, TraQ project execution, an Employee Appraisal System and AI Agents.",
  alternates: { canonical: "/products" },
};

const HUNR_POINTS = [
  "Built for Business Heads, Recruiters and HR Managers",
  "Hiring assessments, skill certification and internal skill audits",
  "Removes subjective, gut-feel hiring and filters weak candidates early",
];

const HUNR_STEPS = [
  ["Book your assessment", "Choose the tests that matter for the role."],
  ["Share candidate details", "Send us who you'd like assessed."],
  ["hunR does the rest", "Assigns the test, evaluates results and sends a detailed report."],
  ["You review and decide", "Make hiring calls on evidence, not gut feel."],
];

const TEST_GROUPS: [string, string[]][] = [
  ["Functions", ["HR", "Sales & Marketing", "Operations", "Finance", "General Management"]],
  ["Core tests", ["Basic English", "Advanced English", "Aptitude", "HR", "Sales"]],
  ["Specialised", ["Real Estate (RERA)", "Accounting", "QA IATF16949", "ISO9001", "Fabrication", "DotNet", "Java"]],
];

const FORMATS: [IconName, string][] = [
  ["checkSquare", "Multiple choice"],
  ["doc", "Written responses"],
  ["eye", "Media-based"],
  ["video", "Recorded video answers"],
];

const TRAQ_FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: "grid", title: "One dashboard, every project", text: "All up-to-date plans in one place — drill into plan-vs-actual, % completion and task groupings." },
  { icon: "alert", title: "Catch issues early", text: "Every issue across every project in one view, with overdue and critical items flagged in red." },
  { icon: "eye", title: "Control who sees what", text: "Give each user access only to relevant projects — including what your customers can see." },
  { icon: "refresh", title: "Replanning made simple", text: "Change one task and the rest of the plan reschedules automatically." },
  { icon: "mobile", title: "Stay connected on the move", text: "A mobile app to view tasks, report progress, raise issues and comment from anywhere." },
  { icon: "users", title: "Built for real teams", text: "Visibility for internal and sales teams, customer updates, vendor sharing, useful MIS and instant alerts." },
];

const TRAQ_ROWS = [
  { name: "Plant expansion", pct: 72, badge: "On track" },
  { name: "Showroom fit-out", pct: 45, badge: "2 issues", err: true },
  { name: "New line commissioning", pct: 58, badge: "On track" },
  { name: "ERP rollout", pct: 90, badge: "On track", desktopOnly: true },
  { name: "Vendor onboarding", pct: 30, badge: "Overdue", err: true, desktopOnly: true },
];

const BIG: { id: string; icon: IconName; kick: string; title: string; text: string; points: string[] }[] = [
  {
    id: "appraisal", icon: "clipboard", kick: "Performance", title: "Employee Appraisal System",
    text: "A structured, transparent appraisal platform that replaces subjective, once-a-year reviews with an ongoing, KPI-driven process.",
    points: ["Role-based goals and systematic tracking", "Outcomes linked to development plans", "Connected to promotions and compensation"],
  },
  {
    id: "ai", icon: "chip", kick: "Automation", title: "AI Agents",
    text: "Purpose-built AI agents that automate repetitive business workflows — freeing your team's time for higher-value work.",
    points: ["Data entry and reporting", "Routine customer communication", "Routine vendor communication"],
  },
];

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="ticks">
      {items.map((t) => (
        <li key={t}><Icon name="check" size={18} stroke={2.5} /><span>{t}</span></li>
      ))}
    </ul>
  );
}

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Our discipline, built into software."
        lede="Beyond consulting and training, River Learning has built a suite of digital tools that bring the same structure and clarity directly into your day-to-day operations."
        height={520}
        waveTop={370}
      >
        <a className="chip-link" href="#hunr"><Icon name="search" size={18} />hunR</a>
        <a className="chip-link" href="#traq"><Icon name="grid" size={18} />TraQ</a>
        <a className="chip-link" href="#appraisal"><Icon name="clipboard" size={18} />Employee Appraisal</a>
        <a className="chip-link" href="#ai"><Icon name="chip" size={18} />AI Agents</a>
      </PageHeader>

      {/* ───────── hunR ───────── */}
      <section id="hunr" className="sec pr-sec">
        <div className="pr-two">
          <div className="pr-copy rv-l">
            <div className="pr-name"><b>hunR</b><span className="chip outline">Skills Assessment System</span></div>
            <p className="pr-tag">“Assess to find the best.”</p>
            <p className="lead rv d1">
              An online, subscription-based skill assessment platform that helps enterprises hire smarter and faster — no installation fees, no licence fees, just pay per use.
            </p>
            <Ticks items={HUNR_POINTS} />
            <div className="acts">
              <Link href="/contact" className="btn btn-primary sm-h">Book a hunR demo <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
          <div className="pr-stage rv-r"><HunrReport /></div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 className="h3-26">How it works</h3>
          <Carousel cols={4} gap={16} count={HUNR_STEPS.length} label="How hunR works">
            {HUNR_STEPS.map(([t, d], i) => (
              <Slide key={t}>
                <div className={`card how4 rv d${i}`}>
                  <span className="num">0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Slide>
            ))}
          </Carousel>
        </div>

        <Accordion
          className="tests-acc rv"
          head={
            <>
              <span className="iconbox" style={{ width: 42, height: 42, borderRadius: 12 }}><Icon name="checkSquare" size={19} /></span>
              <span style={{ fontSize: 17, fontWeight: 800, color: "#1A2A4D" }}>See all tests &amp; question formats</span>
            </>
          }
        >
          <div className="tests">
            <div className="box rv-l">
              <h3>Tests available</h3>
              {TEST_GROUPS.map(([g, items]) => (
                <div key={g} className="grp">
                  <div>{g}</div>
                  <div className="chips">{items.map((i) => <span key={i} className="chip">{i}</span>)}</div>
                </div>
              ))}
              <p className="note">Fully customised tests available on request.</p>
            </div>
            <div className="box rv-r">
              <h3>Flexible question formats</h3>
              <div className="fmts">
                {FORMATS.map(([icon, label]) => (
                  <div key={label}><span className="iconbox"><Icon name={icon} size={18} /></span><span>{label}</span></div>
                ))}
              </div>
              <p className="note">Assess exactly what matters for the role.</p>
            </div>
          </div>
        </Accordion>

        <figure className="quote-card rv-grow" style={{ margin: 0 }}>
          <span className="mk" aria-hidden="true">“</span>
          <blockquote style={{ margin: 0 }}>
            <p>hunR has now become a backbone of our hiring process and has really helped us in improving the quality of hires in our organization.</p>
            <figcaption className="by"><strong>Rohan Munot</strong> · MD, Harnex Systems Pvt. Ltd, Pune</figcaption>
          </blockquote>
        </figure>
      </section>

      {/* ───────── TraQ ───────── */}
      <section id="traq" className="traq-sec rv-panel">
        <div className="sec pr-sec" style={{ gap: 56 }}>
          <div className="pr-two traq">
            <div className="pr-stage white rv-l"><TraqBoard rows={TRAQ_ROWS} /></div>
            <div className="pr-copy rv-r">
              <div className="pr-name"><b>TraQ</b><span className="chip outline">Project Execution Management</span></div>
              <p className="pr-tag">“Take the stress out of project monitoring.”</p>
              <p className="lead rv d1" style={{ maxWidth: 540 }}>
                Running multiple projects at once often means chasing status updates, discovering problems too late and losing hours to replanning. TraQ was built to solve exactly that.
              </p>
              <div className="acts">
                <Link href="/contact" className="btn btn-primary sm-h">Book a TraQ demo <Icon name="arrow" size={18} /></Link>
              </div>
            </div>
          </div>
          <div className="feat3">
            <Carousel cols={3} gap={16} count={TRAQ_FEATURES.length} label="TraQ features">
              {TRAQ_FEATURES.map((f, i) => (
                <Slide key={f.title}>
                  <div className={`card rv d${i % 3}`}>
                    <span className="iconbox"><Icon name={f.icon} /></span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* ───────── Appraisal + AI ───────── */}
      <section className="sec" style={{ paddingBottom: 60 }}>
        <Carousel cols={2} gap={20} count={BIG.length} label="More products">
          {BIG.map((b, i) => (
            <Slide key={b.id}>
              <div id={b.id} className={`big ${i === 0 ? "rv-l" : "rv-r"}`}>
                <span className="iconbox"><Icon name={b.icon} size={27} /></span>
                <div>
                  <div className="kick">{b.kick}</div>
                  <h3>{b.title}</h3>
                </div>
                <p className="rv d1">{b.text}</p>
                <Ticks items={b.points} />
              </div>
            </Slide>
          ))}
        </Carousel>
      </section>

      <CTAPanel
        heading="See our tools in action."
        body="For a demo of hunR, TraQ, the Employee Appraisal System or AI Agents, get in touch with Gopal Kamath."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: SITE.email, href: `mailto:${SITE.email}` }}
      />
    </>
  );
}
