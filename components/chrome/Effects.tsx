"use client";
/* Custom cursor (dot + ring) + branded preloader.
   Both disabled / collapsed under touch and reduced-motion. */
import * as React from "react";

export function Cursor() {
  React.useEffect(() => {
    if (matchMedia("(hover: none)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dot = document.createElement("div"); dot.className = "cursor-dot";
    const ring = document.createElement("div"); ring.className = "cursor-ring";
    document.body.append(dot, ring);
    const SEL = "a,button,.tlink,.wi,.filter,.pager button,.nav-arrows button,.burger,input,select,textarea,[role=button]";
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, id: number;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + "px"; dot.style.top = my + "px"; };
    const loop = () => { rx += (mx - rx) * .18; ry += (my - ry) * .18; ring.style.left = rx + "px"; ring.style.top = ry + "px"; id = requestAnimationFrame(loop); };
    id = requestAnimationFrame(loop);
    const over = (e: MouseEvent) => { const t = e.target as Element; if (t.closest && t.closest(SEL)) ring.classList.add("hot"); };
    const out = (e: MouseEvent) => { const t = e.target as Element; if (t.closest && t.closest(SEL)) ring.classList.remove("hot"); };
    addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { cancelAnimationFrame(id); removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); dot.remove(); ring.remove(); };
  }, []);
  return null;
}

export function Preloader() {
  const [n, setN] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [gone, setGone] = React.useState(false);
  React.useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setGone(true); return; }
    let v = 0;
    const t = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9 + 5)); setN(v);
      if (v >= 100) { clearInterval(t); setTimeout(() => setDone(true), 280); setTimeout(() => setGone(true), 1150); }
    }, 85);
    return () => clearInterval(t);
  }, []);
  if (gone) return null;
  return (
    <div className={`preloader${done ? " done" : ""}`} onClick={() => { setDone(true); setTimeout(() => setGone(true), 800); }}>
      <div className="pl-name">CHIRAN&nbsp;PERERA<span style={{ color: "var(--accent)" }}>.</span></div>
      <div className="pl-count">{String(n).padStart(3, "0")} — 100</div>
      <div className="pl-bar" style={{ width: n + "%" }} />
    </div>
  );
}
