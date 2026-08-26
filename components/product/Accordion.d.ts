import * as React from "react";

/** Product-page accordion — состав / пищевая ценность / доставка и оплата. 2px blush-200 dividers, plus icon rotates into a minus. */
export interface AccordionItem {
  /** lowercase Russian heading, heading-m */
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
  /** index open on mount; -1 for all closed. Default 0. */
  defaultOpen?: number;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
