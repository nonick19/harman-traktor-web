import HizmetlerView from '@/views/HizmetlerView'
import { getDictionary } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

const locale = 'tr' as const

export const metadata = pageMetadata(locale, 'hizmetler', '/hizmetler', [
  'New Holland yetkili servis',
  'orijinal yedek parça',
  'FPT motor revizyonu',
  'biçerdöver servisi',
  'Çorum servis',
])

export default function Page() {
  return <HizmetlerView locale={locale} dict={getDictionary(locale)} />
}
