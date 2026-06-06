import * as React from "react";

/** Mono kicker above a heading, or a vertical side-rail label. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Show the leading accent dot. @default false */
  dot?: boolean;
  /** Rotate for a vertical rail. @default false */
  vertical?: boolean;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
