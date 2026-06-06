# Chiran Perera — Design System

The brand & interface system for **Chiran Perera**, a lifestyle-brand design studio in
**Colombo, Sri Lanka**. Chiran works across web development, web & UI/UX design, branding, social
campaigns and AI-driven digital marketing — building cinematic, editorial websites **engineered to
be cited by AI** (ChatGPT, Claude, Perplexity).

The portfolio presents itself **like a studio, not a résumé**: the work is the hero, and every
project is a fully-produced case study showing *thinking*, not just thumbnails.

**The feeling — and the whole system — is:** dark, confident, futuristic, tech-heavy.
**Strict monochrome** (near-black + white + greys), **massive grotesque type layered with
full-bleed black-and-white imagery**, technical mono metadata, numbered pagination, hairline
structure. The only colour anywhere is a **single, restrained, per-project accent** — set per case
study, used sparingly. There is no brand colour, and never any purple/gradient soup.

> This is v2. An earlier pass mistakenly rebuilt the studio's *old* shipped site (a violet/cyan
> light theme). That was wrong. This system follows the **`portfolio-architecture-framework.md`**
> direction and the **inspiration set** — monochrome, grotesque, per-project accent.

---

## Source material

- **Framework / blueprint (the direction this system embodies):**
  `chiranperera/markdowns/portfolio-architecture-framework.md` — the AI-forward, slideshow-led
  portfolio brief (vision, sitemap, design language, component inventory, data model).
- **Lineage reference:** `chiranperera/markdowns/wordpress-theme-analysis.md` — the prior
  Ohio/Colabrio WordPress fullscreen-slideshow portfolio the new site evolves from.
- **Inspiration set:** `chiranperera/inspirational/*.jpg` (and `uploads/*.jpg`) — grotesque display
  specimens (Neue Montreal, Neue Haas Grotesk, "56 Modern"), oversized numerals, monochrome
  editorial/technical layouts, and portfolio heroes where giant type is layered with B&W
  photography and a single accent (red, blue, amber, acid-lime) carries the colour.
- **GitHub:** `github.com/chiranperera/chiranperera` (framework) and
  `github.com/chiranperera/chiranperera.com` (the built Next.js site — useful for real copy,
  project names and contact details; its *visual* theme is the old one, not this system).

> Explore those repos/images to extend the system faithfully.

---

## Content fundamentals — how Chiran writes

Confident solo craftsperson. First person, plain-spoken, quietly technical. Sells outcomes and
thinking, never hype.

- **Person & address.** First-person singular ("**I** design and build…"). The reader is
  "**you / your brand**". One maker, one client — never corporate "we".
- **Tone.** Direct, a little blunt, certain. Short declaratives. *"The work is the hero."* /
  *"A portfolio piece is only as good as the thinking it shows."*
- **Casing.** **Sentence case** for headings and body. **UPPERCASE only** for mono eyebrows,
  labels, pagination and meta — always wide-tracked (`TRAVEL MARKETPLACE · WEB · AI — 2026`).
- **Headlines** are short and oversized; the title *is* the design. One accent character at most
  (a trailing dot, a single emphasised word) carries the project colour.
- **Eyebrows** are spec-sheet tags: `category · category — year`, `ROLE / Design + Build`,
  `01 / 05`. Numbers, pagination and metadata live in Space Mono.
- **Proof, not adjectives.** Concrete numbers carry weight: `3.4× organic`, `62% AI-cited`,
  `0% OTA fees`, `9 wk to launch`. Tabular, mono-labelled, unembellished.
- **CTAs** are imperative, mono, uppercase, with a `→`: *VIEW PROJECT →*, *ALL WORK*,
  *START A PROJECT →*, *LET'S TALK*.
- **Symbols.** `·` separates metadata; `→ ← ↗` for actions/links; `●` for the accent dot; `/` in
  pagination (`01 / 05`). **No emoji, ever.**
