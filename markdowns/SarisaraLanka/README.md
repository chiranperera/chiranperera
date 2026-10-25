# Sarisara Lanka — filled-in case study brief

This answers `../sarisara-case-study-brief.md`. Every fact here was checked against the real Sarisara
code on 25 Oct 2026. Where the old draft said something that is not true, it is corrected below and the
reason is given. **Do not add claims that are not in this file.**

Images in this folder use the exact filenames from the brief. Copy them to `public/assets/sarisara/`.
They are large PNGs (up to ~6 MB) — please optimise them before shipping, as the brief says.

---

## 1. Fact sheet (corrected)

| Field | Value |
|---|---|
| Title | Sarisara Lanka |
| Slug | `/projects/sarisara-lanka` |
| Project number | 01 — lead project |
| Categories | Travel Marketplace · Web · Design System · AI · Automation |
| Year | 2026 |
| Accent colour | **`#7700FF`** (Sarisara violet — the real primary brand colour). `#FFB700` gold is the secondary accent. |
| Client | Own venture — Chiran is the founder |
| Role | Founder · Strategy · Brand & Design System · Build |
| Timeline | In development — launching 2026 (not live yet) |
| Live URL | **Hidden until launch.** Do not show any link or web address. Show "Launching soon" instead. (`liveUrl` has been removed from `lib/data.ts`.) |
| Stack | WordPress (Traveler theme + a large custom child theme) · PHP / MySQL · Elementor Pro · ACF Pro · FluentCRM · PayPal · bank-transfer matching · Schema.org JSON-LD + llms.txt · Playwright test suite · built with Claude as co-builder |

Removed from the old stack line: **PayHere** (only a refund setting, not a checkout) and **WhatsApp Cloud API**
as a live channel (it is built but switched off until the business registration is complete — see F2).

---

## 2. Case-study copy (corrected)

### 01 · Overview

> Sri Lanka's best stays and experiences live in an informal, relationship-run economy — family-run hotels,
> licensed guides, home stays and local experts who trade over WhatsApp and word of mouth. Global platforms
> skip them, and the travellers who would love them can't find them or trust them.
>
> Sarisara Lanka brings that whole ecosystem onto one platform. Licensed local guides design real multi-day
> trips from real hotels, home stays, activities and local experts. Travellers choose their dates and group,
> see the exact price, and book. Every partner is confirmed and paid through one system, and every public
> page carries a card that AI assistants can read. I own it end to end — positioning, brand and design
> system, the full build, and the automation that runs it.

**What changed and why:** the old draft said "travellers build a multi-day trip themselves". Not true —
the itinerary builder is used by guides (and the Sarisara team). It also said AI assistants can "book" a
listing. They can read and quote it; there is no booking through AI.

### 02 · What wasn't working (the 4 pain points are fine — one small change)

Keep all 4 rows. In row 3, change "across three languages" to **"across several languages"**.

Suggested 5th row (optional, true):

| 5 | **Money went wrong quietly** | When a price, deposit or payout is wrong, nothing on the screen turns red. Nobody finds out until a hotel calls asking where its money is. |

### 03 · Research

**Industry standard** — keep the current text.

**What I built differently (corrected):**

> I built the marketplace to be machine-readable and self-running. Every public page — trips, stays,
> activities, local experiences, places and town pages — carries a Schema.org JSON-LD card built by code
> from the listing's own facts, plus an llms.txt file for AI crawlers. A daily check confirms every card is
> still correct, and no card ever carries a price, phone number or email. Behind that, pricing, partner
> confirmation and payouts run as one pipeline, so the platform grows without a large operations team.

Removed: "exposed through an API" and "MCP/WebMCP-ready" — **there is no public API and no MCP in the code.**

**Competitors (suggestion — Chiran to confirm):** Booking.com · GetYourGuide · Viator / Tripadvisor · local tour operators booked over WhatsApp.

### 04 · AI

