import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Corner Botanical Decoration (SVG fern-style)
// ─────────────────────────────────────────────────────────────────────────────
export function CornerBotanical({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="120" height="120" viewBox="0 0 120 120" fill="none"
      style={{ opacity: 0.18, transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M10 110 Q30 70 60 60" stroke={T.gold} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 110 Q20 80 40 72" stroke={T.gold} strokeWidth="1" strokeLinecap="round"/>
      <path d="M10 110 Q15 88 35 85" stroke={T.gold} strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M60 60 Q80 45 100 20" stroke={T.gold} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M60 60 Q75 55 95 38" stroke={T.gold} strokeWidth="1" strokeLinecap="round"/>
      <path d="M60 60 Q70 60 88 52" stroke={T.gold} strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M40 80 Q50 65 60 60" stroke={T.gold} strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M25 92 Q38 78 45 72" stroke={T.gold} strokeWidth="0.6" strokeLinecap="round"/>
    </svg>
  );
}
