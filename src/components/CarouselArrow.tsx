import React from "react";
import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Carousel Arrow Button
// ─────────────────────────────────────────────────────────────────────────────
export function CarouselArrow({ direction, onClick, disabled = false }: {
  direction: "left" | "right"; onClick: () => void; disabled?: boolean;
}) {
  const [hov, setHov] = React.useState(false);
  const isRight = direction === "right";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={isRight ? "Next amenity" : "Previous amenity"}
      style={{
        width: "44px", height: "44px", borderRadius: "50%",
        border: isRight ? "none" : `1.5px solid rgba(193,153,46,${disabled ? 0.18 : 0.50})`,
        background: isRight ? (hov ? "#9C7A24" : T.gold) : (hov ? T.goldFaint : "transparent"),
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.22s ease",
        boxShadow: isRight && !disabled ? "0 4px 14px rgba(193,153,46,0.32)" : "none",
        opacity: disabled ? 0.38 : 1,
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke={isRight ? T.white : T.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      >
        {isRight
          ? <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
          : <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>}
      </svg>
    </button>
  );
}
