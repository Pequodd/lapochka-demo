import * as React from "react";

/** Confirmation pill, enters bottom-right, lives 4 seconds. ink-900 fill, white text — the only dark surface in the system. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** lowercase Russian message, e.g. "добавлено в корзину" */
  message?: string;
  /** optional white pill action, e.g. "в корзину" */
  actionLabel?: string;
  onAction?: () => void;
}

export declare function Toast(props: ToastProps): JSX.Element;
