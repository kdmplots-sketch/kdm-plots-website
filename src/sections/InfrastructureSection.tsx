import React from "react";
import { T, useVP } from "@/lib/theme";
import type { Amenity } from "@/lib/types";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { InfraFeatureItem, AmenityCard } from "@/components/AmenityCard";
import { CarouselArrow } from "@/components/CarouselArrow";
import { IcoRoads, IcoStreetLight, IcoDrainage, IcoPlantation, IcoSecurityShield, IcoElectricity, IcoWater, IcoDTCP } from "@/components/icons/InfrastructureIcons";
import { useBookingModal } from "@/lib/BookingContext";

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Amenity Data
// ─────────────────────────────────────────────────────────────────────────────
// ── Add new amenity objects here; layout updates automatically ──
const AMENITIES: Amenity[] = [
  { id: 1,  title: "Grand Entrance" },
  { id: 2,  title: "Wide Roads" },
  { id: 3,  title: "Landscaped Avenue" },
  { id: 4,  title: "Children's Park" },
  { id: 5,  title: "Street Lights" },
  { id: 6,  title: "Security Gate" },
  { id: 7,  title: "Rainwater Harvesting" },
  { id: 8,  title: "Visitor Parking" },
  { id: 9,  title: "Walking Track" },
  { id: 10, title: "Club House" },
  { id: 11, title: "Open Gym" },
  { id: 12, title: "Jogging Track" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Main Component
// ─────────────────────────────────────────────────────────────────────────────
export function InfrastructureSection() {
  const { isMobile, isTablet } = useVP();
  const { open: openBooking } = useBookingModal();
  const CARD_W  = isMobile ? 220 : 260;
  const CARD_GAP = 16;
  const STEP    = CARD_W + CARD_GAP;
  const VISIBLE_COUNT = 6;
  const [offset, setOffset]       = React.useState(0);
  const [dragging, setDragging]   = React.useState(false);
  const [startX, setStartX]       = React.useState(0);
  const [dragDelta, setDragDelta] = React.useState(0);
  const [autoPaused, setAutoPaused] = React.useState(false);
  const maxOffset = Math.max(0, (AMENITIES.length - VISIBLE_COUNT) * STEP);

  function slideBy(delta: number) {
    setOffset(prev => Math.min(maxOffset, Math.max(0, prev + delta)));
  }

  // ── Auto-swipe — loops back to the start once it reaches the end ──
  React.useEffect(() => {
    if (autoPaused || dragging || maxOffset <= 0) return;
    const id = setInterval(() => {
      setOffset(prev => (prev >= maxOffset ? 0 : Math.min(maxOffset, prev + STEP)));
    }, 4000);
    return () => clearInterval(id);
  }, [autoPaused, dragging, maxOffset, STEP]);

  function onPointerDown(e: React.PointerEvent) {
    setDragging(true);
    setStartX(e.clientX);
    setDragDelta(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    setDragDelta(e.clientX - startX);
  }
  function onPointerUp() {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dragDelta) > 30) slideBy(dragDelta < 0 ? STEP : -STEP);
    setDragDelta(0);
  }

  // Safety net: if a pointerup/pointercancel is ever missed (common with
  // touch emulation), this guarantees the track doesn't stay stuck mid-drag.
  React.useEffect(() => {
    if (!dragging) return;
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [dragging, dragDelta]);

  return (
    <section style={{ position: "relative", background: T.ivory, overflow: "hidden", width: "100%" }}>

      {/* ════ HERO AREA ════ */}
      <div style={{
        maxWidth: "1440px", margin: "0 auto",
        padding: isMobile ? "72px 20px 0" : isTablet ? "80px 40px 0" : "96px 80px 0",
        display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? "40px" : "60px",
      }}>

        {/* Left: editorial text */}
        <div style={{ flex: isMobile ? "none" : "0 0 38%", display: "flex", flexDirection: "column", gap: "22px" }}>

          {/* Accent mark */}
          <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : isTablet ? "44px" : "52px", lineHeight: 1.06, margin: 0, letterSpacing: "-0.01em" }}>
            <span style={{ display: "block", color: T.navy }}>Everything</span>
            <span style={{ display: "block", color: T.navy }}>Planned.</span>
            <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Nothing</span>
            <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Compromised.</span>
          </h2>

          {/* Divider mark */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "1px", background: T.gold, opacity: 0.5 }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: T.gold, opacity: 0.5 }} />
          </div>

          {/* Body */}
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.82, color: "#5B6B82", margin: 0, maxWidth: "380px" }}>
            Every KDM layout is thoughtfully designed with wide roads, underground
            infrastructure, secure planning, and premium amenities that create
            communities built to last for generations.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["8+ Amenities", "DTCP & RERA", "30–60 FT Roads"].map((label) => (
              <span key={label} style={{
                display: "inline-flex", alignItems: "center",
                padding: "7px 16px", borderRadius: "9999px",
                border: `1px solid rgba(193,153,46,0.35)`,
                background: T.goldFaint,
                fontFamily: T.sans, fontWeight: 600,
                fontSize: "11px", letterSpacing: "0.08em", color: T.navy,
              }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Right: panoramic image */}
        <div style={{ flex: 1, position: "relative" }}>
          {/* White bleed into left text */}
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: "72px",
            background: `linear-gradient(to right, ${T.ivory}, transparent)`,
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            borderRadius: "24px", overflow: "hidden",
            boxShadow: "0 32px 80px rgba(8,14,28,0.17), 0 8px 24px rgba(8,14,28,0.08)",
            lineHeight: 0,
          }}>
            <PhotoPlaceholder patternId="grid-infra-panorama" fill={false} style={{ width: "100%", height: "440px" }} />
          </div>
        </div>
      </div>

      {/* ════ INFRASTRUCTURE FEATURES GLASS CARD ════ */}
      <div style={{
        maxWidth: "1440px", margin: "0 auto",
        padding: isMobile ? "0 16px" : isTablet ? "0 40px" : "0 80px",
        marginTop: "-24px",
        position: "relative", zIndex: 4,
      }}>
        <div style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderRadius: "16px",
          border: "1px solid rgba(193,153,46,0.13)",
          boxShadow: "0 8px 48px rgba(8,14,28,0.08), 0 2px 12px rgba(8,14,28,0.04)",
          padding: isMobile ? "28px 16px" : "36px 20px",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(4, 1fr)" : "repeat(8, 1fr)",
          alignItems: "start",
          rowGap: isMobile ? "26px" : isTablet ? "28px" : "0",
          columnGap: 0,
        }}>
          <InfraFeatureItem icon={<IcoRoads />}         title="Wide Blacktop Roads"      desc="30 / 40 / 50 / 60 FT" />
          <InfraFeatureItem icon={<IcoStreetLight />}    title="LED Street Lights"        desc="Energy Efficient" />
          <InfraFeatureItem icon={<IcoDrainage />}       title="Underground Drainage"     desc="Modern & Durable" />
          <InfraFeatureItem icon={<IcoPlantation />}     title="Avenue Plantation"        desc="Green & Serene" />
          <InfraFeatureItem icon={<IcoSecurityShield />} title="24×7 Security"            desc="CCTV Surveillance" />
          <InfraFeatureItem icon={<IcoElectricity />}    title="Underground EB Provision" desc="Safe & Reliable" />
          <InfraFeatureItem icon={<IcoWater />}          title="Water Connection"         desc="For Every Plot" />
          <InfraFeatureItem icon={<IcoDTCP />}           title="DTCP & RERA Approved"    desc="Transparent & Legal" last />
        </div>
      </div>

      {/* ════ AMENITIES CAROUSEL ════ */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "56px 20px 0" : isTablet ? "64px 40px 0" : "72px 80px 0" }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "32px", lineHeight: 1.15, color: T.navy, margin: 0, letterSpacing: "-0.01em" }}>
            Built for a Better Tomorrow
          </h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <CarouselArrow direction="left"  onClick={() => slideBy(-STEP)} disabled={offset <= 0} />
            <CarouselArrow direction="right" onClick={() => slideBy(+STEP)} disabled={offset >= maxOffset} />
          </div>
        </div>

        {/* Draggable track */}
        <div
          style={{ overflow: "hidden", cursor: dragging ? "grabbing" : "grab", touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setAutoPaused(true)}
          onMouseLeave={() => setAutoPaused(false)}
          onTouchStart={() => setAutoPaused(true)}
          onTouchEnd={() => setAutoPaused(false)}
        >
          <div style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            transform: `translateX(${-(offset) + dragDelta}px)`,
            transition: dragging ? "none" : "transform 0.52s cubic-bezier(0.25,1,0.5,1)",
            willChange: "transform",
            userSelect: "none",
            paddingBottom: "8px",
          }}>
            {AMENITIES.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>
      </div>

      {/* ════ BOTTOM INFO STRIP ════ */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "40px 16px 60px" : "56px 80px 80px" }}>
        <div style={{
          background: T.white,
          borderRadius: "16px",
          border: "1px solid rgba(193,153,46,0.12)",
          boxShadow: "0 4px 32px rgba(8,14,28,0.07), 0 1px 8px rgba(8,14,28,0.04)",
          padding: isMobile ? "24px 20px" : "36px 48px",
          display: "flex", alignItems: isMobile ? "stretch" : "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "0",
        }}>

          {/* Item 1 */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", paddingRight: isMobile ? "0" : "32px", borderRight: isMobile ? "none" : "1px solid rgba(15,31,53,0.09)", borderBottom: isMobile ? "1px solid rgba(15,31,53,0.07)" : "none", paddingBottom: isMobile ? "16px" : "0" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: `1.5px solid rgba(193,153,46,0.30)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>Visit Our Site</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", margin: 0, lineHeight: 1.55 }}>Experience the layout in person.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", padding: isMobile ? "0 0 16px" : "0 32px", borderRight: isMobile ? "none" : "1px solid rgba(15,31,53,0.09)", borderBottom: isMobile ? "1px solid rgba(15,31,53,0.07)" : "none" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: `1.5px solid rgba(193,153,46,0.30)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>Expert Consultation</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", margin: 0, lineHeight: 1.55 }}>Get guidance from our specialists.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", padding: isMobile ? "0" : "0 32px", borderRight: isMobile ? "none" : "1px solid rgba(15,31,53,0.09)" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: `1.5px solid rgba(193,153,46,0.30)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>Hassle-Free Process</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", margin: 0, lineHeight: 1.55 }}>From booking to registration.</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ flex: "0 0 auto", paddingLeft: isMobile ? "0" : "32px", width: isMobile ? "100%" : "auto" }}>
            <button
              onClick={openBooking}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
                width: isMobile ? "100%" : "auto",
                padding: "14px 30px",
                border: `1.5px solid ${T.gold}`,
                borderRadius: "6px",
                background: "transparent",
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.navy,
                cursor: "pointer", transition: "all 0.25s ease",
                whiteSpace: "nowrap",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = T.gold;
                e.currentTarget.style.color = T.white;
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(193,153,46,0.40)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = T.navy;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Site Visit
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
