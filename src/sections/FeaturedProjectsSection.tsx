import React from "react";
import { T, useVP } from "@/lib/theme";
import { CATEGORIES, type Category, type Project, type ProjectStatus } from "@/lib/types";
import { ProjectCard, ProjectInfoItem, DecorativeBirds } from "@/components/ProjectCard";
import { useBookingModal } from "@/lib/BookingContext";
import { useInView } from "@/lib/useInView";

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — rebuilt section
// ─────────────────────────────────────────────────────────────────────────────
const ALL_PROJECTS: Project[] = [
  { id: 2, status: "Ongoing", title: "Raja Rajeshwari Nagar",  location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385930/IMG-20261006-WA0032-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385929/IMG-20261006-WA0030-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385928/IMG-20261006-WA0031-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385924/IMG-20261006-WA0029-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385924/IMG-20261006-WA0028-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385924/IMG-20261006-WA0027-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385920/IMG-20261006-WA0026-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385918/IMG-20261006-WA0023-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385918/IMG-20261006-WA0022-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385916/IMG-20261006-WA0024-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385914/IMG-20261006-WA0020-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385912/IMG-20261006-WA0021-100kb.jpg",
    ] },
  { id: 3, status: "Ongoing", title: "Lucky City",             location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385995/IMG-20261006-WA0040-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385995/IMG-20261006-WA0041-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385991/IMG-20261006-WA0039-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385991/IMG-20261006-WA0042-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385990/IMG-20261006-WA0038-100kb.jpg",
    ] },
  { id: 4, status: "Ongoing", title: "Ayyapatti Highway City", location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386077/IMG-20261006-WA0074-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386076/IMG-20261006-WA0073-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386075/IMG-20261006-WA0072-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386071/IMG-20261006-WA0070-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386071/IMG-20261006-WA0067-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386070/IMG-20261006-WA0069-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386069/IMG-20261006-WA0068-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386067/IMG-20261006-WA0071-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386062/IMG-20261006-WA0064-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386061/IMG-20261006-WA0065-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386061/IMG-20261006-WA0066-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386060/IMG-20261006-WA0063-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386060/IMG-20261006-WA0062-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386058/IMG-20261006-WA0059-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386056/IMG-20261006-WA0061-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386055/IMG-20261006-WA0060-100kb.jpg",
    ] },
  { id: 5, status: "Ongoing", title: "Green View City",        location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386151/IMG-20261006-WA0102-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386149/IMG-20261006-WA0101-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386147/IMG-20261006-WA0099-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386146/IMG-20261006-WA0100-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386145/IMG-20261006-WA0098-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386142/IMG-20261006-WA0097-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386136/IMG-20261006-WA0096-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386133/IMG-20261006-WA0095-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386129/IMG-20261006-WA0093-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386127/IMG-20261006-WA0092-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386126/IMG-20261006-WA0094-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386126/IMG-20261006-WA0090-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386124/IMG-20261006-WA0091-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386123/IMG-20261006-WA0089-100kb.jpg",
    ],
    approvedCopies: [
      { title: "DTCP Approved Layout", pages: [
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791444453/GREEN_VIEW_CITY_ALAGARKOVIL_DTCP_COPY_page-0001.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791444453/GREEN_VIEW_CITY_ALAGARKOVIL_DTCP_COPY_page-0002.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791444454/GREEN_VIEW_CITY_ALAGARKOVIL_DTCP_COPY_page-0003.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791444454/GREEN_VIEW_CITY_ALAGARKOVIL_DTCP_COPY_page-0004.jpg",
      ] },
      { title: "RERA Approved Copy", pages: [
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791444895/GREEN_VIEW_CITY_ALAGARKOVIL_RERA_COPY_page-0001.jpg",
      ] },
    ] },
  { id: 7, status: "Ongoing", title: "Golden Park",            location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386244/IMG-20261007-WA0039-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386242/IMG-20261007-WA0038-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386241/IMG-20261007-WA0037-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386240/IMG-20261007-WA0036-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386240/IMG-20261007-WA0035-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386235/IMG-20261007-WA0034-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386232/IMG-20261007-WA0032-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386230/IMG-20261007-WA0031-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386228/IMG-20261007-WA0030-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386227/IMG-20261007-WA0029-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386225/IMG-20261007-WA0028-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386224/IMG-20261007-WA0027-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386223/IMG-20261007-WA0026-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386222/IMG-20261007-WA0025-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386219/IMG-20261007-WA0024-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386217/IMG-20261007-WA0023-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386217/IMG-20261007-WA0021-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386216/IMG-20261007-WA0022-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386214/IMG-20261007-WA0020-100kb.jpg",
    ],
    approvedCopies: [
      { title: "DTCP Approved Layout", pages: [
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445365/GOLDEN_PARK_POOVANTHI_DTCP_COPY_page-0001.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445367/GOLDEN_PARK_POOVANTHI_DTCP_COPY_page-0002.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445371/GOLDEN_PARK_POOVANTHI_DTCP_COPY_page-0003.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445373/GOLDEN_PARK_POOVANTHI_DTCP_COPY_page-0004.jpg",
      ] },
      { title: "RERA Approved Copy", pages: [
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445528/GOLDEN_PARK_POOVANTHI_RERA_COPY_page-0001.jpg",
      ] },
    ] },
  { id: 8, status: "Ongoing", title: "Royal Garden",           location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386426/IMG-20261007-WA0051-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386421/IMG-20261007-WA0050-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386419/IMG-20261007-WA0049-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386418/IMG-20261007-WA0048-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386287/IMG-20261007-WA0047-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791386285/IMG-20261007-WA0046-100kb.jpg",
    ],
    approvedCopies: [
      { title: "DTCP Approved Layout", pages: [
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445141/ROYAL_GARDEN_NATTARMANGALAM_DTCP_page-0001.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445142/ROYAL_GARDEN_NATTARMANGALAM_DTCP_page-0002.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445144/ROYAL_GARDEN_NATTARMANGALAM_DTCP_page-0003.jpg",
        "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791445147/ROYAL_GARDEN_NATTARMANGALAM_DTCP_page-0004.jpg",
      ] },
    ] },
  { id: 9, status: "Ongoing", title: "RK Nagar",               location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true,
    images: [
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385821/IMG-20261007-WA0072-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385820/IMG-20261007-WA0069-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385819/IMG-20261007-WA0070-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385816/IMG-20261007-WA0067-100kb.jpg",
      "https://res.cloudinary.com/ubmmoo5e/image/upload/v1791385815/IMG-20261007-WA0071-100kb.jpg",
    ] },
];

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Section
// ─────────────────────────────────────────────────────────────────────────────
const GAP_PX = 18;
const AUTOPLAY_MS = 4500;

