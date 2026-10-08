import React from "react";
import { T, useVP } from "@/lib/theme";
import { IcoShieldWhy, IcoPinWhy, IcoDiamondWhy, IcoInfra, IcoCommunity, IcoPlanned, IcoExcellence } from "@/components/icons/WhyChooseIcons";
import { useInView } from "@/lib/useInView";

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Right-side visual (no photography required)
// A signature monogram moment on a navy gradient, diagonally clipped to match
// the panel it replaces, with a scroll-triggered entrance + ambient motion.
// ─────────────────────────────────────────────────────────────────────────────
function WhyVisualPanel() {
  const [ref, visible] = useInView(0.3);
  const EASE = "cubic-bezier(0.22,1,0.36,1)";
  return (
    <div
      ref={ref}
      style={{
        flex: 1, position: "relative",
        clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
        background: "linear-gradient(135deg, #0A1628 0%, #0F1F35 50%, #0D1A2D 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Ambient gold glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(circle at 60% 35%, rgba(193,153,46,0.16) 0%, transparent 55%), radial-gradient(circle at 30% 80%, rgba(193,153,46,0.08) 0%, transparent 50%)",
      }} />
      {/* Faint survey-grid texture */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.5 }} preserveAspectRatio="none">
        <defs>
          <pattern id="grid-why-visual" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M0 0H56M0 0V56" stroke={T.gold} strokeWidth="1" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-why-visual)" />
      </svg>

      {/* Monogram moment */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: "22px",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.88)",
        transition: `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`,
      }}>
        {/* Concentric rings */}
        <div style={{ position: "relative", width: "148px", height: "148px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: "1px solid rgba(193,153,46,0.18)",
            animation: "kdmFloatSlow 8s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", inset: "18px", borderRadius: "50%",
            border: "1px solid rgba(193,153,46,0.32)",
          }} />
          {/* House / roof mark */}
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none" style={{ animation: "kdmFloatSlow 7s ease-in-out infinite" }}>
            <path d="M16 4 L28 12 L28 26 L4 26 L4 12 Z" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M12 26 L12 18 L20 18 L20 26" stroke={T.gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="13" r="2.4" stroke={T.gold} strokeWidth="1.3"/>
          </svg>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: T.serif, fontWeight: 800, fontSize: "20px", color: T.white, margin: 0, letterSpacing: "0.08em" }}>KDM</p>
          <p style={{ fontFamily: T.sans, fontWeight: 500, fontSize: "9.5px", color: T.gold, margin: "4px 0 0", letterSpacing: "0.32em", textTransform: "uppercase" }}>Plots</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Left feature row
