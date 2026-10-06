import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Infrastructure Section — SVG Icons
// ─────────────────────────────────────────────────────────────────────────────
export function IcoRoads() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 6v16M10 10H6M10 14H6M10 18H6M18 10h4M18 14h4M18 18h4" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
export function IcoStreetLight() {
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
export function IcoDrainage() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M7 14 Q10 10 14 14 Q18 18 21 14" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <path d="M7 18 Q10 14 14 18 Q18 22 21 18" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <path d="M7 10 Q10 6 14 10 Q18 14 21 10" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
export function IcoPlantation() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 22v-9" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M14 13 Q10 11 9 7 Q13 7 14 11" stroke={T.gold} strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
      <path d="M14 15 Q18 13 19 9 Q15 9 14 13" stroke={T.gold} strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
export function IcoSecurityShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 6 L20 9v5c0 3.5-2.8 6.5-6 7.5C7.8 20.5 5 17.5 5 14V9z" stroke={T.gold} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      <polyline points="11 14 13 16 17 11" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function IcoElectricity() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <polygon points="15,6 8,15 14,15 13,22 20,13 14,13" stroke={T.gold} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
export function IcoWater() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <path d="M14 7 Q14 7 9 14 a5 5 0 0 0 10 0 Q14 7 14 7z" stroke={T.gold} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
export function IcoDTCP() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" stroke={T.gold} strokeWidth="1.4"/>
      <circle cx="14" cy="14" r="6" stroke={T.gold} strokeWidth="1.3"/>
      <polyline points="11 14 13 16 17 11" stroke={T.gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
