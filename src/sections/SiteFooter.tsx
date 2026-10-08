import React from "react";
import { T, useVP } from "@/lib/theme";
import { FooterLink, SocialBtn } from "@/components/FooterLink";

// ─────────────────────────────────────────────────────────────────────────────
// Footer — small shared pieces
// ─────────────────────────────────────────────────────────────────────────────
function FooterDivider() {
  return <div style={{ height: "1px", background: "rgba(193,153,46,0.14)" }} />;
}

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: T.navy, margin: 0, marginBottom: "20px" }}>
      {children}
    </p>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: "34px", height: "34px", borderRadius: "50%",
      border: `1px solid rgba(193,153,46,0.35)`, background: T.goldFaint,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

const IcoPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
);
const IcoMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const IcoPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.686 2 6 5 6 8.5c0 5 6 12 6 12s6-7 6-12C18 5 15.314 2 12 2z"/><circle cx="12" cy="8.5" r="2"/></svg>
);

function BrandBlock() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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

      <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "13px", lineHeight: 1.78, color: "#5B6B82", margin: 0, maxWidth: "260px" }}>
        Building premium communities with trust, transparency and a commitment to generations to come.
      </p>

      <div style={{ width: "32px", height: "1.5px", background: T.gold, borderRadius: "9999px", opacity: 0.6 }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <IconCircle><IcoPin /></IconCircle>
        <span style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", lineHeight: 1.65, paddingTop: "6px" }}>
          No.29, Karpaga Vinayagar Complex,<br/>K.Pudur, Madurai – 625007
        </span>
      </div>
    </div>
  );
}

function QuickLinksBlock() {
  return (
    <div>
      <FooterLabel>Quick Links</FooterLabel>
      <FooterLink label="Home" href="#" />
      <FooterLink label="About KDM" href="#about" />
      <FooterLink label="Our Projects" href="#projects" />
      <FooterLink label="Amenities" href="#amenities" />
      <FooterLink label="Investment Advantages" href="#investment" />
      <FooterLink label="Contact Us" href="#contact" />
    </div>
  );
}

function ProjectsBlock() {
  return (
    <div>
      <FooterLabel>Ongoing Projects</FooterLabel>
      <FooterLink label="Raja Rajeshwari Nagar" href="#projects" />
      <FooterLink label="Lucky City" href="#projects" />
      <FooterLink label="Ayyapatti Highway City" href="#projects" />
      <FooterLink label="Green View City" href="#projects" />
      <FooterLink label="Golden Park" href="#projects" />
      <FooterLink label="Royal Garden" href="#projects" />
      <FooterLink label="RK Nagar" href="#projects" />
    </div>
  );
}

function SocialRow() {
  return (
    <div>
      <FooterLabel>Follow Us</FooterLabel>
      <div style={{ display: "flex", gap: "10px" }}>
        <SocialBtn label="Instagram" href="https://instagram.com/kdm_plotes" icon={
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
  );
}

function ContactBlock({ card = false }: { card?: boolean }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "20px",
      ...(card ? {
        background: T.white, borderRadius: "16px",
        border: "1px solid rgba(193,153,46,0.14)",
        boxShadow: "0 4px 24px rgba(8,14,28,0.05)",
        padding: "22px 20px",
      } : {}),
    }}>
      <FooterLabel>Contact Us</FooterLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <a href="tel:+918220563394" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <IconCircle><IcoPhone /></IconCircle>
          <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "13px", color: T.navy }}>+91 82205 63394</span>
        </a>
        <a href="mailto:kdmplots@gmail.com" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <IconCircle><IcoMail /></IconCircle>
          <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "13px", color: T.navy }}>kdmplots@gmail.com</span>
        </a>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <IconCircle><IcoPin /></IconCircle>
          <span style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12.5px", color: "#5B6B82", lineHeight: 1.65, paddingTop: "6px" }}>
            No.29, Karpaga Vinayagar Complex,<br/>K.Pudur, Madurai – 625007
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Main
// ─────────────────────────────────────────────────────────────────────────────
export function SiteFooter() {
  const { isMobile, isTablet } = useVP();

  return (
    <footer style={{ background: T.ivory, borderTop: "1px solid rgba(193,153,46,0.12)", width: "100%" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: isMobile ? "56px 20px 0" : isTablet ? "64px 40px 0" : "72px 80px 0" }}>

        {isMobile ? (
          // ── Mobile layout: brand, then a 2-up link grid (so 13 links don't
          // turn into one long single-column scroll), then an elevated
          // contact card, then social — each section separated by a hairline.
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <BrandBlock />
            <FooterDivider />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <QuickLinksBlock />
              <ProjectsBlock />
            </div>
            <FooterDivider />
            <ContactBlock card />
            <SocialRow />
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr 1fr" : "1.4fr 1fr 1.2fr 1.4fr",
            gap: isTablet ? "40px" : "48px",
          }}>
            <BrandBlock />
            <QuickLinksBlock />
            <ProjectsBlock />
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <ContactBlock />
              <SocialRow />
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(193,153,46,0.10)",
        marginTop: isMobile ? "40px" : "56px",
      }}>
        <div style={{
          maxWidth: "1440px", margin: "0 auto",
          padding: isMobile ? "20px" : "20px 80px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "6px" : "0",
          textAlign: isMobile ? "center" : undefined,
        }}>
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#94A1B5", margin: 0 }}>
            © 2026 KDM Plots. All Rights Reserved.
          </p>
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "12px", color: "#94A1B5", margin: 0 }}>
            Crafted with care for the families of Madurai.
          </p>
        </div>
      </div>
    </footer>
  );
}
