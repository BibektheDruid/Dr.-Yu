# tcmrp.com Faithful Replica — Build Spec

> Source of truth for the orchestrator + build/review agents. Date: 2026-06-30.
> Goal: a **verbatim, visually-exact** rebuild of https://tcmrp.com (Wellspring Clinic / Dr. Weidong Yu)
> as a clean, maintainable **Next.js 14 (App Router) + Tailwind** codebase. Client-authorized rebuild
> (client lost source access). For **testing**, deploy to a **Vercel preview** — do NOT touch live DNS.

## Capture artifacts (ground truth — agents MUST read these)
Capture dir: `…/scratchpad/tcmrp-capture/`
- `html/<slug>.html` — raw server HTML (verbatim copy lives here).
- `manifest/<slug>.json` — `bodyText` (clean verbatim text), `h1/h2/h3`, `nav`, `footerText`, `tokens`, `images[]`, `bgImages[]`, `iframes[]`, `anchors[]` (text+href), `resources[]`.
- `screens/<slug>-desktop.png` & `-mobile.png` — visual ground truth (1440w / 414w, full page).
- `previews/<slug>-desktop.jpg` — lightweight viewing copies.
- `assets/wp-content/…` — all 85 downloaded assets (images/svgs/fonts/css), mirrored paths.

