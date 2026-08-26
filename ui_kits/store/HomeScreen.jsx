const D = window.LapochkaDesignSystem_c28f60;

function HomeScreen({ cart, onAdd, onQty, onNavigate }) {
  const data = window.LP_DATA;
  const best = ["grape", "tarhun", "peach", "wpeach", "cola", "kremsoda"].map((id) => window.LP_ALL.find((p) => p.id === id));
  return (
    <div>
      {/* ── HERO ─────────────────────────────── */}
      <section style={{ position: "relative", height: 720, background: "var(--peach-400)", overflow: "hidden", marginTop: -80 }}>
        <Cloud w={420} h={260} top={60} left={-80} opacity={.55} />
        <Cloud w={300} h={180} top={420} left={180} opacity={.4} />
        <Cloud w={480} h={300} top={330} right={-80} opacity={.7} />
        <Cloud w={240} h={150} top={110} right={320} opacity={.5} />
        <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 40, height: "100%", width: 440, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", bottom: 120, width: 420, height: 150, background: "var(--white)", borderRadius: "50%", opacity: .9 }} />
          {[
            { label: "грейпфрут + лимон", src: "../../assets/cans/grapefruit-lemon.png", rot: -9, x: -128, y: 10 },
            { label: "малина + гранат + ромашка", src: "../../assets/cans/raspberry-pomegranate.png", rot: 3, x: 0, y: -28 },
            { label: "манго + чили", src: "../../assets/cans/mango-chili.png", rot: 11, x: 128, y: 16 },
          ].map((c) => (
            <img key={c.label} src={c.src} alt={c.label}
              style={{ position: "absolute", width: 165, height: 400, objectFit: "contain", transform: "translate(" + c.x + "px," + c.y + "px) rotate(" + c.rot + "deg)" }} />
          ))}
        </div>
        <Content style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80 }}>
          <div style={{ width: 880 }}>
            <h1 style={{ margin: 0, fontSize: 120, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--coral-600)" }}>100% натуральный лимонад</h1>
            <p style={{ margin: "24px 0 0", maxWidth: 480, fontSize: 18, lineHeight: 1.55, fontWeight: 500, color: "var(--ink-700)" }}>без сахара, красителей и подсластителей — только вода, сок и газация</p>
            <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
              <D.Button onClick={() => onNavigate("наборы")}>собрать набор</D.Button>
              <D.Button variant="secondary" onClick={() => onNavigate("каталог")}>все вкусы</D.Button>
            </div>
          </div>
        </Content>
      </section>

      {/* ── MARQUEE ──────────────────────────── */}
      <D.Marquee background="var(--peach-400)" color="var(--coral-600)" size={96} height={120} />
      <D.WaveDivider variant={1} above="var(--peach-400)" below="var(--white)" height={120} />

      {/* ── FOUR LINES ───────────────────────── */}
      <Section pad={96}>
        <Content>
          <SectionHeading>четыре линейки</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {data.lines.map((l) => <LineCard key={l.id} line={l} onClick={() => onNavigate("каталог", l.id)} />)}
          </div>
        </Content>
      </Section>

      {/* ── BESTSELLERS ──────────────────────── */}
      <Section pad={96} background="var(--white)">
        <Content>
          <SectionHeading right={<D.Button variant="tertiary" onClick={() => onNavigate("каталог")}>все 24 вкуса</D.Button>}>берут чаще всего</SectionHeading>
          <Carousel>
            {best.map((p) => (
              <div key={p.id} style={{ flex: "none", width: 282 }}>
                <D.ProductCard name={p.name} image={p.img} line={p.line} price={p.price} oldPrice={p.oldPrice} badge={p.badge}
                  meta={p.meta} quantity={cart[p.id] || 0} onAdd={() => onAdd(p)} onQuantityChange={(v) => onQty(p.id, v)} />
              </div>
            ))}
          </Carousel>
        </Content>
      </Section>

      <D.WaveDivider variant={2} above="var(--white)" below="var(--peach-400)" height={120} />

      {/* ── BUNDLE BUILDER ───────────────────── */}
      <Section background="var(--peach-400)" pad={96}>
        <Content>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 48, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.015em", color: "var(--coral-700)" }}>соберите свой набор</h2>
              <p style={{ margin: "24px 0 32px", maxWidth: 420, fontSize: 18, lineHeight: 1.55, fontWeight: 500, color: "var(--ink-700)" }}>6 или 12 банок, любые вкусы, доставка бесплатно от 1500 ₽</p>
              <D.Button onClick={() => onNavigate("наборы")}>собрать набор</D.Button>
              <DemoNote>набор 6 — 799 ₽ · набор 12 — 1490 ₽ · цены условные</DemoNote>
            </div>
            <div style={{ position: "relative", height: 380, background: "var(--white)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
              {["cherry-cola", "melon-peppermint", "peach-verbena", "fizzy-rose"].map((f, i) => (
                <img key={f} src={"../../assets/cans/" + f + ".png"} alt="" style={{ width: 130, height: 320, objectFit: "contain", marginLeft: i ? -28 : 0, transform: "rotate(" + [-6, -2, 2, 6][i] + "deg)" }} />
              ))}
            </div>
          </div>
        </Content>
      </Section>

      <D.WaveDivider variant={3} above="var(--peach-400)" below="var(--white)" height={120} />

      {/* ── WHY SUGAR-FREE ───────────────────── */}
      <Section pad={96}>
        <Content>
          <SectionHeading>почему такая вкусная без сахара?</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { t: "100% органика", d: "сок прямого отжима и растительные экстракты — без концентратов" },
              { t: "0 г сахара", d: "сладость даёт экстракт стевии, а не сахар и не подсластители" },
              { t: "состав из четырёх строк", d: "вода, сок, экстракт, газация. всё, что есть на банке" },
            ].map((s) => <Stamp key={s.t} title={s.t} desc={s.d} />)}
          </div>
        </Content>
      </Section>

      <D.WaveDivider variant={4} above="var(--white)" below="var(--blush-100)" height={120} />

      {/* ── UGC ──────────────────────────────── */}
      <Section background="var(--blush-100)" pad={96}>
        <Content>
          <SectionHeading right={<span style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-700)" }}>@lapochka.drinks</span>}>мы любим ваши отметки</SectionHeading>
          <div style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {["на пикнике", "в кафе", "детский праздник", "офисный обед", "пляж", "домашний ужин", "велопрогулка", "полка холодильника"].map((c, i) => (
                <D.ImagePlaceholder key={c} label={"фото · " + c} background="var(--white)"
                  style={{ height: 240, transform: "rotate(" + [-4, 3, -2, 5, 2, -5, 4, -3][i] + "deg)" }} />
              ))}
            </div>
            <Heart style={{ position: "absolute", left: "44%", top: 190 }} />
            <Heart style={{ position: "absolute", left: "70%", top: 200, fontSize: 88 }} />
          </div>
        </Content>
      </Section>

      {/* ── WHERE TO BUY ─────────────────────── */}
      <Section background="var(--blush-100)" pad={96} style={{ paddingTop: 0 }}>
        <Content>
          <h2 style={{ margin: "0 0 8px", fontSize: 48, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.015em", color: "var(--coral-600)" }}>где купить офлайн</h2>
          <p style={{ margin: "0 0 32px", fontSize: 16, fontWeight: 500, color: "var(--ink-700)" }}>если не хочется ждать доставку</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            {window.LP_DATA.cities.map((c, i) => <D.Chip key={c} selected={i === 0}>{c.toLowerCase()}</D.Chip>)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
            {window.LP_DATA.retailers.map((r) => (
              <span key={r} style={{ fontSize: 20, fontWeight: 600, color: "var(--ink-500)" }}>{r}</span>
            ))}
          </div>
          <DemoNote>логотипы сетей не входят в дизайн-систему — здесь они набраны текстом</DemoNote>
        </Content>
      </Section>

      <D.WaveDivider variant={2} flip above="var(--blush-100)" below="var(--peach-400)" height={120} />
      <D.Footer />
    </div>
  );
}

function LineCard({ line, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 16, alignItems: "center", textAlign: "left", padding: 32, background: line.bg, border: "2px solid " + (h ? line.ink : "transparent"), borderRadius: "var(--radius-lg)", cursor: "pointer", transform: h ? "translateY(-6px)" : "none", transition: "transform var(--dur-base) var(--ease-base), border-color var(--dur-fast) var(--ease-fast)", fontFamily: "var(--font-core)" }}>
      <div>
        <div style={{ fontSize: 48, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.015em", color: line.ink }}>{line.title}</div>
        <p style={{ margin: "12px 0 16px", fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: "var(--ink-700)" }}>{line.desc}</p>
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: line.ink }}>{line.count} →</span>
      </div>
      <window.LapochkaDesignSystem_c28f60.ImagePlaceholder src={line.img} label={"банка · " + line.title} background="var(--white)" style={{ height: 220, borderRadius: "var(--radius-md)" }} />
    </button>
  );
}

function Stamp({ title, desc }) {
  return (
    <div style={{ background: "var(--white)", border: "2px solid var(--blush-200)", borderRadius: "var(--radius-lg)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <window.LapochkaDesignSystem_c28f60.ImagePlaceholder label={"марка · " + title} background="var(--blush-100)" style={{ height: 160, borderRadius: "var(--radius-md)" }} />
      <div>
        <div style={{ fontSize: 24, lineHeight: 1.3, fontWeight: 600, color: "var(--ink-900)" }}>{title}</div>
        <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: "var(--ink-700)" }}>{desc}</p>
      </div>
    </div>
  );
}

function Heart({ style }) {
  return <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 1, color: "var(--peach-400)", ...style }}>♥</div>;
}

Object.assign(window, { HomeScreen, LineCard, Stamp, Heart });
