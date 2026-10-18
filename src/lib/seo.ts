import type { Metadata } from 'next'
import {
  AREA_SERVED,
  FOUNDING_YEAR,
  OPENING_HOURS,
  SITE_CONTACT,
  SITE_GEO,
  SITE_URL,
} from '@/lib/site'
import {
  absoluteUrl,
  getDictionary,
  LOCALES,
  LOCALE_TAGS,
  type Locale,
} from '@/i18n'

/** Sosyal paylaşım görseli (statik dosya). */
export const OG_IMAGE = '/og-image.png'

/** Çevrilen sayfa anahtarları. */
export type MetaKey =
  | 'home'
  | 'kurumsal'
  | 'hizmetler'
  | 'markalar'
  | 'referanslar'
  | 'iletisim'

/** Open Graph dil kodları. */
const OG_LOCALES: Record<Locale, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  ru: 'ru_RU',
}

/**
 * Sayfa bazlı meta veri üretir: yerelleştirilmiş başlık, açıklama, canonical,
 * hreflang alternatifleri ve sosyal kartlar. Tüm diller aynı yardımcıyı kullanır.
 */
export function pageMetadata(
  locale: Locale,
  key: MetaKey,
  path: string,
  extraKeywords: readonly string[] = [],
): Metadata {
  const dict = getDictionary(locale)
  const meta = dict.meta[key]
  const url = absoluteUrl(locale, path, SITE_URL)

  // hreflang: her sayfa için üç dilin adresi + x-default (Türkçe).
  const languages: Record<string, string> = {}
  for (const candidate of LOCALES) {
    languages[LOCALE_TAGS[candidate]] = absoluteUrl(candidate, path, SITE_URL)
  }
  languages['x-default'] = absoluteUrl('tr', path, SITE_URL)

  return {
    // Ana sayfa başlığı zaten marka içerir; şablonun eklenmemesi için absolute kullanılır.
    title: key === 'home' ? { absolute: meta.title } : meta.title,
    description: meta.description,
    keywords: [...dict.meta.keywords, ...extraKeywords],
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      locale: OG_LOCALES[locale],
      url,
      siteName: SITE_CONTACT.companyName,
      title: meta.title,
      description: meta.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  }
}

/** schema.org AutomotiveBusiness yapılandırılmış verisi (Google zengin sonuçları için). */
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

/** Hizmetlerin schema.org ItemList yapılandırılmış verisi (dile göre). */
export function servicesJsonLd(locale: Locale): Record<string, unknown> {
  const dict = getDictionary(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LOCALE_TAGS[locale],
    itemListElement: dict.services.map((service, index) => ({
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
