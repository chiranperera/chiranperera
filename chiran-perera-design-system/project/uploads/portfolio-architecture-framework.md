# Chiran Perera — Portfolio Architecture & Design Framework

> **Purpose of this document.** A complete, build-ready blueprint for a new portfolio site — to be handed to a design tool (for visuals) and to Claude Code (for development → GitHub → Vercel). It defines the vision, sitemap, design language, every page and section, the component system, the data model, the tech stack, and a phased build plan. It deliberately contains **no code** — it is the architecture and framework only.
>
> **Lineage.** It evolves the current WordPress site (Ohio theme, fullscreen project slideshow) into a bolder, more futuristic, AI-forward experience — keeping the dark vibe and the slider, removing the redundant "middle layer," and turning project pages into rich, long-form case studies.
>
> Date: June 6, 2026

---

## 1. Vision & positioning

**Who this is for:** Chiran Perera — a creator working across **web development, web & UI/UX design, branding, social media campaigns, and AI-driven digital marketing**.

**What the site is:** a portfolio that presents itself like a **studio**, not a résumé. The work is the hero. Each project is a fully-produced case study showing *thinking*, not just thumbnails.

**The feeling:** dark, confident, futuristic, tech-heavy. Big bold type. A living, motion-rich surface (subtle grid/dot field, glow, gradient accents) that signals "this person builds modern, AI-native digital products." Think the energy of a high-end product launch page crossed with an agency showcase.

**The one-line promise on the site:** something like *"AI-driven design, development & brand systems."* (final copy TBD).

**Primary goals (in priority order):**
1. Make visitors feel the quality instantly (home slider).
2. Let them go deep on any project in one click (full breakdown, no detours).
3. Convert to a conversation ("Let's talk" / contact).

---

## 2. What we keep, kill, and upgrade vs. the WordPress site

### Keep (the soul)
- **Fullscreen project slideshow on the home** — one project per screen, numbered pagination, smooth eased transitions.
- **Dark base aesthetic** with a tech/dotted background field.
- **Big, tight, bold display typography** as the signature.
- **Continuous browsing** — move from one project to the next without dead-ends.
- **Custom cursor + rich micro-motion.**
- Persistent **dark/light** option (optional — see §4) and fullscreen overlay menu.

### Kill (the redundancy)
- ❌ **The middle layer.** In WordPress: home slide → *"Show Project"* → a **summary/case-study intro page** → *"Open Project"* → the actual project. **In the new site, clicking a project on the home slider goes directly to the full project breakdown page.** One click, no intermediate summary.
- ❌ WooCommerce / cart / "Store coming soon" — irrelevant to a portfolio.
- ❌ Agency demo cruft — two office locations, careers, Colabrio branding, demo copy.
- ❌ Scroll-jacking that fights the user — replaced with a controllable, accessible slider (see §6 + §13).

### Upgrade (make it cooler & more modern)
- ⬆️ **Bolder type and a colorful accent system** (per-project accent colors instead of one fixed red).
- ⬆️ **Futuristic background treatments** — animated dot/grid field, subtle noise, gradient glow, optional WebGL image transitions.
- ⬆️ **Long-form, structured case studies** with research, mood boards, wireframes, hi/lo-fi, tech stack, deployment, and **AI functionality callouts** — plus embedded interactive sections.
- ⬆️ **Accessibility built in** — reduced-motion, keyboard, focus management (the original theme lacks this).
- ⬆️ **Performance** — static generation, optimized images, fast transitions.
- ⬆️ **AI-native touches** woven through (see §11) — fitting the positioning.

---

## 3. Sitemap & information architecture

```
HOME  (/)                         ← fullscreen project slideshow + studio intro
│
├─ WORK  (/work)                  ← optional grid/index of all projects (filterable)
│
├─ PROJECT  (/work/[slug])        ← FULL breakdown (no middle layer). Direct from home slide.
│
├─ ABOUT  (/about)                ← who Chiran is, capabilities, process, AI-driven approach
│
├─ SERVICES / CAPABILITIES (/services)  ← web dev, design, branding, social, AI marketing
│
├─ CONTACT  (/contact)            ← "Let's talk" destination + form
│
└─ Global: overlay menu · footer · theme switch · search (optional)
```

