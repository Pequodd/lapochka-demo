import React from "react";

const TONES = {
  new:        { bg: "var(--coral-700)", fg: "var(--white)",      border: "transparent",        label: "новинка" },
  hit:        { bg: "var(--peach-400)", fg: "var(--ink-700)",    border: "transparent",        label: "хит" },
  sale:       { bg: "var(--ok)",        fg: "var(--white)",      border: "transparent",        label: "скидка" },
  soon:       { bg: "transparent",      fg: "var(--ink-700)",    border: "var(--peach-400)",   label: "скоро вернётся" },
  classic:    { bg: "var(--blush-200)", fg: "var(--coral-700)",  border: "transparent",        label: "классика" },
  retro:      { bg: "var(--retro-bg)",  fg: "var(--retro-ink)",  border: "transparent",        label: "ретро" },
  water:      { bg: "var(--water-bg)",  fg: "var(--water-ink)",  border: "transparent",        label: "water" },
  collab:     { bg: "var(--collab-bg)", fg: "var(--collab-ink)", border: "transparent",        label: "коллаб" },
};

export function Badge({ tone = "new", children, style, ...rest }) {
  const t = TONES[tone] || TONES.new;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 24,
        padding: "0 12px",
        background: t.bg,
        color: t.fg,
        border: "2px solid " + t.border,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--caption-size)",
        fontWeight: "var(--caption-weight)",
        letterSpacing: "var(--caption-tracking)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children || t.label}
    </span>
  );
}
