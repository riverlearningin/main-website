"use client";

import { type IndustryFilter, type industryFilters } from "@/lib/data/caseStudies";

export function FilterChips({
  options,
  selected,
  onSelect,
}: {
  options: readonly IndustryFilter[];
  selected: IndustryFilter;
  onSelect: (value: IndustryFilter) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by industry">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          id={`filter-chip-${option.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
          onClick={() => onSelect(option)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            selected === option
              ? "bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] text-white shadow-[0_8px_20px_rgba(124,92,252,0.2)]"
              : "border border-slate-200 bg-white text-slate-600 hover:border-[#1E9BE0]/40 hover:text-[#1E9BE0]"
          }`}
          aria-pressed={selected === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
