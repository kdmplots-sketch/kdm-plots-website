import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons — Navbar / Hero / Feature strip
// ─────────────────────────────────────────────────────────────────────────────
export const Ico = {
  arrow: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  chevronDown: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  location: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.75 6 12 6 12s6-7.25 6-12c0-3.314-2.686-6-6-6z"/>
      <circle cx="12" cy="8" r="2.2"/>
    </svg>
  ),
  shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5.5v6.5c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V5.5L12 2z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  grid: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  trend: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7"/>
      <polyline points="15 7 21 7 21 13"/>
    </svg>
  ),
  phone: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.6 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.59a16 16 0 006 6l.95-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
};
