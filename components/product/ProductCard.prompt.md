The product card — the store's workhorse. Four columns at 1440, 24px gutter.

```jsx
<ProductCard name="грейпфрут + лимон" line="classic" price={149} badge="хит" />
<ProductCard name="персик" price={149} quantity={2} onQuantityChange={setQty} />
<ProductCard name="тархун" line="retro" price={139} oldPrice={169} badge="sale" />
<ProductCard name="дыня + мята" price={149} outOfStock />
```

States: default · hover (lifts 6px, image surface lightens to white, border turns coral-600) · in cart (stepper replaces the button) · out of stock (image at 55%, «скоро вернётся», disabled button). Hover is never the only route to information — name, meta and price are always visible.
