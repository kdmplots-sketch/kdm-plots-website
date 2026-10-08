import React from "react";
import { T, useVP } from "@/lib/theme";
import { useInView } from "@/lib/useInView";
import { FaqItem } from "@/components/FaqItem";

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
    a: "We offer flexible payment plans including full payment, installment-based payment and bank loan options, tailored to suit your financial situation.",
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
// FAQ — Section
// ─────────────────────────────────────────────────────────────────────────────
export function FaqSection() {
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
          transition: `opacity 0.7s ${T.easeSmooth}, transform 0.7s ${T.easeSmooth}`,
        }}
      >
        {/* LEFT — heading */}
        <div style={{ flex: isMobile ? "none" : "0 0 280px" }}>
          <div style={{ width: "24px", height: "1.5px", background: T.gold, borderRadius: "9999px", marginBottom: "20px" }} />
          <h2 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: isMobile ? "36px" : "42px", lineHeight: 1.1, margin: 0 }}>
            <span style={{ color: T.navy }}>We're Here</span><br/>
            <span style={{ color: T.gold, fontStyle: "italic" }}>to Help</span>
          </h2>
          <p style={{ fontFamily: T.sans, fontWeight: 400, fontSize: "13.5px", lineHeight: 1.8, color: "#5B6B82", margin: "20px 0 0", maxWidth: "220px" }}>
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
