import * as React from "react";

/** Intentional addition: renders real brand imagery when `src` is given, otherwise a labelled surface naming what belongs there. */
export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Russian caption naming what belongs here — becomes the img alt when `src` is set */
  label?: string;
  /** path to a real image, e.g. "assets/cans/grapefruit-lemon.png" */
  src?: string;
  /** object-fit for the image; "contain" for can renders, "cover" for photography */
  fit?: "contain" | "cover";
  background?: string;
  radius?: string;
  /** CSS aspect-ratio, e.g. "1 / 1" */
  ratio?: string;
}

export declare function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;
