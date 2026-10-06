"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Icon } from "./Icon";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import { CAT_ICON, CATEGORIES, type ServiceCat } from "@/lib/services";

const LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.label])) as Record<ServiceCat | "all", string>;
const STEP = 9;

/** Filterable grid of uniform story cards; the full story opens in a dialog so the page stays short. */
export function CaseStudiesList() {
  const [cat, setCat] = useState<ServiceCat | "all">("all");
  const [limit, setLimit] = useState(STEP);
  const [story, setStory] = useState<CaseStudy | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  const all = CASE_STUDIES.filter((c) => cat === "all" || c.cat === cat);
  const shown = all.slice(0, limit);

  const open = (c: CaseStudy) => {
    setStory(c);
    dlg.current?.showModal();
  };

  return (
    <>
      <div className="svc-bar">
        <div className="svc-filters" role="group" aria-label="Filter case studies">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              className="fbtn"
              aria-pressed={cat === c.key}
              onClick={() => {
                setCat(c.key);
                setLimit(STEP);
              }}
            >
              {c.key === "all" ? "All stories" : c.label}
            </button>
          ))}
        </div>
        <span className="svc-count" role="status" aria-live="polite">
          Showing {shown.length} of {all.length}
        </span>
      </div>

      <ul className="cs-grid">
        {shown.map((c) => (
          <li key={c.n} className="cs">
            <div className="cs-top">
              <span className="iconbox"><Icon name={CAT_ICON[c.cat]} size={22} /></span>
              <span className="cs-cat">{LABEL[c.cat]}</span>
            </div>
            <h3 className="cs-title">{c.title}</h3>
            <p className="cs-client">{c.client}</p>
            <div className="cs-res">
              <span>Result</span>
              <p>{c.result}</p>
            </div>
            <button type="button" className="link-arrow cs-more" onClick={() => open(c)} aria-label={`Read the full story: ${c.title}`}>
              Read the full story <Icon name="arrow" size={16} />
            </button>
          </li>
        ))}
      </ul>

      {limit < all.length ? (
        <div className="cs-showmore">
          <button type="button" className="btn btn-ghost" onClick={() => setLimit((l) => l + STEP)}>
            Show more stories ({all.length - limit} more)
          </button>
        </div>
      ) : null}

      <dialog
        ref={dlg}
        className="cs-dlg"
        aria-labelledby="cs-dlg-t"
        onClick={(e) => {
          if (e.target === dlg.current) dlg.current?.close();
        }}
      >
        {story ? (
          <div className="cs-dlg-in">
            <button type="button" className="cs-x" aria-label="Close story" onClick={() => dlg.current?.close()}>
              <Icon name="close" size={20} />
            </button>
            <div className="cs-top">
              <span className="iconbox"><Icon name={CAT_ICON[story.cat]} size={22} /></span>
              <span className="cs-cat">{LABEL[story.cat]}</span>
            </div>
            <h2 id="cs-dlg-t" className="cs-title">{story.title}</h2>
            <p className="cs-client">{story.client}</p>
            <dl className="cs-steps">
              <div><dt>Challenge</dt><dd>{story.challenge}</dd></div>
              <div><dt>What we did</dt><dd>{story.did}</dd></div>
              <div className="res"><dt>Result</dt><dd>{story.result}</dd></div>
            </dl>
            <Link href="/contact" className="link-arrow">Facing something similar? Talk to us <Icon name="arrow" size={16} /></Link>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
