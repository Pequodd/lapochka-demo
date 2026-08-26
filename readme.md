# lapochka — design system

**lapochka** (Лапочка) is a Russian brand of sparkling **natural sugar-free lemonades** in 330 ml aluminium cans. The whole product is water, fruit juice, plant extracts and carbonation — nothing else. Four lines:

| line | what it is | flavours |
| --- | --- | --- |
| классика | the fruit range the brand started with | грейпфрут + лимон · гуава + кафрский лайм · манго + чили · ананас + личи · арбуз + мелисса · дыня + мята · малина + гранат + ромашка · персик · вишнёвая кола · груша |
| ретро | Soviet-era classics | тургояк · тархун · крем-сода |
| water | functional water with vitamins and CBD | персик + маракуйя (витамин B8) · яблоко (CBD) |
| коллаборации | limited editions with partner brands | lapochka × beglu — пребиотическая вода · лимон + кардамон · бергамот + лаванда |

**Audience:** B2C, 25–40, large Russian cities, buying "healthy but actually tasty" — often for their kids.

**Scenario this system was built for:** the brand is leaving marketplaces and launching its own shop. The old site was a showcase that pushed visitors to marketplace listings; the new one sells directly. The identity is unchanged — only the job changed. Marketplace and retail links are demoted below the brand's own purchase paths.

## Sources

There was **no codebase, Figma file, asset pack or font binary** attached to this project. Everything here was authored from a written brief (product context, token values, component inventory and three screen specs, all supplied verbatim including Russian copy). Consequences worth knowing:

- **No logo file.** The wordmark is set in type — Montserrat ExtraBold, lowercase, coral-600, `-0.02em` — wherever a mark belongs. Nothing was drawn or reconstructed. Send `logo.svg` and it drops into `assets/`.
- **Can renders: supplied.** 13 transparent PNGs live in `assets/cans/` and are wired into every product card, the hero, the line cards, the bundle box, the product gallery and the cart drawer. The mapping flavour → file is deliberately loose (the range has 18 positions and 13 renders, some reused) — see `img` in `ui_kits/store/data.js` and re-point it when the full set arrives.
- **Still missing:** the bunny mascot, the postage-stamp icons and UGC photography — these remain labelled `ImagePlaceholder` surfaces naming what belongs there.
- **No font binaries.** Montserrat is loaded from Google Fonts (`tokens/fonts.css`). If the brand licenses a specific cut, drop the `.woff2` files in `assets/fonts/` and replace the `@import` with `@font-face` rules.
- **No icon set.** Lucide (2px stroke, round caps) is used from CDN as the closest match to the brand's soft line feel — **flagged as a substitution**.
- Prices (149 / 139 / 169 ₽, набор 6 — 799 ₽, набор 12 — 1490 ₽) are demo figures and are labelled as such on every screen.

---

## CONTENT FUNDAMENTALS

**Voice:** warm, soft, slightly childlike — never infantile, never corporate. The brand talks like a friend handing you a cold can, not like a wellness label.

**Language:** everything is Russian. Product names are the flavours as written on the can, lowercase: «грейпфрут + лимон», «крем-сода». The English original sits underneath as an uppercase caption («GRAPEFRUIT + LEMON») and is never the primary name.

**Casing — the one rule that carries the brand:**

- **lowercase** for headings, navigation and decorative lines: «вкусы», «о лапочке», «собрать набор», «берут чаще всего», «мы любим ваши отметки», «почему такая вкусная без сахара?».
- **Sentence case** for anything functional: prices, buttons that commit («Оформить»), availability, delivery, form fields, errors. Buy-button labels inside cards stay lowercase («в корзину») because they read as part of the card's voice; checkout and totals switch to sentence case because they read as a transaction.
- **UPPERCASE** only for 12px captions with +0.06em tracking, and only for latin transliterations and small labels.

**Person:** the brand says «мы» sparingly («мы любим ваши отметки») and addresses the reader as «вы», softly: «зайчик ждёт, когда вы выберете вкусы», «если не хочется ждать доставку». Никогда «Уважаемый покупатель».

**Sentence shape:** short, one idea, em-dash or middle-dot separated rather than sub-clauses: «без сахара, красителей и подсластителей — только вода, сок и газация»; «330 мл · без сахара»; «доставим завтра по Москве · бесплатно от 1500 ₽».

**Punctuation:** the middle dot `·` is the brand's connector in meta lines. The arrow `→` marks breadcrumbs and line-card affordances. Ingredient lists are plain comma lists, no bullets.

**Numbers:** ₽ always after a space («149 ₽»). Tabular figures everywhere numbers can change. Volume as «330 мл», energy as «12 ккал на 100 мл».

