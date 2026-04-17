import type { SiteConfig } from "../types/site-config";

interface LocalBusinessSchemaProps {
  config: SiteConfig;
}

export function LocalBusinessSchema({ config }: LocalBusinessSchemaProps) {
  // Map our internal string verticals to precise schema.org LocalBusiness types
  const verticalToSchemaType: Record<string, string> = {
    roofing: "RoofingContractor",
    hvac: "HVACBusiness",
    plumbing: "Plumber",
    landscaping: "HomeAndConstructionBusiness",
    cleaning: "HousePainter", // Schema lacks 'CleaningService', HousePainter/LocalBusiness is closest sub-class
    painting: "HousePainter",
  };

  const schemaType = verticalToSchemaType[config.vertical] || "LocalBusiness";

  // Compute structured JSON-LD object natively
  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: config.businessName,
    image: config.heroPoster || "https://bestlocalservicesites.com/favicon.ico",
    "@id": config.siteUrl || `https://bestlocalservicesites.com/${config.vertical}`,
    url: config.siteUrl || `https://bestlocalservicesites.com/${config.vertical}`,
    telephone: config.phone,
    areaServed: config.locations.map((loc) => ({
      "@type": "City",
      name: loc.city,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: config.rating.toFixed(1),
      reviewCount: config.reviewCount.toString(),
    },
    // Dynamically insert services into an OfferCatalog for service schemas
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Offered",
      itemListElement: config.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDesc,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
