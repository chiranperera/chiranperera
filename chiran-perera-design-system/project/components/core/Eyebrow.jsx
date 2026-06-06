import React from "react";

/**
 * Eyebrow — the mono kicker above headings / on slide chrome. Uppercase
 * Space Mono with wide tracking; the optional leading dot uses the
 * per-project --accent. With `vertical` it rotates for a side rail.
 */
export function Eyebrow({
  children,
  dot = false,
  vertical = false,
  style,
  ...rest
}) {
  return (
    <span
      className="cp-eyebrow"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: vertical ? ".24em" : ".14em",
        textTransform: "uppercase",
        color: "var(--ink-3)",
        ...(vertical ? { writingMode: "vertical-rl", transform: "rotate(180deg)" } : null),
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flex: "none" }} />
      )}
      {children}
    </span>
  );
}
