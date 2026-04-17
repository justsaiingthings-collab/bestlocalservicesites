# CLAUDE.md

## Context

This is a monorepo for a SaaS product called "Best Local Service Sites".

We build and manage high-converting websites for home service businesses (roofing, HVAC, plumbing, landscaping, cleaning, painting).

Core offering:
- Website + hosting ($149/month)
- Multi-location support (+$45/location)
- Conversion pack (+$49/month)

The system is NOT a generic website builder.
It is a **lead conversion + follow-up system**.

---

## CRITICAL PRODUCT PRINCIPLE

Every page must answer:

👉 "How does this generate more calls or booked jobs?"

If it does not → remove it.

---

## CONVERSION-FIRST RULE (NEW - STRICT)

Websites are NOT brochures.

They must:
- Capture leads
- Encourage calls immediately
- Trigger follow-up (Conversion Pack)

Every interaction should push toward:
👉 Call OR Form submission

---

## CONVERSION PACK (MANDATORY INTEGRATION)

All demo sites MUST assume Conversion Pack is enabled.

This includes:

- Instant lead capture (form)
- SMS CTA (click-to-text)
- Call CTA (click-to-call)
- Placeholder for:
  - instant SMS reply
  - missed call text-back
  - follow-up automation

UI must reflect:
👉 “You will get a response immediately”

---

## MOBILE-FIRST CALL UX (CRITICAL)

Phone interaction is the #1 conversion path.

### MUST HAVE:

- Sticky mobile CTA bar:
  - “Call Now”
  - “Get Quote”

- Click-to-call enabled:
  - tel: links everywhere

- Phone number always visible:
  - Header (top-right)
  - Hero section
  - Footer

If phone is not visible within 3 seconds → FAIL

---

## EMERGENCY CTA SYSTEM (NEW)

Some businesses serve urgent needs (HVAC, plumbing, roofing).

### MUST support:

Configurable flag:
- `isEmergencyService: true/false`

---

### If TRUE:

UI must change:

- Hero headline includes urgency:
  - “24/7 Emergency AC Repair in Seattle”

- Add:
  - “Call Now – Available 24/7”
  - Emergency badge

- CTA priority:
  - Call > Form

---

### If FALSE:

- Normal CTA tone:
  - “Request a Free Estimate”

---

## CTA SYSTEM (STRICT)

Every page must have:

- Primary CTA (Call Now)
- Secondary CTA (Get Quote)

### Placement rules:

- Above the fold
- Every 2–3 sections
- Sticky on mobile

---

## SMART FORM SYSTEM (NEW - IMPORTANT)

Forms must be minimal but adaptive.

### Base fields (always visible):

- Name
- Phone
- Service needed (dropdown or short input)

---

### Conditional fields (based on intent):

If user selects:
- “Emergency” → ask urgency + issue type
- “Quote” → ask project details (optional)
- “Installation” → ask property type

---

### RULES:

- Never show long forms initially
- Progressive disclosure only
- Optimize for completion, not data collection

---

## MULTI-LOCATION SUPPORT (MANDATORY IN DEMOS)

Each demo must include:

- Multiple service areas (2–3 cities)

Example:
- Seattle
- Bellevue
- Redmond

---

### Requirements:

- Location selector OR clearly listed areas
- Location-specific pages:

  Example:
  - /roof-repair-seattle
  - /roof-repair-bellevue

---

### Content must include:

- “Serving [City] and surrounding areas”
- Local references

---

## ANTI-AI SLOP RULES (STRICT)

### ❌ Avoid:
- "High-quality solutions"
- "Trusted partner"
- "Cutting-edge"
- Generic filler text

---

### ✅ Use:
- Real services
- Real locations
- Direct language
- Short sentences

Example:

Bad:
"We provide innovative plumbing solutions"

Good:
"Pipe leaking? Call us. We fix it same day in Bellevue."

---

## DESIGN PHILOSOPHY

This is NOT SaaS UI.

This is:
👉 Contractor conversion UI

---

### MUST HAVE:

- Bold headlines
- High contrast CTA buttons
- Minimal text
- Fast scanning layout
- Mobile-first

---

### AVOID:

- Fancy animations
- Complex layouts
- Startup-style dashboards

---

## STRUCTURE REQUIREMENTS

Each demo site must include:

- Home
- Services
- Individual service pages
- About
- Contact

---

## HOMEPAGE RULES (MANDATORY)

### 1. Top Bar
- Phone number (clickable)
- Service area

---

### 2. Hero
- Service + location
- Emergency variant if enabled
- Call CTA + Quote CTA

---

### 3. Trust Section
- Rating (4.7–4.9 realistic)
- Testimonials with city references
- Certifications

---

### 4. Services
- 3–6 services
- Each links to page

---

### 5. Why Choose Us
- Bullet points:
  - Licensed
  - Insured
  - Same-day service

---

### 6. CTA Section
- Call + form

---

## SERVICE PAGE RULES

Each page must target:

👉 "[Service] in [City]"

Include:
- Problem → solution
- Local context
- FAQ
- CTA

---

## LEAD CAPTURE RULES

- Forms must be short
- Phone CTA always present
- Encourage call first for urgent services

---

## PERFORMANCE RULES

- Lighthouse >90
- Static generation (SSG)
- Fast load (<2s)

---

## COMPONENT SYSTEM

Reusable:

- StickyHeader (phone + CTA)
- MobileStickyCTA
- Hero
- ServiceGrid
- CTASection
- LeadForm (adaptive)
- Testimonials

---

## MONOREPO STRUCTURE

/apps
  /landing
  /demo-roofing
  /demo-hvac
  /demo-plumbing
  /demo-landscaping
  /demo-cleaning
  /demo-painting

/packages
  /ui
  /templates

---

## CONTENT QUALITY CHECKLIST

Before finalizing:

- Is phone number visible immediately?
- Is CTA clear?
- Is location mentioned?
- Is service specific?
- Would a homeowner call this business?

If not → fix.

---

## WHAT WE ARE BUILDING

We are NOT building:
- Pretty websites
- Generic templates

We ARE building:
- Lead conversion systems
- Call-generating websites
- Revenue infrastructure
