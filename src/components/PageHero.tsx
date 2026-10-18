import Link from 'next/link'
import { ROUTES } from '@/lib/site'
import { localizedHref, type Dictionary, type Locale } from '@/i18n'

/** Alt sayfaların üst kısmındaki başlık bloğu (sayfa yolu + başlık + açıklama). */
export default function PageHero({
  locale,
  dict,
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  locale: Locale
  dict: Dictionary
  eyebrow: string
  title: string
  description?: string
  breadcrumb: string
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-muted"
        >
          <Link
            href={localizedHref(locale, ROUTES.home)}
            className="transition-colors duration-200 hover:text-navy"
          >
            {dict.common.home}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy">{breadcrumb}</span>
        </nav>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-8 bg-nh-yellow" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