- **AI is the throughline** — but always as a concrete capability ("built to be the source ChatGPT
  cites"), never buzzwords.

---

## Visual foundations

### Palette & vibe — strict monochrome
A near-black canvas, white type, a calibrated grey scale, hairline borders. **No brand colour.**

- **Canvas:** `--bg #0A0A0B` → `--bg-2 #0F0F11` → `--bg-3 #161619` → `--bg-4 #1E1E22`.
- **Ink:** `--ink #FFFFFF` → `--ink-2 #C9C9CF` → `--ink-3 #8A8A93` → `--ink-4 #5A5A62`.
- **Lines** do the structural work: `--line` (white /.10), `--line-2` (/.18), `--line-3` (/.32).
- **Accent — the one colour knob.** `--accent` is set **per project** and used **sparingly** (a
  dot, an active underline/pager bar, a single character, the "Live" link). Defaults to acid lime
  `#D8FF3E`; curated options: red `#FF3B30`, blue `#2E6BFF`, amber `#FF9F1C`, or pure mono
  `#FFFFFF`. Never mix two accents; never purple.

### Type
- **Stolzl** for everything visible — a clean geometric grotesque (the "56 Modern" lineage) loaded
  via Adobe Fonts / Typekit; weights 100 · 200 · 300 · 400 · 500 · 700, with **700** the heaviest
  for oversized display. **Space Mono** for all technical text:
  eyebrows, metadata, pagination, buttons, spec labels.
- **Display is enormous and tight:** weight **700** (Stolzl's heaviest), tracking **−0.03 to
  −0.05em**, line-height **0.82–0.95**. Slide titles run `clamp(72 → 280px)` and are layered *over*
  the hero. Lean far past "safe".
- **Body** is calm: 16–20px, line-height 1.6, grey ink. **Numbers are tabular.**
- **Mono labels** are 11–12px, uppercase, `.14em` tracking (`.24em` for vertical rails).
- *Substitution note:* Stolzl loads from Adobe Fonts / Typekit (kit `uqp8dyo`). The kit is
  **domain-locked** — add this preview/production domain in Adobe Fonts or Stolzl falls back to
  system-ui. Space Mono loads from Google Fonts. Send self-host `.woff2` and I'll wire `@font-face`.

### Imagery
**Black-and-white, high-contrast, cinematic.** Photography is desaturated (`grayscale(1)`,
contrast up, brightness down ~0.6) and placed **full-bleed behind or beside oversized type**, with
a vertical scrim for legibility. Where real media isn't supplied, the system uses honest
**labelled placeholder tiles** (a faint diagonal hatch + a mono `[ client — hero still ]` tag) —
never invented imagery. A project's accent is the *only* colour that survives the monochrome.

### Backgrounds — the technical field
A faint, near-invisible **blueprint grid** (80px cells, white /.035) or **dot field**, radial-
masked toward the top and drifting slowly. A soft white radial "top light" lifts the hero. No
colour, no glow — just a quiet engineered surface. Behind a `prefers-reduced-motion` guard.

### Surfaces, borders & corners
- **Panels are flat and technical** — `--bg-3` fill, a single hairline border, **sharp corners**
  (`--r-xs 2px`; the softest the system goes is 8px). No glass, no blur-glow, no soft shadows as
  decoration. Often stamped with a mono index (`01`).
- **Hairlines define everything** — meta bars, stat grids, dividers, card edges. Hover *brightens
  the border* (`--line` → `--line-2/3`) rather than adding glow.
- **Pills (`999px`) are reserved for tags and toggles only.** Everything else is square-ish.

### Shadows
Minimal and neutral (`--shadow-md/lg`) — used only for genuinely floating elements. Depth comes
from hairlines and contrast, not shadow.

### Motion
Engineered, eased, monochrome. Signature ease `cubic-bezier(.2,.7,.2,1)`.
- **Slide transitions:** ~0.9s eased cross-fades between fullscreen projects; the hero image
  scales from 1.06 → 1.0 on enter.
- **Reveal-on-scroll:** fade + `translateY(28px)` on case-study blocks.
- **Underline-grow** links, **magnetic** arrows (nudge `+4px`), slow **grid drift**, marquees.
- **Hover:** solid buttons invert to outline; outline buttons fill white; borders brighten.
  **Press:** `translateY(1px)`. All decorative motion collapses under reduced-motion.

### Layout & chrome
Wide `1480px` max, `48px` gutters, sections at `128 / 88 / 56px`. The home is a **fullscreen
vertical project slideshow** (one project per screen): monogram top-left, *Menu* + burger
top-right, a vertical **SCROLL** rail left, numbered **01–05 pager** right, prev/next circles
bottom-right, a progress bar. Project pages land **directly** (no middle layer) and are strongly
left-aligned spec-sheets. A fullscreen **overlay menu** with huge grotesque links.

---

## Iconography

**Thin geometric line work** — 1.5–2px strokes, rounded caps, 24px grid — matching the technical
mood. Solid fills only for the tiny play triangle.

- **Production** uses **[Lucide](https://lucide.dev)** (same stroke weight / geometric style) —
  recommended for any new work (`lucide` / `lucide-react`).
- **This system** ships a hand-matched inline-SVG set in `ui_kits/studio-site/icons.jsx`
  (`IArrow`, `IArrowL`, `IArrowUR`, `IPlay`, `IPlus`, `IClose`) so the kit has zero icon-font
  dependency. Swap for Lucide names 1:1 in production.
- **Unicode glyphs** carry much of the load by design: `→ ← ↗` (actions), `·` (metadata), `●`
  (accent dot), `/` (pagination). The look is **typographic, not pictographic**.
- **No emoji.** Not in UI, not in copy.

> Substitution flag: Lucide is the documented production set; the inline icons here are a faithful
> stand-in.

---

## File index / manifest

**Root**
- `styles.css` — entry point; `@import`s every token + font below. Consumers link this.
- `readme.md` — this guide · `SKILL.md` — Agent-Skill front-matter for Claude Code.

**`tokens/`**
- `fonts.css` — Stolzl (Adobe Fonts/Typekit) + Space Mono (Google Fonts).
- `colors.css` — canvas, ink scale, lines, the per-project `--accent` system, light/paper variant.
- `typography.css` — families, weights, fluid display scale, line-heights, tracking + helpers.
- `spacing.css` — 4px scale, section rhythm, sharp radii, grid/dot sizes.
- `effects.css` — neutral shadows, motion tokens, `.cp-grid-field`/`.cp-dot-field`/`.cp-surface`
  background helpers, reveal + underline-grow primitives, component interaction states.

**`guidelines/`** — foundation specimen cards (Design System tab) · **30 cards across 5 groups**
- **Type (4):** `type-display`, `type-body`, `type-mono`, `type-weights`.
- **Colors (6):** `colors-base` (canvas), `colors-signal` (ink scale), `colors-gradient`
  (per-project accent), `colors-text` (lines), `colors-semantic` (status), `colors-overlays`
  (monochrome scrims).
- **Spacing (4):** `spacing-scale`, `radii`, `shadows`, `motion` (live easings/durations).
- **Components (9):** `core` (buttons), `surface` (panels/stats), `comp-inputs`, `comp-badges`,
  `comp-avatars`, `comp-progress`, `comp-stepper`, `comp-toasts`, `comp-cards`.
- **Brand (6):** `brand-logo` (logos + clear-space), `brand-iconography` (36 glyphs),
  `brand-screens` (screen patterns), `brand-index` (system index), `brand-surface` (technical
  field), `brand-glass` (type-meets-image treatment).

**`components/`** — reusable React primitives (via `window.<Namespace>`)
- `core/` — **Button** (solid/outline/ghost/accent), **Tag**, **Eyebrow** (incl. vertical),
  **Badge** · `surface/` — **Panel** (flat technical card), **StatCard**.
- Each has `.jsx`, `.d.ts`, `.prompt.md`, and a `*.card.html` thumbnail.

**`ui_kits/studio-site/`** — the full interactive recreation
- `index.html` — a fullscreen slideshow opening on a **"behind-text" intro hero** (Chiran's B&W
  portrait emerging through a giant "CHIRAN PERERA"), then one screen per project (wheel/arrow/
  pager nav, per-project accent) → click any project for a **direct, long-form case study** (hero +
  meta bar, overview, pull-quote, research, design grid, stack, AI callout, results stat-row,
  next-project, footer); plus a fullscreen overlay menu and Studio/Services/Journal/Contact stubs.
- `site.css` (base/chrome/slideshow/intro) + `sections.css` (case study).
- `icons.jsx`, `data.jsx` (5 projects, each with its accent), `Chrome.jsx`, `Slideshow.jsx`,
  `CaseStudy.jsx`.

**`assets/`** — `chiran-portrait.jpg` (the B&W studio portrait, used in the intro hero) ·
`hero-poster.jpg` (grayscaled placeholder media).

---

## Working with the system

- **Throwaway artifacts** (slides, mocks, prototypes): link `styles.css`, work on `--bg`, set ONE
  `--accent` for the piece, and let oversized Stolzl 700 titles + B&W imagery + mono labels do the
  work. Sharp corners, hairline structure, no glow.
- **Production:** lift the tokens and component patterns. Default monochrome; introduce the accent
  per project, never globally.
- **Always:** sentence-case headings, UPPERCASE mono labels/CTAs with `→`, tabular numbers,
  full-bleed B&W imagery, one accent max, no emoji, no purple. Keep the field quiet; let the type
  shout.
