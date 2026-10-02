import Link from "next/link";
import { Boat } from "@/components/Boat";
import { Carousel, Slide } from "@/components/Carousel";
import { CTAPanel } from "@/components/CTAPanel";
import { Icon, type IconName } from "@/components/Icon";
import { Bar, TraqRow } from "@/components/Mocks";
import { Splash } from "@/components/Splash";
import { Wave } from "@/components/Wave";
import { Words } from "@/components/Words";

const INDUSTRIES = ["Heavy Engineering", "Manufacturing", "Food & FMCG", "Furniture", "IT Services", "Amusement Parks", "Education", "Healthcare"];

const PROBLEMS: { icon: IconName; title: string; text: string }[] = [
  { icon: "factory", title: "A shop floor that's outgrown its systems", text: "Cluttered layouts, slow material flow and more manpower than the output needs." },
  { icon: "target", title: "A sales process running on gut instinct", text: "No clear territories, targets or reporting — decisions made on instinct, not data." },
  { icon: "compass", title: "Growth without a clear roadmap", text: "The ambition is there, but no prioritised plan across sales, operations and finance." },
  { icon: "doc", title: "Spreadsheets, guesswork and tribal knowledge", text: "Critical know-how lives in people's heads instead of systems and SOPs." },
];

const OFFERS: { icon: IconName; title: string; text: string; chips: string[]; href: string; cta: string; navy?: boolean }[] = [
  {
    icon: "compass", title: "Consulting", navy: true, href: "/services", cta: "Explore services",
    text: "Practical solutions for growth, process and people — built around your business, not a template.",
    chips: ["Business Growth", "Process Improvement & AI", "Software Implementation", "Talent Management", "Sales & Finance Setup", "Shopfloor Improvement", "Family Business"],
  },
  {
    icon: "book", title: "Training", href: "/training", cta: "Explore training",
    text: "On-the-job-ready programmes in management, sales and people skills — delivered in person or online.",
    chips: ["Management", "Sales", "People", "First-Time Managers", "Consultative Selling", "In-person or online"],
  },
  {
    icon: "layers", title: "Products", href: "/products", cta: "Explore products",
    text: "Purpose-built digital tools for hiring, project monitoring, appraisals and everyday automation.",
    chips: ["hunR", "TraQ", "Employee Appraisal", "AI Agents"],
  },
];

const STEPS = [
  { n: "01", title: "Diagnose", text: "We dig into what's really holding your business back — across sales, operations, finance and people." },
  { n: "02", title: "Design", text: "A practical solution built around how your business actually runs, not a template." },
  { n: "03", title: "Implement", text: "We work alongside your team, in the trenches, until it's genuinely working." },
  { n: "04", title: "Sustain", text: "Processes, people and tools that keep you growing long after the engagement ends." },
];

const PROOF = [
  { big: "11% → 4%", label: "machine breakdowns", tag: "Tobacco manufacturing", text: "Brought discipline to the shop floor and cut machine breakdowns by nearly two-thirds." },
  { big: "Faster", label: "order execution, with floor space freed up", tag: "Furniture manufacturing", text: "Redesigned shop-floor layout and material flow using Value Stream Mapping." },
  { big: "+60%", label: "revenue growth in two years", tag: "45-year-old manufacturer", text: "A clear growth roadmap across sales, operations and finance — implemented, not just planned." },
];

