import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ROUTES } from '@/lib/site'
import { getDictionary } from '@/i18n'
import { BrandMark } from '@/components/BrandMark'

const dict = getDictionary('tr')

export default function NotFound() {
  const navItems = [
    { path: ROUTES.kurumsal, label: dict.nav.kurumsal },
    { path: ROUTES.hizmetler, label: dict.nav.hizmetler },
    { path: ROUTES.markalar, label: dict.nav.markalar },
    { path: ROUTES.referanslar, label: dict.nav.referanslar },
    { path: ROUTES.iletisim, label: dict.nav.iletisim },
  ]

  return (
    <section className="bg-surface">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-line">
          <BrandMark className="h-full w-full object-contain" />
        </span>
        <p className="mt-8 font-mono text-5xl font-bold text-navy">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {dict.notFound.text}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="rounded-full border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-navy transition-colors duration-200 hover:border-navy/40"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={ROUTES.home}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {dict.notFound.backHome}
        </Link>
      </div>
    </section>
  )
}
