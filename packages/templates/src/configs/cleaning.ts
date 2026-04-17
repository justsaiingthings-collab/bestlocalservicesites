import type { SiteConfig } from "@bestlocal/ui";

export const cleaningConfig: SiteConfig = {
  businessName: "Spotless Seattle",
  vertical: "cleaning",
  tagline: "Professional house cleaning for Seattle, Bellevue & Redmond. Book in 60 seconds.",
  phone: "(206) 555-0412",
  email: "book@spotlessseattle.com",
  yearFounded: 2016,
  yearsInBusiness: 9,
  jobsCompleted: 11200,

  isEmergencyService: false,
  available247: false,

  locations: [
    { city: "Seattle", slug: "seattle", county: "King County" },
    { city: "Bellevue", slug: "bellevue", county: "King County" },
    { city: "Redmond", slug: "redmond", county: "King County" },
  ],
  primaryLocation: "Seattle, WA",
  serviceRadius: "Serving Seattle, Eastside & surrounding neighborhoods",

  heroVideo: "https://videos.pexels.com/video-files/4108670/4108670-uhd_2560_1440_25fps.mp4",
  heroPoster: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
  technicianImage: "/technician.png",

  heroHeadline: "A Clean Home Without the Hassle.",
  heroSubheadline:
    "Professional, background-checked cleaners serving Seattle, Bellevue & Redmond. Book online or call now. Same-week availability.",
  heroImageAlt: "Professional cleaner wiping down a kitchen counter",

  services: [
    {
      slug: "standard-cleaning",
      name: "Standard House Cleaning",
      shortDesc: "Regular weekly or bi-weekly cleaning. Kitchen, bathrooms, floors, dusting.",
      icon: "🏠",
      problems: [
        "No time to keep the house clean",
        "Cleaning takes your whole weekend",
        "Want a consistent, reliable cleaner",
      ],
      faqs: [
        {
          q: "Do I need to be home during the cleaning?",
          a: "Not at all. Most customers give us a key or door code. You come home to a clean house.",
        },
        {
          q: "What's included in a standard clean?",
          a: "Kitchen surfaces, stovetop, sink, bathrooms (toilet, shower, sink, mirror), floors vacuumed and mopped, dusting, beds made.",
        },
      ],
    },
    {
      slug: "deep-cleaning",
      name: "Deep Cleaning",
      shortDesc: "Scrub everything top to bottom. Great for first visits or spring cleaning.",
      icon: "✨",
      problems: [
        "First clean in months (or years)",
        "Moving in and want it spotless",
        "Spring cleaning overhaul",
      ],
    },
    {
      slug: "move-in-out",
      name: "Move-In / Move-Out Cleaning",
      shortDesc: "Get your deposit back or start fresh. Full deep clean certified.",
      icon: "📦",
    },
    {
      slug: "commercial-cleaning",
      name: "Office & Commercial Cleaning",
      shortDesc: "Scheduled cleaning for offices, studios, and small commercial spaces.",
      icon: "🏢",
    },
    {
      slug: "window-cleaning",
      name: "Window Cleaning",
      shortDesc: "Interior and exterior window cleaning. Streak-free guaranteed.",
      icon: "🪟",
    },
  ],

  rating: 4.9,
  reviewCount: 673,
  testimonials: [
    {
      name: "Megan S.",
      city: "Seattle",
      text: "I've tried 4 cleaning services. Spotless is by far the most consistent. Same team every time, they know the house. Never going back.",
      rating: 5,
      service: "Weekly Cleaning",
    },
    {
      name: "David C.",
      city: "Bellevue",
      text: "Used them for a move-out clean. Landlord was floored — said it was the cleanest unit they'd seen. Got full deposit back.",
      rating: 5,
      service: "Move-Out Cleaning",
    },
    {
      name: "Jen M.",
      city: "Redmond",
      text: "Booked online in 2 minutes. Team arrived on time, did an incredible job, and the place smelled amazing. 10/10.",
      rating: 5,
      service: "Deep Cleaning",
    },
  ],

  certifications: [
    { name: "Background-Checked Staff" },
    { name: "Fully Insured & Bonded" },
    { name: "Green Clean Certified" },
    { name: "Satisfaction Guarantee" },
  ],

  whyUs: [
    "100% background-checked cleaners",
    "Eco-friendly cleaning products available",
    "Same team assigned to your home",
    "Book online in under 60 seconds",
    "Satisfaction guaranteed — we re-clean free",
    "Fully insured and bonded",
    "9 years serving Seattle-area homes",
  ],

  primaryColor: "teal-600",
  accentColor: "orange-500",
  darkColor: "slate-900",

  aboutHeadline: "Professional cleaning you can actually rely on.",
  aboutBody:
    "Spotless Seattle started in 2016 with three cleaners and a commitment to reliability. Today we have 31 staff serving homes and offices across the Seattle metro. Every cleaner is background-checked, trained by us, and assigned consistently to your home so they know how you like things. We use eco-friendly products by default and never surprise you with hidden fees.",
};
