# Chiran Perera Portfolio — WordPress Theme Analysis

> Reverse-engineering of the current local WordPress site (`http://chiran-perera.local/`) as a blueprint for a Next.js rebuild.
> Date: June 6, 2026

---

## 1. What this site actually is

The site is built on the **Ohio** premium WordPress theme by Colabrio (with an empty `ohio-child` theme active on top — it only enqueues the parent stylesheet, so **all design and layout live in the database**, not in PHP template files). The specific demo imported is Ohio's **"Portfolio One-Page Slideshow"** home variant.

In plain terms: it's a **dark, fullscreen, slider-driven portfolio**. The homepage is a vertical slideshow where each slide is one project. You scroll (or use numbered pagination) to move between projects, then click into a project to see a clean, light, editorial case-study page. It's elegant, minimal, motion-rich, and very "design studio."

### Tech stack powering it
| Layer | Tool |
|---|---|
| Theme | Ohio (`wp-theme-ohio`) + empty `ohio-child` |
| Page builders | Elementor **and** WPBakery (js_composer) — both installed |
| Slider engine | Ohio's own `jquery.clb-slider.min.js` (not Slider Revolution for the homepage) |
| Custom fields | Advanced Custom Fields Pro |
| Portfolio CPT | `ohio-portfolio` plugin (custom post type `project`) |
| Commerce | WooCommerce (installed, "Store coming soon", cart in header — but not really used) |
| Forms | Contact Form 7 |

> **Important for the rebuild:** none of the page structure is in version-controllable theme files. It's stored as Elementor/WPBakery JSON in the WP database. The live rendered DOM (what this document is based on) is the real source of truth.

---

## 2. Page inventory & content model

The content type driving everything is a custom post type **`project`** (URL pattern `/project/{slug}/`), organized by **`portfolio-category`** taxonomy.

### Projects currently in the site (demo content)
| # | Project | Categories | Detail URL |
|---|---|---|---|
| 01 | Clay Cartoon Heroes | Creative, Identity | `/project/clay-cartoon-heroes-elementor/` |
| 02 | Bucket Cloud Storage | Development, Mobile App | `/project/bucket-cloud-storage-elementor/` |
| 03 | Ceramic Bottles Mockup | Identity, Mockup | `/project/ceramic-bottles-mockup-elementor/` |
| 04 | Diseño de Moda | Identity, Mockup | `/project/diseno-de-moda-elementor/` |
| 05 | Fitness Lifestyle Mobile App | Development, Mobile App | `/project/fitness-lifestyle-mobile-app-elementor/` |

> These are Colabrio's demo projects, not yet personalized. The categories in use are: **Creative, Identity, Development, Mobile App, Mockup**.

### Page types
1. **Home** — fullscreen one-page project slideshow (the centerpiece).
2. **Project detail** — case-study layout (light scheme).
3. **Portfolio category archive** — `/portfolio-category/{slug}/` (filtered grids).
4. **Global footer + overlay menu** — shared across all pages.
5. WooCommerce **cart** (`/cart/`) — present but effectively dormant.

---

## 3. Global UI / persistent chrome

These elements persist on every page and define the site's personality.

### Top header (sticky, "header-3" layout)
- **Left:** hamburger icon → opens fullscreen overlay menu.
- **Brand wordmark:** "Chiran Perera" (text logo).
- **Center:** primary menu slot (currently *unassigned* — shows "Please, assign a menu").
- **Right:** red **"Let's talk"** CTA button → contact page; WooCommerce **cart total + bag icon**.
- Behavior: sticky, shrinks/condenses on scroll.

### Left vertical rail
- **Dark / Light scheme switcher** (toggle pill) — global theme toggle.
- **"Scroll" indicator** with an animated line on the homepage; becomes **"Scroll to top"** on inner pages.

### Right vertical rail (inner pages)
- Vertical **"Follow Us — Fb. / Be. / Yt."** social links.

### Bottom-left
- **Fixed search icon** → opens a full-screen search overlay.

### Fullscreen overlay menu (hamburger)
- Dark, fades in over the page.
- Close (✕) top-left.
- Large nav links (currently empty placeholder).
- Bottom block: **Get In Touch** (address, email, phone), **Work Inquiries** (email, phone), and **social icons** (Facebook, Behance, YouTube).

### Custom cursor
- The site uses a **custom animated cursor** (`custom-cursor` body class) — a small dot/ring that scales and reacts on hover over interactive elements.

### Misc body flags (the "personality" switches)
`dark-scheme`, `with-sticky-header`, `with-switcher`, `with-fixed-search`, `links-underline`, `icon-buttons-animation`, `custom-cursor`, `with-ajax-button`, `slider-with-bullets`, `page-is-loaded` (page-load/preloader animation).

---

## 4. The homepage slider (the heart of the site)

**Container:** `.portfolio-onepage-slider -slider-fs clb-slider-scroll-bar clb-smooth-slider`
**Slides:** 7 `.portfolio-item -with-slider -with-gradient` nodes (5 visible projects + buffers).

