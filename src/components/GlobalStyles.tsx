// ─────────────────────────────────────────────────────────────────────────────
// Global Style Injector — focus-visible, reduced-motion, smooth scroll
// ─────────────────────────────────────────────────────────────────────────────
export function GlobalStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
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
