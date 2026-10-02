"use client";

import Link from "next/link";
import { useState } from "react";
import { Accordion } from "./Accordion";
import { Icon } from "./Icon";
import { CAT_ICON, CATEGORIES, SERVICES, type ServiceCat } from "@/lib/services";

const LABEL: Record<ServiceCat, string> = Object.fromEntries(
  CATEGORIES.filter((c) => c.key !== "all").map((c) => [c.key, c.label]),
) as Record<ServiceCat, string>;

/** Filterable list: cards on desktop, tap-to-expand rows on phone. */
export function ServicesList() {
  const [cat, setCat] = useState<ServiceCat | "all">("all");
  const shown = SERVICES.filter((s) => cat === "all" || s.cat === cat);
  const n = shown.length;

  return (
    <>
      <div className="svc-bar">
        <div className="svc-filters" role="group" aria-label="Filter services">
          {CATEGORIES.map((c) => (
            <button key={c.key} type="button" className="fbtn" aria-pressed={cat === c.key} onClick={() => setCat(c.key)}>
              {c.label}
            </button>
          ))}
        </div>
        <span className="svc-count" role="status" aria-live="polite">
          {n} {n === 1 ? "service" : "services"}
        </span>
      </div>

      <div className="svc-grid">
        {shown.map((s, i) => (
          <article key={s.title} className={`svc rv d${i % 3}`}>
            <Accordion
              as="h3"
              headClassName="svc-head"
              head={
                <>
                  <span className="iconbox"><Icon name={CAT_ICON[s.cat]} /></span>
                  <span className="svc-cat">{LABEL[s.cat]}</span>
                  <span className="svc-title">{s.title}</span>
                </>
              }
            >
              <p>{s.text}</p>
              <div className="more">
                <Link href="/contact" className="link-arrow">Discuss this <Icon name="arrow" size={16} /></Link>
              </div>
            </Accordion>
          </article>
        ))}
      </div>
    </>
  );
}
