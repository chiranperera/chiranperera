import * as React from "react";

/**
 * Flat technical surface panel — hairline border, sharp corners.
 *
 * @startingPoint section="Surface" subtitle="Hairline spec-sheet panel" viewport="700x260"
 */
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Subtle hover (border brightens, faint lift). @default true */
  hoverable?: boolean;
  /** Stamp a mono index in the top-right, e.g. "01" or "01 / 05". */
  number?: React.ReactNode;
  /** Inner padding in px. @default 28 */
  padding?: number;
}

export function Panel(props: PanelProps): JSX.Element;
