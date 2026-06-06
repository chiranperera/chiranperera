import React from "react";

/**
 * StatCard — a big grotesque number over a mono uppercase label, divided
 * by a hairline. The optional accent fragment (e.g. "+", "%") carries the
 * per-project colour; otherwise everything is monochrome.
 */
export function StatCard({
  value,
  accent,
  label,
  style,
  ...rest
}) {
  return (
    <div
      className="cp-card cp-card-hoverable"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "26px 24px",
        borderRadius: "var(--r-xs)",
        background: "var(--bg-3)",
        border: "1px solid var(--line)",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 56,
          letterSpacing: "-.03em",
          lineHeight: 0.9,
          color: "var(--ink)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
        {accent && <span style={{ color: "var(--accent)" }}>{accent}</span>}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
          paddingTop: 14,
          borderTop: "1px solid var(--line)",
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}
