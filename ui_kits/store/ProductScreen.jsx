const P = window.LapochkaDesignSystem_c28f60;

const PACKS = [
  { id: "1", label: "1 банка", perCan: 149 },
  { id: "6", label: "6 банок", perCan: 133, saving: "−11 %" },
  { id: "12", label: "12 банок", perCan: 124, saving: "−17 %" },
];

const REVIEWS = [
  { name: "Аня", stars: 5, text: "взяла набор для дочки вместо соков — пьёт и не замечает, что без сахара. грейпфрут теперь дома не задерживается" },
  { name: "Сергей", stars: 5, text: "газация плотная, послевкусия от стевии почти нет. беру 12 банок раз в две недели" },
  { name: "Марина", stars: 4, text: "вкус отличный, но хотелось бы упаковку поменьше — 6 банок уходят за выходные" },
];

function ProductScreen({ cart, onAdd, onQty, onNavigate }) {
  const product = window.LP_ALL.find((p) => p.id === "grape");
  const [pack, setPack] = React.useState("6");
  const [qty, setQty] = React.useState(cart[product.id] || 1);
  const also = ["peach", "cola", "tarhun", "wapple"].map((id) => window.LP_ALL.find((p) => p.id === id));

  return (
    <div>
      <Content>
        <Breadcrumbs items={["главная", "каталог", "классика", "грейпфрут + лимон"]} />
      </Content>

      <Content style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "start" }}>
          <P.Gallery views={["банка спереди", "банка сзади", "состав на банке", "две банки в кадре"]}
            images={["../../assets/cans/grapefruit-lemon.png", "../../assets/cans/grapefruit-lemon.png", "../../assets/cans/grapefruit-lemon.png", "../../assets/cans/grapefruit-lemon.png"]} />
          <div>
            <P.Badge tone="classic" />
            <h1 style={{ margin: "16px 0 4px", fontSize: 32, lineHeight: 1.2, fontWeight: 700, color: "var(--ink-900)" }}>Грейпфрут + лимон</h1>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink-500)" }}>GRAPEFRUIT + LEMON</div>
            <p style={{ margin: "16px 0 0", fontSize: 14, fontWeight: 500, color: "var(--ink-700)" }}>330 мл · 12 ккал на 100 мл · без сахара</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
              <span style={{ fontSize: 28, lineHeight: 1.1, fontWeight: 700, color: "var(--ink-900)", fontVariantNumeric: "tabular-nums" }}>149 ₽</span>
              <P.Badge tone="hit" />
            </div>
            <P.PackSelector value={pack} onChange={setPack} options={PACKS} />
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              <P.Stepper value={qty} onChange={setQty} />
              <P.Button fullWidth onClick={() => onAdd(product, qty)}>в корзину</P.Button>
            </div>
            <div style={{ marginTop: 32, padding: 24, background: "var(--blush-100)", borderRadius: "var(--radius-lg)", display: "flex", flexDirection: "column", gap: 8 }}>
              {["Доставим завтра по Москве", "Бесплатно от 1500 ₽", "Самовывоз из пункта выдачи"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 500, color: "var(--ink-900)" }}>
                  <P.Icon name="check" size={18} color="var(--ok)" />{t}
                </div>
              ))}
            </div>
            <DemoNote>цена в демо — условная</DemoNote>
          </div>
        </div>

        <div style={{ maxWidth: 860, marginTop: 96 }}>
          <P.Accordion items={[
            { title: "состав", content: "вода питьевая, сок грейпфрута, сок лимона, экстракт стевии, натуральный ароматизатор, диоксид углерода" },
            { title: "пищевая ценность", content: <NutritionTable /> },
            { title: "доставка и оплата", content: "Доставим завтра по Москве, в другие города — от двух дней. Бесплатно от 1500 ₽. Оплата картой на сайте или при получении. Самовывоз из пункта выдачи — в день заказа." },
          ]} />
        </div>
      </Content>

      <Section pad={0} style={{ paddingBottom: 96 }}>
        <Content>
          <SectionHeading size={48}>с этим берут</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {also.map((p) => (
              <P.ProductCard key={p.id} name={p.name} image={p.img} line={p.line} price={p.price} oldPrice={p.oldPrice} badge={p.badge}
                meta={p.meta} quantity={cart[p.id] || 0} onAdd={() => onAdd(p)} onQuantityChange={(v) => onQty(p.id, v)} />
            ))}
          </div>
        </Content>
      </Section>

      <P.WaveDivider variant={2} above="var(--white)" below="var(--peach-400)" height={120} />
      <Section background="var(--peach-400)" pad={96}>
        <Content>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
            <h2 style={{ margin: 0, fontSize: 72, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--coral-700)" }}>что говорят</h2>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-700)" }}>4,8 из 5 · 312 отзывов</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {REVIEWS.map((r, i) => <ReviewBubble key={r.name} review={r} side={i % 2 === 0 ? "left" : "right"} />)}
          </div>
        </Content>
      </Section>
      <P.Footer />
    </div>
  );
}

function NutritionTable() {
  const rows = [["энергетическая ценность", "12 ккал / 50 кДж"], ["белки", "0 г"], ["жиры", "0 г"], ["углеводы", "2,9 г"], ["в том числе сахара", "0 г"]];
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: 520, fontFamily: "var(--font-core)" }}>
      <caption style={{ textAlign: "left", fontSize: 14, fontWeight: 500, color: "var(--ink-500)", paddingBottom: 12 }}>на 100 мл</caption>
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k}>
            <td style={{ padding: "10px 0", borderBottom: "2px solid var(--blush-200)", fontSize: 16, fontWeight: 500, color: "var(--ink-700)" }}>{k}</td>
            <td style={{ padding: "10px 0", borderBottom: "2px solid var(--blush-200)", fontSize: 16, fontWeight: 700, color: "var(--ink-900)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ReviewBubble({ review, side }) {
  return (
    <div style={{ display: "flex", justifyContent: side === "left" ? "flex-start" : "flex-end" }}>
      <div style={{ maxWidth: 620, background: "var(--white)", borderRadius: "var(--radius-lg)", borderBottomLeftRadius: side === "left" ? 8 : 30, borderBottomRightRadius: side === "right" ? 8 : 30, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-900)" }}>{review.name}</span>
          <span aria-label={review.stars + " из 5"} style={{ display: "flex", gap: 2, fontSize: 15, lineHeight: 1 }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} aria-hidden="true" style={{ color: s <= review.stars ? "var(--coral-700)" : "var(--blush-200)" }}>★</span>
            ))}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: "var(--ink-700)" }}>{review.text}</p>
      </div>
    </div>
  );
}

Object.assign(window, { ProductScreen, NutritionTable, ReviewBubble });
