import React from "react";
import { T, useVP } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Top Feature Item
// ─────────────────────────────────────────────────────────────────────────────
export function InvestFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
    >
      <div style={{
        width: "44px", height: "44px", borderRadius: "10px", flexShrink: 0,
        border: `1.5px solid rgba(193,153,46,${hov ? 0.8 : 0.45})`,
        background: hov ? T.goldFaint : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s ease",
        transform: hov ? "scale(1.08)" : "scale(1)",
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "12.5px", letterSpacing: "0.04em", color: T.navy, margin: 0, marginBottom: "4px" }}>{title}</p>
        <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#5B6B82", margin: 0, lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Timeline Milestone
// ─────────────────────────────────────────────────────────────────────────────
export function TimelineMilestone({
  icon, label, title, desc, delay, visible,
}: { icon: React.ReactNode; label: string; title: string; desc: string; delay: number; visible: boolean }) {
  const { isMobile } = useVP();
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {/* Icon bubble */}
      <div style={{
        width: "52px", height: "52px", borderRadius: "50%",
        border: `1.5px solid rgba(193,153,46,0.55)`,
        background: "rgba(193,153,46,0.10)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "14px", flexShrink: 0,
        boxShadow: "0 2px 12px rgba(193,153,46,0.15)",
      }}>
        {icon}
      </div>
      <span style={{ fontFamily: T.sans, fontWeight: 800, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: T.gold, marginBottom: "6px", display: "block" }}>{label}</span>
      <p style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "15px", color: T.navy, margin: 0, marginBottom: "6px", lineHeight: 1.25 }}>{title}</p>
      {/* On mobile each milestone has the full width to itself, so the text
          isn't squeezed into the narrow column the desktop row layout needs */}
      <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#5B6B82", margin: 0, lineHeight: 1.6, maxWidth: isMobile ? "260px" : "120px" }}>{desc}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Bottom Strip Card
// ─────────────────────────────────────────────────────────────────────────────
export function InvestStripCard({ icon, title, last = false }: { icon: React.ReactNode; title: string; last?: boolean }) {
  const { isMobile } = useVP();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: isMobile ? "0 0 33.333%" : 1, display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", gap: "12px", padding: isMobile ? "20px 8px" : "28px 20px",
        borderRight: last ? "none" : "1px solid rgba(15,31,53,0.07)",
        boxSizing: "border-box",
        transition: "background 0.25s",
        background: hov ? T.goldFaint : "transparent",
        cursor: "default",
      }}
    >
      <div style={{
        width: "44px", height: "44px", borderRadius: "50%",
        border: `1.5px solid rgba(193,153,46,${hov ? 0.7 : 0.35})`,
        background: hov ? "rgba(193,153,46,0.12)" : T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s",
        transform: hov ? "scale(1.1)" : "scale(1)",
      }}>
        {icon}
      </div>
      <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.10em", textTransform: "uppercase", color: T.navy, margin: 0, lineHeight: 1.35 }}>{title}</p>
    </div>
  );
}
