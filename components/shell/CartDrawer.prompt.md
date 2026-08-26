The cart panel — 420px, slides in from the right, one of the two places a shadow is allowed.

```jsx
<CartDrawer open={open} items={lines} onQuantityChange={setQty} onClose={close} onCheckout={checkout} />
```

Totals and the delivery line are sentence case («Итого», «Оформить», «До бесплатной доставки 350 ₽»); the heading «корзина» is lowercase. Empty state shows the bunny mascot, «пока пусто» and a secondary button back to the catalogue.
