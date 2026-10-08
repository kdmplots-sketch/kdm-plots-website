import { T, useVP } from "@/lib/theme";
import { Btn } from "@/components/Btn";
import { useBookingModal } from "@/lib/BookingContext";

// ─────────────────────────────────────────────────────────────────────────────
// Hero Content (left column)
// ─────────────────────────────────────────────────────────────────────────────
export function HeroContent() {
  const { isMobile, isTablet } = useVP();
  const { open: openBooking } = useBookingModal();
  return (
    <div
      style={{
        display: "flex", flexDirection: "column",
        justifyContent: isMobile ? "flex-end" : "center",
        flex: 1,
        padding: isMobile ? "96px 20px 24px" : isTablet ? "0 32px" : "0 56px",
        maxWidth: isMobile ? "100%" : "580px",
        gap: 0,
      }}
    >
      {/* Eyebrow label */}
      <div
        style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          marginBottom: "22px",
          opacity: 0,
          animation: "kdmFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
        }}
      >
        <span style={{ display: "block", width: "28px", height: "1.5px", background: T.gold, borderRadius: T.radiusFull }} />
        <span
          style={{
            fontFamily: T.sans, fontWeight: 600,
            fontSize: "10.5px", letterSpacing: "0.26em",
            textTransform: "uppercase", color: T.gold,
          }}
        >
          Premium Plots For A Better Tomorrow
        </span>
      </div>

      {/* Main heading */}
      <h1 style={{ margin: 0, marginBottom: "26px", padding: 0, lineHeight: 1 }}>
        <span
          style={{
            display: "block",
            fontFamily: T.serif, fontWeight: 700,
            fontSize: isMobile ? "52px" : isTablet ? "64px" : "80px", lineHeight: 1.0,
            color: T.white,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 32px rgba(0,0,0,0.22)",
            opacity: 0,
            animation: "kdmFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.22s forwards",
          }}
        >
          Build Your
        </span>
        <span
          style={{
            display: "block",
            fontFamily: T.serif, fontWeight: 800,
            fontSize: isMobile ? "60px" : isTablet ? "72px" : "88px", lineHeight: 1.0,
            color: T.gold,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 32px rgba(0,0,0,0.20)",
            opacity: 0,
            animation: "kdmFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.34s forwards",
          }}
        >
          Legacy
        </span>
      </h1>

      {/* Body copy */}
      <p
        style={{
          fontFamily: T.sans, fontWeight: 400,
          fontSize: "14.5px", lineHeight: 1.78,
          color: T.textBody,
          margin: 0, marginBottom: "38px",
          maxWidth: "370px",
          opacity: 0,
          animation: "kdmFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.48s forwards",
        }}
      >
        KDM Plots offers premium residential plots in prime locations with world-class amenities
        and a secure gated environment.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap",
          opacity: 0,
          animation: "kdmFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s forwards",
        }}
      >
        <Btn
  label="Explore Projects"
  variant="gold"
  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
/>
        <Btn label="Book a Visit" variant="outline-white" icon={false} onClick={() => openBooking()} />
      </div>
    </div>
  );
}
