import Link from "next/link";
import { Boat } from "./Boat";
import { Icon } from "./Icon";
import { SITE } from "./site";
import { Wave } from "./Wave";
import { Words } from "./Words";

type Action = { label: string; href: string };

const DEFAULTS = {
  heading: "Let's talk about what's holding your business back.",
  body: "Whether it's a shop floor that's outgrown its systems, a sales process running on gut instinct, or a growth plan that needs a clear roadmap — the first conversation costs nothing.",
  primary: { label: "Start the conversation", href: "/contact" },
  secondary: { label: SITE.phone, href: SITE.phoneHref },
};

/** Shared "Ready to talk?" panel. Grows from an inset rounded shape as it scrolls in. */
export function CTAPanel({ heading = DEFAULTS.heading, body = DEFAULTS.body, primary = DEFAULTS.primary, secondary = DEFAULTS.secondary }: { heading?: string; body?: string; primary?: Action; secondary?: Action }) {
  return (
    <section className="cta-sec" aria-labelledby="cta-h">
      <div className="cta rv-band">
        <div className="cta-sea" aria-hidden="true">
          <Wave shape={1} color="#008ED5" opacity={0.6} top={330} topPhone={40} />
          <Wave shape={2} color="#8FD0F2" opacity={0.3} top={364} topPhone={64} />
          <Wave shape={3} color="#008ED5" opacity={0.3} top={398} topPhone={88} />
          <Wave shape={4} color="#8FD0F2" opacity={0.15} top={432} desktopOnly />
          <Boat tone="dark" strokeWidth={9} small className="cta-boat" />
        </div>
        <div className="cta-copy">
          <div className="eyebrow rv">Ready to talk?</div>
          <h2 id="cta-h" className="rvw">
            <Words text={heading} />
          </h2>
          <p className="rv d1">{body}</p>
          <div className="acts">
            <Link href={primary.href} className="btn btn-primary sm-h">
              {primary.label} <Icon name="arrow" size={18} />
            </Link>
            <a href={secondary.href} className="btn btn-ghost on-dark">{secondary.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
