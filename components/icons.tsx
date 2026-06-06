/* Thin geometric line icons (1.5–2px, 24px grid).
   Production swaps these 1:1 for Lucide names. */
import * as React from "react";

type IconProps = {
  s?: number;
  w?: number;
  fill?: string;
  children?: React.ReactNode;
} & React.SVGProps<SVGSVGElement>;

function SVG({ s = 18, w = 1.7, children, fill = "none", ...rest }: IconProps) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
      strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" {...rest}>{children}</svg>
  );
}

type GlyphProps = Omit<IconProps, "children">;

export const IArrow = (p: GlyphProps) => <SVG {...p}><path d="M5 12h14M13 6l6 6-6 6" /></SVG>;
export const IArrowUR = (p: GlyphProps) => <SVG {...p}><path d="M7 17 17 7M8 7h9v9" /></SVG>;
export const IArrowL = (p: GlyphProps) => <SVG {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></SVG>;
export const IPlay = (p: GlyphProps) => <SVG {...p} fill="currentColor" stroke="none"><path d="M8 5v14l11-7z" /></SVG>;
export const IPlus = (p: GlyphProps) => <SVG {...p}><path d="M12 5v14M5 12h14" /></SVG>;
export const IClose = (p: GlyphProps) => <SVG {...p}><path d="M6 6l12 12M18 6 6 18" /></SVG>;
