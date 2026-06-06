import * as React from "react";

/** A small technical chip / tag (Space Mono). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "default" */
  variant?: "default" | "solid" | "accent";
  /** Apply hover affordance. @default false */
  interactive?: boolean;
}

export function Tag(props: TagProps): JSX.Element;
