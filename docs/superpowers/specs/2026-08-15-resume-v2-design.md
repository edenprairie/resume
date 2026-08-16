# Jun Wang Resume Site v2 — Design Spec

Date: 2026-08-15
Status: Draft for review

## 1. Goal

Build a brand-new resume website for Jun Wang that:

- Uses the most current popular tech stack (Next.js 15 + React 18/19, App Router)
- Is written from Jun's real experience (facts already on the current resume; no new metrics)
- Deliberately **does not read as AI-generated**: human voice, editorial design, no template tells
- Lives on a **separate subdomain** so the current site at `resume.junwang.us` stays untouched

## 2. Design Direction (approved via visual companion)

**"Editorial — The Memo"** (Option A)

- Warm ivory paper background (`#faf6ee`), deep ink text (`#221e17`), one muted burnt-orange accent (`#c4571e`)
- Serif display typography (Georgia/editorial serif feel), small-caps sans labels
- Print-like layout: hairline rules, generous whitespace, section labels in a left rail
- Reads like a well-edited profile in a magazine — understated, executive, timeless
- Approved mood: warm paper + muted accent (vs. white+red or monochrome alternatives)

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | Most current popular; user already runs Next.js for J&J Tech |
| Language | TypeScript | Industry standard, type-safe |
| React | React 19 (ships with Next.js 15) | Current stable |
| Styling | Plain CSS (hand-authored, CSS custom properties) | Full control over the editorial look; no framework "AI look" |
| Fonts | Google Fonts: serif display + system sans fallback | Editorial character; self-hosted via next/font |
| Icons | Minimal inline SVG | No icon-font dependency |
| Deployment | GitHub Pages on a **new repo** + new CNAME subdomain | Current site untouched |

**Why a new repo:** GitHub Pages serves one custom domain per Pages site.
A second subdomain (`resume2.junwang.us` or similar) needs its own Pages site,
which is cleanest as its own repository.

## 4. Site Structure — one page, sectioned

Sticky top nav with anchor links: Experience · Projects · Skills · Education · Download PDF

1. **Header** — name, title ("Director of Software Engineering"), one-line human intro, contact (email, LinkedIn, GitHub, location)
2. **Experience** — the three current roles (Optum, Amazon, CVS Health) + shorter entries for earlier roles, in the approved editorial two-column layout (section label rail on left, content right)
3. **Highlights** — stat cards (6M+ members, 180+ apps, 30 critical systems, $8M/yr savings) as a quiet proof band
4. **Projects & Open Source** — key projects (oncology prior auth, EDI claims, TnT, GitHub contributions, Arctic Code Vault)
5. **Skills** — grouped, honest leveling, no "advanced everything" exaggeration
6. **Education** — St. Thomas (in progress), North China Electric Power University
7. **Interests / Community** — STEM teaching, nonprofit founder, videography
8. **Footer** — copyright, link back

## 5. Writing Strategy (anti-AI, human voice)

Rules applied to every section:

- **No AI tells**: no "passionate", "leverage", "synergy", "driven", "dynamic", "proven track record" as filler; no emoji; no "In today's fast-paced world"
- **First person where natural** ("I lead…", "I built…") — real people say "I"
- **Concrete over abstract**: numbers, systems, real outcomes already on the resume
- **Varied sentence length** — short beats long; no uniform parallel structure
- **Specific, plain verbs**: built, led, cut, migrated, launched — not "spearheaded transformative initiatives"
- **Honest scope**: "led a two-pizza team", "5 scrum teams / 30 engineers" — scale stated plainly
- Tone: calm, confident, understated. A director describing their work, not marketing themselves

Sample rewrite direction for the Optum entry (from existing facts):

> *I lead technical architecture for Optum Behavioral Health, where my team's shared API layer
> carries 180+ web applications — 30 of them critical. I also work with the CTO office on
> engineering maturity, and I'm driving a generative-AI initiative in utilization management,
> modernizing how clinical decisions are reviewed.*

## 6. Content Scope

- Rewrite **existing facts only** (user's explicit choice) — no invented metrics
- Current role stands as-is: Director of Software Engineering at Optum, Oct 2022–Present
- The current site's content is the source of truth for facts

## 7. Non-Goals

- Do NOT modify the current Vite site or `resume.junwang.us`
- Do NOT add certifications/languages (user skipped)
- No blog, no multi-page expansion (user chose one-page)

## 8. Delivery & Verification

1. Scaffold new repo (e.g., `edenprairie/resume-v2`), Next.js 15 + TS
2. Implement design + content per this spec
3. `next build` → static export → deploy to GitHub Pages with CNAME
4. Verify: build passes, zero audit vulnerabilities, live site shows editorial design
5. Leave current repo and site untouched

## 9. Open Question

- Exact subdomain name: propose `resume2.junwang.us` (or user's preference) — needs DNS CNAME record pointed at GitHub Pages

**Decision (approved):** subdomain is **`cv.junwang.us`**.

