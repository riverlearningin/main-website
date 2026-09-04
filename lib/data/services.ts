export const serviceClusters = [
  "Growth & Strategy",
  "Operations & Shop Floor",
  "People & Talent",
  "Systems & Finance",
] as const;

export type ServiceCluster = (typeof serviceClusters)[number];

export interface Service {
  title: string;
  description: string;
  cluster: ServiceCluster;
}

export const services: Service[] = [
  // Growth & Strategy
  {
    title: "Business Growth Consulting",
    description:
      "We diagnose growth barriers and build actionable roadmaps spanning sales, operations, and finance — turning ambition into measurable revenue gains, proven to drive 60%+ growth over two years.",
    cluster: "Growth & Strategy",
  },
  {
    title: "Marketing Strategy and Implementation",
    description:
      "We craft sharper value propositions, digital strategies, and content plans that elevate your market visibility, strengthen pricing power, and unlock new customer segments.",
    cluster: "Growth & Strategy",
  },
  {
    title: "Organisation Diagnostic, Sales Diagnostic, Ops Diagnostic",
    description:
      "We run focused, rapid assessments across your organization, sales function, or operations — delivering a clear, prioritized roadmap of where to act first.",
    cluster: "Growth & Strategy",
  },
  {
    title: "Family Business",
    description:
      "We guide family-owned businesses through leadership transitions, rebranding, and professionalization — preserving legacy while building the structure needed for the next generation of growth.",
    cluster: "Growth & Strategy",
  },

  // Operations & Shop Floor
  {
    title: "Process Improvement and AI",
    description:
      "We map inefficient workflows, eliminate redundant steps, and layer in smart automation — transforming chaotic operations into lean, scalable, technology-driven processes that save time and money.",
    cluster: "Operations & Shop Floor",
  },
  {
    title: "Shopfloor Improvement",
    description:
      "We apply 5S discipline, workflow mapping, and cleanliness audits to transform cluttered shop floors into efficient, productive workspaces requiring far less manpower for the same output.",
    cluster: "Operations & Shop Floor",
  },
  {
    title: "Furniture Factory",
    description:
      "We specialize in furniture manufacturing operations — redesigning shop-floor layouts and material flow through Value Stream Mapping to unlock space, speed, and leaner manpower deployment.",
    cluster: "Operations & Shop Floor",
  },
  {
    title: "Develop and Document SOPs",
    description:
      "We capture tribal knowledge into clear, standardized operating procedures — replacing ad hoc, experience-driven work with consistent, repeatable processes that reduce chaos and delays.",
    cluster: "Operations & Shop Floor",
  },
  {
    title: "Project Execution Process",
    description:
      "We introduce structured reviews, escalation protocols, and dashboards that give management early visibility into issues — turning chaotic execution into predictable, on-time project delivery.",
    cluster: "Operations & Shop Floor",
  },

  // People & Talent
  {
    title: "Talent Management",
    description:
      "From capability mapping to appraisals and compensation structuring, we help you attract, evaluate, and retain the right people — driving accountability, motivation, and measurable performance improvement.",
    cluster: "People & Talent",
  },
  {
    title: "Recruitment Process",
    description:
      "We rebuild your hiring funnel with smarter filtering and clear job descriptions — improving conversion ratios, reducing mis-hires, and filling critical roles faster with better-fit candidates.",
    cluster: "People & Talent",
  },
  {
    title: "Employee Performance Management",
    description:
      "We implement transparent appraisal systems, KPI frameworks, and performance-linked compensation — giving employees clarity and driving a culture of accountability and engagement.",
    cluster: "People & Talent",
  },
  {
    title: "Set Up Your Own In-House Training Platform",
    description:
      "We design capability frameworks and structured training plans tailored to your roles — empowering employees to grow their skills while building a self-sustaining learning culture.",
    cluster: "People & Talent",
  },

  // Systems & Finance
  {
    title: "Software Implementation, Process Automation",
    description:
      "From ERP and CRM to inventory systems, we manage vendor selection through go-live — ensuring accurate data, seamless adoption, and systems that actually work for your teams.",
    cluster: "Systems & Finance",
  },
  {
    title: "Finance Review Process",
    description:
      "We design structured finance review frameworks and reporting templates that translate numbers into business language — empowering leaders to make confident, data-driven decisions.",
    cluster: "Systems & Finance",
  },
  {
    title: "Sales Process Setup",
    description:
      "We build professional sales structures — territories, targets, and reporting cadences — replacing gut-driven decisions with data and unlocking untapped market potential.",
    cluster: "Systems & Finance",
  },
  {
    title: "Supplier / Vendor Capability Management",
    description:
      "We evaluate, structure, and monitor vendor relationships and engagements — ensuring accountability, quality delivery, and successful project execution from selection through completion.",
    cluster: "Systems & Finance",
  },
  {
    title: "Organisation Audit, BRSR, EcoVadis, IKEA, ESG",
    description:
      "We conduct rigorous organizational and compliance audits aligned to global standards — helping you meet sustainability, governance, and buyer-mandated certification requirements with confidence.",
    cluster: "Systems & Finance",
  },
  {
    title: "Franchisee – Design and Implementation",
    description:
      "We build end-to-end franchise strategies — branding, structure, digital presence, and hiring — giving your brand the visibility and systems it needs to scale confidently.",
    cluster: "Systems & Finance",
  },
];
