import React from "react";

/**
 * Panel — the studio's flat technical surface. A hairline-bordered card
 * with sharp corners (no glass, no glow). `numbered` stamps a big mono
 * index in the corner; `media` makes it a full-bleed image tile with a
 * scrim. The whole thing reads like a spec-sheet block.
 */
export function Panel({
  children,
  hoverable = true,
  number,
  padding = 28,
  style,
  ...rest
}) {
  return (
    <div
      className={`cp-card${hoverable ? " cp-card-hoverable" : ""}`}
      style={{
        position: "relative",
        background: "var(--bg-3)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xs)",
        padding,
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {number != null && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 18,
            right: 22,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--ink-4)",
            letterSpacing: ".04em",
          }}
        >
          {number}
        </span>
      )}
      {children}
    </div>
  );
}
