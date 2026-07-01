# sightsage-site

Faithful replica of **sightsage.com/en-ca** (SightSage — Dr. Weidong Yu & Kathy) built for the client. Next.js 14 (App Router) + Tailwind, mirroring the sibling `../tcmrp-site` (Wellspring Clinic) conventions.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — 47 routes prerendered
npm run start    # serve the production build
```

## Architecture

- **`lib/catalog.js`** — auto-generated, verbatim product data pulled from the live Shopify JSON endpoints (`/products/*.js`, `/collections/*/products.json`). 21 products + 7 collections with titles, `description_html`, prices (cents), variants, images, ratings. Regenerate with `scratchpad/gen_catalog.py`.
- **`lib/site.js`** — single source of truth for nav, footer (badges / Get Help / Become a Member / legal), contact NAP, socials, announcement bar, and brand asset paths.
- **`app/`** — App Router routes:
  - `page.js` — home (hero, intro band, bestsellers, reviews band, values trio, founder band, blog, newsletter).
  - `products/[handle]/` — dynamic PDP (`generateStaticParams` → 21 products): gallery, buy box, Benefits/Description accordions, KEY INGREDIENTS grid, per-product FAQ, reviews summary, related row.
  - `collections/[handle]/` — dynamic collection grid (`generateStaticParams` → 7 collections).
  - `pages/*` — content + policy pages (Who We Are, Our Founder, Clinical Study, Contact, Bundles, Vision Club, Reviews, Blog, Privacy, Refund, Terms, Delivery & Returns, CCPA opt-out).
  - `cart/`, `search/`, `not-found.js`.
- **`components/`** — shared design system: Header (mega-nav + mobile drawer), Footer, Container, Button, Price, StarRating, ProductCard, ProductCarousel, Accordion, RichText, SectionHeading, Newsletter, plus `components/home/*` sections.
- **`public/s/files/...`** and **`public/cdn/shop/files/...`** — 86 images mirrored locally at their original Shopify CDN paths (self-contained; no hotlinking).

## Theme

Body **Nunito Sans**, headings **Cabin** (uppercase where the live site is). Brand purple `#533178`, star gold `#f4a400`. Tokens in `tailwind.config.js`.

## Fidelity notes

- Product/collection/page copy is **verbatim** from the live site; `description_html` renders as-is via `RichText`. No health claims were invented (see the KB risk register at `../context/Sight Sage/claims-risk-register.md`).
- Prices/variants/images are the client's real catalog data.
- This is a **static presentational replica** — cart/checkout, live review widgets (Judge.me), account auth, and the subscribe-&-save selling plans are represented visually but not wired to a backend. Account/FAQ/education links point to the live production endpoints.
- Built via a multi-agent workflow (foundation → parallel design team → integrate → critical-review orchestration → fix). Build is green; all 47 routes prerender.
