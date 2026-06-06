/* @ds-bundle: {"format":3,"namespace":"ChiranPereraDesignSystem_bfab9b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Panel","sourcePath":"components/surface/Panel.jsx"},{"name":"StatCard","sourcePath":"components/surface/StatCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"aecf92326943","components/core/Button.jsx":"a342b0b1d00d","components/core/Eyebrow.jsx":"a902369817f7","components/core/Tag.jsx":"56d348558fc9","components/surface/Panel.jsx":"bbf1a0a7e953","components/surface/StatCard.jsx":"7fe50deade77","ui_kits/studio-site/CaseStudy.jsx":"b14c2ee92c91","ui_kits/studio-site/Chrome.jsx":"c9fcd00a11c0","ui_kits/studio-site/Chrome2.jsx":"ce757aef1a53","ui_kits/studio-site/Pages.jsx":"59bd3081ac56","ui_kits/studio-site/Slideshow.jsx":"4ab195beea84","ui_kits/studio-site/data.jsx":"33e64ec8bd9c","ui_kits/studio-site/icons.jsx":"d630c4f7e3d8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChiranPereraDesignSystem_bfab9b = window.ChiranPereraDesignSystem_bfab9b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a status capsule with a small dot. Availability/state marker.
 * Monochrome by default; the dot can carry the per-project accent.
 */
function Badge({
  children,
  status = "open",
  style,
  ...rest
}) {
  const dot = {
    open: "var(--accent)",
    busy: "var(--ink-3)",
    neutral: "var(--ink-4)"
  }[status] || "var(--accent)";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "cp-badge",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      borderRadius: "var(--r-pill)",
      background: "transparent",
      border: "1px solid var(--line)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".02em",
      color: "var(--ink-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — sharp, technical, monochrome.
 * `solid` is a white fill that inverts to an outline on hover; `outline`
 * is a hairline that fills white on hover; `ghost` is text-only with an
 * arrow; `accent` uses the per-project --accent colour. Corners are sharp.
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  arrow = false,
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const pad = size === "lg" ? "16px 28px" : size === "sm" ? "9px 16px" : "13px 22px";
  const fontSize = size === "lg" ? 15 : size === "sm" ? 12 : 13;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: pad,
    borderRadius: "var(--r-xs)",
    fontFamily: "var(--font-mono)",
    fontSize,
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: ".04em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    border: "1px solid transparent",
    transition: "transform .2s var(--ease-out), background .3s, color .3s, box-shadow .3s",
    textDecoration: "none",
    ...style
  };
  const variants = {
    solid: {
      background: "var(--ink)",
      color: "var(--bg)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      boxShadow: "inset 0 0 0 1px var(--line-2)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-3)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-ink)"
    }
  };
  const cls = `cp-btn cp-btn-${variant}`;
  const props = {
    className: cls,
    style: {
      ...base,
      ...variants[variant]
    },
    onClick: disabled ? undefined : onClick,
    ...rest
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "cp-btn-arrow",
    "aria-hidden": "true"
  }, "\u2192"));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, props), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the mono kicker above headings / on slide chrome. Uppercase
 * Space Mono with wide tracking; the optional leading dot uses the
 * per-project --accent. With `vertical` it rotates for a side rail.
 */
