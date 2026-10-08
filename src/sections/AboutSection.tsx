import { T, useVP } from "@/lib/theme";
import { StatsBentoGrid } from "@/components/StatsBentoGrid";
import { CornerBotanical } from "@/components/CornerBotanical";
import { IcoCalendar, IcoFamily, IcoLayout, IcoCheck, IcoRoad, IcoLeaf } from "@/components/icons/AboutIcons";
import { useInView } from "@/lib/useInView";

// ─────────────────────────────────────────────────────────────────────────────
// About Section
// ─────────────────────────────────────────────────────────────────────────────
export function AboutSection() {
  const { isMobile, isTablet } = useVP();
  const [ref, visible] = useInView(0.15);
  const stats = [
    { icon: <IcoCalendar />, number: "15+",   label: "Years of Trust"       },
    { icon: <IcoFamily  />, number: "2500+", label: "Families"              },
    { icon: <IcoLayout  />, number: "9+",    label: "Premium Layouts"       },
    { icon: <IcoCheck   />, number: "100%",  label: "Legal & Clear"         },
    { icon: <IcoRoad    />, number: "50+",   label: "KMs of Roads"          },
  ];

  return (
    <section style={{ background: T.ivory, width: "100%" }}>

      {/* ── Main two-column editorial area ── */}
      <div
        ref={ref}
        style={{
          maxWidth: "1440px", margin: "0 auto",
          padding: isMobile ? "72px 20px 80px" : isTablet ? "96px 40px 100px" : "140px 80px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "center",
          gap: isMobile ? "40px" : "60px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.7s ${T.easeSmooth}, transform 0.7s ${T.easeSmooth}`,
        }}
      >
        {/* ─── Left column (38%) ─── */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 38%",
            maxWidth: isMobile ? "100%" : "38%",
            display: "flex", flexDirection: "column", gap: 0,
          }}
        >
          {/* Gold rule */}
          <div
            style={{
              width: "44px", height: "1.5px",
              background: `linear-gradient(90deg, ${T.gold}, rgba(193,153,46,0.2))`,
              borderRadius: "9999px",
              marginBottom: "28px",
            }}
          />

          {/* Headline */}
          <h2
            style={{
              fontFamily: T.serif, fontWeight: 700,
              fontSize: isMobile ? "40px" : isTablet ? "48px" : "58px", lineHeight: 1.1,
              margin: 0, marginBottom: "34px",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ display: "block", color: T.navy }}>Legacies</span>
            <span style={{ display: "block", color: T.navy }}>Are Built,</span>
            <span style={{ display: "block", color: T.gold }}>Not Bought.</span>
          </h2>

          {/* Body copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: T.sans, fontWeight: 400,
                fontSize: "15px", lineHeight: 1.82,
                color: "#475569", margin: 0,
              }}
            >
              At KDM Plots, we thoughtfully create premium communities that stand the test of time.
            </p>
            <p
              style={{
                fontFamily: T.sans, fontWeight: 400,
                fontSize: "15px", lineHeight: 1.82,
                color: "#475569", margin: 0,
              }}
            >
              Every layout is planned with transparency, legal security and long-term value,
              ensuring every investment becomes part of a lasting legacy.
            </p>
          </div>

          {/* Signature area */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: "20px",
              paddingTop: "32px",
              borderTop: `1px solid rgba(193,153,46,0.18)`,
            }}
          >
            {/* Handwritten-style KDM signature */}
            <div style={{ flexShrink: 0 }}>
              <svg width="80" height="44" viewBox="0 0 80 44" fill="none">
                {/* K */}
                <path d="M6 8 L6 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M6 22 Q16 15 22 8" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M6 22 Q18 28 24 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                {/* D */}
                <path d="M30 8 L30 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M30 8 Q50 8 50 22 Q50 36 30 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                {/* M */}
                <path d="M56 36 L56 8 L66 24 L76 8 L76 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                {/* underline flourish */}
                <path d="M4 41 Q40 38 78 41" stroke={T.gold} strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            {/* Vertical divider */}
            <div
              style={{
                width: "1px", alignSelf: "stretch",
                background: `linear-gradient(to bottom, transparent, rgba(193,153,46,0.4), transparent)`,
              }}
            />

            {/* Trust text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                style={{
                  fontFamily: T.sans, fontWeight: 700,
                  fontSize: "10px", letterSpacing: "0.24em",
                  textTransform: "uppercase", color: T.navy,
                }}
              >
                Built on Trust.
              </span>
              <span
                style={{
                  fontFamily: T.sans, fontWeight: 500,
                  fontSize: "10px", letterSpacing: "0.20em",
                  textTransform: "uppercase", color: "#5B6B82",
                }}
              >
                Focused on Future.
              </span>
            </div>
          </div>
        </div>

        {/* ─── Right column (62%) ─── */}
        <div style={{ flex: isMobile ? "none" : "0 0 62%", maxWidth: isMobile ? "100%" : "62%", position: "relative" }}>
          {/* Subtle gold accent frame behind image */}
          <div
            style={{
              position: "absolute",
              top: "20px", right: "-16px",
              width: "calc(100% - 10px)", height: "calc(100% - 20px)",
              borderRadius: "28px",
              border: `1.5px solid rgba(193,153,46,0.22)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative", zIndex: 1,
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "28px",
              boxShadow: "0 24px 72px rgba(8,14,28,0.18), 0 4px 16px rgba(8,14,28,0.08)",
              background: T.white,
              overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "14%",
              boxSizing: "border-box",
            }}
          >
            <img
              src="https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445920/images.jpg"
              alt="KDM Plots gated community layout"
              style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          {/* Small floating badge */}
          <div
            style={{
              position: "absolute", zIndex: 2,
              bottom: "-20px", left: "40px",
              background: T.white,
              borderRadius: "12px",
              boxShadow: "0 12px 40px rgba(8,14,28,0.14)",
              padding: "16px 24px",
              display: "flex", alignItems: "center", gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: T.goldFaint,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "13px", color: T.navy }}>100% RERA Approved</div>
              <div style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#5B6B82" }}>All layouts legally verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Statistics bento grid ── */}
      <div style={{ padding: isMobile ? "0 0 56px" : "0 0 72px" }}>
        <StatsBentoGrid stats={stats} />
      </div>

      {/* ── Bottom quote ── */}
      <div
        style={{
          position: "relative",
          padding: isMobile ? "72px 20px" : "100px 80px",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Botanical corner decorations */}
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <CornerBotanical />
        </div>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <CornerBotanical flip />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, transform: "rotate(180deg) scaleX(-1)" }}>
          <CornerBotanical />
        </div>
        <div style={{ position: "absolute", bottom: 0, right: 0, transform: "rotate(180deg)" }}>
          <CornerBotanical />
        </div>

        {/* Gold rule above */}
        <div
          style={{
            width: "48px", height: "1.5px",
            background: T.gold,
            borderRadius: "9999px",
            marginBottom: "32px",
          }}
        />

        {/* Gold leaf icon */}
        <div style={{ marginBottom: "24px" }}>
          <IcoLeaf />
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: T.serif, fontWeight: 400,
            fontSize: isMobile ? "22px" : "30px", lineHeight: 1.55,
            fontStyle: "italic",
            color: T.navy,
            margin: 0, marginBottom: "32px",
            maxWidth: "720px",
            letterSpacing: "0.005em",
          }}
        >
          "We don't just develop plots, we build communities that become families."
        </blockquote>

        {/* Gold rule below */}
        <div
          style={{
            width: "48px", height: "1.5px",
            background: T.gold,
            borderRadius: "9999px",
          }}
        />
      </div>
    </section>
  );
}
