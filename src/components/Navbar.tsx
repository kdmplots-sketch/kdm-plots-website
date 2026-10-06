import React from "react";
import { T, useVP } from "@/lib/theme";
import { KdmLogo } from "@/components/KdmLogo";
import { Btn } from "@/components/Btn";

// ─────────────────────────────────────────────────────────────────────────────
// Nav Link
// ─────────────────────────────────────────────────────────────────────────────
function NavLink({ label, href = "#", active = false }: { label: string; href?: string; active?: boolean }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        display: "inline-flex", alignItems: "center",
        fontFamily: T.sans,
        fontSize: "11px",
        fontWeight: active ? 700 : 500,
        letterSpacing: "0.05em",
        color: active ? T.navy : hov ? T.navy : "#5B6B82",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: T.radiusFull,
        background: active ? T.goldFaint : hov ? "rgba(16,42,66,0.05)" : "transparent",
        transition: "background 0.18s, color 0.18s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
      {active && (
        <span
          style={{
            position: "absolute", bottom: "5px", left: "15px", right: "15px",
            height: "2px", background: T.gold, borderRadius: T.radiusFull,
          }}
        />
      )}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "#" },
  { label: "About Us",   href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Amenities",  href: "#amenities" },
  { label: "Why KDM",    href: "#why-kdm" },
  { label: "Gallery",    href: "#" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const { isMobile, isTablet } = useVP();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Close menu on Escape key
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close menu when switching to desktop
  React.useEffect(() => {
    if (!isMobile && !isTablet) setMenuOpen(false);
  }, [isMobile, isTablet]);

  const showHamburger = isMobile || isTablet;
  const EASE = "cubic-bezier(0.32,0.72,0,1)";

  return (
    <>
      {/* ── Floating island shell — fixed to the viewport, stays visible on scroll ── */}
      <div
        style={{
          position: "fixed", zIndex: 30,
          top: isMobile ? "14px" : "22px", left: 0, right: 0,
          display: "flex", justifyContent: "center",
          padding: isMobile ? "0 16px" : 0,
          pointerEvents: "none",
        }}
      >
        {/* Outer shell — faint ring, double-bezel */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hide-scrollbar"
          style={{
            pointerEvents: "auto",
            position: "relative",
            display: "flex", alignItems: "center",
            justifyContent: showHamburger ? "space-between" : "flex-start",
            gap: "28px",
            width: showHamburger ? "100%" : "max-content",
            maxWidth: "calc(100vw - 32px)",
            overflowX: showHamburger ? "visible" : "auto",
            padding: isMobile ? "0" : "6px",
            borderRadius: T.radiusFull,
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(16,42,66,0.07)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 14px 36px -12px rgba(8,14,28,0.28)",
            boxSizing: "border-box",
          }}
        >
          {/* Logo — inner core, its own tight pill */}
          <div style={{
            display: "flex", alignItems: "center", flexShrink: 0,
            padding: isMobile ? "0 8px 0 12px" : "4px 10px 4px 16px",
          }}>
            <div style={{ transform: isMobile ? "scale(0.62)" : "scale(0.74)", transformOrigin: "left center" }}>
              <KdmLogo />
            </div>
          </div>

          {/* Desktop link track — inner core */}
          {!showHamburger && (
            <div style={{
              display: "flex", alignItems: "center", gap: "1px", flexShrink: 0,
              background: "rgba(16,42,66,0.035)",
              borderRadius: T.radiusFull,
              padding: "3px",
            }}>
              {NAV_LINKS.map((l) => <NavLink key={l.label} label={l.label} href={l.href} active={l.label === "Home"} />)}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingRight: showHamburger ? "6px" : "4px", flexShrink: 0 }}>
            {!showHamburger && <Btn label="Book a Visit" variant="gold" size="sm" />}

            {/* Hamburger → X morph */}
            {showHamburger && (
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                style={{
                  position: "relative",
                  display: "flex", justifyContent: "center", alignItems: "center",
                  width: "44px", height: "44px", flexShrink: 0,
                  background: menuOpen ? "rgba(16,42,66,0.07)" : "transparent",
                  border: "none", cursor: "pointer",
                  borderRadius: "50%",
                  transition: `background 0.3s ${EASE}`,
                }}
              >
                <span style={{
                  position: "absolute", width: "18px", height: "1.8px", borderRadius: "2px",
                  background: T.navy,
                  transition: `transform 0.42s ${EASE}, top 0.42s ${EASE}`,
                  top: menuOpen ? "50%" : "17px",
                  transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "translateY(0) rotate(0)",
                }} />
                <span style={{
                  position: "absolute", width: "18px", height: "1.8px", borderRadius: "2px",
                  background: T.navy,
                  transition: `transform 0.42s ${EASE}, top 0.42s ${EASE}`,
                  top: menuOpen ? "50%" : "26px",
                  transform: menuOpen ? "translateY(-50%) rotate(-45deg)" : "translateY(0) rotate(0)",
                }} />
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* ── Mobile / tablet full-screen menu modal ── */}
      {showHamburger && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed", inset: 0, zIndex: 29,
            background: "rgba(7,19,31,0.88)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? "visible" : "hidden",
            transition: `opacity 0.46s ${EASE}, visibility 0.46s`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "flex-start",
            gap: "6px",
            padding: "32px",
            paddingTop: "max(118px, env(safe-area-inset-top, 0px) + 100px)",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: T.serif, fontWeight: l.label === "Home" ? 700 : 500,
                fontSize: "28px", letterSpacing: "-0.01em",
                color: l.label === "Home" ? T.gold : "rgba(255,255,255,0.88)",
                textDecoration: "none",
                padding: "11px 0",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.5s ${EASE} ${menuOpen ? i * 55 + 80 : 0}ms, transform 0.5s ${EASE} ${menuOpen ? i * 55 + 80 : 0}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{
            marginTop: "28px",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.5s ${EASE} ${menuOpen ? NAV_LINKS.length * 55 + 100 : 0}ms, transform 0.5s ${EASE} ${menuOpen ? NAV_LINKS.length * 55 + 100 : 0}ms`,
          }}>
            <Btn label="Book a Visit" variant="gold" size="md" />
          </div>
        </div>
      )}
    </>
  );
}
