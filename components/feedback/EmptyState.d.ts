import * as React from "react";

/** Empty result state: bunny mascot, display-m heading in coral-600, one explanatory line, reset button. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  /** secondary-button label; pass null to hide */
  actionLabel?: string | null;
  onAction?: () => void;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;
