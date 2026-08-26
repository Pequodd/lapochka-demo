Quantity stepper — minus / value / plus in a peach-bordered pill.

```jsx
<Stepper value={qty} onChange={setQty} />
```

Appears in three places only: in a product card once the item is in the cart (in place of the button), in the product page's buy row, and on cart-drawer line items (`size="sm"`). Value is always tabular-nums so the pill never jitters.