**Routing principle:** the home slider's project links point straight to `/work/[slug]`. The `/work` index is a secondary path for people who prefer a grid. **No `/project-intro` style middle page exists.**

**Recommended nav (assigned, unlike the current empty menu):**
`Work · About · Services · Contact` + a persistent **"Let's talk"** CTA.

> Decision point: if Chiran wants the home to *be* the work index (slider only) we can drop `/work`. Recommended to keep it as a fallback + good for SEO.

---

## 4. Global design language

This is the part the design tool should lock first — everything else inherits from it.

### 4.1 Mood
Dark, futuristic, high-contrast, generous whitespace (well, "blackspace"), big type, restrained but vivid color, and motion that feels engineered rather than decorative.

### 4.2 Typography (the signature)
- **Display face:** a bold geometric/grotesk sans. Options to pick from in the design tool:
  - *Clash Display* / *Clash Grotesk* (bold, modern, slightly characterful) — **recommended for the futuristic feel**,
  - *Space Grotesk* (techy, monospace-adjacent personality),
  - *General Sans* or *Satoshi* (clean, premium),
  - or keep *DM Sans* (Ohio's face) for continuity.
- **Body face:** a highly legible neutral sans — *Inter*, *Satoshi*, or *General Sans*.
- **Mono accent:** a monospace (*JetBrains Mono* / *Space Mono*) for labels, metadata, code-ish tags, project numbers (01 / 02), and "tech-heavy" eyebrows. This mono touch is a big part of the futuristic vibe.

**Type scale (desktop, fluid with `clamp()`):**
| Token | Size | Use |
|---|---|---|
| Display XL | 96–160px | Home slide titles, hero statements |
| Display L | 64–96px | Project titles, section heroes |
| H1 | 48–64px | Page titles |
| H2 | 32–44px | Section headings |
| H3 | 22–28px | Subsections |
| Body L | 20–22px | Intro paragraphs |
| Body | 16–18px | Default text |
| Caption / Mono | 12–14px | Eyebrows, metadata, tags (uppercase, wide tracking) |

**Rules:** display weight 600–800, **tight tracking on large sizes** (~-0.02 to -0.04em — inherited from the Ohio look), generous line-height on body (1.6). Lean into **oversized type** — bigger than feels safe.

### 4.3 Color
A **dark monochrome base + a vivid, multi-stop accent system.** Per-project accent colors make the slider feel alive (each project "owns" a color).

| Token | Suggested value | Use |
|---|---|---|
| `--bg` (base) | `#0A0A0B` near-black | Global background |
| `--bg-elevated` | `#141416` | Cards, elevated panels |
| `--ink` | `#FFFFFF` | Primary text on dark |
| `--ink-muted` | `#8A8A93` | Secondary text, captions |
| `--line` | `rgba(255,255,255,0.08)` | Hairlines, grid, borders |
| `--accent` (brand) | electric pick — e.g. `#C6FF3A` (acid lime) or `#7C5CFF` (electric violet) | CTAs, links, highlights, focus |
| `--accent-2` | complementary — e.g. `#00E5FF` (cyan) | Gradients, secondary highlights |
| `--project-accent` | per-project (set in data) | Slide background glow, project page theming |

**Accent direction options for the design tool to compare:**
- **A — Acid/Neon:** lime + cyan on black. Maximum "tech/AI/futuristic."
- **B — Electric Violet:** violet + magenta gradient. Premium, brand-agency.
- **C — Multi-color per project:** neutral UI, each project supplies its own bold color. **Recommended** — it directly powers the slider's personality and matches "colorful like Ohio."

> Keep a light theme as an *optional* switch, but the site is **dark-first** (reverse of Ohio's light project pages). If the switcher adds complexity, dark-only is acceptable for v1.

### 4.4 Background / surface treatment ("tech-heavy")
The dotted background Chiran likes — modernized. Pick or layer:
- **Dot grid field** (Ohio-style) — faint, with a subtle parallax drift.
- **Fine line grid** — blueprint/technical feel.
- **Gradient glow / aurora** — large soft radial glow in the active project's accent color, behind content.
- **Noise/grain overlay** — adds depth, kills banding.
- **Optional WebGL/shader field** for the hero (particles or flow field) — guarded behind reduced-motion + performance budget.

Recommendation: **dot grid + per-slide accent glow + grain.** Distinctive, performant, on-brief.

### 4.5 Shape, spacing, layout grid
- **12-column grid**, wide max-width (~1440–1600px), generous gutters; allow **full-bleed** sections for imagery.
- **Strong left alignment** for headings (Ohio trait) mixed with occasional centered hero statements.
- Corner radius: **0–4px** for a sharper, more technical look (softer than Ohio's 8px — choose in design). Pills allowed for tags/toggles.
- Hairline dividers and **mono metadata labels** to reinforce the "spec sheet / technical" personality.

### 4.6 Motion & interaction principles ("rich but accessible")
- **Custom cursor** — dot + ring, scales/labels on hover ("View", "Drag", "Play"); disabled on touch + reduced-motion.
- **Smooth scroll** (inertia) site-wide, with native fallback under `prefers-reduced-motion`.
- **Entrance reveals** — staggered fades/translates on section enter.
- **Slide transitions** — eased cross-fades / clip-path wipes / optional WebGL image transition between projects.
- **Magnetic buttons**, **underline-grow links**, **number counters**, **marquee** of skills/tools.
- **Page transitions** — a quick branded wipe between routes (e.g. accent panel sweep) so navigation feels app-like.
- **Global rule:** every motion has a reduced-motion fallback; nothing essential is conveyed by motion alone.

---

## 5. Global chrome (persistent UI)

| Element | Spec |
|---|---|
| **Header (sticky)** | Left: logo/wordmark "Chiran Perera" or a monogram mark. Right: nav (`Work · About · Services · Contact`) + **"Let's talk"** accent button. Condenses on scroll. On home it can be minimal/transparent over the slider. |
| **Hamburger / overlay menu** | Optional on desktop, primary on mobile. Fullscreen dark overlay, **huge animated nav links**, contact block (email, socials), close ✕. Staggered link reveal. |
| **Left rail** | Slide **pagination/progress** on home ("01 — 05"); **"Scroll"** hint; becomes **"Back to top"** on inner pages. Optional **theme switch** if kept. |
| **Right rail** | Vertical **socials** (e.g. `In · Be · Dribbble · X · IG`) and/or **"Available for work"** status pill. |
| **Footer** | Big **"Got a project? Let's talk"** CTA band → contact. Then: short studio blurb, real contact email, socials, nav, and a clean bottom bar (© year, credits). **Replace all Ohio/Colabrio demo content.** Optional: "Built with Next.js · Deployed on Vercel" badge — fits the AI/dev positioning. |
| **Custom cursor** | Global (see §4.6). |
| **Preloader** | Brief branded load reveal (logo/number count) — sets the tone, but keep it short (<1.2s) and skippable. |

---

## 6. PAGE — Home (`/`) : the project slideshow

The centerpiece. **One project per screen, fullscreen, vertical, eased.**

### Layout of a single slide
- **Full-bleed background:** the project's hero media (image/video), with a gradient/scrim for legibility and a soft **glow in the project's accent color**.
- **Giant project number** (mono) — `01`, large, as a graphic element.
- **Eyebrow (mono):** category tags + year (e.g. `BRANDING · WEB · AI — 2026`).
- **Display title:** the project name, oversized and bold (Display XL).
- **One-line value statement** (not a long excerpt — keep it punchy).
- **Primary action:** **"View Project →"** → **directly to `/work/[slug]`** (no middle layer). The whole slide is also clickable.
- Optional **play button** if the project has a showreel/video.

### Slider mechanics
- **Navigation:** mouse wheel / trackpad, **arrow keys (↑/↓)**, on-screen prev/next, numbered pagination (click to jump), swipe on touch, and **drag**.
- **Transition:** eased, ~700–900ms; choose style in design (cross-fade, clip-path wipe, or WebGL). Background, number, and text reveal with a **slight stagger**.
- **Progress:** scroll-progress bar + active number highlight in the left rail.
- **Accessibility:** focus moves with the active slide; pagination is real buttons with labels; honor reduced-motion (becomes a normal vertical scroll list); never trap the user.
- **Last slide → CTA:** after the final project, the next "slide" can be a **"See all work / Let's talk"** end-card.

### Home is more than the slider (recommended additions)
Below or alongside the slideshow, a short scroll-narrative so the home isn't *only* a slider:
1. **Intro statement** — one bold sentence on who Chiran is + the AI-driven angle.
2. **Capabilities strip** — a marquee/list of services (Web Dev · UI/UX · Branding · Social · AI Marketing).
3. **Selected clients / logos** (if any) or **tools/stack** ticker.
4. **CTA band** → contact.

> Decision point: pure slider home vs. slider + scroll-narrative. Recommended: **slider first, then a short narrative + CTA** for context and SEO.

---

## 7. PAGE — Project breakdown (`/work/[slug]`) : the full case study

This is where the depth lives. The user lands here **directly** from the home slide. It must support a **long, rich, structured story** with text, imagery, and embedded interactive sections — themed in the **project's accent color**.

### Section-by-section template (modular — projects use the sections they need)

1. **Project hero**
   - Full-bleed cover, accent glow, mono eyebrow (categories · year · role), **giant title**, one-line summary.
   - Quick **meta bar**: Role · Client · Timeline · Deliverables · Live link (if any). (mono labels)
   - Back control + immediate sense of "you're inside the work."

2. **Overview / Why this project**
   - The premise: *why I did this project*, the goal, the problem, the opportunity. Bold pull-quote treatment.

3. **My role & scope ("areas involved")**
   - What Chiran owned: strategy, design, dev, branding, social, AI. Tag chips + short description.

4. **Research & discovery**
   - **Market research**, audience, competitive scan, insights. Supports charts, stats counters, and **mood boards** (image grids/collages).

5. **Brand / direction** (when relevant)
   - Logo, color, type, brand system — **interactive color swatches**, type specimens.

6. **Wireframes — low-fidelity**
   - Lo-fi frames/flows; annotated. Image grid or before/after.

7. **High-fidelity design**
   - Hi-fi screens, UI close-ups, **device mockups**, **before/after sliders**, scroll-through galleries.

8. **Prototype / interactive embeds**
   - Embedded **Figma prototype**, live demo iframe, video walkthrough, or a mini interactive widget. ("interactive sections embedded" — first-class supported block.)

9. **Web development & tech stack**
   - The build: frameworks, tools, **stack badges** (Next.js, React, Tailwind, etc.), architecture notes, code/animation highlights.

10. **AI functionality**
    - The AI-native angle: what AI features/workflows were used or built (content gen, personalization, chatbots, automation). A signature section given the positioning.

11. **Deployment & results**
    - Hosting/deployment (Vercel, CI/CD, GitHub), performance metrics, outcomes/impact, **stat counters**, testimonials.

12. **Gallery / full showcase**
    - Large full-bleed imagery, masterfully spaced; optional lightbox.

13. **Next project**
    - Persistent/footer **"Next Project →"** card (continuous browsing — keep this Ohio strength) + "All work" + "Let's talk."

> **Content block system:** these sections should be built as **reusable modular blocks** (hero, text, pull-quote, image-full, image-grid, gallery, before/after, stat-row, tag-row, stack-badges, video, embed/iframe, quote/testimonial, color-palette, type-specimen, CTA). A project is an ordered list of blocks — this makes every case study flexible without new code. (See data model §10.)

### Visual/motion notes for project pages
- Each project page is **tinted by its accent** (glow, links, section accents).
- Sticky side meta or section progress indicator.
- Reveal-on-scroll for every block; parallax on hero media.
- Generous full-bleed moments between tighter text columns (rhythm).

---

## 8. PAGE — About (`/about`)

- **Hero statement** — bold, personal, the AI-driven creative thesis.
- **Bio** — story, background, what Chiran does and believes.
- **Approach / process** — numbered steps (Discover → Design → Build → Deploy → Optimize with AI).
- **Capabilities** — skill clusters with proficiency or tool logos.
- **Tools & stack** — the tech-heavy badge wall (design tools, dev stack, AI tools).
- **Maybe:** timeline, recognition, fun stats.
- CTA band → contact.

---

## 9. PAGE — Services / Capabilities (`/services`)

Frames Chiran as hireable across disciplines:
- **Web Development**, **Web & UI/UX Design**, **Branding & Identity**, **Social Media Campaigns**, **AI-Driven Digital Marketing**.
- Each: short description, deliverables, representative projects (link into `/work/[slug]`), and the **AI angle**.
- Optional: process, engagement models, FAQ.
- CTA band → contact.

> Decision point: Services could be sections inside About instead of a separate page. Recommended separate page for SEO + clarity, but either works.

---

## 10. PAGE — Contact (`/contact`)

- Big **"Let's talk"** statement.
- **Contact form** (name, email, project type, message) — Claude Code can wire to a form service (Resend/Formspree/Vercel functions). Respect privacy (no data in URLs).
- Direct **email**, **socials**, **availability status**, optional **calendar link** (Cal.com).
- Friendly response-time note.

---

## 11. AI-native touches (optional, on-brand)

Since the positioning is "AI-driven," consider weaving 1–2 of these in (don't overdo it):
- **AI project guide / chat** — a small assistant that answers "what did Chiran do on this project?" trained on the case-study content.
- **Smart project filtering** — natural-language "show me branding + AI work."
- **Generative hero** — subtle generative/shader background.
- **Auto-summaries** — TL;DR toggle on long case studies.
- A clearly-labeled **"How this site was built with AI"** note (Cowork → Claude Code → Vercel) — authentic to the process and a talking point.

> Keep these as enhancements, not blockers. Flag which (if any) to include before build.

---

## 12. Component inventory (for the design tool & Claude Code)

**Global:** `Header`, `OverlayMenu`, `Footer`, `CTABand`, `CustomCursor`, `Preloader`, `ThemeSwitch (opt)`, `SocialRail`, `ScrollProgress`, `PageTransition`, `DotGridBackground`, `AccentGlow`, `NoiseOverlay`.

**Home:** `Slideshow`, `Slide`, `SlidePagination`, `SlideMeta`, `CapabilitiesMarquee`, `IntroStatement`.

**Project:** `ProjectHero`, `MetaBar`, `SectionHeading`, `RichText`, `PullQuote`, `ImageFull`, `ImageGrid`, `Gallery/Lightbox`, `BeforeAfter`, `StatRow/Counter`, `TagRow`, `StackBadges`, `MoodBoard`, `ColorPalette`, `TypeSpecimen`, `VideoBlock`, `EmbedBlock (Figma/iframe)`, `Testimonial`, `NextProjectCard`.

**Shared UI:** `Button (primary/ghost/magnetic)`, `Link (underline-grow)`, `Tag/Chip`, `Eyebrow (mono)`, `Card`, `FormField`, `Toggle`.

---

## 13. Content & data model (for Claude Code)

Projects as local **MDX or JSON** files in the repo (matches the "AI-driven, no-CMS" workflow — edit via Claude Code, commit to GitHub, deploy on Vercel).

```ts
type Project = {
  slug: string;              // /work/[slug]
  title: string;
  order: number;             // slider order
  featured: boolean;         // show on home slider
  year: string;
  categories: string[];      // Branding, Web, UI/UX, Social, AI...
  role: string[];            // what Chiran did
  client?: string;
  timeline?: string;
  summary: string;           // one-liner for the slide
  accent: string;            // hex — drives slide glow + page theme
  cover: { src: string; alt: string; video?: string };
  liveUrl?: string;
  blocks: Block[];           // ordered case-study content (see below)
  seo: { title: string; description: string; ogImage: string };
};

type Block =
  | { type: "richText"; content: string }            // markdown/mdx
  | { type: "pullQuote"; text: string; cite?: string }
  | { type: "imageFull"; src: string; alt: string; caption?: string }
  | { type: "imageGrid"; images: Img[]; cols?: number }
  | { type: "gallery"; images: Img[] }
  | { type: "beforeAfter"; before: Img; after: Img }
  | { type: "statRow"; stats: { value: string; label: string }[] }
  | { type: "tagRow"; label: string; tags: string[] }
  | { type: "stackBadges"; label: string; items: string[] }
  | { type: "moodBoard"; images: Img[] }
  | { type: "colorPalette"; colors: { hex: string; name: string }[] }
  | { type: "typeSpecimen"; fonts: { name: string; sample: string }[] }
  | { type: "video"; src: string; poster?: string }
  | { type: "embed"; provider: "figma" | "youtube" | "iframe"; url: string }
  | { type: "testimonial"; quote: string; author: string; role?: string };
```

This block model makes every case study **arbitrarily rich** (research, mood boards, wireframes, hi/lo-fi, tech stack, AI, deployment, interactive embeds) without writing new components per project.

---

## 14. Tech stack & implementation notes (for Claude Code)

| Concern | Recommendation |
|---|---|
| Framework | **Next.js (App Router)** + **TypeScript** |
| Styling | **Tailwind CSS** + CSS variables for theme/accent tokens |
| Content | **MDX/JSON** in-repo (`/content/projects`) via Contentlayer or native MDX |
| Animation | **Framer Motion** (reveals, cursor, page transitions) + **GSAP** (optional, for advanced slide/scroll) |
| Smooth scroll | **Lenis** (with reduced-motion fallback) |
| Slider | Custom wheel/keyboard/drag controller, or **Embla**; WebGL transitions via **OGL/Three** (optional, lazy-loaded) |
| Images | **next/image**, AVIF/WebP, blur placeholders |
| Fonts | **next/font** (self-hosted: Clash/Space Grotesk + Inter/Satoshi + a mono) |
| Forms | Resend / Formspree / Vercel serverless |
| Analytics | Vercel Analytics + (optional) privacy-friendly events |
| Hosting | **Vercel** (GitHub → preview deploys → production) |
| Repo | GitHub; conventional structure so Claude Code can iterate cleanly |

**Performance budget:** LCP < 2.5s, no layout shift on the slider, lazy-load heavy/WebGL, ship the hero fast. Static-generate project pages.

---

## 15. Accessibility & quality bar

- **`prefers-reduced-motion`** disables smooth scroll, parallax, WebGL, and slide auto-animation (slider becomes a normal scrollable list).
- **Keyboard:** full operability — slider arrows, focusable pagination, overlay menu trap + `Esc`, visible focus rings everywhere.
- **Custom cursor** never replaces real cursor affordances; off on touch.
- **Contrast:** verify text over imagery (scrims/glows must guarantee AA); accent colors pass on dark.
- **Semantics:** correct heading order, `alt` on all imagery, ARIA labels on icon controls, real `<button>`/`<a>`.
- **SEO:** per-page metadata, OG images, sitemap, semantic landmarks, assigned navigation.
- **Responsive:** mobile-first; slider → swipe; rails collapse into the overlay menu.

---

## 16. Build roadmap (phases for Claude Code)

1. **Foundation** — Next.js + TS + Tailwind, design tokens (color/type/spacing), fonts, global layout, dot-grid background, custom cursor, header/footer/overlay menu.
2. **Home slider** — slideshow engine (wheel/keyboard/drag/touch), pagination, transitions, accessibility, reduced-motion fallback.
3. **Project page** — block/MDX system + all content blocks; wire home slide → `/work/[slug]` directly (no middle layer); Next Project card.
4. **Secondary pages** — About, Services, Contact (+ form).
5. **Motion polish** — page transitions, reveals, magnetic buttons, marquee; optional WebGL.
6. **Content** — load real projects into the data model.
7. **Optional AI layer** — chosen enhancements from §11.
8. **QA** — a11y audit, Lighthouse/perf, cross-device, then deploy to Vercel.

---

## 17. Open decisions to confirm before/at design time

1. **Accent direction** — A (acid/neon), B (electric violet), or **C (per-project color, recommended)**.
2. **Display typeface** — Clash Display (recommended), Space Grotesk, Satoshi, or keep DM Sans.
3. **Home format** — slider-only vs. **slider + short scroll narrative (recommended)**.
4. **Theme switch** — keep dark/light toggle, or **dark-only for v1**.
5. **Services** — separate page (recommended) or merged into About.
6. **AI features** — which (if any) of §11 to include in v1.
7. **Background** — dot grid (recommended) vs. line grid vs. WebGL field.
8. **Number of launch projects** — how many case studies are ready for v1.

---

*This is the framework. Feed it to the design tool to produce the visual system and screens, then to Claude Code to build against the component inventory, data model, and roadmap above. The current `wordpress-theme-analysis.md` is the companion reference for what the original site did.*
