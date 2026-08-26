import * as React from "react";

/** Quantity stepper: pill, 2px peach-400 border, tabular-nums value. Replaces the "в корзину" button once an item is in the cart. */
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  /** md = 40px (default), sm = 36px for cart drawer rows */
  size?: "md" | "sm";
}

export declare function Stepper(props: StepperProps): JSX.Element;