function Eyebrow({
  children,
  dot = false,
  vertical = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "cp-eyebrow",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: vertical ? ".24em" : ".14em",
      textTransform: "uppercase",
      color: "var(--ink-3)",
      ...(vertical ? {
        writingMode: "vertical-rl",
        transform: "rotate(180deg)"
      } : null),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small technical chip. `default` is a hairline outline (mono);
 * `solid` is a filled white chip; `accent` uses the per-project colour.
 */
function Tag({
  children,
  variant = "default",
  interactive = false,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "transparent",
      color: "var(--ink-2)",
      border: "1px solid var(--line)"
    },
    solid: {
      background: "var(--ink)",
      color: "var(--bg)",
      border: "1px solid var(--ink)"
    },
    accent: {
      background: "var(--accent-soft)",
      color: "var(--accent)",
      border: "1px solid var(--accent-line)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cp-tag${interactive ? " cp-tag-interactive" : ""}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 11px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: ".02em",
      whiteSpace: "nowrap",
      cursor: interactive ? "pointer" : "default",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/surface/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Panel — the studio's flat technical surface. A hairline-bordered card
 * with sharp corners (no glass, no glow). `numbered` stamps a big mono
 * index in the corner; `media` makes it a full-bleed image tile with a
 * scrim. The whole thing reads like a spec-sheet block.
 */
function Panel({
  children,
  hoverable = true,
  number,
  padding = 28,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-card${hoverable ? " cp-card-hoverable" : ""}`,
    style: {
      position: "relative",
      background: "var(--bg-3)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-xs)",
      padding,
      overflow: "hidden",
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 18,
      right: 22,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-4)",
      letterSpacing: ".04em"
    }
  }, number), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Panel.jsx", error: String((e && e.message) || e) }); }

// components/surface/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — a big grotesque number over a mono uppercase label, divided
 * by a hairline. The optional accent fragment (e.g. "+", "%") carries the
 * per-project colour; otherwise everything is monochrome.
 */
function StatCard({
  value,
  accent,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "cp-card cp-card-hoverable",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "26px 24px",
      borderRadius: "var(--r-xs)",
      background: "var(--bg-3)",
      border: "1px solid var(--line)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      letterSpacing: "-.03em",
      lineHeight: 0.9,
      color: "var(--ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, accent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, accent)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ink-3)",
      paddingTop: 14,
      borderTop: "1px solid var(--line)",
      lineHeight: 1.5
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/CaseStudy.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Studio Site UI Kit — project breakdown (case study). Lands directly. */

function Reveal({
  children,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add("in");
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: `cp-reveal ${className}`
  }, rest), children);
}
function Tile({
  label,
  n,
  tall,
  wide,
  img
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tile${tall ? " tall" : ""}${wide ? " wide" : ""}`
  }, img && /*#__PURE__*/React.createElement("div", {
    className: "img",
    style: {
      backgroundImage: img
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, label));
}
function CaseHead({
  ix,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "case-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix"
  }, ix), /*#__PURE__*/React.createElement("h2", null, children));
}
function CaseStudy({
  slug,
  go
}) {
  const p = PROJECTS.find(x => x.slug === slug) || PROJECTS[0];
  const nextP = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const title = p.title.replace("\n", " ");
  return /*#__PURE__*/React.createElement("div", {
    className: "case",
    style: {
      "--accent": p.accent,
      "--accent-soft": hexA(p.accent, .12),
      "--accent-line": hexA(p.accent, .45)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement(IArrowL, {
    s: 16
  }), " All work"), /*#__PURE__*/React.createElement("span", {
    className: "nav-mid eyebrow"
  }, p.num, " / 05"), /*#__PURE__*/React.createElement("a", {
    className: "wordmark",
    onClick: () => go("home"),
    style: {
      fontSize: 16
    }
  }, "CHIRAN", /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: p.accent
    }
  }, "."))), /*#__PURE__*/React.createElement("header", {
    className: "case-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, p.img ? /*#__PURE__*/React.createElement("div", {
    className: "img",
    style: {
      backgroundImage: p.img
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\u25CF"), " ", p.cats.join(" · "), " \u2014 ", p.year), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    className: "meta-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Role"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.role)), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Client"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.client)), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.timeline)), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Live"), /*#__PURE__*/React.createElement("div", {
    className: "v accent"
  }, p.client.toLowerCase().replace(/ /g, ""), ".com \u2197"))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CaseHead, {
    ix: "01"
  }, "Why this", /*#__PURE__*/React.createElement("br", null), "project.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "case-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, "Overview / The premise"), /*#__PURE__*/React.createElement("div", null, p.overview.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, t))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "pull"
  }, "A portfolio piece is only as good as the ", /*#__PURE__*/React.createElement("em", null, "thinking"), " it shows \u2014 so every project here is a full case study, not a thumbnail."))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CaseHead, {
    ix: "02"
  }, "Research &", /*#__PURE__*/React.createElement("br", null), "discovery.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "case-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, "Market \xB7 Audience \xB7 AI scan"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, p.research))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgrid imgrid-3"
  }, /*#__PURE__*/React.createElement(Tile, {
    n: "R\u201401",
    label: "Competitive scan"
  }), /*#__PURE__*/React.createElement(Tile, {
    n: "R\u201402",
    label: "Audience map"
  }), /*#__PURE__*/React.createElement(Tile, {
    n: "R\u201403",
    label: "AI citation audit"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CaseHead, {
    ix: "03"
  }, "Direction &", /*#__PURE__*/React.createElement("br", null), "design.")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "imgrid imgrid-2"
  }, /*#__PURE__*/React.createElement(Tile, {
    n: "D\u201401",
    label: "Identity system",
    img: p.img
  }), /*#__PURE__*/React.createElement(Tile, {
    n: "D\u201402",
    label: "Type specimen"
  }), /*#__PURE__*/React.createElement(Tile, {
    wide: true,
    n: "D\u201403",
    label: "Hi-fi \u2014 homepage",
    img: p.img
  }), /*#__PURE__*/React.createElement(Tile, {
    n: "D\u201404",
    label: "Mobile flows",
    tall: true
  }), /*#__PURE__*/React.createElement(Tile, {
    n: "D\u201405",
    label: "Component library"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CaseHead, {
    ix: "04"
  }, "Build &", /*#__PURE__*/React.createElement("br", null), "stack.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "case-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, "Frameworks \xB7 Tooling"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Static-generated, image-optimised, and shipped on Vercel \u2014 built the way I'd build my own studio site, then handed over clean."), /*#__PURE__*/React.createElement("div", {
    className: "chips",
    style: {
      marginTop: 20
    }
  }, p.stack.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "chip"
  }, s)), /*#__PURE__*/React.createElement("span", {
    className: "chip accent"
  }, "llms.txt"))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "ai-callout"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: p.accent
    }
  }, "\u25CF"), " AI functionality"), /*#__PURE__*/React.createElement("h3", null, "Engineered for the answer engines."), /*#__PURE__*/React.createElement("p", null, p.ai))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CaseHead, {
    ix: "05"
  }, "Deployment &", /*#__PURE__*/React.createElement("br", null), "results.")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, p.stats.map(([big, u, lbl], i) => /*#__PURE__*/React.createElement("div", {
    className: "s",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, big, /*#__PURE__*/React.createElement("em", null, u)), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lbl)))))), /*#__PURE__*/React.createElement("div", {
    className: "next",
    onClick: () => go("case:" + nextP.slug),
    style: {
      "--accent": nextP.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Next project \u2014 ", nextP.num, " / 05"), /*#__PURE__*/React.createElement("h2", null, nextP.title.replace("\n", " "), " ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, /*#__PURE__*/React.createElement(IArrow, {
    s: 40
  }))))), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}
