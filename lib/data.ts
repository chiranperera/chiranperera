/* Studio Site — project data. Each project owns an accent.
   hero img: a CSS background value, or null → use a labelled placeholder. */

export type GalleryItem = { src: string; label: string; wide?: boolean; tall?: boolean };

/* An alternating image/text "selling point" row (used on rich case studies). */
export type FeatureRow = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  media: { label: string; src?: string }; // src omitted → labelled placeholder
};

/* Closing value pitch (e.g. "why a solar business should build this"). */
export type Pitch = {
  eyebrow: string;
  title: string;
  body: string[];
  points: string[];
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  cats: string[];
  year: string;
  accent: string;
  summary: string;
  role: string;
  client: string;
  timeline: string;
  stack: string[];
  img: string | null;       // slideshow / work-card image
  heroImg?: string;         // case-study hero banner (falls back to img)
  liveUrl?: string;
  overview: string[];
  research: string;
  ai: string;
  aiHeadline?: string;
  features?: FeatureRow[];
  pitch?: Pitch;
  stats: [string, string, string][];
  /* optional real imagery for the case-study tiles + a gallery */
  media?: {
    identity?: string;
    type?: string;
    homeDesktop?: string;
    homeMobile?: string;
    components?: string;
    gallery?: GalleryItem[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "volt-home-energy", num: "01", title: "VOLT Home\nEnergy",
    cats: ["Solar & Energy", "Web", "Branding", "AI"], year: "2026", accent: "#E5FF03",
    summary: "A modular home-energy brand — a Swiss-grid storefront with an on-page AI sizing concierge.",
    role: "Strategy · Design · Build", client: "VOLT Home Energy", timeline: "4 weeks",
    stack: ["HTML", "CSS", "Vanilla JS", "Lucide", "Vercel"],
    liveUrl: "https://volt-solar-three.vercel.app/",
    img: "url('/assets/volt/project-card-mobile-right.png')",
    heroImg: "url('/assets/volt/project-card-project-page-banner.png')",
    overview: [
      "I designed and built VOLT Home Energy from a blank page — a direct-to-consumer brand for modular home batteries, hybrid inverters and solar. The brief was to make a category usually sold as engineering spec-sheets feel like a confident, modern consumer product, without watering down the technical detail buyers actually shop on.",
      "The interesting part was the tension: buyers compare LFP chemistry, continuous-kW figures and 20-millisecond switchover claims — and still want a brand they trust enough to bolt onto the wall. I built the whole stack — research, brand language, design system, page architecture, copy, configurator and AI concierge — to do both at once.",
    ],
    research: "A week mapping the 2026 home-storage market: LFP becoming standard, modular/stackable the dominant trend, the federal ITC expiring, and VPP earnings emerging as a real number (~$1,000/yr). I tore down Tesla Powerwall 3, FranklinWH, Enphase, Anker SOLIX and EcoFlow on positioning and spec hierarchy. The key insight: every competitor leads with capacity — almost none lead with the story, start small and stack as you grow. That phrase became the homepage tagline, the configurator's logic, and the modular product line.",
    ai: "The signature feature is the VOLT Concierge — a sticky, on-page energy assistant that sizes a shopper's system in natural language (\"will it power my home in an outage?\", \"how much can I save?\") without leaving the page. It runs entirely client-side on a curated conversation graph grounded in real product specs, so it's instant and private, surfacing context-aware prompts as you scroll. Behind the scenes I used Claude as a co-builder throughout — research synthesis, copy, and rapid component generation against a strict design system — which is how it shipped in weeks, not months.",
    aiHeadline: "An assistant that sizes your system.",
    features: [
      {
        eyebrow: "Always-on · 24/7",
        title: "An AI concierge that sells while you sleep.",
        body: "The VOLT Concierge answers buyer questions — outage backup, savings, sizing — the moment they're asked, day or night. It never takes a break, never forgets a spec, and turns idle browsers into qualified conversations around the clock — spreading awareness about the business 24/7.",
        points: [
          "Natural-language answers grounded in the real product line",
          "A tireless salesperson + support agent in one",
          "Private and instant — runs in the browser, nothing leaves it",
        ],
        media: { label: "VOLT AI Concierge", src: "url('/assets/volt/feature-concierge.jpg')" },
      },
      {
        eyebrow: "Interactive · Instant",
        title: "Upload a bill. Get the right system.",
        body: "Instead of forms, phone tag and a week's wait, a visitor uploads their utility bill and the system reads their real usage to recommend the right battery and solar size in seconds — replacing the traditional manual site-survey back-and-forth with an answer they trust.",
        points: [
          "Reads real consumption, not guesswork",
          "Skips the slow, manual sizing process",
          "Visitors self-qualify before they ever call",
        ],
        media: { label: "Instant Sizer — bill upload", src: "url('/assets/volt/feature-leadcapture.jpg')" },
      },
      {
        eyebrow: "Pipeline · Conversion",
        title: "Capture better prospects, not just clicks.",
        body: "The concierge, the bill-sizing tool and the build-your-system configurator each qualify the visitor and capture intent — so the leads that reach the sales team are warmer, more specific and far more likely to close, at a higher order value.",
        points: [
          "Qualified intent over anonymous traffic",
          "Configured systems = higher-value, ready-to-quote leads",
          "Fewer tyre-kickers, more booked installs",
        ],
        media: { label: "Live sizing → quote", src: "url('/assets/volt/feature-sizing.jpg')" },
      },
    ],
    pitch: {
      eyebrow: "For solar & energy businesses",
      title: "Renewable is the future.\nYour website should act like it.",
      body: [
        "Solar is scaling fast — yet most solar sites still behave like 2015 brochure-ware: a spec sheet, a contact form, and a wait. The brands that win the next decade are the ones that make a technical, high-trust purchase feel effortless.",
        "An AI-native build like VOLT works on three fronts at once: it makes customers' lives easier with instant answers and instant sizing, it works around the clock like a tireless salesperson, and it grows revenue through warmer, higher-value leads and a lighter support load — all wrapped in a brand and design system that signals you're the modern choice.",
      ],
      points: [
        "A 24/7 salesperson + support agent, built in",
        "Customers self-serve sizing and quotes — less friction, faster decisions",
        "Warmer, qualified pipeline → more booked installs",
        "A design system and brand that scale with the business",
      ],
    },
    stats: [["4", "wk", "Blank page → live"], ["0", "", "Framework deps"], ["6", "", "SKUs + 1 OS"], ["100", "%", "Homepage flow shipped"]],
    media: {
      identity: "url('/assets/volt/identity.jpg')",
      type: "url('/assets/volt/type.jpg')",
      homeDesktop: "url('/assets/volt/home-desktop.jpg')",
      homeMobile: "url('/assets/volt/flow-mobile.jpg')",
      components: "url('/assets/volt/ui-components.jpg')",
      gallery: [
        { src: "url('/assets/volt/extra-1.jpg')", label: "One day on VOLT power", wide: true },
        { src: "url('/assets/volt/extra-4.jpg')", label: "System sizing tool" },
        { src: "url('/assets/volt/extra-2.jpg')", label: "Build-your-system configurator" },
        { src: "url('/assets/volt/home-mobile.jpg')", label: "Homepage — mobile", tall: true },
        { src: "url('/assets/volt/extra-3.jpg')", label: "Footer wordmark" },
      ],
    },
  },
  {
    slug: "sarisara-lanka", num: "02", title: "Sarisara\nLanka",
    cats: ["Travel Marketplace", "Web", "AI"], year: "2026", accent: "#D8FF3E",
    summary: "An AI-native travel marketplace for Sri Lanka — built to be the source ChatGPT cites when someone asks where to go.",
    role: "Strategy · Design · Build", client: "Sarisara Lanka", timeline: "9 weeks", stack: ["WordPress", "Next.js", "MCP", "Schema"],
    img: "url('/assets/hero-poster.jpg')",
    overview: ["Sri Lanka's tourism sits across a thousand fragmented listings. The brief: one editorial marketplace travelers — and the assistants they ask — actually trust.", "I owned it end to end: positioning, identity, the full front-end, and an AI itinerary layer wired for citation from day one."],
    research: "Audited 40+ regional travel sites and ran live queries through ChatGPT, Claude and Perplexity to map exactly which sources got cited — and why the incumbents didn't.",
    ai: "A built-in itinerary agent answers \"plan me 5 days in the hill country\" from structured, schema-tagged content — and an llms.txt + entity graph make the brand quotable by every major assistant.",
    stats: [["3.4", "×", "Organic reach"], ["62", "%", "AI-cited queries"], ["9", "wk", "To launch"], ["01", "", "MCP-ready CMS"]],
  },
  {
    slug: "villa-kaloya", num: "03", title: "Villa\nKaloya",
    cats: ["Hospitality", "Web", "Bookings"], year: "2025", accent: "#FF9F1C",
    summary: "A boutique villa, booked direct. Cinematic, editorial, and engineered to skip the OTAs.",
    role: "Design · Build", client: "Villa Kaloya", timeline: "5 weeks", stack: ["Next.js", "Sanity", "Stripe"],
    img: null,
    overview: ["Kaloya was losing 18% of every booking to platform fees. The goal was a site so good guests book direct — and a brand that feels like the place itself.", "A slow, editorial scroll; real photography given room to breathe; a direct-booking flow with zero friction."],
    research: "Interviewed past guests, mapped the booking funnel, and benchmarked against the boutique-hospitality sites that convert without discounting.",
    ai: "An on-site concierge drafts replies to enquiries from the property's own content, and structured data surfaces availability and rates to AI trip planners.",
    stats: [["0", "%", "OTA fees"], ["2.1", "×", "Direct bookings"], ["48", "s", "Avg. session"], ["5", "wk", "To launch"]],
  },
  {
    slug: "lumen-skincare", num: "04", title: "Lumen\nSkincare",
    cats: ["Beauty", "Brand", "Shopify"], year: "2025", accent: "#FF3B30",
    summary: "A skincare brand built to be cited — identity, store, and an ingredient story assistants can read.",
    role: "Branding · Design · Build", client: "Lumen", timeline: "7 weeks", stack: ["Shopify", "Hydrogen", "Schema"],
    img: null,
    overview: ["A founder-led skincare line with a clinical story and no way to tell it. I built the identity and a store that makes the science legible — to buyers and to AI.", "Every product page is structured as an answerable claim: ingredient, concentration, evidence."],
    research: "Mapped how beauty buyers research on TikTok and chatbots, then structured the catalogue so each claim is independently citable.",
    ai: "Ingredient and clinical claims are marked up so ChatGPT recommends Lumen by name when asked for evidence-backed skincare.",
    stats: [["41", "%", "AI-cited claims"], ["1.8", "×", "Conversion"], ["18", "mo", "Brand runway"], ["7", "wk", "To launch"]],
  },
  {
    slug: "hiruka-wellness", num: "05", title: "Hiruka\nWellness",
    cats: ["Wellness", "Web", "UI/UX"], year: "2024", accent: "#2E6BFF",
    summary: "Calm, editorial, conversion-ready — a wellness retreat that reads like a long exhale.",
    role: "Design · Build", client: "Hiruka", timeline: "6 weeks", stack: ["Next.js", "Contentful"],
    img: null,
    overview: ["Hiruka needed to feel like the retreat itself — unhurried, warm, certain. The challenge was keeping that calm while still driving programme sign-ups.", "Generous space, slow reveals, one clear path to book a stay."],
    research: "Studied how wellness audiences decide, and where motion-heavy sites tip from calming into exhausting.",
    ai: "A programme finder answers natural-language questions (\"a 3-day reset for burnout\") from structured retreat content.",
    stats: [["1.9", "×", "Sign-ups"], ["54", "%", "Mobile share"], ["0", "", "Bounce on hero"], ["6", "wk", "To launch"]],
  },
  {
    slug: "north-point", num: "06", title: "North Point\nEstates",
    cats: ["Real Estate", "Web", "Brand"], year: "2024", accent: "#FFFFFF",
    summary: "Property, presented like product. A monochrome estate brand with listings that feel inevitable.",
    role: "Branding · Design · Build", client: "North Point", timeline: "8 weeks", stack: ["Next.js", "Mapbox", "Schema"],
    img: null,
    overview: ["Luxury real estate, drowning in the same beige template every agency uses. North Point wanted to look like a design house, not a brochure.", "A stark monochrome system, oversized type, and listings treated like editorial spreads."],
    research: "Reviewed how high-end buyers browse, and where map-and-grid templates flatten a property's story.",
    ai: "Listings carry structured location, spec and provenance data so AI property assistants can surface them accurately.",
    stats: [["2.6", "×", "Enquiry rate"], ["38", "%", "Saved listings"], ["12", "", "Avg. spreads"], ["8", "wk", "To launch"]],
  },
];
