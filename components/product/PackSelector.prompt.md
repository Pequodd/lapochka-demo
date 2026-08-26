Pack chooser on the product page — always three options, always per-can maths visible.

```jsx
<PackSelector
  value="6"
  onChange={setPack}
  options={[
    { id: "1", label: "1 банка", perCan: 149 },
    { id: "6", label: "6 банок", perCan: 133, saving: "−11 %" },
    { id: "12", label: "12 банок", perCan: 124, saving: "−17 %" },
  ]}
/>
```

The saving line is the only place `--ok` green appears outside form validation. Selected option: blush-100 fill, coral-600 border.
