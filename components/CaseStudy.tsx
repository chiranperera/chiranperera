"use client";
/* Project breakdown (case study). Lands directly — no middle layer. */
import * as React from "react";
import { PROJECTS } from "@/lib/data";
import { useNav } from "@/components/AppShell";
import { Footer } from "@/components/chrome/Chrome";
import { IArrow } from "@/components/icons";

function Reveal({ children, className = "", ...rest }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: .15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`cp-reveal ${className}`} {...rest}>{children}</div>;
}

function Tile({ label, n, tall, wide, img }: { label: string; n: string; tall?: boolean; wide?: boolean; img?: string | null }) {
  return (
    <div className={`tile${tall ? " tall" : ""}${wide ? " wide" : ""}`}>
      {img && <div className="img" style={{ backgroundImage: img }} />}
      <span className="n">{n}</span>
      <span className="lbl">{label}</span>
    </div>
  );
}

function CaseHead({ ix, children }: { ix: string; children: React.ReactNode }) {
  return <div className="case-head"><span className="ix">{ix}</span><h2>{children}</h2></div>;
}

function hexA(hex: string, a: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

export default function CaseStudy({ slug }: { slug: string }) {
  const { go } = useNav();
  const p = PROJECTS.find((x) => x.slug === slug) || PROJECTS[0];
  const nextP = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  const total = String(PROJECTS.length).padStart(2, "0");
  const m = p.media;
  React.useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  const title = p.title.replace("\n", " ");

  return (
    <div className="case" style={{ "--accent": p.accent, "--accent-soft": hexA(p.accent, .12), "--accent-line": hexA(p.accent, .45) } as React.CSSProperties}>
      {/* HERO */}
      <header className="case-hero">
        <div className="media">
          {p.img ? <div className="img" style={{ backgroundImage: p.img }} /> : <div className="ph" />}
          <div className="scrim" />
        </div>
        <div className="wrap inner">
          <span className="eyebrow"><span className="dot">●</span> {p.cats.join(" · ")} — {p.year}</span>
          <h1>{title}</h1>
          <p className="lead">{p.summary}</p>
          <div className="meta-bar">
            <div className="m"><div className="k">Role</div><div className="v">{p.role}</div></div>
            <div className="m"><div className="k">Client</div><div className="v">{p.client}</div></div>
            <div className="m"><div className="k">Timeline</div><div className="v">{p.timeline}</div></div>
            <div className="m"><div className="k">Live</div><div className="v accent">
              {p.liveUrl
                ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">{p.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗</a>
                : `${p.client.toLowerCase().replace(/ /g, "")}.com ↗`}
            </div></div>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="wrap">
        <Reveal><CaseHead ix="01">Why this<br />project.</CaseHead></Reveal>
        <Reveal className="case-body">
          <div className="left">Overview / The premise</div>
          <div>{p.overview.map((t, i) => <p key={i}>{t}</p>)}</div>
        </Reveal>
      </section>

      {/* PULL QUOTE */}
      <section className="wrap">
        <Reveal><p className="pull">A portfolio piece is only as good as the <em>thinking</em> it shows — so every project here is a full case study, not a thumbnail.</p></Reveal>
      </section>

      {/* RESEARCH */}
      <section className="wrap">
        <Reveal><CaseHead ix="02">Research &amp;<br />discovery.</CaseHead></Reveal>
        <Reveal className="case-body">
          <div className="left">Market · Audience · AI scan</div>
          <div><p>{p.research}</p></div>
        </Reveal>
        <Reveal style={{ marginTop: 40 }}>
          <div className="imgrid imgrid-3">
            <Tile n="R—01" label="Competitive scan" />
            <Tile n="R—02" label="Audience map" />
            <Tile n="R—03" label="AI citation audit" />
          </div>
        </Reveal>
      </section>

      {/* BRAND + HI-FI */}
      <section className="wrap">
        <Reveal><CaseHead ix="03">Direction &amp;<br />design.</CaseHead></Reveal>
        <Reveal>
          <div className="imgrid imgrid-2">
            <Tile n="D—01" label="Identity system" img={m?.identity || p.img} />
            <Tile n="D—02" label="Type specimen" img={m?.type} />
            <Tile wide n="D—03" label="Hi-fi — homepage" img={m?.homeDesktop || p.img} />
            <Tile n="D—04" label="Mobile flows" tall img={m?.homeMobile} />
            <Tile n="D—05" label="Component library" img={m?.components} />
          </div>
        </Reveal>
      </section>

      {/* TECH STACK */}
      <section className="wrap">
        <Reveal><CaseHead ix="04">Build &amp;<br />stack.</CaseHead></Reveal>
        <Reveal className="case-body">
          <div className="left">Frameworks · Tooling</div>
          <div>
            <p>Static-generated, image-optimised, and shipped on Vercel — built the way I&apos;d build my own studio site, then handed over clean.</p>
            <div className="chips" style={{ marginTop: 20 }}>
              {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              <span className="chip accent">llms.txt</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AI CALLOUT */}
      <section className="wrap">
        <Reveal className="ai-callout">
          <span className="eyebrow"><span style={{ color: p.accent }}>●</span> AI functionality</span>
          <h3>{p.aiHeadline || "Engineered for the answer engines."}</h3>
          <p>{p.ai}</p>
        </Reveal>
      </section>

      {/* RESULTS */}
      <section className="wrap">
        <Reveal><CaseHead ix="05">Deployment &amp;<br />results.</CaseHead></Reveal>
        <Reveal>
          <div className="stat-row">
            {p.stats.map(([big, u, lbl], i) => (
              <div className="s" key={i}><div className="big">{big}<em>{u}</em></div><div className="lbl">{lbl}</div></div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* GALLERY (real screens — only when a project supplies them) */}
      {m?.gallery && m.gallery.length > 0 && (
        <section className="wrap">
          <Reveal><CaseHead ix="06">Selected<br />screens.</CaseHead></Reveal>
          <Reveal>
            <div className="imgrid imgrid-2">
              {m.gallery.map((g, i) => (
                <Tile key={i} n={`S—0${i + 1}`} label={g.label} img={g.src} wide={g.wide} tall={g.tall} />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* NEXT PROJECT */}
      <div className="next" onClick={() => go("case:" + nextP.slug)} style={{ "--accent": nextP.accent } as React.CSSProperties}>
        <div className="media"><div className="ph" /></div>
        <div className="wrap inner">
          <span className="eyebrow">Next project — {nextP.num} / {total}</span>
          <h2>{nextP.title.replace("\n", " ")} <span className="arr"><IArrow s={40} /></span></h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}
