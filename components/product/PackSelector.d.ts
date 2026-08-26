import * as React from "react";

/** Segmented pack chooser: 1 / 6 / 12 банок, each showing the per-can price and the saving on packs of six and up. */
export interface PackOption {
  id: string;
  /** e.g. "6 банок" */
  label: string;
  /** per-can price in ₽ */
  perCan: number;
  /** uppercase saving line, e.g. "−11 %" — omit for the single can */
  saving?: string;
}

export interface PackSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: PackOption[];
  value?: string;
  onChange?: (id: string) => void;
}

export declare function PackSelector(props: PackSelectorProps): JSX.Element;
