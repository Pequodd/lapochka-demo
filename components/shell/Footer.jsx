import React from "react";
import { Marquee } from "../structure/Marquee.jsx";

const MAILS = [
  { label: "info@lapochka.ru", note: "общие вопросы" },
  { label: "promo@lapochka.ru", note: "сотрудничество и промо" },
  { label: "sales@lapochka.ru", note: "оптовые заказы" },
];
const SOCIAL = ["telegram", "vk", "instagram*"];
const POLICY = ["политика конфиденциальности", "условия доставки", "публичная оферта"];

export function Footer({ style, ...rest }) {
  return (
    <footer style={{ background: "var(--peach-400)", fontFamily: "var(--font-core)", ...style }} {...rest}>
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "64px var(--page-margin) 48px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "var(--space-12)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <span style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--coral-700)" }}>lapochka</span>
          <p style={{ margin: 0, maxWidth: 300, fontSize: "var(--body-m-size)", lineHeight: "var(--body-m-lh)", color: "var(--ink-700)" }}>
            натуральный лимонад без сахара. вода, сок и газация — больше ничего.
          </p>
          <a href="#" style={{ fontSize: "var(--body-m-size)", fontWeight: 700, color: "var(--coral-700)", textDecoration: "none", borderBottom: "2px solid var(--coral-600)", alignSelf: "flex-start", paddingBottom: 2 }}>стать партнёром</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {MAILS.map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
              <a href={"mailto:" + m.label} style={{ fontSize: "var(--body-m-size)", fontWeight: 600, color: "var(--ink-900)", textDecoration: "none" }}>{m.label}</a>
              <span style={{ fontSize: "var(--body-s-size)", color: "var(--ink-700)" }}>{m.note}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {SOCIAL.map((s) => (
            <a key={s} href="#" style={{ fontSize: "var(--body-m-size)", fontWeight: 600, color: "var(--ink-900)", textDecoration: "none" }}>{s}</a>
          ))}
          <div style={{ height: 8 }} />
          {POLICY.map((p) => (
            <a key={p} href="#" style={{ fontSize: "var(--body-s-size)", color: "var(--ink-700)", textDecoration: "none" }}>{p}</a>
          ))}
        </div>
      </div>
      <Marquee background="var(--peach-400)" color="var(--coral-500)" size={140} height={170} />
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "0 var(--page-margin) 32px", display: "flex", justifyContent: "space-between", fontSize: "var(--body-s-size)", color: "var(--ink-700)" }}>
        <span>© 2026 lapochka</span>
        <span>Цены в демо — условные</span>
      </div>
    </footer>
  );
}
