'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone, Tractor } from 'lucide-react'
import { NAV_LINKS, SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waUrl = buildWhatsAppUrl(
    `${SITE_CONTACT.companyName} — web sitesi üzerinden bilgi almak istiyorum.`,
  )

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/90 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
            <Tractor className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-ink">
              HÜSEYİN BAYDUR
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Yetkili Distribütör · 1967
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-navy"
            >
              {link.label}
            </a>
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
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep sm:inline-flex"
          >
            Bize Ulaşın
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
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
          aria-label="Mobil menü"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-surface-strong py-3 text-sm font-medium text-ink transition-colors duration-200 hover:text-navy"
              >
                {link.label}
              </a>
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
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Bize Ulaşın
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
