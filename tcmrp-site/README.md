# Wellspring Clinic — tcmrp.com replica

A clean, maintainable **Next.js 14 (App Router) + Tailwind** rebuild of [tcmrp.com](https://tcmrp.com)
(Wellspring Clinic / Dr. Weidong Yu), recreated verbatim from the live site for Dr. Yu (client-authorized;
the original is a WordPress/Elementor site the client no longer has source access to).

Built to be visually and textually faithful to the original while being editable: every page's copy is
reproduced word-for-word, the brand design tokens are matched to the live CSS, and all assets are served
locally.

## Stack
- **Next.js 14** App Router (plain JS/JSX) · **Tailwind CSS**
- Fonts via `next/font/google`: Inter (body), Playfair Display (headings), Roboto, Roboto Slab
- Contact form → **Vercel Blob** (same pattern as the `intake-form` app), viewable at `/inbox`

## Pages (11 routes)
`/` · `/retinitis-pigmentosa-treatment` · `/about-us` (#about-wellspring-clinic, #about-our-founder) ·
`/patient-stories` · `/faq` · `/travel-logistics` · `/accommodation-tips` · `/contact-us` ·
`/terms-of-use` · `/blog` (News) · `/repeatable-cta-blocks` (internal, noindex)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
# or a production build:
npm run build && npm start
```

## Environment variables
Copy `.env.local.example` → `.env.local`:
```
BLOB_READ_WRITE_TOKEN=...   # from a Vercel Blob store (Storage → Connect Project, then `vercel env pull`)
INBOX_KEY=choose-a-secret   # password for the private submissions viewer
```
- The contact/consultation form POSTs JSON to `/api/submit`, which writes one record per submission to
  the Blob store under `submissions/`.
- View submissions privately at **`/inbox?key=YOUR_INBOX_KEY`**.
- Without `BLOB_READ_WRITE_TOKEN` the form UI still renders; submission returns a graceful error.

## Deploy (Vercel preview — no DNS changes)
```bash
vercel            # creates a preview deployment (e.g. tcmrp-site-xxxx.vercel.app)
```
Then in the Vercel dashboard: create/connect a **Blob store**, add `BLOB_READ_WRITE_TOKEN` and `INBOX_KEY`
env vars, and redeploy. The live `tcmrp.com` domain is **not** touched — point DNS only when ready.

## Project layout
```
app/                 # one folder per route + api/submit + inbox
components/          # shared design system (Header, Footer, PageHero, Accordion, Tabs,
                     #   StatCounter, VideoThumb, ContactForm, CTASection, …)
  home/ treatment/ patient-stories/   # page-scoped subcomponents
lib/site.js          # nav, footer links, contact (NAP), socials — single source of truth
public/wp-content/   # all images/SVGs mirrored from the original (referenced root-relative)
tailwind.config.js   # brand tokens: green #1d6531, creams, sand, gold, ink/body/muted
```

## Fidelity notes
- **Verbatim copy**: text was captured from the live site (including collapsed accordion/tab panels) and
  reproduced exactly — source typos preserved intentionally.
- Collapsed accordion answers and inactive testimonial tabs are rendered in the DOM (hidden via CSS) so all
  content is present/crawlable, matching the original's behavior.
- **"Listen To This"** pills use the Web Speech API to read each section (the original is a TTS plugin).
- Known minor deltas vs. original: the Treatment hero shows the intro as text (original embeds a Dr. Yu
  video there); a few decorative section icons are omitted where icon→element mapping wasn't in the source;
  Geoff/Sharyn/Tracy testimonial videos render as quote+story (no separately-linked video URL was exposed).

Design spec: `../docs/superpowers/specs/2026-06-30-tcmrp-replica-design.md`.
