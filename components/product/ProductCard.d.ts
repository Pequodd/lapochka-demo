import * as React from "react";

/**
 * The catalogue's central component: can image on a line-coloured surface, status
 * badge, Russian flavour name, meta line, then price + buy control.
 * @startingPoint section="Store" subtitle="Product card — default, in-cart, sale, out of stock" viewport="700x420"
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Russian flavour name, lowercase as written on the can, e.g. "грейпфрут + лимон" */
  name: string;
  /** can render, e.g. "assets/cans/grapefruit-lemon.png"; falls back to a labelled surface */
  image?: string;
  /** product line — sets the image surface colour */
  line?: "classic" | "retro" | "water" | "collab";
  price: number;
  /** struck-through previous price; renders the "скидка" story */
  oldPrice?: number;
  /** defaults to "330 мл · без сахара" */
  meta?: string;
  badge?: "new" | "hit" | "sale";
  /** > 0 replaces the button with a stepper (in-cart state) */
  quantity?: number;
  outOfStock?: boolean;
  onAdd?: () => void;
  onQuantityChange?: (value: number) => void;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
