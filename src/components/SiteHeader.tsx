'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Tractor } from 'lucide-react'
import { ROUTES, SITE_CONTACT } from '@/lib/site'
import { localizedHref, type Dictionary, type Locale } from '@/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const normalize = (path: string) => path.replace(/\/+$/, '') || '/'

export default function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sayfa değişince mobil menüyü kapat.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const current = normalize(pathname)

  const navItems = [
    { path: ROUTES.kurumsal, label: dict.nav.kurumsal },
    { path: ROUTES.hizmetler, label: dict.nav.hizmetler },
    { path: ROUTES.markalar, label: dict.nav.markalar },
    { path: ROUTES.referanslar, label: dict.nav.referanslar },
    { path: ROUTES.iletisim, label: dict.nav.iletisim },
  ]

  const isActive = (path: string) => current === normalize(localizedHref(locale, path))

  const contactHref = localizedHref(locale, ROUTES.iletisim)

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/90 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={localizedHref(locale, ROUTES.home)}
          className="flex items-center gap-3"
          aria-label={dict.header.homeAria}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
            <Tractor className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-ink">
              HÜSEYİN BAYDUR
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              {dict.header.brandSubtitle}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={dict.header.mainNav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={localizedHref(locale, item.path)}
              aria-current={isActive(item.path) ? 'page' : undefined}
              className={`text-sm font-medium transition-colors duration-200 hover:text-navy ${
                isActive(item.path) ? 'text-navy' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE_CONTACT.phoneE164}`}
            className="hidden items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-deep xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE_CONTACT.phoneDisplay}
          </a>
          <LanguageSwitcher
            locale={locale}
            label={dict.header.languageLabel}
            className="hidden sm:inline-flex"
          />
          <Link
            href={contactHref}
            className="hidden rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep sm:inline-flex"
          >
            {dict.header.contactCta}
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? dict.header.menuClose : dict.header.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-line bg-canvas px-4 pb-5 pt-2 lg:hidden"
          aria-label={dict.header.mobileNav}
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={localizedHref(locale, item.path)}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-surface-strong py-3 text-sm font-medium transition-colors duration-200 hover:text-navy ${
                  isActive(item.path) ? 'text-navy' : 'text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${SITE_CONTACT.phoneE164}`}
              className="flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE_CONTACT.phoneDisplay}
            </a>
            <LanguageSwitcher
              locale={locale}
              label={dict.header.languageLabel}
              className="inline-flex self-start sm:hidden"
            />
            <Link
              href={contactHref}
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              {dict.header.contactCta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
