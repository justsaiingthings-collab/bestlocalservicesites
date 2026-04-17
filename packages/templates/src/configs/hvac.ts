import type { SiteConfig } from "@bestlocal/ui";

export const hvacConfig: SiteConfig = {
  businessName: "Cascade Comfort HVAC",
  vertical: "hvac",
  tagline: "AC out? Furnace down? We fix it fast — 24/7 in Seattle, Bellevue & Redmond.",
  phone: "(206) 555-0193",
  email: "service@cascadecomfort.com",
  yearFounded: 2011,
  yearsInBusiness: 14,
  jobsCompleted: 6800,

  isEmergencyService: true,
  available247: true,

  locations: [
    { city: "Seattle", slug: "seattle", county: "King County" },
    { city: "Bellevue", slug: "bellevue", county: "King County" },
    { city: "Redmond", slug: "redmond", county: "King County" },
  ],
  primaryLocation: "Seattle, WA",
  serviceRadius: "Serving King County & Snohomish County",

  heroVideo: "https://videos.pexels.com/video-files/3843435/3843435-uhd_2560_1440_25fps.mp4",
  heroPoster: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80",
  technicianImage: "/technician.png",
  technicianImage: "/technician.png",


  heroHeadline: "AC Out? Furnace Down? We Fix It Today.",
  heroSubheadline:
    "HVAC repair and installation serving Seattle, Bellevue & Redmond. 24/7 emergency service. Most repairs done same day.",
  emergencyHeadline: "24/7 Emergency HVAC Repair in Seattle",
  heroImageAlt: "HVAC technician servicing an air conditioner",

  services: [
    {
      slug: "ac-repair",
      name: "AC Repair",
      shortDesc: "Not cooling? We diagnose and fix same day. All brands.",
      icon: "❄️",
      problems: [
        "AC running but not cooling",
        "AC making strange noises",
        "AC freezing up or icing over",
        "Thermostat not responding",
        "Warm air from vents",
      ],
      faqs: [
        {
          q: "How fast can you respond to an AC emergency in Seattle?",
          a: "We typically arrive within 2–3 hours for emergency calls. Same-day service available 7 days a week.",
        },
        {
          q: "Do you work on all AC brands?",
          a: "Yes — we service Carrier, Trane, Lennox, Rheem, Daikin, and all major brands.",
        },
      ],
    },
    {
      slug: "heating-repair",
      name: "Heating Repair",
      shortDesc: "Furnace or heat pump not working? We fix it before you freeze.",
      icon: "🔥",
      problems: [
        "Furnace not turning on",
        "Heat pump blowing cold air",
        "Pilot light won't stay lit",
        "Uneven heating throughout the home",
      ],
      faqs: [
        {
          q: "My furnace stopped working on a cold night — can you come tonight?",
          a: "Yes. We operate 24/7 for heating emergencies. Call us and we'll dispatch a tech.",
        },
      ],
    },
    {
      slug: "ac-installation",
      name: "AC Installation",
      shortDesc: "New central AC or mini-split installed right. Energy-efficient systems.",
      icon: "🏠",
      problems: [
        "Home has no air conditioning",
        "Old system over 15 years old",
        "Energy bills too high",
      ],
    },
    {
      slug: "furnace-installation",
      name: "Furnace Installation",
      shortDesc: "High-efficiency gas or electric furnace installation.",
      icon: "⚡",
    },
    {
      slug: "hvac-maintenance",
      name: "HVAC Maintenance",
      shortDesc: "Annual tune-up to keep your system running and bills low.",
      icon: "🔧",
    },
  ],

  rating: 4.8,
  reviewCount: 489,
  testimonials: [
    {
      name: "Sarah M.",
      city: "Seattle",
      text: "AC died on the hottest day of summer. Cascade had a tech out within 3 hours and it was running again by dinner. Incredible service.",
      rating: 5,
      service: "Emergency AC Repair",
    },
    {
      name: "James R.",
      city: "Bellevue",
      text: "Furnace went out in January. These guys came at 10pm and had it fixed in 45 minutes. Worth every penny.",
      rating: 5,
      service: "Emergency Heating Repair",
    },
    {
      name: "Priya N.",
      city: "Redmond",
      text: "Got a new mini-split installed. Clean install, explained the system, and followed up a week later. Really impressed.",
      rating: 5,
      service: "AC Installation",
    },
  ],

  certifications: [
    { name: "NATE Certified Technicians" },
    { name: "EPA 608 Certified" },
    { name: "Licensed & Bonded (WA State)" },
    { name: "Energy Star Partner" },
  ],

  whyUs: [
    "NATE-certified technicians — not trainees",
    "24/7 emergency response — real people answer",
    "Same-day repair on most HVAC issues",
    "14 years serving the Seattle metro",
    "Flat-rate pricing — no surprise bills",
    "All work guaranteed for 1 year",
    "Over 6,800 systems serviced",
  ],

  primaryColor: "blue-700",
  accentColor: "orange-500",
  darkColor: "slate-950",

  aboutHeadline: "HVAC done right by people who live here.",
  aboutBody:
    "Cascade Comfort HVAC was founded in 2011 by a Bellevue native who spent 12 years working for a national chain and saw how homeowners were being overcharged. We're a local team of 22 certified technicians. We own our trucks, do our own work, and stand behind every repair. If we can't fix it, you don't pay.",
};
