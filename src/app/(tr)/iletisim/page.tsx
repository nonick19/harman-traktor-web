import IletisimView from '@/views/IletisimView'
import { getDictionary } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

const locale = 'tr' as const

export const metadata = pageMetadata(locale, 'iletisim', '/iletisim', [
  'Hüseyin Baydur iletişim',
  'Çorum servis adresi',
  'New Holland servis iletişim',
])

export default function Page() {
  return <IletisimView locale={locale} dict={getDictionary(locale)} />
}
