import type { Metadata } from 'next'
import HizmetlerView from '@/views/HizmetlerView'
import { getDictionary, toLocale } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return pageMetadata(toLocale(lang), 'hizmetler', '/hizmetler')
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = toLocale(lang)
  return <HizmetlerView locale={locale} dict={getDictionary(locale)} />
}
