import React from "react";
import { T, useVP } from "@/lib/theme";
import type { Project } from "@/lib/types";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export function ProjectGalleryModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { isMobile } = useVP();
  const [index, setIndex] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

  const images = project?.images ?? [];
  const hasImages = images.length > 0;
  const count = hasImages ? images.length : 1;

  React.useEffect(() => { setIndex(0); }, [project]);

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} photo gallery`}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 70,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(6,12,24,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: isMobile ? "0" : "32px",
        animation: "kdmFadeUp 0.22s ease",
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

        {/* Image stage */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            borderRadius: isMobile ? "0" : "16px",
            overflow: "hidden",
            background: T.navyDeep,
          }}
        >
          {hasImages ? (
            <img
              key={index}
              src={images[index]}
              alt={`${project.title} — photo ${index + 1} of ${count}`}
              style={{
                width: "100%", height: "100%", objectFit: "cover", display: "block",
                animation: "kdmImageFade 0.32s ease",
              }}
            />
          ) : (
            <>
              <PhotoPlaceholder patternId={`grid-gallery-${project.id}`} />
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: "10px", textAlign: "center", padding: "24px",
              }}>
                <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: T.gold }}>
                  Photos Coming Soon
                </span>
                <p style={{ fontFamily: T.sans, fontSize: "13px", color: "rgba(255,255,255,0.72)", margin: 0, maxWidth: "320px" }}>
                  Site photos for {project.title} will be added here shortly.
                </p>
              </div>
            </>
          )}

          {/* Prev / Next — only when multiple images */}
          {hasImages && count > 1 && (
            <>
              <button
                type="button" onClick={() => go(-1)} aria-label="Previous photo"
                style={navArrowStyle("left")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              </button>
              <button
                type="button" onClick={() => go(1)} aria-label="Next photo"
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
            <p style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "18px", color: "#FFFFFF", margin: 0 }}>{project.title}</p>
            <p style={{ fontFamily: T.sans, fontSize: "11.5px", color: "rgba(255,255,255,0.56)", margin: "2px 0 0" }}>{project.location}</p>
          </div>
          {hasImages && count > 1 && (
            <div style={{ display: "flex", gap: "6px" }}>
              {images.map((_, i) => (
                <button
                  key={i} type="button" onClick={() => setIndex(i)} aria-label={`Go to photo ${i + 1}`}
                  style={{
                    width: i === index ? "20px" : "6px", height: "6px", borderRadius: "9999px",
                    border: "none", padding: 0, cursor: "pointer",
                    background: i === index ? T.gold : "rgba(255,255,255,0.30)",
                    transition: "width 0.25s ease, background 0.25s ease",
                  }}
                />
              ))}
            </div>
          )}
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
