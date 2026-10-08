import kdmLogo from "@/imports/KDM_Logo_Transparant-50kb-removebg-preview.png";

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
