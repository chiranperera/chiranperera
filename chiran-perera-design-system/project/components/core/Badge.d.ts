import * as React from "react";

/** Status capsule — availability / state marker with a glowing dot. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "open" */
  status?: "open" | "busy" | "neutral";
}

export function Badge(props: BadgeProps): JSX.Element;
