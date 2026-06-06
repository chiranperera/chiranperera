"use client";
/* Fullscreen vertical slideshow: behind-text intro hero + projects. */
import * as React from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { IArrow, IArrowL } from "@/components/icons";

function IntroSlide({ active }: { active: boolean }) {
  return (
    <article className={`slide intro${active ? " active" : ""}`} aria-hidden={!active}>
      <div className="intro-bg" />
      <div className="intro-comp">
        <span className="intro-eyebrow">Designer · Developer · Brand &amp; AI Automation</span>
        <div className="intro-lockup">
          <div className="intro-nameback"><h1>CHIRAN</h1><h1>PERERA</h1></div>
          <div className="intro-subject">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/chiran-cutout.png" alt="Chiran Perera" />
          </div>
        </div>
        <p className="intro-tag">I design, build and brand digital experiences from end to end — powered by AI.</p>
        <span className="tlink intro-cta" style={{ color: "#fff" }}>Selected work <span className="arr">↓</span></span>
      </div>
      <div className="intro-fade" />
      <div className="intro-grain" />
    </article>
  );
}

function Slide({ p, active, onOpen }: { p: Project; active: boolean; onOpen: (slug: string) => void }) {
  const title = p.title.replace("\n", " ");
  return (
    <article className={`slide split${active ? " active" : ""}`} aria-hidden={!active}
      style={{ "--accent": p.accent } as React.CSSProperties}>
      {/* LEFT — content zone */}
      <div className="slide-content-zone">
        <div className="slide-inner">
          <span className="eyebrow">{p.cats.join(" · ")} — {p.year}</span>
          <h2 className="slide-title">{title}</h2>
          <p className="summary">{p.summary}</p>
          <button className="tlink" onClick={() => onOpen(p.slug)}>View project <span className="arr">→</span></button>
        </div>
      </div>
      {/* RIGHT — image zone */}
      <div className="slide-image-zone">
        {p.img
          ? <div className="img" style={{ backgroundImage: p.img }} />
          : <div className="ph"><span className="ph-tag">[ {p.client} — hero still ]</span></div>}
      </div>
    </article>
  );
}

export default function Slideshow({ onOpen }: { onOpen: (slug: string) => void }) {
  const [i, setI] = React.useState(0);
  const n = PROJECTS.length + 1; // +1 intro
  const go = React.useCallback((idx: number) => setI(((idx % n) + n) % n), [n]);
  const next = React.useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = React.useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  React.useEffect(() => {
    let lock = false;
    const onWheel = (e: WheelEvent) => {
      if (lock || Math.abs(e.deltaY) < 12) return;
      lock = true; e.deltaY > 0 ? next() : prev();
      setTimeout(() => { lock = false; }, 950);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };
    addEventListener("wheel", onWheel, { passive: true });
    addEventListener("keydown", onKey);
    return () => { removeEventListener("wheel", onWheel); removeEventListener("keydown", onKey); };
  }, [next, prev]);

  // accent: intro = lime; projects use their own
  const accent = i === 0 ? "#D8FF3E" : PROJECTS[i - 1].accent;
  const pagerItems = [{ num: "00" }, ...PROJECTS];

  return (
    <div className="stage" style={{ "--accent": accent } as React.CSSProperties}>
      <IntroSlide active={i === 0} />
      {PROJECTS.map((p, idx) => <Slide key={p.slug} p={p} active={idx + 1 === i} onOpen={onOpen} />)}

      <div className="rail-left">
        <span className="vlabel">Scroll</span>
        <span className="vline" />
        <span className="eyebrow" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "rgba(255,255,255,.4)" }}>2026</span>
      </div>

      <div className="pager">
        {pagerItems.map((p, idx) => (
          <button key={idx} className={idx === i ? "on" : ""} onClick={() => go(idx)} aria-label={`Slide ${p.num}`}>
            {p.num}<span className="bar" />
          </button>
        ))}
      </div>

      <div className="nav-arrows">
        <button onClick={prev} aria-label="Previous"><IArrowL s={18} /></button>
        <button onClick={next} aria-label="Next"><IArrow s={18} /></button>
      </div>

      <div className="progress" style={{ width: `${((i + 1) / n) * 100}%`, background: accent }} />
    </div>
  );
}
