---
name: Alloy GTM
description: An operator-led reaction log for diagnosing, building, and operating go-to-market signal systems.
colors:
  ink: "#071b24"
  ink-raised: "#102f3a"
  paper: "#f2f2ec"
  paper-bright: "#fffdf7"
  reaction-orange: "#f06432"
  reaction-orange-ink: "#b5431a"
  reaction-orange-bright: "#ff8a5c"
  reagent-blue: "#155eef"
  reagent-blue-bright: "#4d86ff"
  mist: "#8ca0a7"
  rule-dark: "#294651"
  rule-light: "#c7d0d0"
  ink-muted: "#5a6c74"
  ink-subtle: "#3d545e"
  paper-muted: "#cfdbdb"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
  wordmark:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
  micro:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.625rem"
  small:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
  body-small:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9375rem"
  body-large:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.0625rem"
  nav:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.125rem"
  subtitle:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.375rem"
  figure-title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.75rem"
  score:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "3rem"
  pull:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
  audit-display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)"
rounded:
  square: "0px"
  subtle: "2px"
  node: "9999px"
spacing:
  unit: "8px"
  field: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.reaction-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "16px 24px"
  input:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
---

# Design System: Alloy GTM

## Overview

**Creative North Star: "The Reaction Log"**

The visual world comes from an active chemistry bench: lab notebooks, analytical run sheets, reaction diagrams, instrument plots, marked-up observations, and the physical evidence of a system being tested. It is technical without becoming a software dashboard and expressive without turning chemistry into costume. For Alloy, the bench instrument is the signal trace: the brand broadcast measured against market friction, with the gap between them made visible.

The system pairs oversized operator-first storytelling with authentic working records. Large editorial fields establish conviction; notebook structures and direct founder language prove who performs the work. The durable signature is a reaction path that gains weight as the page moves from problem to offer to action.

**Key Characteristics:**

- Oversized, direct statements paired with dense working evidence.
- Authentic signal-science artifacts: resonance traces, spectrograms, run sheets, and observations — never clinical pathology metaphors.
- Human operator proof alongside diagrams, measurements, and process.
- The four offers (Crucible, Teardown, Diagnostic Sprint, Build) expressed as one ladder of ways in, not separate sub-brands.
- Alternating quiet notebook fields (paper) and decisive dark operational fields (ink), threaded by the reaction path.

## Naming

The mark is the supplied logo asset (`public/alloy-basic-white-logo.webp`): the gold Λ glyph beside "Alloy" in white, always rendered on ink or dark fields. In body copy, the first reference is "Alloy GTM" and subsequent references are "Alloy." Polychlorinated Ventures LLC appears only as the footer credit. The four offers are never styled as separate sub-brands.

## Colors

Use a full functional palette: off-white notebook fields, deep inky slate, reaction orange for action and intervention, and reagent blue for measurement and evidence. The frontmatter values are normative. Neither accent is scattered decoratively.

**The Functional Reagent Rule.** Every saturated color must identify a real role, state, or relationship. In figures, reagent blue marks the measured signal, reaction orange marks the gap or the intervention, and mist marks noise.

**Tonal ramp.** Secondary and tertiary text never use neutral gray: on paper fields use ink-muted and ink-subtle; on ink fields use paper-muted and mist. Reagent-blue-bright is the measurement accent reserved for dark fields, where the base reagent blue is too deep to read. Reaction orange has two text-role companions: orange-ink for text on paper fields and orange-bright for fine text on ink-raised, because the base tone only carries at fill size or on deep ink.

## Typography

Use Barlow Condensed for declarations, Manrope for body copy, and DM Mono only for run identifiers, measurements, and compact controls.

Display type is emphatic and closely set. Body copy remains conversational and readable at 65-75 characters. Labels are terse and systematic, but never replace clear language with laboratory jargon.

**The Operator Voice Rule.** Large type states a position; small type supplies evidence. Neither exists merely for atmosphere.

## Layout

Use fluid edge-to-edge fields with generous responsive gutters rather than a centered stack of equal cards. Alternate paper and ink fields in deliberate sequence, and thread the reaction path through the transitions so the page reads as one continuous run. Notebook rules and reaction paths establish alignment across otherwise varied compositions.

On narrow screens, every process becomes a legible vertical sequence. The selected ownership path remains primary while alternate levels stay visible. DOM order and visual order must agree.

## Elevation & Depth

The system is flat by default. Depth appears only where a physical record, photograph, or movable notebook layer overlaps another surface. Shadows are directional and structural, like paper resting on a bench, never ambient glow.

## Shapes

Controls and records use restrained, nearly square corners. Irregularity comes from authored diagrams, crop, annotation, and paper overlap rather than bubbly containers. Reaction paths, ruled lines, instrument traces, and clipped figure frames are the recurring geometry.

## Components

### Buttons

- **Primary:** Square reaction-orange field with inky text, compact mono labeling, and a minimum 44px target.
- **Hover / Focus:** Primary buttons invert to the surrounding paper or ink field; focus uses an offset orange ring.
- **Secondary:** Text links carry a one-pixel underline and change role color rather than gaining a container.

### Cards / Containers

- **Corner Style:** Square by default. Records use at most a subtle 2px correction.
- **Background:** Paper records sit on ink benches; content groups use rules and proximity instead of rounded cards.
- **Shadow Strategy:** Only overlapping paper and image layers receive the directional paper shadow.

### Inputs / Fields

- **Style:** Bright paper field, one-pixel ink border, persistent mono label, no rounded shell.
- **Focus:** Border shifts to reaction orange while the global offset focus ring remains visible.
- **Error / Disabled:** Error copy names the failed operation and recovery; disabled controls retain legible text.

### Navigation

The navigation is an inky fixed bar with the Alloy logo at left, mono links, orange active state, and a square mobile menu. The primary contact action is the only filled control in the bar.

### Offer Ladder

Offer cards are bright paper records on the ink bench, square with the directional paper shadow. The recommended tier carries a filled orange `RECOMMENDED` tag and an orange-keyed shadow — the only use of reaction orange as a container accent, and it identifies a real role. Enquiry forms that receive offer CTAs are paper records in the same field, with the offer preselected.

### Figures

Instrument plots (resonance traces, spectrograms) are authored SVG with a mono title block (`FIG. n — TITLE`), axis rules in the field's rule color, and accents assigned by the Functional Reagent Rule. Figures carry information; they are never decoration.

## Marks

The favicon is the gold Λ glyph (`public/favicon.svg`), rendered on ink for the PNG and ICO derivatives (`favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`). The site logo is `public/alloy-basic-white-logo.webp`, used in the navigation and footer. One word, always: the mark never splits into two words, and Polychlorinated Ventures never appears as the site's subject.

## Do's and Don'ts

### Do:

- **Do** use authentic signal-science artifacts such as resonance traces, spectrograms, run logs, observations, and lab notebooks.
- **Do** make Andrew's operator role visible through direct language and real imagery when available.
- **Do** express increasing ownership through line weight, continuity, and process depth.
- **Do** combine manifesto-scale statements with concrete evidence and next actions.

### Don't:

- **Don't** use clinical accession records, pathology language, or medical-lab motifs.
- **Don't** turn the four offers into separate sub-brands.
- **Don't** split the alloygtm mark into two words, and don't let Polychlorinated Ventures appear as the site's subject.
- **Don't** fall back to equal rounded cards, generic dashboards, or chemistry-themed decoration without information value.
