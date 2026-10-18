import KurumsalView from '@/views/KurumsalView'
import { getDictionary } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

const locale = 'tr' as const

export const metadata = pageMetadata(locale, 'kurumsal', '/kurumsal', [
  'Hüseyin Baydur hakkında',
  'Çorum New Holland bayi',
  'kurumsal tarihçe',
])

export default function Page() {
  return <KurumsalView locale={locale} dict={getDictionary(locale)} />
}
