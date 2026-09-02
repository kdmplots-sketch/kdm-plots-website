import React from "react";
import heroBg      from "@/imports/KDM_Plots_Hero_Side-1.png";
import aboutImg    from "@/imports/ChatGPT_Image_Aug_4__2026__11_49_19_PM.png";
import whyBg       from "@/imports/ChatGPT_Image_Aug_4__2026__11_48_00_PM-1.png";
import projectsBg  from "@/imports/7b24c49e-ad5c-4a35-b1d8-b1c9be5224b0.png";
import cardImg     from "@/imports/a18cbae5-aaa7-4669-9c41-7439e0c6aae0.png";
import projectsBg2 from "@/imports/7b24c49e-ad5c-4a35-b1d8-b1c9be5224b0-1.png";
import investBg    from "@/imports/a0e2c498-edd1-49bb-92e4-5c49c1015dd8.png";
import ctaBg       from "@/imports/d0d01512-5cbf-4300-abb4-2134b25cf402.png";

// ─────────────────────────────────────────────────────────────────────────────
// Viewport Context — drives responsive layouts
// ─────────────────────────────────────────────────────────────────────────────
const ViewportCtx = React.createContext({ w: 1440 });
function useVP() {
  const { w } = React.useContext(ViewportCtx);
  return {
    w,
    isMobile:  w < 768,
    isTablet:  w >= 768 && w < 1024,
    isDesktop: w >= 1024,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Global Style Injector — focus-visible, reduced-motion, smooth scroll
// ─────────────────────────────────────────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      *:focus-visible {
        outline: 2px solid #C9A84C;
        outline-offset: 3px;
        border-radius: 4px;
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Design Tokens
// ─────────────────────────────────────────────────────────────────────────────
const T = {
  gold:        "#C9A84C",
  goldMid:     "rgba(201,168,76,0.75)",
  goldFaint:   "rgba(201,168,76,0.18)",
  navy:        "#0F1F35",
  navyDeep:    "#080E1C",
  ivory:       "#F8F5EF",
  white:       "#FFFFFF",
  textMuted:   "rgba(255,255,255,0.72)",
  textBody:    "rgba(255,255,255,0.86)",
  cardBg:      "rgba(255,255,255,0.97)",
  cardShadow:  "0 16px 56px rgba(8,14,28,0.18), 0 2px 10px rgba(8,14,28,0.07)",
  serif:       "'Playfair Display', Georgia, serif",
  sans:        "'Manrope', system-ui, sans-serif",
  radius:      "12px",
  radiusSm:    "6px",
  radiusBtn:   "5px",
  radiusFull:  "9999px",
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────
const Ico = {
  arrow: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  chevronDown: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  location: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.75 6 12 6 12s6-7.25 6-12c0-3.314-2.686-6-6-6z"/>
      <circle cx="12" cy="8" r="2.2"/>
    </svg>
  ),
  shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5.5v6.5c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V5.5L12 2z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  grid: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  trend: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7"/>
      <polyline points="15 7 21 7 21 13"/>
    </svg>
  ),
  phone: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.6 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.59a16 16 0 006 6l.95-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// KDM Logo
// ─────────────────────────────────────────────────────────────────────────────
function KdmLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
      {/* Logo mark */}
      <div
        style={{
          width: "40px", height: "40px", borderRadius: "7px",
          background: T.navy, display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
          {/* House silhouette */}
          <path d="M13 1L25 10V21H17.5V14H8.5V21H1V10L13 1Z" fill={T.gold}/>
          <rect x="17" y="6" width="3" height="4" rx="0.5" fill={T.gold} opacity="0.45"/>
        </svg>
      </div>
      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", lineHeight: 1 }}>
        <span style={{ fontFamily: T.sans, fontWeight: 800, fontSize: "17px", letterSpacing: "0.2em", color: T.navy }}>
          KDM
        </span>
        <span style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "7.5px", letterSpacing: "0.38em", color: "#9EA3A8", textTransform: "uppercase" }}>
          PLOTS
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Nav Link
// ─────────────────────────────────────────────────────────────────────────────
function NavLink({ label, href = "#", active = false }: { label: string; href?: string; active?: boolean }) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        fontFamily: T.sans,
        fontSize: "11.5px",
        fontWeight: active ? 600 : 500,
        letterSpacing: "0.07em",
        color: active ? T.gold : T.navy,
        textDecoration: "none",
        paddingBottom: "6px",
      }}
    >
      {label}
      {active && (
        <span
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "1.5px", background: T.gold, borderRadius: T.radiusFull,
          }}
        />
      )}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Button
// ─────────────────────────────────────────────────────────────────────────────
function Btn({
  label,
  variant = "gold",
  icon = true,
  size = "md",
}: {
  label: string;
  variant?: "gold" | "outline-white" | "outline-navy";
  icon?: boolean;
  size?: "sm" | "md";
}) {
  const base: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: "9px",
    fontFamily: T.sans, fontWeight: 600,
    fontSize: size === "sm" ? "11px" : "12px",
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.18s, transform 0.18s",
    borderRadius: T.radiusBtn,
    whiteSpace: "nowrap",
    padding: size === "sm" ? "9px 20px" : "13px 26px",
  };
  const styles: Record<string, React.CSSProperties> = {
    gold:          { ...base, background: T.gold, color: T.white },
    "outline-white": { ...base, background: "transparent", color: T.white, border: `1.5px solid rgba(255,255,255,0.55)` },
    "outline-navy":  { ...base, background: "transparent", color: T.navy, border: `1.5px solid ${T.navy}` },
  };
  return (
    <button
      style={styles[variant]}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.84"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {label} {icon && <Ico.arrow />}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",       href: "#" },
  { label: "About Us",   href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Amenities",  href: "#amenities" },
  { label: "Why KDM",    href: "#why-kdm" },
  { label: "Gallery",    href: "#" },
  { label: "Contact",    href: "#contact" },
];

function Navbar() {
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

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "relative", zIndex: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 52px",
          height: "74px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          flexShrink: 0,
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <KdmLogo />

        {/* Desktop links */}
        {!showHamburger && (
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            {NAV_LINKS.map((l) => <NavLink key={l.label} label={l.label} href={l.href} active={l.label === "Home"} />)}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!showHamburger && <Btn label="Book a Visit" variant="gold" size="sm" />}

          {/* Hamburger button */}
          {showHamburger && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                display: "flex", flexDirection: "column", justifyContent: "center",
                alignItems: "center", gap: "5px",
                width: "40px", height: "40px",
                background: "transparent", border: "none", cursor: "pointer",
                padding: "6px", borderRadius: "8px",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.10)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              {menuOpen ? (
                /* X icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.navy} strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke={T.navy} strokeWidth="1.8" strokeLinecap="round">
                  <line x1="0" y1="2" x2="20" y2="2"/>
                  <line x1="0" y1="8" x2="20" y2="8"/>
                  <line x1="0" y1="14" x2="20" y2="14"/>
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}
      {showHamburger && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "absolute", top: "74px", left: 0, right: 0,
            zIndex: 19,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            boxShadow: "0 12px 40px rgba(8,14,28,0.12)",
            maxHeight: menuOpen ? "600px" : "0",
            overflow: "hidden",
            transition: "max-height 0.38s cubic-bezier(0.25,1,0.5,1)",
          }}
        >
          <div style={{
            display: "flex", flexDirection: "column",
            padding: "24px 28px 32px",
            gap: "4px",
          }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: T.sans, fontWeight: l.label === "Home" ? 600 : 500,
                  fontSize: "15px", letterSpacing: "0.04em",
                  color: l.label === "Home" ? T.gold : T.navy,
                  textDecoration: "none",
                  padding: "12px 4px",
                  borderBottom: "1px solid rgba(15,31,53,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                {l.label}
                {l.label === "Home" && (
                  <span style={{ width: "20px", height: "1px", background: T.gold, borderRadius: "9999px" }} />
                )}
              </a>
            ))}
            <div style={{ marginTop: "20px" }}>
              <Btn label="Book a Visit" variant="gold" size="sm" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero Content (left column)
// ─────────────────────────────────────────────────────────────────────────────
function HeroContent() {
  const { isMobile, isTablet } = useVP();
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        flex: 1,
        padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 56px",
        maxWidth: isMobile ? "100%" : "580px",
        gap: 0,
      }}
    >
      {/* Eyebrow label */}
      <div
        style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          marginBottom: "22px",
        }}
      >
        <span style={{ display: "block", width: "28px", height: "1.5px", background: T.gold, borderRadius: T.radiusFull }} />
        <span
          style={{
            fontFamily: T.sans, fontWeight: 600,
            fontSize: "10.5px", letterSpacing: "0.26em",
            textTransform: "uppercase", color: T.gold,
          }}
        >
          Premium Plots For A Better Tomorrow
        </span>
      </div>

      {/* Main heading */}
      <h1 style={{ margin: 0, marginBottom: "26px", padding: 0, lineHeight: 1 }}>
        <span
          style={{
            display: "block",
            fontFamily: T.serif, fontWeight: 700,
            fontSize: isMobile ? "52px" : isTablet ? "64px" : "80px", lineHeight: 1.0,
            color: T.white,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 32px rgba(0,0,0,0.22)",
          }}
        >
          Build Your
        </span>
        <span
          style={{
            display: "block",
            fontFamily: T.serif, fontWeight: 800,
            fontSize: isMobile ? "60px" : isTablet ? "72px" : "88px", lineHeight: 1.0,
            color: T.gold,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 32px rgba(0,0,0,0.20)",
          }}
        >
          Legacy
        </span>
      </h1>

      {/* Body copy */}
      <p
        style={{
          fontFamily: T.sans, fontWeight: 400,
          fontSize: "14.5px", lineHeight: 1.78,
          color: T.textBody,
          margin: 0, marginBottom: "38px",
          maxWidth: "370px",
        }}
      >
        KDM Plots offers premium residential plots in prime locations with world-class amenities
        and a secure gated environment.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Btn label="Explore Projects" variant="gold" />
        <Btn label="Book a Visit" variant="outline-white" icon={false} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature Column
// ─────────────────────────────────────────────────────────────────────────────
function FeatureCol({
  icon, title, sub, last = false,
}: { icon: React.ReactNode; title: string; sub: string; last?: boolean }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "flex-start", gap: "13px",
        flex: 1,
        paddingRight: last ? 0 : "24px",
        marginRight: last ? 0 : "24px",
        borderRight: last ? "none" : "1px solid rgba(15,31,53,0.09)",
      }}
    >
      <div style={{ flexShrink: 0, marginTop: "1px" }}>{icon}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "12px", letterSpacing: "0.05em",
            textTransform: "uppercase", color: T.navy,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 400,
            fontSize: "11px", color: "#8E96A2",
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature Bar Card
// ─────────────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: <Ico.location />, title: "Prime Locations",         sub: "High Growth Corridors"       },
  { icon: <Ico.shield  />, title: "Secure Gated Community",  sub: "24×7 Safety & Security"      },
  { icon: <Ico.grid    />, title: "World-Class Amenities",   sub: "For a Better Lifestyle"       },
  { icon: <Ico.trend   />, title: "High Investment Value",   sub: "Great Appreciation Potential" },
];

