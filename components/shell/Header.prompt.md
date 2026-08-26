Sticky store header — logo left, nav centred, city + search + cart right.

```jsx
<Header variant="transparent" cartCount={3} active="каталог" onCartClick={openCart} />
```

Nav is fixed and lowercase: каталог · наборы · о бренде · где купить · контакты. The cart counter is a coral-700 pill. Over the hero use `variant="transparent"`; on scroll set `scrolled` so it fills blush-100, drops to 64px and takes `--elevation-sticky`.
