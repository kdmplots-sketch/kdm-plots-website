import React from "react";
import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — Accordion item
// ─────────────────────────────────────────────────────────────────────────────
export function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderBottom: "1px solid rgba(15,31,53,0.08)",
        background: open ? "rgba(193,153,46,0.04)" : hov ? "rgba(193,153,46,0.02)" : "transparent",
        borderRadius: open ? "8px" : "0",
        transition: "background 0.25s, border-radius 0.25s",
        marginBottom: "2px",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "16px", padding: "18px 20px",
          background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: T.sans, fontWeight: 600, fontSize: "13.5px",
          color: open ? T.navy : hov ? T.navy : "#475569",
          lineHeight: 1.4, transition: "color 0.2s",
        }}>{q}</span>

        {/* Gold plus / minus icon */}
        <div style={{
          width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0,
          border: `1.5px solid rgba(193,153,46,${open ? 0.7 : hov ? 0.55 : 0.35})`,
          background: open ? T.gold : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: `all 0.35s ${T.easeSnap}`,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          boxShadow: open ? "0 4px 14px rgba(193,153,46,0.28)" : "none",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={open ? T.white : T.gold} strokeWidth="1.8" strokeLinecap="round">
            <line x1="5" y1="1" x2="5" y2="9"/><line x1="1" y1="5" x2="9" y2="5"/>
          </svg>
        </div>
      </button>

      {/* Answer — height and opacity animate together so it reads as a
          reveal rather than a hard snap into view */}
      <div style={{
        maxHeight: open ? "200px" : "0",
        overflow: "hidden",
        transition: `max-height 0.42s ${T.easeSmooth}`,
      }}>
        <p style={{
          fontFamily: T.sans, fontWeight: 400, fontSize: "13px",
          lineHeight: 1.75, color: "#5B6B82",
          margin: 0, padding: "0 20px 18px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          transition: `opacity 0.3s ${T.easeSmooth} ${open ? "0.08s" : "0s"}, transform 0.3s ${T.easeSmooth} ${open ? "0.08s" : "0s"}`,
        }}>{a}</p>
      </div>
    </div>
  );
}
