import type { Metadata } from 'next'
import {
  AREA_SERVED,
  FOUNDING_YEAR,
  OPENING_HOURS,
  SERVICES,
  SITE_CONTACT,
  SITE_GEO,
  SITE_URL,
} from '@/lib/site'

/** Sosyal paylaşım görseli (statik dosya). */
export const OG_IMAGE = '/og-image.png'

/**
 * Sayfa bazlı meta veri üretir: başlık, açıklama, canonical ve sosyal kartlar.
 * Tüm sayfalar bu yardımcıyı kullanır; böylece SEO tutarlı kalır.
 */
export interface PageMetaInput {
  readonly title: string
  readonly description: string
  readonly path: string
  readonly keywords?: readonly string[]
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  // Statik dışa aktarımda trailingSlash kullanıldığı için canonical da "/" ile biter.
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url,
      siteName: SITE_CONTACT.companyName,
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

/** schema.org LocalBusiness yapılandırılmış verisi (Google zengin sonuçları için). */
export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_CONTACT.companyName,
    description: SITE_CONTACT.legalNote,
    url: SITE_URL,
    telephone: SITE_CONTACT.phoneE164,
    email: SITE_CONTACT.email,
    foundingDate: String(FOUNDING_YEAR),
    image: `${SITE_URL}/images/bicerdover-hero.png`,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Çorum Sanayi Sitesi Caddesi No: 134, Mimarsinan Mahallesi',
      addressLocality: 'Çorum',
      addressRegion: 'Çorum',
      postalCode: '19000',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    openingHours: [...OPENING_HOURS],
    areaServed: AREA_SERVED.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    brand: [
      { '@type': 'Brand', name: 'New Holland' },
      { '@type': 'Brand', name: 'FPT Industrial' },
      { '@type': 'Brand', name: 'Iveco' },
    ],
  }
}

/** Hizmetlerin schema.org ItemList yapılandırılmış verisi. */
export function servicesJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        areaServed: AREA_SERVED.map((city) => ({ '@type': 'City', name: city })),
        provider: {
          '@type': 'AutomotiveBusiness',
          name: SITE_CONTACT.companyName,
          telephone: SITE_CONTACT.phoneE164,
        },
      },
    })),
  }
}
