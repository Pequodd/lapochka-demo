window.LP_DATA = {
  classic: [
    { id: "grape", img: "../../assets/cans/grapefruit-lemon.png", name: "грейпфрут + лимон", latin: "GRAPEFRUIT + LEMON", price: 149, badge: "hit" },
    { id: "guava", img: "../../assets/cans/guava-kaffir.png", name: "гуава + кафрский лайм", latin: "GUAVA + KAFFIR LIME", price: 149, badge: "new" },
    { id: "mango", img: "../../assets/cans/mango-chili.png", name: "манго + чили", latin: "MANGO + CHILLI", price: 149 },
    { id: "pine", img: "../../assets/cans/fizzy-riesling.png", name: "ананас + личи", latin: "PINEAPPLE + LYCHEE", price: 149 },
    { id: "melon", img: "../../assets/cans/melon-peppermint.png", name: "арбуз + мелисса", latin: "WATERMELON + LEMON BALM", price: 149 },
    { id: "dynya", img: "../../assets/cans/fizzy-rose.png", name: "дыня + мята", latin: "MELON + MINT", price: 149, outOfStock: true },
    { id: "rasp", img: "../../assets/cans/raspberry-pomegranate.png", name: "малина + гранат + ромашка", latin: "RASPBERRY + POMEGRANATE + CHAMOMILE", price: 149 },
    { id: "peach", img: "../../assets/cans/peach-verbena.png", name: "персик", latin: "PEACH", price: 149 },
    { id: "cola", img: "../../assets/cans/cherry-cola.png", name: "вишнёвая кола", latin: "CHERRY COLA", price: 149, badge: "new" },
    { id: "pear", img: "../../assets/cans/apple-schorle.png", name: "груша", latin: "PEAR", price: 149 }
  ],
  retro: [
    { id: "turgoyak", img: "../../assets/cans/christmas.png", name: "тургояк", latin: "TURGOYAK", price: 139 },
    { id: "tarhun", img: "../../assets/cans/tech-collab.png", name: "тархун", latin: "TARKHUN", price: 139, oldPrice: 169, badge: "sale" },
    { id: "kremsoda", img: "../../assets/cans/raspberry-mirage.png", name: "крем-сода", latin: "CREAM SODA", price: 139 }
  ],
  water: [
    { id: "wpeach", img: "../../assets/cans/peach-verbena.png", name: "персик + маракуйя", latin: "PEACH + PASSION FRUIT", price: 169, meta: "330 мл · с витамином B8" },
    { id: "wapple", img: "../../assets/cans/apple-schorle.png", name: "яблоко", latin: "APPLE", price: 169, meta: "330 мл · с CBD" }
  ],
  collab: [
    { id: "beglu", img: "../../assets/cans/fizzy-riesling.png", name: "lapochka × beglu — пребиотическая вода", latin: "PREBIOTIC WATER", price: 169, badge: "new" },
    { id: "lemcard", img: "../../assets/cans/guava-kaffir.png", name: "лимон + кардамон", latin: "LEMON + CARDAMOM", price: 169 },
    { id: "berg", img: "../../assets/cans/fizzy-rose.png", name: "бергамот + лаванда", latin: "BERGAMOT + LAVENDER", price: 169 }
  ],
  lines: [
    { id: "classic", img: "../../assets/cans/grapefruit-lemon.png", title: "классика", desc: "фруктовые вкусы, с которых всё началось", count: "10 вкусов", bg: "var(--blush-200)", ink: "var(--coral-700)" },
    { id: "retro", img: "../../assets/cans/christmas.png", title: "ретро", desc: "тургояк, тархун и крем-сода — как в детстве", count: "3 вкуса", bg: "var(--retro-bg)", ink: "var(--retro-ink)" },
    { id: "water", img: "../../assets/cans/apple-schorle.png", title: "water", desc: "функциональная вода с витаминами и CBD", count: "2 вкуса", bg: "var(--water-bg)", ink: "var(--water-ink)" },
    { id: "collab", img: "../../assets/cans/tech-collab.png", title: "коллабы", desc: "лимитированные серии с любимыми брендами", count: "3 вкуса", bg: "var(--collab-bg)", ink: "var(--collab-ink)" }
  ],
  cities: ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Новосибирск", "Краснодар"],
  retailers: ["ВкусВилл", "SPAR", "Перекрёсток", "Магнит", "METRO", "Лента", "Ашан"]
};
window.LP_ALL = [].concat(window.LP_DATA.classic.map(p => ({ ...p, line: "classic" })),
  window.LP_DATA.retro.map(p => ({ ...p, line: "retro" })),
  window.LP_DATA.water.map(p => ({ ...p, line: "water" })),
  window.LP_DATA.collab.map(p => ({ ...p, line: "collab" })));
