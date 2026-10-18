import HomeView from '@/views/HomeView'
import { getDictionary } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

const locale = 'tr' as const

export const metadata = pageMetadata(locale, 'home', '/')

export default function Page() {
  return <HomeView locale={locale} dict={getDictionary(locale)} />
}
