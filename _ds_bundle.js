/* @ds-bundle: {"format":4,"namespace":"LapochkaDesignSystem_c28f60","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/core/ImagePlaceholder.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Stepper","sourcePath":"components/core/Stepper.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Accordion","sourcePath":"components/product/Accordion.jsx"},{"name":"Gallery","sourcePath":"components/product/Gallery.jsx"},{"name":"PackSelector","sourcePath":"components/product/PackSelector.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"CartDrawer","sourcePath":"components/shell/CartDrawer.jsx"},{"name":"Footer","sourcePath":"components/shell/Footer.jsx"},{"name":"Header","sourcePath":"components/shell/Header.jsx"},{"name":"Marquee","sourcePath":"components/structure/Marquee.jsx"},{"name":"WaveDivider","sourcePath":"components/structure/WaveDivider.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0de378e9989a","components/core/Button.jsx":"4e00fe373140","components/core/Chip.jsx":"3f62272cb94c","components/core/Icon.jsx":"af09c29891c5","components/core/ImagePlaceholder.jsx":"555892cca618","components/core/Select.jsx":"4a3f3892cfaf","components/core/Stepper.jsx":"39470c0263e6","components/feedback/EmptyState.jsx":"543998a7e2cc","components/feedback/Toast.jsx":"d5b6ed36929b","components/product/Accordion.jsx":"8266a706ac81","components/product/Gallery.jsx":"49a7bf0ad8ff","components/product/PackSelector.jsx":"67a8c61f2fc5","components/product/ProductCard.jsx":"368fbffce0bb","components/shell/CartDrawer.jsx":"f002974a69ae","components/shell/Footer.jsx":"5fbf9c582453","components/shell/Header.jsx":"52d1b6ecf8c5","components/structure/Marquee.jsx":"2269c61882d6","components/structure/WaveDivider.jsx":"de9bc40fb55d","ui_kits/store/CatalogueScreen.jsx":"a42d2627cbd4","ui_kits/store/HomeScreen.jsx":"875a12d00dd1","ui_kits/store/ProductScreen.jsx":"be3a53294f25","ui_kits/store/app.jsx":"ccc481291904","ui_kits/store/data.js":"01385641c68d","ui_kits/store/shared.jsx":"96201aff48e8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LapochkaDesignSystem_c28f60 = window.LapochkaDesignSystem_c28f60 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  new: {
    bg: "var(--coral-700)",
    fg: "var(--white)",
    border: "transparent",
    label: "новинка"
  },
  hit: {
    bg: "var(--peach-400)",
    fg: "var(--ink-700)",
    border: "transparent",
    label: "хит"
  },
  sale: {
    bg: "var(--ok)",
    fg: "var(--white)",
    border: "transparent",
    label: "скидка"
  },
  soon: {
    bg: "transparent",
    fg: "var(--ink-700)",
    border: "var(--peach-400)",
    label: "скоро вернётся"
  },
  classic: {
    bg: "var(--blush-200)",
    fg: "var(--coral-700)",
    border: "transparent",
    label: "классика"
  },
  retro: {
    bg: "var(--retro-bg)",
    fg: "var(--retro-ink)",
    border: "transparent",
    label: "ретро"
  },
  water: {
    bg: "var(--water-bg)",
    fg: "var(--water-ink)",
    border: "transparent",
    label: "water"
  },
  collab: {
    bg: "var(--collab-bg)",
    fg: "var(--collab-ink)",
    border: "transparent",
    label: "коллаб"
  }
};
function Badge({
  tone = "new",
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.new;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 24,
      padding: "0 12px",
      background: t.bg,
      color: t.fg,
      border: "2px solid " + t.border,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--caption-size)",
      fontWeight: "var(--caption-weight)",
      letterSpacing: "var(--caption-tracking)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children || t.label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  md: {
    height: 48,
    padding: "0 32px",
    font: 14
  },
  sm: {
    height: 40,
    padding: "0 24px",
    font: 14
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const off = disabled || loading;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-core)",
    fontSize: s.font,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 0,
    borderRadius: "var(--radius-pill)",
    border: "2px solid transparent",
    cursor: off ? "not-allowed" : "pointer",
    transition: "background-color var(--dur-fast) var(--ease-fast), color var(--dur-fast) var(--ease-fast), border-color var(--dur-fast) var(--ease-fast), transform var(--dur-fast) var(--ease-fast)",
    transform: active && !off ? "scale(.98)" : "none",
    whiteSpace: "nowrap"
  };
  const looks = {
    primary: {
      background: off ? "var(--peach-400)" : hover ? "var(--coral-600)" : "var(--coral-700)",
      color: off ? "var(--ink-500)" : "var(--white)",
      borderColor: "transparent"
    },
    secondary: {
      background: off ? "transparent" : hover ? "var(--coral-700)" : "transparent",
      color: off ? "var(--ink-500)" : hover ? "var(--white)" : "var(--coral-700)",
      borderColor: off ? "var(--peach-400)" : "var(--coral-600)"
    },
    tertiary: {
      background: "transparent",
      color: off ? "var(--ink-500)" : hover ? "var(--coral-600)" : "var(--coral-700)",
      borderColor: "transparent",
      padding: "0 8px",
      textDecoration: hover && !off ? "underline" : "none",
      textUnderlineOffset: 4
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: off,
    onClick: off ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...looks,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    light: variant === "primary"
  }) : children);
}
function Spinner({
  light
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: "2px solid " + (light ? "rgba(255,255,255,.35)" : "var(--peach-400)"),
      borderTopColor: light ? "var(--white)" : "var(--coral-700)",
      animation: "lp-spin .7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINES = {
  classic: {
    bg: "var(--coral-700)",
    fg: "var(--white)"
  },
  retro: {
    bg: "var(--retro-ink)",
    fg: "var(--white)"
  },
  water: {
    bg: "var(--water-ink)",
    fg: "var(--white)"
  },
  collab: {
    bg: "var(--collab-ink)",
    fg: "var(--white)"
  }
};
function Chip({
  selected = false,
  line,
  count,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sel = selected ? LINES[line] || {
    bg: "var(--coral-700)",
    fg: "var(--white)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "9px 18px",
      background: sel ? sel.bg : "var(--white)",
      color: sel ? sel.fg : "var(--coral-700)",
      border: "2px solid " + (sel ? sel.bg : hover ? "var(--coral-500)" : "var(--peach-400)"),
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-core)",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      cursor: "pointer",
      transition: "background-color var(--dur-fast) var(--ease-fast), border-color var(--dur-fast) var(--ease-fast), color var(--dur-fast) var(--ease-fast)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: sel ? .75 : .55,
      fontVariantNumeric: "tabular-nums"
    }
  }, count));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide glyph wrapper. The brand supplied no icon set, so Lapochka uses Lucide (2px stroke, round caps) from CDN. */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        root: ref.current
      });
    }
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      strokeWidth,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ImagePlaceholder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stands in for brand photography that was not supplied with the brief. */
function ImagePlaceholder({
  label = "изображение",
  src,
  fit = "contain",
  background = "var(--blush-100)",
  radius = "var(--radius-lg)",
  ratio,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": label,
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: ratio,
      background,
      borderRadius: radius,
      overflow: "hidden",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    style: {
      width: "100%",
      height: "100%",
      objectFit: fit,
      objectPosition: "center",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--caption-size)",
      fontWeight: "var(--caption-weight)",
      letterSpacing: "var(--caption-tracking)",
      textTransform: "uppercase",
      color: "var(--ink-500)",
      textAlign: "center",
      padding: "0 16px",
      textWrap: "balance"
    }
  }, label));
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  value,
  onChange,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-s-size)",
      color: "var(--ink-500)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: "none",
      height: 40,
      padding: "0 40px 0 16px",
      background: "var(--white)",
      border: "2px solid " + (hover ? "var(--coral-500)" : "var(--peach-400)"),
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-s-size)",
      fontWeight: 600,
      color: "var(--ink-900)",
      cursor: "pointer",
      transition: "border-color var(--dur-fast) var(--ease-fast)"
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      display: "inline-flex",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--coral-700)"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const h = size === "sm" ? 36 : 40;
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: h,
      border: "2px solid var(--peach-400)",
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Step, {
    label: "\u2212",
    onClick: () => set(value - 1),
    disabled: value <= min,
    h: h
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 32,
      textAlign: "center",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--ink-900)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), /*#__PURE__*/React.createElement(Step, {
    label: "+",
    onClick: () => set(value + 1),
    disabled: value >= max,
    h: h
  }));
}
function Step({
  label,
  onClick,
  disabled,
  h
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label === "+" ? "добавить" : "убрать",
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: h - 4,
      height: h - 4,
      border: 0,
      background: "transparent",
      borderRadius: "50%",
      color: disabled ? "var(--ink-500)" : hover ? "var(--coral-600)" : "var(--coral-700)",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "color var(--dur-fast) var(--ease-fast)"
    }
  }, label);
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  title = "ничего не нашлось",
  description = "попробуйте убрать фильтры — вкусов у нас всё равно 24",
  actionLabel = "сбросить фильтры",
  onAction,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)",
      padding: "96px 24px",
      textAlign: "center",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    label: "\u0437\u0430\u0439\u0447\u0438\u043A-\u043B\u0430\u043F\u043E\u0447\u043A\u0430 \xB7 \u043C\u0430\u0441\u043A\u043E\u0442",
    background: "var(--blush-200)",
    style: {
      width: 220,
      height: 220
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--display-m-size)",
      lineHeight: "var(--display-m-lh)",
      fontWeight: 800,
      letterSpacing: "var(--display-m-tracking)",
      color: "var(--coral-600)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontSize: "var(--body-l-size)",
      lineHeight: "var(--body-l-lh)",
      color: "var(--ink-700)"
    }
  }, description), actionLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onAction
  }, actionLabel));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  open = false,
  message = "добавлено в корзину",
  actionLabel,
  onAction,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      position: "absolute",
      right: 32,
      bottom: 32,
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 52,
      padding: "0 12px 0 24px",
      background: "var(--ink-900)",
      color: "var(--white)",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-m-size)",
      fontWeight: 600,
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0)" : "translateY(12px)",
      transition: "opacity var(--dur-base) var(--ease-base), transform var(--dur-base) var(--ease-base)",
      pointerEvents: open ? "auto" : "none",
      zIndex: 60,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-bag",
    size: 18,
    color: "var(--white)"
  }), /*#__PURE__*/React.createElement("span", null, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      height: 36,
      padding: "0 18px",
      background: "var(--white)",
      color: "var(--ink-900)",
      border: 0,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-s-size)",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/product/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-core)",
      borderTop: "2px solid var(--blush-200)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "2px solid var(--blush-200)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        padding: "24px 0",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--heading-m-size)",
        lineHeight: "var(--heading-m-lh)",
        fontWeight: "var(--heading-m-weight)",
        color: "var(--ink-900)"
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: "none",
        width: 20,
        height: 20,
        position: "relative",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform var(--dur-base) var(--ease-base)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        top: 9,
        left: 0,
        width: 20,
        height: 2,
        background: "var(--coral-700)"
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        left: 9,
        top: 0,
        width: 2,
        height: 20,
        background: "var(--coral-700)",
        opacity: isOpen ? 0 : 1,
        transition: "opacity var(--dur-base) var(--ease-base)"
      }
    }))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24,
        maxWidth: 720,
        fontSize: "var(--body-m-size)",
        lineHeight: "var(--body-m-lh)",
        fontWeight: "var(--body-m-weight)",
        color: "var(--ink-700)"
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/product/Gallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Gallery({
  views = [],
  images = [],
  style,
  ...rest
}) {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-4)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: "none"
    }
  }, views.map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": v,
    onClick: () => setActive(i),
    style: {
      width: 88,
      height: 88,
      padding: 0,
      border: "2px solid " + (i === active ? "var(--coral-600)" : "transparent"),
      borderRadius: "var(--radius-md)",
      background: "var(--blush-100)",
      cursor: "pointer",
      overflow: "hidden",
      transition: "border-color var(--dur-fast) var(--ease-fast)"
    }
  }, images[i] ? /*#__PURE__*/React.createElement("img", {
    src: images[i],
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
      padding: 6,
      boxSizing: "border-box"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      background: i === active ? "var(--white)" : "var(--blush-100)"
    }
  })))), /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    src: images[active],
    label: views[active] || "изображение товара",
    radius: "var(--radius-lg)",
    background: "var(--blush-100)",
    ratio: "1 / 1",
    style: {
      flex: 1
    }
  }));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/product/PackSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PackSelector({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), options.map(o => {
    const sel = o.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      type: "button",
      role: "radio",
      "aria-checked": sel,
      onClick: () => onChange && onChange(o.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
        padding: "14px 18px",
        background: sel ? "var(--blush-100)" : "var(--white)",
        border: "2px solid " + (sel ? "var(--coral-600)" : "var(--peach-400)"),
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        textAlign: "left",
        transition: "border-color var(--dur-fast) var(--ease-fast), background-color var(--dur-fast) var(--ease-fast)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: "var(--ink-900)"
      }
    }, o.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--body-s-size)",
        fontWeight: 500,
        color: "var(--ink-500)",
        fontVariantNumeric: "tabular-nums"
      }
    }, o.perCan, " \u20BD / \u0431\u0430\u043D\u043A\u0430"), o.saving ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--caption-size)",
        fontWeight: 600,
        letterSpacing: "var(--caption-tracking)",
        textTransform: "uppercase",
        color: "var(--ok)"
      }
    }, o.saving) : null);
  }));
}
Object.assign(__ds_scope, { PackSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PackSelector.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINE_BG = {
  classic: "var(--blush-100)",
  retro: "var(--retro-bg)",
  water: "var(--water-bg)",
  collab: "var(--collab-bg)"
};
function ProductCard({
  name,
  image,
  line = "classic",
  price,
  oldPrice,
  meta = "330 мл · без сахара",
  badge,
  quantity = 0,
  outOfStock = false,
  onAdd,
  onQuantityChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = hover && !outOfStock;
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      height: "100%",
      boxSizing: "border-box",
      padding: "var(--space-4)",
      background: "var(--white)",
      border: "2px solid " + (lifted ? "var(--coral-600)" : "transparent"),
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-core)",
      transform: lifted ? "translateY(-6px)" : "none",
      transition: "transform var(--dur-base) var(--ease-base), border-color var(--dur-fast) var(--ease-fast)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    src: image,
    label: "банка · " + name,
    radius: "var(--radius-md)",
    background: lifted ? "var(--white)" : LINE_BG[line],
    style: {
      height: 240,
      opacity: outOfStock ? 0.55 : 1,
      transition: "background-color var(--dur-base) var(--ease-base)"
    }
  }), (badge || outOfStock) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: outOfStock ? "soon" : badge
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--heading-s-size)",
      lineHeight: "var(--heading-s-lh)",
      fontWeight: "var(--heading-s-weight)",
      color: "var(--ink-900)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--body-s-size)",
      lineHeight: "var(--body-s-lh)",
      fontWeight: "var(--body-s-weight)",
      color: "var(--ink-500)"
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--price-m-size)",
      lineHeight: "var(--price-m-lh)",
      fontWeight: "var(--price-m-weight)",
      color: "var(--ink-900)",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, price, " \u20BD"), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-s-size)",
      fontWeight: "var(--price-old-weight)",
      color: "var(--ink-500)",
      textDecoration: "line-through",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, oldPrice, " \u20BD")), outOfStock ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    disabled: true
  }, "\u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438") : quantity > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Stepper, {
    value: quantity,
    onChange: onQuantityChange
  }) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onAdd
  }, "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/shell/CartDrawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CartDrawer({
  open = false,
  items = [],
  freeFrom = 1500,
  onClose,
  onQuantityChange,
  onCheckout,
  style,
  ...rest
}) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  return /*#__PURE__*/React.createElement("aside", _extends({
    "aria-hidden": !open,
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 420,
      height: "100%",
      background: "var(--white)",
      boxShadow: "var(--elevation-sticky)",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform var(--dur-base) var(--ease-base)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-core)",
      zIndex: 40,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px 24px 16px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--heading-m-size)",
      fontWeight: "var(--heading-m-weight)",
      color: "var(--ink-900)"
    }
  }, "\u043A\u043E\u0440\u0437\u0438\u043D\u0430"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0437\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 22,
    color: "var(--ink-700)"
  }))), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-4)",
      padding: 32,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    label: "\u0437\u0430\u0439\u0447\u0438\u043A-\u043B\u0430\u043F\u043E\u0447\u043A\u0430 \xB7 \u043C\u0430\u0441\u043A\u043E\u0442",
    background: "var(--blush-100)",
    style: {
      width: 180,
      height: 180,
      borderRadius: "var(--radius-lg)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--heading-s-size)",
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, "\u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--body-m-size)",
      color: "var(--ink-700)"
    }
  }, "\u0437\u0430\u0439\u0447\u0438\u043A \u0436\u0434\u0451\u0442, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0432\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u043A\u0443\u0441\u044B"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onClose
  }, "\u043A \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 24px",
      display: "flex",
      flexDirection: "column"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      padding: "16px 0",
      borderBottom: "2px solid var(--blush-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 72,
      height: 72,
      flex: "none",
      background: "var(--blush-100)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      display: "block"
    }
  }, it.image && /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-m-size)",
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-s-size)",
      color: "var(--ink-500)"
    }
  }, it.pack || "330 мл"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stepper, {
    size: "sm",
    value: it.quantity,
    onChange: v => onQuantityChange && onQuantityChange(it.id, v)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--price-m-size)",
      fontWeight: 700,
      color: "var(--ink-900)",
      fontVariantNumeric: "tabular-nums"
    }
  }, it.price * it.quantity, " \u20BD")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      background: "var(--blush-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-m-size)",
      color: "var(--ink-700)"
    }
  }, "\u0418\u0442\u043E\u0433\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--price-l-size)",
      fontWeight: 700,
      color: "var(--ink-900)",
      fontVariantNumeric: "tabular-nums"
    }
  }, subtotal, " \u20BD")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--body-s-size)",
      color: subtotal >= freeFrom ? "var(--ok)" : "var(--ink-500)"
    }
  }, subtotal >= freeFrom ? "Доставка бесплатно" : "До бесплатной доставки " + (freeFrom - subtotal) + " ₽"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    onClick: onCheckout
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"))));
}
Object.assign(__ds_scope, { CartDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// components/shell/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NAV = ["каталог", "наборы", "о бренде", "где купить", "контакты"];
function Header({
  variant = "filled",
  scrolled = false,
  city = "Москва",
  cartCount = 0,
  active = "каталог",
  onCartClick,
  onNavigate,
  style,
  ...rest
}) {
  const transparent = variant === "transparent" && !scrolled;
  const h = scrolled ? 64 : 80;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      height: h,
      background: transparent ? "transparent" : "var(--blush-100)",
      boxShadow: transparent ? "none" : "var(--elevation-sticky)",
      transition: "height var(--dur-base) var(--ease-base), background-color var(--dur-base) var(--ease-base)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      height: "100%",
      padding: "0 var(--page-margin)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("главная");
    },
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--coral-600)",
      textDecoration: "none",
      flex: "none"
    }
  }, "lapochka"), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-8)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n,
    label: n,
    active: n === active,
    onClick: () => onNavigate && onNavigate(n)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--ink-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-s-size)",
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, city)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u043F\u043E\u0438\u0441\u043A",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: "var(--ink-900)"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u043A\u043E\u0440\u0437\u0438\u043D\u0430",
    onClick: onCartClick,
    style: {
      ...iconBtn,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-bag",
    size: 22,
    color: "var(--ink-900)"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -6,
      right: -8,
      minWidth: 20,
      height: 20,
      padding: "0 5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--coral-700)",
      color: "var(--white)",
      borderRadius: "var(--radius-pill)",
      fontSize: 12,
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, cartCount)))));
}
const iconBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  background: "transparent",
  border: 0,
  padding: 0,
  cursor: "pointer"
};
function NavLink({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: "var(--body-m-size)",
      fontWeight: active ? 700 : 500,
      color: active || hover ? "var(--coral-700)" : "var(--ink-900)",
      textDecoration: "none",
      borderBottom: "2px solid " + (active ? "var(--coral-600)" : "transparent"),
      paddingBottom: 2,
      transition: "color var(--dur-fast) var(--ease-fast)",
      whiteSpace: "nowrap"
    }
  }, label);
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/Header.jsx", error: String((e && e.message) || e) }); }

