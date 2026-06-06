---
name: chiran-perera-design
description: Use this skill to generate well-branded interfaces and assets for Chiran Perera — a strictly monochrome, grotesque, futuristic lifestyle-brand design studio — for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit (fullscreen project slideshow + case studies).
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view — link `styles.css` for the tokens, work on the near-black
`--bg`, set ONE per-project `--accent`, and let oversized **Stolzl 700** titles layered with
**black-and-white imagery** and **Space Mono** labels carry the design. Sharp corners, hairline
structure, no glow. If working on production code, copy assets and read the rules here to become an
expert in designing with this brand.

Quick orientation:
- **Strict monochrome.** Near-black `#0A0A0B` canvas, white→grey ink, hairline borders. The ONLY
  colour is `--accent`, set per project and used sparingly (a dot, an active line, one character).
  Never purple, never two accents, never gradients.
- **Type:** Stolzl (display + body; geometric grotesque, weight 700 for oversized titles) + Space
  Mono (eyebrows, metadata, pagination, buttons). Tight tracking, layered over imagery.
- **Imagery:** full-bleed black-and-white, type laid over it. Use labelled placeholder tiles when
  real media isn't supplied — never invent imagery.
- **Components** (`components/`): Button, Tag, Eyebrow, Badge, Panel, StatCard. See each
  `.prompt.md`.
- **UI kit** (`ui_kits/studio-site/`): a fullscreen project slideshow → direct long-form case
  studies. The best reference for layout, chrome, and the voice.
- **Voice:** first-person, sentence-case headings, UPPERCASE mono labels/CTAs with `→`, proof via
  mono numbers, no emoji. See the README's "Content fundamentals".

If the user invokes this skill without other guidance, ask them what they want to build or design,
ask a few focused questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.
