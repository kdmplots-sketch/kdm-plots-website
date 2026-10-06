import React from "react";
import { T, ViewportCtx } from "@/lib/theme";
import heroImage from "@/imports/KDM_Plots_Hero_Side-1.png";
import { GlobalStyles } from "@/components/GlobalStyles";
import { Navbar } from "@/components/Navbar";
import { FloatingContact } from "@/components/FloatingContact";
import { HeroContent } from "@/components/HeroContent";
import { PhoneCard } from "@/components/PhoneCard";
import { FeatureCard } from "@/components/FeatureCard";
import { AboutSection } from "@/sections/AboutSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { FeaturedProjectsSection } from "@/sections/FeaturedProjectsSection";
import { InfrastructureSection } from "@/sections/InfrastructureSection";
import { InvestmentSection } from "@/sections/InvestmentSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { BuyingProcessSection } from "@/sections/BuyingProcessSection";
import { FaqSection } from "@/sections/FaqSection";
import { CtaSection } from "@/sections/CtaSection";
import { SiteFooter } from "@/sections/SiteFooter";

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
    {/* Navbar — fixed to the viewport, stays visible through the whole page scroll */}
    <Navbar />
    {/* Floating WhatsApp + Call buttons — fixed to the viewport */}
    <FloatingContact />
    {/* Outer page canvas — ivory */}
    <div
      role="main"
      style={{
        width: "100%", minHeight: "100vh",
        background: T.ivory,
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
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* ── 1. Background surface ── */}
        <div
          style={{
            position: "absolute", inset: "-6%",
            animation: "kdmHeroDrift 22s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          <img
            src={heroImage}
            alt="KDM Plots gated community entrance road at sunset, lined with palm trees"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: isMobile ? "35% center" : "center",
              display: "block",
            }}
          />
        </div>

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

          {/* Hero text */}
          <HeroContent />

          {/* Bottom bar: feature card + phone card */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "stretch", gap: "14px",
              padding: isMobile ? "0 20px 28px" : "0 52px 64px",
              marginTop: "auto",
              flexWrap: "wrap",
              opacity: 0,
              animation: "kdmFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.72s forwards",
            }}
          >
            <PhoneCard />
            {isMobile && <FeatureCard />}
          </div>
        </div>
      </div>

      {/* ── Feature strip — floats over hero/about boundary ── */}
      {!isMobile && (
        <div
          style={{
            position: "relative",
            zIndex: 11,
            padding: "0 52px",
            marginTop: "-28px",
            opacity: 0,
            animation: "kdmFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.78s forwards",
          }}
        >
          <FeatureCard />
        </div>
      )}

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
