# River Learning website — build brief

You are building the production website for **River Learning** (business consulting, training and digital products, founded 2011 by Gopal Kamath) from finished designs in this folder. Match the designs closely; do not redesign.

## What's in this folder

| Path | What it is |
|---|---|
| `design/desktop/*.dc.html` | Approved desktop designs (1440 px), one file per page. **Source of truth for layout, copy, colours, spacing and motion.** |
| `design/phone/*.dc.html` | Approved phone designs (390 px). Source of truth for the mobile layout. |
| `assets/logo-color.png`, `assets/logo-white.png` | Logo (navy/blue on light; white on navy). Transparent PNGs. |
| `content/River_Learning_Website_Content.docx` | Original client copy. The designs already contain the final copy; use this only to check wording. |

### How to read the `.dc.html` files
They come from a design tool. They're ordinary HTML with inline styles, plus a few tool-specific bits:
- `<x-dc>` wraps the page; `<helmet>` holds the fonts `<link>` and the page CSS (keyframes, motion classes). Treat the helmet CSS as the global stylesheet.
- `<script src="./support.js">` and `<script type="text/x-dc">` belong to the design tool — ignore them, except to read state logic (Services filter, phone menu).
- `<sc-if value="{{…}}">` = conditional rendering; `{{name}}` = a value from that state logic.
- `href="Something.dc.html"` = link to that page (map to real routes below).

## Tech
Recommended: **Next.js (App Router) + TypeScript + Tailwind CSS**, static export, deployable to Vercel/Netlify. A plain static HTML/CSS/JS site is also acceptable if the owner prefers. No CMS needed yet. Keep everything responsive with one codebase: desktop design at ≥1024 px, phone design below 768 px, sensible in between.

## Routes
| Route | Desktop design | Phone design |
|---|---|---|
| `/` | `00-Intro-splash` (first visit only) → `01-Hero` + `02-Home-below-hero` | `phone/00-Intro-splash` → `phone/01-Home` |
| `/about` | `03-About` | `phone/03-About` |
| `/services` | `04-Services` | `phone/04-Services` |
| `/training` | `05-Training` | `phone/05-Training` |
| `/products` | `06-Products` | `phone/06-Products` |
| `/contact` | `07-Contact` | `phone/07-Contact` |

Shared components: header/nav (active page highlighted), footer, "Ready to talk?" CTA panel, page header with waves + boat, wave lines, sailboat SVG, buttons, cards, chips.

## Hard rules
1. **The homepage hero (`01-Hero.dc.html`) must be reproduced exactly** — layout, copy, colours, the wave lines, the bobbing boat and the four stat cards. The client approved it as-is.
2. Use the copy exactly as in the designs. Do not invent statistics, clients or testimonials.
3. Placeholders stay visibly marked until the client supplies the real thing: `[Photo of Gopal Kamath]` / `[Portrait of Gopal Kamath]`, and the hunR / TraQ screens labelled "Sample data".
4. Accessibility: real `<a>`/`<button>`/`<label>`, visible focus rings (2px `#008ED5`), alt text on logos, `aria-label` on icon buttons, colour contrast ≥ 4.5:1 for text.
5. Respect `prefers-reduced-motion`: switch off all animation.

## Design tokens
**Colours**
- Navy (primary, buttons, headings accent) `#20325B`
- Ink (headings) `#1A2A4D`
- Deep navy (footer, CTA panel, splash) `#131F3B`
- Sky blue (brand accent, primary CTA) `#008ED5`
- Blue (highlighted words, numbers) `#0083C6`
- Link / eyebrow blue `#0073B0`
- Light blue on navy `#8FD0F2`, `#4FB6EA`
- Body text `#4A5878`; muted `#5F6C88`
- Page background `#F7FAFD`; tint band `#EAF4FB`; card border `#DCE9F4`; white cards `#FFFFFF`
- Error/overdue (TraQ mock only) text `#B42318` on `#FDECEA`

**Type** — Manrope (Google Fonts, 400–800) for everything.
- Hero H1 76/1.02, weight 800, letter-spacing −0.04em. Page H1 64 (About 68, Contact 60). Section H2 46/1.1, 800, −0.03em. H3 19–28, 800. Body 15–19 / 1.6. Eyebrows 13px, 700, uppercase, letter-spacing 0.16em.
- Phone: H1 40–42, H2 32, body 16–17.

