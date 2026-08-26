Add-to-cart confirmation.

```jsx
<Toast open={shown} message="добавлено в корзину" actionLabel="в корзину" onAction={openCart} />
```

Enters from below at `--dur-base`, dismisses itself after 4s. Never stack more than one; a second add replaces the message.
