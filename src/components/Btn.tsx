import React from "react";
import { T } from "@/lib/theme";
import { Ico } from "@/components/icons/NavIcons";

// ─────────────────────────────────────────────────────────────────────────────
// Button
// ─────────────────────────────────────────────────────────────────────────────
export function Btn({
  label,
  variant = "gold",
  icon = true,
  size = "md",
  onClick,
}: {
  label: string;
  variant?: "gold" | "outline-white" | "outline-navy";
  icon?: boolean;
  size?: "sm" | "md";
  onClick?: () => void;
}) {
  const [hov, setHov] = React.useState(false);
  const EASE = "cubic-bezier(0.32,0.72,0,1)";
  const pad = size === "sm" ? "5px 6px 5px 20px" : "6px 7px 6px 26px";
  const base: React.CSSProperties = {
    position: "relative",
    display: "inline-flex", alignItems: "center", gap: size === "sm" ? "12px" : "16px",
    fontFamily: T.sans, fontWeight: 600,
    fontSize: size === "sm" ? "11px" : "12px",
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    transition: `transform 0.3s ${EASE}, box-shadow 0.3s ${EASE}, background 0.3s ${EASE}`,
    borderRadius: T.radiusFull,
    whiteSpace: "nowrap",
    padding: icon ? pad : (size === "sm" ? "10px 20px" : "13px 26px"),
    transform: hov ? "translateY(-2px) scale(1.01)" : "translateY(0) scale(1)",
  };
  const styles: Record<string, React.CSSProperties> = {
    gold: {
      ...base, background: T.gold, color: T.white,
      boxShadow: hov ? "0 10px 26px -4px rgba(193,153,46,0.46)" : "0 4px 16px rgba(193,153,46,0.30)",
    },
    "outline-white": { ...base, background: hov ? "rgba(255,255,255,0.10)" : "transparent", color: T.white, border: `1.5px solid rgba(255,255,255,0.55)` },
    "outline-navy":  { ...base, background: hov ? "rgba(16,42,66,0.05)" : "transparent", color: T.navy, border: `1.5px solid ${T.navy}` },
  };
  const iconCircleBg = variant === "gold" ? "rgba(255,255,255,0.22)" : "rgba(16,42,66,0.08)";
  const iconColor = variant === "gold" ? T.white : variant === "outline-white" ? T.white : T.navy;
  return (
    <button
      style={styles[variant]}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = hov ? "translateY(-2px) scale(1.01)" : "translateY(0) scale(1)"; }}
    >
      {label}
      {icon && (
        <span style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: size === "sm" ? "26px" : "30px", height: size === "sm" ? "26px" : "30px",
          borderRadius: "50%",
          background: iconCircleBg,
          color: iconColor,
          transform: hov ? "translate(2px, -1px) scale(1.06)" : "translate(0,0) scale(1)",
          transition: `transform 0.3s ${EASE}`,
          flexShrink: 0,
        }}>
          <Ico.arrow />
        </span>
      )}
    </button>
  );
}
