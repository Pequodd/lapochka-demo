import * as React from "react";

/** Filter chip used in the catalogue bar and in the offline "где купить" city row. */
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  /** when selected, fill with this product line's own colour instead of coral-700 */
  line?: "classic" | "retro" | "water" | "collab";
  /** optional item count rendered after the label */
  count?: number;
  children?: React.ReactNode;
}

export declare function Chip(props: ChipProps): JSX.Element;
