# Sarisara Lanka — content & image brief

**Purpose:** everything I need to turn Sarisara into project **01 / the lead project** and give it a full, real case study. Fill this in (edit inline or reply in chat), drop the images in the folder below, and I'll wire it up.

**Status of the code right now:** Sarisara is already first in `lib/data.ts` (`num: "01"`), so it leads the slideshow and the Projects grid. It still has **no images** (`img: null`, no `media`), so the hero, slideshow and Screens section currently show placeholders.

---

## TL;DR checklist

- [ ] Correct the facts in **§1**
- [ ] Edit the copy in **§2** (or reply "copy is fine")
- [ ] Add **12 images** to `public/assets/sarisara/` — exact names + sizes in **§3**
- [ ] Give me **4 real stats** in **§4**
- [ ] Answer the sign-off questions in **§5**

---

## 1. Fact sheet

| Field | Current value | Your correction |
|---|---|---|
| Title | `Sarisara Lanka` (displayed on two lines: "Sarisara" / "Lanka") | |
| Slug / URL | `/projects/sarisara-lanka` | |
| Project number | `01` — lead project | |
| Categories | `Travel Marketplace · Web · AI · Automation` | |
| Year | `2026` | |
| Accent colour | `#FFB700` (travel gold) | |
| Client | `Sarisara Lanka` | |
| Role | `Strategy · Design · Build` | |
| Timeline | `In development` | |
| Live URL | Hidden until launch — do not show any link | |
| Stack | WordPress · PHP/MySQL · Elementor Pro · WhatsApp Cloud API · FluentCRM · PayHere/PayPal · Schema/JSON-LD | |

**Also answer:**

1. Is Sarisara **your own venture**, a **client**, or a partnership? (This changes the "Client" line and the voice.)
2. Is it **launched**? If yes, what was the real build time (e.g. "10 weeks")? If it's still in development, "In development" stays.
3. Can I **publicly name the client and link the live site**? (Yes / no / name only / no URL.)

---

## 2. Case-study copy (current draft → edit here)

Section order on the page: **01 Overview → 02 Research → 03 AI → 04 Design → 05 Build → 06 Results → 07 Screens**, plus an optional closing pitch. Edit anything below directly; leave the rest.

### 01 · Overview — the premise

> Sri Lanka's best stays and experiences live in an informal, relationship-run economy — family-run hotels, licensed guides, home cooks and cultural hosts who trade over WhatsApp and word of mouth. Global platforms ignore them, and the travellers who'd love them can't find or trust them.
>
> Sarisara Lanka maps that whole ecosystem into one platform: travellers build a multi-day trip themselves, every provider is coordinated and paid automatically, and each listing is structured so AI assistants can discover and book it. I own it end to end — positioning, brand, the full build, and the AI/automation layer that runs it.

### 02 · "What wasn't working" — 4 pain points

| # | Problem | What it meant |
|---|---|---|
| 1 | **The best providers were invisible** | Small hotels, guides and hosts ran on WhatsApp and word of mouth with no real storefront — so global platforms skipped them and international travellers never found them. |
| 2 | **Trips were stitched together by hand** | Planning a Sri Lankan trip meant juggling a dozen separate chats and bank transfers — no single price, no confirmation, and a lot of misplaced trust. |
| 3 | **Coordination ate the margins** | Confirming rooms, guides and activities meant endless calls and messages across three languages — slow, error-prone, and impossible to scale with people. |
| 4 | **Invisible to the assistants travellers now ask** | More trips start with "ask AI" than with a search bar — and a pile of unstructured listings is something an assistant simply can't read, quote or book. |

**Do these 4 match what you actually saw?** Add, cut or rewrite — 3–5 is the sweet spot.

### 03 · Research — industry standard vs what you did differently

**Industry standard (current):**

> Regional travel sites are listing dumps tuned for Google's blue links — pretty pages a human scrolls, with availability and pricing locked inside forms. None of it is readable by an AI assistant, and none of it coordinates the real people behind the listing.

**What I built differently (current):**

> I built the marketplace to be machine-quotable and self-running. Every hotel, guide and experience is structured as Schema.org JSON-LD — clean facts plus live availability — exposed through an API and built MCP/WebMCP-ready, so an assistant can discover, compare and book it. Behind that, booking, pricing and provider coordination are automated end to end, so the platform scales without an ops team.

**Name 2–3 real competitors/alternatives** you're comparing against (e.g. Booking.com, Agoda, GetYourGuide, local operators) so the "industry standard" line is specific.

### 04 · AI — headline, paragraph and 4 feature rows

