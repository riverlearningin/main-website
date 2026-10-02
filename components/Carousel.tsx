import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./Icon";

type Props = {
  /** columns on desktop */
  cols: number;
  gap?: number;
  /** number of cards, for the "Swipe to see all N" hint */
  count: number;
  /** extra card-level reveal class applied to each child wrapper on phone */
  children: ReactNode;
  label?: string;
};

/** Card grid on desktop; horizontal scroll-snap swipe carousel on phone (next card peeks). */
export function Carousel({ cols, gap = 20, count, children, label }: Props) {
  return (
    <div className="snap-wrap">
      <div
        className="snap"
        style={{ "--cols": cols, "--gap": `${gap}px` } as CSSProperties}
        role="group"
        aria-label={label}
      >
        {children}
      </div>
      <div className="swipe">
        Swipe to see all {count} <Icon name="arrow" size={14} />
      </div>
    </div>
  );
}

/** Wrap each carousel card so it slides/scales in while swiping on phone. */
export function Slide({ children }: { children: ReactNode }) {
  return <div className="rv-x">{children}</div>;
}