**Shape** — pill buttons (radius 999, height 54–56), cards radius 20–28 with 1px `#DCE9F4` border, max content width 1440 with 80 px side padding (20 px on phone).

## Signature elements
- **Sailboat**: inline SVG (viewBox `0 0 400 360`) — mast, white main sail with navy stroke, light-blue jib, navy hull. It must always **sit on a wave line**, never float above. Animation `bob`: 5s ease-in-out infinite, translateY 0 → −10/−12px with ±2° rotation.
- **Waves**: separate SVG lines (alternating sky blue / navy at low opacity), each animated sideways and slightly vertically at different speeds (`swellA` 9s/15s, `swellB` 12s, alternate).
- **Dashed route lines** connecting steps (How we work, About timeline) that draw left → right on scroll.

## Motion (see helmet CSS in any desktop file for exact keyframes)
- **Intro splash** (first visit, ~3.5s, skippable, store a flag so it doesn't replay every page view): navy screen → blue wave draws → white logo wipes in left→right → navy panel lifts away with a curved bottom edge revealing the hero.
- **Page titles** (inner pages): words slide up one by one from behind a mask on load.
- **Section headings**: same masked word slide-up, triggered on scroll.
- **Two-column sections**: left half slides in from the left, right half from the right.
- **2-column card grids**: alternate left/right slide ("zipper"); **3–4 column rows**: cards slide up with a stagger.
- **Tinted bands** (How we work, About stats, TraQ section): open outward from an inset rounded shape to full width.
- **"Ready to talk?" panel**: grows from 0.9 scale with rounder corners to full size.
- **Product mock screens**: rise up from below with a slight scale.
- **No blur effects** anywhere (the client rejected blur-to-clear).
- The designs use CSS scroll-driven animations (`animation-timeline: view()`). For production, implement the same reveals so they work in **all browsers** — e.g. IntersectionObserver or Framer Motion `whileInView` — and keep content visible if JS fails.

## Phone-specific behaviour
- Header: logo + round menu button; tapping opens a full-screen menu that slides down, with large links, "Book a call" and the phone number.
- Card groups become **horizontal swipe carousels** (scroll-snap, next card peeking, "Swipe to see all N" hint, cards slide/scale in while swiping).
- **Tap to expand**: Services is a filterable list of expandable rows; Training tracks are expandable panels (Management open by default); hunR tests sit behind "See all tests & question formats". Use `<details>/<summary>` or an accessible accordion.
- About stats are a 2×2 grid; TraQ mock shows 3 rows.

## Interactive features
- **Services filter**: All / Growth & Strategy / Operations & Process / People & Talent / Sales & Finance / Systems & Compliance, with a live count ("19 services"). Category per service is in the design's markup.
- **Contact form**: Full name, Company, Email, Phone, Topic (select), Message. Validate; on submit send to `gopal@riverlearning.in` via a form service (Formspree/Resend/Netlify Forms — ask the owner which). Show a success state.
- Phone/email links: `tel:+919881202348`, `mailto:gopal@riverlearning.in`.

## Also do
- SEO: page titles/descriptions, Open Graph, favicon from the boat mark, sitemap, robots.txt.
- Performance: optimise logo images, preload Manrope, Lighthouse ≥ 90 on mobile.
- Do not include the alternative hero concepts (A "Calm Waters", C "Navigator's Chart") — they were not chosen.

## Suggested build order
1. Project setup, tokens, fonts, shared components (nav, footer, buttons, boat, waves, CTA panel).
2. Homepage desktop (hero exact first), then phone.
3. Inner pages, desktop + phone.
4. Motion layer + intro splash.
5. Contact form wiring, SEO, accessibility and Lighthouse pass.
After each page, compare against the design file side by side.


---
Project notes (added during build): Next.js 16 app in repo root, plain global CSS (app/globals.css) instead of Tailwind. Handoff designs live in river-learning-website-handoff/ (reference only). Dev: `npm run dev`. Next-specific agent notes: @AGENTS.md
