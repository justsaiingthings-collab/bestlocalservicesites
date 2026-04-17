import type { SiteConfig } from "@bestlocal/ui";

export const landscapingConfig: SiteConfig = {
  businessName: "Green Valley Landscaping",
  vertical: "landscaping",
  tagline: "Lawn care, tree trimming & landscaping for Seattle, Bellevue & Redmond homeowners.",
  phone: "(206) 555-0334",
  email: "hello@greenvalleywa.com",
  yearFounded: 2013,
  yearsInBusiness: 12,
  jobsCompleted: 3800,

  isEmergencyService: false,
  available247: false,

  locations: [
    { city: "Seattle", slug: "seattle", county: "King County" },
    { city: "Bellevue", slug: "bellevue", county: "King County" },
    { city: "Redmond", slug: "redmond", county: "King County" },
  ],
  primaryLocation: "Bellevue, WA",
  serviceRadius: "Serving King County homeowners & HOAs",

  heroVideo: "https://videos.pexels.com/video-files/856132/856132-hd_1920_1080_25fps.mp4",
  heroPoster: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&q=80",
  technicianImage: "/technician.png",

  heroHeadline: "Lawn Looking Rough? We Fix That.",
  heroSubheadline:
    "Professional landscaping, lawn care, and tree services for Seattle-area homeowners. Free estimates. Reliable crews. No contracts.",
  heroImageAlt: "Landscaping crew maintaining a green lawn in Bellevue",

  services: [
    {
      slug: "lawn-care",
      name: "Lawn Care",
      shortDesc: "Weekly or bi-weekly mowing, edging, and blowing. Consistent results.",
      icon: "🌿",
      problems: [
        "Lawn getting out of control",
        "Mower broken or no storage",
        "Too busy to maintain the yard",
        "Uneven or patchy grass",
      ],
      faqs: [
        {
          q: "Do you offer recurring lawn service?",
          a: "Yes — weekly or bi-weekly schedules available. Same crew, same day each week.",
        },
        {
          q: "Do I need to be home?",
          a: "Nope. We service the yard and you get a notification when we're done.",
        },
      ],
    },
    {
      slug: "tree-trimming",
      name: "Tree Trimming & Removal",
      shortDesc: "Safe pruning, shaping, and removal of hazardous trees.",
      icon: "🌲",
      problems: [
        "Tree branches over the roof",
        "Dead tree that needs removal",
        "Trees blocking sunlight",
        "Storm-damaged branches",
      ],
    },
    {
      slug: "landscape-design",
      name: "Landscape Design & Install",
      shortDesc: "Transform your yard. Full design and planting services.",
      icon: "🏡",
      problems: [
        "Yard is bare or overgrown",
        "Want to improve curb appeal",
        "New home with no landscaping",
      ],
    },
    {
      slug: "irrigation",
      name: "Irrigation Systems",
      shortDesc: "Smart irrigation installation and seasonal startup/winterization.",
      icon: "💦",
    },
    {
      slug: "seasonal-cleanup",
      name: "Seasonal Cleanup",
      shortDesc: "Spring and fall cleanups — leaf removal, bed prep, mulching.",
      icon: "🍂",
    },
  ],

  rating: 4.7,
  reviewCount: 214,
  testimonials: [
    {
      name: "Rachel P.",
      city: "Bellevue",
      text: "Green Valley has been doing our lawn for two years. Reliable, friendly, and the yard looks amazing. Neighbors keep asking who does it.",
      rating: 5,
      service: "Weekly Lawn Care",
    },
    {
      name: "Chris L.",
      city: "Seattle",
      text: "Had a big maple with branches hanging over the house. They came out, gave a fair quote, and removed it safely in one day.",
      rating: 5,
      service: "Tree Removal",
    },
    {
      name: "Diane F.",
      city: "Redmond",
      text: "Completely transformed our backyard. New plants, stones, the whole thing. Finished on budget and it looks incredible.",
      rating: 5,
      service: "Landscape Design",
    },
  ],

  certifications: [
    { name: "WA State Licensed Contractor" },
    { name: "ISA Certified Arborist" },
    { name: "Fully Insured" },
    { name: "Rainwise Certified" },
  ],

  whyUs: [
    "Licensed & insured landscaping crew",
    "Consistent crew — same team every visit",
    "Free estimates with no pressure",
    "12 years serving King County",
    "3,800+ projects completed",
    "We show up when we say we will",
    "No long-term contracts required",
  ],

  primaryColor: "green-700",
  accentColor: "orange-500",
  darkColor: "slate-900",

  aboutHeadline: "Locally grown, locally owned.",
  aboutBody:
    "Green Valley Landscaping was started in Bellevue in 2013 by a couple of guys who simply loved working outdoors. We've grown to a team of 14 and work across King County for homeowners, HOAs, and commercial properties. We take pride in showing up on time, doing great work, and leaving the site cleaner than we found it.",
};
