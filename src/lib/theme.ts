import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Viewport Context — drives responsive layouts
// ─────────────────────────────────────────────────────────────────────────────
export const ViewportCtx = React.createContext({ w: 1440 });
export function useVP() {
  const { w } = React.useContext(ViewportCtx);
  return {
    w,
    isMobile:  w < 768,
    isTablet:  w >= 768 && w < 1024,
    isDesktop: w >= 1024,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Design Tokens
// ─────────────────────────────────────────────────────────────────────────────
export const T = {
  gold:        "#C1992E",
  goldDark:    "#9C7A24",
  goldMid:     "rgba(193,153,46,0.75)",
  goldFaint:   "rgba(193,153,46,0.16)",
  navy:        "#102A42",
  navyDeep:    "#07131F",
  ivory:       "#F8F5EF",
  white:       "#FFFFFF",
  textMuted:   "rgba(255,255,255,0.72)",
  textBody:    "rgba(255,255,255,0.86)",
  cardBg:      "rgba(255,255,255,0.97)",
  cardShadow:  "0 16px 56px rgba(7,19,31,0.18), 0 2px 10px rgba(7,19,31,0.07)",
  gray:        "#5B6B82",
  grayLight:   "#94A1B5",
  completed:   "#3E6354",
  completedFaint: "rgba(62,99,84,0.14)",
  serif:       "'Playfair Display', Georgia, serif",
  sans:        "'Manrope', system-ui, sans-serif",
  radius:      "12px",
  radiusSm:    "6px",
  radiusBtn:   "5px",
  radiusFull:  "9999px",
};
