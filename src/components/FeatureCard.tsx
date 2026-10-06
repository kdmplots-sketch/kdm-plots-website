import React from "react";
import { T, useVP } from "@/lib/theme";
import { Ico } from "@/components/icons/NavIcons";
import { TiltCard } from "@/components/TiltCard";

// ─────────────────────────────────────────────────────────────────────────────
// Feature Column
// ─────────────────────────────────────────────────────────────────────────────
function FeatureCol({
  icon, title, sub, last = false, stacked = false,
}: { icon: React.ReactNode; title: string; sub: string; last?: boolean; stacked?: boolean }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "flex-start", gap: "13px",
        flex: 1,
        paddingRight: stacked || last ? 0 : "24px",
        marginRight: stacked || last ? 0 : "24px",
        borderRight: stacked || last ? "none" : "1px solid rgba(15,31,53,0.09)",
      }}
    >
      <div style={{ flexShrink: 0, marginTop: "1px" }}>{icon}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "12px", letterSpacing: "0.05em",
            textTransform: "uppercase", color: T.navy,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 400,
            fontSize: "11px", color: "#5B6B82",
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature Bar Card
// ─────────────────────────────────────────────────────────────────────────────
export const FEATURES = [
  { icon: <Ico.location />, title: "Prime Locations",         sub: "High Growth Corridors"       },
  { icon: <Ico.shield  />, title: "Secure Gated Community",  sub: "24×7 Safety & Security"      },
  { icon: <Ico.grid    />, title: "World-Class Amenities",   sub: "For a Better Lifestyle"       },
  { icon: <Ico.trend   />, title: "High Investment Value",   sub: "Great Appreciation Potential" },
];

export function FeatureCard() {
  const { isMobile } = useVP();
  return (
    <TiltCard
      maxTilt={isMobile ? 0 : 3}
      style={{
        flex: 1,
        background: T.cardBg,
        borderRadius: T.radius,
        boxShadow: T.cardShadow,
        display: isMobile ? "grid" : "flex",
        gridTemplateColumns: isMobile ? "1fr 1fr" : undefined,
        gap: isMobile ? "20px 16px" : undefined,
        alignItems: "center",
        padding: isMobile ? "20px" : "22px 28px",
      }}
    >
      {FEATURES.map((f, i) => (
        <FeatureCol
          key={f.title}
          icon={f.icon}
          title={f.title}
          sub={f.sub}
          last={i === FEATURES.length - 1}
          stacked={isMobile}
        />
      ))}
    </TiltCard>
  );
}
