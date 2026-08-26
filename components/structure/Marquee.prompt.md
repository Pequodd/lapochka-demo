The running brand-name band. At least one per home page, plus one in the footer.

```jsx
<Marquee background="var(--peach-400)" color="var(--coral-600)" size={96} height={120} />
```

Rules: the text is always one tone lighter or louder than the band behind it, never a contrasting hue; 40s linear loop; pauses on hover (add `.lp-marquee:hover>div{animation-play-state:paused}` and the `lp-marquee` keyframes to the page). Purely decorative — it never carries information.
