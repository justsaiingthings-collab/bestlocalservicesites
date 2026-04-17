export type Vertical =
  | "roofing"
  | "hvac"
  | "plumbing"
  | "landscaping"
  | "cleaning"
  | "painting";

export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc?: string;
  icon: string; // emoji or icon name
  problems?: string[]; // "Roof leaking?", "AC not cooling?"
  faqs?: { q: string; a: string }[];
}

export interface Location {
  city: string;
  slug: string; // seattle, bellevue
  county?: string;
}

export interface Testimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
  service?: string;
}

export interface Certification {
  name: string;
  abbr?: string;
}

export interface SiteConfig {
  // Identity
  businessName: string;
  vertical: Vertical;
  tagline: string;
  phone: string;
  smsNumber?: string;
  email?: string;
  yearFounded?: number;

  // Flags
  isEmergencyService: boolean;
  available247?: boolean;

  // Locations
  locations: Location[];
  primaryLocation: string; // display name: "Seattle, WA"
  serviceRadius?: string; // "Serving the Greater Seattle area"

  // Hero
  heroHeadline: string;         // "Roof Leaking? We Fix It Today."
  heroSubheadline: string;
  emergencyHeadline?: string;   // "24/7 Emergency Roof Repair in Seattle"
  heroImageAlt?: string;
  heroVideo?: string;           // MP4 URL for video background
  heroPoster?: string;          // Fallback image URL while video loads
  technicianImage?: string;     // URL for a professional technician/mascot photo


  // Services
  services: ServiceItem[];

  // Trust signals
  rating: number;
  reviewCount: number;
  testimonials: Testimonial[];
  certifications: Certification[];
  yearsInBusiness?: number;
  jobsCompleted?: number;

  // Why Us bullets
  whyUs: string[];

  // Design
  primaryColor: string;   // Tailwind CSS color class e.g. "blue-600"
  accentColor: string;    // e.g. "orange-500"
  darkColor: string;      // e.g. "slate-900"

  // About page
  aboutHeadline?: string;
  aboutBody?: string;

  // Meta
  siteUrl?: string;
}