**Emoji: never.** Not in UI, not in copy. The one non-alphabetic glyph in the system is the ♥ used at display size as decoration in the UGC collage.

**Not the brand:** «Инновационный функциональный напиток», «ХИТ ПРОДАЖ!!!», «Купи сейчас 🔥», exclamation marks in general, ALL-CAPS headlines, marketplace urgency.

---

## VISUAL FOUNDATIONS

**Palette.** One warm coral family over peach and blush surfaces, warm brown-blacks for text, and four line colours. Nothing cool except the `water` line and the `collab` violet.

- `coral-700 #D6381E` — button fills, prices, any coral text below 24px.
- `coral-600 #FE6147` — display headings, borders, decorative fills. **It scores 3.04:1, so it is legal for text only at 24px/700 and above.** Below that: ink-900 or coral-700. White on a fill is legal on coral-700 only.
- `coral-500 #FA8669` — hover fills, footer marquee.
- `peach-400 #FEC7B2` — the primary section surface. `blush-200 #FFDFD7` — card underlays and 2px dividers. `blush-100 #FFEDE8` — catalogue background and every product-image surface. `white` — air, clouds, waves.
- Text is never grey: `ink-900 #202020`, `ink-700 #6F3432`, `ink-500 #9A7B74` — all warm.
- Line pairs: классика `blush-200 / coral-700` · ретро `#FBD6CE / #B0503F` · water `#DAEAF0 / #4E8CA8` · коллабы `#D1C6E8 / #6A54A3`. A line's colour is used for its surface, its badge and its selected chip — never for body text.
- Max **two background colours per view** (peach + white, or blush-100 + peach).

**Type.** Montserrat only, two registers. Display sizes are 800 weight with tight negative tracking; body text is 500 weight — the system never uses 400 for running text. **The scale has a deliberate cliff:** 120 / 72 / 48, then straight to 20 / 18 / 16 / 14. The intermediate levels (32 / 24 / 20) exist *only* in the catalogue and on the product page, where density demands them. Do not smooth the gap out — that jump is the brand's signature move.

**Layout.** 1440 page, 1200 content column, 120 side margins, 12 columns, 24 gutter. Catalogue is 4 product columns. Banner sections, waves, marquees and the hero break out of the content column and run full-bleed. Fixed elements: only the header (sticky, 80 → 64 on scroll) and the catalogue filter bar (sticky under it). The cart is a 420px right-hand drawer.

**Spacing.** 4-based: 4 8 12 16 24 32 48 64 96 128. Rhythm is fixed — 128 between sections, 96 within a section, 48 between blocks, 16 inside a card.

**Radii.** 8 inputs and small badges · 20 product cards · **30 large blocks and images — the brand's native radius** · 999 buttons, chips, steppers, badges.

**Depth — there are no shadows.** Depth comes from overlapping layers (cards sliding over waves, cans over cloud blobs, tilted UGC photos) and from wavy section boundaries. The only exception in the whole system is `0 2px 24px rgba(111,52,50,.10)` on the sticky header and the cart drawer.

**Backgrounds.** Flat colour fields, no gradients (the only gradient allowed anywhere is the highlight on a can in a photograph), no textures, no patterns, no photographic backgrounds. The recurring motifs are **white cloud blobs** (plain ellipses at 40–70% opacity behind the hero), **waves** (the boundary between every pair of coloured sections, four curve variants, flippable), **postage stamps** (the "why sugar-free" arguments) and the **bunny mascot** (empty cart, empty results).

**Borders.** 2px, always — 2px is as much a brand signature as the radius. Coral-600 for active/emphasis, peach-400 for resting controls, blush-200 for dividers and accordion rules. Cards carry a transparent 2px border at rest so nothing shifts when it turns coral on hover.

**Motion.** 120ms `cubic-bezier(.4,0,.2,1)` for colour and border. 240ms `cubic-bezier(.16,1,.3,1)` for card lift, accordion, drawer. 480ms for section reveal on scroll. The marquee is a 40s linear loop that pauses on hover. Everything collapses under `prefers-reduced-motion`.

**Hover.** Primary buttons lighten *toward* coral-600 (they do not darken). Secondary buttons fill coral-700 with white text. Product cards translate −6px, the image surface lightens to white, and the border turns coral-600. Links and nav go coral-700. Nothing uses opacity as a hover state.

**Press.** `scale(.98)`, 120ms. No colour change on press.

**Focus.** 3px coral-600 ring at 2px offset on every interactive element, always visible — no `outline: none` anywhere.

**Transparency and blur.** Blur is never used. Transparency appears in exactly three places: cloud blobs (40–70%), the out-of-stock product image (55%), and the cart scrim (`rgba(32,32,32,.28)`).

