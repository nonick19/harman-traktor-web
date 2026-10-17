import type { MetadataRoute } from 'next'
import { SITE_CONTACT } from '@/lib/site'

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
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
