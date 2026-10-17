import type { Metadata } from 'next'
import {
  AREA_SERVED,
  FOUNDING_YEAR,
  OPENING_HOURS,
  SITE_CONTACT,
  SITE_GEO,
  SITE_URL,
} from '@/lib/site'

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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
