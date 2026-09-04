import { ArrowRight, BarChart3, Bot, ClipboardCheck, LayoutDashboard } from "lucide-react";

const productIcons = {
  hunR: ClipboardCheck,
  TraQ: LayoutDashboard,
  "Employee Appraisal System": BarChart3,
  "AI Agents": Bot,
} as const;

function DashboardMockup({ variant }: { variant: "hunR" | "TraQ" | "default" }) {
  if (variant === "hunR") {
    return (
      <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4">
        <div className="mb-3 flex gap-2">
          <div className="h-2 w-16 rounded-full bg-white/40" />
          <div className="h-2 w-10 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2">
          {[88, 72, 95].map((score) => (
            <div key={score} className="flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-white/15">
                <div className="h-2 rounded-full bg-white/70" style={{ width: `${score}%` }} />
              </div>
              <span className="text-xs text-white/70">{score}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "TraQ") {
    return (
      <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4">
        <div className="grid grid-cols-3 gap-2">
          {["On track", "At risk", "Done"].map((label, index) => (
            <div key={label} className="rounded-lg bg-white/10 p-2 text-center">
              <div className="text-lg font-semibold">{[12, 3, 8][index]}</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex h-20 items-end gap-1 rounded-xl border border-white/20 bg-white/10 p-4">
      {[40, 65, 50, 80, 55].map((height) => (
        <div key={height} className="flex-1 rounded-t bg-white/50" style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}

export function ProductCard({
  name,
  tagline,
  description,
  bullets,
  quote,
  author,
  featured = false,
}: {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  quote?: string | null;
  author?: string | null;
  featured?: boolean;
}) {
  const Icon = productIcons[name as keyof typeof productIcons] ?? LayoutDashboard;
  const mockupVariant = name === "hunR" ? "hunR" : name === "TraQ" ? "TraQ" : "default";

  return (
    <article
      className={`h-full overflow-hidden rounded-[24px] border bg-white shadow-[0_12px_40px_rgba(27,42,74,0.06)] ${
        featured ? "border-[#1E9BE0]/30" : "border-slate-200"
      }`}
    >
      <div className="bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            <Icon className="h-3.5 w-3.5" />
            Product
          </div>
          <ArrowRight className="h-5 w-5" />
        </div>
        <h3 className="mt-6 text-3xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-white/80">{tagline}</p>
        {featured ? <DashboardMockup variant={mockupVariant} /> : null}
      </div>
      <div className="space-y-5 p-6">
        <p className="text-base leading-7 text-slate-600">{description}</p>
        <ul className="space-y-3 text-sm text-slate-700">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {quote ? (
          <blockquote className="rounded-2xl border border-slate-200 bg-[#F7F9FC] p-4 text-sm italic leading-7 text-slate-700">
            &ldquo;{quote}&rdquo;
            {author ? (
              <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] not-italic text-[#1B2A4A]">
                — {author}
              </footer>
            ) : null}
          </blockquote>
        ) : null}
      </div>
    </article>
  );
}
