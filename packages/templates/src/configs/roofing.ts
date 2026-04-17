import type { SiteConfig } from "@bestlocal/ui";

export const roofingConfig: SiteConfig = {
  businessName: "Pacific Northwest Roofing",
  vertical: "roofing",
  tagline: "Roof leaking? We fix it fast — same day in Seattle, Bellevue & Redmond.",
  phone: "(206) 555-0147",
  email: "hello@pnwroofing.com",
  yearFounded: 2009,
  yearsInBusiness: 16,
  jobsCompleted: 4200,

  isEmergencyService: true,
  available247: true,

  locations: [
    { city: "Seattle", slug: "seattle", county: "King County" },
    { city: "Bellevue", slug: "bellevue", county: "King County" },
    { city: "Redmond", slug: "redmond", county: "King County" },
  ],
  primaryLocation: "Seattle, WA",
  serviceRadius: "Serving King County & surrounding areas",

  heroVideo: "https://videos.pexels.com/video-files/5731914/5731914-uhd_2560_1440_25fps.mp4",
  heroPoster: "/roofing/roof.png",
  technicianImage: "/roofing/technician.png",

  heroHeadline: "Roof Leaking? We Fix It Today.",
  heroSubheadline:
    "Licensed roofers serving Seattle, Bellevue & Redmond. Same-day emergency repairs. Free estimates. Answer in under 2 minutes.",
  emergencyHeadline: "24/7 Emergency Roof Repair in Seattle",
  heroImageAlt: "Roofer working on a residential roof in Seattle",

  services: [
    {
      slug: "roof-repair",
      name: "Roof Repair",
      shortDesc: "Leaks, missing shingles, flashing damage — fixed same day.",
      longDesc:
        "Whether it's a small leak or widespread storm damage, we respond fast. Our crew diagnoses the issue on-site and fixes it that day when possible.",
      icon: "🔨",
      problems: [
        "Shingles missing after a storm",
        "Water dripping into the attic",
        "Flashing pulling away from chimney",
        "Gutters overflowing and backing up",
        "Dark stains on ceiling",
      ],
      faqs: [
        {
          q: "How fast can you respond to a roof leak in Seattle?",
          a: "For active leaks, we typically arrive within 2–4 hours. Call us directly for same-day service.",
        },
        {
          q: "Will my insurance cover storm damage?",
          a: "Most homeowner policies cover sudden storm damage. We help document the damage and can work directly with your adjuster.",
        },
        {
          q: "Do you offer emergency tarping?",
          a: "Yes — if you need immediate protection while we schedule a full repair, we provide emergency tarping same day.",
        },
      ],
    },
    {
      slug: "roof-replacement",
      name: "Roof Replacement",
      shortDesc: "Full tear-off and new roof installation. GAF & Owens Corning certified.",
      longDesc:
        "When repairs aren't enough, we do full roof replacements. We're GAF Master Elite certified — meaning better warranties and higher installation standards.",
      icon: "🏠",
      problems: [
        "Roof older than 20 years",
        "Multiple leaks across different areas",
        "Significant granule loss",
        "Sagging or soft spots",
      ],
      faqs: [
        {
          q: "How long does a full replacement take?",
          a: "Most residential replacements are complete in 1–2 days. We clean up fully each day.",
        },
        {
          q: "What materials do you use?",
          a: "We install architectural shingles, metal roofing, and flat/low-slope systems. We'll recommend the best fit for your home.",
        },
      ],
    },
    {
      slug: "storm-damage-repair",
      name: "Storm Damage Repair",
      shortDesc: "Hail, wind, fallen branches — we assess and repair fast.",
      icon: "⛈️",
      problems: [
        "Hail dents on shingles",
        "Wind-blown ridge cap",
        "Tree limb through the roof",
        "Gutters torn away",
      ],
      faqs: [
        {
          q: "How do I know if my roof has hail damage?",
          a: "Look for dents on vents, dented gutters, or bruised/cracked shingles. Call us for a free inspection — we document everything.",
        },
      ],
    },
    {
      slug: "gutter-installation",
      name: "Gutter Installation & Repair",
      shortDesc: "Seamless gutters, guards, and downspout repairs.",
      icon: "🌊",
      problems: [
        "Gutters pulling away from fascia",
        "Sagging or clogged gutters",
        "No gutters at all",
        "Improper downspout placement",
      ],
    },
    {
      slug: "roof-inspection",
      name: "Roof Inspection",
      shortDesc: "Pre-purchase or annual inspection. Detailed written report.",
      icon: "🔍",
    },
  ],

  rating: 4.9,
  reviewCount: 312,
  testimonials: [
    {
      name: "Marcus T.",
      city: "Seattle",
      text: "Roof started leaking Friday night. Called PNW Roofing and they were at my house by 9am Saturday. Fixed it same day. No BS, no upsell.",
      rating: 5,
      service: "Emergency Roof Repair",
    },
    {
      name: "Linda K.",
      city: "Bellevue",
      text: "Got three quotes. PNW was clear about what I needed and didn't try to sell me a full replacement when a repair was fine. Trust matters.",
      rating: 5,
      service: "Roof Repair",
    },
    {
      name: "Derek S.",
      city: "Redmond",
      text: "New roof done in 1.5 days. Clean, professional crew. The job looks great and they left the yard spotless.",
      rating: 5,
      service: "Roof Replacement",
    },
  ],

  certifications: [
    { name: "GAF Master Elite Certified" },
    { name: "Licensed & Insured (WA State)" },
    { name: "BBB Accredited A+" },
    { name: "Owens Corning Preferred" },
  ],

  whyUs: [
    "Licensed Washington State roofing contractor",
    "Same-day emergency response — call and we answer",
    "16 years serving Seattle, Bellevue & Redmond",
    "4,200+ roofs repaired and replaced",
    "We work directly with your insurance adjuster",
    "No subcontractors — our crew, our work",
    "Every job backed by a workmanship warranty",
  ],

  primaryColor: "slate-800",
  accentColor: "orange-500",
  darkColor: "slate-950",

  aboutHeadline: "Locally owned. Locally accountable.",
  aboutBody:
    "Pacific Northwest Roofing was started in 2009 by two Seattle contractors who were tired of homeowners being ripped off by out-of-town roofers. We've grown to a crew of 18 and still answer our own phones. Our office is in Bellevue and we've fixed roofs from Capitol Hill to Redmond's tech corridor. When your roof fails, you need someone you can trust — not a call center.",
};
