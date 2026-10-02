"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = ".rv, .rv-l, .rv-r, .rv-rise, .rv-grow, .rv-band, .rv-panel, .rv-line, .rvw";

/**
 * Cross-browser reveal fallback. Browsers with CSS scroll-driven animations use the CSS;
 * for the rest, an inline script in <head> sets `html.io` and this observer adds `.in`
 * as elements enter the viewport. Without JS, `html.io` is never set so content stays visible.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (!document.documentElement.classList.contains("io")) return;
    const els = document.querySelectorAll<HTMLElement>(SELECTOR);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

/** Runs before first paint (inline in <head>). */
export const HEAD_SCRIPT = `(function(){try{var d=document.documentElement;
if(!(window.CSS&&CSS.supports&&CSS.supports('animation-timeline: view()')))d.classList.add('io');
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(location.pathname==='/'&&!rm&&!localStorage.getItem('rl-intro-seen')){d.classList.add('intro');d.style.overflow='hidden'}
}catch(e){}})();`;
