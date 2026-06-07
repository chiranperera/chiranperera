"use client";
/* CropCalibrator — live, drag-to-position tuning for windowed images.
   Enable by adding ?calibrate to any case-study URL. Drag any cropped
   image up/down to frame the right section; the cropY value updates live
   and persists in localStorage. Hit "Copy values" and paste them back to
   me (or read them off the panel) to LOCK them into lib/data.ts.

   Self-gating: renders nothing unless ?calibrate is present, so it has zero
   effect on the real site. */
import * as React from "react";

type Vals = Record<string, number>;
const KEY = "voltCropOverrides";

function urlFromBg(bg: string): string | null {
  const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
  return m ? m[1] : null;
}

export default function CropCalibrator() {
  const [on, setOn] = React.useState(false);
  const [vals, setVals] = React.useState<Vals>({});
  const [active, setActive] = React.useState<string | null>(null);
  const natCache = React.useRef<Record<string, { w: number; h: number }>>({});
  const drag = React.useRef<{ key: string; el: HTMLElement; startY: number; startP: number; movable: number } | null>(null);

  // gate on ?calibrate
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const flag = new URLSearchParams(window.location.search).has("calibrate");
    setOn(flag);
    document.body.classList.toggle("calibrating", flag);
    return () => document.body.classList.remove("calibrating");
  }, []);

  // seed the panel with every tile's current crop, then apply saved overrides on top
  React.useEffect(() => {
    if (!on) return;
    let saved: Vals = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { /* ignore */ }
    const t = window.setTimeout(() => {
      const dom: Vals = {};
      document.querySelectorAll<HTMLElement>("[data-cropkey]").forEach((el) => {
        const v = parseFloat(getComputedStyle(el).backgroundPositionY || "0");
        if (!Number.isNaN(v)) dom[el.dataset.cropkey!] = Math.round(v * 10) / 10;
      });
      setVals({ ...dom, ...saved });
    }, 300);
    return () => window.clearTimeout(t);
  }, [on]);

  const save = React.useCallback((next: Vals) => {
    setVals(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignore */ }
  }, []);

  // ensure natural size of a source image is known
  const ensureNat = React.useCallback((src: string) => {
    if (natCache.current[src]) return;
    const img = new Image();
    img.onload = () => { natCache.current[src] = { w: img.naturalWidth, h: img.naturalHeight }; };
    img.src = src;
  }, []);

  // collect targets, apply overrides; re-run on interval to survive re-renders
  React.useEffect(() => {
    if (!on) return;
    const apply = () => {
      document.querySelectorAll<HTMLElement>("[data-cropkey]").forEach((el) => {
        const key = el.dataset.cropkey!;
        const src = urlFromBg(getComputedStyle(el).backgroundImage);
        if (src) ensureNat(src);
        const v = vals[key];
        if (v != null) {
          el.style.backgroundSize = "100%";
          el.style.backgroundPosition = `50% ${v}%`;
        }
      });
    };
    apply();
    const id = window.setInterval(apply, 400);
    return () => window.clearInterval(id);
  }, [on, vals, ensureNat]);

  // drag handlers
  React.useEffect(() => {
    if (!on) return;
    const down = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cropkey]");
      if (!el) return;
      const key = el.dataset.cropkey!;
      const src = urlFromBg(getComputedStyle(el).backgroundImage);
      const nat = src ? natCache.current[src] : null;
      if (!nat) return;
      const elW = el.clientWidth, elH = el.clientHeight;
      const scaledH = elW * (nat.h / nat.w);
      const movable = Math.max(1, scaledH - elH);
      const startP = vals[key] ?? (parseFloat((getComputedStyle(el).backgroundPositionY || "0").toString()) || 0);
      drag.current = { key, el, startY: e.clientY, startP, movable };
      setActive(key);
      e.preventDefault();
    };
    const move = (e: PointerEvent) => {
      const d = drag.current; if (!d) return;
      const dy = e.clientY - d.startY;
      const offset0 = (d.startP / 100) * d.movable;
      const offset = Math.min(d.movable, Math.max(0, offset0 - dy));
      const newP = Math.round((offset / d.movable) * 1000) / 10;
      d.el.style.backgroundSize = "100%";
      d.el.style.backgroundPosition = `50% ${newP}%`;
      // live update without spamming storage
      setVals((prev) => ({ ...prev, [d.key]: newP }));
    };
    const up = () => {
      const d = drag.current; if (!d) return;
      drag.current = null;
      setVals((prev) => { try { localStorage.setItem(KEY, JSON.stringify(prev)); } catch { /* ignore */ } return prev; });
    };
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [on, vals]);

  if (!on) return null;

  const entries = Object.entries(vals);
  const exportText = entries.map(([k, v]) => `${k}: "${v}%"`).join("\n");

  return (
    <div className="cropcal">
      <div className="cropcal-h">
        <strong>Crop calibrator</strong>
        <span>drag any image ↕ to frame it</span>
      </div>
      <div className="cropcal-list">
        {entries.length === 0 && <div className="cropcal-empty">Drag an image to start adjusting…</div>}
        {entries.map(([k, v]) => (
          <div key={k} className={`cropcal-row${active === k ? " on" : ""}`}>
            <span className="k">{k}</span><span className="v">{v}%</span>
          </div>
        ))}
      </div>
      <div className="cropcal-actions">
        <button onClick={() => { navigator.clipboard?.writeText(exportText); }}>Copy values</button>
        <button onClick={() => { save({}); }}>Reset</button>
      </div>
    </div>
  );
}
