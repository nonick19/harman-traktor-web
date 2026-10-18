import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { getDictionary } from '@/i18n'

const dict = getDictionary('tr')

/**
 * Varsayılan dil (Türkçe) düzeni. Kök adreste (`/`) yayınlanır;
 * üst menü ve alt bilgi Türkçe sözlükle beslenir.
 */
export default function TurkishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader locale="tr" dict={dict} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale="tr" dict={dict} />
    </>
  )
}
