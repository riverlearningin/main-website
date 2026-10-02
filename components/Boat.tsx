import type { CSSProperties } from "react";

type Props = {
  /** "light" = navy boat for light backgrounds; "dark" = white outline boat for navy backgrounds */
  tone?: "light" | "dark";
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
  /** use the 10px bob (design uses 12px in the hero, 10px elsewhere) */
  small?: boolean;
};

/** The River Learning sailboat. Place it so its hull sits on a wave line. */
export function Boat({ tone = "light", strokeWidth = 7, className = "", style, small }: Props) {
  const dark = tone === "dark";
  const ink = dark ? "#FFFFFF" : "#20325B";
  return (
    <svg
      className={`boat bob${small ? " sm" : ""} ${className}`}
      style={style}
      viewBox="0 0 400 360"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="200" y1="28" x2="200" y2="262" stroke={ink} strokeWidth={strokeWidth} />
      <path d="M208 40 Q 292 140 336 248 L208 248 Z" fill={dark ? "none" : "#FFFFFF"} stroke={ink} strokeWidth={strokeWidth} />
      <path d="M192 70 L192 248 L104 248 Z" fill={dark ? "none" : "#E3F2FB"} stroke={dark ? "#8FD0F2" : "#008ED5"} strokeWidth={strokeWidth} />
      <path d="M64 262 L346 262 Q 326 300 290 306 L118 306 Q 82 300 64 262 Z" fill={ink} stroke={ink} strokeWidth={strokeWidth} />
    </svg>
  );
}
