import * as React from "react";

/** Intentional addition: wrapper for the Lucide glyph set (CDN), which stands in for an icon library the brand never supplied. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, e.g. "search" | "shopping-bag" | "map-pin" | "chevron-down" | "star" */
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export declare function Icon(props: IconProps): JSX.Element;
