# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are founders and owners of B2B companies who suspect their revenue system is underperforming and are tired of two incomplete options: strategy consultancies that diagnose but can't build, and software vendors that build but don't diagnose. They have a stack already — CRM, outbound tools, content channels — and limited team capacity.

Secondary users are small-business owners without a marketing team, served by the Crucible product.

## Product Purpose

Alloy GTM is a hybrid offer: expert GTM diagnosis fused with hands-on implementation — custom playbooks, workflows, integrations, and purpose-built software. The brand metaphor is the alloy: two elements fused into something neither could be alone.

The website (alloygtm.com, deployed at alloygtm.pages.dev) makes the offer intelligible in seconds — what Alloy sells and why it is different from a consultant or a tool — and routes visitors into one of four ways in: Crucible, the Teardown, the Diagnostic Sprint, or the Build.

Success means a stranger can read the homepage hero and the gap section and correctly state, out loud, what Alloy GTM sells and why it is different.

## Positioning

Not a strategy consultancy (diagnoses but can't build). Not a software vendor (builds but doesn't diagnose). Alloy GTM finds what's broken in a revenue system and then builds the fix — working systems inside the stack the client already has. Andrew Campbell's chemistry Ph.D. is relevant as method: hypothesis, instrument, measure, iterate. Most go-to-market problems are measurement problems wearing a strategy costume.

## Operating Context

Visitors arrive at the homepage, evaluate the four offers, and convert through the enquiry form (first name, last name, business email, current challenge) or directly into the Crucible application. Andrew works remotely from Austin, Texas.

## Capabilities and Constraints

- **Crucible** — self-serve product. An AI content engine for founder-led marketing: record two minutes, get back an edited video and a week of on-brand posts. Early access $19/mo. CTAs link directly to the Crucible application; the production app URL is an open decision and the current href is a marked placeholder.
- **The Teardown** — 72 hours, $297. A recorded expert review of the buyer's GTM setup: twenty-minute walkthrough of site, funnel, CRM, or outbound, plus a one-page prioritized action list. No call required. Booking routes through the enquiry form.
- **The Diagnostic Sprint** — two weeks, $2,500. A full map of the lead-to-revenue system, a prioritized roadmap, and one fix built and running before the engagement ends. The recommended tier. Enquiries route through the enquiry form.
- **The Build** — monthly, from $4,000. Ongoing implementation partnership across the revenue stack: CRM architecture, workflow automation, data pipelines, custom internal tools. Enquiries route through the enquiry form.
- The public site includes `/`, `/crucible`, and `/about`. `/field-notes` (The 5 GTM Leaks content asset) is deferred.
- The site is built with Astro and deployed through Cloudflare infrastructure (alloygtm.pages.dev).
- The enquiry form's production handler and lead-routing process remain open decisions; the current Formspree action is a placeholder.
- Polychlorinated Ventures LLC is the parent company and appears only as the corporate credit, never as the site's subject.

## Brand Commitments

- The brand mark is the supplied logo asset (`public/alloy-basic-white-logo.webp`): the gold Λ glyph beside "Alloy" in white. The favicon family (`favicon.svg` plus its PNG/ICO derivatives) renders the Λ glyph on ink. Marks are never split into two words.
- In copy, the first reference is "Alloy GTM"; subsequent references are "Alloy."
- Polychlorinated Ventures LLC appears only in the footer credit.
- The positioning is "diagnosis fused with build." The retired "signal acquisition / signal intelligence" framing must not return; "signal over noise" survives only as a method statement on the about page.
- First-person biography lives on `/about` and is required there. The homepage uses no first-person biographical narrative above the Crucible spotlight. First person is permitted in service descriptions.
- The voice is confident, practical, and direct. It favors measurable progress over hype.
- No testimonial sliders with placeholder content, stock photography of people in offices, chat widgets, popups, animated counters, or blog index.
- Preserve Andrew Campbell's central role as founder and his credible, hands-on presence.

## Evidence on Hand

- Approved outcome claims (no inflated causation): doubled outbound reply rates in a one-week sprint; 10× B2B integration marketplace adoption growth in twelve months; +10 NPS points at a computer science education platform; 60%+ YoY product revenue growth supported across a 20+ product portfolio; a solution discovery tool still running in production after 2+ years; Crucible designed, built, and running in production.
- The mechanism details behind each outcome are approved as written on `/about`.
- Andrew Campbell's chemistry Ph.D., fifteen years of GTM experience, Austin Texas base, and industry span (EdTech, enterprise automation, data, fintech, AI) are approved for public use.
- Crucible's feature set (brand voice profiles, Director Mode, AI editorial pass, Magic Revision, multi-platform content, captions export, webhook/HighLevel publishing) and its technical stack (React/Vite/Vercel, Fastify, pg-boss, Docker/Fly.io, Supabase, Deepgram, Claude with Kimi and Gemini, ffmpeg, Python sidecar with librosa/spaCy, Expo companion app) are approved as written on `/crucible`.
- Existing brand assets include `public/alloy-basic-white-logo.webp` (site logo) and `public/favicon.svg` (Λ glyph) with its generated derivatives `favicon-32.png`, `favicon.ico`, and `apple-touch-icon.png`.
- The prior client roster (logos in `public/logos/`, data in `src/data/clients.ts`) remains approved but is not currently displayed.
- Do not fabricate testimonials, case-study outcomes beyond those listed, or quantified results.

## Product Principles

1. Integration over replacement — make the stack the client already pays for work together.
2. Diagnose before building — the playbook comes second.
3. Signal over noise — find the few behaviors that predict revenue and instrument for them (method statement, about page only).
4. Build it rather than recommend it — if something can be built inside the engagement, it gets built.

## Accessibility & Inclusion

The product should preserve semantic structure, keyboard access, visible focus states, meaningful alternative text, labeled forms, and reduced-motion support. A formal accessibility conformance target remains an open decision.