function FeatureCard() {
  return (
    <div
      style={{
        flex: 1,
        background: T.cardBg,
        borderRadius: T.radius,
        boxShadow: T.cardShadow,
        display: "flex", alignItems: "center",
        padding: "22px 28px",
      }}
    >
      {FEATURES.map((f, i) => (
        <FeatureCol key={f.title} icon={f.icon} title={f.title} sub={f.sub} last={i === FEATURES.length - 1} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Phone Card
// ─────────────────────────────────────────────────────────────────────────────
function PhoneCard() {
  return (
    <div
      style={{
        background: T.cardBg,
        borderRadius: T.radius,
        boxShadow: T.cardShadow,
        display: "flex", alignItems: "center", gap: "15px",
        padding: "18px 24px",
        flexShrink: 0, minWidth: "234px",
      }}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: "44px", height: "44px", borderRadius: "50%",
          background: T.gold,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: `0 4px 14px rgba(201,168,76,0.38)`,
        }}
      >
        <Ico.phone />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "9px", letterSpacing: "0.26em",
            textTransform: "uppercase", color: T.gold,
          }}
        >
          Call Us Now
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "16px", letterSpacing: "0.02em",
            color: T.navy,
          }}
        >
          +91 822 056 3394
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Scroll Indicator
// ─────────────────────────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",
        padding: "18px 0 22px",
      }}
    >
      <span
        style={{
          fontFamily: T.sans, fontWeight: 500,
          fontSize: "9px", letterSpacing: "0.30em",
          textTransform: "uppercase", color: T.goldMid,
        }}
      >
        Scroll Down
      </span>
      <Ico.chevronDown />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// About Section — Icons
