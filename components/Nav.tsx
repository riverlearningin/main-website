"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navItems } from "@/lib/data/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled || pathname !== "/"
            ? "border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(27,42,74,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 lg:px-8">
          <Logo light={onHero} />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-[#1E9BE0] ${
                  onHero ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,92,252,0.25)] transition hover:scale-[1.03]"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              onHero
                ? "border-slate-300/30 bg-white/10 text-white"
                : "border-slate-200 bg-white text-[#1B2A4A]"
            }`}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#10192E] px-5 pt-24 md:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-semibold text-white/90 transition hover:text-[#1E9BE0]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex w-fit rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-6 py-3 text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
