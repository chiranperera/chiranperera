"use client";
/* Project breakdown (case study). Lands directly — no middle layer.
   A sticky section filter lets readers jump to / isolate any section. */
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

function Tile({ label, n, portrait, img, pos, capPad, cropY, note }: { label: string; n: string; portrait?: boolean; img?: string | null; pos?: string; capPad?: string; cropY?: string; note?: { x: string; y: string; text: string } }) {
  const imgStyle: React.CSSProperties | undefined = img
    ? (cropY
        ? { backgroundImage: img, backgroundSize: "100%", backgroundPosition: `50% ${cropY}` }
        : { backgroundImage: img, backgroundPosition: pos })
    : undefined;
  return (
    <figure className={`tile${portrait ? " portrait" : ""}`}>
      <div className="tile-img" style={imgStyle}>
        {!img && <span className="tile-ph">[ {label} ]</span>}
        {note && <span className="tile-note" style={{ left: note.x, top: note.y }}>{note.text}</span>}
      </div>
      <figcaption className="tile-cap" style={capPad ? { paddingLeft: capPad, paddingRight: capPad } : undefined}><span className="lbl">{label}</span><span className="n">{n}</span></figcaption>
    </figure>
  );
}

/* desktop + mobile screenshots side by side, one caption. */
function DevicePair({ pair, n }: { pair: { label: string; desktop: string; mobile: string; cropYDesktop?: string; cropYMobile?: string }; n: string }) {
  const dStyle: React.CSSProperties = pair.cropYDesktop
    ? { backgroundImage: pair.desktop, backgroundSize: "100%", backgroundPosition: `50% ${pair.cropYDesktop}` }
    : { backgroundImage: pair.desktop };
  const mStyle: React.CSSProperties = pair.cropYMobile
    ? { backgroundImage: pair.mobile, backgroundSize: "100%", backgroundPosition: `50% ${pair.cropYMobile}` }
    : { backgroundImage: pair.mobile };
  return (
    <figure className="device-pair">
      <div className="dp-d tile-img" style={dStyle} />
      <div className="dp-m tile-img" style={mStyle} />
      <figcaption className="tile-cap dp-cap"><span className="lbl">{pair.label}</span><span className="n">{n}</span></figcaption>
    </figure>
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
  const title = p.title.replace("\n", " ");

  const [active, setActive] = React.useState("all");
  const barRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => { window.scrollTo(0, 0); setActive("all"); }, [slug]);

  const hasGallery = !!(m?.gallery?.length || m?.devicePair);
  const tabs: { key: string; label: string }[] = [
    { key: "all", label: "All" },
    { key: "why", label: "Overview" },
    { key: "research", label: "Research" },
    { key: "ai", label: "AI" },
    { key: "design", label: "Design" },
    { key: "build", label: "Build" },
    { key: "results", label: "Results" },
    ...(hasGallery ? [{ key: "screens", label: "Screens" }] : []),
  ];
  const show = (k: string) => active === "all" || active === k;
  const pick = (k: string) => {
    setActive(k);
    const bar = barRef.current;
    if (bar) {
      const y = bar.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`case${active !== "all" ? " case-filtered" : ""}`} style={{ "--accent": p.accent, "--accent-soft": hexA(p.accent, .12), "--accent-line": hexA(p.accent, .45) } as React.CSSProperties}>
      {/* HERO */}
      <header className="case-hero">
        <div className="media">
          {(p.heroImg || p.img) ? <div className="img" style={{ backgroundImage: p.heroImg || p.img! }} /> : <div className="ph" />}
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

      {/* SECTION FILTER (sticky) — tabs only; the global header (one logo + one
          menu) stays fixed above it and stacks with it when scrolled. */}
      <div className="case-filter" ref={barRef}>
        <div className="cf-tabs" role="tablist" aria-label="Case study sections">
          {tabs.map((t) => (
            <button key={t.key} role="tab" aria-selected={active === t.key} className={`filter${active === t.key ? " on" : ""}`} onClick={() => pick(t.key)}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* OVERVIEW — the premise + the business pain points */}
      {show("why") && (
        <>
          <section className="wrap">
            <Reveal><CaseHead ix="01">The business<br />problem.</CaseHead></Reveal>
            <Reveal className="case-body">
              <div className="left">Overview / The premise</div>
              <div>{p.overview.map((t, i) => <p key={i}>{t}</p>)}</div>
            </Reveal>
            {p.pains && p.pains.length > 0 && (
              <Reveal style={{ marginTop: 46 }}>
                <div className="pains-label">What wasn&apos;t working</div>
                <div className="pains">
                  {p.pains.map((pain, i) => (
                    <div className="pain" key={i}>
                      <span className="pain-x" aria-hidden="true">✕</span>
                      <div>
                        <div className="pain-problem">{pain.problem}</div>
                        <div className="pain-result">{pain.result}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </section>
          <section className="wrap">
            <Reveal><p className="pull">A portfolio piece is only as good as the <em>thinking</em> it shows — so every project here starts with the problem, then the solution.</p></Reveal>
          </section>
        </>
      )}

      {/* RESEARCH — industry standard vs. what we built differently */}
      {show("research") && (
        <section className="wrap">
          <Reveal><CaseHead ix="02">Research &amp;<br />approach.</CaseHead></Reveal>
          <Reveal className="case-body">
            <div className="left">Industry standard</div>
            <div><p>{p.research}</p></div>
          </Reveal>
          {p.researchOurs && (
            <Reveal className="case-body solution" style={{ marginTop: 32 }}>
              <div className="left"><span className="dot">●</span> What I built differently</div>
              <div><p>{p.researchOurs}</p></div>
            </Reveal>
          )}
        </section>
      )}

      {/* AI LAYER — the automation that solves the pains (before design) */}
      {show("ai") && (
        <section className="wrap">
          <Reveal><CaseHead ix="03">The AI<br />solutions.</CaseHead></Reveal>
          <Reveal className="ai-callout">
            <span className="eyebrow"><span style={{ color: p.accent }}>●</span> AI functionality</span>
            <h3>{p.aiHeadline || "Engineered for the answer engines."}</h3>
            <p>{p.ai}</p>
          </Reveal>
          {p.features && p.features.length > 0 && (
            <div className="features">
              {p.features.map((f, i) => (
                <Reveal key={i} className={`feature-row${i % 2 === 1 ? " flip" : ""}`}>
                  <div className="f-text">
                    <span className="eyebrow"><span className="dot">●</span> {f.eyebrow}</span>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                    {f.points && <ul className="f-points">{f.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>}
                  </div>
                  <div className="f-media"><Tile n={`F—0${i + 1}`} label={f.media.label} img={f.media.src} pos={f.media.pos} capPad={f.media.capPad} cropY={f.media.cropY} note={f.media.note} /></div>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      )}

      {/* DIRECTION + DESIGN */}
      {show("design") && (
        <section className="wrap">
          <Reveal><CaseHead ix="04">Direction &amp;<br />design.</CaseHead></Reveal>
          <Reveal>
            <div className="imgrid imgrid-2">
              {m?.design && m.design.length > 0 ? (
                m.design.map((g, i) => (
                  <Tile key={i} n={`D—0${i + 1}`} label={g.label} img={g.src} portrait={g.portrait} pos={g.pos} capPad={g.capPad} cropY={g.cropY} note={g.note} />
                ))
              ) : (
                <>
                  <Tile n="D—01" label="Identity system" img={m?.identity || p.img} />
                  <Tile n="D—02" label="Type specimen" img={m?.type} />
                  <Tile n="D—03" label="Component library" img={m?.components} />
                  <Tile n="D—04" label="App / mobile UI" img={m?.homeMobile} />
                </>
              )}
            </div>
          </Reveal>
        </section>
      )}

      {/* BUILD + STACK */}
      {show("build") && (
        <section className="wrap">
          <Reveal><CaseHead ix="05">Build &amp;<br />stack.</CaseHead></Reveal>
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
      )}

      {/* RESULTS */}
      {show("results") && (
        <section className="wrap">
          <Reveal><CaseHead ix="06">Deployment &amp;<br />results.</CaseHead></Reveal>
          <Reveal>
            <div className="stat-row">
              {p.stats.map(([big, u, lbl], i) => (
                <div className="s" key={i}><div className="big">{big}<em>{u}</em></div><div className="lbl">{lbl}</div></div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* GALLERY (real screens — only when a project supplies them) */}
      {hasGallery && show("screens") && (
        <section className="wrap">
          <Reveal><CaseHead ix="07">Selected<br />screens.</CaseHead></Reveal>
          {m?.devicePair && (
            <Reveal style={{ marginBottom: 24 }}><DevicePair pair={m.devicePair} n="S—01" /></Reveal>
          )}
          {m?.gallery && m.gallery.length > 0 && (
            <Reveal>
              <div className="imgrid imgrid-2">
                {m.gallery.map((g, i) => (
                  <Tile key={i} n={`S—0${(m.devicePair ? 2 : 1) + i}`} label={g.label} img={g.src} portrait={g.portrait} pos={g.pos} capPad={g.capPad} cropY={g.cropY} note={g.note} />
                ))}
              </div>
            </Reveal>
          )}
        </section>
      )}

      {/* PITCH — value argument (full view only) */}
      {active === "all" && p.pitch && (
        <section className="wrap pitch">
          <Reveal>
            <span className="eyebrow"><span className="dot">●</span> {p.pitch.eyebrow}</span>
            <h2 className="pitch-title">
              {p.pitch.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
              ))}
            </h2>
          </Reveal>
          <Reveal className="pitch-body">
            <div className="pitch-prose">{p.pitch.body.map((t, i) => <p key={i}>{t}</p>)}</div>
            <ul className="pitch-points">{p.pitch.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
          </Reveal>
          <Reveal>
            <a className="btn btn-accent pitch-cta" href="mailto:hello@chiranperera.com">Build this for your brand <span className="arr">→</span></a>
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