// ─────────────────────────────────────────────────────────────────────────────
function IcoCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}
function IcoFamily() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.2"/>
      <path d="M2 21c0-4 3.134-7 7-7h2c3.866 0 7 3 7 7"/><path d="M16 21c0-2.5 1.5-4.5 3.5-5.5"/>
    </svg>
  );
}
function IcoLayout() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/>
    </svg>
  );
}
function IcoCheck() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><polyline points="8 12 11 15 16 9"/>
    </svg>
  );
}
function IcoRoad() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21L9 3"/><path d="M21 21L15 3"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4.5" y1="17" x2="19.5" y2="17"/>
    </svg>
  );
}
function IcoLeaf() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c0-5-4-9-9-9 0 5 4 9 9 9z"/><path d="M12 22c0-5 4-9 9-9-0 5-4 9-9 9z"/><line x1="12" y1="22" x2="12" y2="10"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stat Item
// ─────────────────────────────────────────────────────────────────────────────
function StatItem({
  icon, number, label, last = false,
}: { icon: React.ReactNode; number: string; label: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div
      style={{
        flex: isMobile ? "0 0 50%" : 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
        padding: isMobile ? "28px 12px" : "40px 24px",
        borderRight: last ? "none" : `1px solid rgba(201,168,76,0.22)`,
        boxSizing: "border-box",
      }}
    >
      <div style={{ opacity: 0.9 }}>{icon}</div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <span
          style={{
            fontFamily: T.serif, fontWeight: 700,
            fontSize: "42px", lineHeight: 1,
            color: T.gold, letterSpacing: "-0.01em",
          }}
        >
          {number}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 500,
            fontSize: "11.5px", letterSpacing: "0.07em",
            textTransform: "uppercase", color: T.navy,
            textAlign: "center",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Corner Botanical Decoration (SVG fern-style)
// ─────────────────────────────────────────────────────────────────────────────
function CornerBotanical({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="120" height="120" viewBox="0 0 120 120" fill="none"
      style={{ opacity: 0.18, transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M10 110 Q30 70 60 60" stroke={T.gold} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 110 Q20 80 40 72" stroke={T.gold} strokeWidth="1" strokeLinecap="round"/>
      <path d="M10 110 Q15 88 35 85" stroke={T.gold} strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M60 60 Q80 45 100 20" stroke={T.gold} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M60 60 Q75 55 95 38" stroke={T.gold} strokeWidth="1" strokeLinecap="round"/>
      <path d="M60 60 Q70 60 88 52" stroke={T.gold} strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M40 80 Q50 65 60 60" stroke={T.gold} strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M25 92 Q38 78 45 72" stroke={T.gold} strokeWidth="0.6" strokeLinecap="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// About Section
// ─────────────────────────────────────────────────────────────────────────────
function AboutSection() {
  const { isMobile, isTablet } = useVP();
  const stats = [
    { icon: <IcoCalendar />, number: "15+",   label: "Years of Trust"       },
    { icon: <IcoFamily  />, number: "2500+", label: "Families"              },
    { icon: <IcoLayout  />, number: "9+",    label: "Premium Layouts"       },
    { icon: <IcoCheck   />, number: "100%",  label: "Legal & Clear"         },
    { icon: <IcoRoad    />, number: "50+",   label: "KMs of Roads"          },
  ];

  return (
    <section style={{ background: T.ivory, width: "100%" }}>

      {/* ── Main two-column editorial area ── */}
      <div
        style={{
          maxWidth: "1440px", margin: "0 auto",
          padding: isMobile ? "72px 20px 80px" : isTablet ? "96px 40px 100px" : "140px 80px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "center",
          gap: isMobile ? "40px" : "60px",
        }}
      >
        {/* ─── Left column (38%) ─── */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 38%",
            maxWidth: isMobile ? "100%" : "38%",
            display: "flex", flexDirection: "column", gap: 0,
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontFamily: T.sans, fontWeight: 700,
                  fontSize: "10px", letterSpacing: "0.30em",
                  textTransform: "uppercase", color: T.gold,
                }}
              >
                About KDM
              </span>
            </div>
            {/* Gold rule */}
            <div
              style={{
                width: "44px", height: "1.5px",
                background: `linear-gradient(90deg, ${T.gold}, rgba(201,168,76,0.2))`,
                borderRadius: "9999px",
              }}
            />
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: T.serif, fontWeight: 700,
              fontSize: isMobile ? "40px" : isTablet ? "48px" : "58px", lineHeight: 1.1,
              margin: 0, marginBottom: "34px",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ display: "block", color: T.navy }}>Legacies</span>
            <span style={{ display: "block", color: T.navy }}>Are Built,</span>
            <span style={{ display: "block", color: T.gold }}>Not Bought.</span>
          </h2>

          {/* Body copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: T.sans, fontWeight: 400,
                fontSize: "15px", lineHeight: 1.82,
                color: "#4A5568", margin: 0,
              }}
            >
              At KDM Plots, we thoughtfully create premium communities that stand the test of time.
            </p>
            <p
              style={{
                fontFamily: T.sans, fontWeight: 400,
                fontSize: "15px", lineHeight: 1.82,
                color: "#4A5568", margin: 0,
              }}
            >
              Every layout is planned with transparency, legal security and long-term value,
              ensuring every investment becomes part of a lasting legacy.
            </p>
          </div>

          {/* Signature area */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: "20px",
              paddingTop: "32px",
              borderTop: `1px solid rgba(201,168,76,0.18)`,
            }}
          >
            {/* Handwritten-style KDM signature */}
            <div style={{ flexShrink: 0 }}>
              <svg width="80" height="44" viewBox="0 0 80 44" fill="none">
                {/* K */}
                <path d="M6 8 L6 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M6 22 Q16 15 22 8" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M6 22 Q18 28 24 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                {/* D */}
                <path d="M30 8 L30 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M30 8 Q50 8 50 22 Q50 36 30 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                {/* M */}
                <path d="M56 36 L56 8 L66 24 L76 8 L76 36" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                {/* underline flourish */}
                <path d="M4 41 Q40 38 78 41" stroke={T.gold} strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            {/* Vertical divider */}
            <div
              style={{
                width: "1px", alignSelf: "stretch",
                background: `linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)`,
              }}
            />

            {/* Trust text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span
                style={{
                  fontFamily: T.sans, fontWeight: 700,
                  fontSize: "10px", letterSpacing: "0.24em",
                  textTransform: "uppercase", color: T.navy,
                }}
              >
                Built on Trust.
              </span>
              <span
                style={{
                  fontFamily: T.sans, fontWeight: 500,
                  fontSize: "10px", letterSpacing: "0.20em",
                  textTransform: "uppercase", color: "#8E96A2",
                }}
              >
                Focused on Future.
              </span>
            </div>
          </div>
        </div>

        {/* ─── Right column (62%) ─── */}
        <div style={{ flex: isMobile ? "none" : "0 0 62%", maxWidth: isMobile ? "100%" : "62%", position: "relative" }}>
          {/* Subtle gold accent frame behind image */}
          <div
            style={{
              position: "absolute",
              top: "20px", right: "-16px",
              width: "calc(100% - 10px)", height: "calc(100% - 20px)",
              borderRadius: "28px",
              border: `1.5px solid rgba(201,168,76,0.22)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <img
            src={aboutImg}
            alt="KDM gated entrance with palm-lined avenue at dusk"
            loading="lazy"
            style={{
              position: "relative", zIndex: 1,
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              objectPosition: "center center",
              borderRadius: "28px",
              boxShadow: "0 24px 72px rgba(8,14,28,0.18), 0 4px 16px rgba(8,14,28,0.08)",
              display: "block",
            }}
          />
          {/* Small floating badge */}
          <div
            style={{
              position: "absolute", zIndex: 2,
              bottom: "-20px", left: "40px",
              background: T.white,
              borderRadius: "12px",
              boxShadow: "0 12px 40px rgba(8,14,28,0.14)",
              padding: "16px 24px",
              display: "flex", alignItems: "center", gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: T.goldFaint,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "13px", color: T.navy }}>100% RERA Approved</div>
              <div style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#8E96A2" }}>All layouts legally verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Statistics strip ── */}
      <div
        style={{
          background: T.white,
          borderTop: "1px solid rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "1440px", margin: "0 auto",
            padding: isMobile ? "0 8px" : "0 80px",
            display: "flex", alignItems: "stretch",
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} icon={s.icon} number={s.number} label={s.label} last={i === stats.length - 1} />
          ))}
        </div>
      </div>

      {/* ── Bottom quote ── */}
      <div
        style={{
          position: "relative",
          padding: isMobile ? "72px 20px" : "100px 80px",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Botanical corner decorations */}
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <CornerBotanical />
        </div>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <CornerBotanical flip />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, transform: "rotate(180deg) scaleX(-1)" }}>
          <CornerBotanical />
        </div>
        <div style={{ position: "absolute", bottom: 0, right: 0, transform: "rotate(180deg)" }}>
          <CornerBotanical />
        </div>

        {/* Gold rule above */}
        <div
          style={{
            width: "48px", height: "1.5px",
            background: T.gold,
            borderRadius: "9999px",
            marginBottom: "32px",
          }}
        />

        {/* Gold leaf icon */}
        <div style={{ marginBottom: "24px" }}>
          <IcoLeaf />
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: T.serif, fontWeight: 400,
            fontSize: isMobile ? "22px" : "30px", lineHeight: 1.55,
            fontStyle: "italic",
            color: T.navy,
            margin: 0, marginBottom: "32px",
            maxWidth: "720px",
            letterSpacing: "0.005em",
          }}
        >
          "We don't just develop plots, we build communities that become families."
        </blockquote>

        {/* Gold rule below */}
        <div
          style={{
            width: "48px", height: "1.5px",
            background: T.gold,
            borderRadius: "9999px",
          }}
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Left feature row icons
// ─────────────────────────────────────────────────────────────────────────────
function IcoShieldWhy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5.5v6.5c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V5.5L12 2z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}
function IcoPinWhy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.75 6 12 6 12s6-7.25 6-12c0-3.314-2.686-6-6-6z"/>
      <circle cx="12" cy="8" r="2.2"/>
    </svg>
  );
}
function IcoDiamondWhy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 13L2 9 6 3z"/>
      <line x1="2" y1="9" x2="22" y2="9"/>
    </svg>
  );
}
// ── Dark panel icons ──────────────────────────────────────────────────────────
function IcoInfra() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="19" width="20" height="2" rx="1"/>
      <path d="M4 19V10l8-7 8 7v9"/>
      <rect x="9" y="13" width="6" height="6"/>
    </svg>
  );
}
function IcoCommunity() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3"/>
      <circle cx="17" cy="9" r="2.2"/>
      <path d="M2 21c0-3.866 3.134-7 7-7h2c1.46 0 2.82.446 3.94 1.21"/>
      <path d="M16 21c0-2.5 1.5-4.5 3.5-5.5"/>
    </svg>
  );
}
function IcoPlanned() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
    </svg>
  );
}
function IcoExcellence() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Left feature row
// ─────────────────────────────────────────────────────────────────────────────
function WhyFeatureRow({
  icon, title, desc,
}: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
      {/* Icon bubble */}
      <div
        style={{
          flexShrink: 0,
          width: "42px", height: "42px",
          borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.30)`,
          background: "rgba(201,168,76,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginTop: "2px",
        }}
      >
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "11px", letterSpacing: "0.14em",
            textTransform: "uppercase", color: T.navy,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 400,
            fontSize: "13px", lineHeight: 1.68,
            color: "#6B7280",
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Dark panel feature column
// ─────────────────────────────────────────────────────────────────────────────
function DarkFeatureCol({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div
      style={{
        flex: isMobile ? "0 0 50%" : 1,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "24px 12px" : "32px 22px",
        gap: "14px",
        borderRight: last ? "none" : "1px solid rgba(201,168,76,0.20)",
        boxSizing: "border-box",
      }}
    >
      {/* Icon ring */}
      <div
        style={{
          width: "52px", height: "52px",
          borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.35)`,
          background: "rgba(201,168,76,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 700,
            fontSize: "10.5px", letterSpacing: "0.14em",
            textTransform: "uppercase", color: T.white,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: T.sans, fontWeight: 400,
            fontSize: "12px", lineHeight: 1.70,
            color: "rgba(255,255,255,0.52)",
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose KDM — Section
// ─────────────────────────────────────────────────────────────────────────────
function WhyChooseSection() {
  const { isMobile, isTablet } = useVP();
  const leftFeatures = [
    {
      icon: <IcoShieldWhy />,
      title: "Legally Secure",
      desc: "All layouts are DTCP & RERA approved for complete peace of mind.",
    },
    {
      icon: <IcoPinWhy />,
      title: "Prime Locations",
      desc: "Strategically located in fast-growing corridors with excellent connectivity.",
    },
    {
      icon: <IcoDiamondWhy />,
      title: "High Investment Value",
      desc: "High appreciation potential with assured returns for a future-ready investment.",
    },
  ];

  const darkFeatures = [
    {
      icon: <IcoInfra />,
      title: "World-Class Infrastructure",
      desc: "Wide roads, street lights, drainage, landscaping & modern amenities.",
    },
    {
      icon: <IcoCommunity />,
      title: "Secure & Gated Community",
      desc: "24×7 security, gated layouts & a safe environment for your family.",
    },
    {
      icon: <IcoPlanned />,
      title: "Thoughtfully Planned",
      desc: "Spacious layouts with optimal planning for comfort, privacy & convenience.",
    },
    {
      icon: <IcoExcellence />,
      title: "Built on Excellence",
      desc: "Quality that stands the test of time, backed by a legacy you can trust.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: T.ivory,
        overflow: "hidden",
      }}
    >
      {/* ── Two-column editorial row ── */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
          minHeight: isMobile ? "auto" : "560px",
        }}
      >
        {/* ─── LEFT column — ivory ─── */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 44%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: isMobile ? "72px 20px 56px" : isTablet ? "80px 40px 64px" : "100px 64px 80px 80px",
            background: T.ivory,
            gap: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
            <div
              style={{
                width: "28px", height: "1.5px",
                background: T.gold, borderRadius: "9999px",
              }}
            />
            <span
              style={{
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "10px", letterSpacing: "0.28em",
                textTransform: "uppercase", color: T.gold,
              }}
            >
              Why Choose KDM
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: T.serif, fontWeight: 800,
              fontSize: isMobile ? "36px" : isTablet ? "44px" : "52px", lineHeight: 1.08,
              margin: 0, marginBottom: "28px",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ display: "block", color: T.navy }}>Foundations</span>
            <span style={{ display: "block", color: T.navy }}>of Trust.</span>
            <span style={{ display: "block", color: T.gold }}>Vision for</span>
            <span style={{ display: "block", color: T.gold }}>Generations.</span>
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: T.sans, fontWeight: 400,
              fontSize: "14px", lineHeight: 1.78,
              color: "#6B7280",
              margin: 0, marginBottom: "40px",
              maxWidth: "360px",
            }}
          >
            At KDM Plots, we don't just develop plots — we create thoughtfully
            planned communities built on trust, transparency, and long-term value.
            Every detail is designed to elevate your lifestyle and secure your tomorrow.
          </p>

          {/* Gold rule */}
          <div
            style={{
              width: "40px", height: "1.5px",
              background: `linear-gradient(90deg, ${T.gold}, rgba(201,168,76,0.2))`,
              borderRadius: "9999px",
              marginBottom: "32px",
            }}
          />

          {/* Left feature rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {leftFeatures.map((f) => (
              <WhyFeatureRow key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>

        {/* ─── RIGHT column — photo with diagonal clip ─── */}
        {!isMobile && (
        <div
          style={{
            flex: "0 0 56%",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: isTablet ? "400px" : undefined,
          }}
        >
          {/* Photo area — diagonal left edge via clip-path */}
          <div
            style={{
              flex: 1,
              position: "relative",
              clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src={whyBg}
              alt="KDM premium gated community entrance"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "60% center",
                display: "block",
              }}
            />
            {/* Subtle dark overlay on photo for richness */}
            <div
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, rgba(8,14,28,0.08) 0%, rgba(8,14,28,0.28) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
        )}
      </div>

      {/* ── Dark marble panel — full width ── */}
      <div
        style={{
          background: `linear-gradient(135deg, #0A1628 0%, #0F1F35 40%, #0D1A2D 100%)`,
          borderTop: `1px solid rgba(201,168,76,0.15)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle marble texture overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 25% 50%, rgba(201,168,76,0.04) 0%, transparent 60%), radial-gradient(ellipse at 75% 50%, rgba(201,168,76,0.03) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative", zIndex: 1,
            maxWidth: "1440px", margin: "0 auto",
            padding: isMobile ? "0 4px" : "0 80px",
            display: "flex",
            flexWrap: isMobile ? "wrap" : "nowrap",
            alignItems: "stretch",
          }}
        >
          {darkFeatures.map((f, i) => (
            <DarkFeatureCol
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              last={i === darkFeatures.length - 1}
            />
          ))}
        </div>
        {/* Gold top edge line */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${T.gold} 50%, transparent)`,
            opacity: 0.45,
          }}
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — rebuilt section
// ─────────────────────────────────────────────────────────────────────────────
type ProjectStatus = "Ongoing" | "Upcoming" | "Completed";

interface Project {
  id: number;
  status: ProjectStatus;
  title: string;
  location: string;
  img: string;  // ← swap this value per card to change the photo
  dtcp: boolean;
  rera: boolean;
  prime: boolean;
  infra: boolean;
}

// ── To replace a card's image, update `img` for that entry ──────────────────
const ALL_PROJECTS: Project[] = [
  { id: 1, status: "Ongoing", title: "Akil Garden",            location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 2, status: "Ongoing", title: "Raja Rajeshwari Nagar",  location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 3, status: "Ongoing", title: "Lucky City",             location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 4, status: "Ongoing", title: "Ayyapatti Highway City", location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 5, status: "Ongoing", title: "Green View City",        location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 6, status: "Ongoing", title: "Thanga Boomi",           location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 7, status: "Ongoing", title: "Golden Park",            location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 8, status: "Ongoing", title: "Royal Garden",           location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
  { id: 9, status: "Ongoing", title: "RK Nagar",               location: "Madurai, Tamil Nadu", img: cardImg, dtcp: true, rera: true, prime: true, infra: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — reusable pieces
// ─────────────────────────────────────────────────────────────────────────────

// Approval badge: circle-check + label
function ApprovalBadge({ label, compact = false }: { label: string; compact?: boolean }) {
  const sz = compact ? "18px" : "22px";
  const fsz = compact ? "7px" : "7.5px";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
      <div
        style={{
          width: sz, height: sz, borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.50)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span
        style={{
          fontFamily: T.sans, fontWeight: 500,
          fontSize: fsz, letterSpacing: "0.04em",
          textAlign: "center", lineHeight: 1.25,
          color: "rgba(255,255,255,0.62)",
          maxWidth: "42px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Project Card (reusable, fully editable)
// ─────────────────────────────────────────────────────────────────────────────
// featured=true → large card (left slot), featured=false → compact card (right slots)
function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [hovered, setHovered] = React.useState(false);

  const cardH = featured ? 480 : 340;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        width: "100%",
        height: `${cardH}px`,
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        transform: hovered ? "translateY(-7px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 28px 72px rgba(8,14,28,0.30), 0 6px 20px rgba(8,14,28,0.14)"
          : "0 6px 28px rgba(8,14,28,0.13), 0 2px 8px rgba(8,14,28,0.07)",
      }}
    >
      {/* ── PROJECT IMAGE — change project.img to swap photo ── */}
      <img
        src={project.img}
        alt={project.title}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 35%",
          transition: "transform 0.55s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: featured
          ? "linear-gradient(to top, rgba(6,12,24,0.97) 0%, rgba(6,12,24,0.62) 42%, rgba(6,12,24,0.12) 100%)"
          : "linear-gradient(to top, rgba(6,12,24,0.95) 0%, rgba(6,12,24,0.55) 50%, rgba(6,12,24,0.10) 100%)",
      }} />

      {/* Gold top accent line on featured card */}
      {featured && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${T.gold}, rgba(201,168,76,0.4))`,
        }} />
      )}

      {/* Status badge — top left */}
      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "5px 11px",
          borderRadius: "9999px",
          background: "rgba(6,12,24,0.65)",
          border: `1px solid rgba(201,168,76,0.50)`,
          fontFamily: T.sans, fontWeight: 700,
          fontSize: "8.5px", letterSpacing: "0.20em",
          textTransform: "uppercase", color: T.gold,
          backdropFilter: "blur(10px)",
        }}>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: T.gold }} />
          {project.status}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: featured ? "28px 24px 22px" : "18px 18px 16px",
        display: "flex", flexDirection: "column",
        gap: featured ? "11px" : "7px",
      }}>
        {/* KDM brand label */}
        <span style={{
          fontFamily: T.sans, fontWeight: 700,
          fontSize: featured ? "10px" : "8.5px",
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: T.gold, opacity: 0.85,
        }}>KDM</span>

        {/* Project name */}
        <h3 style={{
          fontFamily: T.serif, fontWeight: 700,
          fontSize: featured ? "28px" : "18px",
          lineHeight: 1.15, color: T.white, margin: 0,
        }}>
          {project.title}
        </h3>

        {/* Location */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/><circle cx="12" cy="8.5" r="2"/>
          </svg>
          <span style={{ fontFamily: T.sans, fontSize: featured ? "11.5px" : "10px", color: "rgba(255,255,255,0.68)", fontWeight: 400 }}>
            {project.location}
          </span>
        </div>

        {/* Thin divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.11)", margin: "1px 0" }} />

        {/* Badges + CTA */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "6px" }}>
          <div style={{ display: "flex", gap: featured ? "12px" : "8px" }}>
            {project.dtcp  && <ApprovalBadge label="DTCP Approved"    compact={!featured} />}
            {project.rera  && <ApprovalBadge label="RERA Approved"    compact={!featured} />}
            {project.prime && <ApprovalBadge label="Prime Location"   compact={!featured} />}
            {project.infra && <ApprovalBadge label="Premium Infra"    compact={!featured} />}
          </div>
          <button
            aria-label={`Explore ${project.title}`}
            style={{
            display: "inline-flex", alignItems: "center", gap: "5px",
            background: "transparent", border: "none",
            fontFamily: T.sans, fontWeight: 700,
            fontSize: featured ? "11px" : "9px",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: T.gold, cursor: "pointer", padding: 0,
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
            Explore Project
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Info strip item
// ─────────────────────────────────────────────────────────────────────────────
function ProjectInfoItem({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "16px",
      flex: 1,
      paddingRight: (last || isMobile) ? 0 : "40px",
      marginRight: (last || isMobile) ? 0 : "40px",
      borderRight: (last || isMobile) ? "none" : "1px solid rgba(15,31,53,0.10)",
      paddingBottom: isMobile ? "12px" : "0",
      borderBottom: isMobile && !last ? "1px solid rgba(15,31,53,0.08)" : "none",
    }}>
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%",
        border: `1.5px solid rgba(201,168,76,0.28)`,
        background: T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>
          {title}
        </p>
        <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#6B7280", margin: 0, lineHeight: 1.55 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Decorative birds
// ─────────────────────────────────────────────────────────────────────────────
function DecorativeBirds() {
  return (
    <svg width="120" height="56" viewBox="0 0 120 56" fill="none" style={{ opacity: 0.30 }}>
      {[
        [6,36,12,30,18,36],[22,28,29,22,36,28],[42,20,50,13,58,20],
        [64,12,73,5,82,12],[88,20,96,14,104,20],[108,30,114,25,120,30],
        [30,44,36,39,42,44],[70,38,76,33,82,38],
      ].map(([x1,y1,xm,ym,x2,y2],i) => (
        <path key={i} d={`M${x1} ${y1} Q${xm} ${ym} ${x2} ${y2}`}
          stroke={T.navy} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured Projects — Section
// ─────────────────────────────────────────────────────────────────────────────
const CATEGORIES = ["All Projects", "Ongoing", "Upcoming", "Completed"] as const;
type Category = typeof CATEGORIES[number];
// ── Remove from DISABLED_TABS to enable that tab ──
const DISABLED_TABS = new Set<Category>(["Upcoming", "Completed"]);
const GAP_PX = 18;

function FeaturedProjectsSection() {
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

      {/* ── Section background ── */}
      <img src={projectsBg2} alt="" aria-hidden="true" loading="lazy" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center", opacity: 0.55, pointerEvents: "none",
      }} />

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
            color: "#6B7280", textAlign: "center", margin: "0 auto 36px", maxWidth: "460px",
          }}>
            Thoughtfully designed layouts in Madurai's most desirable locations.
            Crafted for a better lifestyle. Built for long-term value.
          </p>

          {/* Decorative birds */}
          <div style={{ position: "absolute", top: "80px", right: "64px", pointerEvents: "none" }}>
            <DecorativeBirds />
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "32px" }}>
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
                    color: isActive ? T.white : isDisabled ? "rgba(15,31,53,0.26)" : "#6B7280",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    transition: "all 0.2s", opacity: isDisabled ? 0.45 : 1,
                  }}>
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "24px" }}>
            <button onClick={() => go(-1)} aria-label="Previous project"
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                border: `1.5px solid rgba(201,168,76,0.45)`, background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.goldFaint; e.currentTarget.style.borderColor = T.gold; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; }}
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
                boxShadow: "0 4px 16px rgba(201,168,76,0.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.white} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ════ CAROUSEL TRACK ════ */}
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
        <div style={{ background: T.white, borderTop: "1px solid rgba(201,168,76,0.12)" }}>
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

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — SVG Icons
// ─────────────────────────────────────────────────────────────────────────────
function IcoRoads() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 6v16M10 10H6M10 14H6M10 18H6M18 10h4M18 14h4M18 18h4" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function IcoStreetLight() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 22V12" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M14 12 Q14 7 20 7" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="20" cy="7" r="2" stroke={T.gold} strokeWidth="1.2"/>
      <path d="M10 22h8" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function IcoDrainage() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M7 14 Q10 10 14 14 Q18 18 21 14" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <path d="M7 18 Q10 14 14 18 Q18 22 21 18" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <path d="M7 10 Q10 6 14 10 Q18 14 21 10" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
function IcoPlantation() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 22v-9" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M14 13 Q10 11 9 7 Q13 7 14 11" stroke={T.gold} strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
      <path d="M14 15 Q18 13 19 9 Q15 9 14 13" stroke={T.gold} strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function IcoSecurityShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 6 L20 9v5c0 3.5-2.8 6.5-6 7.5C7.8 20.5 5 17.5 5 14V9z" stroke={T.gold} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      <polyline points="11 14 13 16 17 11" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IcoElectricity() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <polygon points="15,6 8,15 14,15 13,22 20,13 14,13" stroke={T.gold} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function IcoWater() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 7 Q14 7 9 14 a5 5 0 0 0 10 0 Q14 7 14 7z" stroke={T.gold} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function IcoDTCP() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <circle cx="14" cy="14" r="6" stroke={T.gold} strokeWidth="1.3"/>
      <polyline points="11 14 13 16 17 11" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Feature Item (glass card column)
// ─────────────────────────────────────────────────────────────────────────────
function InfraFeatureItem({
  icon, title, desc, last = false,
}: { icon: React.ReactNode; title: string; desc: string; last?: boolean }) {
  const { isMobile } = useVP();
  return (
    <div style={{
      flex: isMobile ? "0 0 25%" : 1,
      display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      padding: isMobile ? "8px 4px" : "0 16px",
      borderRight: last ? "none" : "1px solid rgba(15,31,53,0.08)",
      boxSizing: "border-box",
    }}>
      <div style={{ marginBottom: "12px" }}>{icon}</div>
      <p style={{
        fontFamily: T.sans, fontWeight: 700,
        fontSize: "9px", letterSpacing: "0.13em",
        textTransform: "uppercase", color: T.navy,
        margin: 0, marginBottom: "5px", lineHeight: 1.4,
      }}>{title}</p>
      <p style={{
        fontFamily: T.sans, fontWeight: 400,
        fontSize: "10px", color: "#8B909A",
        margin: 0, lineHeight: 1.5,
      }}>{desc}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Amenity Card
// ─────────────────────────────────────────────────────────────────────────────
interface Amenity { id: number; title: string; img: string; }

function AmenityCard({ amenity }: { amenity: Amenity }) {
  const { isMobile } = useVP();
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        flex: isMobile ? "0 0 220px" : "0 0 260px",
        height: "180px",
        borderRadius: "18px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        transform: hovered ? "translateY(-6px) scale(1.015)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 22px 56px rgba(8,14,28,0.26), 0 4px 14px rgba(8,14,28,0.12)"
          : "0 6px 24px rgba(8,14,28,0.11), 0 2px 6px rgba(8,14,28,0.06)",
        flexShrink: 0,
      }}
    >
      <img
        src={amenity.img}
        alt={amenity.title}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          transition: "transform 0.55s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(6,12,24,0.92) 0%, rgba(6,12,24,0.40) 55%, rgba(6,12,24,0.05) 100%)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "2.5px",
        background: `linear-gradient(90deg, ${T.gold}, rgba(201,168,76,0.3))`,
        opacity: hovered ? 1 : 0.6,
        transition: "opacity 0.3s",
      }} />
      <div style={{
        position: "absolute", bottom: "14px", left: "16px", right: "16px",
        display: "flex", alignItems: "center", gap: "8px",
      }}>
        <div style={{
          width: "22px", height: "22px", borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.55)`,
          background: "rgba(6,12,24,0.50)",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(6px)", flexShrink: 0,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/>
            <circle cx="12" cy="8.5" r="2"/>
          </svg>
        </div>
        <span style={{
          fontFamily: T.sans, fontWeight: 700,
          fontSize: "12px", letterSpacing: "0.06em",
          textTransform: "uppercase", color: T.white, lineHeight: 1.2,
        }}>{amenity.title}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Carousel Arrow Button
// ─────────────────────────────────────────────────────────────────────────────
function CarouselArrow({ direction, onClick, disabled = false }: {
  direction: "left" | "right"; onClick: () => void; disabled?: boolean;
}) {
  const [hov, setHov] = React.useState(false);
  const isRight = direction === "right";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={isRight ? "Next amenity" : "Previous amenity"}
      style={{
        width: "44px", height: "44px", borderRadius: "50%",
        border: isRight ? "none" : `1.5px solid rgba(201,168,76,${disabled ? 0.18 : 0.50})`,
        background: isRight ? (hov ? "#b8943c" : T.gold) : (hov ? T.goldFaint : "transparent"),
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.22s ease",
        boxShadow: isRight && !disabled ? "0 4px 14px rgba(201,168,76,0.32)" : "none",
        opacity: disabled ? 0.38 : 1,
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke={isRight ? T.white : T.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      >
        {isRight
          ? <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
          : <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>}
      </svg>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Amenity Data
// ─────────────────────────────────────────────────────────────────────────────
// ── Add new amenity objects here; layout updates automatically ──
const AMENITIES: Amenity[] = [
  { id: 1,  title: "Grand Entrance",       img: cardImg },
  { id: 2,  title: "Wide Roads",           img: cardImg },
  { id: 3,  title: "Landscaped Avenue",    img: cardImg },
  { id: 4,  title: "Children's Park",      img: cardImg },
  { id: 5,  title: "Street Lights",        img: cardImg },
  { id: 6,  title: "Security Gate",        img: cardImg },
  { id: 7,  title: "Rainwater Harvesting", img: cardImg },
  { id: 8,  title: "Visitor Parking",      img: cardImg },
  { id: 9,  title: "Walking Track",        img: cardImg },
  { id: 10, title: "Club House",           img: cardImg },
  { id: 11, title: "Open Gym",             img: cardImg },
  { id: 12, title: "Jogging Track",        img: cardImg },
];

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — Main Component
// ─────────────────────────────────────────────────────────────────────────────
function InfrastructureSection() {
  const { isMobile, isTablet } = useVP();
  const CARD_W  = isMobile ? 220 : 260;
  const CARD_GAP = 16;
  const STEP    = CARD_W + CARD_GAP;
  const VISIBLE_COUNT = 6;
  const [offset, setOffset]       = React.useState(0);
  const [dragging, setDragging]   = React.useState(false);
  const [startX, setStartX]       = React.useState(0);
  const [dragDelta, setDragDelta] = React.useState(0);
  const maxOffset = Math.max(0, (AMENITIES.length - VISIBLE_COUNT) * STEP);

  function slideBy(delta: number) {
    setOffset(prev => Math.min(maxOffset, Math.max(0, prev + delta)));
  }

  function onPointerDown(e: React.PointerEvent) {
    setDragging(true);
    setStartX(e.clientX);
    setDragDelta(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    setDragDelta(e.clientX - startX);
  }
  function onPointerUp() {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dragDelta) > 30) slideBy(dragDelta < 0 ? STEP : -STEP);
    setDragDelta(0);
  }

  return (
    <section style={{ position: "relative", background: T.ivory, overflow: "hidden", width: "100%" }}>

      {/* ════ HERO AREA ════ */}
      <div style={{
        maxWidth: "1440px", margin: "0 auto",
        padding: isMobile ? "72px 20px 0" : isTablet ? "80px 40px 0" : "96px 80px 0",
        display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? "40px" : "60px",
      }}>

        {/* Left: editorial text */}
        <div style={{ flex: isMobile ? "none" : "0 0 38%", display: "flex", flexDirection: "column", gap: "22px" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>
              Premium Infrastructure
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : isTablet ? "44px" : "52px", lineHeight: 1.06, margin: 0, letterSpacing: "-0.01em" }}>
            <span style={{ display: "block", color: T.navy }}>Everything</span>
            <span style={{ display: "block", color: T.navy }}>Planned.</span>
            <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Nothing</span>
            <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Compromised.</span>
          </h2>

          {/* Divider mark */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "1px", background: T.gold, opacity: 0.5 }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: T.gold, opacity: 0.5 }} />
          </div>

          {/* Body */}
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.82, color: "#6B7280", margin: 0, maxWidth: "380px" }}>
            Every KDM layout is thoughtfully designed with wide roads, underground
            infrastructure, secure planning, and premium amenities that create
            communities built to last for generations.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["8+ Amenities", "DTCP & RERA", "30–60 FT Roads"].map((label) => (
              <span key={label} style={{
                display: "inline-flex", alignItems: "center",
                padding: "7px 16px", borderRadius: "9999px",
                border: `1px solid rgba(201,168,76,0.35)`,
                background: T.goldFaint,
                fontFamily: T.sans, fontWeight: 600,
                fontSize: "11px", letterSpacing: "0.08em", color: T.navy,
              }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Right: panoramic image */}
        <div style={{ flex: 1, position: "relative" }}>
          {/* White bleed into left text */}
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: "72px",
            background: `linear-gradient(to right, ${T.ivory}, transparent)`,
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            borderRadius: "24px", overflow: "hidden",
            boxShadow: "0 32px 80px rgba(8,14,28,0.17), 0 8px 24px rgba(8,14,28,0.08)",
            lineHeight: 0,
          }}>
            <img
              src={cardImg}
              alt="KDM Plots — premium layout"
              style={{
                width: "100%", height: "440px",
                objectFit: "cover", objectPosition: "center 30%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* ════ INFRASTRUCTURE FEATURES GLASS CARD ════ */}
      <div style={{
        maxWidth: "1440px", margin: "0 auto",
        padding: isMobile ? "0 16px" : isTablet ? "0 40px" : "0 80px",
        marginTop: "-24px",
        position: "relative", zIndex: 4,
      }}>
        <div style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderRadius: "16px",
          border: "1px solid rgba(201,168,76,0.13)",
          boxShadow: "0 8px 48px rgba(8,14,28,0.08), 0 2px 12px rgba(8,14,28,0.04)",
          padding: isMobile ? "24px 12px" : "36px 20px",
          display: "flex", alignItems: "flex-start",
          flexWrap: isMobile ? "wrap" : "nowrap",
          gap: isMobile ? "8px 0" : "0",
        }}>
          <InfraFeatureItem icon={<IcoRoads />}         title="Wide Blacktop Roads"      desc="30 / 40 / 50 / 60 FT" />
          <InfraFeatureItem icon={<IcoStreetLight />}    title="LED Street Lights"        desc="Energy Efficient" />
          <InfraFeatureItem icon={<IcoDrainage />}       title="Underground Drainage"     desc="Modern & Durable" />
          <InfraFeatureItem icon={<IcoPlantation />}     title="Avenue Plantation"        desc="Green & Serene" />
          <InfraFeatureItem icon={<IcoSecurityShield />} title="24×7 Security"            desc="CCTV Surveillance" />
          <InfraFeatureItem icon={<IcoElectricity />}    title="Underground EB Provision" desc="Safe & Reliable" />
          <InfraFeatureItem icon={<IcoWater />}          title="Water Connection"         desc="For Every Plot" />
          <InfraFeatureItem icon={<IcoDTCP />}           title="DTCP & RERA Approved"    desc="Transparent & Legal" last />
        </div>
      </div>

      {/* ════ AMENITIES CAROUSEL ════ */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "56px 20px 0" : isTablet ? "64px 40px 0" : "72px 80px 0" }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
              <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>
                Amenities
              </span>
            </div>
            <h3 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "32px", lineHeight: 1.15, color: T.navy, margin: 0, letterSpacing: "-0.01em" }}>
              Built for a Better Tomorrow
            </h3>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <CarouselArrow direction="left"  onClick={() => slideBy(-STEP)} disabled={offset <= 0} />
            <CarouselArrow direction="right" onClick={() => slideBy(+STEP)} disabled={offset >= maxOffset} />
          </div>
        </div>

        {/* Draggable track */}
        <div
          style={{ overflow: "hidden", cursor: dragging ? "grabbing" : "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            transform: `translateX(${-(offset) + dragDelta}px)`,
            transition: dragging ? "none" : "transform 0.52s cubic-bezier(0.25,1,0.5,1)",
            willChange: "transform",
            userSelect: "none",
            paddingBottom: "8px",
          }}>
            {AMENITIES.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>
      </div>

      {/* ════ BOTTOM INFO STRIP ════ */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "40px 16px 60px" : "56px 80px 80px" }}>
        <div style={{
          background: T.white,
          borderRadius: "16px",
          border: "1px solid rgba(201,168,76,0.12)",
          boxShadow: "0 4px 32px rgba(8,14,28,0.07), 0 1px 8px rgba(8,14,28,0.04)",
          padding: isMobile ? "24px 20px" : "36px 48px",
          display: "flex", alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "0",
        }}>

          {/* Item 1 */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", paddingRight: isMobile ? "0" : "32px", borderRight: isMobile ? "none" : "1px solid rgba(15,31,53,0.09)", borderBottom: isMobile ? "1px solid rgba(15,31,53,0.07)" : "none", paddingBottom: isMobile ? "16px" : "0" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: `1.5px solid rgba(201,168,76,0.30)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>Visit Our Site</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#6B7280", margin: 0, lineHeight: 1.55 }}>Experience the layout in person.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", padding: isMobile ? "0 0 16px" : "0 32px", borderRight: isMobile ? "none" : "1px solid rgba(15,31,53,0.09)", borderBottom: isMobile ? "1px solid rgba(15,31,53,0.07)" : "none" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: `1.5px solid rgba(201,168,76,0.30)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>Expert Consultation</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#6B7280", margin: 0, lineHeight: 1.55 }}>Get guidance from our specialists.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", padding: isMobile ? "0" : "0 32px", borderRight: isMobile ? "none" : "1px solid rgba(15,31,53,0.09)" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: `1.5px solid rgba(201,168,76,0.30)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "4px" }}>Hassle-Free Process</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#6B7280", margin: 0, lineHeight: 1.55 }}>From booking to registration.</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ flex: "0 0 auto", paddingLeft: "32px" }}>
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "14px 30px",
                border: `1.5px solid ${T.gold}`,
                borderRadius: "6px",
                background: "transparent",
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.navy,
                cursor: "pointer", transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = T.gold;
                e.currentTarget.style.color = T.white;
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(201,168,76,0.40)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = T.navy;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Site Visit
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — scroll-reveal hook
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.18): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = React.useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Top Feature Item
// ─────────────────────────────────────────────────────────────────────────────
function InvestFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
    >
      <div style={{
        width: "44px", height: "44px", borderRadius: "10px", flexShrink: 0,
        border: `1.5px solid rgba(201,168,76,${hov ? 0.8 : 0.45})`,
        background: hov ? T.goldFaint : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s ease",
        transform: hov ? "scale(1.08)" : "scale(1)",
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "12.5px", letterSpacing: "0.04em", color: T.navy, margin: 0, marginBottom: "4px" }}>{title}</p>
        <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Timeline Milestone
