import type { MetadataRoute } from 'next'
import { SITE_CONTACT } from '@/lib/site'

// `output: export` ile statik üretim için gerekli.
export const dynamic = 'force-static'

/** Web uygulaması manifesti (mobil kurulum ve tema rengi). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONTACT.companyName} — ${SITE_CONTACT.legalNote}`,
    short_name: 'H. Baydur',
    description:
      'Çorum merkezli yetkili servis, orijinal yedek parça ve FPT motor revizyonu.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0B2A5B',
    lang: 'tr',
    icons: [
      { src: '/icon.png', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
