export type CompetitorCategory =
  | "lead-marketplace"
  | "website-builder"
  | "field-service-software"
  | "review-platform"
  | "small-business-software";

export interface ComparisonRow {
  feature: string;
  blss: string;
  competitor: string;
  blssWins: boolean;
}

export interface Competitor {
  slug: string;
  name: string;
  category: CompetitorCategory;
  categoryLabel: string;
  tagline: string;
  url: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string;
  theirPitch: string; // What they say about themselves (fair)
  setupCost: string;
  monthlyCost: string;
  contractLength: string;
  leadCost: string | null;
  timeToLive: string;
  localSEO: boolean;
  mobileOptimized: boolean;
  doneForYou: boolean;
  emergencyMode: boolean;
  schemaMarkup: boolean;
  cityPages: boolean;
  missedCallTextback: boolean;
  comparisonTable: ComparisonRow[];
  whyContractorsLeave: string[];
  whoTheyreFor: string;
  whoBlssIsFor: string;
  bottomLine: string;
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const competitors: Competitor[] = [
  {
    slug: "angi",
    name: "Angi",
    category: "lead-marketplace",
    categoryLabel: "Lead Marketplace",
    tagline: "Angi connects homeowners with local pros",
    url: "https://www.angi.com",
    heroHeadline: "Angi vs Best Local Service Sites",
    heroSubheadline:
      "Paying $30–$120 per shared lead? Here's what contractor-owned inbound looks like instead.",
    intro:
      "Angi (formerly Angie's List and merged with HomeAdvisor) is the largest lead marketplace for home service contractors in the US. It sells pay-per-lead access to homeowners searching for contractors — the same lead goes to 4–6 competing contractors simultaneously.",
    theirPitch:
      "Angi provides contractors with a steady stream of homeowner leads through its marketplace of millions of verified reviews and service requests, with flexible pay-per-lead and subscription options.",
    setupCost: "Free to list",
    monthlyCost: "$0–$300/mo (membership) + $30–$120 per lead",
    contractLength: "Annual contract often required for premium tiers",
    leadCost: "$30–$120 per shared lead",
    timeToLive: "Same day listing",
    localSEO: false,
    mobileOptimized: false,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Setup cost", blss: "$499 one-time", competitor: "Free to list", blssWins: false },
      { feature: "Monthly cost", blss: "$249/mo flat", competitor: "$0–$300/mo + $30–$120/lead", blssWins: true },
      { feature: "Cost per lead", blss: "$0 — you own the channel", competitor: "$30–$120 per shared lead", blssWins: true },
      { feature: "Exclusive leads", blss: "Yes — only your phone rings", competitor: "No — sold to 4–6 contractors", blssWins: true },
      { feature: "Lead quality", blss: "Organic search — high intent", competitor: "Price-shoppers — low close rate", blssWins: true },
      { feature: "Own the asset", blss: "Yes — your website, your brand", competitor: "No — platform dependency", blssWins: true },
      { feature: "Local Pack rankings", blss: "Built in (schema + city pages)", competitor: "Not included", blssWins: true },
      { feature: "Time to first lead", blss: "7–30 days after launch", competitor: "Hours (if competitive market)", blssWins: false },
      { feature: "Long-term cost", blss: "Flat — never increases", competitor: "Grows with volume", blssWins: true },
      { feature: "Contract", blss: "Month-to-month", competitor: "Annual for premium tiers", blssWins: true },
    ],
    whyContractorsLeave: [
      "Shared leads mean racing 4 other contractors to the same phone call",
      "Leads cost $80+ each — one missed call wipes out the margin",
      "Homeowners on lead platforms are price-shopping, not loyalty-building",
      "Platform rules change without notice — your lead flow can drop overnight",
      "Monthly spend compounds: $2,000–$5,000/month with no owned asset to show for it",
      "Negative reviews on Angi stay forever and drag down all future leads",
    ],
    whoTheyreFor:
      "Contractors who need immediate lead volume with no existing web presence and are willing to pay per lead while building a brand.",
    whoBlssIsFor:
      "Contractors ready to build an owned inbound channel — a website that generates exclusive leads at zero per-lead cost, permanently.",
    bottomLine:
      "Angi is a lead rental. Best Local Service Sites is lead ownership. The math is straightforward: at $60/lead average and 30 leads/month, you're spending $1,800/month for shared leads with no asset. At $249/month, you own a website that keeps generating exclusive leads indefinitely.",
    faq: [
      {
        q: "Can I use Angi and Best Local Service Sites at the same time?",
        a: "Yes. Many contractors use Angi for immediate volume while their BLSS site builds organic rankings. Once the site is generating consistent inbound, most reduce or eliminate their Angi spend.",
      },
      {
        q: "How long until my BLSS site generates more leads than Angi?",
        a: "Most contractors see meaningful organic traffic within 60–90 days of launch. Contractors in markets with low-quality competitor websites often rank within 30 days.",
      },
      {
        q: "Are Angi leads really shared with other contractors?",
        a: "Yes. Angi's standard model sends each service request to multiple contractors. The homeowner receives calls from several companies — you're competing on speed and price from the first second.",
      },
      {
        q: "What's the real monthly cost of Angi for an active contractor?",
        a: "Contractors running Angi actively typically spend $1,500–$4,000/month between the membership fee and pay-per-lead costs. This produces shared leads, not owned traffic.",
      },
    ],
    metaTitle: "Angi vs Best Local Service Sites | Contractor Lead Comparison",
    metaDescription:
      "Paying $30–$120 per shared lead on Angi? See how Best Local Service Sites builds an owned inbound channel — exclusive leads, no per-lead cost, month-to-month.",
  },
  {
    slug: "homeadvisor",
    name: "HomeAdvisor",
    category: "lead-marketplace",
    categoryLabel: "Lead Marketplace",
    tagline: "HomeAdvisor connects homeowners with screened pros",
    url: "https://www.homeadvisor.com",
    heroHeadline: "HomeAdvisor vs Best Local Service Sites",
    heroSubheadline:
      "Shared leads. Annual contracts. Rising costs. Here's what owning your inbound looks like.",
    intro:
      "HomeAdvisor (now part of Angi Ads) is a pay-per-lead marketplace that sells homeowner service requests to multiple contractors simultaneously. It requires an annual membership and charges per lead on top of that fee.",
    theirPitch:
      "HomeAdvisor provides contractors with verified homeowner leads in their area through a nationwide marketplace, with background-checked contractor profiles and a satisfaction guarantee.",
    setupCost: "$287.99/year membership",
    monthlyCost: "$24/mo membership + $15–$100 per lead",
    contractLength: "Annual membership required",
    leadCost: "$15–$100 per shared lead",
    timeToLive: "24–48 hours after approval",
    localSEO: false,
    mobileOptimized: false,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Setup cost", blss: "$499 one-time", competitor: "$288/yr membership", blssWins: true },
      { feature: "Monthly cost", blss: "$249/mo flat", competitor: "$24/mo + $15–$100/lead", blssWins: true },
      { feature: "Lead exclusivity", blss: "Exclusive to you", competitor: "Sold to multiple contractors", blssWins: true },
      { feature: "Contract", blss: "Month-to-month", competitor: "Annual — hard to cancel", blssWins: true },
      { feature: "Own the asset", blss: "Yes — your website", competitor: "No — platform listing only", blssWins: true },
      { feature: "Local SEO included", blss: "Yes — city pages + schema", competitor: "No", blssWins: true },
      { feature: "Time to leads", blss: "7–30 days (organic)", competitor: "Immediate (if market available)", blssWins: false },
      { feature: "Lead quality", blss: "High intent — found you specifically", competitor: "Price comparison mindset", blssWins: true },
      { feature: "Refund for bad leads", blss: "N/A — you generate leads", competitor: "Disputed — hard to get", blssWins: true },
      { feature: "Long-term value", blss: "Compounding — site ranks higher over time", competitor: "Zero — no asset built", blssWins: true },
    ],
    whyContractorsLeave: [
      "Annual contracts that automatically renew — many contractors feel trapped",
      "Lead credits promised but hard to actually claim when leads are bogus",
      "Same lead sold to 3–6 competitors — first-to-call wins, margins suffer",
      "Lead prices rise each year with no corresponding quality increase",
      "No website ownership — if you leave, you leave with nothing",
      "Dispute resolution favors the platform, not the contractor",
    ],
    whoTheyreFor:
      "New contractors with zero online presence who need immediate leads and accept high per-lead costs and shared competition as the price of entry.",
    whoBlssIsFor:
      "Contractors who want to stop renting leads and start owning an inbound channel — exclusive leads at a flat monthly cost with no per-lead fees.",
    bottomLine:
      "HomeAdvisor is renting space in someone else's building. Best Local Service Sites builds you a building you own. The rental never stops costing money; the building keeps generating value.",
    faq: [
      {
        q: "Is HomeAdvisor the same as Angi?",
        a: "HomeAdvisor and Angi merged under Angi Inc. They operate as separate brand experiences but share infrastructure and are both owned by IAC.",
      },
      {
        q: "Can I cancel HomeAdvisor?",
        a: "HomeAdvisor memberships auto-renew annually. Cancellation is possible but the membership fee is non-refundable and the process is often difficult.",
      },
      {
        q: "How do BLSS leads compare in quality to HomeAdvisor leads?",
        a: "Organic search leads have significantly higher close rates than lead marketplace leads. A homeowner who searched for you specifically and clicked your website is far more serious than someone who submitted a request form that went to 5 contractors.",
      },
    ],
    metaTitle: "HomeAdvisor vs Best Local Service Sites | Real Lead Cost Breakdown",
    metaDescription:
      "HomeAdvisor charges per shared lead plus an annual membership. See what contractor-owned inbound costs instead — and why the math favors ownership.",
  },
  {
    slug: "thumbtack",
    name: "Thumbtack",
    category: "lead-marketplace",
    categoryLabel: "Lead Marketplace",
    tagline: "Thumbtack helps pros find local customers",
    url: "https://www.thumbtack.com",
    heroHeadline: "Thumbtack vs Best Local Service Sites",
    heroSubheadline:
      "Bidding on jobs with 5 other contractors? There's a better model.",
    intro:
      "Thumbtack is a project-based lead marketplace where contractors pay to quote on homeowner jobs. Unlike Angi's membership model, Thumbtack charges per quote sent — meaning you pay whether or not you win the job.",
    theirPitch:
      "Thumbtack lets contractors set their own availability and pricing, only paying for leads that match their services — with a transparent pay-per-quote model and free profile listing.",
    setupCost: "Free to list",
    monthlyCost: "$0 + $10–$70 per quote sent",
    contractLength: "No contract — pay per use",
    leadCost: "$10–$70 per quote (win or lose)",
    timeToLive: "Same day",
    localSEO: false,
    mobileOptimized: false,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Setup cost", blss: "$499 one-time", competitor: "Free", blssWins: false },
      { feature: "Cost per quote", blss: "$0", competitor: "$10–$70 per quote sent", blssWins: true },
      { feature: "Win rate", blss: "N/A — leads come to you", competitor: "Varies — competing with 4+ others", blssWins: true },
      { feature: "Lead exclusivity", blss: "Exclusive", competitor: "Shared with competing quotes", blssWins: true },
      { feature: "Pay to lose", blss: "Never", competitor: "Yes — you pay even if not hired", blssWins: true },
      { feature: "Own the asset", blss: "Yes — your website", competitor: "No — platform profile", blssWins: true },
      { feature: "Google visibility", blss: "Yes — ranked pages", competitor: "No direct SEO benefit to you", blssWins: true },
      { feature: "Emergency leads", blss: "Yes — 24/7 mode built in", competitor: "Project-based only", blssWins: true },
      { feature: "Monthly predictability", blss: "Fixed — $249/mo", competitor: "Unpredictable — rises with activity", blssWins: true },
      { feature: "Long-term value", blss: "Website ranks higher over time", competitor: "Zero asset built", blssWins: true },
    ],
    whyContractorsLeave: [
      "Paying to quote is paying to lose — most quotes don't convert",
      "Active markets have 5–10 contractors quoting every job",
      "Budget evaporates fast: 20 quotes at $40 each = $800 with unknown return",
      "Homeowners use Thumbtack to price-check, not to find trusted long-term pros",
      "Algorithm changes can cut your visibility overnight with no recourse",
      "Zero ownership — your Thumbtack profile isn't yours if you leave",
    ],
    whoTheyreFor:
      "Contractors testing a new service area or trade who want volume with no upfront commitment, accepting low win rates as the cost of flexibility.",
    whoBlssIsFor:
      "Contractors who want to stop bidding against 5 competitors for every job and start generating exclusive inbound leads through search.",
    bottomLine:
      "Thumbtack charges you to try. Best Local Service Sites charges you to own. The difference is compounding: every month your BLSS site ranks better, your per-lead cost drops. Thumbtack's cost per acquired customer never improves.",
    faq: [
      {
        q: "Does Thumbtack charge if I don't get the job?",
        a: "Yes. Thumbtack charges per quote sent, not per job won. You pay for every quote regardless of whether the homeowner hires you.",
      },
      {
        q: "How many contractors compete for the same Thumbtack job?",
        a: "Thumbtack typically sends each homeowner request to 3–5 contractors. In competitive markets, more contractors may be quoting the same job.",
      },
      {
        q: "What happens to my Thumbtack reviews if I switch?",
        a: "They stay on Thumbtack's platform. You can't take them with you. This is one of the core risks of building a reputation on someone else's platform.",
      },
    ],
    metaTitle: "Thumbtack vs Best Local Service Sites | Stop Paying to Lose Bids",
    metaDescription:
      "Thumbtack charges per quote — win or lose. See how Best Local Service Sites generates exclusive inbound leads at zero per-lead cost.",
  },
  {
    slug: "wix",
    name: "Wix",
    category: "website-builder",
    categoryLabel: "DIY Website Builder",
    tagline: "Wix lets anyone build a professional website",
    url: "https://www.wix.com",
    heroHeadline: "Wix vs Best Local Service Sites",
    heroSubheadline:
      "A Wix site won't rank in the Local Pack. Here's what contractor-specific SEO looks like built in.",
    intro:
      "Wix is a general-purpose DIY website builder used by millions of businesses across every industry. It offers drag-and-drop editing, templates, and hosting — but it's built for everyone, which means it's optimized for no one, including home service contractors.",
    theirPitch:
      "Wix lets you build a professional website without code using drag-and-drop tools, hundreds of templates, and built-in features for SEO, booking, and e-commerce.",
    setupCost: "Free plan or $17–$159/mo (annual)",
    monthlyCost: "$17–$35/mo (Business plans)",
    contractLength: "Month-to-month or annual",
    leadCost: null,
    timeToLive: "Immediate (DIY)",
    localSEO: false,
    mobileOptimized: true,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Setup", blss: "Done-for-you — 7 days", competitor: "DIY — hours to weeks of your time", blssWins: true },
      { feature: "Monthly cost", blss: "$249/mo", competitor: "$17–$35/mo", blssWins: false },
      { feature: "Contractor-specific templates", blss: "Yes — built for trades", competitor: "Generic templates only", blssWins: true },
      { feature: "City-specific landing pages", blss: "Up to 3 included, +$49/mo each", competitor: "Manual — you build each page yourself", blssWins: true },
      { feature: "Schema markup", blss: "LocalBusiness + Service + FAQPage", competitor: "Requires plugin or manual code", blssWins: true },
      { feature: "Sticky mobile call bar", blss: "Built in", competitor: "Requires custom code or app", blssWins: true },
      { feature: "Lighthouse score", blss: "90+ target", competitor: "Varies — often 50–70 on Wix", blssWins: true },
      { feature: "Emergency service mode", blss: "Built in (HVAC, plumbing, roofing)", competitor: "Not available", blssWins: true },
      { feature: "Missed call text-back", blss: "Available (+$99/mo)", competitor: "Not available", blssWins: true },
      { feature: "Ongoing optimization", blss: "Included — we manage it", competitor: "You do it yourself", blssWins: true },
    ],
    whyContractorsLeave: [
      "Wix sites rarely appear in Google's Local Pack — the primary source of contractor calls",
      "Templates are designed for retail and portfolios, not lead conversion for trades",
      "No click-to-call optimization, sticky mobile bars, or contractor-specific CTAs out of the box",
      "Adding schema markup requires apps or manual code — most contractors never do it",
      "Page speed on Wix is notoriously poor — often 5+ seconds on mobile",
      "DIY means time away from jobs — most contractors never finish setting it up correctly",
    ],
    whoTheyreFor:
      "Small businesses that need a basic online presence with full creative control and are willing to invest their own time in building and managing it.",
    whoBlssIsFor:
      "Contractors who want a site that generates calls — built and managed for them — without spending time learning a website platform.",
    bottomLine:
      "Wix gives you tools. Best Local Service Sites gives you results. The difference is contractor-specific: schema markup, city landing pages, mobile call optimization, and ongoing management are built in from day one.",
    faq: [
      {
        q: "Can a Wix site rank in Google's Local Pack for contractor searches?",
        a: "Rarely. Ranking in the Local Pack requires proper LocalBusiness schema, city-specific landing pages, and a fast mobile experience. Wix requires plugins and manual setup for all three — most contractors never complete this correctly.",
      },
      {
        q: "How much time does it take to properly set up a Wix site for a contractor?",
        a: "Done correctly — with schema, city pages, mobile optimization, and conversion elements — 40–80 hours. Most contractors partially complete it and end up with a slow site that doesn't rank or convert.",
      },
      {
        q: "Is Wix fast enough for mobile users?",
        a: "Wix sites typically score 50–70 on Google's PageSpeed Insights for mobile. Studies show a 1-second delay in mobile load time reduces conversions by 20%. BLSS targets 90+ Lighthouse scores.",
      },
    ],
    metaTitle: "Wix vs Best Local Service Sites | Contractor Website Comparison",
    metaDescription:
      "Wix is DIY. Best Local Service Sites is done-for-you with contractor-specific SEO built in. See the difference in Local Pack rankings, mobile speed, and lead conversion.",
  },
  {
    slug: "squarespace",
    name: "Squarespace",
    category: "website-builder",
    categoryLabel: "DIY Website Builder",
    tagline: "Squarespace makes beautiful websites for everyone",
    url: "https://www.squarespace.com",
    heroHeadline: "Squarespace vs Best Local Service Sites",
    heroSubheadline:
      "Beautiful sites that don't rank. Here's why contractors need more than design.",
    intro:
      "Squarespace is a premium DIY website builder known for clean, design-forward templates. It's popular with creatives, restaurants, and retail brands. For home service contractors, however, aesthetics alone don't generate calls — local search visibility does.",
    theirPitch:
      "Squarespace offers award-winning templates, a drag-and-drop editor, and built-in SEO tools to help any business build a beautiful, functional website.",
    setupCost: "Free trial, then $25–$99/mo",
    monthlyCost: "$25–$36/mo (Business plans, billed annually)",
    contractLength: "Annual or monthly",
    leadCost: null,
    timeToLive: "Immediate (DIY)",
    localSEO: false,
    mobileOptimized: true,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Design quality", blss: "Contractor-conversion focused", competitor: "Beautiful — built for creatives", blssWins: true },
      { feature: "Setup", blss: "Done-for-you", competitor: "DIY — steep learning curve", blssWins: true },
      { feature: "Local SEO", blss: "Built in — schema, city pages, GBP guide", competitor: "Basic meta tags only", blssWins: true },
      { feature: "Monthly cost", blss: "$249/mo (fully managed)", competitor: "$25–$36/mo (self-managed)", blssWins: false },
      { feature: "Click-to-call optimization", blss: "Sticky bar + header + hero", competitor: "Manual — no contractor template", blssWins: true },
      { feature: "Mobile Lighthouse score", blss: "90+", competitor: "Typically 60–80", blssWins: true },
      { feature: "City landing pages", blss: "Included (up to 3)", competitor: "Build manually for each city", blssWins: true },
      { feature: "Conversion Pack", blss: "+$99/mo — SMS follow-up", competitor: "Not available", blssWins: true },
      { feature: "Contractor-specific CTAs", blss: "Emergency mode, 24/7 badges", competitor: "Generic buttons only", blssWins: true },
      { feature: "Ongoing management", blss: "Included", competitor: "You handle everything", blssWins: true },
    ],
    whyContractorsLeave: [
      "Looks great but doesn't rank — beautiful sites without schema don't appear in Local Pack",
      "No contractor-specific features: no sticky call bar, no emergency mode, no city pages",
      "Mobile performance is acceptable but not optimized for 90+ Lighthouse targets",
      "Every customization requires your time — contractors spend hours tweaking instead of working",
      "Monthly subscription with no ownership benefit if you switch platforms",
      "No follow-up automation — Squarespace captures the lead, then nothing",
    ],
    whoTheyreFor:
      "Creative professionals, restaurants, and retail businesses that prioritize design and are willing to invest time in DIY website management.",
    whoBlssIsFor:
      "Contractors who need a website engineered to rank in local search and convert visitors into calls — built and managed without any DIY time investment.",
    bottomLine:
      "Squarespace wins on design. Best Local Service Sites wins on calls generated. For a contractor, a beautiful site that doesn't rank in the Local Pack generates zero revenue. Conversion is the only metric that matters.",
    faq: [
      {
        q: "Does Squarespace support contractor-specific schema markup?",
        a: "Squarespace provides basic meta tags but does not automatically generate LocalBusiness, Service, or FAQPage schema — the three types that most directly impact Local Pack rankings for contractors.",
      },
      {
        q: "Can I add a sticky mobile call bar to Squarespace?",
        a: "Yes, but it requires custom CSS/JavaScript injection. Most contractors either can't do this themselves or pay a developer to add it — an additional cost that brings the total closer to BLSS pricing.",
      },
      {
        q: "Why does page speed matter for contractor websites?",
        a: "Google uses mobile page speed as a ranking factor, and homeowners searching during an emergency (burst pipe, AC out) will leave a slow site immediately. BLSS targets 90+ Lighthouse scores; Squarespace typically scores 60–80.",
      },
    ],
    metaTitle: "Squarespace vs Best Local Service Sites | Contractor Website Comparison",
    metaDescription:
      "Squarespace builds beautiful sites. Best Local Service Sites builds sites that rank and convert. See why home service contractors need more than design.",
  },
  {
    slug: "godaddy",
    name: "GoDaddy Websites + Marketing",
    category: "website-builder",
    categoryLabel: "DIY Website Builder",
    tagline: "GoDaddy builds your website in minutes with AI",
    url: "https://www.godaddy.com",
    heroHeadline: "GoDaddy vs Best Local Service Sites",
    heroSubheadline:
      "GoDaddy builds websites fast. BLSS builds websites that rank.",
    intro:
      "GoDaddy's Websites + Marketing product offers AI-assisted website creation alongside domain registration and hosting. It's one of the most widely used platforms by small contractors — largely because GoDaddy is often where they registered their domain.",
    theirPitch:
      "GoDaddy uses AI to build your website in minutes, with built-in SEO tools, online marketing integrations, and 24/7 support to help small businesses get online fast.",
    setupCost: "$0 (free trial) or $9.99–$20.99/mo",
    monthlyCost: "$9.99–$20.99/mo",
    contractLength: "Month-to-month or annual",
    leadCost: null,
    timeToLive: "Minutes (AI builder)",
    localSEO: false,
    mobileOptimized: true,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Time to live", blss: "7 days (done-for-you)", competitor: "Minutes (AI builder)", blssWins: false },
      { feature: "Monthly cost", blss: "$249/mo", competitor: "$10–$21/mo", blssWins: false },
      { feature: "Local Pack optimization", blss: "Schema + city pages + GBP guide", competitor: "Basic meta tags — no schema", blssWins: true },
      { feature: "Contractor-specific build", blss: "100% — built for trades", competitor: "Generic AI output", blssWins: true },
      { feature: "Mobile Lighthouse score", blss: "90+", competitor: "Often 40–65 (GoDaddy is slow)", blssWins: true },
      { feature: "City landing pages", blss: "Up to 3 included", competitor: "DIY — no template support", blssWins: true },
      { feature: "Missed call text-back", blss: "+$99/mo", competitor: "Not available", blssWins: true },
      { feature: "Done-for-you", blss: "Yes — we build everything", competitor: "AI-assisted DIY", blssWins: true },
      { feature: "Ongoing management", blss: "Included", competitor: "You manage it", blssWins: true },
      { feature: "Click-to-call bar", blss: "Sticky mobile CTA built in", competitor: "Not available", blssWins: true },
    ],
    whyContractorsLeave: [
      "GoDaddy sites are consistently among the slowest — 40–65 mobile Lighthouse scores are common",
      "AI-generated content is generic and does not rank for local contractor searches",
      "No schema markup means no Local Pack presence",
      "GoDaddy's primary business is domain registration — websites are an upsell, not a specialty",
      "No contractor-specific features: no emergency mode, sticky call bar, or city pages",
      "Customer support is volume-oriented — not specialized for contractor marketing needs",
    ],
    whoTheyreFor:
      "Small businesses that need a basic online presence and already use GoDaddy for domains, prioritizing low cost and speed over SEO performance.",
    whoBlssIsFor:
      "Contractors who need a site optimized for local search rankings, fast mobile performance, and call generation — not just a business card online.",
    bottomLine:
      "GoDaddy gets you online. Best Local Service Sites gets you found. A GoDaddy site with a 50 Lighthouse score and no schema will not appear in the Local Pack. That's where the calls come from.",
    faq: [
      {
        q: "Why do GoDaddy sites score so low on Google PageSpeed?",
        a: "GoDaddy's website builder adds significant JavaScript overhead and does not use Next.js or other modern static generation frameworks. The result is consistently poor mobile performance scores.",
      },
      {
        q: "Does the GoDaddy AI builder add schema markup?",
        a: "No. GoDaddy's AI builder generates basic HTML content without LocalBusiness, Service, or FAQPage schema — the structured data types that drive Local Pack rankings for contractors.",
      },
    ],
    metaTitle: "GoDaddy vs Best Local Service Sites | Contractor Website Comparison",
    metaDescription:
      "GoDaddy gets you online fast. Best Local Service Sites gets you ranked in the Local Pack. See why speed of build is the wrong metric for contractor websites.",
  },
  {
    slug: "housecall-pro",
    name: "Housecall Pro",
    category: "field-service-software",
    categoryLabel: "Field Service Software",
    tagline: "Housecall Pro runs your entire field service business",
    url: "https://www.housecallpro.com",
    heroHeadline: "Housecall Pro vs Best Local Service Sites",
    heroSubheadline:
      "Housecall Pro manages your jobs. BLSS fills your pipeline.",
    intro:
      "Housecall Pro is field service management software that helps home service contractors manage scheduling, dispatching, invoicing, and payments. It includes a basic website feature — but its website is a scheduling tool add-on, not an SEO-optimized lead generation system.",
    theirPitch:
      "Housecall Pro is an all-in-one platform that helps home service professionals manage their business end-to-end — from booking and dispatching to invoicing, payments, and customer communications.",
    setupCost: "$0 (included in subscription)",
    monthlyCost: "$59–$349/mo (tiers vary by team size)",
    contractLength: "Month-to-month or annual",
    leadCost: null,
    timeToLive: "Included with subscription",
    localSEO: false,
    mobileOptimized: true,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Primary purpose", blss: "Lead generation", competitor: "Job/ops management", blssWins: true },
      { feature: "Website SEO", blss: "Core product — Local Pack focus", competitor: "Basic booking page only", blssWins: true },
      { feature: "City landing pages", blss: "Up to 3 included", competitor: "Not available", blssWins: true },
      { feature: "Schema markup", blss: "LocalBusiness + Service + FAQ", competitor: "None", blssWins: true },
      { feature: "Monthly cost", blss: "$249/mo", competitor: "$59–$349/mo (website not the focus)", blssWins: true },
      { feature: "Scheduling & invoicing", blss: "Not included", competitor: "Core feature", blssWins: false },
      { feature: "Mobile Lighthouse score", blss: "90+", competitor: "Varies", blssWins: true },
      { feature: "Emergency mode", blss: "Built in for HVAC, plumbing, roofing", competitor: "Not available", blssWins: true },
      { feature: "Missed call text-back", blss: "+$99/mo (Conversion Pack)", competitor: "Not available as web feature", blssWins: true },
      { feature: "Works alongside other software", blss: "Yes — BLSS is just the website", competitor: "All-in-one — replaces other tools", blssWins: true },
    ],
    whyContractorsLeave: [
      "Housecall Pro's website is a scheduling widget, not a lead generation tool",
      "No city-specific SEO pages — the website doesn't rank for local contractor searches",
      "Pricing jumps sharply at higher tiers — basic website access is the loss leader",
      "Contractors need a separate lead generation strategy regardless of HCP subscription",
      "Website customization is minimal — no emergency mode, no conversion optimization",
    ],
    whoTheyreFor:
      "Established contractors with existing lead flow who need to professionalize their operations — scheduling, dispatch, invoicing, and payments.",
    whoBlssIsFor:
      "Contractors who need to generate more leads through organic search — and can use BLSS alongside their existing operations software.",
    bottomLine:
      "Housecall Pro and Best Local Service Sites solve different problems. HCP manages jobs after the phone rings. BLSS makes the phone ring in the first place. Most growing contractors need both — and BLSS works alongside HCP without conflict.",
    faq: [
      {
        q: "Can I use Housecall Pro and Best Local Service Sites together?",
        a: "Yes. They serve entirely different functions. BLSS generates leads through your website; Housecall Pro manages those jobs after they come in. Many contractors run both.",
      },
      {
        q: "Does Housecall Pro's website help with Google rankings?",
        a: "Not meaningfully. Housecall Pro's website feature is a booking page, not an SEO-optimized contractor site. It lacks schema markup, city-specific pages, and the performance optimization required for Local Pack rankings.",
      },
      {
        q: "What's the cheapest Housecall Pro plan that includes a website?",
        a: "Website features are included in HCP plans, but the website is a basic booking page — not a lead generation tool. You still need a separate SEO-optimized website to appear in local search results.",
      },
    ],
    metaTitle: "Housecall Pro vs Best Local Service Sites | Lead Gen vs Ops Software",
    metaDescription:
      "Housecall Pro manages your jobs. Best Local Service Sites fills your pipeline. See why contractors need both — and which one to prioritize first.",
  },
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    category: "field-service-software",
    categoryLabel: "Field Service Software",
    tagline: "ServiceTitan is the operating system for the trades",
    url: "https://www.servicetitan.com",
    heroHeadline: "ServiceTitan vs Best Local Service Sites",
    heroSubheadline:
      "ServiceTitan runs enterprise trade businesses. BLSS gets independent contractors found online.",
    intro:
      "ServiceTitan is the enterprise-grade field service management platform used by large HVAC, plumbing, and electrical companies. It manages scheduling, dispatch, marketing, and financials at scale. It is not designed for independent contractors or small shops — and its pricing reflects that.",
    theirPitch:
      "ServiceTitan provides the trades industry with an end-to-end platform for managing every aspect of a field service business, from marketing and call booking to dispatch, invoicing, and reporting.",
    setupCost: "$500–$2,500+ (implementation fees)",
    monthlyCost: "$398–$698+/mo (per tech, varies)",
    contractLength: "Annual minimum — often 2–3 year contracts",
    leadCost: null,
    timeToLive: "Weeks to months (implementation)",
    localSEO: false,
    mobileOptimized: true,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Target business size", blss: "1–50 employees", competitor: "20+ employees, enterprise", blssWins: true },
      { feature: "Setup cost", blss: "$499 one-time", competitor: "$500–$2,500+ implementation", blssWins: true },
      { feature: "Monthly cost", blss: "$249/mo", competitor: "$398–$698+/mo per tech", blssWins: true },
      { feature: "Contract length", blss: "Month-to-month", competitor: "Annual or multi-year", blssWins: true },
      { feature: "Time to value", blss: "7 days to live site", competitor: "Weeks to months of implementation", blssWins: true },
      { feature: "Local SEO website", blss: "Core product", competitor: "Marketing add-on, not optimized for Local Pack", blssWins: true },
      { feature: "Scheduling & dispatching", blss: "Not included", competitor: "Core feature", blssWins: false },
      { feature: "Enterprise reporting", blss: "Not included", competitor: "Extensive", blssWins: false },
      { feature: "City landing pages", blss: "Up to 3 included", competitor: "Not a standard feature", blssWins: true },
      { feature: "Works for solo contractors", blss: "Yes — built for 1–50", competitor: "No — minimum team size required", blssWins: true },
    ],
    whyContractorsLeave: [
      "Minimum viable customer is a company with 5+ technicians and significant revenue",
      "Implementation takes weeks and requires dedicated staff time",
      "Multi-year contracts with significant cancellation penalties",
      "Website/marketing features are add-ons, not Local Pack-optimized tools",
      "Per-technician pricing means cost scales with every new hire",
      "Overkill for contractors under $1M revenue — complexity exceeds benefit",
    ],
    whoTheyreFor:
      "Established trade companies with 10+ field technicians, complex dispatch needs, and the revenue to support enterprise software pricing.",
    whoBlssIsFor:
      "Independent contractors and small shops (1–50 employees) who need to generate more leads online without enterprise-level complexity or cost.",
    bottomLine:
      "ServiceTitan is for companies that already have the phones ringing and need to manage the volume. Best Local Service Sites is for contractors who need the phone to ring more. They rarely compete — most ServiceTitan customers are too large to be BLSS customers.",
    faq: [
      {
        q: "Is ServiceTitan appropriate for a solo contractor or small shop?",
        a: "No. ServiceTitan is designed for companies with multiple technicians and complex scheduling needs. The pricing ($400+/month per tech) and implementation complexity make it inappropriate for most contractors under $500K revenue.",
      },
      {
        q: "Does ServiceTitan help with Google Local Pack rankings?",
        a: "ServiceTitan includes marketing features, but its website tools are not optimized for Local Pack rankings in the way that BLSS's schema markup, city pages, and mobile performance optimization are.",
      },
    ],
    metaTitle: "ServiceTitan vs Best Local Service Sites | Enterprise vs Independent Contractor",
    metaDescription:
      "ServiceTitan is built for enterprise trade companies. Best Local Service Sites is built for independent contractors who need to generate more leads online.",
  },
  {
    slug: "thryv",
    name: "Thryv",
    category: "small-business-software",
    categoryLabel: "Small Business Software",
    tagline: "Thryv is the all-in-one small business management platform",
    url: "https://www.thryv.com",
    heroHeadline: "Thryv vs Best Local Service Sites",
    heroSubheadline:
      "Thryv does everything. BLSS does one thing extremely well.",
    intro:
      "Thryv is an all-in-one small business platform combining CRM, scheduling, invoicing, reputation management, and website building. For contractors, the appeal is consolidation — one platform instead of several. The trade-off is that no feature is best-in-class when every feature is average.",
    theirPitch:
      "Thryv is a complete small business platform with CRM, scheduling, invoicing, marketing, and reputation management in one place — so business owners can manage everything from a single dashboard.",
    setupCost: "Varies — often $0 setup with annual commitment",
    monthlyCost: "$199–$499/mo (varies by features)",
    contractLength: "Annual contract typically required",
    leadCost: null,
    timeToLive: "1–2 weeks (onboarding process)",
    localSEO: false,
    mobileOptimized: true,
    doneForYou: true,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: true,
    comparisonTable: [
      { feature: "Website SEO quality", blss: "Contractor-specific — Local Pack focused", competitor: "Generic — not trade-specific", blssWins: true },
      { feature: "City landing pages", blss: "Up to 3 included", competitor: "Not available", blssWins: true },
      { feature: "Schema markup", blss: "LocalBusiness + Service + FAQ", competitor: "Basic only", blssWins: true },
      { feature: "Monthly cost", blss: "$249/mo", competitor: "$199–$499/mo", blssWins: true },
      { feature: "Contract", blss: "Month-to-month", competitor: "Annual — hard to exit", blssWins: true },
      { feature: "CRM included", blss: "No", competitor: "Yes — full CRM", blssWins: false },
      { feature: "Invoicing", blss: "No", competitor: "Yes", blssWins: false },
      { feature: "Reputation management", blss: "No", competitor: "Yes", blssWins: false },
      { feature: "Emergency service mode", blss: "Built in", competitor: "Not available", blssWins: true },
      { feature: "Lighthouse performance", blss: "90+ target", competitor: "Typically 55–75", blssWins: true },
    ],
    whyContractorsLeave: [
      "Website SEO is average — not optimized for contractor Local Pack rankings",
      "Annual contracts are difficult and costly to exit",
      "All-in-one means none of the features are best-in-class",
      "No city-specific landing pages — a core requirement for multi-area contractors",
      "Mobile page speed is consistently lower than static-generated sites",
      "Pricing is competitive but the website quality doesn't justify switching from a specialist",
    ],
    whoTheyreFor:
      "Small business owners who want to consolidate CRM, invoicing, scheduling, and marketing into one platform and are willing to accept average website SEO quality.",
    whoBlssIsFor:
      "Contractors who prioritize lead generation above all else and want a specialist-built website alongside whatever other tools they already use.",
    bottomLine:
      "Thryv trades depth for breadth. Best Local Service Sites does one thing — contractor lead generation through web — and does it with contractor-specific schema, city pages, and mobile performance that Thryv can't match. They can be used together: BLSS for the website, Thryv (or another CRM) for everything else.",
    faq: [
      {
        q: "Does Thryv provide city-specific landing pages for multi-location contractors?",
        a: "No. Thryv's website builder does not generate city-specific landing pages targeting local search queries. This is one of the primary drivers of Local Pack visibility for contractors serving multiple areas.",
      },
      {
        q: "Can I use Best Local Service Sites instead of Thryv's website?",
        a: "Yes. Many contractors use BLSS for their website and a separate CRM or operations tool for scheduling and invoicing. BLSS integrates with any third-party booking or CRM through standard form capture.",
      },
      {
        q: "How does Thryv's reputation management compare to just getting Google reviews?",
        a: "Thryv centralizes review requests across platforms. Google reviews are the only ones that directly impact Local Pack rankings — and you can run a simple review request process without paying for Thryv's platform.",
      },
    ],
    metaTitle: "Thryv vs Best Local Service Sites | All-in-One vs Specialist Contractor Website",
    metaDescription:
      "Thryv does everything average. Best Local Service Sites does contractor lead generation exceptionally well. See the website SEO gap.",
  },
  {
    slug: "yelp",
    name: "Yelp for Business",
    category: "review-platform",
    categoryLabel: "Review & Advertising Platform",
    tagline: "Yelp connects people with great local businesses",
    url: "https://biz.yelp.com",
    heroHeadline: "Yelp vs Best Local Service Sites",
    heroSubheadline:
      "Yelp charges for advertising, not results. Here's a model built around owning your traffic.",
    intro:
      "Yelp for Business offers local advertising placement and a business profile to home service contractors. Advertising on Yelp means paying for placement in a competitor-filled marketplace where homeowners see your reviews next to your competitors' reviews.",
    theirPitch:
      "Yelp for Business helps local service providers reach high-intent customers through targeted ads and a trusted review platform with millions of monthly users.",
    setupCost: "Free profile — ads start at $300+/mo",
    monthlyCost: "$300–$1,000+/mo for meaningful visibility",
    contractLength: "Flexible — monthly",
    leadCost: "$20–$80 per click (not per lead)",
    timeToLive: "Immediate (listing)",
    localSEO: false,
    mobileOptimized: false,
    doneForYou: false,
    emergencyMode: false,
    schemaMarkup: false,
    cityPages: false,
    missedCallTextback: false,
    comparisonTable: [
      { feature: "Cost model", blss: "$249/mo flat — no per-click", competitor: "Per click — $20–$80 each", blssWins: true },
      { feature: "Lead exclusivity", blss: "Exclusive — your site, your leads", competitor: "Your ad runs next to competitors", blssWins: true },
      { feature: "Own the asset", blss: "Yes — your website", competitor: "No — Yelp profile only", blssWins: true },
      { feature: "Google Local Pack", blss: "Built in — schema + city pages", competitor: "No direct benefit", blssWins: true },
      { feature: "Negative review risk", blss: "None on your own site", competitor: "Public — affects all future traffic", blssWins: true },
      { feature: "Monthly predictability", blss: "Fixed — $249/mo", competitor: "Unpredictable spend", blssWins: true },
      { feature: "Visibility", blss: "Organic search — durable", competitor: "Paid — stops when billing stops", blssWins: true },
      { feature: "Setup", blss: "Done-for-you", competitor: "Self-managed ads", blssWins: true },
      { feature: "Review platform", blss: "Not included", competitor: "Yes — review aggregation", blssWins: false },
      { feature: "Long-term value", blss: "Compounding organic rankings", competitor: "Zero — paid visibility only", blssWins: true },
    ],
    whyContractorsLeave: [
      "Yelp ads place you next to competitors — a homeowner sees your ad and two competitor profiles simultaneously",
      "Cost-per-click model means you pay for traffic that may never convert",
      "One unfair negative review can tank an entire Yelp advertising investment",
      "Yelp's algorithm is opaque — contractors report unexplained visibility drops",
      "No website ownership — you cannot export your Yelp presence to anything you own",
      "Monthly spend with zero asset accumulation — pause the ads, all visibility disappears",
    ],
    whoTheyreFor:
      "Businesses where word-of-mouth and reviews are the primary decision driver, particularly restaurants and retail where Yelp's consumer base is most active.",
    whoBlssIsFor:
      "Home service contractors who want owned, organic visibility in Google search — not paid placement in a review marketplace.",
    bottomLine:
      "Yelp rents you visibility in their ecosystem. Best Local Service Sites builds visibility you own in Google's ecosystem. For home service contractors, Google search is where the highest-intent leads come from — not Yelp.",
    faq: [
      {
        q: "Do Yelp ads help with Google rankings?",
        a: "No. Yelp advertising improves your visibility on Yelp, not in Google search results. Google's Local Pack is driven by your website's schema markup, Google Business Profile, and city-specific landing pages — none of which Yelp affects.",
      },
      {
        q: "Is Yelp effective for home service contractors?",
        a: "Yelp is more effective for restaurants and retail than for home services. Homeowners searching for emergency plumbers, HVAC repair, or roofing contractors typically search Google — not Yelp. Google's Local Pack is where contractor calls come from.",
      },
      {
        q: "What happens to my Yelp investment if I get a negative review?",
        a: "Negative reviews on Yelp are permanent and visible to every future potential customer seeing your ads. Unlike your own website, you cannot control how your business is presented on Yelp.",
      },
    ],
    metaTitle: "Yelp vs Best Local Service Sites | Paid Visibility vs Owned Traffic",
    metaDescription:
      "Yelp charges per click in a competitor-filled marketplace. Best Local Service Sites builds owned organic traffic in Google. See which model scales.",
  },
];

export const competitorMap: Record<string, Competitor> = Object.fromEntries(
  competitors.map((c) => [c.slug, c])
);

export function getAllCompetitorSlugs(): string[] {
  return competitors.map((c) => c.slug);
}
