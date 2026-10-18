import type { Metadata } from 'next'
import ReferanslarView from '@/views/ReferanslarView'
import { getDictionary, toLocale } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return pageMetadata(toLocale(lang), 'referanslar', '/referanslar')
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = toLocale(lang)
  return <ReferanslarView locale={locale} dict={getDictionary(locale)} />
}
