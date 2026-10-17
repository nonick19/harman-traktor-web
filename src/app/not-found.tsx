import Link from 'next/link'
import { ArrowLeft, Tractor } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site'

export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-nh-yellow">
          <Tractor className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-8 font-mono text-5xl font-bold text-navy">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam
          edebilirsiniz.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-navy transition-colors duration-200 hover:border-navy/40"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  )
}
