import * as React from "react";

/** Pill select — used for catalogue sorting and for the delivery city. Lowercase option labels. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  /** ink-500 label rendered to the left, e.g. "сортировка" */
  label?: string;
}

export declare function Select(props: SelectProps): JSX.Element;
