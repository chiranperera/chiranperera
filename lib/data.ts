/* Studio Site — project data. Each project owns an accent.
   hero img: a CSS background value, or null → use a labelled placeholder. */

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
  img: string | null;
  overview: string[];
  research: string;
  ai: string;
  stats: [string, string, string][];
};

export const PROJECTS: Project[] = [
  {
    slug: "sarisara-lanka", num: "01", title: "Sarisara\nLanka",
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
    slug: "villa-kaloya", num: "02", title: "Villa\nKaloya",
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
    slug: "lumen-skincare", num: "03", title: "Lumen\nSkincare",
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
    slug: "hiruka-wellness", num: "04", title: "Hiruka\nWellness",
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
    slug: "north-point", num: "05", title: "North Point\nEstates",
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
