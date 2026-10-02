"use client";

import { useId, useState, useSyncExternalStore, type ReactNode } from "react";
import { Icon } from "./Icon";

const QUERY = "(max-width: 1023px)";
function subscribe(cb: () => void) {
  const m = window.matchMedia(QUERY);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
/** true on phone/tablet widths, where panels collapse. Server and desktop render everything open. */
export function useCompact() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
}

type Props = {
  /** content of the toggle row */
  head: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  headClassName?: string;
  /** heading level wrapping the button, so panels stay in the document outline */
  as?: "h2" | "h3" | "div";
  /** hide the chevron */
  noChevron?: boolean;
};

/**
 * Tap-to-expand panel on phone (accessible disclosure button + region); on desktop the same markup is
 * always open and the toggle is disabled, so one DOM serves both designs.
 */
export function Accordion({ head, children, defaultOpen = false, className = "", headClassName = "", as: Tag = "div", noChevron }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const compact = useCompact();
  const id = useId();
  return (
    <div className={`acc${open ? " open" : ""} ${className}`}>
      <Tag className="acc-h">
        <button
          type="button"
          className={`acc-head ${headClassName}`}
          disabled={!compact}
          aria-expanded={compact ? open : undefined}
          aria-controls={compact ? id : undefined}
          onClick={() => setOpen((o) => !o)}
        >
          {head}
          {noChevron ? null : (
            <span className="chev m-only" aria-hidden="true"><Icon name="chevDown" size={20} /></span>
          )}
        </button>
      </Tag>
      <div id={id} className="acc-body">{children}</div>
    </div>
  );
}
