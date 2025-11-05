export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Aequalis Advocades',
    description: 'Despacho de abogadas especializado en derecho de extranjería en España',
    url: 'https://www.aequalisadvocades.com',
    logo: 'https://www.aequalisadvocades.com/logo-clar.png',
    image: 'https://www.aequalisadvocades.com/og-image.jpg',
    telephone: '+34-695-595-530',
    email: 'gemma@aequalisadvocades.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Burriac 47',
      addressLocality: 'Mataró',
      addressRegion: 'Barcelona',
      postalCode: '08303',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Spain',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      // Add your social media profiles here
      // 'https://www.linkedin.com/company/aequalis-advocades',
      // 'https://www.facebook.com/aequalisadvocades',
      'https://www.instagram.com/aequalisadvocades',
    ],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Legal Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LegalService',
      name: 'Aequalis Advocades',
      url: 'https://www.aequalisadvocades.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Spain',
    },
  }
}

export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
  locale: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    inLanguage: page.locale,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Aequalis Advocades',
      url: 'https://www.aequalisadvocades.com',
    },
  }
}
