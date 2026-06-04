import { reviews } from "@/lib/data/reviews";
import { serviceAreas } from "@/lib/data/service-areas";
import { services } from "@/lib/data/services";
import { site } from "@/lib/site";
import type { BreadcrumbItem, FAQItem } from "@/lib/types";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/og-cover.png`,
    description: site.description,
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Concord",
      addressRegion: "CA",
      addressCountry: "US",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "5",
    },
  };
}

export function getFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function getReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: site.name,
        telephone: site.phoneRaw,
        areaServed: review.area,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "5",
      },
      reviewBody: review.text,
      datePublished: "2026-06-03",
      name: `${review.service} review from ${review.area}`,
    })),
  };
}
