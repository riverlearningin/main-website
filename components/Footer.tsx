import Link from "next/link";
import { Camera, Globe, Mail, MapPin, MessageCircle, Phone, Play } from "lucide-react";
import { Logo } from "@/components/Logo";
import { contactInfo } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#10192E] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo light />
            </div>
            <p className="max-w-md text-base leading-7 text-slate-300">
              Helping businesses turn operational chaos into measurable growth through practical strategy, systems, and capability-building.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Quick Links</h3>
            <ul className="space-y-3 text-base text-slate-200">
              <li><Link href="/" className="transition hover:text-[#1E9BE0]">Home</Link></li>
              <li><Link href="/services" className="transition hover:text-[#1E9BE0]">Services</Link></li>
              <li><Link href="/work" className="transition hover:text-[#1E9BE0]">Work</Link></li>
              <li><Link href="/learning" className="transition hover:text-[#1E9BE0]">Learning</Link></li>
              <li><Link href="/products" className="transition hover:text-[#1E9BE0]">Products</Link></li>
              <li><Link href="/about" className="transition hover:text-[#1E9BE0]">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Services</h3>
            <ul className="space-y-3 text-base text-slate-200">
              <li>Business Growth</li>
              <li>Process Improvement</li>
              <li>Training & Mentoring</li>
              <li>Certifications</li>
              <li>ERP & Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Contact</h3>
            <ul className="space-y-4 text-base text-slate-200">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-[#1E9BE0]" /> {contactInfo.phone}</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-[#1E9BE0]" /> {contactInfo.email}</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#1E9BE0]" /> {contactInfo.location}</li>
            </ul>
            <div className="mt-5 flex gap-3 text-slate-200">
              <a href={contactInfo.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 p-2 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]"><Globe className="h-4 w-4" /></a>
              <a href={contactInfo.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 p-2 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]"><Play className="h-4 w-4" /></a>
              <a href={contactInfo.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 p-2 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]"><MessageCircle className="h-4 w-4" /></a>
              <a href={contactInfo.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 p-2 transition hover:border-[#1E9BE0] hover:text-[#1E9BE0]"><Camera className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/80">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center px-5 py-5 text-sm text-slate-300 lg:px-8">
          © River Learning, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
