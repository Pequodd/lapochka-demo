# UI kit — lapochka store (desktop, 1440)

Redesign of the lapochka site: it was a showcase pushing visitors to marketplaces, it is now the brand's own shop. Three desktop screens, all copy in Russian.

## Files

| file | what it is |
| --- | --- |
| `index.html` | interactive prototype — nav switches screens, add-to-cart, stepper, cart drawer, toast all work |
| `screen-home.html` | artboard: экран 1 · главная |
| `screen-catalogue.html` | artboard: экран 2 · каталог |
| `screen-product.html` | artboard: экран 3 · товар |
| `app.jsx` | shell: screen routing, cart state, toast timer, sticky-header scroll flag |
| `HomeScreen.jsx` | hero · marquee · four lines · bestsellers · bundle builder · why sugar-free · UGC · offline · footer |
| `CatalogueScreen.jsx` | breadcrumbs · «вкусы» + counter · sticky filter bar · 4-col grid · показать ещё · bundle banner |
| `ProductScreen.jsx` | gallery 7/5 · pack selector · buy row · accordion · с этим берут · reviews |
| `shared.jsx` | layout helpers only (Content, Section, SectionHeading, Cloud, Carousel, Breadcrumbs) |
| `data.js` | the real flavour range, lines, cities, retailers |

Everything visual comes from the design system bundle (`window.LapochkaDesignSystem_c28f60`); the kit never re-implements a primitive.

## Deliberate scenario decisions

- Marketplace links appear nowhere above the fold. «где купить офлайн» is the last content section before the footer, chips and retailer names only, no fills — it used to be the primary CTA and is now a fallback.
- The first buy opportunity on the home page is «берут чаще всего»; the bundle builder is the second.
- No filter sidebar in the catalogue — four lines and three attributes fit in a sticky chip bar, and the width belongs to the cards.
- Prices are demo figures and every screen says so («цены в демо — условные»).

## Missing material

All photography is a labelled `ImagePlaceholder`: can shots, the box of cans, the stamp icons, UGC photos and the bunny mascot. Retailer logos are set in type. Drop real assets into `assets/` and swap the placeholders.