// ─────────────────────────────────────────────────────────────────────────────
function TimelineMilestone({
  icon, label, title, desc, delay, visible,
}: { icon: React.ReactNode; label: string; title: string; desc: string; delay: number; visible: boolean }) {
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {/* Icon bubble */}
      <div style={{
        width: "52px", height: "52px", borderRadius: "50%",
        border: `1.5px solid rgba(201,168,76,0.55)`,
        background: "rgba(201,168,76,0.10)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "14px", flexShrink: 0,
        boxShadow: "0 2px 12px rgba(201,168,76,0.15)",
      }}>
        {icon}
      </div>
      <span style={{ fontFamily: T.sans, fontWeight: 800, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: T.gold, marginBottom: "6px", display: "block" }}>{label}</span>
      <p style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "15px", color: T.navy, margin: 0, marginBottom: "6px", lineHeight: 1.25 }}>{title}</p>
      <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#7C8390", margin: 0, lineHeight: 1.6, maxWidth: "120px" }}>{desc}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Bottom Strip Card
// ─────────────────────────────────────────────────────────────────────────────
function InvestStripCard({ icon, title, last = false }: { icon: React.ReactNode; title: string; last?: boolean }) {
  const { isMobile } = useVP();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: isMobile ? "0 0 33.333%" : 1, display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", gap: "12px", padding: isMobile ? "20px 8px" : "28px 20px",
        borderRight: last ? "none" : "1px solid rgba(15,31,53,0.07)",
        boxSizing: "border-box",
        transition: "background 0.25s",
        background: hov ? T.goldFaint : "transparent",
        cursor: "default",
      }}
    >
      <div style={{
        width: "44px", height: "44px", borderRadius: "50%",
        border: `1.5px solid rgba(201,168,76,${hov ? 0.7 : 0.35})`,
        background: hov ? "rgba(201,168,76,0.12)" : T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s",
        transform: hov ? "scale(1.1)" : "scale(1)",
      }}>
        {icon}
      </div>
      <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.10em", textTransform: "uppercase", color: T.navy, margin: 0, lineHeight: 1.35 }}>{title}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Investment Section — Main
