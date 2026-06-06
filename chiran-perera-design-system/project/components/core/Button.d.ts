import * as React from "react";

/**
 * Sharp monochrome action button.
 *
 * @startingPoint section="Core" subtitle="Solid / outline / ghost / accent button" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** @default "solid" */
  variant?: "solid" | "outline" | "ghost" | "accent";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Append a → that nudges on hover. @default false */
  arrow?: boolean;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonProps): JSX.Element;
