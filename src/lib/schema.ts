import { SITE } from '../data/site';

const ORG_ID = `${SITE.url}/#business`;

/** LocalBusiness / ProfessionalService entity (single source of truth). */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'PhotographyBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    image: `${SITE.url}/og-image.jpg`,
    logo: `${SITE.url}/apple-touch-icon.png`,
    url: SITE.url,
    telephone: SITE.phone.tel,
    email: SITE.email,
    priceRange: SITE.priceRange,
    foundingDate: String(SITE.founded),
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [SITE.maps],
    areaServed: {
      '@type': 'City',
      name: 'İstanbul',
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: 'Biyometrik fotoğraf çekimi',
    url: opts.url,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'City', name: 'İstanbul' },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