// ─────────────────────────────────────────────────────────────────────────────
function InvestmentSection() {
  const { isMobile, isTablet } = useVP();
  const [heroRef, heroVisible]       = useInView(0.12);
  const [timelineRef, timelineVisible] = useInView(0.20);
  const [stripRef, stripVisible]     = useInView(0.20);

  // Floating quote card gentle bob animation
  const [bobY, setBobY] = React.useState(0);
  React.useEffect(() => {
    let frame: number;
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const t = (ts - start) / 2800;
      setBobY(Math.sin(t * Math.PI * 2) * 6);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section style={{ background: T.ivory, width: "100%", overflow: "hidden" }}>

      {/* ════ HERO SPLIT ════ */}
      <div
        ref={heroRef}
        style={{
          maxWidth: "1920px", margin: "0 auto",
          display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "stretch", minHeight: isMobile ? "auto" : "580px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* LEFT — editorial text */}
        <div style={{
          flex: isMobile ? "none" : "0 0 44%", maxWidth: isMobile ? "100%" : "680px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: isMobile ? "72px 20px 56px" : isTablet ? "64px 40px" : "80px 64px 80px 80px",
          background: T.ivory,
          position: "relative", zIndex: 2,
        }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>
              Investment Advantages
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : isTablet ? "44px" : "54px", lineHeight: 1.06, margin: 0, marginBottom: "22px", letterSpacing: "-0.01em" }}>
            <span style={{ display: "block", color: T.navy }}>Invest Today.</span>
            <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Own Tomorrow.</span>
          </h2>

          {/* Body */}
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.82, color: "#6B7280", margin: 0, marginBottom: "44px", maxWidth: "400px" }}>
            KDM Plots offers more than land — it offers long-term value, legal security,
            appreciation potential and future-ready investments designed for generations.
          </p>

          {/* 2×2 Feature Grid */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "20px" : "24px 32px" }}>
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
              title="High Growth Potential"
              desc="Rapidly developing corridors with excellent appreciation."
            />
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.9 4.6-1.4 8-5.5 8-9.9V7z"/><polyline points="9 12 11 14 15 10"/></svg>}
              title="100% Legal Security"
              desc="DTCP & RERA approved layouts with clear documentation."
            />
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
              title="Future Ready Investment"
              desc="Prime locations planned for long-term value."
            />
            <InvestFeature
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>}
              title="Excellent Connectivity"
              desc="Near schools, highways and essential infrastructure."
            />
          </div>
        </div>

        {/* RIGHT — panoramic image with ivory bleed + quote card */}
        {!isMobile && <div style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: isTablet ? "400px" : undefined }}>
          {/* Ivory gradient bleed from left */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
            background: `linear-gradient(to right, ${T.ivory} 0%, rgba(248,245,239,0.70) 18%, rgba(248,245,239,0.10) 40%, transparent 60%)`,
          }} />

          {/* Panoramic photo */}
          <img
            src={investBg}
            alt="KDM Plots — premium entrance"
            loading="lazy"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 25%",
              display: "block",
            }}
          />

          {/* Floating quote card */}
          <div style={{
            position: "absolute", top: "50%", left: "12%",
            transform: `translateY(calc(-50% + ${bobY}px))`,
            zIndex: 4,
            width: "300px",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "18px",
            border: "1px solid rgba(201,168,76,0.22)",
            boxShadow: "0 24px 64px rgba(8,14,28,0.15), 0 4px 16px rgba(8,14,28,0.06)",
            padding: "28px 28px 24px",
          }}>
            {/* Gold quote mark */}
            <div style={{ marginBottom: "14px" }}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12.5C0 5.6 4.2 1.5 12.6 0l1.4 2.4C9.2 3.5 6.8 6 6.4 9.6H12V20H0zm16 0V12.5C16 5.6 20.2 1.5 28.6 0L30 2.4C25.2 3.5 22.8 6 22.4 9.6H28V20H16z" fill={T.gold} fillOpacity="0.55"/>
              </svg>
            </div>
            <p style={{
              fontFamily: T.serif, fontWeight: 700, fontStyle: "italic",
              fontSize: "18px", lineHeight: 1.45, color: T.navy,
              margin: 0, marginBottom: "16px",
            }}>
              "Land is not an expense.<br/>It's an appreciating asset."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "20px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
              <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.gold }}>KDM Plots</span>
            </div>
          </div>
        </div>}
      </div>

      {/* ════ VALUE TIMELINE ════ */}
      <div
        ref={timelineRef}
        style={{ background: T.navy, width: "100%", padding: isMobile ? "56px 20px 64px" : "72px 80px 80px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Timeline header */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
              <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>Value Timeline</span>
            </div>
            <h3 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "42px", lineHeight: 1.1, margin: 0, color: T.white }}>
              Strong today.{" "}
              <span style={{ color: T.gold, fontStyle: "italic" }}>Stronger tomorrow.</span>
            </h3>
          </div>

          {/* Timeline track */}
          <div style={{ position: "relative" }}>

            {/* Connecting gold line */}
            <div style={{
              position: "absolute",
              top: "26px", left: "10%", right: "10%", height: "1.5px",
              background: `linear-gradient(to right, transparent, ${T.gold} 8%, ${T.gold} 92%, transparent)`,
              opacity: 0.45,
            }} />

            {/* Milestones */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "32px" : "0", position: "relative", zIndex: 2 }}>
              <TimelineMilestone
                visible={timelineVisible} delay={0}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                label="Today"
                title="Prime Location Investment"
                desc="Secure your plot in a rapidly growing corridor."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={120}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
                label="1–2 Years"
                title="Infrastructure Expansion"
                desc="Roads, utilities and connectivity upgrades transform the area."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={240}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
                label="3–5 Years"
                title="Property Appreciation"
                desc="Demand rises as the neighbourhood matures and grows."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={360}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
                label="5–7 Years"
                title="Strong Asset Growth"
                desc="Your investment delivers proven, significant returns."
              />
              <TimelineMilestone
                visible={timelineVisible} delay={480}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                label="Long Term"
                title="Generational Wealth Creation"
                desc="A legacy asset that appreciates across generations."
              />
            </div>
          </div>

          {/* Appreciation callout */}
          <div style={{
            marginTop: "56px", paddingTop: "48px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "20px" : "48px",
          }}>
            <div>
              <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "52px", color: T.gold, lineHeight: 1 }}>2×–4×</span>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.60)", margin: "6px 0 0", lineHeight: 1.6 }}>
                Potential appreciation in the next 5–7 years.<br/>
                <em style={{ color: "rgba(255,255,255,0.35)", fontStyle: "normal", fontSize: "11px" }}>Historical estimates based on regional market trends.</em>
              </p>
            </div>
            <div style={{ width: "1px", height: "56px", background: "rgba(255,255,255,0.10)", flexShrink: 0 }} />
            <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.75, maxWidth: "480px" }}>
              Real estate in prime locations has consistently outperformed other
              asset classes over the long term. KDM Plots are positioned in
              Madurai's highest-growth corridors — built for the future.
            </p>
          </div>
        </div>
      </div>

      {/* ════ BOTTOM STRIP — Why invest in Madurai? ════ */}
      <div
        ref={stripRef}
        style={{
          background: T.white,
          borderTop: "1px solid rgba(201,168,76,0.10)",
          opacity: stripVisible ? 1 : 0,
          transform: stripVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
        }}
      >
        {/* Strip label */}
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: isMobile ? "32px 20px 0" : "40px 80px 0",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
          <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: T.gold }}>
            Why Invest in Madurai?
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "stretch", flexWrap: isMobile ? "wrap" : "nowrap" }}>
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
            title="Fast Growing Madurai"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>}
            title="Excellent Road Connectivity"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>}
            title="Educational Institutions"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>}
            title="Industrial Expansion"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
            title="Rental Demand"
          />
          <InvestStripCard
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
            title="Future Smart Investment"
            last
          />
        </div>
      </div>

    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — Data
