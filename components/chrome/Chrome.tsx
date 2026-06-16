"use client";
/* Chrome — background field, nav, overlay menu, footer, page bar. */
import * as React from "react";
import { useNav } from "@/components/AppShell";
import { IArrowL, IClose } from "@/components/icons";

export function Field() {
  return <div className="field" aria-hidden="true" />;
}

/* One consistent header for every route: logo top-left (fixed position),
   an icon-only back chevron BELOW the logo on inner pages (→ home), and the
   hamburger always top-right. No text labels. */
export function Header({ showBack = false, backTo = "home", backLabel = "Back" }: { showBack?: boolean; backTo?: string; backLabel?: string }) {
  const { go, openMenu } = useNav();
  return (
    <header className="site-header">
      <div className="hdr-left">
        <a className="wordmark" onClick={() => go("home")}>CHIRAN<span className="dot">.</span></a>
        {showBack && (
          <button className="hdr-back" aria-label={backLabel} onClick={() => go(backTo)}><IArrowL s={17} /></button>
        )}
      </div>
      <button className="burger" aria-label="Open menu" onClick={openMenu}><span /><span /><span /></button>
    </header>
  );
}

export function Overlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { go } = useNav();
  const links: [string, string][] = [
    ["projects", "Projects"], ["studio", "Studio"], ["services", "Services"],
    ["journal", "Journal"], ["contact", "Contact"],
  ];
  return (
    <div className={`overlay${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="overlay-top">
        <a className="wordmark" onClick={() => { onClose(); go("home"); }}>CHIRAN<span className="dot" style={{ color: "var(--accent)" }}>.</span></a>
        <button className="overlay-close" aria-label="Close menu" onClick={onClose}><IClose s={20} /></button>
      </div>
      <div className="overlay-body">
        <nav className="overlay-links">
          {links.map(([r, l], i) => (
            <a key={r} onClick={() => { onClose(); go(r); }}>
              {l}<span className="idx">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div className="overlay-side">
          <div className="blk">
            <h6>Get in touch</h6>
            <a href="mailto:hello@chiranperera.com">hello@chiranperera.com</a>
          </div>
          <div className="blk">
            <h6>Studio</h6>
            <p>Colombo, Sri Lanka · GMT+5:30</p>
          </div>
          <div className="overlay-socials">
            <a>LinkedIn</a><a>Behance</a><a>99designs</a><a>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const { go } = useNav();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-cta">Got a project?<br />Let&apos;s <em>talk</em>.</div>
            <div style={{ marginTop: 28 }}>
              <a className="btn btn-accent" href="mailto:hello@chiranperera.com">Start a project <span className="arr">→</span></a>
            </div>
          </div>
          <div className="foot-col">
            <h6>Studio</h6>
            <ul>
              <li><a onClick={() => go("projects")}>Projects</a></li>
              <li><a onClick={() => go("studio")}>Studio</a></li>
              <li><a onClick={() => go("services")}>Services</a></li>
              <li><a onClick={() => go("journal")}>Journal</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:hello@chiranperera.com">hello@chiranperera.com</a></li>
              <li><a>LinkedIn ↗</a></li>
              <li><a>Behance ↗</a></li>
              <li><a>99designs ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bar">
          <span>© 2026 Chiran Perera — Colombo, Sri Lanka</span>
          <span>Where design meets intelligence</span>
        </div>
      </div>
    </footer>
  );
}

