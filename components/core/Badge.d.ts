import * as React from "react";

/** Small uppercase caption pill. Status badges sit on the card image; line badges name the product line. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** status: new | hit | sale | soon — line: classic | retro | water | collab */
  tone?: "new" | "hit" | "sale" | "soon" | "classic" | "retro" | "water" | "collab";
  /** overrides the tone's default Russian label */
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