**Headline:** *A marketplace that runs itself — and that AI can read.*

**Paragraph (corrected):**

> The platform is one connected system. A drag-and-drop itinerary builder lets a licensed guide assemble a
> multi-day trip — hotels, activities and local experiences — with prices read live from each partner's own
> availability calendar. The moment a traveller pays the deposit, the agreed price is locked and every
> partner is asked to confirm. A partner who does not answer within 24 to 48 hours is replaced, but only after
> the traveller approves the change. After the trip there is a 14-day waiting period for any claim, then
> every partner is paid in one monthly pay run on the 25th, after an admin approves it. Partner phone
> numbers are never shown to anyone. I used Claude as a co-builder throughout — architecture, the booking
> and money logic, the design system, copy and automated testing.

**Feature rows:**

| # | Eyebrow | Title | Body | Image |
|---|---|---|---|---|
| F1 | Interactive · Guide-facing | Build a whole trip, day by day. | A drag-and-drop builder lets a guide put together several days of hotels, activities and local experiences, with each price read from the partner's calendar for those exact dates. Dates are auto-corrected so days never gap or overlap. | `feature-itinerary.png` |
| F2 | Automated · Partners | Every partner confirms, nobody chases. | After the deposit, every hotel, guide and host gets one message with one button to say yes or no. No answer in 24 to 48 hours means a replacement is offered — and the traveller approves it first. Phone numbers are never exposed. Email is live today; WhatsApp is built and switches on once the business registration is complete. | **text-only** — no image (see §3) |
| F3 | Engine · Trust | One price, from search to payout. | Every rate is read on the server from the partner's own availability calendar, so the price a traveller sees is the price they are charged — in whole US dollars. Deposit, partner confirmation, balance, a 14-day waiting period and the pay run on the 25th all run as one audited pipeline. | `feature-pipeline.png` |
| F4 | Pipeline · Discoverability | Built to be the source AI reads. | Every public page carries a Schema.org JSON-LD card built from the listing's own facts, plus an llms.txt file. A daily check keeps each card correct and makes sure no price, phone number or email ever leaks into one. When a traveller asks an assistant about Sri Lanka, Sarisara is something it can read and quote. | `feature-schema.png` |

Bullets per row (3 each, all true):
- F1: Drag-and-drop days · Live calendar prices · Automatic date fixing
- F2: One-button reply · 24 to 48 hour replacement with traveller approval · Local Expert messages in English, Sinhala and Tamil
- F3: Price locked at deposit · Whole US dollars · Monthly pay run on the 25th
- F4: Schema.org JSON-LD · llms.txt · No prices, phones or emails in any card

**Answers to "Verify (only keep what's true)":**
- WhatsApp + email + SMS dispatcher — **email live; WhatsApp built but switched off; no SMS.**
- PayHere + PayPal — **PayPal (in test mode until launch) and bank transfer. No PayHere checkout.**
- Automatic payouts — **yes, a monthly pay run on the 25th, approved by an admin.**
- Finder's fee — **removed.** It was replaced by the "Discoverer" model (people who find great local hosts earn on each booking). Do not mention a finder's fee.
- English / Sinhala / Tamil — **only for Local Expert messages.** The website itself is English only. Do not say "3 languages".
- JSON-LD on every listing — **yes, on every public page type listed above.** API — **no.** MCP/WebMCP — **no.**
- Claude as co-builder — **yes.** Thousands of commits carry a Claude co-author line.

### 05 · Design — and the Design System (new, please add)

Tile labels for the 4-tile grid:

| Tile | File | Label |
|---|---|---|
| D—01 | `design-brand.png` | Design system |
| D—02 | `design-home.png` | Homepage |
| D—03 | `design-listing.png` | Trip page |
| D—04 | `design-itinerary.png` | Itinerary builder |

**Please add a short Design System paragraph to this section:**

