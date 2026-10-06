import React from "react";
import { T, useVP } from "@/lib/theme";
import { useInView } from "@/lib/useInView";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

// ─────────────────────────────────────────────────────────────────────────────
// CTA — Section
// ─────────────────────────────────────────────────────────────────────────────
export function CtaSection() {
  const { isMobile, isTablet } = useVP();
  const [ref, visible] = useInView(0.14);
  const [hovBook, setHovBook] = React.useState(false);
  const [hovCall, setHovCall] = React.useState(false);

  return (
    <section style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "480px" }}>
      {/* Background surface */}
      <PhotoPlaceholder patternId="grid-cta" />

      {/* Ivory gradient — left to right for readability */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, rgba(248,245,239,0.97) 0%, rgba(248,245,239,0.85) 32%, rgba(248,245,239,0.40) 58%, rgba(248,245,239,0.05) 80%, transparent 100%)`,
      }} />

      {/* Dark right scrim for photo drama */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to left, rgba(8,14,28,0.30) 0%, transparent 55%)",
      }} />

      {/* Content */}
      <div
        ref={ref}
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "1440px", margin: "0 auto",
          padding: isMobile ? "72px 20px" : isTablet ? "80px 40px" : "96px 80px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Glassmorphism card */}
        <div style={{
          display: "inline-flex", flexDirection: "column", gap: "28px",
          maxWidth: isMobile ? "100%" : "520px",
          width: isMobile ? "100%" : undefined,
          background: "rgba(248,245,239,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(193,153,46,0.18)",
          boxShadow: "0 24px 64px rgba(8,14,28,0.12), 0 4px 16px rgba(8,14,28,0.06)",
          padding: "48px 44px",
        }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>
              Ready to Build Your Legacy?
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "34px" : "48px", lineHeight: 1.06, margin: 0, color: T.navy, letterSpacing: "-0.01em" }}>
            Your Dream Property<br/>
            <span style={{ color: T.gold, fontStyle: "italic" }}>Starts Here.</span>
          </h2>

          {/* Sub-text */}
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14px", lineHeight: 1.78, color: "#475569", margin: 0 }}>
            Book a site visit today and experience KDM's premium communities firsthand. Our team is ready to guide you every step of the way.
          </p>

          {/* Buttons + phone */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            {/* Primary */}
            <button
              onMouseEnter={() => setHovBook(true)}
              onMouseLeave={() => setHovBook(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "14px 28px",
                background: hovBook ? "#9C7A24" : T.gold,
                border: "none", borderRadius: "6px",
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
                color: T.white, cursor: "pointer",
                transition: "all 0.22s ease",
                boxShadow: hovBook ? "0 8px 28px rgba(193,153,46,0.45)" : "0 4px 16px rgba(193,153,46,0.28)",
                transform: hovBook ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a Site Visit
            </button>

            {/* Secondary */}
            <a
              href="tel:+918220563394"
              onMouseEnter={() => setHovCall(true)}
              onMouseLeave={() => setHovCall(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "13px 24px",
                border: `1.5px solid ${T.navy}`,
                borderRadius: "6px",
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.10em", textTransform: "uppercase",
                color: hovCall ? T.white : T.navy,
                textDecoration: "none", cursor: "pointer",
                transition: "all 0.22s ease",
                background: hovCall ? T.navy : "transparent",
                transform: hovCall ? "translateY(-2px)" : "translateY(0)",
              } as React.CSSProperties}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>

          {/* Phone display */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "50%",
              border: `1px solid rgba(193,153,46,0.35)`, background: T.goldFaint,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "15px", color: T.navy, margin: 0 }}>+91 82205 63394</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#5B6B82", margin: 0 }}>Call Us Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
