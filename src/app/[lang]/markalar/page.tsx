import type { Metadata } from 'next'
import MarkalarView from '@/views/MarkalarView'
import { getDictionary, toLocale } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return pageMetadata(toLocale(lang), 'markalar', '/markalar')
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = toLocale(lang)
  return <MarkalarView locale={locale} dict={getDictionary(locale)} />
}
