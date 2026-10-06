import React from "react";
import { T, useVP } from "@/lib/theme";
import { useInView } from "@/lib/useInView";

// ─────────────────────────────────────────────────────────────────────────────
// Stat Item
// ─────────────────────────────────────────────────────────────────────────────
export function parseStatNumber(raw: string): { value: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { value: 0, suffix: raw };
  return { value: parseInt(match[1], 10), suffix: match[2] };
}

export function StatBentoTile({
  icon, number, label, big = false, visible, delay,
}: { icon: React.ReactNode; number: string; label: string; big?: boolean; visible: boolean; delay: number }) {
  const { isMobile } = useVP();
  const { value, suffix } = parseStatNumber(number);
  const [count, setCount] = React.useState(0);
  const reduceMotionRef = React.useRef(
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  React.useEffect(() => {
    if (!visible) return;
    if (reduceMotionRef.current) { setCount(value); return; }
    const duration = 1300;
    const startTime = Date.now() + delay;
    let raf: number;
    function tick() {
      const now = Date.now();
      if (now < startTime) { raf = requestAnimationFrame(tick); return; }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, delay]);

  const row = isMobile || (big && !isMobile);
  const iconSize = isMobile ? "40px" : row ? "58px" : "46px";
  const numberSize = isMobile ? "28px" : row ? "50px" : "36px";
  const suffixSize = isMobile ? "19px" : row ? "34px" : "25px";
  const padding = isMobile ? "14px 16px" : row ? "30px 34px" : "26px 22px";
  const gap = isMobile ? "14px" : row ? "22px" : "14px";

  return (
    <div
      style={{
        position: "relative",
        gridColumn: big && !isMobile ? "span 2" : "span 1",
        background: "rgba(16,42,66,0.025)",
        border: "1px solid rgba(16,42,66,0.07)",
        borderRadius: isMobile ? "16px" : "20px",
        padding: "4px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s cubic-bezier(0.32,0.72,0,1) ${delay}ms, transform 0.6s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
      }}
    >
      <div
        style={{
          background: T.white,
          borderRadius: isMobile ? "13px" : "16px",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: row ? "row" : "column",
          alignItems: row ? "center" : "flex-start",
          textAlign: row ? "left" : "left",
          gap,
          padding,
          boxShadow: "0 10px 30px -8px rgba(16,42,66,0.10)",
        }}
      >
        <div
          style={{
            width: iconSize, height: iconSize,
            borderRadius: "50%", background: T.goldFaint,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2px", justifyContent: "flex-start" }}>
            <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: numberSize, color: T.navy, lineHeight: 1, letterSpacing: "-0.01em" }}>
              {count}
            </span>
            <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: suffixSize, color: T.gold, lineHeight: 1 }}>
              {suffix}
            </span>
          </div>
          <p style={{ fontFamily: T.sans, fontWeight: 500, fontSize: isMobile ? "10.5px" : "11.5px", letterSpacing: "0.07em", textTransform: "uppercase", color: "#5B6B82", margin: isMobile ? "4px 0 0" : "6px 0 0" }}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function StatsBentoGrid({ stats }: { stats: { icon: React.ReactNode; number: string; label: string }[] }) {
  const { isMobile, isTablet } = useVP();
  const [ref, visible] = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        maxWidth: "1440px", margin: "0 auto",
        padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
        gap: isMobile ? "14px" : "16px",
      }}
    >
      {stats.map((s, i) => (
        <StatBentoTile
          key={s.label}
          icon={s.icon}
          number={s.number}
          label={s.label}
          big={i === 0}
          visible={visible}
          delay={i * 90}
        />
      ))}
    </div>
  );
}
