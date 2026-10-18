import { notFound } from 'next/navigation'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HtmlLang from '@/components/HtmlLang'
import { getDictionary, isLocale, LOCALES } from '@/i18n'

/** Varsayılan dil (tr) kök adreste; bu segment yalnızca en ve ru üretir. */
export function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== 'tr').map((lang) => ({ lang }))
}

/** Türkçe dışındaki dillerin ortak düzeni (`/en`, `/ru`). */
export default async function LanguageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLocale(lang) || lang === 'tr') notFound()

  const dict = getDictionary(lang)

  return (
    <>
      <HtmlLang locale={lang} />
      <SiteHeader locale={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={lang} dict={dict} />
    </>
  )
}
