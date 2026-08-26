import React from "react";

export function Stepper({ value = 1, min = 1, max = 99, onChange, size = "md", style, ...rest }) {
  const h = size === "sm" ? 36 : 40;
  const set = (v) => onChange && onChange(Math.min(max, Math.max(min, v)));
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: h,
        border: "2px solid var(--peach-400)",
        borderRadius: "var(--radius-pill)",
        background: "var(--white)",
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      <Step label="−" onClick={() => set(value - 1)} disabled={value <= min} h={h} />
      <span style={{ minWidth: 32, textAlign: "center", fontSize: 16, fontWeight: 700, color: "var(--ink-900)", fontVariantNumeric: "tabular-nums" }}>{value}</span>
      <Step label="+" onClick={() => set(value + 1)} disabled={value >= max} h={h} />
    </div>
  );
}

function Step({ label, onClick, disabled, h }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      aria-label={label === "+" ? "добавить" : "убрать"}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: h - 4,
        height: h - 4,
        border: 0,
        background: "transparent",
        borderRadius: "50%",
        color: disabled ? "var(--ink-500)" : hover ? "var(--coral-600)" : "var(--coral-700)",
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "color var(--dur-fast) var(--ease-fast)",
      }}
    >
      {label}
    </button>
  );
}
