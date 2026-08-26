import * as React from "react";

/**
 * Pill button in three levels. `secondary` (transparent + 2px coral-600 border) is
 * the brand's native button; `primary` is the coral-700 fill used for the one
 * commit action per block.
 * @startingPoint section="Core" subtitle="Pill buttons in three levels, all states" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = coral-700 fill / secondary = outlined (brand default) / tertiary = text only */
  variant?: "primary" | "secondary" | "tertiary";
  /** md = 48px (default), sm = 40px */
  size?: "md" | "sm";
  disabled?: boolean;
  /** replaces the label with a spinner */
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
