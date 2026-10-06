// ─────────────────────────────────────────────────────────────────────────────
// Shared TS types/interfaces used across multiple sections/components
// ─────────────────────────────────────────────────────────────────────────────

// Featured Projects
export type ProjectStatus = "Ongoing" | "Upcoming" | "Completed";

export interface Project {
  id: number;
  status: ProjectStatus;
  title: string;
  location: string;
  dtcp: boolean;
  rera: boolean;
  prime: boolean;
  infra: boolean;
}

export const CATEGORIES = ["All Projects", "Ongoing", "Upcoming", "Completed"] as const;
export type Category = typeof CATEGORIES[number];

// Infrastructure / Amenities
export interface Amenity { id: number; title: string; }

// Testimonials
export interface Testimonial {
  id: number;
  // ── EDITABLE: customer's review text ──
  review: string;
  // ── EDITABLE: customer full name ──
  name: string;
  // ── EDITABLE: city / location shown below name ──
  city: string;
  // ── EDITABLE: 2-letter initials shown when no photo is set ──
  initials: string;
  // ── EDITABLE: fallback circle color when no photo — any CSS color ──
  avatarBg: string;
  // ── EDITABLE: import a real photo and set it here ──
  // HOW TO ADD A PHOTO:
  //   1. Drop the customer photo into src/imports/
  //   2. Add at the top of the file:  import personPhoto from "@/imports/photo.jpg";
  //   3. Set  photo: personPhoto  on this testimonial object
  //   If no photo is provided the initials circle is shown automatically.
  photo?: string;
}
