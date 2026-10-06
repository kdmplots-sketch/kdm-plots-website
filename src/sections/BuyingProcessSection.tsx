import { T, useVP } from "@/lib/theme";
import { useInView } from "@/lib/useInView";
import { ProcessStep } from "@/components/ProcessStep";
import { IcoCalendarStep, IcoExploreStep, IcoPlotStep, IcoRegStep } from "@/components/icons/ProcessIcons";

// ─────────────────────────────────────────────────────────────────────────────
// Buying Process — Section
// ─────────────────────────────────────────────────────────────────────────────
export function BuyingProcessSection() {
  const { isMobile, isTablet } = useVP();
  const [ref, visible] = useInView(0.18);
  return (
    <section style={{ background: T.ivory, width: "100%", overflow: "hidden" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "72px 20px 80px" : isTablet ? "80px 40px 88px" : "96px 80px 100px" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start", gap: isMobile ? "40px" : "80px" }}>

          {/* LEFT — heading */}
          <div
            style={{
              flex: "0 0 280px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px", marginBottom: "20px" }} />
            <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "42px", lineHeight: 1.1, color: T.navy, margin: 0 }}>
              Simple Steps to<br/>Own Your Plot
            </h2>
            <div style={{ width: "40px", height: "2px", background: T.gold, borderRadius: "9999px", marginTop: "24px", opacity: 0.6 }} />
          </div>

          {/* RIGHT — steps */}
          <div ref={ref} style={{ flex: 1, position: "relative" }}>
            {/* Gold connecting line — hidden on mobile */}
            {!isMobile && (
              <div style={{
                position: "absolute", top: "52px", left: "12%", right: "12%", height: "1.5px",
                background: `linear-gradient(to right, transparent, ${T.gold} 10%, ${T.gold} 90%, transparent)`,
                opacity: 0.30, zIndex: 0,
              }} />
            )}

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "28px" : "0", position: "relative", zIndex: 1 }}>
              <ProcessStep visible={visible} delay={0}   num="01" icon={<IcoCalendarStep />} title="Schedule Site Visit"  desc="Book a visit at your convenience." />
              <ProcessStep visible={visible} delay={120} num="02" icon={<IcoExploreStep />} title="Explore the Layout"    desc="Walk through the project with our sales team." />
              <ProcessStep visible={visible} delay={240} num="03" icon={<IcoPlotStep />}    title="Choose Your Plot"      desc="Select the perfect plot for your family." />
              <ProcessStep visible={visible} delay={360} num="04" icon={<IcoRegStep />}     title="Registration"          desc="Complete documentation with complete transparency." last />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