const REASONS: { icon: IconName; title: string; text: string }[] = [
  { icon: "factory", title: "We've sat where you sit", text: "30 years across shop floors, boardrooms and global technology delivery — a rare fluency across operations, IT and strategy." },
  { icon: "trend", title: "We measure success the way you do", text: "Cost reductions, revenue growth, faster execution, cleaner data and happier customers. Not frameworks for their own sake." },
  { icon: "shield", title: "We build systems that outlast the engagement", text: "Our goal is to leave you with the processes, people and tools to keep growing on your own." },
];

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Icon name="check" size={18} stroke={2.5} />
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <Splash />

      {/* ───────── Hero (approved design — keep exact) ───────── */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            Consulting · Training · Products<span className="d-only"> — </span>
            <br className="m-only" />
            since 2011
          </div>
          <h1 id="hero-h">
            From chaos to clarity. <br className="d-only" />
            <span>From clarity to growth.</span>
          </h1>
          <p className="hero-sub">
            We help businesses grow through strategic consulting, practical training and purpose-built digital tools — strengthening the processes, systems and people that drive measurable results.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              Start the conversation <Icon name="arrow" size={18} stroke={2.2} />
            </Link>
            <Link href="/services" className="btn btn-ghost">Explore services</Link>
          </div>
        </div>

        <div className="hero-sea" aria-hidden="true">
          <div className="hero-band" />
          <Wave shape={1} color="#008ED5" opacity={0.5} opacityPhone={0.45} top={570} topPhone={60} />
          <Wave shape={2} color="#20325B" opacity={0.2} opacityPhone={0.16} top={615} topPhone={84} />
          <Wave shape={3} color="#008ED5" opacity={0.28} opacityPhone={0.25} top={660} topPhone={108} />
          <Wave shape={4} color="#20325B" opacity={0.12} opacityPhone={0.1} top={705} topPhone={132} strokeWidth={1.5} />
          <Wave shape={5} color="#008ED5" opacity={0.16} top={750} strokeWidth={1.5} desktopOnly />
          <Boat className="hero-boat" />
        </div>

        <section className="hero-stats" aria-label="Results">
          <div className="stat"><b>48+</b><span>transformation case studies</span></div>
          <div className="stat hi"><b>+60%</b><span>revenue growth in two years</span></div>
          <div className="stat"><b>−64%</b><span>machine breakdowns (11% → 4%)</span></div>
          <div className="stat dark"><b>30 yrs</b><span>across shop floors, IT and boardrooms</span></div>
        </section>
      </section>

      {/* ───────── Trusted by ───────── */}
      <section className="sec trusted" aria-label="Industries">
        <div className="lab">Trusted by businesses across</div>
        <ul className="pills rv-r">
          {INDUSTRIES.map((i) => <li key={i} className="pill">{i}</li>)}
        </ul>
      </section>

      {/* ───────── Sound familiar? ───────── */}
      <section className="sec familiar">
        <div className="copy rv-l">
          <div className="eyebrow rv">Sound familiar?</div>
          <h2 className="h2 rvw"><Words text="Most businesses don't lack ambition. They lack a system." /></h2>
          <p className="lead rv d1">Every transformation starts with one honest conversation about where your business stands today.</p>
        </div>
        <Carousel cols={2} gap={16} count={PROBLEMS.length} label="Common problems">
          {PROBLEMS.map((p, i) => (
            <Slide key={p.title}>
              <div className={`card rv d${i}`}>
                <span className="iconbox"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Slide>
          ))}
        </Carousel>
      </section>

      {/* ───────── What we do ───────── */}
      <section className="sec center-head">
        <div className="sec-head">
          <div className="eyebrow rv">What we do</div>
          <h2 className="h2 rvw"><Words text="Three ways we help you grow" /></h2>
          <p className="lead rv d1" style={{ maxWidth: 640 }}>
            Consulting to fix what's holding you back, training to build capability that lasts, and tools that keep the discipline going.
          </p>
        </div>
        <Carousel cols={3} gap={20} count={OFFERS.length} label="What we do">
          {OFFERS.map((o, i) => (
            <Slide key={o.title}>
              <div className={`card offer rv d${i}${o.navy ? " navy" : ""}`}>
                <span className="iconbox lg"><Icon name={o.icon} size={25} /></span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <div className="chips">
                  {o.chips.map((c) => <span key={c} className={`chip${o.navy ? " on-navy" : ""}`}>{c}</span>)}
                </div>
                <div className="foot">
                  <Link href={o.href} className="link-arrow">{o.cta} <Icon name="arrow" size={16} /></Link>
                </div>
              </div>
            </Slide>
          ))}
        </Carousel>
      </section>

      {/* ───────── How we work ───────── */}
      <section className="how rv-panel">
        <div className="sec center-head" style={{ gap: 56 }}>
          <div className="head">
            <div className="t">
              <div className="eyebrow rv">How we work</div>
              <h2 className="h2 rvw"><Words text="We don't hand you a framework and walk away." /></h2>
            </div>
            <p className="lead rv d1">We diagnose, design and stay until it's genuinely working.</p>
          </div>
          <div className="steps-wrap">
            <div className="steps-line rv-line" aria-hidden="true" />
            <Carousel cols={4} gap={0} count={STEPS.length} label="How we work">
              {STEPS.map((s, i) => (
                <Slide key={s.n}>
                  <div className={`step rv d${i}`}>
                    {i === STEPS.length - 1 ? (
                      <span className="num fin"><Boat tone="dark" strokeWidth={35} small className="" /></span>
                    ) : (
                      <span className="num">{s.n}</span>
                    )}
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* ───────── Proof ───────── */}
      <section className="sec" style={{ gap: 48 }}>
        <div className="proof-head">
          <div className="t">
            <div className="eyebrow rv">Proof, not promises</div>
            <h2 className="h2 rvw"><Words text="Our work speaks in outcomes." /></h2>
          </div>
          <Link href="/about" className="link-arrow">See all 48+ case studies <Icon name="arrow" size={16} /></Link>
        </div>
        <Carousel cols={3} gap={20} count={PROOF.length} label="Case study outcomes">
          {PROOF.map((p, i) => (
            <Slide key={p.big}>
              <div className={`card proof rv d${i}`}>
                <div className="num">
                  <div className="big rvw"><Words text={p.big} /></div>
                  <span>{p.label}</span>
                </div>
                <div className="body">
                  <div><span className="chip outline">{p.tag}</span></div>
                  <p>{p.text}</p>
                </div>
              </div>
            </Slide>
          ))}
        </Carousel>
      </section>

      {/* ───────── Products ───────── */}
      <section className="products-sec">
        <div className="sec center-head">
          <div className="sec-head">
            <div className="eyebrow rv">Products</div>
            <h2 className="h2 rvw" style={{ maxWidth: 760 }}><Words text="Our discipline, built into software." /></h2>
            <p className="lead rv d1" style={{ maxWidth: 660 }}>
              Digital tools that bring the same structure and clarity we bring to every engagement — directly into your day-to-day operations.
            </p>
          </div>

          <Carousel cols={2} gap={20} count={2} label="Featured products">
            <Slide>
              <div className="product rv-l">
                <div className="ttl"><span className="name">hunR</span><span className="chip white">Skills Assessment</span></div>
                <p className="tag">“Assess to find the best.”</p>
                <ul className="ticks">
                  <Tick>Pay per use — no installation or licence fees</Tick>
                  <Tick>Tests across HR, Sales, Operations, Finance and Management</Tick>
                  <Tick>MCQ, written, media-based and recorded video answers</Tick>
                </ul>
                <div className="mock rv-rise">
                  <div className="mh">
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ width: 38, height: 38, borderRadius: 999, background: "#EAF4FB", display: "flex", alignItems: "center", justifyContent: "center", color: "#20325B" }}><Icon name="user" size={18} /></span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: "#1A2A4D" }}>Assessment report</div>
                        <div style={{ fontSize: 12, color: "#5F6C88" }}>Candidate · Sales Executive</div>
                      </div>
                    </div>
                    <span className="badge" style={{ height: 28, padding: "0 10px", fontSize: 12, gap: 6 }}><Icon name="check" size={14} stroke={3} /> Recommended</span>
                  </div>
                  <Bar label="English (Advanced)" pct={82} />
                  <Bar label="Aptitude" pct={74} />
                  <Bar label="Sales" pct={88} />
                  <div className="mf"><span>Report sent to hiring manager</span><span>Sample data</span></div>
                </div>
                <div><Link href="/contact" className="link-arrow">Book a hunR demo <Icon name="arrow" size={16} /></Link></div>
              </div>
            </Slide>
            <Slide>
              <div className="product rv-r">
                <div className="ttl"><span className="name">TraQ</span><span className="chip white">Project Execution</span></div>
                <p className="tag">“Take the stress out of project monitoring.”</p>
                <ul className="ticks">
                  <Tick>Every project's plan-vs-actual in one dashboard</Tick>
                  <Tick>Overdue and critical issues flagged in red</Tick>
                  <Tick>Change one task — the rest of the plan reschedules itself</Tick>
                </ul>
                <div className="mock rows rv-rise">
                  <div className="mh" style={{ paddingBottom: 10 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ color: "#008ED5", display: "flex" }}><Icon name="grid" size={18} /></span>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#1A2A4D" }}>All projects · plan vs actual</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#5F6C88" }}>Sample data</span>
                  </div>
                  <TraqRow name="Plant expansion" pct={72} badge="On track" />
                  <TraqRow name="Showroom fit-out" pct={45} badge="2 issues" err />
                  <TraqRow name="ERP rollout" pct={90} badge="On track" />
                  <div className="d-only"><TraqRow name="Vendor onboarding" pct={30} badge="Overdue" err /></div>
                </div>
                <div><Link href="/contact" className="link-arrow">Book a TraQ demo <Icon name="arrow" size={16} /></Link></div>
              </div>
            </Slide>
          </Carousel>

          <Carousel cols={2} gap={20} count={2} label="More products">
            <Slide>
              <div className="mini rv d0">
                <span className="iconbox xl"><Icon name="clipboard" size={23} /></span>
                <div>
                  <h3>Employee Appraisal System</h3>
                  <p>Replace once-a-year reviews with an ongoing, KPI-driven process linked to development, promotions and pay.</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div className="mini rv d1">
                <span className="iconbox xl"><Icon name="chip" size={23} /></span>
                <div>
                  <h3>AI Agents</h3>
                  <p>Automate repetitive workflows — data entry, reporting and routine customer and vendor communication.</p>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </section>

      {/* ───────── Testimonial ───────── */}
      <section className="sec quote" aria-label="Client testimonial">
        <div className="mark" aria-hidden="true">“</div>
        <blockquote className="rvw">
          <Words text="hunR has now become a backbone of our hiring process and has really helped us in improving the quality of hires in our organization." />
        </blockquote>
        <div className="who rv d2">
          <span className="av" aria-hidden="true">RM</span>
          <div><b>Rohan Munot</b><span>MD, Harnex Systems Pvt. Ltd, Pune</span></div>
        </div>
      </section>

      {/* ───────── Why River Learning ───────── */}
      <section className="sec why">
        <div className="photo rv-l">
          <Wave shape={1} color="#008ED5" opacity={0.45} top={110} />
          <Wave shape={2} color="#20325B" opacity={0.16} top={146} />
          <Wave shape={3} color="#008ED5" opacity={0.25} top={182} />
          <span className="ph" aria-hidden="true">GK</span>
          <span className="phl">[Photo of Gopal Kamath]</span>
          <div className="plate">
            <div><b>Gopal Kamath</b><span>Founder · Business Management Consultant</span></div>
            <Link href="/about" className="go" aria-label="About Gopal"><Icon name="arrow" size={18} /></Link>
          </div>
        </div>
        <div className="copy rv-r">
          <div className="eyebrow rv">Why River Learning</div>
          <h2 className="h2 rvw"><Words text="Experience from the shop floor to the boardroom." /></h2>
          <p className="lead rv d1">
            Since 2011, River Learning has worked directly with business owners, boards and C-suite leaders to diagnose what's really holding a business back — and then implement the fix.
          </p>
          <ul className="reasons">
            {REASONS.map((r) => (
              <li key={r.title} className="rv">
                <span className="iconbox"><Icon name={r.icon} /></span>
                <div><h3>{r.title}</h3><p>{r.text}</p></div>
              </li>
            ))}
          </ul>
          <div><Link href="/about" className="link-arrow">Meet Gopal <Icon name="arrow" size={16} /></Link></div>
        </div>
      </section>

      <CTAPanel />
    </>
  );
}
