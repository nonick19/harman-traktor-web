import type { Metadata } from 'next'
import KurumsalView from '@/views/KurumsalView'
import { getDictionary, toLocale } from '@/i18n'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return pageMetadata(toLocale(lang), 'kurumsal', '/kurumsal')
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = toLocale(lang)
  return <KurumsalView locale={locale} dict={getDictionary(locale)} />
}