// ─────────────────────────────────────────────────────────────────────────────
function WhyFeatureRow({
  icon, title, desc,
}: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
      {/* Icon bubble */}
      <div
        style={{
          flexShrink: 0,
          width: "42px", height: "42px",
          borderRadius: "50%",
          border: `1px solid rgba(193,153,46,0.30)`,
          background: "rgba(193,153,46,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginTop: "2px",
        }}
      >
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "11px", letterSpacing: "0.14em",
            textTransform: "uppercase", color: T.navy,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 400,
            fontSize: "13px", lineHeight: 1.68,
            color: "#5B6B82",
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Dark panel feature column
// ─────────────────────────────────────────────────────────────────────────────
function DarkFeatureCol({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div
      style={{
        flex: isMobile ? "0 0 50%" : 1,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "24px 12px" : "32px 22px",
        gap: "14px",
        borderRight: last ? "none" : "1px solid rgba(193,153,46,0.20)",
        boxSizing: "border-box",
      }}
    >
      {/* Icon ring */}
      <div
        style={{
          width: "52px", height: "52px",
          borderRadius: "50%",
          border: `1px solid rgba(193,153,46,0.35)`,
          background: "rgba(193,153,46,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "10.5px", letterSpacing: "0.14em",
            textTransform: "uppercase", color: T.white,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 400,
            fontSize: "12px", lineHeight: 1.70,
            color: "rgba(255,255,255,0.52)",
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Section
// ─────────────────────────────────────────────────────────────────────────────
export function WhyChooseSection() {
  const { isMobile, isTablet } = useVP();
  const leftFeatures = [
    {
      icon: <IcoShieldWhy />,
      title: "Legally Secure",
      desc: "All layouts are DTCP & RERA approved for complete peace of mind.",
    },
    {
      icon: <IcoPinWhy />,
      title: "Prime Locations",
      desc: "Strategically located in fast-growing corridors with excellent connectivity.",
    },
    {
      icon: <IcoDiamondWhy />,
      title: "High Investment Value",
      desc: "High appreciation potential with assured returns for a future-ready investment.",
    },
  ];

  const darkFeatures = [
    {
      icon: <IcoInfra />,
      title: "World-Class Infrastructure",
      desc: "Wide roads, street lights, drainage, landscaping & modern amenities.",
    },
    {
      icon: <IcoCommunity />,
      title: "Secure & Gated Community",
      desc: "24×7 security, gated layouts & a safe environment for your family.",
    },
    {
      icon: <IcoPlanned />,
      title: "Thoughtfully Planned",
      desc: "Spacious layouts with optimal planning for comfort, privacy & convenience.",
    },
    {
      icon: <IcoExcellence />,
      title: "Built on Excellence",
      desc: "Quality that stands the test of time, backed by a legacy you can trust.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: T.ivory,
        overflow: "hidden",
      }}
    >
      {/* ── Two-column editorial row ── */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
          minHeight: isMobile ? "auto" : "560px",
        }}
      >
        {/* ─── LEFT column — ivory ─── */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 44%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: isMobile ? "72px 20px 56px" : isTablet ? "80px 40px 64px" : "100px 64px 80px 80px",
            background: T.ivory,
            gap: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Accent mark */}
          <div
            style={{
              width: "28px", height: "1.5px",
              background: T.gold, borderRadius: "9999px",
              marginBottom: "22px",
            }}
          />

          {/* Headline */}
          <h2
            style={{
              fontFamily: T.serif, fontWeight: 800,
              fontSize: isMobile ? "36px" : isTablet ? "44px" : "52px", lineHeight: 1.08,
              margin: 0, marginBottom: "28px",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ display: "block", color: T.navy }}>Foundations</span>
            <span style={{ display: "block", color: T.navy }}>of Trust.</span>
            <span style={{ display: "block", color: T.gold }}>Vision for</span>
            <span style={{ display: "block", color: T.gold }}>Generations.</span>
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: T.sans, fontWeight: 400,
              fontSize: "14px", lineHeight: 1.78,
              color: "#5B6B82",
              margin: 0, marginBottom: "40px",
              maxWidth: "360px",
            }}
          >
            At KDM Plots, we don't just develop plots. We create thoughtfully
            planned communities built on trust, transparency, and long-term value.
            Every detail is designed to elevate your lifestyle and secure your tomorrow.
          </p>

          {/* Gold rule */}
          <div
            style={{
              width: "40px", height: "1.5px",
              background: `linear-gradient(90deg, ${T.gold}, rgba(193,153,46,0.2))`,
              borderRadius: "9999px",
              marginBottom: "32px",
            }}
          />

          {/* Left feature rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {leftFeatures.map((f) => (
              <WhyFeatureRow key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>

        {/* ─── RIGHT column — monogram visual with diagonal clip ─── */}
        {!isMobile && (
        <div
          style={{
            flex: "0 0 56%",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: isTablet ? "400px" : undefined,
          }}
        >
          <WhyVisualPanel />
        </div>
        )}
      </div>

      {/* ── Dark marble panel — full width ── */}
      <div
        style={{
          background: `linear-gradient(135deg, #0A1628 0%, #0F1F35 40%, #0D1A2D 100%)`,
          borderTop: `1px solid rgba(193,153,46,0.15)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle marble texture overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 25% 50%, rgba(193,153,46,0.04) 0%, transparent 60%), radial-gradient(ellipse at 75% 50%, rgba(193,153,46,0.03) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative", zIndex: 1,
            maxWidth: "1440px", margin: "0 auto",
            padding: isMobile ? "0 4px" : "0 80px",
            display: "flex",
            flexWrap: isMobile ? "wrap" : "nowrap",
            alignItems: "stretch",
          }}
        >
          {darkFeatures.map((f, i) => (
            <DarkFeatureCol
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              last={i === darkFeatures.length - 1}
            />
          ))}
        </div>
        {/* Gold top edge line */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${T.gold} 50%, transparent)`,
            opacity: 0.45,
          }}
        />
      </div>
    </section>
  );
}
