"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  before = "",
  color = "text-[#22C55E]",
  size = "large",
}: {
  value: number;
  suffix?: string;
  before?: string;
  color?: string;
  size?: "large" | "compact";
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className={`font-space font-bold tabular-nums tracking-tight ${size === "large" ? "text-stat" : "text-3xl md:text-4xl"} ${color}`}
    >
      {before}
      {displayValue}
      {suffix}
    </span>
  );
}
