import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Scroll-reveal hook
// ─────────────────────────────────────────────────────────────────────────────
export function useInView(threshold = 0.18): [React.RefObject<HTMLDivElement>, boolean] {
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
