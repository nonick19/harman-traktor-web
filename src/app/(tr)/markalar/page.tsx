import MarkalarView from '@/views/MarkalarView'
import { getDictionary } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

const locale = 'tr' as const

export const metadata = pageMetadata(locale, 'markalar', '/markalar', [
  'New Holland',
  'FPT Industrial',
  'Iveco',
  'yetkili distribütör',
  'CNH',
])

export default function Page() {
  return <MarkalarView locale={locale} dict={getDictionary(locale)} />
}
