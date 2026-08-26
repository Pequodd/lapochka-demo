import React from "react";
import { Icon } from "../core/Icon.jsx";

const NAV = ["каталог", "наборы", "о бренде", "где купить", "контакты"];

export function Header({ variant = "filled", scrolled = false, city = "Москва", cartCount = 0, active = "каталог", onCartClick, onNavigate, style, ...rest }) {
  const transparent = variant === "transparent" && !scrolled;
  const h = scrolled ? 64 : 80;
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        height: h,
        background: transparent ? "transparent" : "var(--blush-100)",
        boxShadow: transparent ? "none" : "var(--elevation-sticky)",
        transition: "height var(--dur-base) var(--ease-base), background-color var(--dur-base) var(--ease-base)",
        fontFamily: "var(--font-core)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", height: "100%", padding: "0 var(--page-margin)", display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("главная"); }}
          style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--coral-600)", textDecoration: "none", flex: "none" }}>
          lapochka
        </a>
        <nav style={{ flex: 1, display: "flex", justifyContent: "center", gap: "var(--space-8)" }}>
          {NAV.map((n) => (
            <NavLink key={n} label={n} active={n === active} onClick={() => onNavigate && onNavigate(n)} />
          ))}
        </nav>
        <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
          <button type="button" style={iconBtn}>
            <Icon name="map-pin" size={18} color="var(--ink-700)" />
            <span style={{ fontSize: "var(--body-s-size)", fontWeight: 500, color: "var(--ink-700)" }}>{city}</span>
          </button>
          <button type="button" aria-label="поиск" style={iconBtn}><Icon name="search" size={20} color="var(--ink-900)" /></button>
          <button type="button" aria-label="корзина" onClick={onCartClick} style={{ ...iconBtn, position: "relative" }}>
            <Icon name="shopping-bag" size={22} color="var(--ink-900)" />
            {cartCount > 0 && (
              <span style={{ position: "absolute", top: -6, right: -8, minWidth: 20, height: 20, padding: "0 5px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--coral-700)", color: "var(--white)", borderRadius: "var(--radius-pill)", fontSize: 12, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

const iconBtn = { display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: 0, padding: 0, cursor: "pointer" };

function NavLink({ label, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: "var(--body-m-size)",
        fontWeight: active ? 700 : 500,
        color: active || hover ? "var(--coral-700)" : "var(--ink-900)",
        textDecoration: "none",
        borderBottom: "2px solid " + (active ? "var(--coral-600)" : "transparent"),
        paddingBottom: 2,
        transition: "color var(--dur-fast) var(--ease-fast)",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );
}
