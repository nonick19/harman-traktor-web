import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { absoluteUrl, LOCALES, LOCALE_TAGS } from '@/i18n'

// `output: export` ile statik üretim için gerekli.
export const dynamic = 'force-static'

interface SitemapPath {
  readonly path: string
  readonly priority: number
  readonly changeFrequency: 'monthly' | 'yearly'
}

const PATHS: readonly SitemapPath[] = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/hizmetler', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/kurumsal', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/markalar', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/referanslar', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/iletisim', priority: 0.7, changeFrequency: 'yearly' },
]

/**
 * Site haritası: her sayfanın üç dildeki sürümü ve hreflang alternatifleri
 * (Google'ın dilleri ilişkilendirmesi için).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const item of PATHS) {
    const languages: Record<string, string> = {}
    for (const locale of LOCALES) {
      languages[LOCALE_TAGS[locale]] = absoluteUrl(locale, item.path, SITE_URL)
    }

    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(locale, item.path, SITE_URL),
        lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
