One pill button in three levels — use it for every action; never hand-roll a button.

```jsx
<Button variant="primary">в корзину</Button>
<Button variant="secondary">все вкусы</Button>
<Button variant="tertiary">показать ещё</Button>
```

- `variant="secondary"` is the brand's default button (transparent, 2px coral-600 border, coral-700 label). Reach for `primary` only for the single commit action in a block («собрать набор», «в корзину», «оформить»).
- White label on a fill is legal on coral-700 only — that is why the primary fill darkens *toward* coral-600 on hover rather than sitting on it.
- `loading` swaps the label for a spinner and keeps the width. `disabled` renders peach-400 + ink-500.
- Labels are sentence case, Russian, and never shout: «в корзину», not «В КОРЗИНУ».
