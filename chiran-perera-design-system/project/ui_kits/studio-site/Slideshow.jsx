/* Studio Site UI Kit — fullscreen vertical slideshow: intro hero + projects. */

function IntroSlide({ active }) {
  return (
    <article className={`slide intro${active ? " active" : ""}`} aria-hidden={!active}>
      <div className="intro-bg" />
      <div className="intro-nameback"><h1>CHIRAN</h1><h1>PERERA</h1></div>
      <div className="intro-eyebrow">Designer · Developer · Brand &amp; AI Automation</div>
      <div className="intro-foot">
        <p className="tag">I design, build and brand digital experiences from end to end — powered by AI.</p>
        <span className="tlink" style={{ color: "#fff" }}>Selected work <span className="arr">↓</span></span>
      </div>
      <div className="intro-subject"><img src="../../assets/chiran-cutout.png" alt="Chiran Perera" /></div>
      <div className="intro-fade" />
      <div className="intro-grain" />
    </article>
  );
}

function Slide({ p, active, onOpen }) {
  const title = p.title.replace("\n", " ");
  return (
    <article className={`slide${active ? " active" : ""}`} aria-hidden={!active}
      style={{ "--accent": p.accent }}>
      <div className="slide-media">
        {p.img
          ? <div className="img" style={{ backgroundImage: p.img }} />
          : <div className="ph"><span className="ph-tag">[ {p.client} — hero still ]</span></div>}
      </div>
      <div className="slide-scrim" />
      <div className="slide-num">{p.num.replace(/^0/, "")}<em>.</em></div>
      <div className="slide-huge"><h2>{title}</h2></div>
      <div className="slide-content">
        <span className="eyebrow">{p.cats.join(" · ")} — {p.year}</span>
        <p className="summary">{p.summary}</p>
        <button className="tlink" onClick={() => onOpen(p.slug)}>View project <span className="arr">→</span></button>
      </div>
    </article>
  );
}

function Slideshow({ onOpen }) {
  const [i, setI] = React.useState(0);
  const n = PROJECTS.length + 1; // +1 intro
  const go = React.useCallback((idx) => setI(((idx % n) + n) % n), [n]);
  const next = React.useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = React.useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  React.useEffect(() => {
    let lock = false;
    const onWheel = (e) => {
      if (lock || Math.abs(e.deltaY) < 12) return;
      lock = true; e.deltaY > 0 ? next() : prev();
      setTimeout(() => { lock = false; }, 950);
    };
    const onKey = (e) => {
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
    <div className="stage" style={{ "--accent": accent }}>
      <IntroSlide active={i === 0} />
      {PROJECTS.map((p, idx) => <Slide key={p.slug} p={p} active={idx + 1 === i} onOpen={onOpen} />)}

      <div className="rail-left">
        <span className="vlabel">{i === 0 ? "Scroll" : "Scroll"}</span>
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

Object.assign(window, { Slideshow });
