// ─────────────────────────────────────────────────────────────────────────────
// Global Style Injector — focus-visible, reduced-motion, smooth scroll
// ─────────────────────────────────────────────────────────────────────────────
export function GlobalStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      html, body { overflow-x: hidden; }
      *:focus-visible {
        outline: 2px solid #C9A84C;
        outline-offset: 3px;
        border-radius: 4px;
      }
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      @keyframes kdmPulseRing {
        0%   { transform: scale(1);    opacity: 0.55; }
        70%  { transform: scale(1.55); opacity: 0; }
        100% { transform: scale(1.55); opacity: 0; }
      }
      @keyframes kdmFadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes kdmHeroDrift {
        0%   { transform: scale(1.06) translate3d(0, 0, 0); }
        50%  { transform: scale(1.11) translate3d(-0.8%, -0.6%, 0); }
        100% { transform: scale(1.06) translate3d(0, 0, 0); }
      }
      @keyframes kdmFloatSlow {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-9px); }
      }
      @keyframes kdmGalleryIn {
        from { opacity: 0; transform: scale(0.96) translateY(10px); }
        to   { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes kdmImageFade {
        from { opacity: 0; }
        to   { opacity: 1; }
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
