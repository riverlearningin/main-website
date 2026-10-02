import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data/site";

export function CTASection({ showContact = true }: { showContact?: boolean }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1B2A4A] to-[#10192E] p-10 lg:p-16">
        {/* Background glow orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#1E9BE0]/20 to-[#7C5CFC]/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#7C5CFC]/15 blur-2xl"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-block rounded-full border border-[#1E9BE0]/30 bg-[#1E9BE0]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">
            Ready to talk?
          </div>

          <h2 className="text-h1 mt-4 text-white">
            Every transformation starts with one honest conversation.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tell us where your business stands today. We&apos;ll tell you where to focus first.
          </p>

          {showContact ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-300">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition hover:text-[#1E9BE0]"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 transition hover:text-[#1E9BE0]"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
            </div>
          ) : null}

          <Link
            href="/contact"
            id="cta-section-button"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(124,92,252,0.3)] transition hover:scale-[1.03]"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