function hexA(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16),
    g = parseInt(h.slice(2, 4), 16),
    b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Chrome.jsx
try { (() => {
/* Studio Site UI Kit — chrome: Background field, Nav, Overlay menu, Footer. */

function Field() {
  return /*#__PURE__*/React.createElement("div", {
    className: "field",
    "aria-hidden": "true"
  });
}
function Nav({
  onMenu,
  onHome,
  dark
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "wordmark",
    onClick: onHome
  }, "CHIRAN", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-link",
    onClick: onMenu,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    onClick: onMenu
  }, "Menu"), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    "aria-label": "Open menu",
    onClick: onMenu
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))));
}
function Overlay({
  open,
  onClose,
  go
}) {
  const links = [["work", "Work"], ["studio", "Studio"], ["services", "Services"], ["journal", "Journal"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("div", {
    className: `overlay${open ? " open" : ""}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay-top"
  }, /*#__PURE__*/React.createElement("a", {
    className: "wordmark",
    onClick: () => {
      onClose();
      go("home");
    }
  }, "CHIRAN", /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("button", {
    className: "overlay-close",
    onClick: onClose
  }, "Close ", /*#__PURE__*/React.createElement(IClose, {
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "overlay-body"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "overlay-links"
  }, links.map(([r, l], i) => /*#__PURE__*/React.createElement("a", {
    key: r,
    onClick: () => {
      onClose();
      go(r);
    }
  }, l, /*#__PURE__*/React.createElement("span", {
    className: "idx"
  }, "0", i + 1)))), /*#__PURE__*/React.createElement("div", {
    className: "overlay-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("h6", null, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@chiranperera.com"
  }, "hello@chiranperera.com")), /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("h6", null, "Studio"), /*#__PURE__*/React.createElement("p", null, "Colombo, Sri Lanka \xB7 GMT+5:30")), /*#__PURE__*/React.createElement("div", {
    className: "overlay-socials"
  }, /*#__PURE__*/React.createElement("a", null, "LinkedIn"), /*#__PURE__*/React.createElement("a", null, "Behance"), /*#__PURE__*/React.createElement("a", null, "99designs"), /*#__PURE__*/React.createElement("a", null, "Instagram")))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "foot-cta"
  }, "Got a project?", /*#__PURE__*/React.createElement("br", null), "Let's ", /*#__PURE__*/React.createElement("em", null, "talk"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-accent",
    href: "mailto:hello@chiranperera.com"
  }, "Start a project ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Studio"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Work")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("studio")
  }, "Studio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("services")
  }, "Services")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("journal")
  }, "Journal")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@chiranperera.com"
  }, "hello@chiranperera.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "LinkedIn \u2197")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Behance \u2197")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "99designs \u2197"))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Chiran Perera \u2014 Colombo, Sri Lanka"), /*#__PURE__*/React.createElement("span", null, "Where design meets intelligence"))));
}
Object.assign(window, {
  Field,
  Nav,
  Overlay,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Chrome2.jsx
try { (() => {
/* Studio Site UI Kit — custom cursor (dot + ring), per the framework doc.
   Disabled on touch and reduced-motion. */
function Cursor() {
  React.useEffect(() => {
    if (matchMedia("(hover: none)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.append(dot, ring);
    const SEL = "a,button,.tlink,.wi,.filter,.pager button,.nav-arrows button,.burger,input,select,textarea,[role=button]";
    let mx = innerWidth / 2,
      my = innerHeight / 2,
      rx = mx,
      ry = my,
      id;
    const move = e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    const loop = () => {
      rx += (mx - rx) * .18;
      ry += (my - ry) * .18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    const over = e => {
      if (e.target.closest && e.target.closest(SEL)) ring.classList.add("hot");
    };
    const out = e => {
      if (e.target.closest && e.target.closest(SEL)) ring.classList.remove("hot");
    };
    addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      cancelAnimationFrame(id);
      removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      dot.remove();
      ring.remove();
    };
  }, []);
  return null;
}

/* Branded preloader — number count reveal, then slides up. Skippable/short. */
function Preloader() {
  const [n, setN] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [gone, setGone] = React.useState(false);
  React.useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    let v = 0;
    const t = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9 + 5));
      setN(v);
      if (v >= 100) {
        clearInterval(t);
        setTimeout(() => setDone(true), 280);
        setTimeout(() => setGone(true), 1150);
      }
    }, 85);
    return () => clearInterval(t);
  }, []);
  if (gone) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `preloader${done ? " done" : ""}`,
    onClick: () => {
      setDone(true);
      setTimeout(() => setGone(true), 800);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-name"
  }, "CHIRAN\xA0PERERA", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "pl-count"
  }, String(n).padStart(3, "0"), " \u2014 100"), /*#__PURE__*/React.createElement("div", {
    className: "pl-bar",
    style: {
      width: n + "%"
    }
  }));
}
Object.assign(window, {
  Cursor,
  Preloader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Chrome2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Pages.jsx
try { (() => {
/* Studio Site UI Kit — portfolio pages: Work, Studio, Services, Contact. */

function PageBar({
  go,
  onMenu
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement(IArrowL, {
    s: 16
  }), " Index"), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("a", {
    className: "wordmark",
    onClick: () => go("home"),
    style: {
      fontSize: 16
    }
  }, "CHIRAN", /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    style: {
      color: "#fff"
    },
    onClick: onMenu
  }, "Menu")));
}

/* ---------- WORK ---------- */
function WorkPage({
  go,
  onMenu
}) {
  const [f, setF] = React.useState("All");
  const cats = ["All", "Web", "Branding", "AI", "Hospitality", "Beauty"];
  const list = f === "All" ? PROJECTS : PROJECTS.filter(p => p.cats.some(c => c.includes(f)) || f === "Branding" && p.cats.includes("Brand"));
  return /*#__PURE__*/React.createElement("div", {
    className: "case",
    style: {
      "--accent": "#D8FF3E"
    }
  }, /*#__PURE__*/React.createElement(PageBar, {
    go: go,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("section", {
    className: "wrap page-hero",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, "\u25CF"), " Selected work \u2014 2024\u20132026"), /*#__PURE__*/React.createElement("h1", null, "Work", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, cats.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: `filter${f === c ? " on" : ""}`,
    onClick: () => setF(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "work-index"
  }, list.map(p => /*#__PURE__*/React.createElement("article", {
    className: "wi",
    key: p.slug,
    onClick: () => go("case:" + p.slug),
    style: {
      "--accent": p.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, p.img ? /*#__PURE__*/React.createElement("div", {
    className: "img",
    style: {
      backgroundImage: p.img
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, p.num), /*#__PURE__*/React.createElement("span", {
    className: "big"
  }, p.title.replace("\n", " "))), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, p.client, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "cats"
  }, p.cats.join(" · "))), /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, p.year)))))), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}

/* ---------- STUDIO / ABOUT ---------- */
function StudioPage({
  go,
  onMenu
}) {
  const steps = [["01", "Discover", "Brand, audience, and what success looks like after launch."], ["02", "Design", "Strategy, wireframes and visual design with AI-search structure baked in."], ["03", "Build", "Front-end and CMS, built the way I'd build my own site."], ["04", "Deploy", "Shipped on Vercel with a clean handover and 30 days of support."], ["05", "Optimize", "Ongoing AI-citation and performance tuning, after launch."]];
  const tools = [["Next.js", "Framework"], ["React", "UI"], ["WordPress", "CMS"], ["Shopify", "Commerce"], ["Figma", "Design"], ["Framer Motion", "Motion"], ["Vercel", "Hosting"], ["Claude · GPT", "AI"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "case",
    style: {
      "--accent": "#D8FF3E"
    }
  }, /*#__PURE__*/React.createElement(PageBar, {
    go: go,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("section", {
    className: "wrap page-hero",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, "\u25CF"), " The studio \u2014 Colombo, LK"), /*#__PURE__*/React.createElement("h1", null, "Design", /*#__PURE__*/React.createElement("br", null), "meets", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "intelligence."))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "studio-two"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story"
  }, /*#__PURE__*/React.createElement("p", null, "I'm Chiran Perera \u2014 a one-designer studio building cinematic, AI-native websites for hotels, wellness, beauty and lifestyle brands. The work is the hero; every project ships as a full case study."), /*#__PURE__*/React.createElement("p", null, "For six years I've designed and built across web development, UI/UX, branding, social campaigns and AI-driven marketing \u2014 and lately, engineering brands to be the source ChatGPT, Claude and Perplexity actually cite."), /*#__PURE__*/React.createElement("p", null, "I work solo and close to the metal: strategy, design, front-end and deploy, with no agency layers in between. One maker, one client, one clear path from idea to launched.")), /*#__PURE__*/React.createElement("div", {
    className: "portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chiran-portrait.jpg",
    alt: "Chiran Perera"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix"
  }, "01"), /*#__PURE__*/React.createElement("h2", null, "How I", /*#__PURE__*/React.createElement("br", null), "work.")), /*#__PURE__*/React.createElement("div", {
    className: "process"
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    className: "st",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, n), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix"
  }, "02"), /*#__PURE__*/React.createElement("h2", null, "Tools &", /*#__PURE__*/React.createElement("br", null), "stack.")), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, tools.map(([t, r]) => /*#__PURE__*/React.createElement("div", {
    className: "tool",
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "r"
  }, r))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, [["50", "+", "Brands designed"], ["6", " yrs", "Studio experience"], ["99", "%", "Repeat clients"], ["3", " wks", "Site to launch"]].map(([b, u, l]) => /*#__PURE__*/React.createElement("div", {
    className: "s",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, b, /*#__PURE__*/React.createElement("em", null, u)), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, l))))), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}

/* ---------- SERVICES ---------- */
function ServicesPage({
  go,
  onMenu
}) {
  const svc = [["01", "Website Design + Build", "Custom websites on Next.js or WordPress — strategy, brand, front-end, CMS and launch in three weeks.", ["Next.js", "WordPress", "Shopify"]], ["02", "Brand + Visual Identity", "Logos, visual systems and guidelines — the kind that don't need a refresh in 18 months.", ["Logo", "Guidelines", "Art direction"]], ["03", "AI Search Optimization", "Structured so ChatGPT, Claude and Perplexity cite your brand in their answers.", ["Schema", "Entity", "llms.txt"]], ["04", "Social Campaigns", "Editorial social systems and launch campaigns that look like the brand, not a template.", ["Strategy", "Content", "Launch"]], ["05", "AI-Driven Marketing", "Automation, personalization and content workflows wired into your stack.", ["Automation", "CRM", "Workflows"]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "case",
    style: {
      "--accent": "#D8FF3E"
    }
  }, /*#__PURE__*/React.createElement(PageBar, {
    go: go,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("section", {
    className: "wrap page-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, "\u25CF"), " What I do"), /*#__PURE__*/React.createElement("h1", null, "Services", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Five disciplines, one studio \u2014 each wired for the AI search era.")), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc"
  }, svc.map(([ix, h, p, chips]) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: ix
  }, /*#__PURE__*/React.createElement("span", {
    className: "ix"
  }, ix), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, p), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, chips.map(c => /*#__PURE__*/React.createElement("span", {
    className: "chip",
    key: c,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--ink-2)",
      border: "1px solid var(--line)",
      padding: "4px 9px",
      borderRadius: "var(--r-pill)"
    }
  }, c))))))), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}

/* ---------- CONTACT ---------- */
function ContactPage({
  go,
  onMenu
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "case",
    style: {
      "--accent": "#D8FF3E"
    }
  }, /*#__PURE__*/React.createElement(PageBar, {
    go: go,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("section", {
    className: "wrap page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: "var(--accent)"
    }
  }, "\u25CF"), " Available Q3 2026 \u2014 2 slots"), /*#__PURE__*/React.createElement("div", {
    className: "big",
    style: {
      marginTop: 22
    }
  }, "Let's build", /*#__PURE__*/React.createElement("br", null), "something", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "unforgettable.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("h6", null, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@chiranperera.com"
  }, "hello@chiranperera.com")), /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("h6", null, "Studio"), /*#__PURE__*/React.createElement("p", null, "Colombo, Sri Lanka \xB7 GMT+5:30")), /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("h6", null, "Elsewhere"), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", null, "LinkedIn"), /*#__PURE__*/React.createElement("a", null, "Behance"), /*#__PURE__*/React.createElement("a", null, "99designs"), /*#__PURE__*/React.createElement("a", null, "Instagram"))))), /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    placeholder: "you@brand.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Project type"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "Website design + build"), /*#__PURE__*/React.createElement("option", null, "Brand + identity"), /*#__PURE__*/React.createElement("option", null, "AI search optimization"), /*#__PURE__*/React.createElement("option", null, "Something else"))), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "About the project"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "A few lines on what you're building\u2026"
  })), sent ? /*#__PURE__*/React.createElement("div", {
    className: "sent"
  }, /*#__PURE__*/React.createElement(IArrow, {
    s: 15
  }), " Thanks \u2014 I'll reply within two working days.") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent",
    type: "submit",
    style: {
      justifyContent: "center"
    }
  }, "Send message ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))))), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}
Object.assign(window, {
  WorkPage,
  StudioPage,
  ServicesPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Slideshow.jsx
try { (() => {
/* Studio Site UI Kit — fullscreen vertical slideshow: intro hero + projects. */

function IntroSlide({
  active
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: `slide intro${active ? " active" : ""}`,
    "aria-hidden": !active
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "intro-nameback"
  }, /*#__PURE__*/React.createElement("h1", null, "CHIRAN"), /*#__PURE__*/React.createElement("h1", null, "PERERA")), /*#__PURE__*/React.createElement("div", {
    className: "intro-eyebrow"
  }, "Designer \xB7 Developer \xB7 Brand & AI Automation"), /*#__PURE__*/React.createElement("div", {
    className: "intro-foot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tag"
  }, "I design, build and brand digital experiences from end to end \u2014 powered by AI."), /*#__PURE__*/React.createElement("span", {
    className: "tlink",
    style: {
      color: "#fff"
    }
  }, "Selected work ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2193"))), /*#__PURE__*/React.createElement("div", {
    className: "intro-subject"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chiran-cutout.png",
    alt: "Chiran Perera"
  })), /*#__PURE__*/React.createElement("div", {
    className: "intro-fade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "intro-grain"
  }));
}
function Slide({
  p,
  active,
  onOpen
}) {
  const title = p.title.replace("\n", " ");
  return /*#__PURE__*/React.createElement("article", {
    className: `slide${active ? " active" : ""}`,
    "aria-hidden": !active,
    style: {
      "--accent": p.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-media"
  }, p.img ? /*#__PURE__*/React.createElement("div", {
    className: "img",
    style: {
      backgroundImage: p.img
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ph-tag"
  }, "[ ", p.client, " \u2014 hero still ]"))), /*#__PURE__*/React.createElement("div", {
    className: "slide-scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "slide-num"
  }, p.num.replace(/^0/, ""), /*#__PURE__*/React.createElement("em", null, ".")), /*#__PURE__*/React.createElement("div", {
    className: "slide-huge"
  }, /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "slide-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, p.cats.join(" · "), " \u2014 ", p.year), /*#__PURE__*/React.createElement("p", {
    className: "summary"
  }, p.summary), /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    onClick: () => onOpen(p.slug)
  }, "View project ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))));
}
function Slideshow({
  onOpen
}) {
  const [i, setI] = React.useState(0);
  const n = PROJECTS.length + 1; // +1 intro
  const go = React.useCallback(idx => setI((idx % n + n) % n), [n]);
  const next = React.useCallback(() => setI(v => (v + 1) % n), [n]);
  const prev = React.useCallback(() => setI(v => (v - 1 + n) % n), [n]);
  React.useEffect(() => {
    let lock = false;
    const onWheel = e => {
      if (lock || Math.abs(e.deltaY) < 12) return;
      lock = true;
      e.deltaY > 0 ? next() : prev();
      setTimeout(() => {
        lock = false;
      }, 950);
    };
    const onKey = e => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };
    addEventListener("wheel", onWheel, {
      passive: true
    });
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("wheel", onWheel);
      removeEventListener("keydown", onKey);
    };
  }, [next, prev]);

  // accent: intro = lime; projects use their own
  const accent = i === 0 ? "#D8FF3E" : PROJECTS[i - 1].accent;
  const pagerItems = [{
    num: "00"
  }, ...PROJECTS];
  return /*#__PURE__*/React.createElement("div", {
    className: "stage",
    style: {
      "--accent": accent
    }
  }, /*#__PURE__*/React.createElement(IntroSlide, {
    active: i === 0
  }), PROJECTS.map((p, idx) => /*#__PURE__*/React.createElement(Slide, {
    key: p.slug,
    p: p,
    active: idx + 1 === i,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement("div", {
    className: "rail-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vlabel"
  }, i === 0 ? "Scroll" : "Scroll"), /*#__PURE__*/React.createElement("span", {
    className: "vline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      color: "rgba(255,255,255,.4)"
    }
  }, "2026")), /*#__PURE__*/React.createElement("div", {
    className: "pager"
  }, pagerItems.map((p, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: idx === i ? "on" : "",
    onClick: () => go(idx),
    "aria-label": `Slide ${p.num}`
  }, p.num, /*#__PURE__*/React.createElement("span", {
    className: "bar"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nav-arrows"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prev,
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(IArrowL, {
    s: 18
  })), /*#__PURE__*/React.createElement("button", {
    onClick: next,
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(IArrow, {
    s: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "progress",
    style: {
      width: `${(i + 1) / n * 100}%`,
      background: accent
    }
  }));
}
Object.assign(window, {
  Slideshow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Slideshow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/data.jsx
try { (() => {
/* Studio Site UI Kit — project data. Each project owns an accent.
   hero img: a CSS background value, or null → use a labelled placeholder. */
const PROJECTS = [{
  slug: "sarisara-lanka",
  num: "01",
  title: "Sarisara\nLanka",
  cats: ["Travel Marketplace", "Web", "AI"],
  year: "2026",
  accent: "#D8FF3E",
  summary: "An AI-native travel marketplace for Sri Lanka — built to be the source ChatGPT cites when someone asks where to go.",
  role: "Strategy · Design · Build",
  client: "Sarisara Lanka",
  timeline: "9 weeks",
  stack: ["WordPress", "Next.js", "MCP", "Schema"],
  img: "url('../../assets/hero-poster.jpg')",
  overview: ["Sri Lanka's tourism sits across a thousand fragmented listings. The brief: one editorial marketplace travelers — and the assistants they ask — actually trust.", "I owned it end to end: positioning, identity, the full front-end, and an AI itinerary layer wired for citation from day one."],
  research: "Audited 40+ regional travel sites and ran live queries through ChatGPT, Claude and Perplexity to map exactly which sources got cited — and why the incumbents didn't.",
  ai: "A built-in itinerary agent answers \"plan me 5 days in the hill country\" from structured, schema-tagged content — and an llms.txt + entity graph make the brand quotable by every major assistant.",
  stats: [["3.4", "×", "Organic reach"], ["62", "%", "AI-cited queries"], ["9", "wk", "To launch"], ["01", "", "MCP-ready CMS"]]
}, {
  slug: "villa-kaloya",
  num: "02",
  title: "Villa\nKaloya",
  cats: ["Hospitality", "Web", "Bookings"],
  year: "2025",
  accent: "#FF9F1C",
  summary: "A boutique villa, booked direct. Cinematic, editorial, and engineered to skip the OTAs.",
  role: "Design · Build",
  client: "Villa Kaloya",
  timeline: "5 weeks",
  stack: ["Next.js", "Sanity", "Stripe"],
  img: null,
  overview: ["Kaloya was losing 18% of every booking to platform fees. The goal was a site so good guests book direct — and a brand that feels like the place itself.", "A slow, editorial scroll; real photography given room to breathe; a direct-booking flow with zero friction."],
  research: "Interviewed past guests, mapped the booking funnel, and benchmarked against the boutique-hospitality sites that convert without discounting.",
  ai: "An on-site concierge drafts replies to enquiries from the property's own content, and structured data surfaces availability and rates to AI trip planners.",
  stats: [["0", "%", "OTA fees"], ["2.1", "×", "Direct bookings"], ["48", "s", "Avg. session"], ["5", "wk", "To launch"]]
}, {
  slug: "lumen-skincare",
  num: "03",
  title: "Lumen\nSkincare",
  cats: ["Beauty", "Brand", "Shopify"],
  year: "2025",
  accent: "#FF3B30",
  summary: "A skincare brand built to be cited — identity, store, and an ingredient story assistants can read.",
  role: "Branding · Design · Build",
  client: "Lumen",
  timeline: "7 weeks",
  stack: ["Shopify", "Hydrogen", "Schema"],
  img: null,
  overview: ["A founder-led skincare line with a clinical story and no way to tell it. I built the identity and a store that makes the science legible — to buyers and to AI.", "Every product page is structured as an answerable claim: ingredient, concentration, evidence."],
  research: "Mapped how beauty buyers research on TikTok and chatbots, then structured the catalogue so each claim is independently citable.",
  ai: "Ingredient and clinical claims are marked up so ChatGPT recommends Lumen by name when asked for evidence-backed skincare.",
  stats: [["41", "%", "AI-cited claims"], ["1.8", "×", "Conversion"], ["18", "mo", "Brand runway"], ["7", "wk", "To launch"]]
}, {
  slug: "hiruka-wellness",
  num: "04",
  title: "Hiruka\nWellness",
  cats: ["Wellness", "Web", "UI/UX"],
  year: "2024",
  accent: "#2E6BFF",
  summary: "Calm, editorial, conversion-ready — a wellness retreat that reads like a long exhale.",
  role: "Design · Build",
  client: "Hiruka",
  timeline: "6 weeks",
  stack: ["Next.js", "Contentful"],
  img: null,
  overview: ["Hiruka needed to feel like the retreat itself — unhurried, warm, certain. The challenge was keeping that calm while still driving programme sign-ups.", "Generous space, slow reveals, one clear path to book a stay."],
  research: "Studied how wellness audiences decide, and where motion-heavy sites tip from calming into exhausting.",
  ai: "A programme finder answers natural-language questions (\"a 3-day reset for burnout\") from structured retreat content.",
  stats: [["1.9", "×", "Sign-ups"], ["54", "%", "Mobile share"], ["0", "", "Bounce on hero"], ["6", "wk", "To launch"]]
}, {
  slug: "north-point",
  num: "05",
  title: "North Point\nEstates",
  cats: ["Real Estate", "Web", "Brand"],
  year: "2024",
  accent: "#FFFFFF",
  summary: "Property, presented like product. A monochrome estate brand with listings that feel inevitable.",
  role: "Branding · Design · Build",
  client: "North Point",
  timeline: "8 weeks",
  stack: ["Next.js", "Mapbox", "Schema"],
  img: null,
  overview: ["Luxury real estate, drowning in the same beige template every agency uses. North Point wanted to look like a design house, not a brochure.", "A stark monochrome system, oversized type, and listings treated like editorial spreads."],
  research: "Reviewed how high-end buyers browse, and where map-and-grid templates flatten a property's story.",
  ai: "Listings carry structured location, spec and provenance data so AI property assistants can surface them accurately.",
  stats: [["2.6", "×", "Enquiry rate"], ["38", "%", "Saved listings"], ["12", "", "Avg. spreads"], ["8", "wk", "To launch"]]
}];
Object.assign(window, {
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Studio Site UI Kit — thin geometric line icons (1.5–2px, 24px grid).
   Production swaps these 1:1 for Lucide names. */
function SVG({
  s = 18,
  w = 1.7,
  children,
  fill = "none",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: w,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
}
const IArrow = p => /*#__PURE__*/React.createElement(SVG, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IArrowUR = p => /*#__PURE__*/React.createElement(SVG, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7M8 7h9v9"
}));
const IArrowL = p => /*#__PURE__*/React.createElement(SVG, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5M11 6l-6 6 6 6"
}));
const IPlay = p => /*#__PURE__*/React.createElement(SVG, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const IPlus = p => /*#__PURE__*/React.createElement(SVG, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
const IClose = p => /*#__PURE__*/React.createElement(SVG, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
Object.assign(window, {
  IArrow,
  IArrowUR,
  IArrowL,
  IPlay,
  IPlus,
  IClose
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