**Imagery.** Warm, bright, high-key, natural daylight; cans photographed on plain blush-100 or white surfaces; UGC is warm and unfiltered, tilted ±5°, radius-30. No black-and-white, no grain, no cool casts, no dark studio shots.

**Cards.** Radius 20 (product) or 30 (blocks), flat white or a line colour, 2px border, 16px internal spacing, no shadow ever.

---

## ICONOGRAPHY

The brief supplied **no icon assets**, so the system uses **Lucide** from CDN (`https://unpkg.com/lucide@0.451.0`) — 2px stroke, round caps, no fills, closest match to the brand's soft line drawing. **This is a substitution: send the real icon set and `Icon.jsx` is the only file that changes.**

- In use, and nothing else: `search`, `shopping-bag`, `map-pin`, `chevron-down`, `chevron-left`, `chevron-right`, `x`, `star`, `check`, `minus`, `plus`.
- Icons are line-only, sized 14–22px, coloured ink-900 / ink-700 / coral-700 / white — never coral-600 (it would fail contrast at those sizes).
- Icons never carry meaning alone: the city control pairs `map-pin` with the city name, the delivery block pairs `check` with a full sentence.
- **No icon font, no sprite sheet, no PNG icons, no emoji.** Two glyphs are drawn with markup rather than icons because they are typographic, not iconographic: the accordion's + (two 2px bars, rotates 45° into ×) and the stepper's − / + (text characters). Two typographic glyphs are allowed instead of icons: **♥** at display size, peach-400, in the UGC collage, and **★** at 15px for review ratings (coral-700 filled / blush-200 empty — a stroke-only star cannot be read as filled-vs-empty at that size).
- The bunny mascot and the postage-stamp illustrations are **brand illustration, not iconography** — they are placeholders here and must arrive as real files.

---

## Components

Reusable primitives, built exactly to the brief's inventory. `window.LapochkaDesignSystem_c28f60.<Name>`.

**core** — `Button` · `Badge` · `Chip` · `Stepper` · `Select` · `Icon` · `ImagePlaceholder`
**structure** — `WaveDivider` · `Marquee`
**product** — `ProductCard` · `PackSelector` · `Gallery` · `Accordion`
**shell** — `Header` · `CartDrawer` · `Footer`
**feedback** — `Toast` · `EmptyState`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (when to use it, usage example, rules). Each directory has a `@dsCard` HTML showing its states.

### Intentional additions

Three components have no counterpart in the brief and were added to keep the screens honest:

- **`Icon`** — a wrapper for the substituted Lucide set, so replacing the icon library is a one-file change.
- **`ImagePlaceholder`** — a labelled stand-in for photography that was never supplied. Better than drawn approximations of the brand's cans and mascot.
- **`Select`** — the brief specifies a sort control on the catalogue filter bar but lists no form primitive; this is that control, and it is the only form field in the store besides the stepper.

## Index

| path | what it is |
| --- | --- |
| `styles.css` | the only file consumers link — `@import`s everything below |
| `tokens/fonts.css` | Montserrat (Google Fonts) + weight tokens |
| `tokens/colors.css` | base palette, line colours, semantic colours, surface/text/interactive aliases |
| `tokens/typography.css` | size / line-height / weight / tracking per level |
| `tokens/spacing.css` | 4-based scale, section rhythm, grid |
| `tokens/radii.css` | 8 / 20 / 30 / pill |
| `tokens/motion.css` | durations, easings, the one legal elevation, focus, reduced-motion |
| `assets/cans/` | 13 can renders, transparent PNG |
| `guidelines/*.html` | 21 specimen cards — Colors, Type, Spacing, Brand (voice, radii, depth, motion, focus) |
| `components/core/` | Button, Badge, Chip, Stepper, Select, Icon, ImagePlaceholder |
| `components/structure/` | WaveDivider, Marquee |
| `components/product/` | ProductCard, PackSelector, Gallery, Accordion |
| `components/shell/` | Header, CartDrawer, Footer |
| `components/feedback/` | Toast, EmptyState |
| `ui_kits/store/` | the three desktop screens at 1440 + the interactive prototype — see its own README |
| `thumbnail.html` | homepage tile |
| `SKILL.md` | Agent-Skills entry point for using this system outside this project |

## Rules that are easy to break

1. coral-600 text below 24px. Use ink-900 or coral-700.
2. A shadow anywhere except the sticky header and the cart drawer.
3. A new type size between 48 and 20.
4. A gradient. A third typeface. An emoji.
5. Hover as the only way to reach product information.
6. A marketplace button above the fold.
