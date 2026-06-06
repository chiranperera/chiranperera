import React from "react";

/**
 * Tag — a small technical chip. `default` is a hairline outline (mono);
 * `solid` is a filled white chip; `accent` uses the per-project colour.
 */
export function Tag({
  children,
  variant = "default",
  interactive = false,
  style,
  ...rest
}) {
  const variants = {
    default: { background: "transparent", color: "var(--ink-2)", border: "1px solid var(--line)" },
    solid:   { background: "var(--ink)", color: "var(--bg)", border: "1px solid var(--ink)" },
    accent:  { background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-line)" },
  };
  return (
    <span
      className={`cp-tag${interactive ? " cp-tag-interactive" : ""}`}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
