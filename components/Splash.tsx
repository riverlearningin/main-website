"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * First-visit intro (~3.5s): navy screen → blue wave draws → white logo wipes in →
 * navy panel lifts away with a curved bottom edge, revealing the hero. Skippable.
 * `html.intro` is set by the head script on first visit only; a flag is stored when it ends.
 */
export function Splash() {
  const [done, setDone] = useState(false);
  const [out, setOut] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const d = document.documentElement;
    if (!d.classList.contains("intro")) {
      setDone(true);
      return;
    }
    const finish = () => {
      try { localStorage.setItem("rl-intro-seen", "1"); } catch {}
      d.classList.remove("intro");
      d.style.overflow = "";
      setDone(true);
    };
    const t = window.setTimeout(finish, 3600);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") skip(); };
    const skip = () => { setOut(true); window.clearTimeout(t); window.setTimeout(finish, 650); };
    skipRef.current?.addEventListener("click", skip);
    window.addEventListener("keydown", onKey);
    skipRef.current?.focus({ preventScroll: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      d.style.overflow = "";
    };
  }, []);

  if (done) return null;
  return (
    <div className={`splash${out ? " out" : ""}`} role="dialog" aria-label="River Learning intro">
      <div className="logo-wipe">
        <Image src="/images/logo-white.png" alt="River Learning" width={711} height={129} priority />
      </div>
      <svg className="draw" viewBox="0 0 520 40" fill="none" aria-hidden="true">
        <path d="M0 20 Q 32.5 4 65 20 T 130 20 T 195 20 T 260 20 T 325 20 T 390 20 T 455 20 T 520 20" stroke="#008ED5" strokeWidth="3" strokeLinecap="round" pathLength={1} />
      </svg>
      <button ref={skipRef} type="button" className="skip-intro">Skip intro</button>
    </div>
  );
}
