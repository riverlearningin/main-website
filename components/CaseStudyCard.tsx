"use client";

import { ChevronDown } from "lucide-react";
import { type CaseStudy } from "@/lib/data/caseStudies";

export function CaseStudyCard({
  study,
  expanded,
  onToggle,
}: {
  study: CaseStudy;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(27,42,74,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#7C5CFC]/30 hover:shadow-[0_18px_40px_rgba(124,92,252,0.10)]">
      {/* Card header */}
      <div className="flex-1 p-6">
        {/* Industry tag */}
        <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#1E9BE0]/10 to-[#7C5CFC]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">
          {study.industry}
        </div>

        <h3 className="font-space text-lg font-600 leading-snug text-[#1B2A4A]" style={{ fontWeight: 600 }}>
          {study.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">{study.clientProfile}</p>

        {/* Result — always visible, Results Green per spec */}
        <div className="mt-4 rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#22C55E]">
            Result
          </div>
          <p className="mt-1 text-sm font-medium leading-6 text-[#1B2A4A]">{study.result}</p>
        </div>
      </div>

      {/* Accordion trigger */}
      <button
        type="button"
        onClick={onToggle}
        id={`case-study-toggle-${study.title.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
        className="flex w-full items-center justify-between border-t border-slate-100 px-6 py-4 text-left text-sm font-semibold text-[#1E9BE0] transition hover:bg-slate-50"
        aria-expanded={expanded}
      >
        <span>{expanded ? "Hide details" : "See challenge & approach"}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion body */}
      {expanded ? (
        <div className="border-t border-slate-100 bg-[#F7F9FC] p-6 space-y-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Challenge
            </div>
            <p className="mt-1 text-sm leading-6 text-slate-700">{study.challenge}</p>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              What We Did
            </div>
            <p className="mt-1 text-sm leading-6 text-slate-700">{study.approach}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