// components/structure/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Marquee({
  text = "lapochka",
  repeat = 12,
  background = "var(--peach-400)",
  color = "var(--coral-600)",
  size = 96,
  height = 120,
  duration = "var(--marquee-duration)",
  style,
  ...rest
}) {
  const items = Array.from({
    length: repeat
  }, (_, i) => text);
  const run = key => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      display: "flex",
      gap: 48,
      paddingRight: 48,
      flex: "none"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: size,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color,
      whiteSpace: "nowrap"
    }
  }, t)));
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    className: "lp-marquee",
    style: {
      height,
      background,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-display)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      animation: "lp-marquee " + duration + " linear infinite"
    }
  }, run("a"), run("b")));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/shell/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAILS = [{
  label: "info@lapochka.ru",
  note: "общие вопросы"
}, {
  label: "promo@lapochka.ru",
  note: "сотрудничество и промо"
}, {
  label: "sales@lapochka.ru",
  note: "оптовые заказы"
}];
const SOCIAL = ["telegram", "vk", "instagram*"];
const POLICY = ["политика конфиденциальности", "условия доставки", "публичная оферта"];
function Footer({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--peach-400)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "64px var(--page-margin) 48px",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 1fr",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--coral-700)"
    }
  }, "lapochka"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 300,
      fontSize: "var(--body-m-size)",
      lineHeight: "var(--body-m-lh)",
      color: "var(--ink-700)"
    }
  }, "\u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u043C\u043E\u043D\u0430\u0434 \u0431\u0435\u0437 \u0441\u0430\u0445\u0430\u0440\u0430. \u0432\u043E\u0434\u0430, \u0441\u043E\u043A \u0438 \u0433\u0430\u0437\u0430\u0446\u0438\u044F \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0438\u0447\u0435\u0433\u043E."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--body-m-size)",
      fontWeight: 700,
      color: "var(--coral-700)",
      textDecoration: "none",
      borderBottom: "2px solid var(--coral-600)",
      alignSelf: "flex-start",
      paddingBottom: 2
    }
  }, "\u0441\u0442\u0430\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, MAILS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + m.label,
    style: {
      fontSize: "var(--body-m-size)",
      fontWeight: 600,
      color: "var(--ink-900)",
      textDecoration: "none"
    }
  }, m.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-s-size)",
      color: "var(--ink-700)"
    }
  }, m.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, SOCIAL.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontSize: "var(--body-m-size)",
      fontWeight: 600,
      color: "var(--ink-900)",
      textDecoration: "none"
    }
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), POLICY.map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    style: {
      fontSize: "var(--body-s-size)",
      color: "var(--ink-700)",
      textDecoration: "none"
    }
  }, p)))), /*#__PURE__*/React.createElement(__ds_scope.Marquee, {
    background: "var(--peach-400)",
    color: "var(--coral-500)",
    size: 140,
    height: 170
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--page-margin) 32px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--body-s-size)",
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 lapochka"), /*#__PURE__*/React.createElement("span", null, "\u0426\u0435\u043D\u044B \u0432 \u0434\u0435\u043C\u043E \u2014 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/Footer.jsx", error: String((e && e.message) || e) }); }

