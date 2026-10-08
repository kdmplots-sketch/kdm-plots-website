import React from "react";
import { T, useVP } from "@/lib/theme";
import type { Project } from "@/lib/types";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Btn } from "@/components/Btn";
import { useBookingModal } from "@/lib/BookingContext";

type GalleryView = "photos" | "docs";

export function ProjectGalleryModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { isMobile } = useVP();
  const [view, setView] = React.useState<GalleryView>("photos");
  const [docIndex, setDocIndex] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const { open: openBooking } = useBookingModal();

  const approvedCopies = project?.approvedCopies ?? [];
  const hasApprovedCopies = approvedCopies.length > 0;
  const activeDoc = approvedCopies[docIndex];

  const activeImages = view === "photos" ? (project?.images ?? []) : (activeDoc?.pages ?? []);
  const hasImages = activeImages.length > 0;
  const count = hasImages ? activeImages.length : 1;

  // Reset to the photos tab + first page whenever a different project opens
  React.useEffect(() => { setView("photos"); setDocIndex(0); setIndex(0); }, [project]);
  // Reset page index when switching tabs or documents
  React.useEffect(() => { setIndex(0); }, [view, docIndex]);

  React.useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex(i => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex(i => (i - 1 + count) % count);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, count]);

  if (!project) return null;

  function go(dir: 1 | -1) {
    setIndex(i => (i + dir + count) % count);
  }

  function onTouchStart(e: React.TouchEvent) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) go(-1);
    else if (dx < -40) go(1);
    touchStartX.current = null;
  }

  const captionTitle = view === "photos" ? project.title : (activeDoc?.title ?? project.title);
  const captionSubtitle = view === "photos" ? project.location : project.title;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 70,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(6,12,24,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: isMobile ? "0" : "32px",
        animation: `kdmFadeUp 0.28s ${T.easeSmooth}`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          maxHeight: isMobile ? "100vh" : "88vh",
          display: "flex", flexDirection: "column",
          animation: "kdmGalleryIn 0.38s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          style={{
            position: "absolute", top: isMobile ? "14px" : "-16px", right: isMobile ? "14px" : "-16px", zIndex: 2,
            width: "40px", height: "40px", borderRadius: "50%",
            border: "none", background: "rgba(6,12,24,0.75)", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {/* Photos / Approved Copy tabs — only shown when this project has approved-copy documents */}
        {hasApprovedCopies && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px", paddingLeft: isMobile ? "14px" : "4px", paddingRight: isMobile ? "14px" : "4px" }}>
            {(["photos", "docs"] as GalleryView[]).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                style={{
                  padding: "9px 18px", borderRadius: T.radiusFull,
                  border: `1.5px solid ${view === v ? T.gold : "rgba(255,255,255,0.22)"}`,
                  background: view === v ? T.gold : "rgba(255,255,255,0.06)",
                  fontFamily: T.sans, fontWeight: 700, fontSize: "11px",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: view === v ? T.white : "rgba(255,255,255,0.75)",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {v === "photos" ? "Photos" : "Approved Copy"}
              </button>
            ))}
          </div>
        )}

        {/* Document picker — only when more than one approved-copy document exists */}
        {hasApprovedCopies && view === "docs" && approvedCopies.length > 1 && (
          <div
            className="hide-scrollbar"
            style={{
              display: "flex", gap: "8px", marginBottom: "14px",
              overflowX: "auto", paddingLeft: isMobile ? "14px" : "4px", paddingRight: isMobile ? "14px" : "4px",
            }}
          >
            {approvedCopies.map((doc, i) => (
              <button
                key={doc.title + i}
                type="button"
                onClick={() => setDocIndex(i)}
                style={{
                  flexShrink: 0,
                  padding: "7px 14px", borderRadius: "8px",
                  border: `1px solid ${docIndex === i ? "rgba(193,153,46,0.55)" : "rgba(255,255,255,0.16)"}`,
                  background: docIndex === i ? "rgba(193,153,46,0.16)" : "transparent",
                  fontFamily: T.sans, fontWeight: 600, fontSize: "11.5px",
                  color: docIndex === i ? T.gold : "rgba(255,255,255,0.65)",
                  cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
                }}
              >
                {doc.title}
              </button>
            ))}
          </div>
        )}

        {/* Image stage */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: view === "docs" ? "3 / 4" : "16 / 10",
            borderRadius: isMobile ? "0" : "16px",
            overflow: "hidden",
            background: T.navyDeep,
          }}
        >
          {hasImages ? (
            <img
              key={`${view}-${docIndex}-${index}`}
              src={activeImages[index]}
              alt={view === "photos" ? `${project.title} — photo ${index + 1} of ${count}` : `${captionTitle} — page ${index + 1} of ${count}`}
              style={{
                width: "100%", height: "100%",
                objectFit: view === "docs" ? "contain" : "cover",
                display: "block",
                animation: `kdmImageFade 0.4s ${T.easeSmooth}`,
              }}
            />
          ) : (
            <>
              <PhotoPlaceholder patternId={`grid-gallery-${project.id}-${view}`} />
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: "10px", textAlign: "center", padding: "24px",
              }}>
                <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: T.gold }}>
                  {view === "photos" ? "Photos Coming Soon" : "Approved Copy Coming Soon"}
                </span>
                <p style={{ fontFamily: T.sans, fontSize: "13px", color: "rgba(255,255,255,0.72)", margin: 0, maxWidth: "320px" }}>
                  {view === "photos"
                    ? `Site photos for ${project.title} will be added here shortly.`
                    : `The approved layout copy for ${project.title} will be added here shortly.`}
                </p>
              </div>
            </>
          )}

          {/* Prev / Next — only when multiple images */}
          {hasImages && count > 1 && (
            <>
              <button
                type="button" onClick={() => go(-1)} aria-label="Previous"
                style={navArrowStyle("left")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              </button>
              <button
                type="button" onClick={() => go(1)} aria-label="Next"
                style={navArrowStyle("right")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </>
          )}
        </div>

        {/* Caption + dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 4px 0", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <p style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "18px", color: "#FFFFFF", margin: 0 }}>{captionTitle}</p>
            <p style={{ fontFamily: T.sans, fontSize: "11.5px", color: "rgba(255,255,255,0.56)", margin: "2px 0 0" }}>{captionSubtitle}</p>
          </div>
          {hasImages && count > 1 && (
            <div style={{ display: "flex", gap: "6px" }}>
              {activeImages.map((_, i) => (
                <button
                  key={i} type="button" onClick={() => setIndex(i)} aria-label={`Go to page ${i + 1}`}
                  style={{
                    width: i === index ? "20px" : "6px", height: "6px", borderRadius: "9999px",
                    border: "none", padding: 0, cursor: "pointer",
                    background: i === index ? T.gold : "rgba(255,255,255,0.30)",
                    transition: `width 0.3s ${T.easeSnap}, background 0.3s ${T.easeSnap}`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Book a visit for this specific project — carries project context into the booking modal */}
        <div style={{ padding: "18px 4px 0" }}>
          <Btn
            label={`Book a Visit — ${project.title}`}
            variant="gold"
            size="sm"
            onClick={() => { onClose(); openBooking(project.title); }}
          />
        </div>
      </div>
    </div>
  );
}

function navArrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute", top: "50%", [side]: "12px", transform: "translateY(-50%)",
    width: "40px", height: "40px", borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.25)", background: "rgba(6,12,24,0.55)",
    backdropFilter: "blur(6px)", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
  } as React.CSSProperties;
}
