# Dr. Yu — SecondBrain (Wellspring Clinic & SightSage)

Everything for the Dr. Weidong Yu engagement, ready to drop into a GitHub repo.

## What's inside

| Folder | What it is |
| --- | --- |
| `intake-form/` | The brand-kit intake web app (Next.js). Dr. Yu fills out his info and drops files here. |
| `proposals/` | The client-facing proposal/agreement pages and their PDF/Markdown versions. |

## Deal summary
- **Plan:** Growth — **$5,000.00 CAD**, one-time, about a 3-week build.
- **Payments:** three Interac e-transfers of **$1,666.67 + $1,666.67 + $1,666.66** to `mike@reachium.io`.
- **Booking:** integrates with **Jane App** for clinic appointments.

## Live links
- Growth agreement: https://dr-yu-growth-agreement.vercel.app
- Intake form: _not deployed yet_

---

## intake-form (Next.js app)

Where Dr. Yu sends his brand assets and answers. Files upload to **Vercel Blob**; answers are saved as JSON.

### Run it locally
```bash
cd intake-form
npm install
npm run dev          # opens on http://localhost:3000
```

### Environment variables (needed for the "Send" button + inbox to work)
Create `intake-form/.env.local` with:
```
BLOB_READ_WRITE_TOKEN=...   # from connecting a Vercel Blob store to the project
INBOX_KEY=choose-a-secret   # password for your private inbox page
```
- `BLOB_READ_WRITE_TOKEN` appears after you create a Vercel Blob store and **Connect Project** to it in the Vercel dashboard (Storage tab). Then `vercel env pull .env.local` brings it down.
- `INBOX_KEY` is any secret string you pick.

### Your private inbox
Visit `/inbox?key=YOUR_INBOX_KEY` to see every submission: who, when, clickable download links for each file Dr. Yu dropped, and all his typed answers.

### Where the files actually land (Vercel)
- Uploaded files → the Blob store root (each with a random tag in the name).
- Submission records → a `submissions/` folder in the same Blob store (one JSON per submission).
- Browse them anytime: Vercel dashboard → **Storage** → your Blob store → **Browser**.

---

## proposals (client-facing)

| File | What it is |
| --- | --- |
| `dr-yu-growth-agreement.html` / `.pdf` | The accepted Growth agreement (price, payment schedule, onboarding checklist). |
| `dr-yu-pricing.html` | The three-tier pricing page (Starter / Growth / Powerhouse). |
| `dr-yu.html` | The original "after-hours patient capture" proposal. |
| `2nd-Brain_Proposal_for-Dr-Yu.html` | Earlier proposal draft. |
| `SecondBrain-Growth-Agreement-Dr-Yu.md` / `.pdf` | Doc/PDF versions of the agreement. |
| `SecondBrain-Pricing-Dr-Yu.pdf` | PDF of the pricing page. |

These are self-contained static HTML files. Open them in any browser, or host them by dropping them in a `public/` folder of a web project.