**Headline (current):** *A marketplace that books and runs itself.*

**Paragraph (current):**

> The platform is one connected automation system. A drag-and-drop Itinerary Builder lets travellers assemble a multi-day trip with live, calendar-driven pricing. The moment a deposit lands, a single dispatcher confirms every provider — hotels, guides, drivers and community hosts — over WhatsApp, email and SMS in English, Sinhala or Tamil, with one-tap reply buttons that update the booking automatically. Pricing reads from one calendar so the price shown is always the price charged, and payouts (plus a one-time finder's fee to the guide who discovered a host) are calculated and released by a post-trip job. I used Claude as a co-builder throughout — architecture, the booking-state logic, copy and rapid component generation against a strict spec.

**Feature rows (each = eyebrow · title · body · 3 bullets · 1 image):**

| # | Eyebrow | Title | Body (current) |
|---|---|---|---|
| F1 | Interactive · Traveller-facing | Build a whole trip, day by day. | A drag-and-drop itinerary builder lets a traveller assemble multiple days of hotels, activities and local experiences and watch the price update live from the availability calendar. Date continuity is auto-corrected so days never gap or overlap — a real trip plan, not a contact form. |
| F2 | AI · Automated | Confirms every provider while you sleep. | The moment a deposit is paid, one dispatcher reaches every provider — hotels, guides, drivers and community hosts — over WhatsApp, email and SMS, in their own language. A single tap (Available / Not / Call me) updates the booking automatically: no app, no typing, and no phone numbers ever exposed. |
| F3 | Engine · Trust | One price, from search to payout. | Every rate reads from a single availability calendar on the server, so the price a traveller sees is always the price they're charged — no surprises. Deposit, provider confirmation, balance and automatic payouts (including a one-time finder's fee for whoever discovered a host) all run as one audited pipeline. |
| F4 | Pipeline · Discoverability | Built to be the source AI books through. | Every listing is structured as Schema.org JSON-LD with clean facts and live availability, exposed through an API and built MCP/WebMCP-ready. So when a traveller asks an assistant to plan Sri Lanka, Sarisara is something it can actually read, quote and book — not just another page hoping to rank. |

