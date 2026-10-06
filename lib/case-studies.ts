import type { ServiceCat } from "./services";

export type CaseStudy = { n: number; cat: ServiceCat; title: string; client: string; challenge: string; did: string; result: string };

export const CASE_STUDIES: CaseStudy[] = [
  {
    "n": 1,
    "cat": "systems",
    "title": "From Spreadsheet Chaos to Real-Time Sales Intelligence",
    "client": "A thriving medium-sized manufacturer specializing in engineering goods",
    "challenge": "A growing sales team had outgrown its Excel-based lead tracker — reps on the road meant blind spots in the pipeline.",
    "did": "Implemented and custom-configured Odoo CRM, realigned sales territories, and cleaned up data segmentation.",
    "result": "Every salesperson now carries a live, intelligent dashboard in their pocket — anywhere, anytime."
  },
  {
    "n": 2,
    "cat": "systems",
    "title": "Rescuing a Stalled ERP Rollout",
    "client": "A mid-sized furniture manufacturer",
    "challenge": "2.5 years into an ERP implementation, the manufacturing module was stuck, with no clear path to completion.",
    "did": "Diagnosed the bottlenecks, aligned stakeholders, and stripped the manufacturing module down to a lean, practical workflow.",
    "result": "A faster resolution and a system the operations team now genuinely enjoys using."
  },
  {
    "n": 3,
    "cat": "people",
    "title": "Building a Culture of Accountability",
    "client": "A leading manufacturer of large process equipment",
    "challenge": "Unclear roles and reporting lines were creating friction across management and HR.",
    "did": "Designed job descriptions, org charts, and performance metrics; rolled out biannual appraisals, performance-linked variable pay, and a full HR policy manual.",
    "result": "A transparent, repeatable performance management system where every employee can engage in structured, meaningful reviews."
  },
  {
    "n": 4,
    "cat": "systems",
    "title": "Finally Getting SAP B1 Right",
    "client": "A leading manufacturer of large process equipment",
    "challenge": "Three failed vendor attempts left SAP B1 riddled with data errors and an unhappy finance team.",
    "did": "Guided a new vendor through re-implementation, kept every team engaged, and tracked the project closely for three months.",
    "result": "For the first time ever, accurate data flowed cleanly across departments — and the accountants were finally satisfied."
  },
  {
    "n": 5,
    "cat": "ops",
    "title": "Taming Rapid Growth",
    "client": "A leading manufacturer of large process equipment",
    "challenge": "Explosive order growth outpaced capacity, triggering customer threats of penalties and cancellations.",
    "did": "Introduced daily stand-ups, escalation protocols, a dedicated project management team, and monthly cross-functional reviews.",
    "result": "A more mature, visible execution process that heads off issues before they become conflicts."
  },
  {
    "n": 6,
    "cat": "people",
    "title": "Fixing a Broken Hiring Funnel",
    "client": "A leading provider of digital marketing and website development services",
    "challenge": "Too much recruiting effort was yielding too few hires, delaying project staffing.",
    "did": "Rebuilt the filtering process with step-wise screening and management visibility into disqualifications.",
    "result": "A sharper conversion ratio, faster closures, and better-fit candidates landing in the right roles."
  },
  {
    "n": 7,
    "cat": "ops",
    "title": "Turning Effort Into Profit Visibility",
    "client": "A leading provider of digital marketing and website development services",
    "challenge": "With staff spread across projects, profitability and effort utilization were nearly impossible to track.",
    "did": "Built a granular, project-wise effort-tracking system and coached managers on daily adoption.",
    "result": "Clear budget-vs-effort visibility — and stronger project-level profitability."
  },
  {
    "n": 8,
    "cat": "sales",
    "title": "Repricing Value, Not Just Services",
    "client": "A leading provider of digital marketing and website development services",
    "challenge": "Commoditized pricing pressure was squeezing margins on web and social media services.",
    "did": "Ran collaborative brainstorming sessions to reframe the client's value proposition and pitch.",
    "result": "A sharper, more compelling story that unlocked stronger pricing and client wins."
  },
  {
    "n": 9,
    "cat": "growth",
    "title": "A 360° Performance Lens for the CEO",
    "client": "A large manufacturing organization with a history of over 50 years",
    "challenge": "The CEO needed one clear view of organizational performance to prioritize where to focus.",
    "did": "Implemented a balanced scorecard framework, mapping every department to measurable KPIs.",
    "result": "Total clarity and control — performance is now tracked, reviewed, and improved with data, not guesswork."
  },
  {
    "n": 10,
    "cat": "systems",
    "title": "One Platform, Every Department",
    "client": "A large manufacturer of furniture and panel board projects",
    "challenge": "Fragmented legacy systems and manual processes left departments disconnected.",
    "did": "Evaluated ERP vendors, drafted detailed requirements, and closely managed the full implementation.",
    "result": "A single, unified system replacing endless emails and shared files — and a company built to scale faster."
  },
  {
    "n": 11,
    "cat": "growth",
    "title": "A Roadmap Out of Decline",
    "client": "One of India's oldest manufacturers of plywood",
    "challenge": "Slowing markets left the business chaotic, with rising inventory and slow customer collections.",
    "did": "Conducted a deep operational review across all locations and built a transformation roadmap with hiring and IT recommendations.",
    "result": "A clear, actionable path forward, directly linking root causes to daily business barriers."
  },
  {
    "n": 12,
    "cat": "ops",
    "title": "A Full Workshop Turnaround",
    "client": "A large 2-wheeler dealership of a high-profile 2-wheeler manufacturer",
    "challenge": "Chaotic operations were driving customer and principal-company complaints, and financial performance was suffering.",
    "did": "Instilled shop-floor discipline, mapped workflows, tracked technician efficiency, rationalized inventory, and introduced a simple CRM.",
    "result": "In six months, a visible turnaround — and recognition from the principal company itself."
  },
  {
    "n": 13,
    "cat": "ops",
    "title": "Cutting Machine Downtime, Boosting Output",
    "client": "A very popular manufacturer of tobacco products with a large operation",
    "challenge": "Frequent machine breakdowns were driving up production costs in a heavily duty-regulated industry.",
    "did": "Logged every breakdown, ran a Pareto analysis, and targeted the top three root causes for improvement.",
    "result": "Breakdown rate fell from 11% to 4% — worth roughly ₹2 Cr in annual benefit."
  },
  {
    "n": 14,
    "cat": "ops",
    "title": "Right-Sizing the Workforce",
    "client": "A small cooperative bank",
    "challenge": "Leadership suspected overstaffing relative to transaction volumes.",
    "did": "Ran a detailed Value Stream Mapping exercise, tracking process times and transaction counts over six months.",
    "result": "Revealed staffing levels roughly 100% above optimum — a clear, data-backed opportunity to cut costs and boost efficiency."
  },
  {
    "n": 15,
    "cat": "ops",
    "title": "Solving a Vehicle Shortage",
    "client": "A large manufacturer of FMCG agri food products",
    "challenge": "Chronic tractor shortages disrupted material movement between plants.",
    "did": "Redesigned vehicle assignment around a centrally located, shared-dispatch model.",
    "result": "Transportation costs dropped by ~50%, freeing up vehicles that were no longer needed."
  },
  {
    "n": 16,
    "cat": "sales",
    "title": "Escaping Commodity Pricing",
    "client": "A medium-sized IT Services Company",
    "challenge": "Eight years in, the business had drifted into low-margin \"body shopping\" with shrinking profitability.",
    "did": "Identified verticals of real strength and pivoted the sales strategy from tech services to business solutions.",
    "result": "New, more profitable engagements alongside continued growth of the core business."
  },
  {
    "n": 17,
    "cat": "sales",
    "title": "Turning Profitability Visible",
    "client": "A medium-sized IT Services Company",
    "challenge": "Heavy investment in new business areas was quietly draining margins.",
    "did": "Built monthly engagement-level profitability tracking with automated alarms for underperformance.",
    "result": "A year later, organizational profitability had grown significantly, driven by faster GO/NO-GO decisions."
  },
  {
    "n": 18,
    "cat": "people",
    "title": "Mapping Talent to Capability",
    "client": "A medium-sized IT Services Company",
    "challenge": "Leadership needed an objective way to evaluate manpower quality for appraisals and compensation.",
    "did": "Defined role-based capability matrices and ran self, manager, and CXO-level appraisals.",
    "result": "A clear performance framework — and the data to build a targeted training plan."
  },
  {
    "n": 19,
    "cat": "ops",
    "title": "A 360° Turnaround",
    "client": "A large manufacturer of Heavy Process Equipment",
    "challenge": "Four years of rapid growth had outpaced organizational capability, straining execution.",
    "did": "Brought in professional project management, collaborative working practices, and formalized stores and materials management.",
    "result": "A visible turnaround already underway, laying the groundwork for future ERP adoption."
  },
  {
    "n": 20,
    "cat": "sales",
    "title": "Bringing Order to Cyclical Cash Flow",
    "client": "A large process equipment manufacturer",
    "challenge": "Project-driven cash flows made financial planning unpredictable.",
    "did": "Built a financial model and operational budget to monitor cash flow and audit financial practices.",
    "result": "A transparent, fact-based view of business health — and far more confident financial decision-making."
  },
  {
    "n": 21,
    "cat": "people",
    "title": "De-Risking Senior Hiring",
    "client": "Multiple companies",
    "challenge": "Founders lacked the experience to make confident senior management hires.",
    "did": "Drafted precise job descriptions, screened and shortlisted candidates, and led the interview process end-to-end.",
    "result": "Significant business benefit through consistently well-matched senior hires."
  },
  {
    "n": 22,
    "cat": "growth",
    "title": "A Growth Roadmap",
    "client": "A small manufacturer of equipment for process plants",
    "challenge": "The CEO couldn't pinpoint what was holding growth back.",
    "did": "Ran a focused dip-stick study across all operational processes and mapped growth plans against infrastructure and people.",
    "result": "A detailed, step-by-step execution roadmap across every department."
  },
  {
    "n": 23,
    "cat": "systems",
    "title": "From WhatsApp to ERP",
    "client": "A leading manufacturer of packaged food products",
    "challenge": "Workflow coordination relied entirely on phone calls and WhatsApp messages.",
    "did": "Introduced spreadsheet-based process discipline first, then guided a full ERP vendor selection and implementation across order, production, inventory, and finance.",
    "result": "Complete workflow clarity, fewer manual touchpoints, and a foundation for future integration with distributors and vendors."
  },
  {
    "n": 24,
    "cat": "sales",
    "title": "Building a Professional Sales Engine",
    "client": "A leading manufacturer of food products",
    "challenge": "Sales had grown purely through word of mouth, with no structure to drive future growth.",
    "did": "Mapped territories and routes, set granular targets, and implemented daily reporting and monthly review cadences.",
    "result": "A data-driven sales organization with sharper accountability and full visibility into untapped market potential."
  },
  {
    "n": 25,
    "cat": "sales",
    "title": "Financial Literacy for the CEO",
    "client": "A leading manufacturing organization with a turnover of over 25 Crores",
    "challenge": "A technically-minded CEO struggled to independently interpret the company's financial position.",
    "did": "Designed a structured finance review framework with tailored weekly and monthly reports.",
    "result": "A financially fluent CEO, confidently steering decisions with the right data at his fingertips."
  },
  {
    "n": 26,
    "cat": "ops",
    "title": "Re-Engineering the Shop Floor",
    "client": "A leading manufacturer of furniture products and furniture components",
    "challenge": "Ad hoc machine placement was creating inefficient, manual-heavy production flows.",
    "did": "Built a Value Stream Map to redesign machine layout around optimal material flow.",
    "result": "Freed-up floor space, faster order execution, and a leaner manpower footprint."
  },
  {
    "n": 27,
    "cat": "growth",
    "title": "Going Digital-First",
    "client": "A traditional manufacturing organization making heavy engineering products",
    "challenge": "High dealer finder's fees made traditional distribution uneconomical for a highly technical product.",
    "did": "Defined target segments, product positioning, and a full digital content and marketing strategy.",
    "result": "Now among the most digitally visible companies in its industry worldwide."
  },
  {
    "n": 28,
    "cat": "systems",
    "title": "Standardizing Before Automating",
    "client": "A manufacturing organization making heavy engineering products",
    "challenge": "Shared spreadsheets and servers left work stalled whenever employees traveled.",
    "did": "Standardized workflows first, then guided vendor evaluation and selection for a fitting IT system.",
    "result": "Sales fully automated, with the rest of the organization on track to follow — and a shift toward cloud infrastructure."
  },
  {
    "n": 29,
    "cat": "sales",
    "title": "Building Sales From Scratch",
    "client": "A 45-year-old manufacturing organization",
    "challenge": "A company with no formal sales function relied entirely on word of mouth.",
    "did": "Built a sales plan from segmentation through geography and product mapping, hired new sales talent, and instilled daily-weekly-monthly sales discipline.",
    "result": "A 60% revenue increase over two years."
  },
  {
    "n": 30,
    "cat": "growth",
    "title": "From Idea to Live Business in 4 Months",
    "client": "A startup in the area of automotive products and services",
    "challenge": "Two founders had spent 18 months unable to launch their automotive marketplace.",
    "did": "Defined the product and roadmap, built an eCommerce platform with dynamic exchange-based pricing, and executed an MVP launch strategy.",
    "result": "A running business — 18 months of stagnation turned into 4 months of momentum."
  },
  {
    "n": 31,
    "cat": "sales",
    "title": "Total Cash Flow Control",
    "client": "A leading manufacturing organization",
    "challenge": "A 200-person company had little visibility into funds coming in, going out, or where they should go.",
    "did": "Implemented cash flow analysis, P&L reviews, product profitability tracking, and debtor/creditor reviews.",
    "result": "Complete financial control, better-informed budgeting across recruitment, sales, and marketing."
  },
  {
    "n": 32,
    "cat": "people",
    "title": "Performance Systems That Actually Motivate",
    "client": "Multiple clients",
    "challenge": "Clients needed performance management rooted in real behavioral drivers, not box-checking.",
    "did": "Designed variable pay processes, appraisal systems, and job analysis frameworks across a large conglomerate, a residential school, and two manufacturing firms.",
    "result": "A marked rise in ownership, accountability, and enthusiasm — visible directly in performance."
  },
  {
    "n": 33,
    "cat": "ops",
    "title": "5S on the Shop Floor",
    "client": "A medium-scale manufacturer of process equipment involving metal fabrication, electronic control systems, and integrated manufacturing",
    "challenge": "Ad hoc, day-to-day production planning across three units created chaos and inefficiency.",
    "did": "Mapped the optimal workflow, applied 5S discipline (sort, clean, organize, label), and instituted weekly cleanliness audits with management dashboards.",
    "result": "A leaner, more productive shop floor requiring significantly less manpower for the same output."
  },
  {
    "n": 34,
    "cat": "sales",
    "title": "Freeing the MD From Finance",
    "client": "A medium-scale manufacturer of process equipment with a turnover in excess of 50 crores per annum",
    "challenge": "The managing director was buried in day-to-day finance matters, with no structured process in place.",
    "did": "Brought in a senior finance consultant, restructured the finance team's roles, and led the hiring of a CFO.",
    "result": "Within three months, the MD was fully freed from daily finance duties, with robust reporting now in place."
  },
  {
    "n": 35,
    "cat": "people",
    "title": "Fair, Structured Compensation",
    "client": "A medium-scale manufacturer of specialized process equipment",
    "challenge": "Impulsive, urgency-driven hiring had created compensation gaps between similarly skilled employees.",
    "did": "Built a three-category grading system (Technical, Management, Support) with mapped salary bands and clear designations.",
    "result": "Consistent, transparent compensation logic — and clarity for employees on what earns advancement."
  },
  {
    "n": 36,
    "cat": "ops",
    "title": "Ending Production Chaos",
    "client": "A medium-scale manufacturer of process equipment with integrated electronic control systems, spanning design through site implementation",
    "challenge": "Undocumented, experience-driven sequencing caused delays whenever multiple orders ran in parallel.",
    "did": "Documented standard operating procedures, implemented daily production reviews, and built a management dashboard linking progress to revenue forecasts.",
    "result": "Smoother coordination, clearer priorities, and better cash management through aligned purchasing and execution cycles."
  },
  {
    "n": 37,
    "cat": "systems",
    "title": "Taming Inventory Complexity",
    "client": "A medium-scale manufacturer of specialized process equipment integrated with PLC control systems",
    "challenge": "No inventory system existed to manage a huge variety of raw materials and components, risking pilferage and confusion.",
    "did": "Designed a comprehensive inventory coding and classification system ready for integration with any ERP or accounting platform.",
    "result": "Full cataloging ability, cross-referencing across projects, and a ready foundation for structured ERP adoption."
  },
  {
    "n": 38,
    "cat": "systems",
    "title": "Digitizing a One-Person Operation",
    "client": "A leading manufacturer of packaged food products",
    "challenge": "Orders, production, and dispatch ran entirely through WhatsApp and SMS, with everything dependent on one person.",
    "did": "Replaced manual channels with online order forms, shared production and inventory spreadsheets, and integrated maintenance and quality tracking into one accessible system.",
    "result": "In just four months, a fully systematic operation — laying the groundwork for future ERP adoption."
  },
  {
    "n": 39,
    "cat": "people",
    "title": "Professionalizing Performance Reviews",
    "client": "A leading manufacturer of packaged food products",
    "challenge": "No formal system existed to evaluate employee performance.",
    "did": "Built an org chart, documented job descriptions and KPIs, and implemented a numerical performance appraisal system.",
    "result": "Clear performance expectations and feedback loops — and compensation aligned to real contribution."
  },
  {
    "n": 40,
    "cat": "growth",
    "title": "Launching an eCommerce Channel Amid COVID",
    "client": "A leading manufacturer of packaged food products",
    "challenge": "Falling retail footfall during the pandemic demanded a new sales channel, fast.",
    "did": "Evaluated and selected an eCommerce vendor, project-managed the build, and set up day-to-day fulfillment operations.",
    "result": "A brand-new direct-to-consumer channel reaching customers nationwide."
  },
  {
    "n": 41,
    "cat": "growth",
    "title": "Rebranding for a New Generation",
    "client": "Established tea manufacturing company (40+ year family-owned brand)",
    "challenge": "A leadership transition demanded a brand refresh for this 40+ year family business.",
    "did": "Studied brand positioning and market, redesigned the brand identity, and built out the relaunch team.",
    "result": "A refreshed positioning and team, primed for the next phase of growth."
  },
  {
    "n": 42,
    "cat": "ops",
    "title": "Greenfield Factory Design",
    "client": "Captive printing unit of a large FMCG company",
    "challenge": "A new facility needed an efficient layout from the ground up.",
    "did": "Studied workflow requirements and designed the plant layout for optimal flow.",
    "result": "Smoother material and manpower movement, built for scale."
  },
  {
    "n": 43,
    "cat": "ops",
    "title": "Structuring for Growth",
    "client": "Small Company Secretary firm",
    "challenge": "Overloaded partners were bogged down by unstructured processes.",
    "did": "Standardized workflows, implemented supporting software, and ran customer surveys.",
    "result": "Freed-up partner time, simpler management, and newly identified revenue streams."
  },
  {
    "n": 44,
    "cat": "growth",
    "title": "Enterprise-Wide Transformation",
    "client": "MNC electronics/software company (Utilities)",
    "challenge": "The organization needed a comprehensive operational overhaul.",
    "did": "Implemented Zoho, structured project planning, continuous improvement practices, talent systems, and go-to-market strategy.",
    "result": "A fully integrated, process-driven organization."
  },
  {
    "n": 45,
    "cat": "growth",
    "title": "Igniting Growth",
    "client": "Industrial filters manufacturer",
    "challenge": "The business needed a trigger for its next growth phase.",
    "did": "Built a growth strategy spanning sales, marketing, HR, and Zoho implementation.",
    "result": "A solid foundation for scalable growth."
  },
  {
    "n": 46,
    "cat": "growth",
    "title": "Franchise-Ready Branding",
    "client": "Leading café & QSR brand",
    "challenge": "The brand needed a structure to support franchise expansion.",
    "did": "Developed franchise strategy, refreshed branding, built a new website, and supported hiring and marketing.",
    "result": "Stronger franchise visibility and accelerated growth."
  },
  {
    "n": 47,
    "cat": "growth",
    "title": "Monetizing an Audience",
    "client": "Leading financial influencer",
    "challenge": "A large following needed a viable business model behind it.",
    "did": "Designed digital products and a scalable business model.",
    "result": "A repeatable, scalable path to monetization."
  },
  {
    "n": 48,
    "cat": "ops",
    "title": "Lean Transformation",
    "client": "German industrial machine manufacturer",
    "challenge": "The organization needed to embed Lean thinking into daily operations.",
    "did": "Implemented Lean principles, 5S practices, continuous improvement processes, and targeted training.",
    "result": "Higher quality, faster turnaround, and an embedded culture of continuous improvement."
  }
];
