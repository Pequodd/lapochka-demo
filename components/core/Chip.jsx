import React from "react";

const LINES = {
  classic: { bg: "var(--coral-700)", fg: "var(--white)" },
  retro:   { bg: "var(--retro-ink)", fg: "var(--white)" },
  water:   { bg: "var(--water-ink)", fg: "var(--white)" },
  collab:  { bg: "var(--collab-ink)", fg: "var(--white)" },
};

export function Chip({ selected = false, line, count, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const sel = selected ? (LINES[line] || { bg: "var(--coral-700)", fg: "var(--white)" }) : null;
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "9px 18px",
        background: sel ? sel.bg : "var(--white)",
        color: sel ? sel.fg : "var(--coral-700)",
        border: "2px solid " + (sel ? sel.bg : hover ? "var(--coral-500)" : "var(--peach-400)"),
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-core)",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1,
        cursor: "pointer",
        transition: "background-color var(--dur-fast) var(--ease-fast), border-color var(--dur-fast) var(--ease-fast), color var(--dur-fast) var(--ease-fast)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
      {count != null && (
        <span style={{ opacity: sel ? .75 : .55, fontVariantNumeric: "tabular-nums" }}>{count}</span>
      )}
    </button>
  );
}
