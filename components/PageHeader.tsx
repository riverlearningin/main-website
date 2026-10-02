import type { CSSProperties, ReactNode } from "react";
import { Boat } from "./Boat";
import { Wave } from "./Wave";
import { Words } from "./Words";

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  /** buttons / chips shown under the lede */
  children?: ReactNode;
  /** desktop section height and wave offsets (design differs per page) */
  height?: number;
  waveTop?: number;
};

/**
 * Inner-page header: eyebrow, masked word-by-word title, lede, waves with a small boat riding the top wave.
 * Desktop: centred over a wave band. Phone: left-aligned with the sea strip beneath.
 */
export function PageHeader({ eyebrow, title, lede, children, height = 520, waveTop = 370 }: Props) {
  return (
    <section className="ph" style={{ "--ph-h": `${height}px` } as CSSProperties}>
      <div className="ph-sea" aria-hidden="true">
        <div className="ph-band" />
        <Wave shape={1} color="#008ED5" opacity={0.45} top={waveTop} topPhone={40} />
        <Wave shape={2} color="#20325B" opacity={0.16} top={waveTop + 36} topPhone={64} />
        <Wave shape={3} color="#008ED5" opacity={0.25} top={waveTop + 72} topPhone={88} />
        <Boat small className="ph-boat" style={{ "--bt": `${waveTop - 50}px` } as CSSProperties} />
      </div>
      <div className="ph-copy">
        <div className="eyebrow ld l0">{eyebrow}</div>
        <h1><Words text={title} load /></h1>
        <p className="ld l9">{lede}</p>
        {children ? <div className="ph-acts ld l10">{children}</div> : null}
      </div>
    </section>
  );
}
