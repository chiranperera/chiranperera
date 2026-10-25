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
  /* media omitted → the row renders text-only (used when a feature has no
     honest screenshot, e.g. a channel that isn't live yet). */
  media?: { label: string; src?: string; pos?: string; capPad?: string; cropY?: string; note?: TileNote }; // src omitted → placeholder; pos = bg-position; capPad = caption side inset; cropY = window a full-page image; note = anchored pin
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
  clientLabel?: string;     // meta-bar key when the work isn't a client job (default "Client")
  timeline: string;
  stack: string[];
  img: string | null;       // slideshow / work-card image
  cardPos?: string;         // work-card crop position (default "center"; e.g. "center 8%")
  heroImg?: string;         // case-study hero banner (falls back to img)
  liveUrl?: string;
  status?: string;          // shown in the Live slot when there is no URL yet
  buildNote?: string;       // Build section intro; falls back to the generic line
  designNote?: string;      // Design section intro (e.g. design-system summary)
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
    slug: "sarisara-lanka", num: "01", title: "Sarisara\nLanka",
    cats: ["Travel Marketplace", "Web", "Design System", "AI", "Automation"], year: "2026", accent: "#7700FF",
    summary: "An AI-native travel marketplace for Sri Lanka — licensed local guides design real multi-day trips from real hotels, stays and experiences, and every public page is built so AI assistants can read and quote it.",
    role: "Founder · Strategy · Brand & Design System · Build", clientLabel: "Own venture", client: "Sarisara Lanka", timeline: "In development",
    stack: ["WordPress", "Traveler theme + custom child", "PHP · MySQL", "Elementor Pro", "ACF Pro", "FluentCRM", "PayPal · bank transfer", "Schema.org + llms.txt", "Playwright", "Claude co-builder"],
    status: "Launching soon",
    img: "url('/assets/sarisara/project-card.webp')",
    heroImg: "url('/assets/sarisara/hero-banner.webp')",
    overview: [
      "Sri Lanka's best stays and experiences live in an informal, relationship-run economy — family-run hotels, licensed guides, home stays and local experts who trade over WhatsApp and word of mouth. Global platforms skip them, and the travellers who would love them can't find them or trust them.",
      "Sarisara Lanka brings that whole ecosystem onto one platform. Licensed local guides design real multi-day trips from real hotels, home stays, activities and local experts. Travellers choose their dates and group, see the exact price, and book. Every partner is confirmed and paid through one system, and every public page carries a card that AI assistants can read. I own it end to end — positioning, brand and design system, the full build, and the automation that runs it.",
    ],
    pains: [
      { problem: "The best providers were invisible", result: "Small hotels, guides and hosts ran on WhatsApp and word of mouth with no real storefront — so global platforms skipped them and international travellers never found them." },
      { problem: "Trips were stitched together by hand", result: "Planning a Sri Lankan trip meant juggling a dozen separate chats and bank transfers — no single price, no confirmation, and a lot of misplaced trust." },
      { problem: "Coordination ate the margins", result: "Confirming rooms, guides and activities meant endless calls and messages across several languages — slow, error-prone, and impossible to scale with people." },
      { problem: "Invisible to the assistants travellers now ask", result: "More trips start with 'ask AI' than with a search bar — and a pile of unstructured listings is something an assistant simply can't read, quote or book." },
      { problem: "Money went wrong quietly", result: "When a price, deposit or payout is wrong, nothing on the screen turns red. Nobody finds out until a hotel calls asking where its money is." },
    ],
    research: "Industry standard: regional travel sites are listing dumps tuned for Google's blue links — pretty pages a human scrolls, with availability and pricing locked inside forms. None of it is readable by an AI assistant, and none of it coordinates the real people behind the listing.",
    researchOurs: "I built the marketplace to be machine-readable and self-running. Every public page — trips, stays, activities, local experiences, places and town pages — carries a Schema.org JSON-LD card built by code from the listing's own facts, plus an llms.txt file for AI crawlers. A daily check confirms every card is still correct, and no card ever carries a price, phone number or email. Behind that, pricing, partner confirmation and payouts run as one pipeline, so the platform grows without a large operations team.",
    ai: "The platform is one connected system. A drag-and-drop itinerary builder lets a licensed guide assemble a multi-day trip — hotels, activities and local experiences — with prices read live from each partner's own availability calendar. The moment a traveller pays the deposit, the agreed price is locked and every partner is asked to confirm. A partner who does not answer within 24 to 48 hours is replaced, but only after the traveller approves the change. After the trip there is a 14-day waiting period for any claim, then every partner is paid in one monthly pay run on the 25th, after an admin approves it. Partner phone numbers are never shown to anyone. I used Claude as a co-builder throughout — architecture, the booking and money logic, the design system, copy and automated testing.",
    aiHeadline: "A marketplace that runs itself — and that AI can read.",
    features: [
      {
        eyebrow: "Interactive · Guide-facing",
        title: "Build a whole trip, day by day.",
        body: "A drag-and-drop builder lets a guide put together several days of hotels, activities and local experiences, with each price read from the partner's calendar for those exact dates. Dates are auto-corrected so days never gap or overlap.",
        points: [
          "Drag-and-drop days",
          "Live calendar prices",
          "Automatic date fixing",
        ],
        media: { label: "Itinerary builder", src: "url('/assets/sarisara/feature-itinerary.webp')" },
      },
      {
        eyebrow: "Automated · Partners",
        title: "Every partner confirms, nobody chases.",
        body: "After the deposit, every hotel, guide and host gets one message with one button to say yes or no. No answer in 24 to 48 hours means a replacement is offered — and the traveller approves it first. Phone numbers are never exposed. Email is live today; WhatsApp is built and switches on once the business registration is complete.",
        points: [
          "One-button reply",
          "24 to 48 hour replacement with traveller approval",
          "Local Expert messages in English, Sinhala and Tamil",
        ],
      },
      {
        eyebrow: "Engine · Trust",
        title: "One price, from search to payout.",
        body: "Every rate is read on the server from the partner's own availability calendar, so the price a traveller sees is the price they are charged — in whole US dollars. Deposit, partner confirmation, balance, a 14-day waiting period and the pay run on the 25th all run as one audited pipeline.",
        points: [
          "Price locked at deposit",
          "Whole US dollars",
          "Monthly pay run on the 25th",
        ],
        media: { label: "Booking & payout pipeline", src: "url('/assets/sarisara/feature-pipeline.webp')" },
      },
      {
        eyebrow: "Pipeline · Discoverability",
        title: "Built to be the source AI reads.",
        body: "Every public page carries a Schema.org JSON-LD card built from the listing's own facts, plus an llms.txt file. A daily check keeps each card correct and makes sure no price, phone number or email ever leaks into one. When a traveller asks an assistant about Sri Lanka, Sarisara is something it can read and quote.",
        points: [
          "Schema.org JSON-LD",
          "llms.txt",
          "No prices, phones or emails in any card",
        ],
        media: { label: "Structured data · agent-readable", src: "url('/assets/sarisara/feature-schema.webp')" },
      },
    ],
    pitch: {
      eyebrow: "For travel, hospitality & marketplaces",
      title: "Your platform should run itself —\nand be readable by AI.",
      body: [
        "Travel is shifting two ways at once: guests increasingly start with an AI assistant, and the operators who win are the ones who don't drown in manual coordination. Most sites are ready for neither.",
        "An AI-native build like Sarisara works on both fronts — it automates the busywork (confirmations, pricing, payouts) so you scale without an ops team, and it structures your inventory so AI agents can discover and quote it. The same approach fits any marketplace, hotel group or experience brand.",
      ],
      points: [
        "Automate the coordination — confirmations, pricing, payouts",
        "Be readable and quotable by AI assistants, not just Google",
        "Multi-channel, multi-language guest and provider comms",
        "A platform that scales without scaling the team",
      ],
    },
    stats: [["7", "", "Partner types, one booking flow"], ["309K", "", "Lines of custom PHP"], ["396", "", "Automated browser test files"], ["384", "", "Custom icons in the design system"]],
    buildNote: "Built on WordPress with a large custom child theme — one codebase for the public site, the partner tools and the booking and money pipeline. Every money path is covered by automated browser tests, and every public page ships with a Schema.org JSON-LD card plus llms.txt for AI crawlers.",
    designNote: "Before redesigning a single page, I built the Sarisara Lanka Design System: one violet-led palette (violet #7700FF, green #30B300, gold #FFB700, navy #090920, red #FF0A1F), one typeface (DM Sans), shadcn-style components, and a custom set of 384 icons in 25 groups, all drawn on one 24 px grid with one stroke weight. Every screen — from the homepage to the partner dashboard — is checked against it, so the whole platform looks and feels like one product.",
    media: {
      design: [
        { src: "url('/assets/sarisara/design-brand.webp')", label: "Design system" },
        { src: "url('/assets/sarisara/design-home.webp')", label: "Homepage" },
        { src: "url('/assets/sarisara/design-listing.webp')", label: "Trip page" },
        { src: "url('/assets/sarisara/design-itinerary.webp')", label: "Itinerary builder" },
      ],
      devicePair: { label: "Homepage — desktop & mobile", desktop: "url('/assets/sarisara/full-desktop.webp')", mobile: "url('/assets/sarisara/full-mobile.webp')" },
    },
  },
  {
    slug: "thushara-rathnayake", num: "02", title: "Thushara\nRathnayake",
    cats: ["Personal Brand", "Web", "Booking", "Automation", "Admin"], year: "2026", accent: "#C9962F",
    summary: "A personal-brand site for a 16-year insurance advisor — plain-language services, real approved reviews, and a 90-second booking flow that runs itself.",
    role: "Strategy · Brand & Design · Build · Handover", client: "Thushara Rathnayake", timeline: "Live · handed over 4 Oct 2026",
    stack: ["Astro 7", "Preact islands", "Tailwind CSS 4", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "Cloudflare R2", "Cloudflare Email", "Self-hosted fonts", "Schema.org JSON-LD", "Claude co-builder"],
    liveUrl: "https://thushararathnayake.com/",
    img: "url('/assets/thushara/project-card.webp')", cardPos: "center 8%",
    heroImg: "url('/assets/thushara/hero-banner.webp')",
    overview: [
      "Thushara Rathnayake has advised Sri Lankan professionals for 16 years — 14 of them at MDRT level, the global standard that fewer than 1% of financial advisors reach. His business ran on referrals and WhatsApp, with no place where a busy doctor or engineer could see what he does, read what other clients say, and book a time in a minute and a half.",
      "I built that place: a fast, calm website with eight service pages, pages written for doctors and engineers, a four-step booking form that offers only the times he is free, and an email that reaches him with a one-tap WhatsApp reply. Behind it sits a simple admin where Thushara changes his own content — reviews, photos, guides, questions, hours and legal pages — without ever needing a developer.",
    ],
    pains: [
      { problem: "Expertise without a storefront", result: "16 years of results lived only in referrals and WhatsApp chats. A new client had nothing to look at before trusting him with their family's future." },
      { problem: "Busy professionals, no time to call", result: "Doctors and engineers work long shifts. A phone call during work hours is a lost lead." },
      { problem: "Insurance feels like jargon and pressure", result: "People delay cover because they expect a sales pitch they cannot follow." },
      { problem: "Every change needed a developer", result: "A new award photo, a new review or new opening hours should not mean a support ticket." },
    ],
    research: "Industry standard: most insurance-agent sites are a single template page with a phone number, a generic stock photo and a contact form that drops into an inbox nobody watches. There are no real reviews, no plain-language explanations, and nothing the advisor can update himself.",
    researchOurs: "A personal brand site that answers questions before they are asked: eight service pages in plain language, separate pages for doctors and engineers, a 'how working with me works' page, and only real, approved client reviews. Booking takes about 90 seconds and offers only the hours Thushara has set. The site is static and fast on Sri Lankan mobile networks, with fonts hosted on the same server, and everything that changes often is editable by Thushara himself.",
    ai: "Every booking is saved to the database first, then two emails go out: Thushara gets the client's details with a 'Reply on WhatsApp' button, and the client gets a warm confirmation from Thushara's own name — and if they reply, it reaches him directly. The booking form offers only the hours he has set for each day of the week. His years of experience and his MDRT count go up by themselves every 1 January, on Colombo time. New reviews arrive through a private link he sends to clients, and nothing is published until he approves it with one tap.",
    aiHeadline: "A website that books, answers and updates itself.",
    features: [
      {
        eyebrow: "Booking · Client-facing",
        title: "Book a consultation in about 90 seconds.",
        body: "A four-step form: what you do, what you need, how and when to meet, and how to reach you. It only offers times inside the hours Thushara has set, at least 3 hours ahead and up to 30 days out. Progress is saved if the visitor leaves and comes back.",
        points: [
          "4 steps",
          "Only his free hours",
          "Saved if you leave",
        ],
        media: { label: "Booking form · step 1", src: "url('/assets/thushara/feature-booking.webp')" },
      },
      {
        eyebrow: "Email · Automated",
        title: "The right email to the right person.",
        body: "Each booking sends two emails. Thushara's copy shows who, what and when, with one-tap Reply on WhatsApp, Call and Email buttons and a link to the enquiry. The client's thank-you arrives from 'Thushara Rathnayake', and a reply goes straight to him. The booking is saved before any email is sent, so a slow email never loses a client.",
        points: [
          "2 emails per booking",
          "One-tap WhatsApp reply",
          "Saved before sending",
        ],
        media: { label: "Booking emails · client & advisor", src: "url('/assets/thushara/feature-email.webp')" },
      },
      {
        eyebrow: "Admin · No code",
        title: "Thushara runs his own website.",
        body: "A private admin with no password — he signs in with a one-time link sent to his email. He edits enquiries (with CSV export), reviews, photos, downloadable guides, questions for each page, service-page wording, weekly hours, his contact details and his legal pages.",
        points: [
          "One-time sign-in link",
          "10 admin sections",
          "Hours set per day of the week",
        ],
        media: { label: "Admin · home & weekly hours", src: "url('/assets/thushara/feature-admin.webp')" },
      },
      {
        eyebrow: "Trust · Reviews",
        title: "Only real reviews, approved by him.",
        body: "There is no public review button. Thushara sends a private link to a client, who adds a review and an optional photo. It waits until he approves it — one tap from the email he receives.",
        points: [
          "Private review link",
          "Optional photo",
          "Nothing published without approval",
        ],
        media: { label: "Reviews · private link & approval", src: "url('/assets/thushara/feature-reviews.webp')" },
      },
    ],
    pitch: {
      eyebrow: "For advisors, consultants & personal brands",
      title: "Your reputation, working for you\naround the clock.",
      body: [
        "Clients check you online before they call.",
        "A site like this answers their questions, shows real reviews, and books a time while you are with another client — and you can update it yourself.",
      ],
      points: [
        "Plain-language services for the clients you want",
        "Real reviews, approved before they go live",
        "A booking flow that only offers your free hours",
        "Update reviews, photos and hours yourself",
      ],
    },
    stats: [["24", "", "Pages, all live"], ["90", "sec", "To book a consultation"], ["10", "", "Admin sections he edits himself"], ["2", "", "Emails sent automatically per booking"]],
    buildNote: "Marketing pages are pre-built and served from Cloudflare's network; only the booking, admin and email parts run on demand. Each page has its own share image, a sitemap, structured data for search engines, and the staging address is blocked from search.",
    designNote: "Ink navy, a warm gold and a cream page — calm and premium, never salesy. Headlines in Cabinet Grotesk, body text in Satoshi, and each service's promise line in Newsreader italic. All fonts are hosted on the site itself so pages load fast on Sri Lankan mobile networks.",
    media: {
      design: [
        { src: "url('/assets/thushara/design-brand.webp')", label: "Brand & type" },
        { src: "url('/assets/thushara/design-home.webp')", label: "Homepage" },
        { src: "url('/assets/thushara/design-service.webp')", label: "Service page" },
        { src: "url('/assets/thushara/design-persona.webp')", label: "Page for doctors" },
      ],
      devicePair: { label: "Homepage — desktop & mobile", desktop: "url('/assets/thushara/full-desktop.webp')", mobile: "url('/assets/thushara/full-mobile.webp')", cropYMobile: "100%" },
    },
  },
  {
    slug: "volt-home-energy", num: "03", title: "VOLT Home\nEnergy",
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
      // homepage shown as one captioned device pair (desktop + mobile); the rest
      // of the screens live on the real site, linked from the Screens section.
      devicePair: { label: "Homepage — desktop & mobile", desktop: "url('/assets/volt/full-desktop.jpg')", mobile: "url('/assets/volt/full-mobile.jpg')" },
    },
  },


  {
    slug: "villa-kaloya", num: "04", title: "Villa\nKaloya",
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
    slug: "lumen-skincare", num: "05", title: "Lumen\nSkincare",
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
    slug: "hiruka-wellness", num: "06", title: "Hiruka\nWellness",
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
    slug: "north-point", num: "07", title: "North Point\nEstates",
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