### Anatomy of one slide
- **Fullscreen background** — large project image, with a subtle gradient overlay (`-with-gradient`) for text legibility.
- **Circular play button** (top-left of image) — for projects with video.
- **Eyebrow meta:** `Category, Category · Date` (e.g. "Creative, Identity · June 3, 2019").
- **Giant title** — DM Sans 600, ~72px, very tight tracking (e.g. "Clay Cartoon Heroes").
- **Short excerpt** (2 lines, truncated).
- **"Show Project →"** link → project detail page.

### Slider mechanics
- **Vertical, fullscreen**, one project per "screen."
- **Numbered pagination** (01–05) pinned to the right edge — click to jump.
- **Prev / next arrows** bottom-right.
- **Smooth-scroll / inertia** scroll-jacking (`clb-smooth-slider`): wheel/scroll advances slides with eased transitions rather than native scroll.
- **Scroll progress bar** (`clb-slider-scroll-bar`).
- Animated **image + text reveal** on each slide change (parallax-ish, staggered).

This is the single most important interaction to replicate well — the whole "wow" of the site is the buttery fullscreen project transitions.

---

## 5. Project detail page (case-study layout)

When you click "Show Project," you land on a **light-scheme** page (deliberate contrast with the dark home). Structure top-to-bottom:

1. **Back arrow** (top-left) → returns to home/slider.
2. **Header row (two columns):**
   - *Left:* eyebrow (`Category, Category · Date`) → huge title (DM Sans 600, 72px) → intro paragraph with **bold** highlights and accent-colored inline links.
   - *Right:* **Task** statement, then a 3-column meta grid — **Strategy / Design / Client** — each with a label + value, separated by thin rules. A **"Open Project →"** button.
3. **Full-bleed showcase section** — large project imagery (the example used a pink full-width block) with a **vertical social-share rail** (Facebook / X / Pinterest) anchored on the left.
4. **More media/content blocks** (built per-project in Elementor — images, text, galleries).
5. **"Got a project?" CTA band** — eyebrow "LET'S COLLABORATE", big "Got a project?" headline, supporting copy, **"Get a Quote →"** dark button.
6. **Comments** — "Leave a Reply" (standard WP comments).
7. **Global footer** (see §6).
8. **Floating "Next Project" card** (bottom-right, persistent) — label "Next Project", prev/next arrows, and the next project's title (e.g. "Bucket Cloud Storage") → enables continuous browsing without returning home.

---

## 6. Footer

Light section, 4-column layout:
1. **Brand** — "Chiran Perera" wordmark + inline social (Fb. / Ig. / Tw. / Be.).
2. **Studio location 1** — Rotterdam (Ohio Digital Media LTD., full address).
3. **Studio location 2** — Barcelona (Ohio Digital LTD., full address).
4. **Work inquiries** — email (`hello@clbthemes.com`) + **Career / "See open positions"**.
5. **Newsletter** — email field + "Sign Up" + a consent checkbox.
6. **Bottom bar** — "© 2016–2026 Colabrio. All rights reserved | Purchase" and "Security | Privacy & Cookie Policy | Terms of Service".

