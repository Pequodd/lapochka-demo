import React from "react";

export function PackSelector({ options = [], value, onChange, style, ...rest }) {
  return (
    <div role="radiogroup" style={{ display: "flex", gap: "var(--space-3)", fontFamily: "var(--font-core)", ...style }} {...rest}>
      {options.map((o) => {
        const sel = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={sel}
            onClick={() => onChange && onChange(o.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 4,
              padding: "14px 18px",
              background: sel ? "var(--blush-100)" : "var(--white)",
              border: "2px solid " + (sel ? "var(--coral-600)" : "var(--peach-400)"),
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              textAlign: "left",
              transition: "border-color var(--dur-fast) var(--ease-fast), background-color var(--dur-fast) var(--ease-fast)",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-900)" }}>{o.label}</span>
            <span style={{ fontSize: "var(--body-s-size)", fontWeight: 500, color: "var(--ink-500)", fontVariantNumeric: "tabular-nums" }}>{o.perCan} ₽ / банка</span>
            {o.saving ? (
              <span style={{ fontSize: "var(--caption-size)", fontWeight: 600, letterSpacing: "var(--caption-tracking)", textTransform: "uppercase", color: "var(--ok)" }}>{o.saving}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
