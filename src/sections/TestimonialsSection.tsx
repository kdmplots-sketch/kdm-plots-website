import React from "react";
import { T, useVP } from "@/lib/theme";
import { useInView } from "@/lib/useInView";
import type { Testimonial } from "@/lib/types";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard, StatCounter } from "@/components/TestimonialCard";

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS DATA — Edit everything here
// To add a testimonial: copy any block below, paste it, give it a unique id.
// To remove: delete the block.
// To reorder: move blocks up or down.
// ─────────────────────────────────────────────────────────────────────────────
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Arun Kumar",
    city: "Madurai",
    initials: "AK",
    avatarBg: "#2C4A6E",
    // photo: arunKumarPhoto,   ← uncomment after importing the photo
    review:
      "The entire buying experience with KDM was seamless and transparent. The team guided us at every step and the plot location is excellent.",
  },
  {
    id: 2,
    name: "Meena Ramesh",
    city: "Anna Nagar, Madurai",
    initials: "MR",
    avatarBg: "#4A3728",
    // photo: meenaRameshPhoto,
    review:
      "We were looking for a secure investment for our children's future. KDM Plots offered the perfect combination of value, location, and trust.",
  },
  {
    id: 3,
    name: "Suresh Balaji",
    city: "Tirunelveli",
    initials: "SB",
    avatarBg: "#2E5040",
    // photo: sureshBalajiPhoto,
    review:
      "The infrastructure, wide roads, and green surroundings convinced us immediately. We are so happy to be a part of the KDM community.",
  },
  {
    id: 4,
    name: "Kavitha Srinivasan",
    city: "Bangalore",
    initials: "KS",
    avatarBg: "#5C3A6E",
    // photo: kavithaSrinivasanPhoto,
    review:
      "From documentation to registration, everything was handled professionally. KDM truly lives up to its promise of quality and reliability.",
  },
  {
    id: 5,
    name: "Rajesh Pandian",
    city: "Coimbatore",
    initials: "RP",
    avatarBg: "#6E4A2C",
    // photo: rajeshPandianPhoto,
    review:
      "Investing with KDM was the best financial decision we made. The appreciation in just two years has been remarkable. Highly recommended.",
  },
  {
    id: 6,
    name: "Divya Krishnamurthy",
    city: "Chennai",
    initials: "DK",
    avatarBg: "#3A5C4E",
    // photo: divyaKrishnamurthyPhoto,
    review:
      "Clear documentation, zero hidden charges, and a team that truly cares. KDM Plots gave us complete peace of mind throughout the process.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — Main Section
// ─────────────────────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  const { isMobile, isTablet } = useVP();
  const [heroRef,  heroVisible]  = useInView(0.12);
  const [statRef,  statVisible]  = useInView(0.25);
  const [carouRef, carouVisible] = useInView(0.10);

  // ── Carousel state ──
  const n = TESTIMONIALS.length;
  const cloned: Testimonial[] = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const CARD_GAP = 18;

  // On mobile, the card fills the measured viewport width exactly (no fixed
  // px guess) so it's always centered and never overflows under the arrows.
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = React.useState(0);
  React.useLayoutEffect(() => {
    function measure() {
      if (!viewportRef.current) return;
      setViewportW(viewportRef.current.clientWidth);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  const CARD_W = isMobile ? (viewportW || 300) : 288;
  const STEP = CARD_W + CARD_GAP;

  const trackRef    = React.useRef<HTMLDivElement>(null);
  const [pos, setPos]         = React.useState(n);   // index in cloned array
  const [sliding, setSliding] = React.useState(false);
  const [paused, setPaused]   = React.useState(false);
  const [dragStart, setDragStart]   = React.useState(0);
  const [dragDelta, setDragDelta]   = React.useState(0);
  const [dragging, setDragging]     = React.useState(false);
  const autoRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(nextPos: number, animate = true) {
    if (sliding && animate) return;
    if (animate) setSliding(true);
    setPos(nextPos);
  }

  function handleTrackEnd(e: React.TransitionEvent<HTMLDivElement>) {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;
    setPos(prev => {
      let next = prev;
      if (prev < n)      next = prev + n;
      else if (prev >= n * 2) next = prev - n;
      if (next !== prev && trackRef.current) {
        trackRef.current.style.transition = "none";
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (trackRef.current) trackRef.current.style.transition = "";
        }));
      }
      return next;
    });
    setSliding(false);
  }

  // Auto-play
  React.useEffect(() => {
    if (paused) { if (autoRef.current) clearInterval(autoRef.current); return; }
    autoRef.current = setInterval(() => goTo(pos + 1), 6000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [paused, pos]);

  // Pointer drag
  function onDown(e: React.PointerEvent) {
    setDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onMove(e: React.PointerEvent) {
    if (!dragging) return;
    setDragDelta(e.clientX - dragStart);
  }
  function onUp() {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta < -40) goTo(pos + 1);
    else if (dragDelta > 40) goTo(pos - 1);
    setDragDelta(0);
  }

  // Safety net: if a pointerup/pointercancel is ever missed (common with
  // touch emulation), this guarantees the card doesn't stay stuck mid-drag.
  React.useEffect(() => {
    if (!dragging) return;
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, dragDelta, pos]);

  // Wheel
  function onWheel(e: React.WheelEvent) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 30) goTo(pos + 1);
      else if (e.deltaX < -30) goTo(pos - 1);
    }
  }

  const translateX = -(pos * STEP) + dragDelta;

  return (
    <section style={{ background: T.ivory, width: "100%", overflow: "hidden" }}>

      {/* ════ HERO SPLIT ════ */}
      <div
        ref={heroRef}
        style={{
          maxWidth: "1920px", margin: "0 auto",
          display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "stretch", minHeight: isMobile ? "auto" : "480px",
          position: "relative",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* LEFT — header */}
        <div style={{
          flex: isMobile ? "none" : "0 0 46%", maxWidth: isMobile ? "100%" : "700px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: isMobile ? "72px 20px 56px" : isTablet ? "64px 40px" : "80px 64px 80px 80px",
          position: "relative", zIndex: 2, background: T.ivory,
        }}>
          {/* Giant translucent quote mark behind heading */}
          <div style={{
            position: "absolute", top: "40px", left: "60px",
            fontFamily: T.serif, fontWeight: 900,
            fontSize: "320px", lineHeight: 1,
            color: "rgba(193,153,46,0.07)",
            userSelect: "none", pointerEvents: "none",
            zIndex: 0, letterSpacing: "-0.05em",
          }}>"</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
              <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
              <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>
                Client Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : isTablet ? "44px" : "52px", lineHeight: 1.06, margin: 0, marginBottom: "22px", letterSpacing: "-0.01em" }}>
              <span style={{ display: "block", color: T.navy }}>Trusted by families.</span>
              <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Recommended for life.</span>
            </h2>

            {/* Body */}
            <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.82, color: "#5B6B82", margin: 0, maxWidth: "380px" }}>
              At KDM Plots, every happy customer is a reflection of our commitment
              to transparency, quality, and trust. Here's what some of our clients
              have to say.
            </p>
          </div>
        </div>

        {/* RIGHT — KDM entrance photo */}
        {!isMobile && <div style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: isTablet ? "400px" : undefined }}>
          {/* Ivory bleed left */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
            background: `linear-gradient(to right, ${T.ivory} 0%, rgba(248,245,239,0.65) 18%, rgba(248,245,239,0.08) 42%, transparent 65%)`,
          }} />
          <PhotoPlaceholder patternId="grid-invest-2" fill={false} style={{ width: "100%", height: "100%" }} />
        </div>}
      </div>

      {/* ════ TESTIMONIAL CAROUSEL ════ */}
      <div
        ref={carouRef}
        style={{
          padding: "0 0 72px",
          opacity: carouVisible ? 1 : 0,
          transform: carouVisible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px", position: "relative" }}>

          {/* Left/Right arrows — overlap the cards on narrow screens, so they
              only float outside on tablet/desktop; mobile relies on swipe + dots */}
          {!isMobile && (
          <button
            onClick={() => goTo(pos - 1)}
            aria-label="Previous testimonial"
            style={{
              position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px", height: "44px", borderRadius: "50%",
              border: `1.5px solid rgba(193,153,46,0.45)`, background: T.ivory,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.22s",
              boxShadow: "0 4px 18px rgba(8,14,28,0.10)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.borderColor = T.gold; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.ivory; e.currentTarget.style.borderColor = "rgba(193,153,46,0.45)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.navy} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
          </button>
          )}

          {!isMobile && (
          <button
            onClick={() => goTo(pos + 1)}
            aria-label="Next testimonial"
            style={{
              position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px", height: "44px", borderRadius: "50%",
              border: "none", background: T.gold,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.22s",
              boxShadow: "0 4px 16px rgba(193,153,46,0.35)",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.white} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          )}

          {/* Track viewport — measured so the mobile card width always matches exactly */}
          <div
            ref={viewportRef}
            style={{ overflow: "hidden", padding: isMobile ? "16px 0 24px" : "16px 4px 24px", touchAction: "pan-y" }}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onWheel={onWheel}
          >
            <div
              ref={trackRef}
              onTransitionEnd={handleTrackEnd}
              style={{
                display: "flex",
                gap: `${CARD_GAP}px`,
                transform: `translateX(${translateX}px)`,
                transition: (sliding && !dragging) ? "transform 0.55s cubic-bezier(0.25,1,0.5,1)" : "none",
                willChange: "transform",
                userSelect: "none",
                cursor: dragging ? "grabbing" : "grab",
              }}
            >
              {cloned.map((t, i) => (
                <TestimonialCard key={i} t={t} width={CARD_W} />
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "8px" }}>
            {TESTIMONIALS.map((_, i) => {
              const active = ((pos % n) + n) % n === i;
              return (
                <button
                  key={i}
                  onClick={() => goTo(n + i)}
                  style={{
                    width: active ? "24px" : "7px", height: "7px",
                    borderRadius: "9999px",
                    background: active ? T.gold : "rgba(193,153,46,0.30)",
                    border: "none", padding: 0, cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ════ BOTTOM DARK STRIP ════ */}
      <div
        ref={statRef}
        style={{
          margin: isMobile ? "0 16px 40px" : "0 40px 48px",
          borderRadius: "20px",
          background: `linear-gradient(135deg, ${T.navyDeep} 0%, ${T.navy} 60%, rgba(15,31,53,0.95) 100%)`,
          overflow: "hidden",
          boxShadow: "0 20px 64px rgba(8,14,28,0.22), 0 4px 16px rgba(8,14,28,0.12)",
          position: "relative",
        }}
      >
        {/* Subtle gold grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(193,153,46,0.07) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(193,153,46,0.05) 0%, transparent 45%)`,
        }} />

        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "stretch", flexDirection: isMobile ? "column" : "row", flexWrap: isTablet ? "wrap" : "nowrap" }}>

          {/* Col 1 — headline */}
          <div style={{
            flex: isMobile ? "none" : "0 0 260px", padding: isMobile ? "32px 24px" : "48px 40px",
            borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <h3 style={{
              fontFamily: T.serif, fontWeight: 700,
              fontSize: "28px", lineHeight: 1.2, margin: 0, color: T.white,
            }}>
              Real stories.<br/>
              <span style={{ color: T.gold, fontStyle: "italic" }}>Real satisfaction.</span>
            </h3>
          </div>

          {/* Col 2 — rating */}
          <div style={{
            flex: 1, padding: isMobile ? "32px 24px" : "48px 32px",
            borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px",
          }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={T.gold}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <StatCounter value={4} suffix=".8/5" label="Customer Rating" visible={statVisible} delay={0} />
          </div>

          {/* Col 3 — families */}
          <div style={{
            flex: 1, padding: isMobile ? "32px 24px" : "48px 32px",
            borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <StatCounter value={500} suffix="+" label="Happy Families" visible={statVisible} delay={120} />
          </div>

          {/* Col 4 — guarantee */}
          <div style={{
            flex: 1, padding: isMobile ? "32px 24px" : "48px 32px",
            borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <StatCounter value={100} suffix="%" label="Clear Title Guarantee" visible={statVisible} delay={240} />
          </div>

          {/* Col 5 — signature statement */}
          <div style={{
            flex: isMobile ? "none" : "0 0 260px", padding: isMobile ? "32px 24px" : "48px 40px",
            display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px",
          }}>
            <p style={{
              fontFamily: T.sans, fontWeight: 400, fontSize: "13px",
              lineHeight: 1.75, color: "rgba(255,255,255,0.60)",
              margin: 0, fontStyle: "italic",
            }}>
              "We don't just sell plots,<br/>we build lifelong relationships."
            </p>
            <div>
              <div style={{ width: "28px", height: "1px", background: T.gold, opacity: 0.5, marginBottom: "8px" }} />
              <p style={{
                fontFamily: T.serif, fontWeight: 700, fontStyle: "italic",
                fontSize: "14px", color: T.gold, margin: 0, letterSpacing: "0.02em",
              }}>
                Thank you for trusting us.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
