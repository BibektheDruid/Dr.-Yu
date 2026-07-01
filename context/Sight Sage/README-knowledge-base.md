# SightSage — Deep-Research Knowledge Base

> Built 2026-06-30 via multi-agent deep research over sightsage.com/en-ca.
> Each product file has YAML frontmatter (RAG-ready) + verbatim, risk-flagged content.

## Layout
- `products/` — one file per product (full extraction)
- `collections/` — collection-level positioning
- `clinical-studies.md` · `reviews.md` · `faqs-and-resources.md` · `nutritional-expertise.md` · `brand-story.md`
- `claims-risk-register.md` — consolidated risk flags vs. 'never claim a cure'

## Product index

| Product | Price | Rating | Reviews | Coverage |
| --- | --- | --- | --- | --- |
| [1 Month Herbal Treatment Supply](products/1-month-herbal-supply.md) | $570.00 CAD |  | 0 | ✅ complete |
| [Adaptogen-X](products/adaptogen-x.md) | $78.00 CAD | 4.8 | 49 | 🟡 partial |
| [Blackberry & Veggie Cookies](products/blackberry-veggie-cookies.md) | $117.00 CAD (currently Sold out) | 5.0 | 1 | ✅ complete |
| [Blueberry & Veggie Cookies](products/blueberry-veggie-cookies.md) | $117.00 CAD | 5.0 | 5 | ✅ complete |
| [Blueberry Gummies](products/blueberry-gummies.md) | $52.00 CAD | 4.92 | 148 | 🟡 partial |
| [Blueberry Gummies - 60 gummies (20 packs of 3)](products/blueberry-gummies-20-packs-of-3.md) | $52.00 CAD | 4.92 | 148 | 🟡 partial |
| [Consultation with Kathy - 20 minutes](products/consultation-with-kathy.md) | $130.00 CAD | 5.0 | 6 | 🟡 partial |
| [Hair Pro](products/hair-pro.md) | $78.00 CAD | 4.91 | 23 | 🟡 partial |
| [Kathyhealthtips Wellness Tips for Digital Lifestyle](products/kathyhealthtips-wellness-tips-for-digital-lifestyle.md) | $36.00 CAD | 4.53 | 30 | 🟡 partial |
| [Mild Dry Eye Relief Bundle](products/normal-osdi-score.md) | $104.00 CAD | 4.0 | 1 | 🟡 partial |
| [Mind-Body Wellness Bundle](products/mind-body-wellness-bundle.md) | $494.00 CAD |  | 0 | 🟡 partial |
| [Moderate Dry Eye Relief Bundle](products/moderate-dry-eye-relief-bundle.md) | $202.00 CAD |  |  | ✅ complete |
| [Raspberry & Veggie Cookies](products/raspberry-veggie-cookies.md) | $117.00 CAD | 5.0 | 3 | ✅ complete |
| [Revive and Thrive Hair Bundle](products/revive-and-thrive-hair.md) | $130.00 CAD | 5.0 | 9 | ✅ complete |
| [Severe Dry Eye Relief Bundle](products/severe-dry-eye-relief-bundle.md) | $293.00 CAD | 5.0 | 1 | 🟡 partial |
| [SightC](products/sightc-natural-dry-eye-supplement.md) | $71.00 CAD | 4.88 | 167 | 🟡 partial |
| [SightSage Hou Kui Black Tea (6 Sachets)](products/sightsage-hou-kui-black-tea-6-sachets.md) | $298.00 CAD |  | 0 | 🟡 partial |
| [SightSage Meridian Energizer – Herbal Acupoint Patches](products/sightsage-meridian-energizer-herbal-acupoint-patches.md) | $43.00 CAD (en-ca page); $30.00 USD on the .com/USD page. Product is currently backordered. |  | 0 (no reviews posted) | 🟡 partial |
| [Slim Revive Thrive Bundle](products/revive-thrive-slim-bundle.md) | $228.00 CAD | 4.5 | 2 | ✅ complete |
| [Superfood Wellness Blend](products/superfood-wellness-blend.md) | $130.00 CAD | 4.93 | 181 | 🟡 partial |
| [The Wellness Bundle](products/wellness-bundle.md) | $167.00 CAD | 4.0 | 1 | ✅ complete |

