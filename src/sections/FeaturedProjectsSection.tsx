import React from "react";
import { T, useVP } from "@/lib/theme";
import { CATEGORIES, type Category, type Project, type ProjectStatus } from "@/lib/types";
import { ProjectCard, ProjectInfoItem, DecorativeBirds } from "@/components/ProjectCard";

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — rebuilt section
// ─────────────────────────────────────────────────────────────────────────────
const ALL_PROJECTS: Project[] = [
  { id: 1, status: "Ongoing", title: "Akil Garden",            location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 2, status: "Ongoing", title: "Raja Rajeshwari Nagar",  location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 3, status: "Ongoing", title: "Lucky City",             location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 4, status: "Ongoing", title: "Ayyapatti Highway City", location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 5, status: "Ongoing", title: "Green View City",        location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 6, status: "Ongoing", title: "Thanga Boomi",           location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 7, status: "Ongoing", title: "Golden Park",            location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 8, status: "Ongoing", title: "Royal Garden",           location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
  { id: 9, status: "Ongoing", title: "RK Nagar",               location: "Madurai, Tamil Nadu", dtcp: true, rera: true, prime: true, infra: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Section
// ─────────────────────────────────────────────────────────────────────────────
// ── Remove from DISABLED_TABS to enable that tab ──
const DISABLED_TABS = new Set<Category>(["Upcoming"]);
const GAP_PX = 18;

export function FeaturedProjectsSection() {
  const { isMobile, isTablet } = useVP();
  const [activeCategory, setActiveCategory] = React.useState<Category>("Ongoing");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef     = React.useRef<HTMLDivElement>(null);
  const [cardW, setCardW]   = React.useState(0);
  const [sliding, setSliding] = React.useState(false);

  const source: Project[] = activeCategory === "All Projects"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.status === activeCategory as ProjectStatus);

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
  }, []);

  function go(dir: 1 | -1) {
    if (sliding || !cardW) return;
    setSliding(true);
    setTrackPos(prev => prev + dir);
  }

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


      <div style={{ position: "relative", zIndex: 2 }}>

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
              const isActive   = activeCategory === cat;
              const isDisabled = DISABLED_TABS.has(cat);
              return (
                <button key={cat} onClick={() => { if (!isDisabled) setActiveCategory(cat); }} disabled={isDisabled}
                  style={{
                    padding: "8px 22px", borderRadius: "9999px",
                    border: `1.5px solid ${isActive ? T.gold : isDisabled ? "rgba(15,31,53,0.09)" : "rgba(15,31,53,0.20)"}`,
                    background: isActive ? T.gold : "transparent",
                    fontFamily: T.sans, fontWeight: isActive ? 700 : 500,
                    fontSize: "12px", letterSpacing: "0.06em",
                    color: isActive ? T.white : isDisabled ? "rgba(15,31,53,0.26)" : "#5B6B82",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    transition: "all 0.2s", opacity: isDisabled ? 0.45 : 1,
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
        <div ref={containerRef} style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px", overflow: "hidden" }}>
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
                transition: sliding ? "transform 0.52s cubic-bezier(0.25,1,0.5,1)" : "none",
                willChange: "transform",
              }}
            >
              {clonedTrack.map((project, domIdx) => (
                // key=domIdx is STABLE — this DOM node always shows clonedTrack[domIdx]
                // project data is permanently bound to this position; it never swaps
                <div key={domIdx} style={{ flex: `0 0 ${cardW}px` }}>
                  <ProjectCard
                    project={project}
                    featured={domIdx === trackPos}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        )}

        {/* Quote strip */}
        <div style={{ padding: "32px 80px", display: "flex", justifyContent: "center" }}>
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
            <div style={{ flex: 1, display: "flex", alignItems: "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "16px" : "0" }}>
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
