import { ArrowRight, Camera, Globe, Mail, MapPin, MessageCircle, Phone, Play } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FadeInSection } from "@/components/FadeInSection";
import { contactInfo, whatHappensNext } from "@/lib/data/site";

export default function ContactPage() {
  return (
    <main>
      <div className="page-shell section-padding">
        <FadeInSection className="mb-12 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">Contact</div>
          <h1 className="text-h1 mt-3 text-[#1B2A4A]">Let&apos;s talk about what&apos;s holding your business back.</h1>
          <p className="text-body mt-5 text-slate-600">
            Whether it&apos;s a shop floor that&apos;s outgrown its systems, a sales process running on gut instinct, or a growth plan that needs a clear-eyed roadmap — the first conversation costs nothing but an hour of your time.
          </p>
        </FadeInSection>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeInSection>
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
              <div className="mb-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">Start the Conversation</div>
                <div className="mt-3 text-xl font-semibold text-[#1B2A4A]">Gopal Kamath</div>
                <div className="text-sm text-slate-600">Business Management Consultant, River Learning</div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E9BE0]/10 text-[#1E9BE0]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Phone</div>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="mt-1 text-lg font-semibold text-[#1B2A4A] hover:text-[#1E9BE0]">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7C5CFC]/10 text-[#7C5CFC]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="mt-1 text-lg font-semibold text-[#1B2A4A] hover:text-[#1E9BE0]">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]/10 text-[#22C55E]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Location</div>
                    <div className="mt-1 text-lg font-semibold text-[#1B2A4A]">{contactInfo.location}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a href={contactInfo.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]">
                  <Globe className="h-4 w-4" />
                </a>
                <a href={contactInfo.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]">
                  <Play className="h-4 w-4" />
                </a>
                <a href={contactInfo.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]">
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href={contactInfo.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]">
                  <Camera className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
              <form action={`mailto:${contactInfo.email}`} method="GET" className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                    <input name="subject" type="text" required className="w-full rounded-2xl border border-slate-200 bg-[#F7F9FC] px-4 py-3 text-base text-slate-700 outline-none focus:border-[#1E9BE0] focus:ring-2 focus:ring-[#1E9BE0]/20" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                    <input type="email" required className="w-full rounded-2xl border border-slate-200 bg-[#F7F9FC] px-4 py-3 text-base text-slate-700 outline-none focus:border-[#1E9BE0] focus:ring-2 focus:ring-[#1E9BE0]/20" placeholder="you@company.com" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
                  <input type="tel" className="w-full rounded-2xl border border-slate-200 bg-[#F7F9FC] px-4 py-3 text-base text-slate-700 outline-none focus:border-[#1E9BE0] focus:ring-2 focus:ring-[#1E9BE0]/20" placeholder="+91 98..." />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                  <textarea name="body" rows={6} required className="w-full rounded-2xl border border-slate-200 bg-[#F7F9FC] px-4 py-3 text-base text-slate-700 outline-none focus:border-[#1E9BE0] focus:ring-2 focus:ring-[#1E9BE0]/20" placeholder="Tell us what challenges you're facing..." />
                </label>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(30,155,224,0.2)] transition hover:scale-[1.03]">
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection className="mt-12">
          <div className="rounded-[28px] border border-slate-200 bg-[#F7F9FC] p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">What Happens Next</div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {whatHappensNext.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="font-semibold text-[#1B2A4A]">{step.title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      <CTASection showContact={false} />
    </main>
  );
}
