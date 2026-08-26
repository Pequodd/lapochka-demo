import React from "react";
import { Icon } from "./Icon.jsx";

export function Select({ options = [], value, onChange, label, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", fontFamily: "var(--font-core)", ...style }}
    >
      {label && <span style={{ fontSize: "var(--body-s-size)", color: "var(--ink-500)" }}>{label}</span>}
      <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
        <select
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          style={{
            appearance: "none",
            height: 40,
            padding: "0 40px 0 16px",
            background: "var(--white)",
            border: "2px solid " + (hover ? "var(--coral-500)" : "var(--peach-400)"),
            borderRadius: "var(--radius-pill)",
            fontFamily: "var(--font-core)",
            fontSize: "var(--body-s-size)",
            fontWeight: 600,
            color: "var(--ink-900)",
            cursor: "pointer",
            transition: "border-color var(--dur-fast) var(--ease-fast)",
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <span style={{ position: "absolute", right: 14, display: "inline-flex", pointerEvents: "none" }}>
          <Icon name="chevron-down" size={16} color="var(--coral-700)" />
        </span>
      </span>
    </label>
  );
}
