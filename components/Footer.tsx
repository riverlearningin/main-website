import Image from "next/image";
import Link from "next/link";
import { SITE } from "./site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="in">
        <div className="foot-grid">
          <div className="foot-brand">
            <Image src="/images/logo-white.png" alt="River Learning" width={711} height={129} />
            <p>{SITE.tagline}</p>
          </div>
          <nav className="foot-col" aria-label="Explore">
            <h2>Explore</h2>
            <ul>
              <li><Link href="/about">About Gopal</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/training">Training</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/case-studies">Case studies</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Products">
            <h2>Products</h2>
            <ul>
              <li><Link href="/products">hunR<span className="d-only"> — Skills Assessment</span></Link></li>
              <li><Link href="/products">TraQ<span className="d-only"> — Project Execution</span></Link></li>
              <li>
                <Link href="/products">
                  <span className="d-only">Employee Appraisal System</span>
                  <span className="m-only">Appraisal System</span>
                </Link>
              </li>
              <li><Link href="/products">AI Agents</Link></li>
            </ul>
          </nav>
          <div className="foot-col foot-contact">
            <h2>Get in touch</h2>
            <ul>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.url}>riverlearning.in</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bar">
          <span>© 2026 River Learning. All rights reserved.</span>
          <span>Gopal Kamath · Business Management Consultant</span>
        </div>
      </div>
    </footer>
  );
}
