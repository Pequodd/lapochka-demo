const C = window.LapochkaDesignSystem_c28f60;

const LINE_CHIPS = [
  { id: "all", label: "все" },
  { id: "classic", label: "классика", line: "classic" },
  { id: "retro", label: "ретро", line: "retro" },
  { id: "water", label: "water", line: "water" },
  { id: "collab", label: "коллабы", line: "collab" },
];
const ATTR_CHIPS = ["без кофеина", "новинки", "со скидкой"];
const SORTS = ["популярные", "сначала дешёвые", "сначала дорогие", "новинки"];

function CatalogueScreen({ cart, onAdd, onQty, onOpenProduct, initialLine = "all" }) {
  const [line, setLine] = React.useState(initialLine);
  const [attrs, setAttrs] = React.useState([]);
  const [sort, setSort] = React.useState(SORTS[0]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => setLine(initialLine), [initialLine]);

  let items = window.LP_ALL.filter((p) => line === "all" || p.line === line);
  if (attrs.includes("новинки")) items = items.filter((p) => p.badge === "new");
  if (attrs.includes("со скидкой")) items = items.filter((p) => p.oldPrice);
  if (attrs.includes("без кофеина")) items = items.filter((p) => p.id !== "cola");
  if (sort === "сначала дешёвые") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "сначала дорогие") items = [...items].sort((a, b) => b.price - a.price);
  if (sort === "новинки") items = [...items].sort((a, b) => (b.badge === "new") - (a.badge === "new"));
  const shown = expanded ? items : items.slice(0, 12);

  const toggleAttr = (a) => setAttrs(attrs.includes(a) ? attrs.filter((x) => x !== a) : attrs.concat(a));
  const reset = () => { setLine("all"); setAttrs([]); };

  return (
    <div style={{ background: "var(--blush-100)" }}>
      <Content>
        <Breadcrumbs items={["главная", "каталог"]} />
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, margin: "32px 0 32px" }}>
          <h1 style={{ margin: 0, fontSize: 72, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--coral-600)" }}>вкусы</h1>
          <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-500)", paddingBottom: 10 }}>24 позиции</span>
        </div>
      </Content>

      <div style={{ position: "sticky", top: 64, zIndex: 15, background: "var(--blush-100)", boxShadow: "var(--elevation-sticky)", padding: "16px 0" }}>
        <Content style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {LINE_CHIPS.map((c) => (
              <C.Chip key={c.id} selected={line === c.id} line={c.line} onClick={() => setLine(c.id)}>{c.label}</C.Chip>
            ))}
            <span aria-hidden="true" style={{ width: 2, alignSelf: "stretch", background: "var(--blush-200)", margin: "0 4px" }} />
            {ATTR_CHIPS.map((a) => (
              <C.Chip key={a} selected={attrs.includes(a)} onClick={() => toggleAttr(a)}>{a}</C.Chip>
            ))}
          </div>
          <C.Select label="сортировка" value={sort} onChange={setSort} options={SORTS} />
        </Content>
      </div>

      <Content style={{ paddingTop: 48, paddingBottom: 96 }}>
        {shown.length === 0 ? (
          <C.EmptyState onAction={reset} />
        ) : (
          <React.Fragment>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {shown.map((p) => (
                <div key={p.id} onClick={() => onOpenProduct(p.id)} style={{ cursor: "pointer", height: "100%" }}>
                  <C.ProductCard name={p.name} image={p.img} line={p.line} price={p.price} oldPrice={p.oldPrice} badge={p.badge}
                    meta={p.meta} outOfStock={p.outOfStock} quantity={cart[p.id] || 0}
                    onAdd={() => onAdd(p)} onQuantityChange={(v) => onQty(p.id, v)} />
                </div>
              ))}
            </div>
            {!expanded && items.length > 12 && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
                <C.Button variant="secondary" onClick={() => setExpanded(true)}>показать ещё</C.Button>
              </div>
            )}
            <DemoNote>цены в демо — условные: классика 149 ₽ · ретро 139 ₽ · water 169 ₽</DemoNote>
          </React.Fragment>
        )}
      </Content>

      <C.WaveDivider variant={3} above="var(--blush-100)" below="var(--peach-400)" height={120} />
      <Section background="var(--peach-400)" pad={96}>
        <Content style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48 }}>
          <h2 style={{ margin: 0, maxWidth: 700, fontSize: 48, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.015em", color: "var(--coral-700)" }}>не можете выбрать? соберите набор из 12 банок</h2>
          <C.Button>собрать набор</C.Button>
        </Content>
      </Section>
      <C.Footer />
    </div>
  );
}

Object.assign(window, { CatalogueScreen });
