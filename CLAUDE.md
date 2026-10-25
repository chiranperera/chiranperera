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
client, clientLabel?, timeline, stack[], liveUrl?, status?, img (card), cardPos?,
heroImg? (banner), overview[], pains?[{problem,result}], research, researchOurs?,
ai, aiHeadline?, features?[] (eyebrow,title,body,points[],media? — omit media for a
centred text-only row), pitch?, stats[], buildNote?, designNote?,
media?{identity,type,homeDesktop,homeMobile,components,design[],devicePair,gallery[]}`.
Projects: sarisara-lanka (lead, real images), thushara-rathnayake (real images),
volt-home-energy (real images), villa-kaloya, lumen-skincare, hiruka-wellness,
north-point (older samples).

## ✅ IMAGE WINDOWING SYSTEM (done for VOLT — standard going forward)
Per project the user supplies **one full-desktop PNG + one full-mobile PNG**
(`public/assets/volt/full-desktop.png`, `full-mobile.png`) + **individual images
only for interactive/overlay states** (e.g. `feature-concierge.jpg`, the open
chat — NOT in the static page screenshot, so it can't be cropped).

**How it works (implemented):**
- CSS "windowing": a tile shows `background-image:<full img>; background-size:100%;
  background-position:50% <cropY>`. One file, many crops. Supported on `GalleryItem`
  (`cropY`), `FeatureRow.media` (`cropY`), `media.design[]` (the Direction&design
  grid), and `DevicePair` (`cropYDesktop`/`cropYMobile`). All in `lib/data.ts`.
- **cropY ≠ section %.** `background-position-y: P%` puts the band at
  `[P·(1−k), P·(1−k)+k]` of the image where `k = tileAspectH/imageAspectH`
  (≈0.127 for a 4:3 tile on the 3024×17788 desktop img). To CENTRE a section
  whose centre is at fraction C: `P = (C − k/2)/(1−k)`. **Don't eyeball from
  downscaled slices** — that error cost a redo. Instead measure precisely:
  segment the full PNG into background-colour bands with PIL
  (yellow/black/white runs → exact section centres), then compute P.
- **Annotations = leader lines** (`TileNote {x,y,text,lx?,ly?}`): a dot at the
  anchor (x,y) + a thin accent line to a label parked in a CLEAR area (lx,ly).
  Never sits on top of content. Label chip is dark w/ accent border + the line
  has a dark casing → readable on yellow/white/black. CSS `.tile-anno*`.

**▶ LIVE CALIBRATOR** (`components/CropCalibrator.tsx`) — the user can tune crops
themselves: open any case URL with **`?calibrate`**, drag any windowed image ↕ to
frame it; cropY updates live + persists to localStorage; panel lists every tile
with **Copy values**. Self-gates on the query flag (zero footprint otherwise).
Workflow to LOCK: user drags → tells me the values (or I read `localStorage
.voltCropOverrides` via `preview_eval`) → I bake them into `lib/data.ts`.

Preview screenshots of case pages render BLACK/dim (reveal + DPR glitch) — verify
crops by **pixel-sampling a canvas** (`drawImage` the band → read section colour)
or via `preview_eval` computed `background-position`, never screenshots.

## Known TODOs / state
- Contact form is client-only (confirmation message) — wire to Resend/Formspree
  before launch.
- Other 5 projects use placeholder/invented content + images (only VOLT is real).
- Adobe Fonts domain must be authorised for Stolzl to render on the live domain.
- `hero.jpg` (1.7 MB) and the full PNGs (~6 MB) are heavy — optimise before launch.
