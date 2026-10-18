'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALES, LOCALE_SHORT, localizedHref, splitLocale, type Locale } from '@/i18n'

/** Başlıktaki TR / EN / RU dil değiştirici (aynı sayfanın diğer dil sürümüne gider). */
export default function LanguageSwitcher({
  locale,
  label,
  className = '',
}: {
  locale: Locale
  label: string
  className?: string
}) {
  const pathname = usePathname()
  const { path } = splitLocale(pathname)

  return (
    <div
      role="group"
      aria-label={label}
      className={`items-center rounded-lg border border-line bg-canvas p-0.5 ${
        className || 'inline-flex'
      }`}
    >
      {LOCALES.map((candidate) => {
        const active = candidate === locale
        return (
          <Link
            key={candidate}
            href={localizedHref(candidate, path)}
            aria-current={active ? 'true' : undefined}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
              active
                ? 'bg-navy text-white'
                : 'text-muted hover:text-navy'
            }`}
          >
            {LOCALE_SHORT[candidate]}
          </Link>
        )
      })}
    </div>
  )
}
