import * as React from "react";

/**
 * Wavy boundary between two coloured sections — the brand's most recognisable
 * structural device. Use one at every junction between differently-coloured sections.
 * @startingPoint section="Structure" subtitle="Four wave boundary variants" viewport="700x300"
 */
export interface WaveDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 1 = long swell · 2 = double swell · 3 = counter-swell · 4 = scallop */
  variant?: 1 | 2 | 3 | 4;
  /** colour of the section above */
  above?: string;
  /** colour of the section below */
  below?: string;
  /** band height in px (96–160 typical) */
  height?: number;
  /** mirror the curve horizontally so adjacent dividers don't rhyme */
  flip?: boolean;
}

export declare function WaveDivider(props: WaveDividerProps): JSX.Element;
