# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are B2B founders and growth leaders who found product-market fit once and are now entering a new market, launching a next product, or starting a new company — and discovering that the go-to-market systems that worked for Act I don't transfer to the new segment.

Secondary users are teams preparing a first product-marketing or GTM hire who want a validated foundation before they commit headcount, and founders debating opinions who would rather run concurrent experiments.

## Product Purpose

Alloy GTM is a founder-led go-to-market consultancy that applies signal science and experimental discipline to growth. It audits the gap between the signal a company broadcasts (positioning, content, website) and the signal the market broadcasts (pain expressed on forums, review sites, social media, and competitor reviews), then builds and runs the systems that close that gap.

The website — alloygtm.com — helps prospective clients understand the signal-science approach, try the free GTM Signal Resonance Audit, evaluate the Diagnose–Build–Operate engagement ladder and relevant client experience, and start a conversation with Andrew Campbell.

Success means a qualified founder recognizes that their growth problem is a signal problem and confidently makes contact.

## Positioning

Alloy GTM combines Andrew Campbell's Ph.D. training in chemistry with hands-on GTM work across edtech, SaaS, and AI automation. Its differentiating mechanism is measurement before messaging: most consultants fix the message; Alloy measures whether it is landing. The name carries the thesis — product-market fit isn't a pure metal, it's an alloy of the solution, the customer's needs, and the ecosystem they operate in. Shift the product or the segment, and the GTM foundation shifts with it.

## Operating Context

Prospective clients typically evaluate the consultancy by reading the home page, running the free signal audit, and reviewing Andrew's background and the client roster before starting a conversation by form, social channel, or a 30-minute no-prep call.

Engagements use one universal ownership ladder: Diagnose, Build, or Operate. The ladder describes how much execution Alloy owns, not separate service brands. Andrew works with 2–3 companies at a time, so engagements are focused and the thinking stays fresh. Most diagnostic work is short-term by design — weeks, not the open-ended commitment of a fractional hire.

## Capabilities and Constraints

- Diagnose (Diagnostic Audit Sprint) isolates signal leakage and constraints, and leaves execution with the client. Deliverable: audit report with a prioritized roadmap playbook.
- Build (Signal Engineer Build) designs, implements, instruments, and validates the GTM system with the client. Deliverable: operational GTM system, built and validated.
- Operate (GTM Ops Leadership) provides embedded ownership: continuous optimization, testing, enablement, and support in staffing a permanent team. Deliverable: 6–12 month bespoke partnership.
- The free GTM Signal Resonance Audit on the audit page is the primary acquisition device. Its analysis backend is not yet integrated in the Astro rebuild; the report UI renders a clearly labeled synthetic sample, and the integration point is marked in code.
- The public site includes home, contact, and audit routes.
- The site is built with Astro and deployed through Cloudflare infrastructure.
- The contact form's production handler and lead-routing process remain open decisions; the current Formspree action is a placeholder.
- Dedicated case study, pricing, legal, and booking surfaces are not currently part of the site. Their future inclusion is undecided.
- Polychlorinated Ventures LLC is the parent company and appears only as the corporate credit, never as the site's subject.

## Brand Commitments

- The brand mark is one word: alloygtm. Wordmarks, logos, favicons, and domains always render it as a single word.
- In copy, the first reference is "Alloy GTM"; subsequent references are "Alloy."
- Polychlorinated Ventures LLC appears only in the footer credit ("Powered by Polychlorinated Ventures LLC") and legal contexts.
- Preserve Andrew Campbell's central role as founder and his direct, credible presence in the product.
- Engagement levels use the plain-language names Diagnose, Build, and Operate. They must not become separate sub-brands.
- The voice is confident, practical, systems-oriented, and conversational. It favors measurable progress over hype or brute force.
- Signal science and chemistry are authentic parts of the company's language and point of view, not decorative claims.
- Founder-facing pages (contact, founder notes) use Andrew's first-person voice; commercial sections may use direct second person.

## Evidence on Hand

- Andrew Campbell's chemistry Ph.D. credential and the claim of 12+ client engagements are approved for public use.
- The current client roster — Quiltt, SS&C Blue Prism, Breakroom, Catalyst Education, GLYNT, Sinfonia, and Ebit — with links and logo permissions is approved. Source data is in `src/data/clients.ts`, with logo assets in `public/logos/`.
- Approved engagement-level names and descriptions are in `src/data/engagements.ts`.
- Existing brand assets include `public/favicon.svg` (reaction-path mark) and the alloygtm wordmark rendered in type.
- Copy migrated from the previous alloygtm.com (homepage narrative, audit explanation, FAQ, founder bio) is approved source material.
- The site does not contain approved testimonials, case-study outcomes, or quantified client results. Future work must not fabricate them. Demonstration data in the audit report UI must be labeled synthetic.

## Product Principles

1. Measure whether the message is landing before rewriting it.
2. Build systems that compound instead of adding disconnected effort.
3. Make recommendations testable and results measurable.
4. Use scientific rigor without losing practical business judgment.
5. Earn trust through specific experience, transparent thinking, and direct founder access.

## Accessibility & Inclusion

The product should preserve semantic structure, keyboard access, visible focus states, meaningful alternative text, labeled forms, and reduced-motion support. A formal accessibility conformance target remains an open decision.