**Verify (only keep what's true):**

- WhatsApp Cloud API + email + SMS dispatcher? PayHere + PayPal? Automatic payouts? Finder's fee?
- English / Sinhala / Tamil — all three live?
- Schema.org JSON-LD on every listing? API? Is "MCP/WebMCP-ready" accurate?
- Did you use Claude as a co-builder? (If not, I'll remove that line.)

### 05 · Design — image labels only

The Design section is a 4-tile grid. I need one label per image (e.g. "Brand & identity", "Homepage", "Experience listing", "Itinerary builder"). Image files are in §3.

### 06 · Build — stack

Current: `WordPress · PHP/MySQL · Elementor Pro · WhatsApp Cloud API · FluentCRM · PayHere/PayPal · Schema/JSON-LD`. Correct or add (e.g. hosting, theme, plugins).

### 07 · Results — stats

See §4. The section heading is "Deployment & results".

### Optional closing pitch (currently on VOLT; can add to Sarisara)

> **Eyebrow:** For travel, hospitality & marketplaces
> **Title:** Your platform should run itself — and be bookable by AI.
>
> Travel is shifting two ways at once: guests increasingly start with an AI assistant, and the operators who win are the ones who don't drown in manual coordination. Most sites are ready for neither.
>
> An AI-native build like Sarisara works on both fronts — it automates the busywork (confirmations, pricing, payouts) so you scale without an ops team, and it structures your inventory so AI agents can discover and book it. The same approach fits any marketplace, hotel group or experience brand.

Keep / edit / drop?

---

## 3. Images — the main thing I need

**Folder:** `public/assets/sarisara/` (create it if it doesn't exist — I'll also create it). Use the **exact filenames** below so I can wire them without guessing.

**Format:** PNG for UI/screens (crisp text). JPG is fine for photos. Keep each under ~800 KB if you can — I'll optimise further before shipping.

**Do not downscale** — give me the pixel sizes below. They are sized for retina displays at the size the site renders them.

### The 4 shapes the layout uses

1. **Portrait card** (4:5) — home slideshow right half + Projects grid card
2. **Wide banner** (2:1) — top of the case study, behind the title
3. **Device pair** (16:9 desktop + 9:16 mobile) — the "Selected screens" section
4. **Landscape tiles** (4:3) — 4 design tiles + 4 AI feature images

### Files to supply

| # | Filename | Exact size (px) | Ratio | Where it appears | What it should show |
|---|---|---|---|---|---|
| 1 | `project-card.png` | **1600 × 2000** | 4:5 | Home slideshow (right half, full height) + Projects grid card | One strong vertical composition — a hero travel scene, or a phone/laptop showing Sarisara. The Projects card crops to the **centre 50% vertically** and darkens it, so keep the subject centred; avoid small text top/bottom. |
| 2 | `hero-banner.png` | **3000 × 1500** | 2:1 | Case-study hero, full-bleed, under a dark gradient scrim | Wide destination shot / brand image. Focal point centre or right; the **bottom-left third** gets darkened and overlaid with the title, so keep it clean. |
| 3 | `full-desktop.png` | **3024 × 1701** | 16:9 | Screens — desktop panel | Sarisara homepage **above the fold**. No browser chrome, no URL bar. (Full-page tall screenshot also OK — 1440 px+ wide, any height; just tell me it's full-page and I'll window it.) |
| 4 | `full-mobile.png` | **1170 × 2532** (native) or **1080 × 1920** (exact 9:16) | 9:16 | Screens — mobile panel | Homepage above the fold. No phone frame, no status bar. Native phone ratio is fine — I anchor crops to the top. |
| 5 | `design-brand.png` | **2400 × 1800** | 4:3 | Design grid — D—01 | Brand/identity board: logo, palette, typography — or the strongest full-bleed brand screen. |
| 6 | `design-home.png` | **2400 × 1800** | 4:3 | Design grid — D—02 | Homepage or destination page. |
| 7 | `design-listing.png` | **2400 × 1800** | 4:3 | Design grid — D—03 | A hotel / guide / experience listing page. |
| 8 | `design-itinerary.png` | **2400 × 1800** | 4:3 | Design grid — D—04 | The itinerary builder with a multi-day trip in progress. |
| 9 | `feature-itinerary.png` | **2400 × 1800** | 4:3 | AI — F1 | Itinerary builder, open, with days + live price visible. |
| 10 | `feature-whatsapp.png` | **2400 × 1800** | 4:3 | AI — F2 | WhatsApp provider confirmation with the quick-reply buttons. |
| 11 | `feature-pipeline.png` | **2400 × 1800** | 4:3 | AI — F3 | Booking state / payouts dashboard (or a clean diagram of deposit → confirm → balance → payout). |
| 12 | `feature-schema.png` | **2400 × 1800** | 4:3 | AI — F4 | Structured data / listing JSON-LD, or an AI assistant answer that cites/books Sarisara. |

**Portrait option:** if any design or feature shot is naturally portrait, send it as **1800 × 2400** (3:4) and tell me which — I'll set that tile to portrait. Mixed portrait/landscape in the Design grid is supported.

**If a feature isn't visually capturable**, tell me and I'll rewrite that row as text-only or swap in a different proof point. A bad/fake screenshot is worse than none.

**You do NOT need:** separate identity/type/component images, or a gallery. The `gallery` field isn't rendered by the current layout. 12 files is the full set.

---

## 4. Stats — 4 numbers for the Results section

The section renders **4 stats** as `big number` + `unit` + `label`. Current placeholders:

| Big | Unit | Label | Real? |
|---|---|---|---|
| 5 | — | Provider types, one flow | |
| 3 | — | Languages — EN · SI · TA | |
| 10 | — | Booking stages automated | |
| 0 | — | Manual payouts | |

Replace with real ones if you have them, e.g. providers onboarded, trips planned, average confirmation time, hours saved per booking, % of bookings fully automated, launch/build time, languages supported. **Don't invent metrics** — if there's no number, a true non-number claim is fine (e.g. "1 · platform, end to end").

---

## 5. Sign-off

1. Client name public? ☐ Yes ☐ No — if no, I'll use "Sarisara Lanka" as a project name only and hide the URL.
2. Live URL public? ☐ Yes ☐ No
3. Any NDA / people who shouldn't be named?
4. Any real **testimonial or client quote**? (Not supported yet — I can add a quote block if you have one.)
5. Was this a paid/commercial project or your own venture? (Affects how I word "client" and "I own it".)
6. Launch date / duration, if launched.

---

## 6. What I'll do once you send this

1. Bake the facts + copy into `lib/data.ts` (Sarisara stays `num: "01"`).
2. Add the `media` map, tile labels and any `cropY` windows.
3. Optimise and rename images, then verify every tile renders (not screenshots — computed styles + pixel sampling).
4. Update the site copy/metadata that still assumes six dummy projects.
5. Run the build, then commit + push to `main` (build only after the dev server is stopped).
