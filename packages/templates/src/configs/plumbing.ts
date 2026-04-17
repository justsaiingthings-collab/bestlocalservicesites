import type { SiteConfig } from "@bestlocal/ui";

export const plumbingConfig: SiteConfig = {
  businessName: "Sound Plumbing Co.",
  vertical: "plumbing",
  tagline: "Pipe burst? Drain clogged? We fix it same day in Seattle, Bellevue & Redmond.",
  phone: "(206) 555-0271",
  email: "dispatch@soundplumbing.com",
  yearFounded: 2007,
  yearsInBusiness: 18,
  jobsCompleted: 9100,

  isEmergencyService: true,
  available247: true,

  locations: [
    { city: "Seattle", slug: "seattle", county: "King County" },
    { city: "Bellevue", slug: "bellevue", county: "King County" },
    { city: "Redmond", slug: "redmond", county: "King County" },
  ],
  primaryLocation: "Seattle, WA",
  serviceRadius: "Serving King County & Eastside communities",

  heroVideo: "https://videos.pexels.com/video-files/4108795/4108795-uhd_2560_1440_25fps.mp4",
  heroPoster: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&q=80",
  technicianImage: "/plumbing/technician.png",

  heroHeadline: "Pipe Burst? Drain Clogged? Call Now.",
  heroSubheadline:
    "Emergency plumbers serving Seattle, Bellevue & Redmond. Available 24/7. Upfront pricing. Same-day service.",
  emergencyHeadline: "24/7 Emergency Plumber in Seattle",
  heroImageAlt: "Plumber fixing pipes under a sink",

  services: [
    {
      slug: "emergency-plumbing",
      name: "Emergency Plumbing",
      shortDesc: "Burst pipes, flooding, sewage backup — we respond in hours.",
      icon: "🚨",
      problems: [
        "Pipe burst and water flooding",
        "Sewage backing up into the home",
        "No hot water",
        "Main water line break",
        "Toilet overflowing and won't stop",
      ],
      faqs: [
        {
          q: "How fast do you respond to plumbing emergencies?",
          a: "We typically arrive within 1–3 hours for active emergencies. Call now and we'll give you an ETA.",
        },
        {
          q: "What should I do while waiting for the plumber?",
          a: "Shut off your main water valve (usually near your meter or water heater). This stops water damage from spreading.",
        },
      ],
    },
    {
      slug: "drain-cleaning",
      name: "Drain Cleaning",
      shortDesc: "Slow or clogged drains cleared fast. Hydro-jetting available.",
      icon: "🌀",
      problems: [
        "Kitchen sink draining slowly",
        "Shower drain backing up",
        "Multiple drains clogged at once",
        "Foul smell from drains",
      ],
    },
    {
      slug: "water-heater",
      name: "Water Heater Repair & Replacement",
      shortDesc: "No hot water? We repair or replace same day.",
      icon: "🌡️",
      problems: [
        "Water heater not heating",
        "Rusty or discolored water",
        "Popping or rumbling sounds",
        "Water heater over 10 years old",
      ],
    },
    {
      slug: "leak-detection",
      name: "Leak Detection & Repair",
      shortDesc: "We find hidden leaks fast and fix them without tearing up your home.",
      icon: "💧",
    },
    {
      slug: "pipe-repair",
      name: "Pipe Repair & Repiping",
      shortDesc: "Corroded pipes? We reline or replace them with minimal disruption.",
      icon: "🔧",
    },
  ],

  rating: 4.8,
  reviewCount: 527,
  testimonials: [
    {
      name: "Kevin B.",
      city: "Seattle",
      text: "Pipe burst at 2am. Called Sound Plumbing and someone answered immediately. Tech was there in under 2 hours. They're the real deal.",
      rating: 5,
      service: "Emergency Plumbing",
    },
    {
      name: "Angela W.",
      city: "Bellevue",
      text: "Had a drain backing up for months. Other companies quoted $800. Sound Plumbing cleared it for $180 in 30 minutes. Honest pricing.",
      rating: 5,
      service: "Drain Cleaning",
    },
    {
      name: "Tom H.",
      city: "Redmond",
      text: "New water heater installed in 3 hours. They hauled away the old one, showed me how to use the new controls, and cleaned up perfectly.",
      rating: 5,
      service: "Water Heater Replacement",
    },
  ],

  certifications: [
    { name: "Licensed WA State Plumber" },
    { name: "Fully Bonded & Insured" },
    { name: "BBB Accredited A+" },
    { name: "PHCC Member" },
  ],

  whyUs: [
    "Licensed plumbers — not handymen",
    "24/7 emergency response, real humans answer",
    "Upfront flat-rate pricing before we start",
    "18 years serving the Seattle area",
    "9,100+ jobs completed",
    "We guarantee our work for 2 years",
    "Same-day service on most jobs",
  ],

  primaryColor: "blue-800",
  accentColor: "orange-500",
  darkColor: "slate-950",

  aboutHeadline: "Seattle's most responsive plumber.",
  aboutBody:
    "Sound Plumbing Co. started in 2007 with two trucks and one mission: answer the phone and fix it right. Today we have 26 licensed plumbers working across King County. We don't use answering services — when you call, you get us. Every tech carries a full truck so we fix most problems on the first visit.",
};
