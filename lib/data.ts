/* Studio Site — project data. Each project owns an accent.
   hero img: a CSS background value, or null → use a labelled placeholder. */

/* A leader-line annotation on a tile: a marker dot at the anchor point (x,y)
   with a thin line to a label placed in a clear area (lx,ly) so it never
   covers content. All coords are % so they track any size. */
export type TileNote = { x: string; y: string; text: string; lx?: string; ly?: string };
/* cropY: window a full-page image — background-size 100%, position-y = cropY. */
export type GalleryItem = { src: string; label: string; portrait?: boolean; pos?: string; capPad?: string; cropY?: string; note?: TileNote };

/* A desktop + mobile screenshot shown side by side as one captioned unit.
   cropYDesktop/cropYMobile window a full-page image into each panel. */
export type DevicePair = { label: string; desktop: string; mobile: string; cropYDesktop?: string; cropYMobile?: string };

/* An alternating image/text "selling point" row (used on rich case studies). */
export type FeatureRow = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  media: { label: string; src?: string; pos?: string; capPad?: string; cropY?: string; note?: TileNote }; // src omitted → placeholder; pos = bg-position; capPad = caption side inset; cropY = window a full-page image; note = anchored pin
};

/* A business pain point the client faced before the project (Overview). */
export type Pain = { problem: string; result: string };

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
  pains?: Pain[];           // Overview: the business problems before the project
  research: string;         // Research: the industry-standard / the gap
  researchOurs?: string;    // Research: the novel, effective solution we provided
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
    design?: GalleryItem[];    // Direction & design grid (windowed crops); falls back to identity/type/components/homeMobile
    devicePair?: DevicePair;   // desktop + mobile shown side by side
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
    pains: [
      { problem: "No always-on way to answer buyers", result: "With no chatbot or assistant, questions sat unanswered for hours or days and enquiries arrived cold — so ready-to-buy prospects went quiet or bought from whoever replied first." },
      { problem: "Sizing was a wall, not a doorway", result: "Working out which battery you need meant a form, a phone call and a week's wait. That friction killed momentum, and most visitors left before they ever saw a price." },
      { problem: "Leads landed vague and unqualified", result: "Enquiries gave the sales team nothing to work with, so they chased cold prospects while genuinely ready buyers got the same slow treatment as tyre-kickers." },
      { problem: "It read like a spec sheet, not a brand", result: "Like the rest of the category, the experience looked like engineering data — not a confident consumer product people trust enough to bolt onto their wall." },
    ],
    research: "Industry standard: every major player — Tesla Powerwall 3, FranklinWH, Enphase, Anker SOLIX, EcoFlow — leads with raw capacity and spec tables, backed by a contact form and a callback. The category competes on numbers; almost none make the decision feel effortless or answer a nervous first-time buyer in the moment they're hesitating.",
    researchOurs: "So I built what the category doesn't have. A 24/7 AI concierge, grounded in the real product line, answers the scary questions instantly and turns idle browsers into qualified conversations. A bill-upload Instant Sizer reads a customer's actual usage and returns the right battery + solar size in seconds — no forms, no wait. And a 'start with one, stack as you grow' story reframes a daunting technical purchase as a confident, incremental one.",
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
        media: { label: "VOLT AI Concierge", src: "url('/assets/volt/feature-concierge.jpg')", pos: "right center", capPad: "8.6%" },
      },
      {
        eyebrow: "Interactive · Instant",
        title: "Tap your appliances. Size your battery.",
        body: "A visitor toggles their home's appliances and watches the recommended battery, solar and monthly cost update live — no form, no callback, just a confident system size in seconds. It turns the scariest part of the purchase, \"what do I actually need?\", into a 30-second self-serve answer.",
        points: [
          "Live battery + solar sizing as you toggle each load",
          "Shows the system, capacity and monthly cost on the spot",
          "Visitors self-qualify before they ever call",
        ],
        media: { label: "Home appliance calculator", src: "url('/assets/volt/feature-sizing.jpg')" },
      },
      {
        eyebrow: "AI · Automated",
        title: "Upload a bill. Get the right system.",
        body: "For buyers who'd rather not guess, the assistant reads their actual utility bill and returns the right battery and solar size in seconds — replacing the manual site-survey back-and-forth with an answer they trust. Forms, phone tag and a week's wait become a single drag-and-drop.",
        points: [
          "AI reads real consumption, not guesswork",
          "Skips the slow, manual site-survey",
          "Returns a tailored quote in three steps",
        ],
        media: { label: "Instant Sizer — bill upload", src: "url('/assets/volt/feature-leadcapture.jpg')" },
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
      // Direction & design grid — purpose-built design-system boards (Claude Design)
      design: [
        { src: "url('/assets/volt/design-identity.jpg')", label: "Identity & hero" },
        { src: "url('/assets/volt/design-type.jpg')", label: "Type specimen" },
        { src: "url('/assets/volt/design-components.jpg')", label: "Component library" },
        { src: "url('/assets/volt/design-app.jpg')", label: "App / mobile UI" },
      ],
      // homepage shown as one captioned device pair, windowed from both full images
      devicePair: { label: "Homepage — desktop & mobile", desktop: "url('/assets/volt/full-desktop.png')", mobile: "url('/assets/volt/full-mobile.png')", cropYDesktop: "0%", cropYMobile: "0%" },
      gallery: [
        // each tile is a vertical band of the one full-desktop screenshot (cropY = % from top)
        { src: "url('/assets/volt/full-desktop.png')", label: "One day on VOLT power", cropY: "22%" },
        { src: "url('/assets/volt/full-desktop.png')", label: "AI system sizing", cropY: "43%", note: { x: "80%", y: "62%", text: "AI sizing", lx: "26%", ly: "15%" } },
        { src: "url('/assets/volt/full-desktop.png')", label: "How it works", cropY: "33%" },
        { src: "url('/assets/volt/full-desktop.png')", label: "What it pays back", cropY: "63%" },
        { src: "url('/assets/volt/full-desktop.png')", label: "Trusted & reviewed", cropY: "72%" },
        { src: "url('/assets/volt/full-desktop.png')", label: "Footer & wordmark", cropY: "99%" },
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
    pains: [
      { problem: "Invisible to the assistants travelers now ask", result: "People increasingly plan trips through ChatGPT and Perplexity — and Sri Lanka's scattered listings were never the source those tools cited, so real demand never reached the brand." },
      { problem: "A thousand listings, no trust", result: "Information lived across forums and OTAs with no editorial voice, so travelers couldn't tell what was credible and bounced before booking anything." },
    ],
    research: "Industry standard: most regional travel sites are OTA-style listing dumps tuned for Google's blue links — not for the AI answer engines travelers increasingly use first.",
    researchOurs: "I structured the whole marketplace to be machine-quotable — schema-tagged content, an entity graph, an llms.txt and a built-in itinerary agent — so the brand becomes the source ChatGPT and Perplexity cite, not just another page Google ranks.",
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
    pains: [
      { problem: "Bleeding margin to the OTAs", result: "Nearly a fifth of every booking went to platform fees, because guests had no compelling reason — or easy way — to book direct." },
      { problem: "No way to answer guests fast", result: "Enquiries waited for a human reply, and slow responses quietly lost bookings to faster-moving listings." },
    ],
    research: "Industry standard: boutique properties either lean on the OTAs (and their fees) or run thin brochure sites that look nice but don't actually convert a direct booking.",
    researchOurs: "I built a cinematic direct-booking experience with an on-site AI concierge that answers enquiries instantly from the property's own content — so guests book direct, fast, and the OTA tax disappears.",
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
    pains: [
      { problem: "A clinical story no one could find", result: "A founder-led line with real science had no way to make its claims legible — to shoppers or to the AI tools they now research with — so the science never sold." },
      { problem: "Claims weren't citable", result: "Ingredient and evidence claims sat buried in marketing copy, so assistants never recommended the brand by name when buyers asked for proof." },
    ],
    research: "Industry standard: most beauty stores lead with mood and hero shots; the actual science sits in unstructured paragraphs that neither buyers nor AI can parse.",
    researchOurs: "I structured every product as an answerable claim — ingredient, concentration, evidence — and marked it up so ChatGPT recommends Lumen by name when someone asks for evidence-backed skincare.",
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
    pains: [
      { problem: "Calm that didn't convert", result: "The retreat had to feel unhurried, but the old site was either so quiet it drove no sign-ups or so busy it broke the very calm it was selling." },
      { problem: "No quick way to find the right programme", result: "Visitors had to dig through pages to find a retreat that fit their need, and many simply gave up before booking." },
    ],
    research: "Industry standard: wellness sites tip either into lifeless brochure-ware or motion-heavy noise that exhausts the exact audience they're trying to soothe.",
    researchOurs: "I paired a slow, editorial design with an AI programme finder that answers natural-language questions — 'a 3-day reset for burnout' — from structured retreat content, so it stays calm and still converts.",
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
    pains: [
      { problem: "The same beige template as everyone else", result: "Luxury listings looked identical to every other agency's, so a genuinely high-end brand read as a commodity and lost its premium." },
      { problem: "Listings AI assistants couldn't surface", result: "Property data was unstructured, so the emerging AI property tools buyers use couldn't recommend the listings accurately — or at all." },
    ],
    research: "Industry standard: high-end real estate defaults to map-and-grid templates that flatten every property into the same interchangeable brochure.",
    researchOurs: "I built a stark monochrome system that treats each listing like an editorial spread, with structured location, spec and provenance data so AI property assistants surface them accurately.",
    ai: "Listings carry structured location, spec and provenance data so AI property assistants can surface them accurately.",
    stats: [["2.6", "×", "Enquiry rate"], ["38", "%", "Saved listings"], ["12", "", "Avg. spreads"], ["8", "wk", "To launch"]],
  },
];