export function FeaturedProjectsSection() {
  const { isMobile, isTablet } = useVP();
  const { open: openBooking } = useBookingModal();
  const [activeCategory, setActiveCategory] = React.useState<Category>("Ongoing");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef     = React.useRef<HTMLDivElement>(null);
  const [cardW, setCardW]   = React.useState(0);
  const [sliding, setSliding] = React.useState(false);
  const [autoPaused, setAutoPaused] = React.useState(false);
  const [revealRef, revealed] = useInView(0.1);

  const source: Project[] = ALL_PROJECTS.filter(p => p.status === activeCategory as ProjectStatus);

  const n = source.length; // 9 for Ongoing

  // ── Triple-clone for seamless infinite loop ──
  // Layout: [copy-A (n items), copy-B (n items), copy-C (n items)]
  // Stable DOM index for each card = 0 … 3n-1  (never changes)
  // Each card's `project` = clonedTrack[domIndex]  (never changes for that DOM node)
  const clonedTrack: Project[] = [...source, ...source, ...source];

  // trackPos = DOM index of the leftmost VISIBLE card
  // Start in copy-B so we can scroll both directions immediately
  const [trackPos, setTrackPos] = React.useState(n);

  React.useEffect(() => {
    setTrackPos(n);
    setSliding(false);
  }, [activeCategory, n]);

  React.useLayoutEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const cols = isMobile ? 1 : isTablet ? 2 : 3;
      setCardW(Math.floor((w - GAP_PX * (cols - 1)) / cols));
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [isMobile, isTablet]);

  function go(dir: 1 | -1) {
    if (sliding || !cardW) return;
    setSliding(true);
    setTrackPos(prev => prev + dir);
  }

  // Real (non-cloned) index of the currently leading card — drives the dot/counter UI
  const activeIndex = n > 0 ? ((trackPos % n) + n) % n : 0;

  function goToIndex(idx: number) {
    if (sliding || !cardW || idx === activeIndex) return;
    setSliding(true);
    setTrackPos(n + idx);
  }

  // ── Auto-swipe — advances on its own, pauses on hover/touch or mid-transition ──
  React.useEffect(() => {
    if (autoPaused || sliding || n <= 1 || !cardW) return;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [autoPaused, sliding, n, cardW, trackPos]);

  // ── KEY FIX: only respond to this track's OWN transform transition ──
  // Child card transitions (hover lift, image zoom) also fire transitionend
  // and would bubble here, changing trackPos and swapping card data.
  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    if (e.target !== trackRef.current) return;   // ignore bubbled child events
    if (e.propertyName !== "transform") return;  // ignore non-transform transitions

    // Silent jump: keep us inside copy-B range [n, 2n-1]
    setTrackPos(prev => {
      let next = prev;
      if (prev < n)      next = prev + n;
      else if (prev >= n * 2) next = prev - n;

      if (next !== prev && trackRef.current) {
        trackRef.current.style.transition = "none";
        // next render will apply new trackPos without animation
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (trackRef.current) trackRef.current.style.transition = "";
        }));
      }
      return next;
    });
    setSliding(false);
  }

  // translateX so the card at `trackPos` is flush left in the container
  const translateX = -(trackPos * (cardW + GAP_PX));

  return (
    <section style={{ position: "relative", width: "100%", background: T.ivory, overflow: "hidden" }}>


      <div
        ref={revealRef}
        style={{
          position: "relative", zIndex: 2,
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >

        {/* ════ CENTERED HEADER ════ */}
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "72px 20px 0" : isTablet ? "80px 40px 0" : "96px 80px 0", position: "relative" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: T.gold }}>
              Our Projects
            </span>
            <div style={{ width: "28px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, textAlign: "center", margin: "0 auto 22px", letterSpacing: "-0.01em" }}>
            <span style={{ display: "block", fontSize: isMobile ? "32px" : isTablet ? "44px" : "56px", lineHeight: 1.05, color: T.navy }}>Spaces that inspire.</span>
            <span style={{ display: "block", fontSize: isMobile ? "32px" : isTablet ? "44px" : "56px", lineHeight: 1.05 }}>
              <span style={{ color: T.gold, fontStyle: "italic" }}>Futures</span>
              <span style={{ color: T.navy }}> that last.</span>
            </span>
          </h2>

          <p style={{
            fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.80,
            color: "#5B6B82", textAlign: "center", margin: "0 auto 36px", maxWidth: "460px",
          }}>
            Thoughtfully designed layouts in Madurai's most desirable locations.
            Crafted for a better lifestyle. Built for long-term value.
          </p>

          {/* Decorative birds */}
          <div style={{ position: "absolute", top: "80px", right: "64px", pointerEvents: "none" }}>
            <DecorativeBirds />
          </div>

          {/* Category tabs */}
          <div
            className={isMobile ? "hide-scrollbar" : undefined}
            style={{
              display: "flex", alignItems: "center",
              justifyContent: isMobile ? "flex-start" : "center",
              gap: "6px", marginBottom: "32px",
              overflowX: isMobile ? "auto" : "visible",
              flexWrap: isMobile ? "nowrap" : "wrap",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              margin: isMobile ? "0 -20px 32px" : "0 0 32px",
              padding: isMobile ? "0 20px" : 0,
            }}
          >
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 22px", borderRadius: "9999px",
                    border: `1.5px solid ${isActive ? T.gold : "rgba(15,31,53,0.20)"}`,
                    background: isActive ? T.gold : "transparent",
                    fontFamily: T.sans, fontWeight: isActive ? 700 : 500,
                    fontSize: "12px", letterSpacing: "0.06em",
                    color: isActive ? T.white : "#5B6B82",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    flexShrink: 0, whiteSpace: "nowrap",
                  }}>
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Prev / Next arrows */}
          {n > 0 && (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "24px" }}>
            <button onClick={() => go(-1)} aria-label="Previous project"
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                border: `1.5px solid rgba(193,153,46,0.45)`, background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.goldFaint; e.currentTarget.style.borderColor = T.gold; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(193,153,46,0.45)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
            </button>
            <button onClick={() => go(1)} aria-label="Next project"
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                border: "none", background: T.gold,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "opacity 0.2s",
                boxShadow: "0 4px 16px rgba(193,153,46,0.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.white} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
          )}
        </div>

        {/* ════ CAROUSEL TRACK ════ */}
        {n === 0 ? (
          <div style={{
            maxWidth: "1440px", margin: "0 auto",
            padding: isMobile ? "40px 20px 72px" : "40px 80px 96px",
            textAlign: "center",
          }}>
            <div style={{
              border: `1.5px dashed rgba(16,42,66,0.18)`,
              borderRadius: "16px",
              padding: isMobile ? "40px 20px" : "56px 40px",
              background: "rgba(255,255,255,0.5)",
            }}>
              <p style={{
                fontFamily: T.sans, fontWeight: 700, fontSize: "11px",
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: T.gold, margin: "0 0 10px",
              }}>
                {activeCategory}
              </p>
              <p style={{
                fontFamily: T.serif, fontWeight: 600, fontSize: isMobile ? "18px" : "22px",
                color: T.navy, margin: "0 0 8px",
              }}>
                No {activeCategory.toLowerCase()} projects to show yet
              </p>
              <p style={{
                fontFamily: T.sans, fontSize: "13px", color: T.gray, margin: 0,
              }}>
                Check back soon, or explore our other project categories above.
              </p>
            </div>
          </div>
        ) : (
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px" }}>
        <div
          ref={containerRef}
          onMouseEnter={() => setAutoPaused(true)}
          onMouseLeave={() => setAutoPaused(false)}
          onTouchStart={() => setAutoPaused(true)}
          onTouchEnd={() => setAutoPaused(false)}
          style={{ overflow: "hidden" }}
        >
          {cardW > 0 && (
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              style={{
                display: "flex",
                gap: `${GAP_PX}px`,
                alignItems: "flex-start",
                transform: `translateX(${translateX}px)`,
                // Animate ONLY when sliding; removed to "none" during silent index jump
                transition: sliding ? "transform 0.68s cubic-bezier(0.22,1,0.36,1)" : "none",
                willChange: "transform",
              }}
            >
              {clonedTrack.map((project, domIdx) => (
                // key=domIdx is STABLE — this DOM node always shows clonedTrack[domIdx]
                // project data is permanently bound to this position; it never swaps
                <div key={domIdx} style={{ flex: `0 0 ${cardW}px` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
        )}

        {/* Slide counter + dot pagination — so visitors know how many projects exist and where they are */}
        {n > 1 && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", padding: "20px 20px 0" }}>
            <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em", color: "#5B6B82", fontVariantNumeric: "tabular-nums" }}>
              {String(activeIndex + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              {source.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => goToIndex(i)}
                  aria-label={`Go to ${p.title}`}
                  style={{
                    width: activeIndex === i ? "22px" : "7px", height: "7px",
                    borderRadius: "9999px", border: "none", padding: 0, cursor: "pointer",
                    background: activeIndex === i ? T.gold : "rgba(193,153,46,0.30)",
                    transition: `all 0.3s ${T.easeSnap}`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Quote strip */}
        <div style={{ padding: isMobile ? "28px 20px" : "32px 80px", display: "flex", justifyContent: "center" }}>
          <p style={{
            fontFamily: T.sans, fontWeight: 400, fontSize: "11px", letterSpacing: "0.20em",
            textTransform: "uppercase", color: "rgba(15,31,53,0.42)", textAlign: "center", margin: 0,
          }}>
            Each layout is carefully planned to offer the perfect balance of{" "}
            <span style={{ color: T.gold, fontStyle: "italic", letterSpacing: "0.10em" }}>lifestyle, connectivity and value</span>
          </p>
        </div>

        {/* ════ BOTTOM INFO STRIP ════ */}
        <div style={{ background: T.white, borderTop: "1px solid rgba(193,153,46,0.12)" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "28px 20px" : "34px 80px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? "20px" : "0" }}>
            <div style={{ flex: 1, display: "flex", alignItems: isMobile ? "stretch" : "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "16px" : "0" }}>
              <ProjectInfoItem
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                title="Visit Our Site" desc="Experience the layout in person."
              />
              <ProjectInfoItem
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>}
                title="Expert Consultation" desc="Get guidance from our specialists."
              />
              <ProjectInfoItem
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>}
                title="Hassle-Free Process" desc="From booking to registration." last
              />
            </div>
            <button
              onClick={openBooking}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "13px 30px", border: `1.5px solid ${T.navy}`, borderRadius: "5px",
                background: "transparent", fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
                color: T.navy, cursor: "pointer", transition: "all 0.2s",
                whiteSpace: "nowrap", flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.navy; e.currentTarget.style.color = T.white; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.navy; }}
            >
              Book a Site Visit
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
