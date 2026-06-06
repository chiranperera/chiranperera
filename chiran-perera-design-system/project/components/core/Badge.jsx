import React from "react";

/**
 * Badge — a status capsule with a small dot. Availability/state marker.
 * Monochrome by default; the dot can carry the per-project accent.
 */
export function Badge({
  children,
  status = "open",
  style,
  ...rest
}) {
  const dot = {
    open: "var(--accent)",
    busy: "var(--ink-3)",
    neutral: "var(--ink-4)",
  }[status] || "var(--accent)";
  return (
    <span
      className="cp-badge"
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: dot }} />
      {children}
    </span>
  );
}
