"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import {
  certificationTracks,
  mentoringTracks,
  onlineCourses,
  trainingGroups,
} from "@/lib/data/training";

const tabs = ["Training", "Online Courses", "Mentoring", "Certifications"] as const;

export default function LearningPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Training");
  const [openGroup, setOpenGroup] = useState<string | null>("Management");

  return (
    <main className="page-shell section-padding">
      <FadeInSection className="mb-12 max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">Learning</div>
        <h1 className="text-h1 mt-3 text-[#1B2A4A]">Build capability that lasts beyond any single project.</h1>
        <p className="text-body mt-5 text-slate-600">
          Focused, practical training programs designed to build lasting capability inside your organization — skills your teams actually apply on the job.
        </p>
      </FadeInSection>

      <div className="mb-10 flex flex-wrap gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] text-white"
                : "text-slate-600 hover:text-[#1E9BE0]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Training" ? (
        <div className="space-y-4">
          {trainingGroups.map((group) => {
            const isOpen = openGroup === group.label;
            return (
              <FadeInSection key={group.label}>
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="text-h2 text-[#1B2A4A]">{group.label}</div>
                    <ChevronDown className={`h-5 w-5 text-[#1E9BE0] transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen ? (
                    <div className="grid gap-4 border-t border-slate-100 p-6 md:grid-cols-2">
                      {group.items.map((item) => (
                        <div key={item.title} className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4">
                          <h3 className="font-semibold text-[#1B2A4A]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </FadeInSection>
            );
          })}
        </div>
      ) : null}

      {activeTab === "Online Courses" ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {onlineCourses.map((course) => (
            <FadeInSection key={course.title}>
              <article className="h-full rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#1E9BE0]/10 to-[#7C5CFC]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">
                  Course
                </div>
                <h3 className="text-h3 text-[#1B2A4A]">{course.title}</h3>
                <p className="mt-4 text-body text-slate-600">{course.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1E9BE0]">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      ) : null}

      {activeTab === "Mentoring" ? (
        <div className="grid gap-6 lg:grid-cols-3">
          {mentoringTracks.map((track) => (
            <FadeInSection key={track.role}>
              <article className="h-full rounded-[24px] border border-slate-200 bg-[#F7F9FC] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] text-lg font-semibold text-white">
                  {track.role.slice(0, 1)}
                </div>
                <h3 className="text-h2 text-[#1B2A4A]">{track.role}</h3>
                <p className="mt-4 text-body text-slate-600">{track.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      ) : null}

      {activeTab === "Certifications" ? (
        <div className="space-y-6">
          {certificationTracks.map((track) => (
            <FadeInSection key={track.name}>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
                <div className="mb-5 text-h2 text-[#1B2A4A]">{track.name}</div>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
                  {track.steps.map((step, index) => (
                    <div key={step.name} className="flex flex-1 items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] text-sm font-semibold text-white">
                        {step.level}
                      </div>
                      <div className="flex-1 rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3">
                        <div className="text-sm font-semibold text-[#1B2A4A]">{step.name}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-600">{step.focus}</div>
                      </div>
                      {index < track.steps.length - 1 ? (
                        <ArrowRight className="hidden h-5 w-5 shrink-0 text-[#1E9BE0] lg:block" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      ) : null}
    </main>
  );
}
