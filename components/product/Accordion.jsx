import React from "react";

export function Accordion({ items = [], defaultOpen = 0, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ fontFamily: "var(--font-core)", borderTop: "2px solid var(--blush-200)", ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "2px solid var(--blush-200)" }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-4)",
                padding: "24px 0",
                background: "transparent",
                border: 0,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "var(--heading-m-size)", lineHeight: "var(--heading-m-lh)", fontWeight: "var(--heading-m-weight)", color: "var(--ink-900)" }}>{it.title}</span>
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 20,
                  height: 20,
                  position: "relative",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform var(--dur-base) var(--ease-base)",
                }}
              >
                <i style={{ position: "absolute", top: 9, left: 0, width: 20, height: 2, background: "var(--coral-700)" }} />
                <i style={{ position: "absolute", left: 9, top: 0, width: 2, height: 20, background: "var(--coral-700)", opacity: isOpen ? 0 : 1, transition: "opacity var(--dur-base) var(--ease-base)" }} />
              </span>
            </button>
            {isOpen && (
              <div style={{ paddingBottom: 24, maxWidth: 720, fontSize: "var(--body-m-size)", lineHeight: "var(--body-m-lh)", fontWeight: "var(--body-m-weight)", color: "var(--ink-700)" }}>
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
