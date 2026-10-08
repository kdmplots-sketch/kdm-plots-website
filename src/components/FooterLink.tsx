import React from "react";
import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Link item
// ─────────────────────────────────────────────────────────────────────────────
export function FooterLink({ label, href = "#" }: { label: string; href?: string }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: "8px",
        fontFamily: T.sans, fontWeight: 400, fontSize: "13px",
        color: hov ? T.gold : "#5B6B82",
        textDecoration: "none",
        transition: "color 0.3s cubic-bezier(0.32,0.72,0,1), transform 0.3s cubic-bezier(0.32,0.72,0,1)",
        padding: "7px 0",
        transform: hov ? "translateX(3px)" : "translateX(0)",
      }}
    >
      <span style={{
        display: "inline-block", width: "14px", height: "1px",
        background: hov ? T.gold : "rgba(193,153,46,0.35)",
        borderRadius: "9999px", transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)", flexShrink: 0,
        transform: hov ? "scaleX(1.6)" : "scaleX(1)",
        transformOrigin: "left",
      }} />
      {label}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Social icon button
// ─────────────────────────────────────────────────────────────────────────────
export function SocialBtn({ icon, label, href = "#" }: { icon: React.ReactNode; label: string; href?: string }) {
  const [hov, setHov] = React.useState(false);
  const external = href !== "#";
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "38px", height: "38px", borderRadius: "50%",
        border: `1.5px solid ${hov ? T.gold : "rgba(193,153,46,0.30)"}`,
        background: hov ? T.goldFaint : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        textDecoration: "none",
        transition: `all 0.3s ${T.easeSnap}`,
        transform: hov ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {icon}
    </a>
  );
}
