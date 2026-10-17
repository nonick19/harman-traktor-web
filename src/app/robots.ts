import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// `output: export` ile statik üretim için gerekli.
export const dynamic = 'force-static'

/** Arama motoru yönergeleri. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
