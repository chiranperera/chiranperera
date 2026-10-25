# Thushara Rathnayake — case study brief (filled in)

Same format as `../SarisaraLanka/README.md`. Every fact below was checked against the real code of
Thushara's website and its live pages on 25 Oct 2026. **Do not add claims that are not in this file.**

Images in this folder use fixed filenames (listed in §3). Copy them to `public/assets/thushara/`
and convert to `.webp`, the same way the Sarisara images were done.

**Hero rule (Chiran, 25 Oct 2026):** every image that sits behind portfolio text — `hero-banner`,
`project-card`, `full-desktop`, `full-mobile` — was taken with the website's own headline, text and
buttons hidden, so they never overlap the portfolio wording.

---

## 1. Fact sheet

| Field | Value |
|---|---|
| Title | Thushara Rathnayake (displayed on two lines: "Thushara" / "Rathnayake") |
| Slug | `/projects/thushara-rathnayake` |
| Project number | Chiran to choose (suggest `02`, after Sarisara) |
| Categories | Personal Brand · Web · Booking · Automation · Admin |
| Year | 2026 |
| Accent colour | `#C9962F` (Thushara gold) on `#071A2E` (ink navy) |
| Client | Thushara Rathnayake — Senior Financial Consultant, Sri Lanka Insurance Corporation |
| Role | Strategy · Brand & Design · Build · Handover |
| Timeline | Live — handed over on 4 October 2026 |
| Live URL | `https://thushararathnayake.com/` — **Chiran to confirm the client is happy to be linked** |
| Stack | Astro 7 · Preact islands · Tailwind CSS 4 · TypeScript · Cloudflare Workers · Cloudflare D1 (database) · Cloudflare R2 (files) · Cloudflare Email · self-hosted fonts · Schema.org JSON-LD · built with Claude as co-builder |

---

## 2. Case-study copy

### 01 · Overview

> Thushara Rathnayake has advised Sri Lankan professionals for 16 years — 14 of them at MDRT level, the
> global standard that fewer than 1% of financial advisors reach. His business ran on referrals and
> WhatsApp, with no place where a busy doctor or engineer could see what he does, read what other
> clients say, and book a time in a minute and a half.
>
> I built that place: a fast, calm website with eight service pages, pages written for doctors and
> engineers, a four-step booking form that offers only the times he is free, and an email that reaches
> him with a one-tap WhatsApp reply. Behind it sits a simple admin where Thushara changes his own
> content — reviews, photos, guides, questions, hours and legal pages — without ever needing a developer.

### 02 · What wasn't working (suggested — Chiran to confirm)

| # | Problem | What it meant |
|---|---|---|
| 1 | **Expertise without a storefront** | 16 years of results lived only in referrals and WhatsApp chats. A new client had nothing to look at before trusting him with their family's future. |
| 2 | **Busy professionals, no time to call** | Doctors and engineers work long shifts. A phone call during work hours is a lost lead. |
| 3 | **Insurance feels like jargon and pressure** | People delay cover because they expect a sales pitch they cannot follow. |
| 4 | **Every change needed a developer** | A new award photo, a new review or new opening hours should not mean a support ticket. |

### 03 · Research

**Industry standard:**

> Most insurance-agent sites are a single template page with a phone number, a generic stock photo and
> a contact form that drops into an inbox nobody watches. There are no real reviews, no plain-language
> explanations, and nothing the advisor can update himself.

**What I built differently:**

> A personal brand site that answers questions before they are asked: eight service pages in plain
> language, separate pages for doctors and engineers, a "how working with me works" page, and only real,
> approved client reviews. Booking takes about 90 seconds and offers only the hours Thushara has set.
> The site is static and fast on Sri Lankan mobile networks, with fonts hosted on the same server, and
> everything that changes often is editable by Thushara himself.

### 04 · Automation — headline, paragraph and 4 feature rows

**Headline:** *A website that books, answers and updates itself.*

**Paragraph:**

> Every booking is saved to the database first, then two emails go out: Thushara gets the client's
> details with a "Reply on WhatsApp" button, and the client gets a warm confirmation from Thushara's own
> name — and if they reply, it reaches him directly. The booking form offers only the hours he has set
> for each day of the week. His years of experience and his MDRT count go up by themselves every
> 1 January, on Colombo time. New reviews arrive through a private link he sends to clients, and nothing
> is published until he approves it with one tap.

**Feature rows:**

