import React from "react";
import { Badge } from "../core/Badge.jsx";
import { Button } from "../core/Button.jsx";
import { Stepper } from "../core/Stepper.jsx";
import { ImagePlaceholder } from "../core/ImagePlaceholder.jsx";

const LINE_BG = {
  classic: "var(--blush-100)",
  retro: "var(--retro-bg)",
  water: "var(--water-bg)",
  collab: "var(--collab-bg)",
};

export function ProductCard({
  name,
  image,
  line = "classic",
  price,
  oldPrice,
  meta = "330 мл · без сахара",
  badge,
  quantity = 0,
  outOfStock = false,
  onAdd,
  onQuantityChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = hover && !outOfStock;
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        height: "100%",
        boxSizing: "border-box",
        padding: "var(--space-4)",
        background: "var(--white)",
        border: "2px solid " + (lifted ? "var(--coral-600)" : "transparent"),
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-core)",
        transform: lifted ? "translateY(-6px)" : "none",
        transition: "transform var(--dur-base) var(--ease-base), border-color var(--dur-fast) var(--ease-fast)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: "relative" }}>
        <ImagePlaceholder
          src={image}
          label={"банка · " + name}
          radius="var(--radius-md)"
          background={lifted ? "var(--white)" : LINE_BG[line]}
          style={{
            height: 240,
            opacity: outOfStock ? 0.55 : 1,
            transition: "background-color var(--dur-base) var(--ease-base)",
          }}
        />
        {(badge || outOfStock) && (
          <div style={{ position: "absolute", top: 12, left: 12 }}>
            <Badge tone={outOfStock ? "soon" : badge} />
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <h3 style={{ margin: 0, fontSize: "var(--heading-s-size)", lineHeight: "var(--heading-s-lh)", fontWeight: "var(--heading-s-weight)", color: "var(--ink-900)" }}>{name}</h3>
        <p style={{ margin: 0, fontSize: "var(--body-s-size)", lineHeight: "var(--body-s-lh)", fontWeight: "var(--body-s-weight)", color: "var(--ink-500)" }}>{meta}</p>
      </div>

      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <span style={{ fontSize: "var(--price-m-size)", lineHeight: "var(--price-m-lh)", fontWeight: "var(--price-m-weight)", color: "var(--ink-900)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{price} ₽</span>
          {oldPrice && (
            <span style={{ fontSize: "var(--body-s-size)", fontWeight: "var(--price-old-weight)", color: "var(--ink-500)", textDecoration: "line-through", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{oldPrice} ₽</span>
          )}
        </div>
        {outOfStock ? (
          <Button size="sm" disabled>нет в наличии</Button>
        ) : quantity > 0 ? (
          <Stepper value={quantity} onChange={onQuantityChange} />
        ) : (
          <Button size="sm" onClick={onAdd}>в корзину</Button>
        )}
      </div>
    </article>
  );
}
