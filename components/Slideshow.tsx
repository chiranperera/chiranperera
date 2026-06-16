"use client";
/* Fullscreen vertical slideshow: behind-text intro hero + projects. */
import * as React from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { useNav } from "@/components/AppShell";
import { IArrow, IArrowL } from "@/components/icons";

function IntroSlide({ active }: { active: boolean }) {
  return (
    <article className={`slide intro${active ? " active" : ""}`} aria-hidden={!active}>
      <div className="intro-bg" />
      <div className="intro-comp">
        <span className="intro-eyebrow">Designer · Developer · Brand &amp; AI Automation</span>
        <div className="intro-lockup">
          <div className="intro-nameback"><h1 className="nb-tape">CHIRAN<span className="nametape" aria-hidden="true" /></h1><h1>PERERA</h1></div>
          <div className="intro-subject">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/chiran-cutout.png" alt="Chiran Perera" />
          </div>
        </div>
        <p className="intro-tag">I design, build and brand digital experiences — helping people and businesses get seen, stand out, and run smarter with AI.</p>
        <span className="tlink intro-cta" style={{ color: "#fff" }}>Selected projects <span className="arr">↓</span></span>
      </div>
      <div className="intro-fade" />
      <div className="intro-grain" />
    </article>
  );
}

function Slide({ p, active, onOpen, onPrefetch }: { p: Project; active: boolean; onOpen: (slug: string) => void; onPrefetch: (slug: string) => void }) {
  const title = p.title.replace("\n", " ");
  // warm the route as soon as this slide is shown, so the click is instant
  React.useEffect(() => { if (active) onPrefetch(p.slug); }, [active, p.slug, onPrefetch]);
  return (
    <article className={`slide split${active ? " active" : ""}`} aria-hidden={!active}
      style={{ "--accent": p.accent } as React.CSSProperties}>
      {/* LEFT — content zone */}
      <div className="slide-content-zone">
        <div className="slide-inner">
          <span className="eyebrow">{p.cats.join(" · ")} — {p.year}</span>
          <h2 className="slide-title">{title}</h2>
          <p className="summary">{p.summary}</p>
          <button className="btn btn-accent slide-cta" onClick={() => onOpen(p.slug)} onMouseEnter={() => onPrefetch(p.slug)} onFocus={() => onPrefetch(p.slug)}>View project <span className="arr">→</span></button>
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
  const { prefetch } = useNav();
  const [i, setI] = React.useState(0);
  const n = PROJECTS.length + 1; // +1 intro
  const go = React.useCallback((idx: number) => setI(((idx % n) + n) % n), [n]);
  const next = React.useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = React.useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  // Once a project is opened, freeze the slideshow so the wipe/navigation isn't
  // undercut by a stray wheel/swipe flipping to another slide while it loads.
  const navigating = React.useRef(false);
  const open = React.useCallback((slug: string) => { navigating.current = true; onOpen(slug); }, [onOpen]);
  const prefetchCase = React.useCallback((slug: string) => prefetch("case:" + slug), [prefetch]);

  React.useEffect(() => {
    let lock = false;
    const onWheel = (e: WheelEvent) => {
      if (navigating.current || lock || Math.abs(e.deltaY) < 12) return;
      lock = true; e.deltaY > 0 ? next() : prev();
      setTimeout(() => { lock = false; }, 950);
    };
    const onKey = (e: KeyboardEvent) => {
      if (navigating.current) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };
    // Touch: vertical swipe to change slides (swipe up → next, down → prev).
    let startY = 0, startX = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      if (navigating.current) return;
      const dy = startY - e.changedTouches[0].clientY;
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dy) < 45 || Math.abs(dy) <= Math.abs(dx)) return; // ignore small or mostly-horizontal swipes
      dy > 0 ? next() : prev();
    };
    addEventListener("wheel", onWheel, { passive: true });
    addEventListener("keydown", onKey);
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      removeEventListener("wheel", onWheel);
      removeEventListener("keydown", onKey);
      removeEventListener("touchstart", onTouchStart);
      removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  // accent: intro = lime; projects use their own
  const accent = i === 0 ? "#D8FF3E" : PROJECTS[i - 1].accent;
  const pagerItems = [{ num: "00" }, ...PROJECTS];

  return (
    <div className="stage" style={{ "--accent": accent } as React.CSSProperties}>
      <IntroSlide active={i === 0} />
      {PROJECTS.map((p, idx) => <Slide key={p.slug} p={p} active={idx + 1 === i} onOpen={open} onPrefetch={prefetchCase} />)}

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
