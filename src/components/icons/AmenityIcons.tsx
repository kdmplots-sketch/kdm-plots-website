import { T } from "@/lib/theme";

// ─────────────────────────────────────────────────────────────────────────────
// Amenities Carousel — one distinct icon per amenity title
// ─────────────────────────────────────────────────────────────────────────────
const common = {
  width: 22, height: 22, viewBox: "0 0 24 24",
  fill: "none" as const, stroke: T.gold, strokeWidth: 1.6,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

export function IcoGrandEntrance() {
  return (
    <svg {...common}>
      <path d="M4 10 L12 4 L20 10" />
      <line x1="4" y1="10" x2="4" y2="21" />
      <line x1="20" y1="10" x2="20" y2="21" />
      <line x1="4" y1="21" x2="20" y2="21" />
      <line x1="12" y1="8" x2="12" y2="21" />
    </svg>
  );
}
export function IcoWideRoads() {
  return (
    <svg {...common}>
      <line x1="5" y1="3" x2="5" y2="21" />
      <line x1="19" y1="3" x2="19" y2="21" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="12" y1="11" x2="12" y2="15" />
      <line x1="12" y1="19" x2="12" y2="21" />
    </svg>
  );
}
export function IcoLandscapedAvenue() {
  return (
    <svg {...common}>
      <path d="M12 21v-8" />
      <path d="M12 13 Q6 11 6 6 Q11 6 12 11" />
      <path d="M12 15 Q18 13 18 8 Q13 8 12 13" />
    </svg>
  );
}
export function IcoChildrensPark() {
  return (
    <svg {...common}>
      <line x1="4" y1="4" x2="20" y2="4" />
      <line x1="7" y1="4" x2="7" y2="20" />
      <line x1="17" y1="4" x2="17" y2="20" />
      <line x1="12" y1="4" x2="12" y2="13" />
      <circle cx="12" cy="16.5" r="3.2" />
    </svg>
  );
}
export function IcoStreetLightsAmenity() {
  return (
    <svg {...common}>
      <line x1="12" y1="21" x2="12" y2="10" />
      <path d="M12 10 Q12 5 18 5" />
      <circle cx="18" cy="5" r="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}
export function IcoSecurityGate() {
  return (
    <svg {...common}>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  );
}
export function IcoRainwaterHarvesting() {
  return (
    <svg {...common}>
      <path d="M12 3c0 0-6 7.5-6 11.5a6 6 0 0012 0C18 10.5 12 3 12 3z" />
    </svg>
  );
}
export function IcoVisitorParking() {
  return (
    <svg {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M9.5 16V8h3.2a2.6 2.6 0 010 5.2H9.5" />
    </svg>
  );
}
export function IcoWalkingTrack() {
  return (
    <svg {...common}>
      <ellipse cx="12" cy="12" rx="8.5" ry="5.5" />
      <ellipse cx="12" cy="12" rx="4.5" ry="2.7" />
    </svg>
  );
}
export function IcoClubHouse() {
  return (
    <svg {...common}>
      <path d="M4 21V10l8-6 8 6v11" />
      <line x1="4" y1="21" x2="20" y2="21" />
      <rect x="10" y="14" width="4" height="7" />
    </svg>
  );
}
export function IcoOpenGym() {
  return (
    <svg {...common}>
      <line x1="6" y1="12" x2="18" y2="12" />
      <rect x="2.5" y="9" width="3" height="6" rx="1" />
      <rect x="18.5" y="9" width="3" height="6" rx="1" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="18" y1="10" x2="18" y2="14" />
    </svg>
  );
}
export function IcoJoggingTrack() {
  return (
    <svg {...common}>
      <ellipse cx="12" cy="12" rx="8.5" ry="5.5" />
      <path d="M16.5 8.3a5.8 3 0 010 7.4" />
      <polyline points="16.5 13.2 16.5 15.7 14.3 15.9" />
    </svg>
  );
}

// Generic fallback for any title not in the map below
export function IcoAmenityDefault() {
  return (
    <svg {...common}>
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.75 6 12 6 12s6-7.25 6-12c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2.2" />
    </svg>
  );
}

// Title → icon lookup used by AmenityCard
export const AMENITY_ICONS: Record<string, React.ComponentType> = {
  "Grand Entrance": IcoGrandEntrance,
  "Wide Roads": IcoWideRoads,
  "Landscaped Avenue": IcoLandscapedAvenue,
  "Children's Park": IcoChildrensPark,
  "Street Lights": IcoStreetLightsAmenity,
  "Security Gate": IcoSecurityGate,
  "Rainwater Harvesting": IcoRainwaterHarvesting,
  "Visitor Parking": IcoVisitorParking,
  "Walking Track": IcoWalkingTrack,
  "Club House": IcoClubHouse,
  "Open Gym": IcoOpenGym,
  "Jogging Track": IcoJoggingTrack,
};
