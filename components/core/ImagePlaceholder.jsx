import React from "react";

/** Stands in for brand photography that was not supplied with the brief. */
export function ImagePlaceholder({ label = "изображение", src, fit = "contain", background = "var(--blush-100)", radius = "var(--radius-lg)", ratio, style, ...rest }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: ratio,
        background,
        borderRadius: radius,
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: fit, objectPosition: "center", display: "block" }} />
      ) : (
      <span
        style={{
          fontFamily: "var(--font-core)",
          fontSize: "var(--caption-size)",
          fontWeight: "var(--caption-weight)",
          letterSpacing: "var(--caption-tracking)",
          textTransform: "uppercase",
          color: "var(--ink-500)",
          textAlign: "center",
          padding: "0 16px",
          textWrap: "balance",
        }}
      >
        {label}
      </span>
      )}
    </div>
  );
}
