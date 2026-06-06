/* Studio Site UI Kit — chrome: Background field, Nav, Overlay menu, Footer. */

function Field() { return <div className="field" aria-hidden="true" />; }

function Nav({ onMenu, onHome, dark }) {
  return (
    <nav className="nav">
      <a className="wordmark" onClick={onHome}>CHIRAN<span className="dot">.</span></a>
      <div className="nav-right">
        <span className="nav-link" onClick={onMenu} style={{ display: "none" }} />
        <a className="nav-link" onClick={onMenu}>Menu</a>
        <button className="burger" aria-label="Open menu" onClick={onMenu}><span /><span /><span /></button>
      </div>
    </nav>
  );
}

function Overlay({ open, onClose, go }) {
  const links = [
    ["work", "Work"], ["studio", "Studio"], ["services", "Services"],
    ["journal", "Journal"], ["contact", "Contact"],
  ];
  return (
    <div className={`overlay${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="overlay-top">
        <a className="wordmark" onClick={() => { onClose(); go("home"); }}>CHIRAN<span className="dot" style={{ color: "var(--accent)" }}>.</span></a>
        <button className="overlay-close" onClick={onClose}>Close <IClose s={16} /></button>
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

function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-cta">Got a project?<br />Let's <em>talk</em>.</div>
            <div style={{ marginTop: 28 }}>
              <a className="btn btn-accent" href="mailto:hello@chiranperera.com">Start a project <span className="arr">→</span></a>
            </div>
          </div>
          <div className="foot-col">
            <h6>Studio</h6>
            <ul>
              <li><a onClick={() => go("home")}>Work</a></li>
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

Object.assign(window, { Field, Nav, Overlay, Footer });
