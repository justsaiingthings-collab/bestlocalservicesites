import { industries, industryMap, Industry } from "./industries";
import { cities, cityMap, City } from "./cities";

export type PageType =
  | "service"
  | "emergency-service"
  | "local-service"
  | "best-service"
  | "near-me"
  | "services-near-me"
  | "repair"
  | "installation"
  | "company"
  | "24h-emergency"
  | "affordable"
  | "professional"
  | "city"
  | "city-emergency"
  | "city-best";

export interface PageSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface GeneratedPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  faq: { q: string; a: string }[];
  stats: { label: string; value: string }[];
  comparisons: { bad: string; good: string }[];
  pageType: PageType;
  industry: Industry;
  city?: City;
  ctaHeadline: string;
  ctaBody: string;
}

// ─── Slug generation ─────────────────────────────────────────────────────────

function nonCitySlugs(ind: Industry): { slug: string; type: PageType }[] {
  const s = ind.slug;
  const results: { slug: string; type: PageType }[] = [
    { slug: `${s}-service`, type: "service" },
    { slug: `local-${s}-service`, type: "local-service" },
    { slug: `best-${s}-service`, type: "best-service" },
    { slug: `${s}-near-me`, type: "near-me" },
    { slug: `${s}-services-near-me`, type: "services-near-me" },
    { slug: `${s}-company`, type: "company" },
    { slug: `affordable-${s}-service`, type: "affordable" },
    { slug: `professional-${s}-service`, type: "professional" },
  ];
  if (ind.isEmergency) {
    results.push({ slug: `emergency-${s}-service`, type: "emergency-service" });
    results.push({ slug: `24-hour-emergency-${s}`, type: "24h-emergency" });
  }
  // repair — skip for builds/cleaning/pool
  const skipRepair = ["custom-home-builders", "landscaping", "cleaning", "window-cleaning", "pressure-washing", "carpet-cleaning", "chimney"];
  if (!skipRepair.includes(s)) {
    results.push({ slug: `${s}-repair`, type: "repair" });
  }
  // installation — skip for cleaning/carpet/window/pressure/chimney/handyman
  const skipInstall = ["cleaning", "carpet-cleaning", "window-cleaning", "pressure-washing", "chimney", "handyman", "pest-control"];
  if (!skipInstall.includes(s)) {
    results.push({ slug: `${s}-installation`, type: "installation" });
  }
  return results;
}

function citySlugs(ind: Industry): { slug: string; type: PageType; citySlug: string }[] {
  const results: { slug: string; type: PageType; citySlug: string }[] = [];
  for (const city of cities) {
    results.push({ slug: `${ind.personSlug}-${city.slug}`, type: "city", citySlug: city.slug });
    results.push({ slug: `best-${ind.personSlug}-${city.slug}`, type: "city-best", citySlug: city.slug });
    if (ind.isEmergency) {
      results.push({ slug: `emergency-${ind.personSlug}-${city.slug}`, type: "city-emergency", citySlug: city.slug });
    }
  }
  return results;
}

export function getAllIndustrySlugs(): string[] {
  const slugs: string[] = [];
  for (const ind of industries) {
    for (const { slug } of nonCitySlugs(ind)) slugs.push(slug);
    for (const { slug } of citySlugs(ind)) slugs.push(slug);
  }
  return slugs;
}

// ─── Slug parser ─────────────────────────────────────────────────────────────

interface ParsedSlug {
  industry: Industry;
  city?: City;
  type: PageType;
}

export function parseIndustrySlug(slug: string): ParsedSlug | null {
  for (const ind of industries) {
    // non-city patterns
    for (const { slug: s, type } of nonCitySlugs(ind)) {
      if (s === slug) return { industry: ind, type };
    }
    // city patterns
    for (const { slug: s, type, citySlug } of citySlugs(ind)) {
      if (s === slug) {
        const city = cityMap[citySlug];
        if (city) return { industry: ind, city, type };
      }
    }
  }
  return null;
}

// ─── Content generators ───────────────────────────────────────────────────────

export function generatePage(slug: string): GeneratedPage | null {
  const parsed = parseIndustrySlug(slug);
  if (!parsed) return null;
  const { industry: ind, city, type } = parsed;

  switch (type) {
    case "service":         return genServicePage(ind, slug);
    case "emergency-service": return genEmergencyServicePage(ind, slug);
    case "local-service":   return genLocalServicePage(ind, slug);
    case "best-service":    return genBestServicePage(ind, slug);
    case "near-me":         return genNearMePage(ind, slug);
    case "services-near-me": return genServicesNearMePage(ind, slug);
    case "repair":          return genRepairPage(ind, slug);
    case "installation":    return genInstallationPage(ind, slug);
    case "company":         return genCompanyPage(ind, slug);
    case "24h-emergency":   return gen24hEmergencyPage(ind, slug);
    case "affordable":      return genAffordablePage(ind, slug);
    case "professional":    return genProfessionalPage(ind, slug);
    case "city":            return city ? genCityPage(ind, city, slug) : null;
    case "city-emergency":  return city ? genCityEmergencyPage(ind, city, slug) : null;
    case "city-best":       return city ? genCityBestPage(ind, city, slug) : null;
    default:                return null;
  }
}

// ─── Individual page generators ──────────────────────────────────────────────

function genServicePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `${ind.namePlural}: Find a Licensed ${ind.tradesperson} Near You | Best Local Service Sites`,
    metaDescription: `Find licensed, insured ${ind.tradespersonPlural.toLowerCase()} for any ${ind.name.toLowerCase()} job. ${ind.heroTagline}`,
    h1: `${ind.namePlural}: Find a Licensed Professional Near You`,
    intro: `When it comes to ${ind.name.toLowerCase()}, homeowners across the United States face the same challenge: finding a qualified, reliable professional who will show up on time, do the job right, and charge a fair price. ${ind.description} At Best Local Service Sites, we build conversion-optimized websites that help local ${ind.tradespersonPlural.toLowerCase()} reach the homeowners who need them most — so you spend less time searching and more time getting the work done.`,
    sections: [
      {
        h2: `What Do ${ind.namePlural} Cover?`,
        paragraphs: [
          `${ind.name} is a broad category of home services that covers a wide range of needs, from routine maintenance to urgent emergency repairs. Whether you're dealing with a ${ind.commonProblems[0].toLowerCase()} or planning a larger project, understanding the full scope of what ${ind.tradespersonPlural.toLowerCase()} do helps you find the right professional for the job.`,
          `The most commonly requested ${ind.name.toLowerCase()} include work across both routine maintenance and emergency response. Homeowners who establish a relationship with a trusted local ${ind.tradesperson.toLowerCase()} before an emergency strikes are far better positioned when urgent issues arise.`,
        ],
        bullets: ind.services,
      },
      {
        h2: `Common ${ind.name} Problems Homeowners Face`,
        paragraphs: [
          `Across thousands of homeowner conversations and online forums, certain ${ind.name.toLowerCase()} problems come up again and again. Understanding what you're likely dealing with before you call a professional helps you communicate the problem clearly and evaluate whether the proposed solution makes sense.`,
          `The most frequently reported issues include situations that range from minor inconveniences to urgent safety concerns. Knowing when a problem genuinely requires immediate professional attention versus when it can wait for a scheduled appointment is an important part of being an informed homeowner.`,
        ],
        bullets: ind.commonProblems,
      },
      {
        h2: `Why Local ${ind.name} Professionals Outperform National Chains`,
        paragraphs: [
          ind.whyLocalMatters,
          `National chains and franchise networks often promise standardized service but deliver inconsistent results. Technicians dispatched from a regional dispatch center may not know local conditions, local building codes, or the specific challenges common to your neighborhood's housing stock. A locally owned and operated ${ind.name.toLowerCase()} company has skin in the game — their reputation lives and dies in your community.`,
          `The practical difference shows up in response time, diagnostic accuracy, and the quality of the final result. Local ${ind.tradespersonPlural.toLowerCase()} with deep community roots maintain higher standards because their next ten customers will hear about your experience.`,
        ],
      },
      {
        h2: `What Real Homeowners Say About Finding ${ind.tradespersonPlural}`,
        paragraphs: [
          `Online forums and review platforms reveal a consistent set of frustrations homeowners experience when searching for ${ind.name.toLowerCase()} help. These pain points aren't just anecdotal — they represent systematic gaps in how most ${ind.name.toLowerCase()} companies present themselves and communicate with potential customers.`,
          `The homeowners who have the best experiences share a common thread: they found a ${ind.tradesperson.toLowerCase()} through a professional, informative online presence that made it easy to understand what was offered, what it would cost, and how to get in touch quickly.`,
        ],
        bullets: ind.redditPainPoints.map((p) => `"${p}"`),
      },
      {
        h2: `How to Evaluate a ${ind.tradesperson} Before Hiring`,
        paragraphs: [
          `The difference between a great ${ind.name.toLowerCase()} experience and a nightmare often comes down to the vetting process. Homeowners who take ten minutes to verify a few key credentials before signing anything dramatically reduce their risk of a bad outcome.`,
          `Start with licensing. Most states require ${ind.tradespersonPlural.toLowerCase()} to hold a state-issued license, and you can verify any license number through your state's contractor licensing board website. Licensing requirements exist to protect homeowners — don't skip this step even for smaller jobs.`,
          `Beyond licensing, look for verifiable insurance (general liability and workers' compensation), a physical business address (not just a phone number), verifiable Google reviews from real customers in your area, and a clear written estimate before any work begins. A contractor who resists providing any of these should not be hired.`,
        ],
      },
      {
        h2: `How Best Local Service Sites Helps ${ind.tradespersonPlural} Reach More Customers`,
        paragraphs: [
          `Best Local Service Sites builds conversion-first websites specifically for home service contractors like ${ind.tradespersonPlural.toLowerCase()}. Unlike generic website builders or expensive marketing agencies, we specialize exclusively in the trades — which means every element of the sites we build is designed to convert a homeowner searching for ${ind.name.toLowerCase()} into a phone call or booked appointment.`,
          `Every site we build includes a sticky mobile call bar so your phone number is always visible, city-specific landing pages targeting local search terms, schema markup for Google's local results, and an integrated lead capture system that works even when you're on a job and can't answer the phone.`,
          `The result is a web presence that works for you around the clock — generating calls while you're focused on doing the actual work.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Are You a ${ind.tradesperson} Looking to Grow?`,
    ctaBody: `We build websites that get your phone ringing. No long contracts, no guesswork — just a professional site engineered to convert local homeowners into calls and booked jobs.`,
    pageType: "service",
    industry: ind,
  };
}

function genEmergencyServicePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `Emergency ${ind.namePlural} — 24/7 Response | Best Local Service Sites`,
    metaDescription: `Experiencing a ${ind.name.toLowerCase()} emergency? Find licensed 24/7 emergency ${ind.tradespersonPlural.toLowerCase()} in your area. Fast response, professional service.`,
    h1: `Emergency ${ind.namePlural}: 24/7 Response When You Need It Most`,
    intro: `A ${ind.name.toLowerCase()} emergency doesn't wait for business hours. Whether it's ${ind.commonProblems[0].toLowerCase()} or ${ind.commonProblems[1].toLowerCase()}, the difference between a fast professional response and hours of waiting can mean thousands of dollars in additional damage. ${ind.heroTagline} This guide covers what constitutes a genuine emergency, how to find a reliable 24/7 ${ind.tradesperson.toLowerCase()}, and what to expect when you make that urgent call.`,
    sections: [
      {
        h2: `What Counts as a ${ind.name} Emergency?`,
        paragraphs: [
          `Not every ${ind.name.toLowerCase()} problem requires emergency service — and emergency rates typically run 1.5–2x the standard rate. Knowing the difference between a true emergency and a problem that can wait until the next business day protects you from unnecessary expense while ensuring you get help when it genuinely matters.`,
          `True ${ind.name.toLowerCase()} emergencies are situations where waiting causes additional property damage, creates a health or safety risk, or renders your home unusable. The problems below represent the most common genuine emergencies homeowners face.`,
        ],
        bullets: ind.commonProblems.slice(0, 5).map((p) => `${p} — requires immediate attention`),
      },
      {
        h2: `How to Find a Legitimate 24/7 Emergency ${ind.tradesperson}`,
        paragraphs: [
          `When you're dealing with a ${ind.name.toLowerCase()} emergency, the pressure to call the first number you find is real. But taking two minutes to verify a few key facts before you commit can prevent you from getting price-gouged or being let down by a company that isn't actually equipped to handle your situation.`,
          `A legitimate 24/7 emergency ${ind.tradesperson.toLowerCase()} will confirm their availability before you hang up, provide a rough estimate of arrival time, have verifiable reviews from past emergency customers, and quote you a price before beginning work. Any company that refuses to discuss pricing before starting should be avoided.`,
          `Search specifically for local ${ind.tradespersonPlural.toLowerCase()} with "24/7" or "emergency" in their Google Business Profile and recent reviews mentioning emergency service. A company that advertises 24/7 service but has no emergency-specific reviews may not deliver on that promise.`,
        ],
      },
      {
        h2: `What to Do While Waiting for Emergency ${ind.namePlural}`,
        paragraphs: [
          `While you're waiting for the ${ind.tradesperson.toLowerCase()} to arrive, there are steps you can take to minimize damage and make the technician's job easier when they get there.`,
          `${ind.whyLocalMatters} This is especially true in an emergency, when a technician familiar with your area's infrastructure can often diagnose problems faster than someone unfamiliar with local conditions.`,
          `Document everything with photos before the technician arrives. This is important for any insurance claims and helps establish the scope of the damage at the time of the emergency call. Don't clean up or hide damage — document it accurately.`,
        ],
      },
      {
        h2: `Emergency ${ind.name} Costs: What to Expect`,
        paragraphs: [
          `Emergency service commands premium pricing — that's simply the reality of paying for availability outside of normal business hours. For most ${ind.name.toLowerCase()} trades, expect to pay 1.5–2x the standard rate for true emergency calls. ${ind.tradesperson} jobs typically run ${ind.avgJobValue}, with emergency premiums on top of that.`,
          `The most important protection is getting a written estimate before authorizing any work. Reputable emergency service companies will provide an estimate even in urgent situations. Be extremely cautious of any contractor who refuses to discuss pricing before starting work, especially in emergency situations where you feel you have no choice.`,
          `If the emergency service company pressures you to sign anything before explaining all costs, or if the price quoted over the phone differs dramatically from what appears on the final invoice, you have grounds to dispute the charge.`,
        ],
      },
      {
        h2: `Preventing Future ${ind.name} Emergencies`,
        paragraphs: [
          `Most ${ind.name.toLowerCase()} emergencies don't happen without warning. In hindsight, there are almost always early warning signs that could have been addressed during a routine maintenance visit before becoming an urgent crisis. The homeowners who experience the fewest emergencies are those who establish a relationship with a trusted local ${ind.tradesperson.toLowerCase()} and schedule regular maintenance.`,
          `Annual or semi-annual professional inspections catch problems at the repair stage before they become emergency replacements. The cost of a scheduled maintenance visit is almost always less than the emergency service premium plus the additional damage caused by delayed response.`,
        ],
        bullets: ind.services.slice(0, 4).map((s) => `Proactive ${s.toLowerCase()} can prevent emergency situations`),
      },
      {
        h2: `How Best Local Service Sites Connects You with Emergency ${ind.tradespersonPlural}`,
        paragraphs: [
          `We build websites for emergency-ready ${ind.name.toLowerCase()} contractors that make it crystal clear they're available 24/7. Our sites feature pulsing emergency CTAs, click-to-call buttons that work on every device, and instant lead capture that notifies contractors the moment a homeowner submits their information.`,
          `If you're a ${ind.tradesperson.toLowerCase()} who offers emergency service, your website needs to communicate that immediately — in the first three seconds a homeowner lands on your page. We build that urgency into every element of the site design.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Emergency ${ind.name} Professional?`,
    ctaBody: `Make sure homeowners can find you when it matters most. We build websites that put your emergency availability front and center.`,
    pageType: "emergency-service",
    industry: ind,
  };
}

function genLocalServicePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `Local ${ind.namePlural} Near You | Best Local Service Sites`,
    metaDescription: `Find trusted local ${ind.tradespersonPlural.toLowerCase()} in your area. Licensed, insured, and reviewed by real customers. ${ind.heroTagline}`,
    h1: `Local ${ind.namePlural}: Why Choosing a Nearby Professional Makes All the Difference`,
    intro: `There's a meaningful difference between a local ${ind.tradesperson.toLowerCase()} who has served your neighborhood for years and a national dispatch service sending whoever happens to be available. ${ind.whyLocalMatters} This guide explains how to find a genuinely local ${ind.name.toLowerCase()} professional, what questions to ask, and why the extra effort to find a local expert is almost always worth it.`,
    sections: [
      {
        h2: `What "Local" Really Means for ${ind.namePlural}`,
        paragraphs: [
          `In the home services industry, "local" has been diluted by national franchises and lead generation aggregators who present themselves as local while dispatching from regional hubs. A truly local ${ind.name.toLowerCase()} company is one that has a physical presence in your community, whose technicians know your specific neighborhood, and whose reputation depends on word-of-mouth from your neighbors.`,
          `The practical implications are significant. A truly local ${ind.tradesperson.toLowerCase()} can respond faster, knows local building codes and permit requirements, has established supplier relationships that can reduce parts costs, and has a direct reputational stake in every job they complete.`,
          `When evaluating whether a company is genuinely local, look for a local phone number (not an 800 number), a physical address you can verify on Google Maps, Google reviews that mention specific local neighborhoods, and technicians who are clearly familiar with your area when you speak with them.`,
        ],
      },
      {
        h2: `The Advantages of Hiring a Local ${ind.tradesperson}`,
        paragraphs: [
          `${ind.whyLocalMatters} Beyond that core advantage, local ${ind.tradespersonPlural.toLowerCase()} offer several practical benefits that national services simply can't match.`,
          `Response times for local contractors are typically 30–60% faster than national dispatch services for the same metropolitan area. When you're dealing with ${ind.commonProblems[0].toLowerCase()}, that time difference translates directly into reduced damage and cost.`,
          `Local contractors also have better accountability mechanisms. Their business survives on neighborhood reputation and repeat customers. A national franchise can absorb a few bad reviews — a local operator cannot afford to do poor work and stay in business.`,
        ],
        bullets: [
          "Faster response times — no cross-city dispatch",
          "Knowledge of local building codes and permit requirements",
          "Established relationships with local parts suppliers",
          "Accountability to community reputation and word-of-mouth",
          "Familiarity with local housing stock and common issues",
          "Easier follow-up if problems arise after the job",
        ],
      },
      {
        h2: `How to Verify a ${ind.tradesperson} Is Genuinely Local`,
        paragraphs: [
          `With so many national aggregators masquerading as local services, verification has become a necessary step. A few quick checks reveal whether a company is truly local or simply a franchise dispatching from a regional hub.`,
          `Start by searching the company name on Google Maps and confirming their business address is actually in your area. Call the number on their website — a local business will typically answer with the company name, not a generic call center greeting. Ask where their technicians are based and how quickly they can respond.`,
          `Finally, look at their Google reviews. Genuine local businesses have reviews that mention specific neighborhoods, local landmarks, and specific technicians by name. Reviews that are generic and templated are often a sign of a national franchise or a reputation management service, not authentic local customers.`,
        ],
      },
      {
        h2: `Local ${ind.namePlural} vs. National Chains: A Comparison`,
        paragraphs: [
          `To make an informed decision, it's worth understanding how local ${ind.name.toLowerCase()} companies and national chains compare across the factors that matter most to homeowners.`,
        ],
        table: {
          headers: ["Factor", `Local ${ind.tradesperson}`, "National Chain"],
          rows: [
            ["Response Time", "1–3 hours typical", "4–12 hours typical"],
            ["Local Knowledge", "Deep neighborhood familiarity", "Generic regional knowledge"],
            ["Accountability", "Direct community reputation", "Corporate complaint process"],
            ["Pricing", "Competitive local rates", "Standardized (often higher) pricing"],
            ["Consistency", "Same technician often possible", "Rotating dispatch"],
            ["Follow-up", "Direct contractor access", "Customer service queue"],
          ],
        },
      },
      {
        h2: `Finding the Best Local ${ind.tradesperson} for Your Situation`,
        paragraphs: [
          `The most reliable way to find a trusted local ${ind.tradesperson.toLowerCase()} is a combination of neighbor referrals and verified online reviews. Start by asking neighbors, friends, or local community groups who they've used and would use again. Then verify the recommendation online — even a referral deserves a quick check of recent reviews before you call.`,
          `Google Maps is your best research tool. Search for ${ind.tradespersonPlural.toLowerCase()} in your city, sort by rating, and read the 3 and 4-star reviews carefully. Those tend to be more honest than five-star reviews and give you a realistic picture of what to expect.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Local ${ind.tradespersonPlural}: Get Your Business Found First`,
    ctaBody: `We build hyper-local websites for ${ind.name.toLowerCase()} contractors that rank in every city you serve. Get more calls from homeowners in your area who are searching right now.`,
    pageType: "local-service",
    industry: ind,
  };
}

function genBestServicePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `Best ${ind.namePlural} — How to Find the Right Professional | Best Local Service Sites`,
    metaDescription: `Searching for the best ${ind.tradesperson.toLowerCase()}? Here's exactly what to look for, what to avoid, and how to make the right choice for your home.`,
    h1: `How to Find the Best ${ind.namePlural} for Your Home`,
    intro: `Searching for the "best ${ind.name.toLowerCase()} service" online returns dozens of options — and very few reliable signals about which one is actually right for your situation. ${ind.description} This guide cuts through the noise and gives you a practical, experience-tested framework for identifying the best ${ind.tradespersonPlural.toLowerCase()} in your area, evaluating their qualifications, and making a confident hiring decision.`,
    sections: [
      {
        h2: `What Separates the Best ${ind.tradespersonPlural} from the Rest`,
        paragraphs: [
          `The best ${ind.name.toLowerCase()} professionals share a specific set of characteristics that go beyond technical skill. While technical competence is the baseline requirement, it's rarely what separates a great experience from a frustrating one.`,
          `Communication is the most consistent predictor of a positive outcome. The best ${ind.tradespersonPlural.toLowerCase()} respond quickly to inquiries, provide clear explanations before work begins, and follow up proactively if anything changes during the job. Contractors who are difficult to reach before you hire them are a reliable preview of how they'll behave if a problem arises after the work is done.`,
          `Transparency about pricing is equally important. The best ${ind.tradespersonPlural.toLowerCase()} provide itemized written estimates, explain what's included, and don't surprise you with additional charges that weren't discussed. This doesn't mean they'll always be the cheapest — but it does mean you'll know exactly what you're paying for.`,
        ],
      },
      {
        h2: `The Five-Point Checklist for Evaluating Any ${ind.tradesperson}`,
        paragraphs: [
          `Before hiring any ${ind.tradesperson.toLowerCase()}, run through this five-point evaluation. It takes about fifteen minutes and can save you thousands of dollars and significant frustration.`,
        ],
        bullets: [
          `Licensing: Verify their state ${ind.name.toLowerCase()} license through your state's contractor licensing board website`,
          `Insurance: Confirm they carry general liability and workers' compensation insurance — ask for a certificate`,
          `Reviews: Read at least 10–15 recent Google reviews, paying special attention to 3-star reviews for honest assessments`,
          `Written estimate: Require a detailed written estimate before authorizing any work`,
          `References: Ask for references from at least two recent similar jobs, then actually call them`,
        ],
      },
      {
        h2: `Red Flags That Signal a Problem ${ind.tradesperson}`,
        paragraphs: [
          `Just as important as knowing what to look for is knowing what to avoid. Certain behaviors are reliable warning signs of a contractor who will likely deliver a disappointing result — or worse, cause additional damage that you'll have to pay someone else to fix.`,
          `High-pressure tactics — pushing you to sign or pay immediately, creating artificial urgency, or refusing to provide a written estimate — are consistent warning signs. Legitimate ${ind.tradespersonPlural.toLowerCase()} are confident in their work and don't need to pressure homeowners into rapid decisions.`,
        ],
        bullets: ind.redditPainPoints.map((p) => `Warning: "${p}"`),
      },
      {
        h2: `How to Compare Multiple ${ind.name} Quotes Fairly`,
        paragraphs: [
          `Getting multiple quotes is standard advice — but comparing quotes effectively requires more than looking at the bottom line. Two quotes for the same job can differ by 50% or more for legitimate reasons, and the lowest quote is frequently not the best value.`,
          `When comparing quotes, ensure each proposal covers the same scope of work. Ask each ${ind.tradesperson.toLowerCase()} what specifically is and isn't included, what materials they're proposing, and what warranty they offer. A higher quote that includes better materials, a longer warranty, and a more thorough process often delivers better long-term value than the cheapest option.`,
          `If one quote is dramatically lower than all others, ask why. Sometimes a lower price reflects genuine efficiency — but more often, it reflects cut corners, inferior materials, or an intent to add charges once work has begun.`,
        ],
      },
      {
        h2: `What the Best ${ind.name} Websites Look Like`,
        paragraphs: [
          `Before you call a ${ind.tradesperson.toLowerCase()}, their website tells you a great deal about how they run their business. Professional ${ind.tradespersonPlural.toLowerCase()} invest in a professional web presence because they understand it reflects the quality of their work.`,
          `The best ${ind.name.toLowerCase()} websites are easy to navigate on mobile, show a clearly visible phone number above the fold, include verifiable customer reviews, describe their services in specific (not generic) terms, and make it easy to request a quote or schedule service without unnecessary friction.`,
          `At Best Local Service Sites, we build exactly this kind of high-performance web presence for ${ind.name.toLowerCase()} contractors across the US — designed specifically to help homeowners find the right professional and get in touch immediately.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Are You One of the Best ${ind.tradespersonPlural} in Your Area?`,
    ctaBody: `Your website should reflect the quality of your work. We build professional, conversion-optimized sites for ${ind.name.toLowerCase()} contractors that help you stand out from the competition and turn searches into calls.`,
    pageType: "best-service",
    industry: ind,
  };
}

function genNearMePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `${ind.namePlural} Near Me — How to Find & Hire Fast | Best Local Service Sites`,
    metaDescription: `Looking for ${ind.name.toLowerCase()} near you? Here's how to find trusted, licensed ${ind.tradespersonPlural.toLowerCase()} in your area fast — and what to look for before you hire.`,
    h1: `${ind.namePlural} Near Me: How to Find a Trusted Local Professional Fast`,
    intro: `When you search "${ind.name.toLowerCase()} near me," you're looking for more than a list of phone numbers — you need a qualified, available professional you can trust. ${ind.description} This guide explains the fastest and most reliable methods for finding a great local ${ind.tradesperson.toLowerCase()}, with specific steps you can take right now to get a qualified professional on-site.`,
    sections: [
      {
        h2: `The Fastest Ways to Find ${ind.namePlural} Near You`,
        paragraphs: [
          `Google Maps is the single most useful tool for finding local ${ind.tradespersonPlural.toLowerCase()}. Search "${ind.name.toLowerCase()} near me" or "${ind.tradespersonPlural.toLowerCase()} in [your city]" and you'll see the Google 3-Pack — the three businesses Google determines are most relevant and trusted for your search. These businesses have verified locations, real reviews, and often active Google Business Profiles.`,
          `Beyond Google Maps, ask your neighbors directly. Home service recommendations travel fast in neighborhoods, and a personal referral from someone who has had the work done is the highest-quality signal available. Local community Facebook groups and Nextdoor are excellent sources of recent, honest recommendations.`,
          `${ind.whyLocalMatters} This is especially relevant when you're looking for someone nearby — a contractor who is geographically close and familiar with your area will almost always outperform a regional operator dispatched from a distance.`,
        ],
      },
      {
        h2: `What to Check Before Calling Any ${ind.tradesperson}`,
        paragraphs: [
          `A quick thirty-second check before you dial can prevent the most common bad outcomes. On their Google Business Profile, verify that: their listed address appears to be in your area (not across town), they have at least 10 reviews with an average above 4.0, and at least some reviews mention the specific type of work you need done.`,
          `If they have a website, check that it loads on mobile, displays a phone number prominently, and lists the services you need. A professional, functional website is a basic signal of a business that operates professionally. A company with no website, or one that looks like it was last updated in 2010, may not be operating at the level you need.`,
        ],
        bullets: [
          "Verify license through your state's contractor licensing board",
          "Confirm they carry general liability insurance",
          "Check that recent reviews mention your type of job",
          "Confirm they serve your specific zip code",
          "Get a written estimate before authorizing any work",
        ],
      },
      {
        h2: `Why the Closest ${ind.tradesperson} Isn't Always the Best Choice`,
        paragraphs: [
          `Physical proximity matters, but it's not the only factor. A ${ind.tradesperson.toLowerCase()} who is five miles away with a 4.9-star rating and strong reviews for your specific type of job is almost always a better choice than one who is two miles away with three reviews and a generic listing.`,
          `When evaluating "near me" results, combine proximity with review quality, service specificity, and response time. The best combination is a contractor who is genuinely local (not a regional franchise), has verifiable high-quality reviews, and can reach you within a reasonable timeframe for your situation.`,
        ],
      },
      {
        h2: `How ${ind.name} Companies Near You Should Be Presenting Online`,
        paragraphs: [
          `One of the clearest signals of a professional, well-run ${ind.name.toLowerCase()} company is their online presence. Businesses that invest in a professional website, maintain their Google Business Profile, and actively collect customer reviews are demonstrating the same operational discipline that produces good work in your home.`,
          `At Best Local Service Sites, we build websites for ${ind.name.toLowerCase()} contractors that make them easy to find when homeowners like you search "${ind.name.toLowerCase()} near me." If a contractor's site makes it easy to understand their services, see their reviews, and reach them immediately — that's a company that's ready to serve you well.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `${ind.tradespersonPlural}: Get Found When Homeowners Search "Near Me"`,
    ctaBody: `We optimize ${ind.name.toLowerCase()} contractor websites to rank in Google's "near me" results across your entire service area. Get your phone ringing from local homeowners searching right now.`,
    pageType: "near-me",
    industry: ind,
  };
}

function genServicesNearMePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `${ind.name} Services Near Me — Compare & Choose the Right Provider | Best Local Service Sites`,
    metaDescription: `Compare ${ind.namePlural.toLowerCase()} near you. Find licensed, reviewed professionals for every ${ind.name.toLowerCase()} need — from routine maintenance to emergency service.`,
    h1: `${ind.name} Services Near Me: Compare Local Options and Find the Right Fit`,
    intro: `Not all ${ind.name.toLowerCase()} needs are the same, and neither are the companies that handle them. Some specialize in emergency response, others in large installation projects, and others in routine maintenance programs. ${ind.description} This guide helps you understand the full range of ${ind.namePlural.toLowerCase()} available in your area, how to match your specific need to the right type of provider, and how to evaluate your options before making a decision.`,
    sections: [
      {
        h2: `The Full Range of ${ind.namePlural} Available Near You`,
        paragraphs: [
          `${ind.name} covers a broader range of services than most homeowners realize. Understanding what's available helps you ask for the right service and find the right specialist — rather than calling a general contractor for work that requires a specialist, or paying specialty rates for work a generalist handles just as well.`,
        ],
        bullets: ind.services,
      },
      {
        h2: `Matching Your ${ind.name} Need to the Right Provider`,
        paragraphs: [
          `The first step in finding the right ${ind.tradesperson.toLowerCase()} is being specific about what you need. Emergency situations, planned installations, and routine maintenance each call for different types of providers with different availability, pricing structures, and specializations.`,
          `For emergency situations involving ${ind.commonProblems[0].toLowerCase()}, your priority is response time and 24/7 availability. For planned projects like ${ind.services[ind.services.length - 1].toLowerCase()}, your priority is portfolio quality, references, and clear written proposals.`,
          `${ind.whyLocalMatters} This holds true across all service categories — local expertise translates directly into better outcomes for any type of ${ind.name.toLowerCase()} need.`,
        ],
      },
      {
        h2: `How to Compare ${ind.namePlural} Near You`,
        paragraphs: [
          `Once you've identified two to three local ${ind.tradespersonPlural.toLowerCase()} who appear qualified for your job, a structured comparison helps you make the best decision. Don't rely on price alone — the cheapest option often creates the most expensive outcomes.`,
          `Compare response time to your initial inquiry (a contractor who takes three days to respond to a quote request will likely behave the same way if a problem arises after the job), the specificity of their proposal, their willingness to provide references, and the clarity of their warranty or guarantee.`,
        ],
        table: {
          headers: ["Evaluation Criterion", "What to Look For", "Warning Signs"],
          rows: [
            ["Licensing", "Verifiable state license number", "Refuses to provide license info"],
            ["Insurance", "GL + workers comp certificate", "No insurance or vague answers"],
            ["Reviews", "10+ recent, specific reviews", "Fewer than 5, or all recent"],
            ["Proposal", "Detailed, itemized written estimate", "Verbal only, vague scope"],
            ["References", "Willing to provide + follows up", "Resistance or unavailable"],
            ["Warranty", "Clear parts and labor warranty", "No warranty mentioned"],
          ],
        },
      },
      {
        h2: `Questions to Ask ${ind.tradespersonPlural} Near You`,
        paragraphs: [
          `Before authorizing any work, ask these questions. A qualified, honest ${ind.tradesperson.toLowerCase()} will answer all of them clearly and without hesitation.`,
        ],
        bullets: [
          `Are you licensed to perform ${ind.name.toLowerCase()} work in this state? What is your license number?`,
          `Do you carry general liability and workers' compensation insurance? Can I see a certificate?`,
          `Can you provide a written, itemized estimate before starting?`,
          `What is your warranty on parts and labor for this job?`,
          `Can you provide references from similar recent projects in my area?`,
          `How quickly can you respond if a problem arises after the job is complete?`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `${ind.tradespersonPlural}: Stand Out in Local Search`,
    ctaBody: `We build ${ind.name.toLowerCase()} contractor websites that rank prominently when homeowners search for services in your area. Turn local searches into booked jobs.`,
    pageType: "services-near-me",
    industry: ind,
  };
}

function genRepairPage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `${ind.name} Repair Services — Licensed Professionals | Best Local Service Sites`,
    metaDescription: `Need ${ind.name.toLowerCase()} repair? Find licensed, insured ${ind.tradespersonPlural.toLowerCase()} who diagnose and fix problems correctly the first time. Get a free quote.`,
    h1: `${ind.name} Repair: How to Find a Professional Who Gets It Right the First Time`,
    intro: `${ind.name} repair covers a wide spectrum — from minor fixes you might handle yourself to complex system failures that require immediate professional attention. ${ind.description} Getting the diagnosis right is as important as the repair itself. This guide helps you understand what to expect from the ${ind.name.toLowerCase()} repair process, how to evaluate whether repair or replacement is the smarter investment, and how to find a ${ind.tradesperson.toLowerCase()} who will be honest with you about both.`,
    sections: [
      {
        h2: `Common ${ind.name} Repairs and What They Involve`,
        paragraphs: [
          `Understanding the most common ${ind.name.toLowerCase()} repair scenarios helps you communicate clearly with a technician, evaluate whether their diagnosis makes sense, and avoid being upsold on unnecessary work.`,
          `Most ${ind.name.toLowerCase()} repairs fall into a predictable set of categories. Some are straightforward fixes that a qualified technician can complete in a single visit. Others involve diagnosis followed by parts ordering, requiring multiple visits. And some apparent repairs turn out to require replacement — a diagnosis that a trustworthy ${ind.tradesperson.toLowerCase()} will present honestly rather than delaying.`,
        ],
        bullets: ind.commonProblems,
      },
      {
        h2: `Repair vs. Replacement: How to Make the Right Decision`,
        paragraphs: [
          `One of the most common challenges homeowners face in ${ind.name.toLowerCase()} situations is determining whether to repair an existing system or replace it entirely. This decision has significant financial implications, and unfortunately, some contractors have financial incentives to recommend the more expensive option regardless of what's best for the homeowner.`,
          `As a general rule, if a repair costs more than 50% of the replacement cost, or the system is nearing the end of its expected lifespan, replacement often provides better long-term value. Conversely, for newer systems with isolated failures, repair is almost always the right choice economically.`,
          `The most important protection is getting a second opinion for any repair estimate over $500, or for any recommendation to fully replace a system that is less than 10 years old. A contractor who is confident in their diagnosis will not discourage you from seeking a second opinion.`,
        ],
      },
      {
        h2: `How ${ind.name} Repair Pricing Works`,
        paragraphs: [
          `${ind.name} repair pricing varies based on the type of repair, the parts required, and the labor time involved. Most companies charge a diagnostic or service call fee (typically $75–$150) to assess the problem, which is then applied to the repair cost if you proceed.`,
          `For most ${ind.name.toLowerCase()} repairs, expect costs in the range of ${ind.avgJobValue}. Always ask for an itemized written estimate that separates parts costs from labor before authorizing any repair work.`,
          `Be cautious of any ${ind.tradesperson.toLowerCase()} who cannot or will not provide a written estimate before starting, or who asks for payment in full upfront for a repair. Reputable contractors typically collect a deposit on larger jobs and balance on completion, never full payment before work begins.`,
        ],
      },
      {
        h2: `Finding a ${ind.tradesperson} Who Will Be Honest About Repairs`,
        paragraphs: [
          `${ind.redditPainPoints[0]} — this kind of experience is avoidable with the right vetting process. The contractors most likely to deliver honest repair diagnoses are those with established local reputations, verifiable customer reviews that specifically mention repair work, and a business model that doesn't depend on upselling replacements.`,
          `Look for ${ind.tradespersonPlural.toLowerCase()} who offer free or low-cost diagnostic visits, provide written estimates that include parts numbers for any replacement components, and are willing to show you the failed part before replacing it. These practices signal a contractor who operates with transparency.`,
          `${ind.whyLocalMatters} This reputation incentive applies with particular force in the repair context — a local ${ind.tradesperson.toLowerCase()} who tells you something doesn't need replacement when a national chain would have sold you a new unit earns a customer for life.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `${ind.tradespersonPlural}: Build a Reputation for Honest Repairs`,
    ctaBody: `Homeowners searching for ${ind.name.toLowerCase()} repair are often frustrated and cautious. A professional website that communicates your honesty and transparency turns those searchers into loyal customers.`,
    pageType: "repair",
    industry: ind,
  };
}

function genInstallationPage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `${ind.name} Installation — Proper Setup, Warranty-Backed Work | Best Local Service Sites`,
    metaDescription: `Professional ${ind.name.toLowerCase()} installation by licensed, insured ${ind.tradespersonPlural.toLowerCase()}. Get a free quote and find the right installer for your project.`,
    h1: `${ind.name} Installation: Getting the Project Done Right from Day One`,
    intro: `A proper ${ind.name.toLowerCase()} installation done right the first time is worth far more than the cheapest available bid. ${ind.description} Poor installation leads to premature failure, warranty voidance, and costly repairs that wouldn't have been necessary with a quality initial install. This guide walks through what to expect from a professional ${ind.name.toLowerCase()} installation, how to evaluate installers, and what the process should look like from estimate to completion.`,
    sections: [
      {
        h2: `What ${ind.name} Installation Involves`,
        paragraphs: [
          `${ind.name} installation projects range in complexity, but all share a set of common phases: initial assessment and measurement, equipment or material selection, removal of existing systems if applicable, installation, testing, and final walkthrough. A thorough installer walks you through each phase before work begins so there are no surprises.`,
          `The ${ind.name.toLowerCase()} installation services most commonly requested by homeowners include both new installations and replacement of existing systems. Understanding which type of installation you need helps ensure you're talking to the right specialists from the start.`,
        ],
        bullets: ind.services,
      },
      {
        h2: `What to Expect During a ${ind.name} Installation`,
        paragraphs: [
          `A professional ${ind.name.toLowerCase()} installation begins with a thorough assessment of your space, existing systems, and requirements. This assessment informs the specification of equipment or materials and the final cost estimate. Be cautious of any contractor who provides a final price without seeing the installation site.`,
          `During the installation itself, a professional crew works systematically, protects your property from damage, and communicates proactively if anything unexpected is discovered. The job isn't complete until all components have been tested, you've been walked through the new installation, and any required permits have been pulled and inspected.`,
          `Post-installation, request all warranty documentation, maintenance schedules, and product registration information in writing. These documents are essential for warranty claims and are often required when selling your home.`,
        ],
      },
      {
        h2: `How to Choose the Right ${ind.name} Installation Company`,
        paragraphs: [
          `Installation quality varies enormously between contractors. The same equipment installed by two different companies can produce dramatically different results in terms of performance, longevity, and compliance with manufacturer warranty requirements.`,
          `For ${ind.name.toLowerCase()} installations, prioritize contractors who are manufacturer-certified or manufacturer-authorized for the brands they install. Factory-certified installers follow manufacturer specifications, ensuring warranty validity. Non-certified installers may use shortcuts that compromise both performance and warranty coverage.`,
          `${ind.whyLocalMatters} Local installers who have completed multiple similar projects in your area can often reference nearby completed installations you can visit or owners you can speak with directly.`,
        ],
      },
      {
        h2: `${ind.name} Installation Costs and What Affects Them`,
        paragraphs: [
          `Installation costs for ${ind.name.toLowerCase()} projects typically run ${ind.avgJobValue}. The primary factors affecting cost are the scale of the project, the quality of materials or equipment selected, site-specific complexity, and whether existing systems need to be removed.`,
          `When comparing installation quotes, ensure each proposal specifies the exact equipment or materials being installed, including model numbers where applicable. A $2,000 difference between two quotes may reflect a meaningful difference in equipment quality — or simply a difference in the contractor's markup. Knowing exactly what you're buying makes comparison meaningful.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `${ind.tradespersonPlural}: Win More Installation Projects`,
    ctaBody: `Installation projects are high-value, high-research decisions. We build websites that communicate your expertise and convert homeowners into consultation bookings.`,
    pageType: "installation",
    industry: ind,
  };
}

function genCompanyPage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `${ind.name} Company Near You — Trusted Local Professionals | Best Local Service Sites`,
    metaDescription: `Find a trusted local ${ind.name.toLowerCase()} company. Licensed, insured, and reviewed by real customers. ${ind.heroTagline}`,
    h1: `Finding the Right ${ind.name} Company for Your Home or Business`,
    intro: `Choosing a ${ind.name.toLowerCase()} company is a decision that deserves more than a quick Google search and a call to whoever answers first. ${ind.description} A great ${ind.name.toLowerCase()} company becomes a long-term partner for your home — reliable, honest, and consistent. Here's how to find one that actually delivers on those qualities.`,
    sections: [
      {
        h2: `What Makes a ${ind.name} Company Worth Trusting?`,
        paragraphs: [
          `The ${ind.name.toLowerCase()} companies homeowners trust most share a specific set of characteristics that go beyond technical skill. These qualities show up consistently in positive customer reviews and predictably in positive outcomes.`,
          `The most important single quality is honest communication. A ${ind.name.toLowerCase()} company that communicates clearly about what work is needed, what it will cost, and what the timeline looks like — and that actually follows through on those commitments — will earn loyal customers. Companies that overpromise and underdeliver may win the initial bid and lose the customer relationship.`,
        ],
        bullets: [
          "State-licensed and actively maintains that license",
          "Carries verifiable general liability and workers' comp insurance",
          "Provides detailed written estimates before starting any work",
          "Has 10+ recent Google reviews averaging 4.5 stars or higher",
          "Employs background-checked technicians",
          "Offers a clear warranty on parts and labor",
          "Is reachable and responsive before, during, and after the job",
        ],
      },
      {
        h2: `Local ${ind.name} Company vs. National Franchise`,
        paragraphs: [
          `When you search for a ${ind.name.toLowerCase()} company, you'll encounter both locally owned and operated businesses and national franchise operations. Both can deliver good work, but they come with meaningfully different strengths and weaknesses.`,
          `${ind.whyLocalMatters} A locally owned ${ind.name.toLowerCase()} company has a direct stake in community reputation. Every job they complete is a reference for their next ten customers. National franchises operate under brand standards that provide consistency but also create bureaucracy that slows response time and limits flexibility.`,
        ],
      },
      {
        h2: `How ${ind.name} Companies Should Treat Their Customers`,
        paragraphs: [
          `The way a company treats potential customers before the sale — how quickly they respond to inquiries, how clearly they explain their services, how professionally they present themselves — is the most accurate preview of how they'll treat you after the sale.`,
          `The homeowner frustrations documented in real online reviews follow a consistent pattern: poor communication, billing surprises, no-shows, and warranty disputes. All of these problems are predictable from warning signs that appear during the initial interaction. A company that takes days to return a quote request will take longer to respond to post-job issues.`,
        ],
      },
      {
        h2: `Building a Long-Term Relationship with a ${ind.name} Company`,
        paragraphs: [
          `The most valuable ${ind.name.toLowerCase()} asset for any homeowner is a reliable company they can call for anything — routine maintenance, urgent repairs, and new project planning alike. Building that relationship starts with one good experience and deepens through consistent quality over time.`,
          `When you find a ${ind.name.toLowerCase()} company that performs well, refer them to neighbors and leave a genuine Google review. Local businesses thrive on word-of-mouth, and your referral helps them continue operating with the community focus that made your experience positive.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Run a ${ind.name} Company? Get More Local Customers`,
    ctaBody: `We build professional websites for ${ind.name.toLowerCase()} companies that communicate trust, generate leads, and turn local searches into phone calls.`,
    pageType: "company",
    industry: ind,
  };
}

function gen24hEmergencyPage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `24-Hour Emergency ${ind.namePlural} — Available Now | Best Local Service Sites`,
    metaDescription: `Need emergency ${ind.name.toLowerCase()} right now? 24-hour response from licensed, insured ${ind.tradespersonPlural.toLowerCase()} in your area. Don't wait — call now.`,
    h1: `24-Hour Emergency ${ind.namePlural}: Getting Help When Every Minute Counts`,
    intro: `Some ${ind.name.toLowerCase()} situations simply cannot wait until morning. ${ind.heroTagline} When an emergency strikes at 2am or over a holiday weekend, you need a 24-hour ${ind.tradesperson.toLowerCase()} who will actually show up — not one who advertises 24/7 service and sends you to voicemail. This guide tells you exactly what to look for, what to expect, and how to protect yourself during an urgent situation.`,
    sections: [
      {
        h2: `True ${ind.name} Emergencies That Require 24-Hour Response`,
        paragraphs: [
          `Understanding what genuinely constitutes an emergency — versus what can wait until the next business day — helps you avoid unnecessary emergency service fees while ensuring you get immediate help when the situation truly demands it.`,
          `The situations below represent genuine ${ind.name.toLowerCase()} emergencies where waiting causes additional property damage, creates health or safety risks, or leaves your home in an unsafe or uninhabitable condition.`,
        ],
        bullets: ind.commonProblems.slice(0, 6).map((p) => `${p} — cannot wait for business hours`),
      },
      {
        h2: `How to Find a Real 24-Hour ${ind.tradesperson} (Not Just One Who Claims To Be)`,
        paragraphs: [
          `Many ${ind.name.toLowerCase()} companies advertise 24/7 or 24-hour availability but are effectively unavailable outside business hours. The clearest proof that a company genuinely offers 24-hour service is recent Google reviews that specifically mention after-hours or emergency response — with details about arrival time.`,
          `When you call an advertised 24-hour service, ask directly: "Can you have a technician at my address by [time]?" If the answer is vague, or if they put you on hold for a long time before responding, consider it a warning sign. A truly emergency-ready company knows their dispatch status and can give you a direct answer.`,
          `${ind.whyLocalMatters} This advantage is even more pronounced for emergency service — a locally dispatched technician will reach you faster than one driving from a regional hub.`,
        ],
      },
      {
        h2: `Emergency ${ind.name} Pricing: What's Reasonable`,
        paragraphs: [
          `Emergency service commands premium pricing, and that's legitimate — you're paying for availability, immediacy, and the operational costs of maintaining a 24-hour workforce. For most ${ind.name.toLowerCase()} trades, emergency rates run 1.5–2x the standard rate. For jobs typically running ${ind.avgJobValue}, emergency premium costs should be proportional to that base.`,
          `What is not acceptable is price-gouging — dramatically inflated rates that take advantage of a homeowner's urgency and limited ability to shop around. Protect yourself by asking for a specific price estimate before authorizing any work, even in an emergency. Document that conversation and the quoted price.`,
          `If you're quoted a price that seems dramatically high, you can ask the technician to wait while you make one quick additional call. A professional 24-hour ${ind.tradesperson.toLowerCase()} will not object to this.`,
        ],
      },
      {
        h2: `What to Do in a ${ind.name} Emergency While Waiting for Help`,
        paragraphs: [
          `While you're waiting for the 24-hour ${ind.tradesperson.toLowerCase()} to arrive, there are steps you can take to prevent the situation from worsening and to prepare for the technician's arrival.`,
          `Document the situation with photos and video before doing anything else. This documentation is valuable for insurance purposes and establishes the scope of the damage at the time the emergency began. Don't clean up or obscure evidence of damage — record it as-is.`,
          `Follow any immediate safety steps specific to your emergency situation. If you're not sure what's safe to do, err on the side of caution and wait for the professional. Attempting amateur repairs in a genuine emergency often causes additional damage.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Do You Offer 24-Hour Emergency ${ind.namePlural}?`,
    ctaBody: `Your website needs to make that crystal clear within seconds of loading — especially on mobile. We build emergency-ready contractor websites that convert urgent searches into immediate calls.`,
    pageType: "24h-emergency",
    industry: ind,
  };
}

function genAffordablePage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `Affordable ${ind.namePlural} — Quality Without Overpaying | Best Local Service Sites`,
    metaDescription: `Find affordable ${ind.namePlural.toLowerCase()} from licensed professionals. Understand fair pricing, avoid common billing traps, and get great work at a reasonable cost.`,
    h1: `Affordable ${ind.namePlural}: What You Should Expect to Pay — and How to Avoid Overpaying`,
    intro: `"Affordable" in ${ind.name.toLowerCase()} doesn't mean the cheapest available option. It means fair pricing for quality work from a qualified professional — and knowing enough about the market to recognize when you're being quoted a fair price versus when you're being overcharged. ${ind.description} This guide breaks down what ${ind.namePlural.toLowerCase()} should actually cost, how pricing is structured, and the practical steps to get great work at a reasonable price.`,
    sections: [
      {
        h2: `What ${ind.namePlural} Should Actually Cost`,
        paragraphs: [
          `Pricing for ${ind.name.toLowerCase()} varies by region, complexity, and the specific work required. For most jobs in this category, expect costs in the range of ${ind.avgJobValue}. Emergency service, specialty materials, and significant complexity push toward the higher end; straightforward, standard jobs fall toward the lower end.`,
          `The most common billing models in ${ind.name.toLowerCase()} are flat-rate pricing (a fixed price for specific defined services), time-and-materials (hourly labor plus parts cost), and project pricing (a total price for a defined scope of work). Each model has advantages and risks depending on the nature of the job.`,
          `Flat-rate pricing is often better for consumers on straightforward, well-defined jobs because the cost is clear upfront. Time-and-materials pricing can be fair for diagnostic work but creates open-ended cost exposure if you're not careful. Project pricing provides the clearest total cost but requires a detailed scope of work to be truly comparable.`,
        ],
      },
      {
        h2: `Common Ways Homeowners Overpay for ${ind.namePlural}`,
        paragraphs: [
          `Understanding the most common billing practices that lead to homeowners overpaying is the most effective protection against them. These aren't all dishonest — some are simply industry practices that work to the contractor's advantage and can be negotiated or avoided with awareness.`,
        ],
        bullets: [
          "Paying full price for standard work that qualifies for a maintenance plan discount",
          "Authorizing 'diagnostic' or 'inspection' fees without understanding what they include",
          "Accepting the first quote without getting a second opinion on jobs over $500",
          "Paying for upgrades or add-ons that weren't clearly explained or agreed to",
          "Emergency service rates for situations that could have waited for regular business hours",
          "Material markups significantly above retail — always ask if you can source materials yourself for larger jobs",
        ],
      },
      {
        h2: `How to Get Affordable ${ind.namePlural} Without Sacrificing Quality`,
        paragraphs: [
          `The path to affordable ${ind.name.toLowerCase()} service runs through clear communication, good vetting, and a basic understanding of what fair market rates look like. Homeowners who take thirty minutes to educate themselves before making calls consistently get better outcomes than those who call the first number they find.`,
          `Get at least three quotes for any job over $500. The range of quotes will immediately tell you what the market looks like and make extreme outliers obvious. Don't reveal other quotes to each contractor — let them price independently and compare.`,
          `Ask each ${ind.tradesperson.toLowerCase()} explicitly: "Is there anything I can do to reduce the cost of this job?" Sometimes the answer is no, but often there are options — different material choices, scheduling flexibility, or DIY-able prep work that reduces labor hours.`,
        ],
      },
      {
        h2: `Affordable Does Not Mean Cheap — The Cost of the Lowest Bid`,
        paragraphs: [
          `The lowest bid frequently becomes the most expensive outcome. Contractors who win consistently on the lowest price are doing so by cutting somewhere — materials quality, labor time, experience level, insurance coverage, or all of the above.`,
          `${ind.redditPainPoints[ind.redditPainPoints.length - 1]} — this kind of experience is extremely common when homeowners prioritize the bottom line over value. The real cost of cheap ${ind.name.toLowerCase()} includes the direct repair cost plus the time, disruption, and aggravation of dealing with the fallout.`,
          `A fair-priced, quality ${ind.tradesperson.toLowerCase()} will almost always save you money over a cheap one who does the job wrong. The math is straightforward: one correct installation at a fair price beats two installations at the cheapest available price.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `${ind.tradespersonPlural}: Compete on Value, Not Just Price`,
    ctaBody: `A professional website helps you communicate your quality, justify your pricing, and attract customers who value good work — not just the cheapest bid.`,
    pageType: "affordable",
    industry: ind,
  };
}

function genProfessionalPage(ind: Industry, slug: string): GeneratedPage {
  return {
    slug,
    metaTitle: `Professional ${ind.namePlural} — Licensed, Insured Experts | Best Local Service Sites`,
    metaDescription: `Hire professional ${ind.tradespersonPlural.toLowerCase()} who are licensed, insured, and accountable. Understand what professional ${ind.name.toLowerCase()} service looks like and how to find it.`,
    h1: `Professional ${ind.namePlural}: What Real Expertise Looks Like and How to Find It`,
    intro: `The word "professional" is used broadly in the ${ind.name.toLowerCase()} industry, but its meaning matters. ${ind.description} A truly professional ${ind.tradesperson.toLowerCase()} is licensed, insured, technically skilled, and accountable to a standard that protects you if something goes wrong. This guide explains what professional ${ind.name.toLowerCase()} service actually entails, how to verify it before hiring, and why the distinction between professional and amateur matters more than most homeowners realize.`,
    sections: [
      {
        h2: `What Professional ${ind.namePlural} Actually Means`,
        paragraphs: [
          `Professional ${ind.name.toLowerCase()} service has specific, verifiable components that go beyond showing up on time and doing decent work. These components — licensing, insurance, written documentation, and quality standards — exist to protect homeowners and create accountability when things go wrong.`,
          `Licensing means the ${ind.tradesperson.toLowerCase()} has passed state-required examinations demonstrating technical competency and knowledge of applicable codes. Insurance means you're protected if a worker is injured on your property or if the work causes damage. Written documentation means there's a record of what was agreed to and what was actually done.`,
          `These aren't nice-to-haves. They're the baseline definition of professional ${ind.name.toLowerCase()} service. A contractor who lacks any of these is, by definition, not operating professionally regardless of how skilled they may be technically.`,
        ],
      },
      {
        h2: `Professional ${ind.name} Standards and What They Cover`,
        paragraphs: [
          `Professional ${ind.tradespersonPlural.toLowerCase()} operate under a combination of state licensing requirements, manufacturer standards, and industry best practices. These standards govern everything from the materials that can be used to the techniques required for specific types of installations and repairs.`,
          `Understanding that these standards exist — and that compliance with them is a condition of professional licensing — gives you a framework for evaluating any ${ind.tradesperson.toLowerCase()}'s work. When a contractor proposes a solution that seems to cut corners, you can ask directly: "Does this approach meet current code requirements?"`,
        ],
        bullets: ind.services.map((s) => `${s} — completed to code and manufacturer specifications`),
      },
      {
        h2: `How to Verify a ${ind.tradesperson}'s Professional Credentials`,
        paragraphs: [
          `Verification of professional credentials takes less than ten minutes and can prevent the most common professional failures. Every state maintains a public database of licensed contractors searchable by name or license number.`,
          `To verify: ask the ${ind.tradesperson.toLowerCase()} for their state license number and look it up in your state's contractor licensing board database. This search will show you the license status, any complaints, and the insurance certificate on file. If a contractor refuses to provide their license number, do not hire them.`,
          `For insurance, ask for a Certificate of Insurance naming you as an additional insured for the duration of the project. This document can be provided the same day from any legitimate insurer and should be standard practice for any professional contractor.`,
        ],
      },
      {
        h2: `The Business Behind Professional ${ind.namePlural}`,
        paragraphs: [
          `Professional ${ind.name.toLowerCase()} companies invest in their operations in ways that directly benefit customers: ongoing technician training, quality tools and equipment, organized dispatch systems, and professional invoicing and documentation. These investments cost money, which is why genuinely professional ${ind.name.toLowerCase()} service rarely comes at rock-bottom prices.`,
          `At Best Local Service Sites, we help professional ${ind.name.toLowerCase()} contractors present themselves online in a way that accurately reflects their professionalism. A clean, well-organized website with clear service descriptions, visible credentials, and easy contact options communicates professionalism before the first call is made.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Professional ${ind.tradespersonPlural}: Your Website Should Reflect Your Standards`,
    ctaBody: `We build websites for professional ${ind.name.toLowerCase()} contractors that communicate quality, earn trust, and convert local homeowners into booked jobs.`,
    pageType: "professional",
    industry: ind,
  };
}

function genCityPage(ind: Industry, city: City, slug: string): GeneratedPage {
  const cityContext = city.context[ind.id] || `${city.name} has a strong demand for professional ${ind.name.toLowerCase()} services across its ${city.population} population. ${city.housingNote.charAt(0).toUpperCase() + city.housingNote.slice(1)} creates consistent need for qualified ${ind.tradespersonPlural.toLowerCase()}.`;
  return {
    slug,
    metaTitle: `${ind.tradespersonPlural} in ${city.name}, ${city.stateAbbr} | Best Local Service Sites`,
    metaDescription: `Find licensed, insured ${ind.tradespersonPlural.toLowerCase()} in ${city.name}, ${city.state}. Local ${ind.name.toLowerCase()} professionals serving ${city.name} and surrounding areas. Get a free quote today.`,
    h1: `${ind.tradespersonPlural} in ${city.name}, ${city.stateAbbr}: Find Trusted Local Professionals`,
    intro: `${cityContext} When you need a ${ind.tradesperson.toLowerCase()} in ${city.name}, the challenge is finding someone who is genuinely local, properly licensed, and available when you need them. This guide covers what homeowners in ${city.name} should look for, what to expect in terms of pricing, and how to find the right ${ind.tradesperson.toLowerCase()} for your specific situation.`,
    sections: [
      {
        h2: `${ind.name} in ${city.name}: What Local Homeowners Need to Know`,
        paragraphs: [
          cityContext,
          `${city.name}'s ${city.climate} climate creates specific patterns of ${ind.name.toLowerCase()} demand that local ${ind.tradespersonPlural.toLowerCase()} understand better than out-of-area contractors. ${city.housingNote.charAt(0).toUpperCase() + city.housingNote.slice(1)} means ${ind.name.toLowerCase()} professionals in ${city.name} encounter a specific mix of challenges that require local knowledge and experience.`,
          `Homeowners in ${city.name} benefit significantly from hiring ${ind.tradespersonPlural.toLowerCase()} who have established operations in the metro area. Response times, knowledge of local permitting, and familiarity with common issues in ${city.name}'s housing stock all translate directly into better outcomes.`,
        ],
      },
      {
        h2: `${ind.name} Services Available in ${city.name}`,
        paragraphs: [
          `Licensed ${ind.tradespersonPlural.toLowerCase()} serving ${city.name} offer the full range of ${ind.name.toLowerCase()} services for residential and commercial customers throughout the metro area. From routine maintenance to emergency response, qualified local professionals are equipped to handle any ${ind.name.toLowerCase()} need.`,
        ],
        bullets: ind.services,
      },
      {
        h2: `How to Find a Trusted ${ind.tradesperson} in ${city.name}`,
        paragraphs: [
          `The most reliable way to find a trustworthy ${ind.tradesperson.toLowerCase()} in ${city.name} is a combination of Google Maps research and neighborhood referrals. Search "${ind.tradespersonPlural.toLowerCase()} in ${city.name}" on Google Maps and look for local companies with 10+ reviews averaging 4.5 stars or higher.`,
          `Pay particular attention to reviews that mention your specific neighborhood or part of ${city.name}. A ${ind.tradesperson.toLowerCase()} who has completed multiple jobs in your area has proven familiarity with local conditions and is more likely to diagnose and fix problems correctly on the first visit.`,
          `${ind.whyLocalMatters} In ${city.name}, this advantage is particularly pronounced given ${city.climate} — conditions that create specific ${ind.name.toLowerCase()} demands that local professionals understand from direct experience.`,
        ],
      },
      {
        h2: `${ind.name} Costs in ${city.name}`,
        paragraphs: [
          `${ind.name} pricing in ${city.name}, ${city.stateAbbr} generally runs in line with the national range of ${ind.avgJobValue}, though ${city.name}'s specific market conditions and labor costs may result in some variation. Emergency and after-hours service carries a premium regardless of location.`,
          `To get the most accurate pricing for your specific situation, contact at least two to three local ${ind.tradespersonPlural.toLowerCase()} and ask for written estimates. This process takes an hour but can save significant money on larger jobs and gives you a clear picture of what's reasonable in the ${city.name} market.`,
        ],
      },
      {
        h2: `Why ${city.name} Homeowners Choose Local ${ind.tradespersonPlural}`,
        paragraphs: [
          `Homeowners across ${city.name} — from ${city.name}'s established neighborhoods to newer suburban developments — consistently report better outcomes when they hire genuinely local ${ind.tradespersonPlural.toLowerCase()}. Local contractors know the specific challenges of ${city.name}'s housing stock, respond faster to service calls, and have reputational accountability to the community they serve.`,
          `At Best Local Service Sites, we help ${ind.tradespersonPlural.toLowerCase()} throughout ${city.name} and surrounding ${city.state} communities build professional websites that make them easy to find when homeowners search for local help. If you're a ${ind.tradesperson.toLowerCase()} in ${city.name} looking to grow your customer base, we can help you get your phone ringing.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `${ind.tradespersonPlural} in ${city.name}: Get More Local Calls`,
    ctaBody: `We build websites for ${ind.name.toLowerCase()} contractors in ${city.name} that rank in local search and turn homeowners into booked jobs. Get a free quote today.`,
    pageType: "city",
    industry: ind,
    city,
  };
}

function genCityEmergencyPage(ind: Industry, city: City, slug: string): GeneratedPage {
  const cityContext = city.context[ind.id] || `${city.name} has strong demand for emergency ${ind.name.toLowerCase()} services.`;
  return {
    slug,
    metaTitle: `Emergency ${ind.tradespersonPlural} in ${city.name}, ${city.stateAbbr} — 24/7 Response | Best Local Service Sites`,
    metaDescription: `Need an emergency ${ind.tradesperson.toLowerCase()} in ${city.name}? Licensed, insured ${ind.tradespersonPlural.toLowerCase()} available 24/7. Fast response across ${city.name} and surrounding areas.`,
    h1: `Emergency ${ind.tradespersonPlural} in ${city.name}, ${city.stateAbbr}: 24/7 Response Available`,
    intro: `${ind.name} emergencies in ${city.name} don't wait for business hours. ${cityContext} When you're facing an urgent ${ind.name.toLowerCase()} situation in ${city.name}, you need a licensed professional who can respond quickly — not a company that answers the phone but schedules you three days out. Here's how to find and evaluate 24/7 emergency ${ind.tradespersonPlural.toLowerCase()} in ${city.name} when you need them most.`,
    sections: [
      {
        h2: `Why ${city.name} Has High Demand for Emergency ${ind.namePlural}`,
        paragraphs: [
          cityContext,
          `${city.name}'s ${city.climate} means ${ind.name.toLowerCase()} emergencies occur across a wide range of weather conditions and seasons. ${city.housingNote.charAt(0).toUpperCase() + city.housingNote.slice(1)} means local ${ind.tradespersonPlural.toLowerCase()} encounter these situations regularly and are prepared to respond effectively.`,
        ],
      },
      {
        h2: `Genuine ${ind.name} Emergencies in ${city.name}`,
        paragraphs: [
          `Not every ${ind.name.toLowerCase()} problem in ${city.name} requires emergency service — and emergency rates run 1.5–2x standard pricing. Knowing what genuinely requires immediate attention protects you from unnecessary emergency fees while ensuring you get fast help when it truly matters.`,
        ],
        bullets: ind.commonProblems.slice(0, 5).map((p) => `${p} — genuine emergency in ${city.name} conditions`),
      },
      {
        h2: `How to Find a Real 24/7 ${ind.tradesperson} in ${city.name}`,
        paragraphs: [
          `When searching for emergency ${ind.name.toLowerCase()} in ${city.name}, verify that the company actually dispatches from within the metro area. Response times vary dramatically between a locally based team and a regional franchise dispatching from across the city.`,
          `Look specifically for Google reviews of ${city.name} customers that mention emergency or after-hours service and include specific response time details. A company with verified emergency response reviews in ${city.name} is far more likely to actually deliver on that promise than one that merely advertises it.`,
          `${ind.whyLocalMatters} During an emergency, this local advantage translates directly into faster arrival times and better familiarity with the specific conditions driving the crisis.`,
        ],
      },
      {
        h2: `Emergency ${ind.name} Costs in ${city.name}`,
        paragraphs: [
          `Emergency ${ind.name.toLowerCase()} rates in ${city.name} typically run 1.5–2x the standard rate, with standard jobs ranging ${ind.avgJobValue}. After-hours service fees vary by company but typically add $100–$250 on top of the standard diagnostic or service call charge.`,
          `Even in a genuine emergency, always ask for a price estimate before authorizing work. A professional ${ind.tradesperson.toLowerCase()} in ${city.name} will provide an estimate quickly — the urgency of the situation doesn't change your right to know what you'll be charged.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Offer Emergency ${ind.namePlural} in ${city.name}?`,
    ctaBody: `Make sure ${city.name} homeowners can find you the moment an emergency hits. We build 24/7-ready contractor websites that get your phone ringing when it matters most.`,
    pageType: "city-emergency",
    industry: ind,
    city,
  };
}

function genCityBestPage(ind: Industry, city: City, slug: string): GeneratedPage {
  const cityContext = city.context[ind.id] || `${city.name} has strong demand for professional ${ind.name.toLowerCase()} services.`;
  return {
    slug,
    metaTitle: `Best ${ind.tradespersonPlural} in ${city.name}, ${city.stateAbbr} | Best Local Service Sites`,
    metaDescription: `Looking for the best ${ind.tradesperson.toLowerCase()} in ${city.name}? Here's how to find top-rated, licensed ${ind.tradespersonPlural.toLowerCase()} in ${city.name} and what to look for before hiring.`,
    h1: `Best ${ind.tradespersonPlural} in ${city.name}, ${city.stateAbbr}: How to Find the Right Professional`,
    intro: `Finding the best ${ind.tradesperson.toLowerCase()} in ${city.name} means cutting through dozens of listings to find the one that's right for your specific situation, budget, and timeline. ${cityContext} This guide gives you a city-specific framework for evaluating ${city.name}'s ${ind.name.toLowerCase()} professionals and making a confident decision.`,
    sections: [
      {
        h2: `What Makes the Best ${ind.tradespersonPlural} in ${city.name} Stand Out`,
        paragraphs: [
          `The best ${ind.tradespersonPlural.toLowerCase()} in ${city.name} share a specific set of qualities: verifiable licensing, consistent Google reviews that mention ${city.name} by name, fast response to inquiries, and a track record of honest, transparent communication.`,
          `${cityContext} The ${ind.tradespersonPlural.toLowerCase()} who understand these local conditions and have the experience to work within them are the ones who deliver consistently better results for ${city.name} homeowners.`,
          `${ind.whyLocalMatters} This is especially true in ${city.name}, where ${city.climate} creates specific demands that require genuine local expertise.`,
        ],
      },
      {
        h2: `How to Evaluate ${ind.tradespersonPlural} in ${city.name}`,
        paragraphs: [
          `Start your search on Google Maps and search for ${ind.tradespersonPlural.toLowerCase()} in ${city.name}. Sort by rating and look for companies with at least 10 recent reviews averaging 4.5 stars or higher. Pay attention to reviews that mention specific neighborhoods in ${city.name} — those are the most credible signals of genuine local service.`,
          `After identifying three to five candidates, verify their licensing through ${city.state}'s contractor licensing board, confirm they carry insurance, and ask each for a written estimate. Compare the proposals carefully — scope, materials, timeline, and warranty terms matter as much as the bottom line.`,
        ],
        bullets: [
          `Verify ${city.state} state license — required for professional ${ind.name.toLowerCase()} work`,
          "Confirm general liability and workers' compensation insurance",
          `Look for reviews mentioning ${city.name} neighborhoods specifically`,
          "Request itemized written estimates from at least 3 companies",
          "Ask for references from similar recent jobs in the ${city.name} area",
          "Confirm response time and availability for your timeframe",
        ],
      },
      {
        h2: `${ind.name} Pricing in ${city.name}`,
        paragraphs: [
          `${ind.name} costs in ${city.name} generally align with the national range of ${ind.avgJobValue}, though specific market conditions in ${city.name} may create some variation. ${city.name}'s ${city.climate} and ${city.housingNote} both influence the demand patterns and pricing levels that local ${ind.tradespersonPlural.toLowerCase()} operate within.`,
          `The best ${ind.tradespersonPlural.toLowerCase()} in ${city.name} are not necessarily the most expensive — but they are rarely the cheapest. Fair pricing for quality work from a licensed, insured professional in ${city.name} falls within the market range. Quotes dramatically below market should be investigated carefully before acceptance.`,
        ],
      },
      {
        h2: `${city.name} Neighborhoods and ${ind.name} Demand`,
        paragraphs: [
          `${ind.name} demand varies across ${city.name}'s diverse neighborhoods. ${city.housingNote.charAt(0).toUpperCase() + city.housingNote.slice(1)}, so homeowners in different parts of the city may encounter different types of ${ind.name.toLowerCase()} needs and different levels of contractor availability.`,
          `The best ${ind.tradesperson.toLowerCase()} in ${city.name} typically serve the full metro area and have experience with the specific conditions common in different neighborhoods. When you contact a ${ind.tradesperson.toLowerCase()}, ask specifically about their experience in your part of ${city.name}.`,
        ],
      },
    ],
    faq: ind.faqs,
    stats: ind.stats,
    comparisons: ind.comparisons,
    ctaHeadline: `Are You One of the Best ${ind.tradespersonPlural} in ${city.name}?`,
    ctaBody: `We build websites for ${city.name}'s top ${ind.name.toLowerCase()} contractors that rank prominently in local search and convert homeowners into calls. Get a free quote today.`,
    pageType: "city-best",
    industry: ind,
    city,
  };
}