> Before redesigning a single page, I built the Sarisara Lanka Design System: one violet-led palette
> (violet `#7700FF`, green `#30B300`, gold `#FFB700`, navy `#090920`, red `#FF0A1F`), one typeface (DM Sans),
> shadcn-style components, and a custom set of 384 icons in 25 groups, all drawn on one 24 px grid with one
> stroke weight. Every screen — from the homepage to the partner dashboard — is checked against it, so the
> whole platform looks and feels like one product.

Optional extra image: `design-icons.png` (the icon set). Use it if the layout allows a 5th tile or an inline image.

### 06 · Build — stack

Use the corrected stack line from §1.

### 07 · Results

See §4.

### Closing pitch — keep, with one change

Change the title to: *"Your platform should run itself — and be readable by AI."* ("bookable" is not true yet.)
In the body, change "discover and book it" to **"discover and quote it"**.

---

## 3. Images supplied

| # | File | Size | What it shows |
|---|---|---|---|
| 1 | `project-card.png` | 1600 × 2000 | The new Sarisara homepage on a phone, centred on a violet glow |
| 2 | `hero-banner.png` | 3000 × 1500 | Desktop + phone homepage on the right; bottom-left kept clean for the title |
| 3 | `full-desktop.png` | 3024 × 1701 | New homepage, above the fold, no browser chrome |
| 4 | `full-mobile.png` | 1170 × 2532 | New homepage on a phone, above the fold |
| 5 | `design-brand.png` | 2400 × 1800 | Design System board: logo, palette, type, buttons, section card, icons |
| 6 | `design-home.png` | 2400 × 1800 | New homepage |
| 7 | `design-listing.png` | 2400 × 1800 | A trip page ("Sri Lanka Highlights — 7 Days") |
| 8 | `design-itinerary.png` | 2400 × 1800 | The itinerary builder with a day open |
| 9 | `feature-itinerary.png` | 2400 × 1800 | Builder close-up: a hotel and an activity with calendar prices |
| 10 | `feature-whatsapp.png` | — | **Not supplied.** WhatsApp is switched off, so a real screenshot is not possible. Use F2 as text-only. |
| 11 | `feature-pipeline.png` | 2400 × 1800 | Diagram: deposit → partners confirm → balance → trip → 14-day wait → pay run on the 25th → receipt |
| 12 | `feature-schema.png` | 2400 × 1800 | A real trip page's JSON-LD card (shortened excerpt, web address hidden) |
| + | `design-icons.png` | 2400 × 1800 | Extra: 96 of the 384 icons |

Notes:
- Screens were taken from the staging site with test data (sample hotels, sample guide). No real partner
  phone numbers or emails appear.
- The JSON-LD image is a shortened, simplified excerpt of the real card (image list removed, nested
  references written inline).
- The homepage shown is the new design that is being finished before launch.
- Photo rights: Sarisara owns the photos (Chiran, 25 Oct 2026). They can be used.
- The web address is hidden in `feature-schema.png` (shown as dots).

---

## 4. Stats — 4 real numbers

| Big | Unit | Label |
|---|---|---|
| 7 | — | Partner types, one booking flow |
| 309K | — | Lines of custom PHP |
| 396 | — | Automated browser test files |
| 384 | — | Custom icons in the design system |

Other true options: **270+** automated money checks · **1** platform, end to end.
Do **not** use "3 languages" or "0 manual payouts" (an admin approves each pay run).

---

## 5. Sign-off (answered where known)

1. Client name public? — It is Chiran's own venture, so the name "Sarisara Lanka" can be used. **Chiran to confirm.**
2. Live URL public? — **No (Chiran, 25 Oct 2026).** Do not show the web address anywhere until launch. Note: an old worktree copy under `.claude/worktrees/` still has the link — do not merge it back.
3. NDA / people not to name — do not name any partner, hotel or guide. Use "Sarisara Lanka" only.
4. Testimonial — none yet.
5. Paid or own venture — **own venture.** Use "I founded and built", not "client".
6. Launch date — not launched; use "In development".