**Totals:** 21 products · 8 complete · 13 partial. Specialist docs written: 6/6.

## Status reconciliation (read this before the audit below)

The orchestrator coverage audit below ran *inside* the workflow, before the 6 specialist docs were written to disk. Two of its top findings are therefore **stale/resolved**:

- ~~"Cross-cutting docs missing from disk / `collections/` empty"~~ → **Resolved.** All 6 specialist docs now exist: `clinical-studies.md`, `reviews.md`, `faqs-and-resources.md`, `nutritional-expertise.md`, `collections/_overview.md`, `brand-story.md`.
- ~~"Clinical studies uncaptured / NCT05027087 black hole"~~ → **Resolved** in `clinical-studies.md`: trial NCT05027087 (PLUM) verified on ClinicalTrials.gov (68 pts, randomized double-blind, completed Jan 2023, **results unpublished**); all goji/blueberry PubMed/PMC citations traced and verification-noted.

**The one genuinely open gap** is full review-corpus capture: review widgets are JS-rendered, so ratings + counts + ~5 representative reviews per product were captured via static fetch, but the full corpus — especially **negative (1–3 star) reviews and per-review dates** — is not. Closing it needs a headless-browser (Playwright) pass over the high-volume pages (SightC 167, Superfood 181, Blueberry Gummies 148, Adaptogen-X 49, Hair Pro 23). Minor data-quality items also remain (`normal-osdi-score` name/slug/body disagree; a few aggregate-vs-shown rating mismatches).


## Orchestrator coverage audit

## Overall Catalog Completeness Assessment

**Catalog size:** 21 products, all 21 with a captured `.md` file on disk (114-231 lines each — none is a stub). Verified at `/Users/mikeshields/Desktop/Claude/Dr-Yu/context/Sight Sage/products/`.

**Status split:** 7 `complete` / 14 `partial`. That is a 67% partial rate, but the partials are **mostly defensible** — the recurring cause is not lazy capture, it is three structural blind spots in the source site:

1. **JS-rendered review widgets** (the single biggest gap). 12+ products report large review corpora (SightC 167, Superfood 181, Blueberry Gummies 148, Adaptogen-X 49, etc.) but only ~5 individual reviews surface in static HTML/WebFetch. Individual review **dates and per-review star ratings are essentially never captured** anywhere in the catalog. This means every aggregate rating, distribution, and "lowest-star review" claim is unverified against primary text.
2. **Missing Supplement/Nutrition Facts panels** — no mg dosages, serving sizes, excipients, or gummy-base/gelling agents on Adaptogen-X, SightC, Blueberry Gummies (both SKUs), Hair Pro, and others. For a supplement brand this is a material content gap and a compliance-documentation gap.
3. **Clinical studies are uncaptured.** NCT05027087 is referenced on multiple gummy/bundle pages, but the `/pages/clinical-studies` sub-page rendered as a JS shell/404 in every attempt. No study design, n, duration, or outcomes were ever extracted. This directly undercuts the catalog's many disease/prevention claims.

**Most important finding — cross-cutting docs are missing from disk.** The brief states "6 cross-cutting specialist docs were produced (clinical studies, reviews, FAQs, nutrition, collections, brand story)." On disk I find only `claims-risk-register.md`, `README-knowledge-base.md`, and `sightsage-brand-kit-context.md`. The `collections/` directory **is empty**. There is **no** standalone clinical-studies doc, reviews doc, FAQ doc, nutrition doc, or collections doc. Either those 6 specialist outputs were never written to this knowledge base or live elsewhere; as captured here, 4-5 of the 6 claimed cross-cutting deliverables are absent. This should be reconciled before the KB is treated as complete.

