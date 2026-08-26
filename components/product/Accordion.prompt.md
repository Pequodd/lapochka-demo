Accordion for product detail. One item open at a time; the first is open on load so the ingredient list is never hidden behind an interaction.

```jsx
<Accordion items={[
  { title: "состав", content: "вода питьевая, сок грейпфрута, сок лимона, экстракт стевии, натуральный ароматизатор, диоксид углерода" },
  { title: "пищевая ценность", content: <NutritionTable/> },
  { title: "доставка и оплата", content: "доставим завтра по Москве · бесплатно от 1500 ₽" },
]} />
```

Dividers are 2px blush-200. The + glyph rotates 45° into a ×/− on open — animate with `--dur-base`.
