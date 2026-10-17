import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// `output: export` ile statik üretim için gerekli.
export const dynamic = 'force-static'

/**
 * Site haritası: tüm statik rotalar (Google indekslemesi için).
 * `trailingSlash` ile üretilen adreslerle birebir eşleşmesi için sonuna "/" eklenir.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}/hizmetler/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kurumsal/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/markalar/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/referanslar/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/iletisim/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
