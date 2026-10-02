import type { Metadata } from "next";
import { Boat } from "@/components/Boat";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icon";
import { SITE } from "@/components/site";
import { Wave } from "@/components/Wave";
import { Words } from "@/components/Words";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Gopal Kamath at River Learning. Call +91 98812 02348, email gopal@riverlearning.in or send a message — the first conversation costs nothing but an hour of your time.",
  alternates: { canonical: "/contact" },
};

const ROWS: { icon: IconName; label: string; value: string; href: string }[] = [
  { icon: "phone", label: "Call", value: SITE.phone, href: SITE.phoneHref },
  { icon: "mail", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "globe", label: "Website", value: "riverlearning.in", href: SITE.url },
];

export default function Contact() {
  return (
    <section className="ct">
      <div className="ct-band" aria-hidden="true" />
      <div className="ct-sea" aria-hidden="true">
        <Wave shape={1} color="#008ED5" opacity={0.45} top={0} />
        <Wave shape={2} color="#20325B" opacity={0.16} top={40} />
        <Wave shape={3} color="#008ED5" opacity={0.25} top={80} />
      </div>
      <Boat small className="ct-boat" />
      <div className="ct-in">
        <div className="ct-copy">
          <div className="eyebrow ld l0">Contact</div>
          <h1><Words text="Let's talk about what's holding your business back." load /></h1>
          <p className="ld l10">
            Whether it&apos;s a shop floor that&apos;s outgrown its systems, a sales process running on gut instinct, or a growth plan that needs a clear roadmap — the first conversation costs nothing but an hour of your time.
          </p>
          <div className="ct-rows ld l11">
            {ROWS.map((r) => (
              <a key={r.label} href={r.href} className="ct-row">
                <span className="iconbox"><Icon name={r.icon} /></span>
                <span className="k"><span>{r.label}</span><b>{r.value}</b></span>
                <span className="go"><Icon name="arrow" size={18} /></span>
              </a>
            ))}
          </div>
          <div className="ct-who">
            <span className="av" aria-hidden="true">GK</span>
            <div><b>Gopal Kamath</b><span className="role">Business Management Consultant, River Learning</span></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
