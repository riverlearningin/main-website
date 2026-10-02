// Services copy, taken verbatim from the approved Services design (19 items).
// Order matches the design so the zipper reveal and filter counts line up.
export type ServiceCat = "growth" | "ops" | "people" | "sales" | "systems";

export const CATEGORIES: { key: ServiceCat | "all"; label: string }[] = [
  { key: "all", label: "All services" },
  { key: "growth", label: "Growth & Strategy" },
  { key: "ops", label: "Operations & Process" },
  { key: "people", label: "People & Talent" },
  { key: "sales", label: "Sales & Finance" },
  { key: "systems", label: "Systems & Compliance" },
];

export const CAT_ICON = { growth: "trend", ops: "chip", people: "cap", sales: "bars", systems: "monitor" } as const;

export const SERVICES: { cat: ServiceCat; title: string; text: string }[] = [
  { cat: "growth", title: "Business Growth Consulting", text: "We diagnose growth barriers and build actionable roadmaps spanning sales, operations and finance — proven to drive 60%+ growth over two years." },
  { cat: "ops", title: "Process Improvement and AI", text: "We map inefficient workflows, eliminate redundant steps and layer in smart automation for lean, scalable, technology-driven processes." },
  { cat: "people", title: "Set Up Your Own In-House Training Platform", text: "Capability frameworks and structured training plans tailored to your roles, building a self-sustaining learning culture." },
  { cat: "people", title: "Talent Management", text: "From capability mapping to appraisals and compensation structuring — attract, evaluate and retain the right people." },
  { cat: "ops", title: "Develop and Document SOPs", text: "We capture tribal knowledge in clear, standardised operating procedures that reduce chaos and delays." },
  { cat: "systems", title: "Software Implementation, Process Automation", text: "ERP, CRM and inventory systems — from vendor selection through go-live, with accurate data and real adoption." },
  { cat: "growth", title: "Franchisee – Design and Implementation", text: "End-to-end franchise strategy — branding, structure, digital presence and hiring — so your brand can scale confidently." },
  { cat: "ops", title: "Furniture Factory", text: "Shop-floor layouts and material flow redesigned through Value Stream Mapping to unlock space, speed and leaner manpower." },
  { cat: "ops", title: "Supplier / Vendor Capability Management", text: "Evaluate, structure and monitor vendor relationships for accountability and quality delivery, from selection to completion." },
  { cat: "growth", title: "Family Business", text: "Guidance through leadership transitions, rebranding and professionalisation — preserving legacy while preparing the next generation." },
  { cat: "ops", title: "Project Execution Process", text: "Structured reviews, escalation protocols and dashboards that give management early visibility and on-time delivery." },
  { cat: "people", title: "Recruitment Process", text: "Smarter filtering and clear job descriptions that improve conversion, reduce mis-hires and fill critical roles faster." },
  { cat: "sales", title: "Finance Review Process", text: "Finance review frameworks and reporting templates that translate numbers into business language for confident decisions." },
  { cat: "sales", title: "Sales Process Setup", text: "Territories, targets and reporting cadences that replace gut-driven decisions with data and unlock market potential." },
  { cat: "people", title: "Employee Performance Management", text: "Transparent appraisals, KPI frameworks and performance-linked pay that build a culture of accountability." },
  { cat: "systems", title: "Organisation Audit, BRSR, EcoVadis, IKEA, ESG", text: "Rigorous organisational and compliance audits aligned to global standards and buyer-mandated certifications." },
  { cat: "ops", title: "Shopfloor Improvement", text: "5S discipline, workflow mapping and cleanliness audits that deliver the same output with far less manpower." },
  { cat: "growth", title: "Organisation, Sales and Ops Diagnostics", text: "Focused, rapid assessments that deliver a clear, prioritised roadmap of where to act first." },
  { cat: "growth", title: "Marketing Strategy and Implementation", text: "Sharper value propositions, digital strategy and content plans that lift visibility, pricing power and new segments." },
];
