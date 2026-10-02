import type { CSSProperties } from "react";

/** The wave shapes used in the designs: control-point height and half-wavelength. */
const SHAPES = {
  1: { cy: -6, step: 280 },
  2: { cy: 0, step: 240 },
  3: { cy: 0, step: 320 },
  4: { cy: 8, step: 200 },
  5: { cy: 8, step: 280 },
} as const;

const W = 2400;

function path(shape: keyof typeof SHAPES) {
  const { cy, step } = SHAPES[shape];
  let d = `M0 30 Q ${step / 2} ${cy} ${step} 30`;
  for (let x = step * 2; x < W + step; x += step) d += ` T ${x} 30`;
  return d;
}

const SPEED = { 1: "wa", 2: "wb", 3: "wc", 4: "wb", 5: "wa" } as const;

type Props = {
  shape: keyof typeof SHAPES;
  color: string;
  /** stroke opacity on desktop / on phone (defaults to desktop value) */
  opacity: number;
  opacityPhone?: number;
  /** top offset in px on desktop / on phone (defaults to desktop value) */
  top: number;
  topPhone?: number;
  strokeWidth?: number;
  /** hide on phone */
  desktopOnly?: boolean;
  /** hide on desktop */
  phoneOnly?: boolean;
};

/** One wave line. Each line is its own layer so they swell at different speeds. */
export function Wave({ shape, color, opacity, opacityPhone, top, topPhone, strokeWidth = 2, desktopOnly, phoneOnly }: Props) {
  const style = {
    "--t": `${top}px`,
    "--tm": `${topPhone ?? top}px`,
    "--so": opacity,
    "--som": opacityPhone ?? opacity,
  } as CSSProperties;
  return (
    <svg
      className={`wave ${SPEED[shape]}${desktopOnly ? " d-only" : ""}${phoneOnly ? " m-only" : ""}`}
      style={style}
      viewBox={`0 0 ${W} 60`}
      fill="none"
      aria-hidden="true"
    >
      <path d={path(shape)} stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}
