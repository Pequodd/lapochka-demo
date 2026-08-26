import React from "react";

const SIZES = {
  md: { height: 48, padding: "0 32px", font: 14 },
  sm: { height: 40, padding: "0 24px", font: 14 },
};

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const off = disabled || loading;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-core)",
    fontSize: s.font,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 0,
    borderRadius: "var(--radius-pill)",
    border: "2px solid transparent",
    cursor: off ? "not-allowed" : "pointer",
    transition: "background-color var(--dur-fast) var(--ease-fast), color var(--dur-fast) var(--ease-fast), border-color var(--dur-fast) var(--ease-fast), transform var(--dur-fast) var(--ease-fast)",
    transform: active && !off ? "scale(.98)" : "none",
    whiteSpace: "nowrap",
  };

  const looks = {
    primary: {
      background: off ? "var(--peach-400)" : hover ? "var(--coral-600)" : "var(--coral-700)",
      color: off ? "var(--ink-500)" : "var(--white)",
      borderColor: "transparent",
    },
    secondary: {
      background: off ? "transparent" : hover ? "var(--coral-700)" : "transparent",
      color: off ? "var(--ink-500)" : hover ? "var(--white)" : "var(--coral-700)",
      borderColor: off ? "var(--peach-400)" : "var(--coral-600)",
    },
    tertiary: {
      background: "transparent",
      color: off ? "var(--ink-500)" : hover ? "var(--coral-600)" : "var(--coral-700)",
      borderColor: "transparent",
      padding: "0 8px",
      textDecoration: hover && !off ? "underline" : "none",
      textUnderlineOffset: 4,
    },
  }[variant];

  return (
    <button
      type={type}
      disabled={off}
      onClick={off ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...looks, ...style }}
      {...rest}
    >
      {loading ? <Spinner light={variant === "primary"} /> : children}
    </button>
  );
}

function Spinner({ light }) {
  return (
    <span
      aria-label="загрузка"
      style={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "2px solid " + (light ? "rgba(255,255,255,.35)" : "var(--peach-400)"),
        borderTopColor: light ? "var(--white)" : "var(--coral-700)",
        animation: "lp-spin .7s linear infinite",
      }}
    />
  );
}
