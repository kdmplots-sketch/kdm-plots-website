import React from "react";
import { T, useVP } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Floating Contact — WhatsApp + Call, fixed to the viewport
// ─────────────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "918220563394"; // country code + number, no spaces/symbols
const WHATSAPP_MESSAGE = "Hi KDM Plots, I'm interested in your projects. Could you share more details?";
const PHONE_NUMBER = "+918220563394";

function FloatingActionBtn({
  href, bg, label, children, showRing = false, target,
}: {
  href: string; bg: string; label: string; children: React.ReactNode; showRing?: boolean; target?: string;
}) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "54px", height: "54px",
        borderRadius: "50%",
        background: bg,
        boxShadow: hov
          ? "0 10px 28px -4px rgba(8,14,28,0.42)"
          : "0 6px 20px -4px rgba(8,14,28,0.32)",
        transform: hov ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
        transition: "transform 0.3s cubic-bezier(0.32,0.72,0,1), box-shadow 0.3s cubic-bezier(0.32,0.72,0,1)",
        textDecoration: "none",
      }}
    >
      {showRing && (
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: bg,
          animation: "kdmPulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
          pointerEvents: "none",
        }} />
      )}
      {children}

      {/* Hover tooltip — desktop only (hover-capable pointers) */}
      <span style={{
        position: "absolute", right: "calc(100% + 12px)", top: "50%",
        transform: hov ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(6px)",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.22s, transform 0.22s",
        background: T.navyDeep, color: T.white,
        fontFamily: T.sans, fontWeight: 600, fontSize: "11.5px",
        padding: "7px 12px", borderRadius: "8px",
        whiteSpace: "nowrap", pointerEvents: "none",
      }}>
        {label}
      </span>
    </a>
  );
}

export function FloatingContact() {
  const { isMobile } = useVP();
  return (
    <div style={{
      position: "fixed", zIndex: 25,
      bottom: isMobile ? "20px" : "32px",
      right: isMobile ? "16px" : "32px",
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: "14px",
    }}>
      <FloatingActionBtn
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        bg="#25D366"
        label="Chat on WhatsApp"
        showRing
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.58 5.9L0 24l6.44-1.7a11.8 11.8 0 005.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.41zM12.05 21.3h-.01a9.8 9.8 0 01-5-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.78 9.78 0 01-1.5-5.2c0-5.42 4.42-9.83 9.86-9.83a9.78 9.78 0 019.84 9.83c0 5.43-4.42 9.88-9.8 9.88zm5.4-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-1.7-.85-2.81-1.52-3.93-3.44-.3-.5.3-.47.85-1.57.1-.2.05-.37-.05-.52-.1-.15-.6-1.45-.82-1.93-.22-.48-.44-.42-.6-.42-.16 0-.35-.02-.54-.02-.2 0-.5.07-.77.37-.27.3-1.03 1-1.03 2.45 0 1.44 1.05 2.84 1.2 3.04.15.2 2.03 3.1 5 4.24 2.47.95 2.97.76 3.5.71.53-.05 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.26-.2-.56-.35z"/>
        </svg>
      </FloatingActionBtn>

      <FloatingActionBtn
        href={`tel:${PHONE_NUMBER}`}
        bg={T.gold}
        label="Call Us Now"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </FloatingActionBtn>
    </div>
  );
}
