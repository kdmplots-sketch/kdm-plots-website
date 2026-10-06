import React from "react";
import { T, useVP } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Buying Process — Step item
// ─────────────────────────────────────────────────────────────────────────────
export function ProcessStep({
  num, icon, title, desc, visible, delay, last = false,
}: { num: string; icon: React.ReactNode; title: string; desc: string; visible: boolean; delay: number; last?: boolean }) {
  const { isMobile } = useVP();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1, display: "flex", flexDirection: isMobile ? "row" : "column",
        alignItems: isMobile ? "flex-start" : "center",
        textAlign: isMobile ? "left" : "center", position: "relative",
        gap: isMobile ? "16px" : "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Step number */}
      {!isMobile && (
        <span style={{
          fontFamily: T.serif, fontWeight: 800, fontSize: "52px", lineHeight: 1,
          color: `rgba(193,153,46,${hov ? 0.22 : 0.12})`,
          position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
          transition: "color 0.3s", userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}>{num}</span>
      )}

      {/* Icon bubble */}
      <div style={{
        width: "64px", height: "64px", borderRadius: "50%",
        border: `1.5px solid rgba(193,153,46,${hov ? 0.70 : 0.40})`,
        background: hov ? "rgba(193,153,46,0.12)" : T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: isMobile ? "0" : "18px", marginTop: isMobile ? "0" : "20px", flexShrink: 0,
        transition: "all 0.28s ease",
        transform: hov ? "scale(1.08)" : "scale(1)",
        boxShadow: hov ? "0 6px 24px rgba(193,153,46,0.22)" : "none",
        position: "relative", zIndex: 1,
      }}>
        {icon}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: isMobile ? "left" : "center" }}>
        <p style={{ fontFamily: T.sans, fontWeight: 800, fontSize: "10px", letterSpacing: "0.20em", textTransform: "uppercase", color: T.gold, margin: 0 }}>Step {num}</p>
        <p style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "16px", color: T.navy, margin: 0, marginBottom: "4px", lineHeight: 1.3 }}>{title}</p>
        <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", margin: 0, lineHeight: 1.65 }}>{desc}</p>
      </div>

      {/* Connector dot at right edge — hidden on last and on mobile */}
      {!last && !isMobile && (
        <div style={{
          position: "absolute", right: "-4px", top: "50px", width: "8px", height: "8px",
          borderRadius: "50%", background: T.gold, opacity: 0.5, zIndex: 2,
        }} />
      )}
    </div>
  );
}
