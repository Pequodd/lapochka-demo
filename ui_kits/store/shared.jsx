const DS = window.LapochkaDesignSystem_c28f60;

function Content({ children, style }) {
  return <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 120px", boxSizing: "content-box", ...style }}>{children}</div>;
}

function Section({ background = "var(--white)", pad = 128, children, style, ...rest }) {
  return <section style={{ background, padding: pad + "px 0", ...style }} {...rest}>{children}</section>;
}

function SectionHeading({ children, right, size = 72 }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48 }}>
      <h2 style={{ margin: 0, fontSize: size, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--coral-600)", textWrap: "balance" }}>{children}</h2>
      {right}
    </div>
  );
}

function Cloud({ w, h, top, left, right, bottom, opacity = 1 }) {
  return <div aria-hidden="true" style={{ position: "absolute", width: w, height: h, top, left, right, bottom, background: "var(--white)", borderRadius: "50%", opacity }} />;
}

function Carousel({ children }) {
  const ref = React.useRef(null);
  const scroll = (dir) => ref.current && ref.current.scrollBy({ left: dir * 588, behavior: "smooth" });
  return (
    <div style={{ position: "relative" }}>
      <div ref={ref} style={{ display: "flex", gap: 24, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 8 }}>{children}</div>
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <CarouselBtn dir={-1} onClick={() => scroll(-1)} />
        <CarouselBtn dir={1} onClick={() => scroll(1)} />
      </div>
    </div>
  );
}

function CarouselBtn({ dir, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" aria-label={dir < 0 ? "назад" : "вперёд"} onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: 48, height: 48, borderRadius: 999, background: h ? "var(--coral-700)" : "transparent", border: "2px solid var(--coral-600)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color var(--dur-fast) var(--ease-fast)" }}>
      <DS.Icon name={dir < 0 ? "chevron-left" : "chevron-right"} size={20} color={h ? "var(--white)" : "var(--coral-700)"} />
    </button>
  );
}

function Breadcrumbs({ items }) {
  return (
    <nav style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14, fontWeight: 500, color: "var(--ink-500)", paddingTop: 32 }}>
      {items.map((it, i) => (
        <React.Fragment key={it}>
          {i > 0 && <span aria-hidden="true">→</span>}
          <span style={{ color: i === items.length - 1 ? "var(--ink-700)" : "var(--ink-500)" }}>{it}</span>
        </React.Fragment>
      ))}
    </nav>
  );
}

function DemoNote({ children }) {
  return <p style={{ margin: "16px 0 0", fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink-500)" }}>{children}</p>;
}

Object.assign(window, { Content, Section, SectionHeading, Cloud, Carousel, CarouselBtn, Breadcrumbs, DemoNote });
