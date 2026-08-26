import React from "react";

export function Marquee({
  text = "lapochka",
  repeat = 12,
  background = "var(--peach-400)",
  color = "var(--coral-600)",
  size = 96,
  height = 120,
  duration = "var(--marquee-duration)",
  style,
  ...rest
}) {
  const items = Array.from({ length: repeat }, (_, i) => text);
  const run = (key) => (
    <div key={key} style={{ display: "flex", gap: 48, paddingRight: 48, flex: "none" }}>
      {items.map((t, i) => (
        <span key={i} style={{ fontSize: size, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, color, whiteSpace: "nowrap" }}>{t}</span>
      ))}
    </div>
  );
  return (
    <div
      aria-hidden="true"
      className="lp-marquee"
      style={{ height, background, overflow: "hidden", display: "flex", alignItems: "center", fontFamily: "var(--font-display)", ...style }}
      {...rest}
    >
      <div style={{ display: "flex", animation: "lp-marquee " + duration + " linear infinite" }}>
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}