// ─────────────────────────────────────────────────────────────────────────────
interface Testimonial {
  id: number;
  // ── EDITABLE: customer's review text ──
  review: string;
  // ── EDITABLE: customer full name ──
  name: string;
  // ── EDITABLE: city / location shown below name ──
  city: string;
  // ── EDITABLE: 2-letter initials shown when no photo is set ──
  initials: string;
  // ── EDITABLE: fallback circle color when no photo — any CSS color ──
  avatarBg: string;
  // ── EDITABLE: import a real photo and set it here ──
  // HOW TO ADD A PHOTO:
  //   1. Drop the customer photo into src/imports/
  //   2. Add at the top of the file:  import personPhoto from "@/imports/photo.jpg";
  //   3. Set  photo: personPhoto  on this testimonial object
  //   If no photo is provided the initials circle is shown automatically.
  photo?: string;
}

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
// Testimonials — Single Card
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: Testimonial }) {
  const { isMobile } = useVP();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: isMobile ? "0 0 300px" : "0 0 288px",
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px 26px 24px",
        display: "flex", flexDirection: "column", gap: "0",
        boxShadow: hov
          ? "0 24px 64px rgba(8,14,28,0.14), 0 6px 20px rgba(8,14,28,0.08)"
          : "0 4px 28px rgba(8,14,28,0.07), 0 1px 6px rgba(8,14,28,0.04)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        cursor: "default",
        flexShrink: 0,
        border: `1px solid rgba(201,168,76,${hov ? 0.22 : 0.10})`,
      }}
    >
      {/* Gold quotation icon */}
      <div style={{
        marginBottom: "16px",
        opacity: hov ? 1 : 0.7,
        transition: "opacity 0.3s",
        filter: hov ? "drop-shadow(0 2px 8px rgba(201,168,76,0.45))" : "none",
      }}>
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
          <path d="M0 24V15C0 6.7 4.8 1.8 14.4 0L16 2.8C10.5 4.1 7.8 7.2 7.3 11.5H14V24H0zm18 0V15C18 6.7 22.8 1.8 32.4 0L34 2.8C28.5 4.1 25.8 7.2 25.3 11.5H32V24H18z"
            fill={T.gold} fillOpacity="0.60"/>
        </svg>
      </div>

      {/* Review text */}
      <p style={{
        fontFamily: T.sans, fontWeight: 400, fontSize: "13.5px",
        lineHeight: 1.75, color: "#4B5563",
        margin: 0, marginBottom: "22px", flex: 1,
      }}>
        {t.review}
      </p>

      {/* Thin gold divider */}
      <div style={{
        height: "1px",
        background: `linear-gradient(to right, ${T.gold}, rgba(201,168,76,0.2))`,
        marginBottom: "18px",
        opacity: 0.5,
      }} />

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

        {/* ── Avatar: shows photo if t.photo is set, otherwise initials circle ── */}
        <div style={{
          width: "46px", height: "46px", borderRadius: "50%",
          flexShrink: 0, overflow: "hidden",
          border: "2px solid rgba(201,168,76,0.35)",
          background: t.photo ? "transparent" : t.avatarBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: hov ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.35s ease",
          boxShadow: hov ? "0 0 0 3px rgba(201,168,76,0.18)" : "none",
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
            <span style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#9CA3AF" }}>{t.city}</span>
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
function StatCounter({ value, suffix, label, visible, delay = 0 }: {
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
      transition: `opacity 0.6s ease ${delay + 100}ms, transform 0.6s ease ${delay + 100}ms`,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
        <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "40px", color: T.white, lineHeight: 1 }}>{count}</span>
        <span style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "28px", color: T.gold, lineHeight: 1 }}>{suffix}</span>
      </div>
      <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: 0, textAlign: "center", lineHeight: 1.5 }}>{label}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — Main Section
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const { isMobile, isTablet } = useVP();
  const [heroRef,  heroVisible]  = useInView(0.12);
  const [statRef,  statVisible]  = useInView(0.25);
  const [carouRef, carouVisible] = useInView(0.10);

  // ── Carousel state ──
  const n = TESTIMONIALS.length;
  const cloned: Testimonial[] = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const CARD_W = isMobile ? 300 : 288;
  const CARD_GAP = 18;
  const STEP = CARD_W + CARD_GAP;
  const SHOW = 4;

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
            color: "rgba(201,168,76,0.07)",
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
            <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.82, color: "#6B7280", margin: 0, maxWidth: "380px" }}>
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
          <img
            src={investBg}
            alt="KDM Plots — premium entrance"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%", display: "block" }}
          />
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

          {/* Left arrow — floats outside */}
          <button
            onClick={() => goTo(pos - 1)}
            aria-label="Previous testimonial"
            style={{
              position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px", height: "44px", borderRadius: "50%",
              border: `1.5px solid rgba(201,168,76,0.45)`, background: T.ivory,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.22s",
              boxShadow: "0 4px 18px rgba(8,14,28,0.10)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.borderColor = T.gold; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.ivory; e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.navy} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
          </button>

          {/* Right arrow — floats outside */}
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
              boxShadow: "0 4px 16px rgba(201,168,76,0.35)",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.white} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          {/* Track viewport */}
          <div
            style={{ overflow: "hidden", padding: "16px 4px 24px" }}
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
                <TestimonialCard key={i} t={t} />
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
                    background: active ? T.gold : "rgba(201,168,76,0.30)",
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
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 45%)`,
        }} />

        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "stretch", flexDirection: isMobile ? "column" : "row", flexWrap: isTablet ? "wrap" : "nowrap" }}>

          {/* Col 1 — headline */}
          <div style={{
            flex: "0 0 260px", padding: "48px 40px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
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
            flex: 1, padding: "48px 32px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
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
            flex: 1, padding: "48px 32px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <StatCounter value={500} suffix="+" label="Happy Families" visible={statVisible} delay={120} />
          </div>

          {/* Col 4 — guarantee */}
          <div style={{
            flex: 1, padding: "48px 32px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <StatCounter value={100} suffix="%" label="Clear Title Guarantee" visible={statVisible} delay={240} />
          </div>

          {/* Col 5 — signature statement */}
          <div style={{
            flex: "0 0 260px", padding: "48px 40px",
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

// ─────────────────────────────────────────────────────────────────────────────
// Buying Process — Step icons
// ─────────────────────────────────────────────────────────────────────────────
function IcoCalendarStep() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  );
}
function IcoExploreStep() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  );
}
function IcoPlotStep() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function IcoRegStep() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Buying Process — Step item
// ─────────────────────────────────────────────────────────────────────────────
function ProcessStep({
  num, icon, title, desc, visible, delay, last = false,
}: { num: string; icon: React.ReactNode; title: string; desc: string; visible: boolean; delay: number; last?: boolean }) {
  const { isMobile } = useVP();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1, display: "flex", flexDirection: isMobile ? "row" : "column",
        alignItems: isMobile ? "flex-start" : "center",
        textAlign: isMobile ? "left" : "center", position: "relative",
        gap: isMobile ? "16px" : "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Step number */}
      {!isMobile && (
        <span style={{
          fontFamily: T.serif, fontWeight: 800, fontSize: "52px", lineHeight: 1,
          color: `rgba(201,168,76,${hov ? 0.22 : 0.12})`,
          position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
          transition: "color 0.3s", userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}>{num}</span>
      )}

      {/* Icon bubble */}
      <div style={{
        width: "64px", height: "64px", borderRadius: "50%",
        border: `1.5px solid rgba(201,168,76,${hov ? 0.70 : 0.40})`,
        background: hov ? "rgba(201,168,76,0.12)" : T.goldFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: isMobile ? "0" : "18px", marginTop: isMobile ? "0" : "20px", flexShrink: 0,
        transition: "all 0.28s ease",
        transform: hov ? "scale(1.08)" : "scale(1)",
        boxShadow: hov ? "0 6px 24px rgba(201,168,76,0.22)" : "none",
        position: "relative", zIndex: 1,
      }}>
        {icon}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: isMobile ? "left" : "center" }}>
        <p style={{ fontFamily: T.sans, fontWeight: 800, fontSize: "10px", letterSpacing: "0.20em", textTransform: "uppercase", color: T.gold, margin: 0 }}>Step {num}</p>
        <p style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "16px", color: T.navy, margin: 0, marginBottom: "4px", lineHeight: 1.3 }}>{title}</p>
        <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#6B7280", margin: 0, lineHeight: 1.65 }}>{desc}</p>
      </div>

      {/* Connector dot at right edge — hidden on last and on mobile */}
      {!last && !isMobile && (
        <div style={{
          position: "absolute", right: "-4px", top: "50px", width: "8px", height: "8px",
          borderRadius: "50%", background: T.gold, opacity: 0.5, zIndex: 2,
        }} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Buying Process — Section
// ─────────────────────────────────────────────────────────────────────────────
function BuyingProcessSection() {
  const { isMobile, isTablet } = useVP();
  const [ref, visible] = useInView(0.18);
  return (
    <section style={{ background: T.ivory, width: "100%", overflow: "hidden" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "72px 20px 80px" : isTablet ? "80px 40px 88px" : "96px 80px 100px" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start", gap: isMobile ? "40px" : "80px" }}>

          {/* LEFT — heading */}
          <div
            style={{
              flex: "0 0 280px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
              <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>How It Works</span>
            </div>
            <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "42px", lineHeight: 1.1, color: T.navy, margin: 0 }}>
              Simple Steps to<br/>Own Your Plot
            </h2>
            <div style={{ width: "40px", height: "2px", background: T.gold, borderRadius: "9999px", marginTop: "24px", opacity: 0.6 }} />
          </div>

          {/* RIGHT — steps */}
          <div ref={ref} style={{ flex: 1, position: "relative" }}>
            {/* Gold connecting line — hidden on mobile */}
            {!isMobile && (
              <div style={{
                position: "absolute", top: "52px", left: "12%", right: "12%", height: "1.5px",
                background: `linear-gradient(to right, transparent, ${T.gold} 10%, ${T.gold} 90%, transparent)`,
                opacity: 0.30, zIndex: 0,
              }} />
            )}

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "28px" : "0", position: "relative", zIndex: 1 }}>
              <ProcessStep visible={visible} delay={0}   num="01" icon={<IcoCalendarStep />} title="Schedule Site Visit"  desc="Book a visit at your convenience." />
              <ProcessStep visible={visible} delay={120} num="02" icon={<IcoExploreStep />} title="Explore the Layout"    desc="Walk through the project with our sales team." />
              <ProcessStep visible={visible} delay={240} num="03" icon={<IcoPlotStep />}    title="Choose Your Plot"      desc="Select the perfect plot for your family." />
              <ProcessStep visible={visible} delay={360} num="04" icon={<IcoRegStep />}     title="Registration"          desc="Complete documentation with complete transparency." last />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — Data (edit answers here)
// ─────────────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "Is every project DTCP approved?",
    a: "Yes. All KDM Plots layouts carry valid DTCP approval, ensuring your investment is legally secure and fully compliant with Tamil Nadu planning norms.",
  },
  {
    q: "Is RERA registration available?",
    a: "Absolutely. Our projects are RERA registered, giving you complete transparency in pricing, timelines and documentation.",
  },
  {
    q: "Are bank loans available?",
    a: "Yes. KDM Plots is approved by leading nationalised and private banks. Our team will guide you through the loan application process at no extra charge.",
  },
  {
    q: "What payment options are available?",
    a: "We offer flexible payment plans including full payment, installment-based payment and bank loan options — tailored to suit your financial situation.",
  },
  {
    q: "Is there EMI support?",
    a: "Yes. We have tie-ups with banks that offer convenient EMI plans. Our sales team will help you identify the most suitable EMI structure for your budget.",
  },
  {
    q: "Can I schedule a weekend site visit?",
    a: "Certainly. We conduct site visits seven days a week including weekends and public holidays. Call us or book online at your preferred time.",
  },
  {
    q: "What documents are required?",
    a: "You will need a valid photo ID (Aadhaar / PAN), address proof and recent passport-size photographs. Our team will assist with every step of the documentation.",
  },
  {
    q: "How long does registration take?",
    a: "Registration is typically completed within 7–14 working days after all documents are verified. We handle the entire process to ensure a smooth and hassle-free experience.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — Accordion item
// ─────────────────────────────────────────────────────────────────────────────
function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderBottom: "1px solid rgba(15,31,53,0.08)",
        background: open ? "rgba(201,168,76,0.04)" : hov ? "rgba(201,168,76,0.02)" : "transparent",
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
          color: open ? T.navy : hov ? T.navy : "#374151",
          lineHeight: 1.4, transition: "color 0.2s",
        }}>{q}</span>

        {/* Gold plus / minus icon */}
        <div style={{
          width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0,
          border: `1.5px solid rgba(201,168,76,${open ? 0.7 : hov ? 0.55 : 0.35})`,
          background: open ? T.gold : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.25s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          boxShadow: open ? "0 4px 14px rgba(201,168,76,0.28)" : "none",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={open ? T.white : T.gold} strokeWidth="1.8" strokeLinecap="round">
            <line x1="5" y1="1" x2="5" y2="9"/><line x1="1" y1="5" x2="9" y2="5"/>
          </svg>
        </div>
      </button>

      {/* Answer — height animated via maxHeight */}
      <div style={{
        maxHeight: open ? "200px" : "0",
        overflow: "hidden",
        transition: "max-height 0.38s cubic-bezier(0.25,1,0.5,1)",
      }}>
        <p style={{
          fontFamily: T.sans, fontWeight: 400, fontSize: "13px",
          lineHeight: 1.75, color: "#6B7280",
          margin: 0, padding: "0 20px 18px",
        }}>{a}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — Section
// ─────────────────────────────────────────────────────────────────────────────
function FaqSection() {
  const { isMobile, isTablet } = useVP();
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const [ref, visible] = useInView(0.12);

  const col1 = FAQ_ITEMS.slice(0, Math.ceil(FAQ_ITEMS.length / 2));
  const col2 = FAQ_ITEMS.slice(Math.ceil(FAQ_ITEMS.length / 2));

  return (
    <section style={{ background: "#F0EDE7", width: "100%", overflow: "hidden" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "72px 20px 80px" : isTablet ? "80px 40px 88px" : "96px 80px 100px",
          display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "40px" : "80px", alignItems: "flex-start",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* LEFT — heading */}
        <div style={{ flex: isMobile ? "none" : "0 0 280px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>Still Have Questions?</span>
          </div>
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : "42px", lineHeight: 1.1, margin: 0 }}>
            <span style={{ color: T.navy }}>We're Here</span><br/>
            <span style={{ color: T.gold, fontStyle: "italic" }}>to Help</span>
          </h2>
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "13.5px", lineHeight: 1.8, color: "#6B7280", margin: "20px 0 0", maxWidth: "220px" }}>
            Can't find your answer? Call us directly and our team will be happy to assist.
          </p>
          <a
            href="tel:+918220563394"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              marginTop: "28px", padding: "11px 22px",
              border: `1.5px solid ${T.gold}`, borderRadius: "6px",
              background: "transparent", cursor: "pointer",
              fontFamily: T.sans, fontWeight: 700, fontSize: "12px",
              letterSpacing: "0.08em", color: T.navy,
              textDecoration: "none", transition: "all 0.22s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = T.gold; (e.currentTarget as HTMLAnchorElement).style.color = T.white; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = T.navy; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Us Anytime
          </a>
        </div>

        {/* RIGHT — two-column accordion */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "0" : "0 32px" }}>
          <div>
            {col1.map((item, i) => (
              <FaqItem
                key={i} q={item.q} a={item.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
          <div>
            {col2.map((item, i) => {
              const idx = i + col1.length;
              return (
                <FaqItem
                  key={idx} q={item.q} a={item.a}
                  open={openIdx === idx}
                  onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA — Section
// ─────────────────────────────────────────────────────────────────────────────
function CtaSection() {
  const { isMobile, isTablet } = useVP();
  const [ref, visible] = useInView(0.14);
  const [hovBook, setHovBook] = React.useState(false);
  const [hovCall, setHovCall] = React.useState(false);

  return (
    <section style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "480px" }}>
      {/* Background photo */}
      <img
        src={ctaBg}
        alt="KDM Plots entrance"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 30%",
        }}
      />

      {/* Ivory gradient — left to right for readability */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, rgba(248,245,239,0.97) 0%, rgba(248,245,239,0.85) 32%, rgba(248,245,239,0.40) 58%, rgba(248,245,239,0.05) 80%, transparent 100%)`,
      }} />

      {/* Dark right scrim for photo drama */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to left, rgba(8,14,28,0.30) 0%, transparent 55%)",
      }} />

      {/* Content */}
      <div
        ref={ref}
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "1440px", margin: "0 auto",
          padding: isMobile ? "72px 20px" : isTablet ? "80px 40px" : "96px 80px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Glassmorphism card */}
        <div style={{
          display: "inline-flex", flexDirection: "column", gap: "28px",
          maxWidth: isMobile ? "100%" : "520px",
          width: isMobile ? "100%" : undefined,
          background: "rgba(248,245,239,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(201,168,76,0.18)",
          boxShadow: "0 24px 64px rgba(8,14,28,0.12), 0 4px 16px rgba(8,14,28,0.06)",
          padding: "48px 44px",
        }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px" }} />
            <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: T.gold }}>
              Ready to Build Your Legacy?
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "34px" : "48px", lineHeight: 1.06, margin: 0, color: T.navy, letterSpacing: "-0.01em" }}>
            Your Dream Property<br/>
            <span style={{ color: T.gold, fontStyle: "italic" }}>Starts Here.</span>
          </h2>

          {/* Sub-text */}
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "14px", lineHeight: 1.78, color: "#4B5563", margin: 0 }}>
            Book a site visit today and experience KDM's premium communities firsthand. Our team is ready to guide you every step of the way.
          </p>

          {/* Buttons + phone */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            {/* Primary */}
            <button
              onMouseEnter={() => setHovBook(true)}
              onMouseLeave={() => setHovBook(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "14px 28px",
                background: hovBook ? "#b8943c" : T.gold,
                border: "none", borderRadius: "6px",
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
                color: T.white, cursor: "pointer",
                transition: "all 0.22s ease",
                boxShadow: hovBook ? "0 8px 28px rgba(201,168,76,0.45)" : "0 4px 16px rgba(201,168,76,0.28)",
                transform: hovBook ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a Site Visit
            </button>

            {/* Secondary */}
            <a
              href="tel:+918220563394"
              onMouseEnter={() => setHovCall(true)}
              onMouseLeave={() => setHovCall(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "13px 24px",
                border: `1.5px solid ${T.navy}`,
                borderRadius: "6px",
                fontFamily: T.sans, fontWeight: 700,
                fontSize: "12px", letterSpacing: "0.10em", textTransform: "uppercase",
                color: hovCall ? T.white : T.navy,
                textDecoration: "none", cursor: "pointer",
                transition: "all 0.22s ease",
                background: hovCall ? T.navy : "transparent",
                transform: hovCall ? "translateY(-2px)" : "translateY(0)",
              } as React.CSSProperties}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>

          {/* Phone display */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "50%",
              border: `1px solid rgba(201,168,76,0.35)`, background: T.goldFaint,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "15px", color: T.navy, margin: 0 }}>+91 82205 63394</p>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "11px", color: "#6B7280", margin: 0 }}>Call Us Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Link item