| # | Eyebrow | Title | Body | Image |
|---|---|---|---|---|
| F1 | Booking · Client-facing | Book a consultation in about 90 seconds. | A four-step form: what you do, what you need, how and when to meet, and how to reach you. It only offers times inside the hours Thushara has set, at least 3 hours ahead and up to 30 days out. Progress is saved if the visitor leaves and comes back. | `feature-booking.png` |
| F2 | Email · Automated | The right email to the right person. | Each booking sends two emails. Thushara's copy shows who, what and when, with one-tap Reply on WhatsApp, Call and Email buttons and a link to the enquiry. The client's thank-you arrives from "Thushara Rathnayake", and a reply goes straight to him. The booking is saved before any email is sent, so a slow email never loses a client. | `feature-email.png` |
| F3 | Admin · No code | Thushara runs his own website. | A private admin with no password — he signs in with a one-time link sent to his email. He edits enquiries (with CSV export), reviews, photos, downloadable guides, questions for each page, service-page wording, weekly hours, his contact details and his legal pages. | `feature-admin.png` |
| F4 | Trust · Reviews | Only real reviews, approved by him. | There is no public review button. Thushara sends a private link to a client, who adds a review and an optional photo. It waits until he approves it — one tap from the email he receives. | `feature-reviews.png` |

Bullets per row (3 each, all true):
- F1: 4 steps · Only his free hours · Saved if you leave
- F2: 2 emails per booking · One-tap WhatsApp reply · Saved before sending
- F3: One-time sign-in link · 10 admin sections · Hours set per day of the week
- F4: Private review link · Optional photo · Nothing published without approval

### 05 · Design — tile labels

| Tile | File | Label |
|---|---|---|
| D—01 | `design-brand.png` | Brand & type |
| D—02 | `design-home.png` | Homepage |
| D—03 | `design-service.png` | Service page |
| D—04 | `design-persona.png` | Page for doctors |

**Design note (for `designNote`):**

> Ink navy, a warm gold and a cream page — calm and premium, never salesy. Headlines in Cabinet Grotesk,
> body text in Satoshi, and each service's promise line in Newsreader italic. All fonts are hosted on the
> site itself so pages load fast on Sri Lankan mobile networks.

Optional extra image: `design-process.png` ("How working with me works").

### 06 · Build — stack

Use the stack line from §1.

**Build note (for `buildNote`):** Marketing pages are pre-built and served from Cloudflare's network;
only the booking, admin and email parts run on demand. Each page has its own share image, a sitemap,
structured data for search engines, and the staging address is blocked from search.

### 07 · Results — 4 stats

| Big | Unit | Label |
|---|---|---|
| 24 | — | Pages, all live |
| 90 | sec | To book a consultation |
| 10 | — | Admin sections Thushara edits himself |
| 2 | — | Emails sent automatically per booking |

Other true options: **8** service pages · **16** years of experience shown, rising by itself each year.
Do **not** claim automated tests — this project has none.

### Optional closing pitch

> **Eyebrow:** For advisors, consultants & personal brands
> **Title:** Your reputation, working for you around the clock.
>
> Clients check you online before they call. A site like this answers their questions, shows real
> reviews, and books a time while you are with another client — and you can update it yourself.

---

## 3. Images supplied

| File | Size | What it shows |
|---|---|---|
| `project-card.png` | 1600 × 2000 | Thushara with his awards, centred (no website text) |
| `hero-banner.png` | 3000 × 1500 | Desktop + phone homepage on navy, website headline and buttons hidden |
| `full-desktop.png` | 3024 × 1701 | Homepage, above the fold, headline and buttons hidden |
| `full-mobile.png` | 1170 × 2532 | Homepage on a phone, headline and buttons hidden |
| `design-brand.png` | 2400 × 1800 | Brand board: logo, 5 colours, voice, buttons, 3 typefaces |
| `design-home.png` | 2400 × 1800 | Homepage section "16 years of the same straight answer" |
| `design-service.png` | 2400 × 1800 | Motor Insurance service page |
| `design-persona.png` | 2400 × 1800 | Page for Sri Lanka's doctors |
| `feature-booking.png` | 2400 × 1800 | Booking form, step 1 of 4 |
| `feature-email.png` | 2400 × 1800 | The 2 booking emails side by side |
| `feature-admin.png` | 2400 × 1800 | Admin home + weekly hours |
| `feature-reviews.png` | 2400 × 1800 | Admin reviews (private link) + the client's review form |
| `design-process.png` | 2400 × 1800 | Extra: "How working with me works" page |

Notes:
- The emails use a made-up sample client ("Anjali Fernando", a fake number and an example.com email).
  Nothing was sent.
- Admin pictures come from the local test copy, which has no real client enquiries in it.
- Thushara's phone numbers are hidden in every picture, and the private review link is shown as dots.

---

## 4. Sign-off (for Chiran)

1. Is Thushara happy to be named and linked in the portfolio?
2. Project number — `02`, or after VOLT?
3. Do the 4 "what wasn't working" rows match what Thushara told you?
