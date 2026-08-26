import * as React from "react";

/** Product gallery: square image on blush-100 with a vertical strip of four thumbnails to its left. */
export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Russian captions for each view, e.g. ["банка спереди", "банка сзади", "состав на банке", "две банки в кадре"] */
  views?: string[];
  /** image paths, index-matched to `views`; missing entries fall back to a labelled surface */
  images?: string[];
}

export declare function Gallery(props: GalleryProps): JSX.Element;
