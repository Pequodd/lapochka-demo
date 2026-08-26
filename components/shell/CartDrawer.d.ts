import * as React from "react";

/** 420px right-hand cart panel: line items with steppers, subtotal, free-delivery progress, «Оформить». Empty state uses the bunny mascot. */
export interface CartLine {
  id: string;
  name: string;
  price: number;
  quantity: number;
  /** pack label, e.g. "6 банок" */
  pack?: string;
  /** can render for the 72px thumbnail */
  image?: string;
}

export interface CartDrawerProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  items?: CartLine[];
  /** free-delivery threshold in ₽ (1500 by default in copy) */
  freeFrom?: number;
  onClose?: () => void;
  onQuantityChange?: (id: string, value: number) => void;
  onCheckout?: () => void;
}

export declare function CartDrawer(props: CartDrawerProps): JSX.Element;
