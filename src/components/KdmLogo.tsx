import kdmLogo from "@/imports/KDM Logo Transparant.png";

// ─────────────────────────────────────────────────────────────────────────────
// KDM Logo
// ─────────────────────────────────────────────────────────────────────────────
export function KdmLogo() {
  return (
    <img
      src={kdmLogo}
      alt="KDM Plots"
      style={{
        height: "50px",
        width: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}
