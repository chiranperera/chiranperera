import React from "react";

/**
 * Button — sharp, technical, monochrome.
 * `solid` is a white fill that inverts to an outline on hover; `outline`
 * is a hairline that fills white on hover; `ghost` is text-only with an
 * arrow; `accent` uses the per-project --accent colour. Corners are sharp.
 */
export function Button({
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
    ...style,
  };

  const variants = {
    solid:   { background: "var(--ink)", color: "var(--bg)" },
    outline: { background: "transparent", color: "var(--ink)", boxShadow: "inset 0 0 0 1px var(--line-2)" },
    ghost:   { background: "transparent", color: "var(--ink-3)" },
    accent:  { background: "var(--accent)", color: "var(--accent-ink)" },
  };

  const cls = `cp-btn cp-btn-${variant}`;
  const props = {
    className: cls,
    style: { ...base, ...variants[variant] },
    onClick: disabled ? undefined : onClick,
    ...rest,
  };

  const inner = (
    <>
      {children}
      {arrow && <span className="cp-btn-arrow" aria-hidden="true">→</span>}
    </>
  );

  if (href && !disabled) return <a href={href} {...props}>{inner}</a>;
  return <button type="button" disabled={disabled} {...props}>{inner}</button>;
}
