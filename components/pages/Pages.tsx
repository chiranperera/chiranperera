"use client";
/* Portfolio pages: Work, Studio, Services, Contact, Journal. */
import * as React from "react";
import { PROJECTS } from "@/lib/data";
import { useNav } from "@/components/AppShell";
import { Footer, PageBar } from "@/components/chrome/Chrome";
import { IArrow } from "@/components/icons";

/* ---------- WORK ---------- */
export function WorkPage() {
  const { go } = useNav();
  const [f, setF] = React.useState("All");
  const cats = ["All", "Web", "Branding", "AI", "Hospitality", "Beauty"];
  const list = f === "All" ? PROJECTS : PROJECTS.filter((p) => p.cats.some((c) => c.includes(f)) || (f === "Branding" && p.cats.includes("Brand")));
  return (
    <div className="case" style={{ "--accent": "#D8FF3E" } as React.CSSProperties}>
      <PageBar />
      <section className="wrap page-hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow"><span className="dot" style={{ color: "var(--accent)" }}>●</span> Selected work — 2024–2026</span>
        <h1>Work<span style={{ color: "var(--accent)" }}>.</span></h1>
        <div className="filters">
          {cats.map((c) => <span key={c} className={`filter${f === c ? " on" : ""}`} onClick={() => setF(c)}>{c}</span>)}
        </div>
        <div className="work-index">
          {list.map((p) => (
            <article className="wi" key={p.slug} onClick={() => go("case:" + p.slug)} style={{ "--accent": p.accent } as React.CSSProperties}>
              <div className="media">
                {p.img ? <div className="img" style={{ backgroundImage: p.img }} /> : null}
                <span className="num">{p.num}</span>
                <span className="big">{p.title.replace("\n", " ")}</span>
              </div>
              <div className="body">
                <div><h3>{p.client}<span className="dot" style={{ color: "var(--accent)" }}>.</span></h3><div className="cats">{p.cats.join(" · ")}</div></div>
                <span className="yr">{p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- STUDIO / ABOUT ---------- */
export function StudioPage() {
  const steps: [string, string, string][] = [
    ["01", "Discover", "Brand, audience, and what success looks like after launch."],
    ["02", "Design", "Strategy, wireframes and visual design with AI-search structure baked in."],
    ["03", "Build", "Front-end and CMS, built the way I'd build my own site."],
    ["04", "Deploy", "Shipped on Vercel with a clean handover and 30 days of support."],
    ["05", "Optimize", "Ongoing AI-citation and performance tuning, after launch."],
  ];
  const tools: [string, string][] = [
    ["Next.js", "Framework"], ["React", "UI"], ["WordPress", "CMS"], ["Shopify", "Commerce"],
    ["Figma", "Design"], ["Framer Motion", "Motion"], ["Vercel", "Hosting"], ["Claude · GPT", "AI"],
  ];
  return (
    <div className="case" style={{ "--accent": "#D8FF3E" } as React.CSSProperties}>
      <PageBar />
      <section className="wrap page-hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow"><span className="dot" style={{ color: "var(--accent)" }}>●</span> The studio — Colombo, LK</span>
        <h1>Design<br />meets<br /><span style={{ color: "var(--accent)" }}>intelligence.</span></h1>
      </section>
      <section className="wrap">
        <div className="studio-two">
          <div className="story">
            <p>I&apos;m Chiran Perera — a one-designer studio building cinematic, AI-native websites for hotels, wellness, beauty and lifestyle brands. The work is the hero; every project ships as a full case study.</p>
            <p>For six years I&apos;ve designed and built across web development, UI/UX, branding, social campaigns and AI-driven marketing — and lately, engineering brands to be the source ChatGPT, Claude and Perplexity actually cite.</p>
            <p>I work solo and close to the metal: strategy, design, front-end and deploy, with no agency layers in between. One maker, one client, one clear path from idea to launched.</p>
          </div>
          <div className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/chiran-portrait.jpg" alt="Chiran Perera" />
          </div>
        </div>
      </section>
      <section className="wrap">
        <div className="case-head"><span className="ix">01</span><h2>How I<br />work.</h2></div>
        <div className="process">
          {steps.map(([n, t, d]) => <div className="st" key={n}><div className="n">{n}</div><h4>{t}</h4><p>{d}</p></div>)}
        </div>
      </section>
      <section className="wrap">
        <div className="case-head"><span className="ix">02</span><h2>Tools &amp;<br />stack.</h2></div>
        <div className="tools">
          {tools.map(([t, r]) => <div className="tool" key={t}><span className="t">{t}</span><span className="r">{r}</span></div>)}
        </div>
      </section>
      <section className="wrap">
        <div className="stat-row">
          {([["50", "+", "Brands designed"], ["6", " yrs", "Studio experience"], ["99", "%", "Repeat clients"], ["3", " wks", "Site to launch"]] as [string, string, string][]).map(([b, u, l]) => (
            <div className="s" key={l}><div className="big">{b}<em>{u}</em></div><div className="lbl">{l}</div></div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- SERVICES ---------- */
export function ServicesPage() {
  const svc: [string, string, string, string[]][] = [
    ["01", "Website Design + Build", "Custom websites on Next.js or WordPress — strategy, brand, front-end, CMS and launch in three weeks.", ["Next.js", "WordPress", "Shopify"]],
    ["02", "Brand + Visual Identity", "Logos, visual systems and guidelines — the kind that don't need a refresh in 18 months.", ["Logo", "Guidelines", "Art direction"]],
    ["03", "AI Search Optimization", "Structured so ChatGPT, Claude and Perplexity cite your brand in their answers.", ["Schema", "Entity", "llms.txt"]],
    ["04", "Social Campaigns", "Editorial social systems and launch campaigns that look like the brand, not a template.", ["Strategy", "Content", "Launch"]],
    ["05", "AI-Driven Marketing", "Automation, personalization and content workflows wired into your stack.", ["Automation", "CRM", "Workflows"]],
  ];
  return (
    <div className="case" style={{ "--accent": "#D8FF3E" } as React.CSSProperties}>
      <PageBar />
      <section className="wrap page-hero">
        <span className="eyebrow"><span className="dot" style={{ color: "var(--accent)" }}>●</span> What I do</span>
        <h1>Services<span style={{ color: "var(--accent)" }}>.</span></h1>
        <p className="lead">Five disciplines, one studio — each wired for the AI search era.</p>
      </section>
      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="svc">
          {svc.map(([ix, h, p, chips]) => (
            <div className="row" key={ix}>
              <span className="ix">{ix}</span>
              <h3>{h}</h3>
              <p>{p}</p>
              <div className="chips">{chips.map((c) => <span className="chip" key={c} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-2)", border: "1px solid var(--line)", padding: "4px 9px", borderRadius: "var(--r-pill)" }}>{c}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- CONTACT ---------- */
export function ContactPage() {
  const [sent, setSent] = React.useState(false);
  return (
    <div className="case" style={{ "--accent": "#D8FF3E" } as React.CSSProperties}>
      <PageBar />
      <section className="wrap page-hero">
        <div className="contact-grid">
          <div>
            <span className="eyebrow"><span className="dot" style={{ color: "var(--accent)" }}>●</span> Available Q3 2026 — 2 slots</span>
            <div className="big" style={{ marginTop: 22 }}>Let&apos;s build<br />something<br /><em>unforgettable.</em></div>
            <div className="contact-info">
              <div className="blk"><h6>Email</h6><a href="mailto:hello@chiranperera.com">hello@chiranperera.com</a></div>
              <div className="blk"><h6>Studio</h6><p>Colombo, Sri Lanka · GMT+5:30</p></div>
              <div className="blk"><h6>Elsewhere</h6><div className="socials"><a>LinkedIn</a><a>Behance</a><a>99designs</a><a>Instagram</a></div></div>
            </div>
          </div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="fld"><label>Name</label><input required placeholder="Your name" /></div>
            <div className="fld"><label>Email</label><input required type="email" placeholder="you@brand.com" /></div>
            <div className="fld"><label>Project type</label>
              <select><option>Website design + build</option><option>Brand + identity</option><option>AI search optimization</option><option>Something else</option></select>
            </div>
            <div className="fld"><label>About the project</label><textarea placeholder="A few lines on what you're building…" /></div>
            {sent
              ? <div className="sent"><IArrow s={15} /> Thanks — I&apos;ll reply within two working days.</div>
              : <button className="btn btn-accent" type="submit" style={{ justifyContent: "center" }}>Send message <span className="arr">→</span></button>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- JOURNAL (stub) ---------- */
export function JournalPage() {
  const { go } = useNav();
  return (
    <div className="case" style={{ "--accent": "#D8FF3E", minHeight: "100vh" } as React.CSSProperties}>
      <PageBar />
      <section className="wrap page-hero">
        <span className="eyebrow"><span className="dot" style={{ color: "var(--accent)" }}>●</span> Journal</span>
        <h1>Journal<span style={{ color: "var(--accent)" }}>.</span></h1>
        <p className="lead">Notes on AI search, brand systems, and building cinematic, citable websites for lifestyle brands. Coming soon.</p>
        <div style={{ marginTop: 36 }}>
          <button className="btn btn-outline" onClick={() => go("home")}>Back to work <span className="arr">→</span></button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
