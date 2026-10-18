import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { ROUTES, SITE_CONTACT } from '@/lib/site'
import { localizedHref, type Dictionary, type Locale } from '@/i18n'

/** Sayfa altlarında yinelenen harekete geçirici (CTA) bandı. */
export default function CtaBanner({
  locale,
  dict,
  title,
  description,
}: {
  locale: Locale
  dict: Dictionary
  title: string
  description: string
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={localizedHref(locale, ROUTES.iletisim)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-nh-yellow px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-white"
          >
            {dict.ctaBanner.contact}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={`tel:${SITE_CONTACT.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE_CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
