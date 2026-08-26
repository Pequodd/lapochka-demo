import React from "react";
import { Button } from "../core/Button.jsx";
import { ImagePlaceholder } from "../core/ImagePlaceholder.jsx";

export function EmptyState({
  title = "ничего не нашлось",
  description = "попробуйте убрать фильтры — вкусов у нас всё равно 24",
  actionLabel = "сбросить фильтры",
  onAction,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-6)",
        padding: "96px 24px",
        textAlign: "center",
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      <ImagePlaceholder label="зайчик-лапочка · маскот" background="var(--blush-200)" style={{ width: 220, height: 220 }} />
      <h3 style={{ margin: 0, fontSize: "var(--display-m-size)", lineHeight: "var(--display-m-lh)", fontWeight: 800, letterSpacing: "var(--display-m-tracking)", color: "var(--coral-600)" }}>{title}</h3>
      <p style={{ margin: 0, maxWidth: 460, fontSize: "var(--body-l-size)", lineHeight: "var(--body-l-lh)", color: "var(--ink-700)" }}>{description}</p>
      {actionLabel && <Button variant="secondary" onClick={onAction}>{actionLabel}</Button>}
    </div>
  );
}
