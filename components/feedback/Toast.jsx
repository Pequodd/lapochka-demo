import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Toast({ open = false, message = "добавлено в корзину", actionLabel, onAction, style, ...rest }) {
  return (
    <div
      role="status"
      style={{
        position: "absolute",
        right: 32,
        bottom: 32,
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        height: 52,
        padding: "0 12px 0 24px",
        background: "var(--ink-900)",
        color: "var(--white)",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--body-m-size)",
        fontWeight: 600,
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(12px)",
        transition: "opacity var(--dur-base) var(--ease-base), transform var(--dur-base) var(--ease-base)",
        pointerEvents: open ? "auto" : "none",
        zIndex: 60,
        ...style,
      }}
      {...rest}
    >
      <Icon name="shopping-bag" size={18} color="var(--white)" />
      <span>{message}</span>
      {actionLabel && (
        <button type="button" onClick={onAction} style={{ height: 36, padding: "0 18px", background: "var(--white)", color: "var(--ink-900)", border: 0, borderRadius: "var(--radius-pill)", fontFamily: "var(--font-core)", fontSize: "var(--body-s-size)", fontWeight: 700, cursor: "pointer" }}>{actionLabel}</button>
      )}
    </div>
  );
}
