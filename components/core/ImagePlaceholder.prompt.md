Image surface. With `src` it renders the real asset; without one, a labelled stand-in naming what belongs there — never draw the illustration.

```jsx
<ImagePlaceholder src="assets/cans/grapefruit-lemon.png" label="банка · грейпфрут + лимон" ratio="1 / 1" />
<ImagePlaceholder label="зайчик-лапочка · маскот" />
```

Can renders are transparent PNGs — keep `fit="contain"` and let the blush-100 surface show through. Photography uses `fit="cover"`.

Default surface is blush-100 (the brand's product-image background). Swap `background` to a line colour on line-entry cards.
