import React from "react";

/** Lucide glyph wrapper. The brand supplied no icon set, so Lapochka uses Lucide (2px stroke, round caps) from CDN. */
export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 2, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      window.lucide.createIcons({ nameAttr: "data-lucide", root: ref.current });
    }
  }, [name]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, color, strokeWidth, ...style }}
      {...rest}
    />
  );
}
