# CLAUDE.md — project memory & conventions

> Read this first. It's the continuity doc for the Chiran Perera portfolio.
> Everything else lives in the git history (every change is committed with a
> detailed message — `git log` is the source of truth).

## What this is
Chiran Perera's **studio portfolio** — dark, editorial, AI-native. A fullscreen
project slideshow (behind-text portrait hero) → long-form, conversion-focused
case studies. Built so business owners hire Chiran for **AI-automation + design**.

- **Stack:** Next.js 14 (App Router) + TypeScript, plain CSS design-system (NO
  Tailwind, NO Framer Motion — CSS transitions). Static export, Vercel-ready.
- **Repo:** github.com/chiranperera/chiranperera (push to `main`).
- **Live demo referenced by VOLT project:** https://volt-solar-three.vercel.app/
- **Vercel:** NOT yet connected by the user (they deploy via dashboard import).

## ⚠️ CRITICAL WORKFLOW RULES
1. **Never run `npm run build` while the preview/dev server is running.** They
   share `.next/` — a production build clobbers the dev server's chunks → CSS
   404s ("the site looks broken"). Always: stop the dev server → build → push →
   `rm -rf .next` → restart dev.
2. **Verify, then ship:** make changes → verify via the preview MCP (measure with
   `preview_eval`; screenshots glitch/render-from-top so trust measurements) →
   stop dev → `npm run build` (must pass) → commit + push to `main` → `rm -rf
   .next` → restart dev.
3. **Commit messages** end with `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
4. Preview screenshots often render from the document top / glitch at DPR=2 —
   **use `preview_eval` measurements as the source of truth**, not screenshots.

## Architecture
```
app/            layout (fonts + metadata + AppShell), page (home slideshow),
                work/[slug] (case study, SSG), work, studio, services, contact,
                journal, sitemap.ts, robots.ts, globals.css
components/     AppShell (nav context + preloader/cursor/field/overlay/wipe),
                Slideshow, CaseStudy, Home, icons, chrome/Chrome (Header, Overlay,
                Footer, Field), chrome/Effects, pages/Pages
lib/data.ts     ALL project content + the Project type (the heart of the site)
styles/         tokens/* (colors, typography, spacing, effects) + site.css
                (chrome/slideshow/hero) + sections.css (case study)
public/assets/  portrait, cutout, hero-poster; volt/* (VOLT screenshots)
chiran-perera-design-system/   the original Claude Design handoff (reference)
```

## Design system
- **Monochrome → now FULL COLOUR imagery.** The user requested all project
  images be colour (grayscale removed everywhere). UI/type stays monochrome
  (near-black `--bg #0A0A0B`, white→grey ink scale) with ONE per-project accent.
- **Hero background is jet black `#000`** (not the grey radial).
- **Fonts:** Stolzl (Adobe Typekit kit `uqp8dyo`, domain-locked — add prod/Vercel
  domains in Adobe Fonts or it falls back to system-ui) + Space Mono (Google).
  Linked via `<link>` in app/layout.tsx `<head>`.
- **Accessibility:** mono sub-labels use `--ink-2` bold (not the faint `--ink-4`)
  for contrast. Hero eyebrow is white.
- `--wrap-pad` is the single responsive gutter: `clamp(24px, 5vw, 48px)`.

## Case-study structure (CaseStudy.tsx) — the conversion engine
Section order (numbered 01–07), **pain-point → solution framing**:
1. **Overview** — premise + business **pain points** (a "What wasn't working"
   grid, reverse-engineered from the AI we built).
2. **Research** — "Industry standard" vs **"What I built differently"** (accent
   block: the novel solution).
3. **AI** — the AI automation (callout + alternating feature rows). **Before design.**
4. **Design** — image grid.
5. **Build** — stack chips.
6. **Results** — stat row (2×2 on mobile).
7. **Screens** — device pair + gallery.
Plus: sticky **section-filter tab bar** (All · Overview · Research · AI · Design ·
Build · Results · Screens) below the hero — clicking isolates one section. On
case pages the global header is fixed and the tab bar (tabs only, no logo/menu)
stacks below it (top margin clears the header). Optional **pitch** section (VOLT)
shown only in "All".

## Content voice
First person, plain, certain. Every project leads with the client's **business
pain points** and frames AI/design as the fix (the user is selling AI-automation
to business owners). Sentence-case headings; UPPERCASE mono labels; numbers
tabular; one accent; no emoji.

## Image system (tiles)
- Uniform ratios: **4:3 landscape**, **3:4 portrait** (`Tile portrait`). Clean
  panel (`--bg-3`), rounded, **caption BELOW the image** (label left, index
  right) — never overlaid. Gaps 26px. Placeholders show a labelled tag.
- **Device pair** (`media.devicePair`): desktop (16:9) + mobile (9:16) side by
  side at matched heights, one caption; stacks on mobile.
- `Tile` props: `img` (CSS url), `pos` (background-position), `capPad` (caption
  side inset, e.g. concierge `8.6%`), `portrait`.

## Data model (lib/data.ts `Project`)
`slug, num, title (\n for 2 lines), cats[], year, accent (hex), summary, role,
client, timeline, stack[], liveUrl?, img (card), heroImg? (banner), overview[],
pains?[{problem,result}], research, researchOurs?, ai, aiHeadline?, features?[]
(eyebrow,title,body,points[],media{label,src?,pos?,capPad?}), pitch?, stats[],
media?{identity,type,homeDesktop,homeMobile,components,devicePair,gallery[]}`.
Projects: volt-home-energy (lead, real images), sarisara-lanka, villa-kaloya,
lumen-skincare, hiruka-wellness, north-point. Only VOLT has real screenshots.

## ▶ CURRENT TASK (in progress) — crop placeholders from two full images
The user now supplies, per project, **one full-length desktop PNG + one full
mobile PNG** (`public/assets/volt/full-desktop.png`, `full-mobile.png`), plus
**individual images only for interactive/overlay states** (e.g.
`feature-concierge.jpg` — the open chat). **This is the standard going forward.**

Plan agreed with the user:
1. **Reuse the two full images** for every page-section placeholder via CSS
   "windowing": `background-image` = full image, `background-size: 100%` (full
   width), `background-position-y: <%>` to reveal the right band. One file, many
   crops. **I (Claude) identify the crop positions by viewing the image** — no
   backend admin tool (static site; adjusting a crop is a one-line value change).
2. Add an image-model option like `{ from: "desktop"|"mobile", at: "<%>", zoom? }`
   so tiles/feature-media/device-pair reference a crop of the full image.
3. **Annotations:** when a feature is too small to isolate in a band, overlay an
   anchored callout (accent marker + mono label, positioned in **%** so it
   tracks across desktop/mobile resizing). On-brand: thin accent bracket + label.
4. **Interactive states** (open concierge chat, modals): keep their own
   individual images (user provides), don't crop from the full page.

Next step when resuming: VIEW full-desktop.png + full-mobile.png (they're large
~6 MB — mind the context budget), map each VOLT section's vertical position,
implement the crop option + annotations, wire VOLT's placeholders, build, push.

## Known TODOs / state
- Contact form is client-only (confirmation message) — wire to Resend/Formspree
  before launch.
- Other 5 projects use placeholder/invented content + images (only VOLT is real).
- Adobe Fonts domain must be authorised for Stolzl to render on the live domain.
- `hero.jpg` (1.7 MB) and the full PNGs (~6 MB) are heavy — optimise before launch.