// ─────────────────────────────────────────────────────────────────────────────
function FooterLink({ label, href = "#" }: { label: string; href?: string }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: "7px",
        fontFamily: T.sans, fontWeight: 400, fontSize: "13px",
        color: hov ? T.gold : "#6B7280",
        textDecoration: "none",
        transition: "color 0.2s",
        paddingBottom: "10px",
      }}
    >
      <span style={{
        display: "inline-block", width: "14px", height: "1px",
        background: hov ? T.gold : "rgba(201,168,76,0.35)",
        borderRadius: "9999px", transition: "all 0.2s", flexShrink: 0,
        transform: hov ? "scaleX(1.5)" : "scaleX(1)",
        transformOrigin: "left",
      }} />
      {label}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Social icon button
// ─────────────────────────────────────────────────────────────────────────────
function SocialBtn({ icon, label, href = "#" }: { icon: React.ReactNode; label: string; href?: string }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "38px", height: "38px", borderRadius: "50%",
        border: `1.5px solid ${hov ? T.gold : "rgba(201,168,76,0.30)"}`,
        background: hov ? T.goldFaint : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        textDecoration: "none",
        transition: "all 0.22s ease",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {icon}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Main
// ─────────────────────────────────────────────────────────────────────────────
function SiteFooter() {
  const { isMobile, isTablet } = useVP();
  return (
    <footer style={{ background: T.ivory, borderTop: "1px solid rgba(201,168,76,0.12)", width: "100%" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "56px 20px 0" : isTablet ? "64px 40px 0" : "72px 80px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "1.4fr 1fr 1.2fr 1.4fr", gap: isMobile ? "40px 24px" : "48px" }}>

          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* KDM Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "8px",
                background: T.navy,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4 L28 12 L28 26 L4 26 L4 12 Z" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M12 26 L12 18 L20 18 L20 26" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="13" r="2.5" stroke={T.gold} strokeWidth="1.4"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: T.serif, fontWeight: 800, fontSize: "18px", color: T.navy, margin: 0, letterSpacing: "0.06em" }}>KDM</p>
                <p style={{ fontFamily: T.sans, fontWeight: 500, fontSize: "9px", color: T.gold, margin: 0, letterSpacing: "0.24em", textTransform: "uppercase" }}>PLOTS</p>
              </div>
            </div>

            <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "13px", lineHeight: 1.78, color: "#6B7280", margin: 0, maxWidth: "220px" }}>
              Building premium communities with trust, transparency and a commitment to generations to come.
            </p>

            {/* Gold divider */}
            <div style={{ width: "32px", height: "1.5px", background: T.gold, borderRadius: "9999px", opacity: 0.6 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#6B7280", margin: 0 }}>📍 No.29, Karpaga Vinayagar Complex, K.Pudur, Madurai – 625007</p>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "22px" }}>Quick Links</p>
            <FooterLink label="Home" />
            <FooterLink label="About KDM" />
            <FooterLink label="Our Projects" />
            <FooterLink label="Amenities" />
            <FooterLink label="Investment Advantages" />
            <FooterLink label="Contact Us" />
          </div>

          {/* Col 3 — Ongoing Projects */}
          <div>
            <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "22px" }}>Ongoing Projects</p>
            <FooterLink label="Akil Garden" />
            <FooterLink label="Raja Rajeshwari Nagar" />
            <FooterLink label="Lucky City" />
            <FooterLink label="Ayyapatti Highway City" />
            <FooterLink label="Green View City" />
            <FooterLink label="Thanga Boomi" />
            <FooterLink label="Golden Park" />
            <FooterLink label="Royal Garden" />
            <FooterLink label="RK Nagar" />
          </div>

          {/* Col 4 — Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "22px" }}>Contact Us</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="tel:+918220563394" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid rgba(201,168,76,0.35)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "13px", color: T.navy }}>+91 82205 63394</span>
              </a>

              <a href="mailto:info@kdmplots.com" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid rgba(201,168,76,0.35)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "13px", color: T.navy }}>info@kdmplots.com</span>
              </a>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid rgba(201,168,76,0.35)`, background: T.goldFaint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/><circle cx="12" cy="8.5" r="2"/></svg>
                </div>
                <span style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#6B7280", lineHeight: 1.65 }}>
                  No.29, Karpaga Vinayagar Complex,<br/>K.Pudur, Madurai – 625007
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div style={{ marginTop: "28px" }}>
              <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "14px" }}>Follow Us</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <SocialBtn label="Instagram" icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                } />
                <SocialBtn label="Facebook" icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                } />
                <SocialBtn label="YouTube" icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                } />
                <SocialBtn label="WhatsApp" icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                } />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(201,168,76,0.10)",
        marginTop: "56px",
      }}>
        <div style={{
          maxWidth: "1440px", margin: "0 auto",
          padding: isMobile ? "20px" : "20px 80px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "6px" : "0",
          textAlign: isMobile ? "center" : undefined,
        }}>
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#9CA3AF", margin: 0 }}>
            © 2026 KDM Plots. All Rights Reserved.
          </p>
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#9CA3AF", margin: 0 }}>
            Crafted with care for the families of Madurai.
          </p>
        </div>
      </div>
    </footer>
  );
}

// App Root
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [vpW, setVpW] = React.useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  React.useEffect(() => {
    let rafId: number;
    function onResize() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setVpW(window.innerWidth));
    }
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const isMobile = vpW < 768;
  const vpCtxValue = React.useMemo(() => ({ w: vpW }), [vpW]);

  return (
    <ViewportCtx.Provider value={vpCtxValue}>
    <GlobalStyles />
    {/* Outer page canvas — ivory */}
    <div
      role="main"
      style={{
        width: "100%", minHeight: "100vh",
        background: T.ivory,
        padding: isMobile ? "0" : "14px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        fontFamily: T.sans,
      }}
    >
      {/* ── Hero frame ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: isMobile ? "680px" : "920px",
          borderRadius: isMobile ? "0" : "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* ── 1. Background photograph ── */}
        <img
          src={heroBg}
          alt="KDM gated community at golden-hour sunset"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "65% center",
          }}
        />

        {/* ── 2. Warm ivory tint — unifies sky with cream palette ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "rgba(248,240,210,0.10)",
            pointerEvents: "none",
          }}
        />

        {/* ── 3. Dark left scrim — text legibility ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(105deg, rgba(8,14,28,0.86) 0%, rgba(8,14,28,0.70) 30%, rgba(8,14,28,0.28) 56%, transparent 78%)",
            pointerEvents: "none",
          }}
        />

        {/* ── 4. Bottom scrim — card readability ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(8,14,28,0.62) 0%, rgba(8,14,28,0.18) 26%, transparent 44%)",
            pointerEvents: "none",
          }}
        />

        {/* ── 5. Content stack ── */}
        <div
          style={{
            position: "relative", zIndex: 10,
            display: "flex", flexDirection: "column",
            height: "100%", minHeight: isMobile ? "680px" : "920px",
          }}
        >
          {/* Navbar */}
          <Navbar />

          {/* Hero text */}
          <HeroContent />

          {/* Bottom bar: feature card + phone card */}
          <div
            style={{
              display: "flex", alignItems: "stretch", gap: "14px",
              padding: isMobile ? "0 20px" : "0 52px",
              marginTop: "auto",
              flexWrap: "wrap",
            }}
          >
            {!isMobile && <FeatureCard />}
            <PhoneCard />
          </div>

          {/* Scroll indicator */}
          <ScrollIndicator />
        </div>
      </div>

      {/* ── About Section ── */}
      <div id="about"><AboutSection /></div>

      {/* ── Why Choose KDM Section ── */}
      <div id="why-kdm"><WhyChooseSection /></div>

      {/* ── Featured Projects Section ── */}
      <div id="projects"><FeaturedProjectsSection /></div>

      {/* ── Infrastructure Section ── */}
      <div id="amenities"><InfrastructureSection /></div>

      {/* ── Investment Advantages Section ── */}
      <InvestmentSection />

      {/* ── Client Testimonials Section ── */}
      <TestimonialsSection />
      <BuyingProcessSection />
      <div id="faq"><FaqSection /></div>
      <div id="contact"><CtaSection /></div>
      <SiteFooter />
    </div>
    </ViewportCtx.Provider>
  );
}
