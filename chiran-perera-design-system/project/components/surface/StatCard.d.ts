import * as React from "react";

/** Big grotesque stat number over a mono uppercase label, split by a hairline. */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number, e.g. "50", "99". */
  value?: React.ReactNode;
  /** Accent fragment in the per-project colour, e.g. "+", "%". */
  accent?: React.ReactNode;
  /** Uppercase label below the number. */
  label?: React.ReactNode;
}

export function StatCard(props: StatCardProps): JSX.Element;
