import React from "react";
import { T } from "@/lib/theme";
import type { Testimonial } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — Single Card
// ─────────────────────────────────────────────────────────────────────────────
export function TestimonialCard({ t, width }: { t: Testimonial; width: number }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: `0 0 ${width}px`,
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px 26px 24px",
        display: "flex", flexDirection: "column", gap: "0",
        boxShadow: hov
          ? "0 24px 64px rgba(8,14,28,0.14), 0 6px 20px rgba(8,14,28,0.08)"
          : "0 4px 28px rgba(8,14,28,0.07), 0 1px 6px rgba(8,14,28,0.04)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: `transform 0.35s ${T.easeSmooth}, box-shadow 0.35s ${T.easeSmooth}`,
        cursor: "default",
        flexShrink: 0,
        border: `1px solid rgba(193,153,46,${hov ? 0.22 : 0.10})`,
      }}
    >
      {/* Gold quotation icon */}
      <div style={{
        marginBottom: "16px",
        opacity: hov ? 1 : 0.7,
        transition: "opacity 0.3s",
        filter: hov ? "drop-shadow(0 2px 8px rgba(193,153,46,0.45))" : "none",
      }}>
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
          <path d="M0 24V15C0 6.7 4.8 1.8 14.4 0L16 2.8C10.5 4.1 7.8 7.2 7.3 11.5H14V24H0zm18 0V15C18 6.7 22.8 1.8 32.4 0L34 2.8C28.5 4.1 25.8 7.2 25.3 11.5H32V24H18z"
            fill={T.gold} fillOpacity="0.60"/>
        </svg>
      </div>

      {/* Review text */}
      <p style={{
        fontFamily: T.sans, fontWeight: 400, fontSize: "13.5px",
        lineHeight: 1.75, color: "#475569",
        margin: 0, marginBottom: "22px", flex: 1,
      }}>
        {t.review}
      </p>

      {/* Thin gold divider */}
      <div style={{
        height: "1px",
        background: `linear-gradient(to right, ${T.gold}, rgba(193,153,46,0.2))`,
        marginBottom: "18px",
        opacity: 0.5,
      }} />

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

        {/* ── Avatar: shows photo if t.photo is set, otherwise initials circle ── */}
        <div style={{
          width: "46px", height: "46px", borderRadius: "50%",
          flexShrink: 0, overflow: "hidden",
          border: "2px solid rgba(193,153,46,0.35)",
          background: t.photo ? "transparent" : t.avatarBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: hov ? "scale(1.06)" : "scale(1)",
          transition: `transform 0.35s ${T.easeSnap}`,
          boxShadow: hov ? "0 0 0 3px rgba(193,153,46,0.18)" : "none",
        }}>
          {t.photo ? (
            /* ── Real customer photo ── set t.photo to show this */
            <img
              src={t.photo}
              alt={t.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          ) : (
            /* ── Fallback initials — edit t.initials and t.avatarBg ── */
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "13px", color: "rgba(255,255,255,0.92)", letterSpacing: "0.04em" }}>
              {t.initials}
            </span>
          )}
        </div>

        {/* ── Name + city — edit t.name and t.city ── */}
        <div>
          <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "13px", color: T.navy, margin: 0, marginBottom: "3px" }}>
            {t.name}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/>
              <circle cx="12" cy="8.5" r="2"/>
            </svg>
            <span style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#94A1B5" }}>{t.city}</span>
          </div>
        </div>

        {/* Stars */}
        <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
          {[1,2,3,4,5].map(s => (
            <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={T.gold}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — Count-up stat
// ─────────────────────────────────────────────────────────────────────────────
export function StatCounter({ value, suffix, label, visible, delay = 0 }: {
  value: number; suffix: string; label: string; visible: boolean; delay?: number;
}) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const startTime = Date.now() + delay;
    let raf: number;
    function tick() {
      const now = Date.now();
      if (now < startTime) { raf = requestAnimationFrame(tick); return; }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, delay]);

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ${T.easeSmooth} ${delay + 100}ms, transform 0.6s ${T.easeSmooth} ${delay + 100}ms`,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
        <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "40px", color: T.white, lineHeight: 1 }}>{count}</span>
        <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "28px", color: T.gold, lineHeight: 1 }}>{suffix}</span>
      </div>
      <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: 0, textAlign: "center", lineHeight: 1.5 }}>{label}</p>
    </div>
  );
}
