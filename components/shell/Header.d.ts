import * as React from "react";

/**
 * Sticky store header. Transparent over the hero, blush-100 + sticky elevation once
 * scrolled; 80px tall, 64px after scroll. One of only two places a shadow is legal.
 * @startingPoint section="Store" subtitle="Sticky header — transparent and scrolled" viewport="700x180"
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** "transparent" only when the header sits over the hero image */
  variant?: "filled" | "transparent";
  /** true after the page scrolls: fills, shrinks to 64px, gains elevation */
  scrolled?: boolean;
  /** delivery city, e.g. "Москва" */
  city?: string;
  cartCount?: number;
  /** which nav item is current: каталог | наборы | о бренде | где купить | контакты */
  active?: string;
  onCartClick?: () => void;
  onNavigate?: (item: string) => void;
}

export declare function Header(props: HeaderProps): JSX.Element;
