export interface Product {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  quote?: string | null;
  author?: string | null;
  featured: boolean;
}

export const products: Product[] = [
  {
    name: "hunR",
    tagline: "Assess to find the best.",
    description:
      "hunR is an online, subscription-based skill assessment platform built to help enterprises hire smarter and faster — no installation fees, no licence fees, just pay per use. Book your assessment, share candidate details, and hunR takes it from there — assigning the test, evaluating results, and sending you a detailed report while you simply review and decide.",
    bullets: [
      "Tests across every function — HR, Sales & Marketing, Operations, Finance, General Management",
      "Flexible formats — multiple choice, written responses, media-based questions, and recorded video answers",
      "Customised tests designed for your specific business when standard modules don't fit",
      "Built for Business Heads, Recruiters, and HR Managers for hiring, certification, and internal skill audits",
      "Removes subjective gut-feel decisions and filters weak candidates early — so only quality profiles reach interview stage",
    ],
    quote:
      "HunR has now become a backbone of our Hiring process and has really helped us in improving the quality of Hires in our Organization.",
    author: "Rohan Munot, MD, Harnex Systems Pvt. Ltd, Pune",
    featured: true,
  },
  {
    name: "TraQ",
    tagline: "Take the stress out of project monitoring.",
    description:
      "Running multiple projects at once often means chasing status updates, discovering problems too late, and losing hours to replanning. TraQ was built to solve exactly these problems — giving you one dashboard across every project.",
    bullets: [
      "One dashboard, every project — view plan-vs-actual status, percentage completion, and task groupings",
      "Catch issues before they become critical — all issues visible in one view, overdue items flagged in red",
      "Control who sees what — precise access control, including what your customers can see",
      "Replanning made simple — change one task and the rest reschedules automatically",
      "Mobile app — team members can view tasks, report progress, raise issues, and post comments from anywhere",
    ],
    quote: null,
    author: null,
    featured: true,
  },
  {
    name: "Employee Appraisal System",
    tagline: "KPI-driven performance that drives real accountability.",
    description:
      "A structured, transparent performance appraisal platform that replaces subjective, once-a-year reviews with an ongoing, KPI-driven process. Define role-based goals, track performance systematically, and link outcomes directly to development plans, promotions, and compensation.",
    bullets: [
      "Role-based goal setting with clear, measurable KPIs",
      "Ongoing tracking — not just annual reviews",
      "Directly linked to compensation, development plans, and promotions",
      "Gives every employee clarity on how they're doing and what earns growth",
    ],
    quote: null,
    author: null,
    featured: false,
  },
  {
    name: "AI Agents",
    tagline: "Automate the repetitive. Focus on what matters.",
    description:
      "Purpose-built AI agents designed to automate repetitive business workflows — from data entry and reporting to routine customer and vendor communication — freeing up your team's time for higher-value work while ensuring consistency and speed across everyday operations.",
    bullets: [
      "Automates data entry, reporting, and routine communications",
      "Frees your team for higher-value work",
      "Ensures consistency and speed across everyday operations",
      "Tailored to your specific business workflows",
    ],
    quote: null,
    author: null,
    featured: false,
  },
];
