import React from "react";
import { T, useVP } from "@/lib/theme";
import { useInView } from "@/lib/useInView";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { InvestFeature, TimelineMilestone, InvestStripCard } from "@/components/InvestFeature";

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Main
// ─────────────────────────────────────────────────────────────────────────────
export function InvestmentSection() {
  const { isMobile, isTablet } = useVP();
  const [heroRef, heroVisible]       = useInView(0.12);
  const [timelineRef, timelineVisible] = useInView(0.20);
  const [stripRef, stripVisible]     = useInView(0.20);

  // Floating quote card gentle bob animation
  const [bobY, setBobY] = React.useState(0);
  React.useEffect(() => {
    let frame: number;
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const t = (ts - start) / 2800;
      setBobY(Math.sin(t * Math.PI * 2) * 6);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section style={{ background: T.ivory, width: "100%", overflow: "hidden" }}>

      {/* ════ HERO SPLIT ════ */}
      <div
        ref={heroRef}
        style={{
          maxWidth: "1920px", margin: "0 auto",
          display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "stretch", minHeight: isMobile ? "auto" : "580px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.7s ${T.easeSmooth}, transform 0.7s ${T.easeSmooth}`,
        }}
      >
        {/* LEFT — editorial text */}
        <div style={{
          flex: isMobile ? "none" : "0 0 44%", maxWidth: isMobile ? "100%" : "680px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: isMobile ? "72px 20px 56px" : isTablet ? "64px 40px" : "80px 64px 80px 80px",
          background: T.ivory,
          position: "relative", zIndex: 2,
        }}>
          {/* Accent mark */}
          <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px", marginBottom: "22px" }} />

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : isTablet ? "44px" : "54px", lineHeight: 1.06, margin: 0, marginBottom: "22px", letterSpacing: "-0.01em" }}>
            <span style={{ display: "block", color: T.navy }}>Invest Today.</span>
            <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Own Tomorrow.</span>
          </h2>

          {/* Body */}
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.82, color: "#5B6B82", margin: 0, marginBottom: "44px", maxWidth: "400px" }}>
            KDM Plots offers more than land, it offers long-term value, legal security,
            appreciation potential and future-ready investments designed for generations.
          </p>

          {/* 2×2 Feature Grid */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "20px" : "24px 32px" }}>
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
              title="High Growth Potential"
              desc="Rapidly developing corridors with excellent appreciation."
            />
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.9 4.6-1.4 8-5.5 8-9.9V7z"/><polyline points="9 12 11 14 15 10"/></svg>}
              title="100% Legal Security"
              desc="DTCP & RERA approved layouts with clear documentation."
            />
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
              title="Future Ready Investment"
              desc="Prime locations planned for long-term value."
            />
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>}
              title="Excellent Connectivity"
              desc="Near schools, highways and essential infrastructure."
            />
          </div>
        </div>

        {/* RIGHT — panoramic image with ivory bleed + quote card */}
        {!isMobile && <div style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: isTablet ? "400px" : undefined }}>
          {/* Ivory gradient bleed from left */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
            background: `linear-gradient(to right, ${T.ivory} 0%, rgba(248,245,239,0.70) 18%, rgba(248,245,239,0.10) 40%, transparent 60%)`,
          }} />

          {/* Panoramic surface */}
          <PhotoPlaceholder patternId="grid-invest-1" fill={false} style={{ width: "100%", height: "100%" }} />

          {/* Floating quote card */}
          <div style={{
            position: "absolute", top: "50%", left: "12%",
            transform: `translateY(calc(-50% + ${bobY}px))`,
            zIndex: 4,
            width: "300px",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "18px",
            border: "1px solid rgba(193,153,46,0.22)",
            boxShadow: "0 24px 64px rgba(8,14,28,0.15), 0 4px 16px rgba(8,14,28,0.06)",
            padding: "28px 28px 24px",
          }}>
            {/* Gold quote mark */}
            <div style={{ marginBottom: "14px" }}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12.5C0 5.6 4.2 1.5 12.6 0l1.4 2.4C9.2 3.5 6.8 6 6.4 9.6H12V20H0zm16 0V12.5C16 5.6 20.2 1.5 28.6 0L30 2.4C25.2 3.5 22.8 6 22.4 9.6H28V20H16z" fill={T.gold} fillOpacity="0.55"/>
              </svg>
            </div>
            <p style={{
              fontFamily: T.serif, fontWeight: 700, fontStyle: "italic",
              fontSize: "18px", lineHeight: 1.45, color: T.navy,
              margin: 0, marginBottom: "16px",
            }}>
              "Land is not an expense.<br/>It's an appreciating asset."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "20px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
              <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.gold }}>KDM Plots</span>
            </div>
          </div>
        </div>}
      </div>

      {/* ════ VALUE TIMELINE ════ */}
      <div
        ref={timelineRef}
        style={{ background: T.navy, width: "100%", padding: isMobile ? "56px 20px 64px" : "72px 80px 80px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Timeline header */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px", marginBottom: "14px" }} />
            <h3 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "42px", lineHeight: 1.1, margin: 0, color: T.white }}>
              Strong today.{" "}
              <span style={{ color: T.gold, fontStyle: "italic" }}>Stronger tomorrow.</span>
            </h3>
          </div>

          {/* Timeline track */}
          <div style={{ position: "relative" }}>

            {/* Connecting gold line — only meaningful in the desktop row layout;
                on mobile the milestones stack vertically so there's nothing to connect */}
            {!isMobile && (
              <div style={{
                position: "absolute",
                top: "26px", left: "10%", right: "10%", height: "1.5px",
                background: `linear-gradient(to right, transparent, ${T.gold} 8%, ${T.gold} 92%, transparent)`,
                opacity: 0.45,
              }} />
            )}

            {/* Milestones */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "32px" : "0", position: "relative", zIndex: 2 }}>
              <TimelineMilestone
                visible={timelineVisible} delay={0}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                label="Today"
                title="Prime Location Investment"
                desc="Secure your plot in a rapidly growing corridor."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={120}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
                label="1–2 Years"
                title="Infrastructure Expansion"
                desc="Roads, utilities and connectivity upgrades transform the area."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={240}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
                label="3–5 Years"
                title="Property Appreciation"
                desc="Demand rises as the neighbourhood matures and grows."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={360}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
                label="5–7 Years"
                title="Strong Asset Growth"
                desc="Your investment delivers proven, significant returns."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={480}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                label="Long Term"
                title="Generational Wealth Creation"
                desc="A legacy asset that appreciates across generations."
              />
            </div>
          </div>

          {/* Appreciation callout */}
          <div style={{
            marginTop: "56px", paddingTop: "48px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "20px" : "48px",
          }}>
            <div>
              <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "52px", color: T.gold, lineHeight: 1 }}>2×–4×</span>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.60)", margin: "6px 0 0", lineHeight: 1.6 }}>
                Potential appreciation in the next 5–7 years.<br/>
                <em style={{ color: "rgba(255,255,255,0.35)", fontStyle: "normal", fontSize: "11px" }}>Historical estimates based on regional market trends.</em>
              </p>
            </div>
            <div style={isMobile
              ? { width: "100%", height: "1px", background: "rgba(255,255,255,0.10)", flexShrink: 0 }
              : { width: "1px", height: "56px", background: "rgba(255,255,255,0.10)", flexShrink: 0 }
            } />
            <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.75, maxWidth: "480px" }}>
              Real estate in prime locations has consistently outperformed other
              asset classes over the long term. KDM Plots are positioned in
              Madurai's highest-growth corridors, built for the future.
            </p>
          </div>
        </div>
      </div>

      {/* ════ BOTTOM STRIP — Why invest in Madurai? ════ */}
      <div
        ref={stripRef}
        style={{
          background: T.white,
          borderTop: "1px solid rgba(193,153,46,0.10)",
          opacity: stripVisible ? 1 : 0,
          transform: stripVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.65s ${T.easeSmooth} 0.1s, transform 0.65s ${T.easeSmooth} 0.1s`,
        }}
      >
        {/* Strip label */}
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: isMobile ? "32px 20px 0" : "40px 80px 0",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
          <span style={{ fontFamily: T.serif, fontWeight: 700, fontStyle: "italic", fontSize: "17px", color: T.navy }}>
            Why invest in Madurai?
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "stretch", flexWrap: isMobile ? "wrap" : "nowrap" }}>
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
            title="Fast Growing Madurai"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>}
            title="Excellent Road Connectivity"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>}
            title="Educational Institutions"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>}
            title="Industrial Expansion"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
            title="Rental Demand"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
            title="Future Smart Investment"
            last
          />
        </div>
      </div>

    </section>
  );
}
