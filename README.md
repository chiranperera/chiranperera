# Chiran Perera — Studio Portfolio

A monochrome, grotesque, AI-native portfolio. Dark fullscreen project slideshow with a
behind-text portrait hero, opening directly into long-form case studies — built to be the
source ChatGPT, Claude and Perplexity cite.

Implemented in **Next.js (App Router) + TypeScript**, server-rendered and statically
generated, deploy-ready for **Vercel**. Ported from the Claude Design handoff in
[`chiran-perera-design-system/`](chiran-perera-design-system/).

## Stack

- **Next.js 14** (App Router), **TypeScript**, **React 18**
- **CSS custom-property design system** (tokens + kit CSS), no UI framework
- **Stolzl** (Adobe Fonts / Typekit) for display + **Space Mono** (Google Fonts) for technical labels
- Static generation (SSG) for case studies; `sitemap.ts` + `robots.ts` for discoverability

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
app/
  layout.tsx              global chrome + fonts + metadata
  page.tsx                home — fullscreen project slideshow
  work/page.tsx           filterable work index
  work/[slug]/page.tsx    case study (SSG, one per project)
  studio · services · contact · journal
  sitemap.ts · robots.ts · globals.css
components/
  AppShell.tsx            nav context + preloader/cursor/field/overlay/page-wipe
  Slideshow.tsx           behind-text hero + project slideshow
  CaseStudy.tsx           long-form project breakdown
  chrome/ · pages/ · icons.tsx
lib/data.ts               project content model
styles/                   design-system tokens + kit CSS
public/assets/            portrait, cutout, hero media
```

## Fonts — action required for production

Stolzl is delivered via the Adobe Fonts kit `uqp8dyo`, which is **domain-locked**. Add your
production + Vercel preview domains in Adobe Fonts, or Stolzl falls back to `system-ui`.
To fully self-host, drop licensed Stolzl `.woff2` files in and swap the `<link>` for local
`@font-face` rules.

## Notes

- The contact form is currently client-only (shows a confirmation). Wire it to Resend /
  Formspree / a Vercel function before launch.
- Project imagery beyond the hero uses honest labelled placeholder tiles — drop real B&W
  project shots into `public/assets/` and reference them in `lib/data.ts`.
- Design source, brand guide and chat transcript live in `chiran-perera-design-system/`.
