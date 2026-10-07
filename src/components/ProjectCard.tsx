import React from "react";
import { T, useVP } from "@/lib/theme";
import type { Project } from "@/lib/types";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { useProjectGallery } from "@/lib/ProjectGalleryContext";

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — reusable pieces
// ─────────────────────────────────────────────────────────────────────────────

// Approval badge: circle-check + label
export function ApprovalBadge({ label, compact = false }: { label: string; compact?: boolean }) {
  const sz = compact ? "18px" : "22px";
  const fsz = compact ? "7px" : "7.5px";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
      <div
        style={{
          width: sz, height: sz, borderRadius: "50%",
          border: `1px solid rgba(193,153,46,0.50)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span
        style={{
          fontFamily: T.sans, fontWeight: 500,
          fontSize: fsz, letterSpacing: "0.04em",
          textAlign: "center", lineHeight: 1.25,
          color: "rgba(255,255,255,0.62)",
          maxWidth: "42px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Project Card (reusable, fully editable)
// ─────────────────────────────────────────────────────────────────────────────
// Every card in the row is the same size — scaled responsively by viewport,
// not by "featured" position, so the carousel stays visually even.
export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = React.useState(false);
  const { open: openGallery } = useProjectGallery();
  const { isMobile } = useVP();

  const cardH       = isMobile ? 320 : 340;
  const titleSize   = isMobile ? "21px" : "18px";
  const padBottom   = isMobile ? "24px 22px 20px" : "18px 18px 16px";
  const contentGap  = isMobile ? "9px" : "7px";
  const badgeGap    = isMobile ? "10px" : "8px";

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View photos for ${project.title}`}
      onClick={() => openGallery(project)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGallery(project); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        width: "100%",
        height: `${cardH}px`,
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        transform: hovered ? "translateY(-7px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 28px 72px rgba(8,14,28,0.30), 0 6px 20px rgba(8,14,28,0.14)"
          : "0 6px 28px rgba(8,14,28,0.13), 0 2px 8px rgba(8,14,28,0.07)",
      }}
    >
      {/* ── PROJECT SURFACE ── */}
      <PhotoPlaceholder
        patternId={`grid-project-${project.id}`}
        style={{ transition: "transform 0.55s ease", transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(6,12,24,0.95) 0%, rgba(6,12,24,0.55) 50%, rgba(6,12,24,0.10) 100%)",
      }} />

      {/* Status badge — top left */}
      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "5px 11px",
          borderRadius: "9999px",
          background: "rgba(6,12,24,0.65)",
          border: project.status === "Completed" ? `1px solid rgba(62,99,84,0.55)` : `1px solid rgba(193,153,46,0.50)`,
          fontFamily: T.sans, fontWeight: 700,
          fontSize: "8.5px", letterSpacing: "0.20em",
          textTransform: "uppercase", color: project.status === "Completed" ? "#7FB09C" : T.gold,
          backdropFilter: "blur(10px)",
        }}>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: project.status === "Completed" ? "#7FB09C" : T.gold }} />
          {project.status}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: padBottom,
        display: "flex", flexDirection: "column",
        gap: contentGap,
      }}>
        {/* KDM brand label */}
        <span style={{
          fontFamily: T.sans, fontWeight: 700,
          fontSize: "8.5px",
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: T.gold, opacity: 0.85,
        }}>KDM</span>

        {/* Project name */}
        <h3 style={{
          fontFamily: T.serif, fontWeight: 700,
          fontSize: titleSize,
          lineHeight: 1.15, color: T.white, margin: 0,
        }}>
          {project.title}
        </h3>

        {/* Location */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/><circle cx="12" cy="8.5" r="2"/>
          </svg>
          <span style={{ fontFamily: T.sans, fontSize: "10px", color: "rgba(255,255,255,0.68)", fontWeight: 400 }}>
            {project.location}
          </span>
        </div>

        {/* Thin divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.11)", margin: "1px 0" }} />

        {/* Badges + CTA — stacks on mobile so nothing clips/overlaps on narrow cards */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          gap: isMobile ? "12px" : "6px",
        }}>
          <div style={{ display: "flex", flexWrap: isMobile ? "wrap" : "nowrap", rowGap: "10px", gap: badgeGap }}>
            {project.dtcp  && <ApprovalBadge label="DTCP Approved"    compact />}
            {project.rera  && <ApprovalBadge label="RERA Approved"    compact />}
            {project.prime && <ApprovalBadge label="Prime Location"   compact />}
            {project.infra && <ApprovalBadge label="Premium Infra"    compact />}
          </div>
          <button
            aria-label={`Explore ${project.title}`}
            style={{
            display: "inline-flex", alignItems: "center", gap: "5px",
            background: "transparent", border: "none",
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "9px",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: T.gold, cursor: "pointer", padding: 0,
            whiteSpace: "nowrap", flexShrink: 0,
            alignSelf: isMobile ? "flex-end" : "auto",
          }}>
            Explore Project
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Info strip item
// ─────────────────────────────────────────────────────────────────────────────
export function ProjectInfoItem({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "16px",
      flex: 1,
      paddingRight: (last || isMobile) ? 0 : "40px",
      marginRight: (last || isMobile) ? 0 : "40px",
      borderRight: (last || isMobile) ? "none" : "1px solid rgba(15,31,53,0.10)",
      paddingBottom: isMobile ? "12px" : "0",
      borderBottom: isMobile && !last ? "1px solid rgba(15,31,53,0.08)" : "none",
    }}>
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%",
        border: `1.5px solid rgba(193,153,46,0.28)`,
        background: T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>
          {title}
        </p>
        <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", margin: 0, lineHeight: 1.55 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Decorative birds
// ─────────────────────────────────────────────────────────────────────────────
export function DecorativeBirds() {
  return (
    <svg width="120" height="56" viewBox="0 0 120 56" fill="none" style={{ opacity: 0.30 }}>
      {[
        [6,36,12,30,18,36],[22,28,29,22,36,28],[42,20,50,13,58,20],
        [64,12,73,5,82,12],[88,20,96,14,104,20],[108,30,114,25,120,30],
        [30,44,36,39,42,44],[70,38,76,33,82,38],
      ].map(([x1,y1,xm,ym,x2,y2],i) => (
        <path key={i} d={`M${x1} ${y1} Q${xm} ${ym} ${x2} ${y2}`}
          stroke={T.navy} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      ))}
    </svg>
  );
}
