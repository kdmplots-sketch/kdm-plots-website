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
  // ── EDITABLE: project photo gallery (hosted on Cloudinary) ──
  // HOW TO ADD PHOTOS FOR A PROJECT:
  //   1. Upload the photos for this project to your Cloudinary account
  //      (cloudinary.com → Media Library → Upload).
  //   2. Open each uploaded image and copy its "Secure URL"
  //      (looks like https://res.cloudinary.com/<cloud-name>/image/upload/.../photo.jpg).
  //   3. Paste those URLs here, in the order you want them to appear:
  //        images: [
  //          "https://res.cloudinary.com/<cloud-name>/image/upload/.../photo1.jpg",
  //          "https://res.cloudinary.com/<cloud-name>/image/upload/.../photo2.jpg",
  //        ]
  //   If no images are set, a "Photos Coming Soon" placeholder is shown automatically.
  images?: string[];
}

// Tabs shown to visitors — keep this to the statuses you want as filter chips
export const CATEGORIES = ["Ongoing", "Completed"] as const;
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
