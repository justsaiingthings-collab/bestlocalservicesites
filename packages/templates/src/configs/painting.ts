import type { SiteConfig } from "@bestlocal/ui";

export const paintingConfig: SiteConfig = {
  businessName: "Pacific Coat Painting",
  vertical: "painting",
  tagline: "Interior & exterior painting in Seattle, Bellevue & Redmond. No mess. Clean results.",
  phone: "(206) 555-0518",
  email: "quote@pacificcoatpainting.com",
  yearFounded: 2012,
  yearsInBusiness: 13,
  jobsCompleted: 2900,

  isEmergencyService: false,
  available247: false,

  locations: [
    { city: "Seattle", slug: "seattle", county: "King County" },
    { city: "Bellevue", slug: "bellevue", county: "King County" },
    { city: "Redmond", slug: "redmond", county: "King County" },
  ],
  primaryLocation: "Seattle, WA",
  serviceRadius: "Serving Seattle, Eastside & South King County",

  heroVideo: "https://videos.pexels.com/video-files/3252421/3252421-uhd_2560_1440_25fps.mp4",
  heroPoster: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80",
  technicianImage: "/painting/technician.png",

  heroHeadline: "Fresh Paint. Zero Mess. Done Right.",
  heroSubheadline:
    "Professional interior and exterior painting for Seattle-area homes. Detailed prep, clean edges, no shortcuts. Free estimates.",
  heroImageAlt: "Painter rolling a fresh coat on an interior wall",

  services: [
    {
      slug: "interior-painting",
      name: "Interior Painting",
      shortDesc: "Walls, ceilings, trim, and doors. Clean prep and clean edges every time.",
      icon: "🖌️",
      problems: [
        "Walls looking dull or scuffed",
        "Builder-grade paint showing its age",
        "Preparing to sell the home",
        "New furniture needs a new wall color",
      ],
      faqs: [
        {
          q: "How long does an interior paint job take?",
          a: "A typical 3-bedroom home takes 2–3 days. We give you a timeline upfront and stick to it.",
        },
        {
          q: "Do you move furniture?",
          a: "We move and cover furniture as part of the job. You don't need to do anything.",
        },
      ],
    },
    {
      slug: "exterior-painting",
      name: "Exterior Painting",
      shortDesc: "Protect your home from the PNW weather. Proper prep, premium paint.",
      icon: "🏠",
      problems: [
        "Peeling or fading exterior paint",
        "Wood rot starting from moisture",
        "Preparing home for sale",
        "HOA notice about paint condition",
      ],
    },
    {
      slug: "cabinet-painting",
      name: "Cabinet Painting",
      shortDesc: "Kitchen cabinet respray — like new, for a fraction of replacement cost.",
      icon: "🗄️",
      problems: [
        "Cabinets look dated or worn",
        "Want to update the kitchen without a full remodel",
      ],
      faqs: [
        {
          q: "How is cabinet painting different from wall painting?",
          a: "Cabinets require sanding, priming, and a spray finish for a factory-smooth result. We prep them properly — no brush marks.",
        },
      ],
    },
    {
      slug: "deck-staining",
      name: "Deck Staining & Sealing",
      shortDesc: "Protect your deck from Seattle's rain. Stain or seal applied right.",
      icon: "🪵",
    },
    {
      slug: "commercial-painting",
      name: "Commercial Painting",
      shortDesc: "Offices, retail, and multi-unit properties. Flexible scheduling.",
      icon: "🏢",
    },
  ],

  rating: 4.8,
  reviewCount: 198,
  testimonials: [
    {
      name: "Steve K.",
      city: "Seattle",
      text: "Had the whole interior done before listing. Crew was careful, clean, and finished ahead of schedule. House sold in 4 days.",
      rating: 5,
      service: "Interior Painting",
    },
    {
      name: "Nancy G.",
      city: "Bellevue",
      text: "Exterior was peeling badly. Pacific Coat did the prep right — scraped, primed, then painted. Looks brand new 18 months later.",
      rating: 5,
      service: "Exterior Painting",
    },
    {
      name: "Alex T.",
      city: "Redmond",
      text: "Cabinet paint job transformed the kitchen. I was skeptical but the finish is genuinely perfect. Worth every dollar.",
      rating: 5,
      service: "Cabinet Painting",
    },
  ],

  certifications: [
    { name: "Licensed WA State Contractor" },
    { name: "Fully Insured & Bonded" },
    { name: "Sherwin-Williams Preferred" },
    { name: "Lead-Safe Certified" },
  ],

  whyUs: [
    "Licensed & insured painting contractor",
    "Detailed prep work — no shortcuts",
    "We clean up completely after each day",
    "13 years serving Seattle-area homes",
    "Free color consultation included",
    "2-year workmanship warranty",
    "No subcontractors — our crew, our quality",
  ],

  primaryColor: "purple-700",
  accentColor: "orange-500",
  darkColor: "slate-900",

  aboutHeadline: "Paint done the right way, every time.",
  aboutBody:
    "Pacific Coat Painting has been operating in Seattle since 2012. We specialize in residential painting for homeowners who care about quality — the prep work, the finish, and the cleanup. Our crew of 12 full-time painters does not cut corners. We've built our business on referrals from homeowners in Seattle, Bellevue, and Redmond who tell their neighbors.",
};
