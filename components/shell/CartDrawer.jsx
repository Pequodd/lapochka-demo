import React from "react";
import { Button } from "../core/Button.jsx";
import { Stepper } from "../core/Stepper.jsx";
import { Icon } from "../core/Icon.jsx";
import { ImagePlaceholder } from "../core/ImagePlaceholder.jsx";


export function CartDrawer({ open = false, items = [], freeFrom = 1500, onClose, onQuantityChange, onCheckout, style, ...rest }) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  return (
    <aside
      aria-hidden={!open}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 420,
        height: "100%",
        background: "var(--white)",
        boxShadow: "var(--elevation-sticky)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-base) var(--ease-base)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-core)",
        zIndex: 40,
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 24px 16px" }}>
        <h2 style={{ margin: 0, fontSize: "var(--heading-m-size)", fontWeight: "var(--heading-m-weight)", color: "var(--ink-900)" }}>корзина</h2>
        <button type="button" aria-label="закрыть" onClick={onClose} style={{ background: "transparent", border: 0, cursor: "pointer", padding: 4 }}>
          <Icon name="x" size={22} color="var(--ink-700)" />
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-4)", padding: 32, textAlign: "center" }}>
          <ImagePlaceholder label="зайчик-лапочка · маскот" background="var(--blush-100)" style={{ width: 180, height: 180, borderRadius: "var(--radius-lg)" }} />
          <p style={{ margin: 0, fontSize: "var(--heading-s-size)", fontWeight: 600, color: "var(--ink-900)" }}>пока пусто</p>
          <p style={{ margin: 0, fontSize: "var(--body-m-size)", color: "var(--ink-700)" }}>зайчик ждёт, когда вы выберете вкусы</p>
          <Button variant="secondary" onClick={onClose}>к каталогу</Button>
        </div>
      ) : (
        <React.Fragment>
          <div style={{ flex: 1, overflowY: "auto", padding: "0 24px", display: "flex", flexDirection: "column" }}>
            {items.map((it) => (
              <div key={it.id} style={{ display: "flex", gap: "var(--space-4)", padding: "16px 0", borderBottom: "2px solid var(--blush-200)" }}>
                <span aria-hidden="true" style={{ width: 72, height: 72, flex: "none", background: "var(--blush-100)", borderRadius: "var(--radius-sm)", overflow: "hidden", display: "block" }}>
                  {it.image && <img src={it.image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />}
                </span>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: "var(--body-m-size)", fontWeight: 600, color: "var(--ink-900)" }}>{it.name}</span>
                  <span style={{ fontSize: "var(--body-s-size)", color: "var(--ink-500)" }}>{it.pack || "330 мл"}</span>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
                    <Stepper size="sm" value={it.quantity} onChange={(v) => onQuantityChange && onQuantityChange(it.id, v)} />
                    <span style={{ fontSize: "var(--price-m-size)", fontWeight: 700, color: "var(--ink-900)", fontVariantNumeric: "tabular-nums" }}>{it.price * it.quantity} ₽</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: "var(--space-4)", background: "var(--blush-100)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "var(--body-m-size)", color: "var(--ink-700)" }}>Итого</span>
              <span style={{ fontSize: "var(--price-l-size)", fontWeight: 700, color: "var(--ink-900)", fontVariantNumeric: "tabular-nums" }}>{subtotal} ₽</span>
            </div>
            <p style={{ margin: 0, fontSize: "var(--body-s-size)", color: subtotal >= freeFrom ? "var(--ok)" : "var(--ink-500)" }}>
              {subtotal >= freeFrom ? "Доставка бесплатно" : "До бесплатной доставки " + (freeFrom - subtotal) + " ₽"}
            </p>
            <Button fullWidth onClick={onCheckout}>Оформить</Button>
          </div>
        </React.Fragment>
      )}
    </aside>
  );
}
