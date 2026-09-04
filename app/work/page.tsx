"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FadeInSection } from "@/components/FadeInSection";
import { FilterChips } from "@/components/FilterChips";
import { caseStudies, industryFilters } from "@/lib/data/caseStudies";

const pageSize = 9;

export default function WorkPage() {
  const [selected, setSelected] = useState<(typeof industryFilters)[number]>("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesIndustry = selected === "All" || study.industry === selected;
      const haystack = `${study.title} ${study.clientProfile} ${study.challenge} ${study.approach} ${study.result}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesIndustry && matchesSearch;
    });
  }, [search, selected]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="page-shell section-padding">
      <FadeInSection className="mb-10 max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">Case studies</div>
        <h1 className="text-h1 mt-3 text-[#1B2A4A]">Real transformations, measurable outcomes.</h1>
      </FadeInSection>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterChips
          options={industryFilters}
          selected={selected}
          onSelect={(filter) => {
            setSelected(filter);
            setVisibleCount(pageSize);
          }}
        />

        <label className="relative block w-full max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setVisibleCount(pageSize);
            }}
            placeholder="Search case studies"
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#1E9BE0] focus:ring-2 focus:ring-[#1E9BE0]/20"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((study, index) => {
          const id = `${study.title}-${index}`;
          return (
            <FadeInSection key={id}>
              <CaseStudyCard
                study={study}
                expanded={expandedId === id}
                onToggle={() => setExpandedId(expandedId === id ? null : id)}
              />
            </FadeInSection>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-8 text-center text-slate-600">
          No case studies match your current search.
        </div>
      ) : null}

      {visibleCount < filtered.length ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + pageSize)}
            className="rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(30,155,224,0.2)] transition hover:scale-[1.03]"
          >
            Load more
          </button>
        </div>
      ) : null}
    </main>
  );
}