> All of this is demo content (Colabrio's agency identity, Rotterdam/Barcelona offices). For the rebuild it should be replaced with Chiran's real details, or restructured for a solo portfolio rather than an agency.

---

## 7. Design system (extracted from the live site)

### Typography
- **Typeface:** **DM Sans** (sans-serif) — used everywhere, headings and body.
- **Display / H1–H2:** weight **600**, size up to **72px**, line-height ≈ 1.0, **very tight letter-spacing (~ -0.045em / -3.24px)** — this tight tracking on big DM Sans is the signature look.
- **Body:** ~16px, line-height ~1.6 (26px), comfortable reading measure.
- **Eyebrows/labels:** small, sometimes uppercase, wider tracking.

### Color
| Token | Value | Use |
|---|---|---|
| Accent / brand red | `#D90A2C` (rgb 217,10,44) | "Let's talk" CTA, inline links, highlights |
| Near-black ink | ~`#161518` | Body text on light pages |
| White | `#FFFFFF` | Light page background |
| Dark scheme bg | ~`#0C0D0E` | Home + overlays |
| Light section tint | `rgba(136,136,137,0.063)` | Subtle gray section blocks |
| Per-project pastels | e.g. soft pink | Project showcase backgrounds (set per project) |

> The palette is essentially **monochrome (black/white/gray) + one hot accent red**, plus per-project accent imagery. Very disciplined.

### Shape & spacing
- **Button radius:** 8px; compact padding; pill toggles for the switcher.
- **Generous whitespace**, wide horizontal gutters, content often pushed to a strong left edge.
- Thin hairline rules to separate meta columns.

### Motion (the differentiator)
- Page **preloader / load reveal**.
- **Smooth-scroll slideshow** with eased, parallax slide transitions.
- **Custom cursor** with hover scaling.
- **Underline-on-hover** link animations, **animated icon buttons**.
- Staggered text/image reveals on scroll.

---

## 8. User journey

1. **Land on home** → dark fullscreen, first project fills the screen, preloader resolves, scroll hint nudges down.
2. **Browse projects** → scroll/wheel or click numbered pagination (01–05) to glide through projects; each transitions with eased motion.
3. **Optionally toggle Dark/Light** or open **fullscreen menu** / **search**.
4. **Open a project** → "Show Project" → light case-study page.
5. **Read the case study** → header meta (Strategy/Design/Client), showcase imagery, share buttons.
6. **Continue** → "Next Project" floating card moves to the next case study without returning home (loop-through browsing).
7. **Convert** → "Got a project?" / "Let's talk" / "Get a Quote" → contact; or newsletter signup in footer.

The funnel is clearly: **impress with motion → showcase work → drive to contact.**

---

## 9. Accessibility audit (current state)

The current theme is visually polished but has the **typical weaknesses of motion-heavy creative themes**. Things to fix/improve in the rebuild:

- **Scroll-jacking** — hijacking the wheel breaks expected scroll behavior, harms keyboard users and those who scroll in fixed increments; needs a `prefers-reduced-motion` escape and keyboard arrow support.
- **Custom cursor** — must never hide the real cursor in a way that breaks usability; should be disabled for touch and reduced-motion users.
- **Color contrast** — white text over busy/pastel project imagery can fail WCAG AA; the gradient overlay helps but should be verified per project.
- **Keyboard nav** — slider pagination, overlay menu, and "Next Project" card all need proper focus management, visible focus rings, and `Esc`-to-close on overlays.
- **Semantics** — heading order, `alt` text on project imagery, ARIA labels on icon-only controls (hamburger, search, switcher, social).
- **Motion sensitivity** — honor `prefers-reduced-motion` to disable parallax/reveal/smooth-scroll.
- **Unassigned menu** — currently no primary nav is assigned (accessibility + SEO gap).

> The Next.js rebuild is a chance to keep the *aesthetic and motion* while fixing all of the above — a modern, accessible reinterpretation rather than a 1:1 clone.

---

## 10. Mapping to a Next.js architecture (proposed)

A suggested structure for the rebuild (App Router):

```
app/
  layout.tsx          // global chrome: header, switcher rail, cursor, footer, overlay menu
  page.tsx            // home — fullscreen project slideshow
  work/
    [slug]/page.tsx   // project detail / case study
  (category)/
    [category]/page.tsx  // portfolio category archive (optional)
  contact/page.tsx    // "Let's talk" / Got a project
components/
  SliderShowcase/     // the fullscreen vertical slideshow
  ProjectMeta/        // Strategy/Design/Client grid
  NextProjectCard/    // floating continue-browsing card
  OverlayMenu/        // fullscreen nav
  ThemeSwitcher/      // dark/light
  CustomCursor/
  SearchOverlay/
  Footer/
content/
  projects/*.mdx      // or a CMS / JSON — the project data model
```

### Data model per project (from the case-study layout)
```ts
type Project = {
  slug: string;
  title: string;
  categories: string[];        // Creative, Identity, ...
  date: string;
  excerpt: string;             // home slide + intro
  cover: string;               // fullscreen home image
  accentColor: string;         // per-project pastel
  video?: string;              // optional play-button video
  task: string;                // case-study "Task"
  strategy: string;
  design: string;
  client: string;
  liveUrl?: string;            // "Open Project"
  blocks: ContentBlock[];      // showcase images / text / galleries
};
```

### Recommended libraries for the motion
- **Framer Motion** — reveals, transitions, custom cursor, overlay menu.
- **Lenis** (smooth scroll) — replaces `clb-smooth-slider`, with reduced-motion support built in.
- **Embla / a custom scroll-snap** — for the fullscreen slideshow, or a bespoke wheel/keyboard-driven index.
- **next/font** — self-hosted **DM Sans**.
- **next/image** — performant project imagery.
- CSS variables + `data-theme` attribute for the **dark/light switcher**.

---

## 11. What carries over vs. what to redesign

**Keep (the soul of the site):**
- Fullscreen project-first slideshow on home.
- Dark home → light case study contrast.
- Tight DM Sans display type, monochrome + single accent.
- Continuous "Next Project" browsing.
- Custom cursor, smooth motion, fullscreen overlay menu.

**Redesign / modernize (your brief: "rich, interactive, modern, sleek replication"):**
- Replace agency demo content with Chiran's real projects + identity.
- Fresh accent color / refined palette (the red is very "Ohio default").
- Rebuild motion accessibly (reduced-motion, keyboard, focus).
- Drop WooCommerce/cart and unused agency cruft (two office locations, careers) unless wanted.
- Consider new slide transition styles (e.g. clip-path reveals, 3D tilt, WebGL image transitions) for a more 2026 feel.
- Real, assigned navigation + sitemap.

---

*This document is the analysis phase. Next step: confirm the design direction for the Next.js build (palette, motion intensity, content, CMS vs. static), then scaffold the project.*
