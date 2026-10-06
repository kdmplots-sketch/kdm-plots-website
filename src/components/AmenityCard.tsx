import React from "react";
import { T, useVP } from "@/lib/theme";
import type { Amenity } from "@/lib/types";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Feature Item (glass card column)
// ─────────────────────────────────────────────────────────────────────────────
export function InfraFeatureItem({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div style={{
      flex: isMobile ? "0 0 25%" : 1,
      display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      padding: isMobile ? "8px 4px" : "0 16px",
      borderRight: last ? "none" : "1px solid rgba(15,31,53,0.08)",
      boxSizing: "border-box",
    }}>
      <div style={{ marginBottom: "12px" }}>{icon}</div>
      <p style={{
        fontFamily: T.sans, fontWeight: 700,
        fontSize: "9px", letterSpacing: "0.13em",
        textTransform: "uppercase", color: T.navy,
        margin: 0, marginBottom: "5px", lineHeight: 1.4,
      }}>{title}</p>
      <p style={{
        fontFamily: T.sans, fontWeight: 400,
        fontSize: "10px", color: "#5B6B82",
        margin: 0, lineHeight: 1.5,
      }}>{desc}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Amenity Card
// ─────────────────────────────────────────────────────────────────────────────
export function AmenityCard({ amenity }: { amenity: Amenity }) {
  const { isMobile } = useVP();
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        flex: isMobile ? "0 0 220px" : "0 0 260px",
        height: "180px",
        borderRadius: "18px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        transform: hovered ? "translateY(-6px) scale(1.015)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 22px 56px rgba(8,14,28,0.26), 0 4px 14px rgba(8,14,28,0.12)"
          : "0 6px 24px rgba(8,14,28,0.11), 0 2px 6px rgba(8,14,28,0.06)",
        flexShrink: 0,
      }}
    >
      <PhotoPlaceholder
        patternId={`grid-amenity-${amenity.id}`}
        style={{ transition: "transform 0.55s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(6,12,24,0.92) 0%, rgba(6,12,24,0.40) 55%, rgba(6,12,24,0.05) 100%)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "2.5px",
        background: `linear-gradient(90deg, ${T.gold}, rgba(193,153,46,0.3))`,
        opacity: hovered ? 1 : 0.6,
        transition: "opacity 0.3s",
      }} />
      <div style={{
        position: "absolute", bottom: "14px", left: "16px", right: "16px",
        display: "flex", alignItems: "center", gap: "8px",
      }}>
        <div style={{
          width: "22px", height: "22px", borderRadius: "50%",
          border: `1px solid rgba(193,153,46,0.55)`,
          background: "rgba(6,12,24,0.50)",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(6px)", flexShrink: 0,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/>
            <circle cx="12" cy="8.5" r="2"/>
          </svg>
        </div>
        <span style={{
          fontFamily: T.sans, fontWeight: 700,
          fontSize: "12px", letterSpacing: "0.06em",
          textTransform: "uppercase", color: T.white, lineHeight: 1.2,
        }}>{amenity.title}</span>
      </div>
    </div>
  );
}
