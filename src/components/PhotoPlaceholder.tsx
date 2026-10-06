import React from "react";
import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Photo Placeholder — replaces stock/AI photography with a branded surface
// (gold survey-grid pattern + faint roof mark on a navy gradient)
// ─────────────────────────────────────────────────────────────────────────────
export function PhotoPlaceholder({
  style, fill = true, patternId,
}: { style?: React.CSSProperties; fill?: boolean; patternId: string }) {
  return (
    <div
      style={{
        position: fill ? "absolute" : "relative",
        inset: fill ? 0 : undefined,
        width: "100%", height: "100%",
        background: `linear-gradient(135deg, #16314E 0%, ${T.navy} 48%, ${T.navyDeep} 100%)`,
        overflow: "hidden",
        display: "block",
        ...style,
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="54" height="54" patternUnits="userSpaceOnUse">
            <path d="M0 0H54M0 0V54" stroke={T.gold} strokeWidth="1" opacity="0.10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <svg
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "46%", opacity: 0.14 }}
      >
        <path d="M10 70 L50 25 L90 70" fill="none" stroke={T.gold} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="25" r="3" fill={T.gold} />
      </svg>
    </div>
  );
}
