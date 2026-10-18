import ReferanslarView from '@/views/ReferanslarView'
import { getDictionary } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

const locale = 'tr' as const

export const metadata = pageMetadata(locale, 'referanslar', '/referanslar', [
  'Hüseyin Baydur referanslar',
  'Çorum tarım servisi',
  'filo servis',
])

export default function Page() {
  return <ReferanslarView locale={locale} dict={getDictionary(locale)} />
}
