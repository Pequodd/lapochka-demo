import * as React from "react";

/**
 * Running "lapochka lapochka lapochka" band in large ExtraBold, one tone lighter
 * than its background. Decorative only — pauses on hover, hidden from screen readers.
 * @startingPoint section="Structure" subtitle="Running brand-name band" viewport="700x160"
 */
export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  repeat?: number;
  background?: string;
  color?: string;
  /** font size in px — 96 on the home band, 120–160 in the footer */
  size?: number;
  height?: number;
  duration?: string;
}

export declare function Marquee(props: MarqueeProps): JSX.Element;
