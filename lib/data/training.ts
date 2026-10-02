export interface TrainingItem {
  title: string;
  description: string;
}

export interface TrainingGroup {
  label: string;
  items: TrainingItem[];
}

export const trainingGroups: TrainingGroup[] = [
  {
    label: "Management",
    items: [
      {
        title: "Strategic Thinking",
        description:
          "Equip leaders to move beyond daily firefighting and make decisions rooted in long-term business impact.",
      },
      {
        title: "Hiring Skills",
        description:
          "Sharpen interviewing and evaluation techniques that consistently identify the right talent for the right roles.",
      },
      {
        title: "Effective Communication",
        description:
          "Build clarity, influence, and confidence in how managers communicate across teams and up the chain.",
      },
      {
        title: "Transformational Management",
        description:
          "Prepare leaders to drive and sustain organisational change without losing team buy-in.",
      },
      {
        title: "Continuous Improvement",
        description:
          "Instil a mindset of ongoing, incremental progress across every function and process.",
      },
      {
        title: "Team Building",
        description:
          "Strengthen collaboration, trust, and shared accountability within and across teams.",
      },
      {
        title: "Motivation",
        description:
          "Practical techniques for managers to energise teams and sustain performance over the long haul.",
      },
      {
        title: "Customer Focused Management",
        description:
          "Align management thinking and decisions around delivering genuine customer value.",
      },
      {
        title: "Performance Management",
        description:
          "Design and run appraisal systems that drive real accountability, not just paperwork.",
      },
      {
        title: "First-Time Manager",
        description:
          "Equip newly promoted managers with the foundational skills to lead confidently from day one.",
      },
      {
        title: "Project Management",
        description:
          "Practical frameworks for planning, executing, and delivering projects on time and on budget.",
      },
      {
        title: "LEAN Management",
        description:
          "Introduce Lean principles to eliminate waste and build a culture of operational discipline.",
      },
      {
        title: "5S and Process Improvement",
        description:
          "Hands-on shop-floor training to build organised, efficient, and sustainable work environments.",
      },
    ],
  },
  {
    label: "Sales",
    items: [
      {
        title: "Selling Skills",
        description:
          "Core techniques to build confidence and consistency across every stage of the sales cycle.",
      },
      {
        title: "Psychology for Sales",
        description:
          "Understand buyer behaviour and decision-making to sell with greater empathy and precision.",
      },
      {
        title: "Consultative Selling",
        description:
          "Shift from pitching products to solving customer problems, building trust and long-term relationships.",
      },
      {
        title: "Value Selling",
        description:
          "Train teams to sell on outcomes and impact, not price — protecting margins in competitive markets.",
      },
      {
        title: "Hunting for New Business",
        description:
          "Sharpen prospecting and new-account development skills to fuel a growing sales pipeline.",
      },
    ],
  },
  {
    label: "People",
    items: [
      {
        title: "People Management for Managers",
        description:
          "Practical tools to help managers lead, coach, and get the best from their teams.",
      },
      {
        title: "Team Building",
        description:
          "Foster stronger collaboration and cohesion within teams navigating change or growth.",
      },
      {
        title: "Motivation",
        description:
          "Build a toolkit for keeping people engaged, energised, and committed through challenging periods.",
      },
    ],
  },
];

export interface OnlineCourse {
  title: string;
  description: string;
}

export const onlineCourses: OnlineCourse[] = [
  {
    title: "Family Business Training Course",
    description:
      "A focused program for family-owned businesses navigating growth, succession, and professionalisation — covering leadership transitions, governance structures, and building systems that let the business scale beyond any one individual.",
  },
  {
    title: "Managerial Skills Training",
    description:
      "A practical course for managers at every level — from first-time managers to seasoned leaders — covering strategic thinking, effective communication, team building, performance management, and change leadership.",
  },
  {
    title: "Process Based Factory Operations",
    description:
      "A hands-on program for shop-floor and operations leaders, covering Lean principles, 5S discipline, standard operating procedures, and continuous improvement — replacing ad hoc production with structured, repeatable processes.",
  },
  {
    title: "B2B Sales Training",
    description:
      "A results-driven course for sales teams selling into industrial and B2B markets — covering consultative and value-based selling, sales psychology, new business hunting, and key account management.",
  },
];

export interface MentoringTrack {
  role: string;
  description: string;
}

export const mentoringTracks: MentoringTrack[] = [
  {
    role: "CEO Mentoring",
    description:
      "Confidential, one-on-one guidance for CEOs and business owners wrestling with strategic decisions, growth roadblocks, organisational design, or leadership challenges — a trusted outside perspective from someone who has sat across the table from boards and business owners for over 25 years.",
  },
  {
    role: "Sales Manager Mentoring",
    description:
      "Dedicated mentoring for sales managers building or scaling a sales function — covering team leadership, pipeline discipline, key account strategy, and the transition from top individual performer to effective sales leader.",
  },
  {
    role: "Operations Manager Mentoring",
    description:
      "Hands-on mentoring for operations managers driving shop-floor performance, process discipline, and cross-functional execution — helping them navigate real-world pressures while building longer-term operational capability.",
  },
];

export interface CertStep {
  level: string;
  name: string;
  focus: string;
}

export interface CertTrack {
  name: string;
  steps: CertStep[];
}

export const certificationTracks: CertTrack[] = [
  {
    name: "B2B Sales Certification Track",
    steps: [
      {
        level: "L1",
        name: "CISA — Certified Industrial Sales Associate",
        focus: "Foundational selling skills for those starting out in industrial/B2B sales",
      },
      {
        level: "L2",
        name: "CTSP — Certified Technical Sales Professional",
        focus: "Selling technically complex products and solutions with credibility",
      },
      {
        level: "L3",
        name: "CKAS — Certified Key Account Specialist",
        focus: "Managing and growing strategic, high-value client relationships",
      },
      {
        level: "L4",
        name: "CISL — Certified Industrial Sales Leader",
        focus: "Leading and scaling a high-performing B2B sales function",
      },
    ],
  },
  {
    name: "Managerial Skills Certification Track",
    steps: [
      {
        level: "L1",
        name: "Certified Emerging Manager",
        focus: "Foundational skills for professionals stepping into their first management role",
      },
      {
        level: "L2",
        name: "Certified People Manager",
        focus: "Building capability in leading, motivating, and developing direct reports",
      },
      {
        level: "L3",
        name: "Certified Team Leader",
        focus: "Advanced leadership skills for managing teams through complexity and change",
      },
    ],
  },
  {
    name: "Manufacturing Operations Certification Track",
    steps: [
      {
        level: "L1",
        name: "Manufacturing Associate",
        focus: "Foundational shop-floor knowledge for those new to manufacturing",
      },
      {
        level: "L2",
        name: "Lean Practitioner",
        focus: "Practical application of Lean tools and process discipline",
      },
      {
        level: "L3",
        name: "Process Owner",
        focus: "Ownership and continuous improvement of specific manufacturing processes",
      },
      {
        level: "L4",
        name: "Operations Leader",
        focus: "End-to-end factory operations leadership and performance management",
      },
      {
        level: "L5",
        name: "Supply Chain Controller",
        focus: "Inventory, materials, and supply chain management capability",
      },
      {
        level: "L6",
        name: "Transformation Architect",
        focus: "Strategic capability to lead full-scale operational and organisational transformation",
      },
    ],
  },
];
