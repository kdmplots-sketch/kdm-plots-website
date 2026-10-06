import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Tilt Card — subtle cursor-tracking 3D tilt for a premium, tactile feel.
// No-ops gracefully on touch devices since no mousemove events fire there.
// ─────────────────────────────────────────────────────────────────────────────
export function TiltCard({
  children, maxTilt = 8, scale = 1.015, style, className,
}: {
  children: React.ReactNode;
  maxTilt?: number;
  scale?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"
  );
  const [settling, setSettling] = React.useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    setSettling(false);
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
  }

  function handleMouseLeave() {
    setSettling(true);
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: settling ? "transform 0.6s cubic-bezier(0.22,1,0.36,1)" : "transform 0.08s linear",
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
