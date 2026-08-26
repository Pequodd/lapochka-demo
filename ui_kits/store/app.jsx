const A = window.LapochkaDesignSystem_c28f60;

function StoreApp({ start = "главная" }) {
  const [screen, setScreen] = React.useState(start);
  const [filterLine, setFilterLine] = React.useState("all");
  const [cart, setCart] = React.useState({});
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const add = (p, n) => {
    setCart((c) => ({ ...c, [p.id]: (c[p.id] || 0) + (n || 1) }));
    setToast("добавлено в корзину");
  };
  const setQty = (id, v) => setCart((c) => {
    const next = { ...c };
    if (v <= 0) delete next[id]; else next[id] = v;
    return next;
  });

  const navigate = (item, line) => {
    if (item === "каталог") { setFilterLine(line || "all"); setScreen("каталог"); }
    else if (item === "главная") setScreen("главная");
    else if (item === "наборы") { setFilterLine("all"); setScreen("каталог"); }
    else setScreen(item);
    window.scrollTo({ top: 0 });
  };

  const lines = Object.keys(cart).map((id) => {
    const p = window.LP_ALL.find((x) => x.id === id);
    return { id, name: p.name, price: p.price, quantity: cart[id], pack: "330 мл", image: p.img };
  });
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  const screens = {
    "главная": <HomeScreen cart={cart} onAdd={add} onQty={setQty} onNavigate={navigate} />,
    "каталог": <CatalogueScreen cart={cart} onAdd={add} onQty={setQty} initialLine={filterLine} onOpenProduct={() => { setScreen("товар"); window.scrollTo({ top: 0 }); }} />,
    "товар": <ProductScreen cart={cart} onAdd={add} onQty={setQty} onNavigate={navigate} />,
  };

  const active = screen === "товар" ? "каталог" : screen;

  return (
    <div style={{ width: 1440, margin: "0 auto", background: "var(--white)", minHeight: "100vh", position: "relative" }}>
      <A.Header variant={screen === "главная" && !scrolled ? "transparent" : "filled"} scrolled={scrolled}
        cartCount={count} active={active} onCartClick={() => setCartOpen(true)} onNavigate={navigate} />
      {screens[screen] || screens["главная"]}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 40 }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(32,32,32,.28)", opacity: cartOpen ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-base)", pointerEvents: cartOpen ? "auto" : "none" }} onClick={() => setCartOpen(false)} />
        <div style={{ pointerEvents: cartOpen ? "auto" : "none", height: "100%" }}>
          <A.CartDrawer open={cartOpen} items={lines} onClose={() => setCartOpen(false)}
            onQuantityChange={setQty} onCheckout={() => setToast("заказ оформлен — это демо")} />
        </div>
        <div style={{ pointerEvents: "auto" }}>
          <A.Toast open={!!toast} message={toast || "добавлено в корзину"} actionLabel="в корзину"
            onAction={() => { setToast(null); setCartOpen(true); }} style={{ position: "fixed" }} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { StoreApp });
