import React from "react";
import { T, useVP } from "@/lib/theme";
import type { Amenity } from "@/lib/types";
import { AMENITY_ICONS, IcoAmenityDefault } from "@/components/icons/AmenityIcons";

const EASE = "cubic-bezier(0.32,0.72,0,1)";

// Shared with InfrastructureSection so the carousel's drag/arrow step size
// always matches the card's actual rendered width.
export function getAmenityCardWidth(isMobile: boolean, w: number) {
  return isMobile ? Math.max(176, Math.min(220, w - 96)) : 260;
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Feature Item (glass card column)
// ─────────────────────────────────────────────────────────────────────────────
export function InfraFeatureItem({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      padding: isMobile ? "4px 6px 0" : "0 16px",
      borderRight: (last || isMobile) ? "none" : "1px solid rgba(15,31,53,0.08)",
      boxSizing: "border-box",
      minWidth: 0,
    }}>
      <div style={{ marginBottom: "12px" }}>{icon}</div>
      <p style={{
        fontFamily: T.sans, fontWeight: 700,
        fontSize: isMobile ? "10px" : "9px", letterSpacing: "0.12em",
        textTransform: "uppercase", color: T.navy,
        margin: 0, marginBottom: "5px", lineHeight: 1.4,
      }}>{title}</p>
      <p style={{
        fontFamily: T.sans, fontWeight: 400,
        fontSize: isMobile ? "10.5px" : "10px", color: "#5B6B82",
        margin: 0, lineHeight: 1.5,
      }}>{desc}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Amenity Card
// ─────────────────────────────────────────────────────────────────────────────
export function AmenityCard({ amenity }: { amenity: Amenity }) {
  const { isMobile, w } = useVP();
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const Icon = AMENITY_ICONS[amenity.title] ?? IcoAmenityDefault;

  // Fluid card width: scales with the viewport instead of jumping between
  // two fixed breakpoints, so very narrow phones still get a sensible peek.
  const cardW = getAmenityCardWidth(isMobile, w);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      style={{
        position: "relative",
        flex: `0 0 ${cardW}px`,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "14px",
        padding: "28px 20px",
        borderRadius: "18px",
        background: T.white,
        border: `1px solid ${hovered ? "rgba(193,153,46,0.48)" : "rgba(193,153,46,0.16)"}`,
        cursor: "pointer",
        transition: `transform 0.4s ${EASE}, box-shadow 0.4s ${EASE}, border-color 0.3s ${EASE}`,
        transform: pressed
          ? "translateY(-2px) scale(0.98)"
          : hovered
            ? "translateY(-7px) scale(1)"
            : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 22px 48px rgba(193,153,46,0.22), 0 4px 14px rgba(8,14,28,0.08)"
          : "0 4px 18px rgba(8,14,28,0.06)",
        flexShrink: 0,
      }}
    >
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%",
        border: `1.5px solid rgba(193,153,46,0.32)`,
        background: T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transform: hovered ? "scale(1.1) rotate(-6deg)" : "scale(1) rotate(0deg)",
        transition: `transform 0.4s ${EASE}`,
      }}>
        <Icon />
      </div>
      <span style={{
        fontFamily: T.sans, fontWeight: 700,
        fontSize: "12px", letterSpacing: "0.08em",
        textTransform: "uppercase", color: T.navy, lineHeight: 1.3,
        textAlign: "center",
      }}>{amenity.title}</span>
    </div>
  );
}
