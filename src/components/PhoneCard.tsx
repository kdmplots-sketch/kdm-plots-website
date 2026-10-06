import { T } from "@/lib/theme";
import { Ico } from "@/components/icons/NavIcons";

// ─────────────────────────────────────────────────────────────────────────────
// Phone Card
// ─────────────────────────────────────────────────────────────────────────────
export function PhoneCard() {
  return (
    <div
      style={{
        background: T.cardBg,
        borderRadius: T.radius,
        boxShadow: T.cardShadow,
        display: "flex", alignItems: "center", gap: "15px",
        padding: "18px 24px",
        flexShrink: 0, minWidth: "234px",
      }}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: "44px", height: "44px", borderRadius: "50%",
          background: T.gold,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: `0 4px 14px rgba(193,153,46,0.38)`,
        }}
      >
        <Ico.phone />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "9px", letterSpacing: "0.26em",
            textTransform: "uppercase", color: T.gold,
          }}
        >
          Call Us Now
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "16px", letterSpacing: "0.02em",
            color: T.navy,
          }}
        >
          +91 822 056 3394
        </span>
      </div>
    </div>
  );
}
