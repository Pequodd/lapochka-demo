import React from "react";
import { ImagePlaceholder } from "../core/ImagePlaceholder.jsx";

export function Gallery({ views = [], images = [], style, ...rest }) {
  const [active, setActive] = React.useState(0);
  return (
    <div style={{ display: "flex", gap: "var(--space-4)", fontFamily: "var(--font-core)", ...style }} {...rest}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", flex: "none" }}>
        {views.map((v, i) => (
          <button
            key={i}
            type="button"
            aria-label={v}
            onClick={() => setActive(i)}
            style={{
              width: 88,
              height: 88,
              padding: 0,
              border: "2px solid " + (i === active ? "var(--coral-600)" : "transparent"),
              borderRadius: "var(--radius-md)",
              background: "var(--blush-100)",
              cursor: "pointer",
              overflow: "hidden",
              transition: "border-color var(--dur-fast) var(--ease-fast)",
            }}
          >
            {images[i]
              ? <img src={images[i]} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", padding: 6, boxSizing: "border-box" }} />
              : <span aria-hidden="true" style={{ display: "block", width: "100%", height: "100%", background: i === active ? "var(--white)" : "var(--blush-100)" }} />}
          </button>
        ))}
      </div>
      <ImagePlaceholder
        src={images[active]}
        label={views[active] || "изображение товара"}
        radius="var(--radius-lg)"
        background="var(--blush-100)"
        ratio="1 / 1"
        style={{ flex: 1 }}
      />
    </div>
  );
}