## Page inventory (11 routes)
| Route | Slug | Title |
|---|---|---|
| `/` | home | Holistic Treatment for Retinitis Pigmentosa |
| `/retinitis-pigmentosa-treatment` | treatment | Retinitis Pigmentosa Treatment |
| `/about-us` | about-us | About Us (anchors: #about-wellspring-clinic, #about-our-founder) |
| `/patient-stories` | patient-stories | Patient Stories |
| `/faq` | faq | FAQ (accordion) |
| `/travel-logistics` | travel-logistics | Travel Logistics |
| `/accommodation-tips` | accommodation-tips | Accommodation Tips |
| `/contact-us` | contact-us | Contact Us (form) — **orchestrator builds as exemplar** |
| `/terms-of-use` | terms-of-use | Terms of Use |
| `/blog` | blog | News (empty WP blog index: "It seems we can't find what you're looking for." / "Categories" / "No categories") |
| `/repeatable-cta-blocks` | repeatable-cta-blocks | Internal Elementor CTA container — verify; likely noindex utility, low priority |

## Design tokens (exact, from rendered CSS)
- **Brand green (primary):** `#1d6531`. Deep: `#004f1b`, `#0d3d1a`. Accent: `#439d55`, `#2a7a41`, bright `#39b54a`.
- **Cream/sand:** section bg `#f5f3ed` / `#faf8f4` / `#fdf9e5`; border/sand `#dad7d0`. **Gold accent:** `#b8962e`.
- **Ink (headings):** `#0b0b0b`. **Body text:** `#4a4a4a`. **Muted:** `#6b6b6b`. White `#ffffff`.
- **Fonts:** body **Inter** (base 22px / line-height 32px on desktop, scales down on mobile); headings **Playfair Display** (700). H1 hero ≈ 74px/81px. Also load **Roboto**, **Roboto Slab** (Elementor globals). Load via `next/font/google` → CSS vars `--font-inter`, `--font-playfair`, `--font-roboto`, `--font-roboto-slab`.
- **Buttons:** solid green (`#1d6531`, white text, radius ~6–8px), outline (on dark = white border/text; on light = green border/text), pill paddings. Hover darkens.
- **Cards:** white, ~1px `#e7e3da`/`#dad7d0` border, radius ~14–18px, soft shadow.
- **Eyebrow labels:** uppercase, letter-spaced, gold/green, preceded by a short dash or leaf/wave icon.

## Global chrome
**Header** (sticky, white, subtle shadow): logo `Group-91.svg` (links `/`). Nav: Home `/`, Treatment `/retinitis-pigmentosa-treatment`, **About Us ▾** (About Wellspring Clinic `/about-us#about-wellspring-clinic`, About Dr. Yu `/about-us#about-our-founder`, FAQ `/faq`, News `/blog`), Patient Stories `/patient-stories`, **Resource Hub ▾** (Travel logistics `/travel-logistics`, Accommodation tips `/accommodation-tips`), Contact `/contact-us`. Right: solid green **Book Appointment** → `/contact-us`. Active link gets a light pill. Mobile: hamburger → drawer with collapsible submenus.

**Footer** (dark green `#1d6531`): logo `Group-55.svg`, then NAP — `916 West King Edward Avenue, Vancouver, BC V5Z 2E2` (→ maps link), `Toll Free: 1-877-737-7876 (USA/Canada)` (tel:), `Local: 604-737-7876` (tel:), `wellspring2828@gmail.com` (mailto:). Social circles: Facebook `https://www.facebook.com/WVIPgroup`, YouTube `http://www.youtube.com/user/WellspringClinic`, LinkedIn `http://ca.linkedin.com/pub/dr-weidong-yu/21/4a7/16`. **Quick Links:** Retinitis Pigmentosa Treatment, Patient Stories, Travel logistics, Accommodation tips, Contact. **About Us:** About Wellspring Clinic, About Dr. Yu, FAQ, News. Copyright bar: `© 1997-2018 Wellspring TCM Technology Institute Ltd. All Rights Reserved. | Terms of Use`.

**"Listen To This"** pill precedes most sections — a styled control; implement with Web Speech API (`speechSynthesis`) reading that section's text, falling back to inert if unsupported.

## Shared components (orchestrator builds in `components/`)
`Container`, `Header`, `Footer`, `Button`, `Eyebrow`, `SectionHeading`, `PageHero` (green wave hero), `ListenToThis`, `StatCounter` (count-up via IntersectionObserver — e.g. 1,200+ / 28+), `Accordion`, `Tabs` (testimonials/case studies), `IconCard`, `VideoThumb` (YouTube lightbox/link), `ContactForm`, `CTASection` ("Ready to Get Help?"), `DisclaimerCard`. Site data centralised in `lib/site.js` (nav, footer, NAP, socials).

## Contact form (working — reuse intake-form Blob pattern)
Fields (verbatim labels/placeholders): Name* ("Your full name"), Phone* ("+1 (000) 000-0000"), Email* ("you@example.com"), City You Reside In* ("e.g. Vancouver, BC"), How long have you had RP? ("e.g. 5 years"), In-person or virtual consultation? (select: "Select one…", In-person, Virtual, Not sure yet), Any other details relevant to your RP condition (textarea, "Optional — share anything you feel is relevant…"). Button **Submit Now** + "Fields marked * are required". POST JSON → `/api/submit` → Vercel Blob `submissions/*.json`. Private viewer at `/inbox?key=INBOX_KEY`. Same component embedded on Home, Patient Stories, Contact.

## Assets
Copy `tcmrp-capture/assets/wp-content` → `public/wp-content`. Reference root-relative (strip `https://tcmrp.com`). Favicon from `wellspringicon-150x150.png`. Logos: header `Group-91.svg`, footer `Group-55.svg`. Hero wave bg `Mask-group.jpg` / wave SVGs. External links (YouTube videos, Google Maps, social) kept as absolute.

## Orchestration
1. **Orchestrator** (main session): capture (done) → scaffold + full design system + Contact exemplar → `npm install && next build` to prove foundation compiles.
2. **Build agents** (parallel, 1/page): flesh out each `app/<route>/page.js` **verbatim** from manifest+HTML+screenshot, using shared components; page-scoped subcomponents only (no edits to shared files).
3. **Critical-review agents** (parallel, 1/page): verbatim copy-diff vs `manifest.bodyText`, link-href check, code review; report → fix loop.
4. **Orchestrator visual-diff**: re-run capture script against `localhost:3000`, compare to original screenshots; fix until match.
5. `next build` clean → run locally → Vercel **preview** deploy (no DNS).

## Acceptance criteria (measured, not asserted)
- Every page's visible text matches `manifest.bodyText` verbatim (allowing only chrome/nav repetition).
- All nav/footer/CTA hrefs match captured `anchors[]`.
- Desktop + mobile screenshots visually match originals (section order, colors, type, spacing).
- `next build` passes with no errors; all internal links resolve; contact form submits to Blob.