**Positive:** The `claims-risk-register.md` is strong — it aggregates 59 high-risk claims with per-claim type and rationale, correctly surfacing the highest-compliance-risk items (anti-cancer "inhibit cancer cells"/"prevent DNA damage" on both Blueberry Gummies SKUs; disease-prevention lists; alopecia/PCOS/retinitis-pigmentosa associations). Audit notes show genuine adversarial verification (verbatim corrections, removed hallucinated prices/claims, attribution fixes between bundle and component pages). Claim counts (5-23) track page richness sensibly; no product has suspiciously few claims given its page type.

**Recommendations:**

## Recommendations to Close Gaps (priority order)

1. **Reconcile the missing cross-cutting deliverables FIRST.** Locate or (re)produce the 5-6 claimed specialist docs — clinical-studies, reviews, FAQs, nutrition, collections, brand-story. On disk only `claims-risk-register.md`, `README-knowledge-base.md`, and `sightsage-brand-kit-context.md` exist; `collections/` is empty. Until these exist, the "6 specialist docs" claim is not substantiated by the knowledge base.

2. **Do one render-capable review-scraping pass** (Playwright/headless browser, not WebFetch) for the high-volume pages: SightC (167), Superfood (181), Blueberry Gummies x2 (148), Adaptogen-X (49), Hair Pro (23). Capture (a) the full review corpus, (b) per-review star ratings + dates, and critically (c) the **negative reviews (1-3 star)** — currently zero negative review text is captured anywhere, which biases the entire KB toward 5-star sentiment and hides issues like Mind-Body's lost "Very expensive now" 1-star.

3. **Resolve the clinical-studies black hole.** NCT05027087 is cited as on-site backing for several disease/cancer-adjacent claims but was never extracted. Pull the trial record directly from ClinicalTrials.gov (design, n, duration, primary outcomes) and attach it to the risk register entries so the high-risk gummy/bundle claims can be assessed against actual evidence. (PubMed/ClinicalTrials tooling is available for this.)

4. **Capture Supplement/Nutrition Facts panels** for all ingestibles (Adaptogen-X, SightC, both Blueberry Gummies SKUs, Hair Pro, Superfood). If genuinely absent from the site, log that as a brand content/compliance gap to feed back to SightSage rather than as a research limitation.

5. **Fix the `normal-osdi-score` product identity.** Slug, title ('Mild Dry Eye Relief Bundle'), and body ('Mild Dry Eye Support Bundle') disagree, and OSDI/quiz content is absent despite the slug. Standardize the canonical name and note the body/title discrepancy explicitly so downstream consumers don't treat it as three products.

6. **Resolve aggregate-vs-captured rating inconsistencies** flagged on `wellness-bundle`, `normal-osdi-score`, and `raspberry-veggie-cookies` (displayed 4.0/5.0 with a single 5-star review; 5.0 avg with a 3-star review present). Either confirm the widget default/unsynced-aggregate explanation by re-rendering, or annotate each as a known data-quality artifact.

7. **Retry the `severe-dry-eye-relief-bundle` component 404s.** Other entries successfully reached `/products/blueberry-gummies`, so the 404 here is likely transient/path-specific; a retry should recover the gummy component copy and let this move toward complete.

8. **Re-grade two 'complete' items as borderline:** `revive-and-thrive-hair` (only 5 of 9 reviews) and arguably `wellness-bundle` (unverified credentials + rating inconsistency) are marked complete but carry the same review/provenance gaps as several partials. Either downgrade for consistency or document why the page-level capture is deemed complete despite missing reviews.

9. **Verify component-vs-bundle claim attribution in the risk register.** Multiple bundles fold in component-page claims (the cancer/DNA claims on the dry-eye bundles; consultation disease lists folded into 1-month-herbal-supply). Confirm each high-risk claim in `claims-risk-register.md` is attributed to its true source page so compliance review targets the right URL.