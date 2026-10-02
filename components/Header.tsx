"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Wave } from "./Wave";
import { NAV, SITE } from "./site";

const MENU_LINKS = [{ href: "/", label: "Home" }, ...NAV];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  // close on navigation
  useEffect(() => setOpen(false), [pathname]);

  // lock scroll, Esc to close, move focus into the menu and back out
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const opener = openRef.current;
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open]);

  const current = (href: string) => (pathname === href ? ("page" as const) : undefined);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="site-header">
        <Link href="/" className="logo" aria-label="River Learning home">
          <Image src="/images/logo-color.png" alt="River Learning" width={574} height={102} priority />
        </Link>
        <nav className="site-nav" aria-label="Main">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-nav">Book a call</Link>
        <button ref={openRef} type="button" className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Icon name="menu" />
        </button>

        {open && (
          <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Image src="/images/logo-color.png" alt="River Learning" width={574} height={102} style={{ height: 30, width: "auto" }} />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{ width: 48, height: 48, borderRadius: 999, border: 0, background: "#20325B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <Icon name="close" />
              </button>
            </div>
            <nav aria-label="Menu" style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
              {MENU_LINKS.map((l) => (
                <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                  {l.label}
                  <span style={{ color: "#008ED5", display: "flex" }}><Icon name="arrow" size={20} /></span>
                </Link>
              ))}
            </nav>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto", position: "relative", zIndex: 1 }}>
              <Link href="/contact" className="btn btn-primary" style={{ height: 54, padding: "0 22px" }}>
                Book a call <Icon name="arrow" size={18} stroke={2} />
              </Link>
              <a href={SITE.phoneHref} className="btn btn-ghost" style={{ height: 54, padding: "0 22px" }}>
                {SITE.phone}
              </a>
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 150, height: 60, pointerEvents: "none" }} aria-hidden="true">
              <Wave shape={1} color="#008ED5" opacity={0.45} top={0} />
              <Wave shape={2} color="#20325B" opacity={0.16} top={22} />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
