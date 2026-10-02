// Training copy, taken verbatim from the approved Training design.
export const INTRO: { icon: "checkSquare" | "globe" | "sliders"; title: string; text: string }[] = [
  { icon: "checkSquare", title: "On-the-job ready", text: "Practical skills your teams apply the next working day." },
  { icon: "globe", title: "In person or online", text: "Delivered at your site or remotely, whichever suits your teams." },
  { icon: "sliders", title: "Customised to you", text: "Tailored to your industry, team size and business context." },
];

export const TRACKS: { icon: "compass" | "target" | "users"; label: string; title: string; desc: string; items: [string, string][] }[] = [
  { icon: "compass", label: "Track 01 · 13 programmes", title: "Management", desc: "From first-time managers to senior leaders — strategy, communication, performance and operational discipline.", items: [
    ["Strategic Thinking", "Move leaders beyond daily firefighting to decisions rooted in long-term business impact."],
    ["Hiring Skills", "Interviewing and evaluation techniques that consistently identify the right talent."],
    ["Effective Communication", "Clarity, influence and confidence across teams and up the chain."],
    ["Transformational Management", "Drive and sustain organisational change without losing team buy-in."],
    ["Continuous Improvement", "A mindset of ongoing, incremental progress across every function."],
    ["Team Building", "Stronger collaboration, trust and shared accountability."],
    ["Motivation", "Practical techniques to energise teams and sustain performance."],
    ["Customer Focused Management", "Align management thinking and decisions around genuine customer value."],
    ["Performance Management", "Appraisal systems that drive real accountability, not paperwork."],
    ["First-Time Manager", "Foundational skills for newly promoted managers to lead from day one."],
    ["Project Management", "Practical frameworks to deliver projects on time and on budget."],
    ["LEAN Management", "Lean principles that eliminate waste and build operational discipline."],
    ["5S and Process Improvement", "Hands-on shop-floor training for organised, efficient workplaces."],
  ] },
  { icon: "target", label: "Track 02 · 5 programmes", title: "Sales", desc: "Build a sales team that sells with confidence, empathy and a clear focus on value.", items: [
    ["Selling Skills", "Core techniques for confidence and consistency across the sales cycle."],
    ["Psychology for Sales", "Understand buyer behaviour to sell with empathy and precision."],
    ["Consultative Selling", "Shift from pitching products to solving customer problems."],
    ["Value Selling", "Sell on outcomes and impact, not price — and protect your margins."],
    ["Hunting for New Business", "Prospecting and new-account skills that fuel a growing pipeline."],
  ] },
  { icon: "users", label: "Track 03 · 3 programmes", title: "People", desc: "Help managers lead, coach and keep their teams engaged through change and growth.", items: [
    ["People Management for Managers", "Practical tools to lead, coach and get the best from teams."],
    ["Team Building", "Stronger cohesion for teams navigating change or growth."],
    ["Motivation", "A toolkit for keeping people engaged through challenging periods."],
  ] },
];