// components/structure/WaveDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CURVES = {
  1: "M0,60 C240,110 480,10 720,40 C960,70 1200,120 1440,70 L1440,120 L0,120 Z",
  2: "M0,30 C180,90 360,90 540,50 C760,0 900,80 1080,90 C1240,98 1340,60 1440,30 L1440,120 L0,120 Z",
  3: "M0,90 C160,30 320,20 480,55 C660,95 800,105 960,70 C1120,35 1280,25 1440,60 L1440,120 L0,120 Z",
  4: "M0,50 C120,50 180,100 300,100 C420,100 480,50 600,50 C720,50 780,100 900,100 C1020,100 1080,50 1200,50 C1320,50 1380,100 1440,100 L1440,120 L0,120 Z"
};
function WaveDivider({
  variant = 1,
  above = "var(--peach-400)",
  below = "var(--white)",
  height = 120,
  flip = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: "100%",
      height,
      background: above,
      lineHeight: 0,
      transform: flip ? "scaleX(-1)" : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 120",
    preserveAspectRatio: "none",
    style: {
      display: "block",
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: CURVES[variant] || CURVES[1],
    fill: below
  })));
}
Object.assign(__ds_scope, { WaveDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/CatalogueScreen.jsx
try { (() => {
const C = window.LapochkaDesignSystem_c28f60;
const LINE_CHIPS = [{
  id: "all",
  label: "все"
}, {
  id: "classic",
  label: "классика",
  line: "classic"
}, {
  id: "retro",
  label: "ретро",
  line: "retro"
}, {
  id: "water",
  label: "water",
  line: "water"
}, {
  id: "collab",
  label: "коллабы",
  line: "collab"
}];
const ATTR_CHIPS = ["без кофеина", "новинки", "со скидкой"];
const SORTS = ["популярные", "сначала дешёвые", "сначала дорогие", "новинки"];
function CatalogueScreen({
  cart,
  onAdd,
  onQty,
  onOpenProduct,
  initialLine = "all"
}) {
  const [line, setLine] = React.useState(initialLine);
  const [attrs, setAttrs] = React.useState([]);
  const [sort, setSort] = React.useState(SORTS[0]);
  const [expanded, setExpanded] = React.useState(false);
  React.useEffect(() => setLine(initialLine), [initialLine]);
  let items = window.LP_ALL.filter(p => line === "all" || p.line === line);
  if (attrs.includes("новинки")) items = items.filter(p => p.badge === "new");
  if (attrs.includes("со скидкой")) items = items.filter(p => p.oldPrice);
  if (attrs.includes("без кофеина")) items = items.filter(p => p.id !== "cola");
  if (sort === "сначала дешёвые") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "сначала дорогие") items = [...items].sort((a, b) => b.price - a.price);
  if (sort === "новинки") items = [...items].sort((a, b) => (b.badge === "new") - (a.badge === "new"));
  const shown = expanded ? items : items.slice(0, 12);
  const toggleAttr = a => setAttrs(attrs.includes(a) ? attrs.filter(x => x !== a) : attrs.concat(a));
  const reset = () => {
    setLine("all");
    setAttrs([]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--blush-100)"
    }
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: ["главная", "каталог"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      margin: "32px 0 32px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 72,
      lineHeight: 1.05,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--coral-600)"
    }
  }, "\u0432\u043A\u0443\u0441\u044B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink-500)",
      paddingBottom: 10
    }
  }, "24 \u043F\u043E\u0437\u0438\u0446\u0438\u0438"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 64,
      zIndex: 15,
      background: "var(--blush-100)",
      boxShadow: "var(--elevation-sticky)",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement(Content, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, LINE_CHIPS.map(c => /*#__PURE__*/React.createElement(C.Chip, {
    key: c.id,
    selected: line === c.id,
    line: c.line,
    onClick: () => setLine(c.id)
  }, c.label)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 2,
      alignSelf: "stretch",
      background: "var(--blush-200)",
      margin: "0 4px"
    }
  }), ATTR_CHIPS.map(a => /*#__PURE__*/React.createElement(C.Chip, {
    key: a,
    selected: attrs.includes(a),
    onClick: () => toggleAttr(a)
  }, a))), /*#__PURE__*/React.createElement(C.Select, {
    label: "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
    value: sort,
    onChange: setSort,
    options: SORTS
  }))), /*#__PURE__*/React.createElement(Content, {
    style: {
      paddingTop: 48,
      paddingBottom: 96
    }
  }, shown.length === 0 ? /*#__PURE__*/React.createElement(C.EmptyState, {
    onAction: reset
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpenProduct(p.id),
    style: {
      cursor: "pointer",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(C.ProductCard, {
    name: p.name,
    image: p.img,
    line: p.line,
    price: p.price,
    oldPrice: p.oldPrice,
    badge: p.badge,
    meta: p.meta,
    outOfStock: p.outOfStock,
    quantity: cart[p.id] || 0,
    onAdd: () => onAdd(p),
    onQuantityChange: v => onQty(p.id, v)
  })))), !expanded && items.length > 12 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(C.Button, {
    variant: "secondary",
    onClick: () => setExpanded(true)
  }, "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451")), /*#__PURE__*/React.createElement(DemoNote, null, "\u0446\u0435\u043D\u044B \u0432 \u0434\u0435\u043C\u043E \u2014 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435: \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 149 \u20BD \xB7 \u0440\u0435\u0442\u0440\u043E 139 \u20BD \xB7 water 169 \u20BD"))), /*#__PURE__*/React.createElement(C.WaveDivider, {
    variant: 3,
    above: "var(--blush-100)",
    below: "var(--peach-400)",
    height: 120
  }), /*#__PURE__*/React.createElement(Section, {
    background: "var(--peach-400)",
    pad: 96
  }, /*#__PURE__*/React.createElement(Content, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 700,
      fontSize: 48,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.015em",
      color: "var(--coral-700)"
    }
  }, "\u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C? \u0441\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0431\u043E\u0440 \u0438\u0437 12 \u0431\u0430\u043D\u043E\u043A"), /*#__PURE__*/React.createElement(C.Button, null, "\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0431\u043E\u0440"))), /*#__PURE__*/React.createElement(C.Footer, null));
}
Object.assign(window, {
  CatalogueScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/CatalogueScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/HomeScreen.jsx
try { (() => {
const D = window.LapochkaDesignSystem_c28f60;
function HomeScreen({
  cart,
  onAdd,
  onQty,
  onNavigate
}) {
  const data = window.LP_DATA;
  const best = ["grape", "tarhun", "peach", "wpeach", "cola", "kremsoda"].map(id => window.LP_ALL.find(p => p.id === id));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 720,
      background: "var(--peach-400)",
      overflow: "hidden",
      marginTop: -80
    }
  }, /*#__PURE__*/React.createElement(Cloud, {
    w: 420,
    h: 260,
    top: 60,
    left: -80,
    opacity: .55
  }), /*#__PURE__*/React.createElement(Cloud, {
    w: 300,
    h: 180,
    top: 420,
    left: 180,
    opacity: .4
  }), /*#__PURE__*/React.createElement(Cloud, {
    w: 480,
    h: 300,
    top: 330,
    right: -80,
    opacity: .7
  }), /*#__PURE__*/React.createElement(Cloud, {
    w: 240,
    h: 150,
    top: 110,
    right: 320,
    opacity: .5
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 0,
      top: 40,
      height: "100%",
      width: 440,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 120,
      width: 420,
      height: 150,
      background: "var(--white)",
      borderRadius: "50%",
      opacity: .9
    }
  }), [{
    label: "грейпфрут + лимон",
    src: "../../assets/cans/grapefruit-lemon.png",
    rot: -9,
    x: -128,
    y: 10
  }, {
    label: "малина + гранат + ромашка",
    src: "../../assets/cans/raspberry-pomegranate.png",
    rot: 3,
    x: 0,
    y: -28
  }, {
    label: "манго + чили",
    src: "../../assets/cans/mango-chili.png",
    rot: 11,
    x: 128,
    y: 16
  }].map(c => /*#__PURE__*/React.createElement("img", {
    key: c.label,
    src: c.src,
    alt: c.label,
    style: {
      position: "absolute",
      width: 165,
      height: 400,
      objectFit: "contain",
      transform: "translate(" + c.x + "px," + c.y + "px) rotate(" + c.rot + "deg)"
    }
  }))), /*#__PURE__*/React.createElement(Content, {
    style: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 120,
      lineHeight: 1,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--coral-600)"
    }
  }, "100% \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u043C\u043E\u043D\u0430\u0434"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: 480,
      fontSize: 18,
      lineHeight: 1.55,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, "\u0431\u0435\u0437 \u0441\u0430\u0445\u0430\u0440\u0430, \u043A\u0440\u0430\u0441\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u043F\u043E\u0434\u0441\u043B\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u043E\u0434\u0430, \u0441\u043E\u043A \u0438 \u0433\u0430\u0437\u0430\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(D.Button, {
    onClick: () => onNavigate("наборы")
  }, "\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0431\u043E\u0440"), /*#__PURE__*/React.createElement(D.Button, {
    variant: "secondary",
    onClick: () => onNavigate("каталог")
  }, "\u0432\u0441\u0435 \u0432\u043A\u0443\u0441\u044B"))))), /*#__PURE__*/React.createElement(D.Marquee, {
    background: "var(--peach-400)",
    color: "var(--coral-600)",
    size: 96,
    height: 120
  }), /*#__PURE__*/React.createElement(D.WaveDivider, {
    variant: 1,
    above: "var(--peach-400)",
    below: "var(--white)",
    height: 120
  }), /*#__PURE__*/React.createElement(Section, {
    pad: 96
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(SectionHeading, null, "\u0447\u0435\u0442\u044B\u0440\u0435 \u043B\u0438\u043D\u0435\u0439\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, data.lines.map(l => /*#__PURE__*/React.createElement(LineCard, {
    key: l.id,
    line: l,
    onClick: () => onNavigate("каталог", l.id)
  }))))), /*#__PURE__*/React.createElement(Section, {
    pad: 96,
    background: "var(--white)"
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(SectionHeading, {
    right: /*#__PURE__*/React.createElement(D.Button, {
      variant: "tertiary",
      onClick: () => onNavigate("каталог")
    }, "\u0432\u0441\u0435 24 \u0432\u043A\u0443\u0441\u0430")
  }, "\u0431\u0435\u0440\u0443\u0442 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E"), /*#__PURE__*/React.createElement(Carousel, null, best.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      flex: "none",
      width: 282
    }
  }, /*#__PURE__*/React.createElement(D.ProductCard, {
    name: p.name,
    image: p.img,
    line: p.line,
    price: p.price,
    oldPrice: p.oldPrice,
    badge: p.badge,
    meta: p.meta,
    quantity: cart[p.id] || 0,
    onAdd: () => onAdd(p),
    onQuantityChange: v => onQty(p.id, v)
  })))))), /*#__PURE__*/React.createElement(D.WaveDivider, {
    variant: 2,
    above: "var(--white)",
    below: "var(--peach-400)",
    height: 120
  }), /*#__PURE__*/React.createElement(Section, {
    background: "var(--peach-400)",
    pad: 96
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 48,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.015em",
      color: "var(--coral-700)"
    }
  }, "\u0441\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043D\u0430\u0431\u043E\u0440"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 32px",
      maxWidth: 420,
      fontSize: 18,
      lineHeight: 1.55,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, "6 \u0438\u043B\u0438 12 \u0431\u0430\u043D\u043E\u043A, \u043B\u044E\u0431\u044B\u0435 \u0432\u043A\u0443\u0441\u044B, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043E\u0442 1500 \u20BD"), /*#__PURE__*/React.createElement(D.Button, {
    onClick: () => onNavigate("наборы")
  }, "\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0431\u043E\u0440"), /*#__PURE__*/React.createElement(DemoNote, null, "\u043D\u0430\u0431\u043E\u0440 6 \u2014 799 \u20BD \xB7 \u043D\u0430\u0431\u043E\u0440 12 \u2014 1490 \u20BD \xB7 \u0446\u0435\u043D\u044B \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 380,
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 0
    }
  }, ["cherry-cola", "melon-peppermint", "peach-verbena", "fizzy-rose"].map((f, i) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: "../../assets/cans/" + f + ".png",
    alt: "",
    style: {
      width: 130,
      height: 320,
      objectFit: "contain",
      marginLeft: i ? -28 : 0,
      transform: "rotate(" + [-6, -2, 2, 6][i] + "deg)"
    }
  })))))), /*#__PURE__*/React.createElement(D.WaveDivider, {
    variant: 3,
    above: "var(--peach-400)",
    below: "var(--white)",
    height: 120
  }), /*#__PURE__*/React.createElement(Section, {
    pad: 96
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(SectionHeading, null, "\u043F\u043E\u0447\u0435\u043C\u0443 \u0442\u0430\u043A\u0430\u044F \u0432\u043A\u0443\u0441\u043D\u0430\u044F \u0431\u0435\u0437 \u0441\u0430\u0445\u0430\u0440\u0430?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, [{
    t: "100% органика",
    d: "сок прямого отжима и растительные экстракты — без концентратов"
  }, {
    t: "0 г сахара",
    d: "сладость даёт экстракт стевии, а не сахар и не подсластители"
  }, {
    t: "состав из четырёх строк",
    d: "вода, сок, экстракт, газация. всё, что есть на банке"
  }].map(s => /*#__PURE__*/React.createElement(Stamp, {
    key: s.t,
    title: s.t,
    desc: s.d
  }))))), /*#__PURE__*/React.createElement(D.WaveDivider, {
    variant: 4,
    above: "var(--white)",
    below: "var(--blush-100)",
    height: 120
  }), /*#__PURE__*/React.createElement(Section, {
    background: "var(--blush-100)",
    pad: 96
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(SectionHeading, {
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: "var(--ink-700)"
      }
    }, "@lapochka.drinks")
  }, "\u043C\u044B \u043B\u044E\u0431\u0438\u043C \u0432\u0430\u0448\u0438 \u043E\u0442\u043C\u0435\u0442\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, ["на пикнике", "в кафе", "детский праздник", "офисный обед", "пляж", "домашний ужин", "велопрогулка", "полка холодильника"].map((c, i) => /*#__PURE__*/React.createElement(D.ImagePlaceholder, {
    key: c,
    label: "фото · " + c,
    background: "var(--white)",
    style: {
      height: 240,
      transform: "rotate(" + [-4, 3, -2, 5, 2, -5, 4, -3][i] + "deg)"
    }
  }))), /*#__PURE__*/React.createElement(Heart, {
    style: {
      position: "absolute",
      left: "44%",
      top: 190
    }
  }), /*#__PURE__*/React.createElement(Heart, {
    style: {
      position: "absolute",
      left: "70%",
      top: 200,
      fontSize: 88
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--blush-100)",
    pad: 96,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 8px",
      fontSize: 48,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.015em",
      color: "var(--coral-600)"
    }
  }, "\u0433\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u043E\u0444\u043B\u0430\u0439\u043D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, "\u0435\u0441\u043B\u0438 \u043D\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0436\u0434\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      marginBottom: 32
    }
  }, window.LP_DATA.cities.map((c, i) => /*#__PURE__*/React.createElement(D.Chip, {
    key: c,
    selected: i === 0
  }, c.toLowerCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 32,
      alignItems: "center"
    }
  }, window.LP_DATA.retailers.map(r => /*#__PURE__*/React.createElement("span", {
    key: r,
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: "var(--ink-500)"
    }
  }, r))), /*#__PURE__*/React.createElement(DemoNote, null, "\u043B\u043E\u0433\u043E\u0442\u0438\u043F\u044B \u0441\u0435\u0442\u0435\u0439 \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u2014 \u0437\u0434\u0435\u0441\u044C \u043E\u043D\u0438 \u043D\u0430\u0431\u0440\u0430\u043D\u044B \u0442\u0435\u043A\u0441\u0442\u043E\u043C"))), /*#__PURE__*/React.createElement(D.WaveDivider, {
    variant: 2,
    flip: true,
    above: "var(--blush-100)",
    below: "var(--peach-400)",
    height: 120
  }), /*#__PURE__*/React.createElement(D.Footer, null));
}
function LineCard({
  line,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 160px",
      gap: 16,
      alignItems: "center",
      textAlign: "left",
      padding: 32,
      background: line.bg,
      border: "2px solid " + (h ? line.ink : "transparent"),
      borderRadius: "var(--radius-lg)",
      cursor: "pointer",
      transform: h ? "translateY(-6px)" : "none",
      transition: "transform var(--dur-base) var(--ease-base), border-color var(--dur-fast) var(--ease-fast)",
      fontFamily: "var(--font-core)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: "-0.015em",
      color: line.ink
    }
  }, line.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 16px",
      fontSize: 16,
      lineHeight: 1.55,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, line.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: line.ink
    }
  }, line.count, " \u2192")), /*#__PURE__*/React.createElement(window.LapochkaDesignSystem_c28f60.ImagePlaceholder, {
    src: line.img,
    label: "банка · " + line.title,
    background: "var(--white)",
    style: {
      height: 220,
      borderRadius: "var(--radius-md)"
    }
  }));
}
function Stamp({
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      border: "2px solid var(--blush-200)",
      borderRadius: "var(--radius-lg)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(window.LapochkaDesignSystem_c28f60.ImagePlaceholder, {
    label: "марка · " + title,
    background: "var(--blush-100)",
    style: {
      height: 160,
      borderRadius: "var(--radius-md)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 16,
      lineHeight: 1.55,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, desc)));
}
function Heart({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontSize: 120,
      lineHeight: 1,
      color: "var(--peach-400)",
      ...style
    }
  }, "\u2665");
}
Object.assign(window, {
  HomeScreen,
  LineCard,
  Stamp,
  Heart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/ProductScreen.jsx
try { (() => {
const P = window.LapochkaDesignSystem_c28f60;
const PACKS = [{
  id: "1",
  label: "1 банка",
  perCan: 149
}, {
  id: "6",
  label: "6 банок",
  perCan: 133,
  saving: "−11 %"
}, {
  id: "12",
  label: "12 банок",
  perCan: 124,
  saving: "−17 %"
}];
const REVIEWS = [{
  name: "Аня",
  stars: 5,
  text: "взяла набор для дочки вместо соков — пьёт и не замечает, что без сахара. грейпфрут теперь дома не задерживается"
}, {
  name: "Сергей",
  stars: 5,
  text: "газация плотная, послевкусия от стевии почти нет. беру 12 банок раз в две недели"
}, {
  name: "Марина",
  stars: 4,
  text: "вкус отличный, но хотелось бы упаковку поменьше — 6 банок уходят за выходные"
}];
function ProductScreen({
  cart,
  onAdd,
  onQty,
  onNavigate
}) {
  const product = window.LP_ALL.find(p => p.id === "grape");
  const [pack, setPack] = React.useState("6");
  const [qty, setQty] = React.useState(cart[product.id] || 1);
  const also = ["peach", "cola", "tarhun", "wapple"].map(id => window.LP_ALL.find(p => p.id === id));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: ["главная", "каталог", "классика", "грейпфрут + лимон"]
  })), /*#__PURE__*/React.createElement(Content, {
    style: {
      paddingTop: 48,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(P.Gallery, {
    views: ["банка спереди", "банка сзади", "состав на банке", "две банки в кадре"],
    images: ["../../assets/cans/grapefruit-lemon.png", "../../assets/cans/grapefruit-lemon.png", "../../assets/cans/grapefruit-lemon.png", "../../assets/cans/grapefruit-lemon.png"]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(P.Badge, {
    tone: "classic"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "16px 0 4px",
      fontSize: 32,
      lineHeight: 1.2,
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, "\u0413\u0440\u0435\u0439\u043F\u0444\u0440\u0443\u0442 + \u043B\u0438\u043C\u043E\u043D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, "GRAPEFRUIT + LEMON"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, "330 \u043C\u043B \xB7 12 \u043A\u043A\u0430\u043B \u043D\u0430 100 \u043C\u043B \xB7 \u0431\u0435\u0437 \u0441\u0430\u0445\u0430\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      lineHeight: 1.1,
      fontWeight: 700,
      color: "var(--ink-900)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "149 \u20BD"), /*#__PURE__*/React.createElement(P.Badge, {
    tone: "hit"
  })), /*#__PURE__*/React.createElement(P.PackSelector, {
    value: pack,
    onChange: setPack,
    options: PACKS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(P.Stepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(P.Button, {
    fullWidth: true,
    onClick: () => onAdd(product, qty)
  }, "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: 24,
      background: "var(--blush-100)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, ["Доставим завтра по Москве", "Бесплатно от 1500 ₽", "Самовывоз из пункта выдачи"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 16,
      fontWeight: 500,
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(P.Icon, {
    name: "check",
    size: 18,
    color: "var(--ok)"
  }), t))), /*#__PURE__*/React.createElement(DemoNote, null, "\u0446\u0435\u043D\u0430 \u0432 \u0434\u0435\u043C\u043E \u2014 \u0443\u0441\u043B\u043E\u0432\u043D\u0430\u044F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(P.Accordion, {
    items: [{
      title: "состав",
      content: "вода питьевая, сок грейпфрута, сок лимона, экстракт стевии, натуральный ароматизатор, диоксид углерода"
    }, {
      title: "пищевая ценность",
      content: /*#__PURE__*/React.createElement(NutritionTable, null)
    }, {
      title: "доставка и оплата",
      content: "Доставим завтра по Москве, в другие города — от двух дней. Бесплатно от 1500 ₽. Оплата картой на сайте или при получении. Самовывоз из пункта выдачи — в день заказа."
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: 48
  }, "\u0441 \u044D\u0442\u0438\u043C \u0431\u0435\u0440\u0443\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, also.map(p => /*#__PURE__*/React.createElement(P.ProductCard, {
    key: p.id,
    name: p.name,
    image: p.img,
    line: p.line,
    price: p.price,
    oldPrice: p.oldPrice,
    badge: p.badge,
    meta: p.meta,
    quantity: cart[p.id] || 0,
    onAdd: () => onAdd(p),
    onQuantityChange: v => onQty(p.id, v)
  }))))), /*#__PURE__*/React.createElement(P.WaveDivider, {
    variant: 2,
    above: "var(--white)",
    below: "var(--peach-400)",
    height: 120
  }), /*#__PURE__*/React.createElement(Section, {
    background: "var(--peach-400)",
    pad: 96
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 72,
      lineHeight: 1.05,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--coral-700)"
    }
  }, "\u0447\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ink-700)"
    }
  }, "4,8 \u0438\u0437 5 \xB7 312 \u043E\u0442\u0437\u044B\u0432\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, REVIEWS.map((r, i) => /*#__PURE__*/React.createElement(ReviewBubble, {
    key: r.name,
    review: r,
    side: i % 2 === 0 ? "left" : "right"
  }))))), /*#__PURE__*/React.createElement(P.Footer, null));
}
function NutritionTable() {
  const rows = [["энергетическая ценность", "12 ккал / 50 кДж"], ["белки", "0 г"], ["жиры", "0 г"], ["углеводы", "2,9 г"], ["в том числе сахара", "0 г"]];
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      width: "100%",
      maxWidth: 520,
      fontFamily: "var(--font-core)"
    }
  }, /*#__PURE__*/React.createElement("caption", {
    style: {
      textAlign: "left",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink-500)",
      paddingBottom: 12
    }
  }, "\u043D\u0430 100 \u043C\u043B"), /*#__PURE__*/React.createElement("tbody", null, rows.map(([k, v]) => /*#__PURE__*/React.createElement("tr", {
    key: k
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 0",
      borderBottom: "2px solid var(--blush-200)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, k), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 0",
      borderBottom: "2px solid var(--blush-200)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--ink-900)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, v)))));
}
function ReviewBubble({
  review,
  side
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: side === "left" ? "flex-start" : "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      borderBottomLeftRadius: side === "left" ? 8 : 30,
      borderBottomRightRadius: side === "right" ? 8 : 30,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, review.name), /*#__PURE__*/React.createElement("span", {
    "aria-label": review.stars + " из 5",
    style: {
      display: "flex",
      gap: 2,
      fontSize: 15,
      lineHeight: 1
    }
  }, [1, 2, 3, 4, 5].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    "aria-hidden": "true",
    style: {
      color: s <= review.stars ? "var(--coral-700)" : "var(--blush-200)"
    }
  }, "\u2605")))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.55,
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, review.text)));
}
Object.assign(window, {
  ProductScreen,
  NutritionTable,
  ReviewBubble
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/app.jsx
try { (() => {
const A = window.LapochkaDesignSystem_c28f60;
function StoreApp({
  start = "главная"
}) {
  const [screen, setScreen] = React.useState(start);
  const [filterLine, setFilterLine] = React.useState("all");
  const [cart, setCart] = React.useState({});
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);
  const add = (p, n) => {
    setCart(c => ({
      ...c,
      [p.id]: (c[p.id] || 0) + (n || 1)
    }));
    setToast("добавлено в корзину");
  };
  const setQty = (id, v) => setCart(c => {
    const next = {
      ...c
    };
    if (v <= 0) delete next[id];else next[id] = v;
    return next;
  });
  const navigate = (item, line) => {
    if (item === "каталог") {
      setFilterLine(line || "all");
      setScreen("каталог");
    } else if (item === "главная") setScreen("главная");else if (item === "наборы") {
      setFilterLine("all");
      setScreen("каталог");
    } else setScreen(item);
    window.scrollTo({
      top: 0
    });
  };
  const lines = Object.keys(cart).map(id => {
    const p = window.LP_ALL.find(x => x.id === id);
    return {
      id,
      name: p.name,
      price: p.price,
      quantity: cart[id],
      pack: "330 мл",
      image: p.img
    };
  });
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const screens = {
    "главная": /*#__PURE__*/React.createElement(HomeScreen, {
      cart: cart,
      onAdd: add,
      onQty: setQty,
      onNavigate: navigate
    }),
    "каталог": /*#__PURE__*/React.createElement(CatalogueScreen, {
      cart: cart,
      onAdd: add,
      onQty: setQty,
      initialLine: filterLine,
      onOpenProduct: () => {
        setScreen("товар");
        window.scrollTo({
          top: 0
        });
      }
    }),
    "товар": /*#__PURE__*/React.createElement(ProductScreen, {
      cart: cart,
      onAdd: add,
      onQty: setQty,
      onNavigate: navigate
    })
  };
  const active = screen === "товар" ? "каталог" : screen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1440,
      margin: "0 auto",
      background: "var(--white)",
      minHeight: "100vh",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(A.Header, {
    variant: screen === "главная" && !scrolled ? "transparent" : "filled",
    scrolled: scrolled,
    cartCount: count,
    active: active,
    onCartClick: () => setCartOpen(true),
    onNavigate: navigate
  }), screens[screen] || screens["главная"], /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(32,32,32,.28)",
      opacity: cartOpen ? 1 : 0,
      transition: "opacity var(--dur-base) var(--ease-base)",
      pointerEvents: cartOpen ? "auto" : "none"
    },
    onClick: () => setCartOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: cartOpen ? "auto" : "none",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(A.CartDrawer, {
    open: cartOpen,
    items: lines,
    onClose: () => setCartOpen(false),
    onQuantityChange: setQty,
    onCheckout: () => setToast("заказ оформлен — это демо")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement(A.Toast, {
    open: !!toast,
    message: toast || "добавлено в корзину",
    actionLabel: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443",
    onAction: () => {
      setToast(null);
      setCartOpen(true);
    },
    style: {
      position: "fixed"
    }
  }))));
}
Object.assign(window, {
  StoreApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/data.js
try { (() => {
window.LP_DATA = {
  classic: [{
    id: "grape",
    img: "../../assets/cans/grapefruit-lemon.png",
    name: "грейпфрут + лимон",
    latin: "GRAPEFRUIT + LEMON",
    price: 149,
    badge: "hit"
  }, {
    id: "guava",
    img: "../../assets/cans/guava-kaffir.png",
    name: "гуава + кафрский лайм",
    latin: "GUAVA + KAFFIR LIME",
    price: 149,
    badge: "new"
  }, {
    id: "mango",
    img: "../../assets/cans/mango-chili.png",
    name: "манго + чили",
    latin: "MANGO + CHILLI",
    price: 149
  }, {
    id: "pine",
    img: "../../assets/cans/fizzy-riesling.png",
    name: "ананас + личи",
    latin: "PINEAPPLE + LYCHEE",
    price: 149
  }, {
    id: "melon",
    img: "../../assets/cans/melon-peppermint.png",
    name: "арбуз + мелисса",
    latin: "WATERMELON + LEMON BALM",
    price: 149
  }, {
    id: "dynya",
    img: "../../assets/cans/fizzy-rose.png",
    name: "дыня + мята",
    latin: "MELON + MINT",
    price: 149,
    outOfStock: true
  }, {
    id: "rasp",
    img: "../../assets/cans/raspberry-pomegranate.png",
    name: "малина + гранат + ромашка",
    latin: "RASPBERRY + POMEGRANATE + CHAMOMILE",
    price: 149
  }, {
    id: "peach",
    img: "../../assets/cans/peach-verbena.png",
    name: "персик",
    latin: "PEACH",
    price: 149
  }, {
    id: "cola",
    img: "../../assets/cans/cherry-cola.png",
    name: "вишнёвая кола",
    latin: "CHERRY COLA",
    price: 149,
    badge: "new"
  }, {
    id: "pear",
    img: "../../assets/cans/apple-schorle.png",
    name: "груша",
    latin: "PEAR",
    price: 149
  }],
  retro: [{
    id: "turgoyak",
    img: "../../assets/cans/christmas.png",
    name: "тургояк",
    latin: "TURGOYAK",
    price: 139
  }, {
    id: "tarhun",
    img: "../../assets/cans/tech-collab.png",
    name: "тархун",
    latin: "TARKHUN",
    price: 139,
    oldPrice: 169,
    badge: "sale"
  }, {
    id: "kremsoda",
    img: "../../assets/cans/raspberry-mirage.png",
    name: "крем-сода",
    latin: "CREAM SODA",
    price: 139
  }],
  water: [{
    id: "wpeach",
    img: "../../assets/cans/peach-verbena.png",
    name: "персик + маракуйя",
    latin: "PEACH + PASSION FRUIT",
    price: 169,
    meta: "330 мл · с витамином B8"
  }, {
    id: "wapple",
    img: "../../assets/cans/apple-schorle.png",
    name: "яблоко",
    latin: "APPLE",
    price: 169,
    meta: "330 мл · с CBD"
  }],
  collab: [{
    id: "beglu",
    img: "../../assets/cans/fizzy-riesling.png",
    name: "lapochka × beglu — пребиотическая вода",
    latin: "PREBIOTIC WATER",
    price: 169,
    badge: "new"
  }, {
    id: "lemcard",
    img: "../../assets/cans/guava-kaffir.png",
    name: "лимон + кардамон",
    latin: "LEMON + CARDAMOM",
    price: 169
  }, {
    id: "berg",
    img: "../../assets/cans/fizzy-rose.png",
    name: "бергамот + лаванда",
    latin: "BERGAMOT + LAVENDER",
    price: 169
  }],
  lines: [{
    id: "classic",
    img: "../../assets/cans/grapefruit-lemon.png",
    title: "классика",
    desc: "фруктовые вкусы, с которых всё началось",
    count: "10 вкусов",
    bg: "var(--blush-200)",
    ink: "var(--coral-700)"
  }, {
    id: "retro",
    img: "../../assets/cans/christmas.png",
    title: "ретро",
    desc: "тургояк, тархун и крем-сода — как в детстве",
    count: "3 вкуса",
    bg: "var(--retro-bg)",
    ink: "var(--retro-ink)"
  }, {
    id: "water",
    img: "../../assets/cans/apple-schorle.png",
    title: "water",
    desc: "функциональная вода с витаминами и CBD",
    count: "2 вкуса",
    bg: "var(--water-bg)",
    ink: "var(--water-ink)"
  }, {
    id: "collab",
    img: "../../assets/cans/tech-collab.png",
    title: "коллабы",
    desc: "лимитированные серии с любимыми брендами",
    count: "3 вкуса",
    bg: "var(--collab-bg)",
    ink: "var(--collab-ink)"
  }],
  cities: ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Новосибирск", "Краснодар"],
  retailers: ["ВкусВилл", "SPAR", "Перекрёсток", "Магнит", "METRO", "Лента", "Ашан"]
};
window.LP_ALL = [].concat(window.LP_DATA.classic.map(p => ({
  ...p,
  line: "classic"
})), window.LP_DATA.retro.map(p => ({
  ...p,
  line: "retro"
})), window.LP_DATA.water.map(p => ({
  ...p,
  line: "water"
})), window.LP_DATA.collab.map(p => ({
  ...p,
  line: "collab"
})));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/data.js", error: String((e && e.message) || e) }); }

// ui_kits/store/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.LapochkaDesignSystem_c28f60;
function Content({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 120px",
      boxSizing: "content-box",
      ...style
    }
  }, children);
}
function Section({
  background = "var(--white)",
  pad = 128,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background,
      padding: pad + "px 0",
      ...style
    }
  }, rest), children);
}
function SectionHeading({
  children,
  right,
  size = 72
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: size,
      lineHeight: 1.05,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--coral-600)",
      textWrap: "balance"
    }
  }, children), right);
}
function Cloud({
  w,
  h,
  top,
  left,
  right,
  bottom,
  opacity = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: w,
      height: h,
      top,
      left,
      right,
      bottom,
      background: "var(--white)",
      borderRadius: "50%",
      opacity
    }
  });
}
function Carousel({
  children
}) {
  const ref = React.useRef(null);
  const scroll = dir => ref.current && ref.current.scrollBy({
    left: dir * 588,
    behavior: "smooth"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "flex",
      gap: 24,
      overflowX: "auto",
      scrollbarWidth: "none",
      paddingBottom: 8
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(CarouselBtn, {
    dir: -1,
    onClick: () => scroll(-1)
  }), /*#__PURE__*/React.createElement(CarouselBtn, {
    dir: 1,
    onClick: () => scroll(1)
  })));
}
function CarouselBtn({
  dir,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dir < 0 ? "назад" : "вперёд",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: h ? "var(--coral-700)" : "transparent",
      border: "2px solid var(--coral-600)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color var(--dur-fast) var(--ease-fast)"
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: dir < 0 ? "chevron-left" : "chevron-right",
    size: 20,
    color: h ? "var(--white)" : "var(--coral-700)"
  }));
}
function Breadcrumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink-500)",
      paddingTop: 32
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === items.length - 1 ? "var(--ink-700)" : "var(--ink-500)"
    }
  }, it))));
}
function DemoNote({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, children);
}
Object.assign(window, {
  Content,
  Section,
  SectionHeading,
  Cloud,
  Carousel,
  CarouselBtn,
  Breadcrumbs,
  DemoNote
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.PackSelector = __ds_scope.PackSelector;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.CartDrawer = __ds_scope.CartDrawer;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.WaveDivider = __ds_scope.WaveDivider;

})();
