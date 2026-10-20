import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { ROUTES, SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'
import { localizedHref, type Dictionary, type Locale } from '@/i18n'

export default function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const waUrl = buildWhatsAppUrl(dict.whatsappMessage)

  const navItems = [
    { path: ROUTES.kurumsal, label: dict.nav.kurumsal },
    { path: ROUTES.hizmetler, label: dict.nav.hizmetler },
    { path: ROUTES.markalar, label: dict.nav.markalar },
    { path: ROUTES.referanslar, label: dict.nav.referanslar },
    { path: ROUTES.iletisim, label: dict.nav.iletisim },
  ]

  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href={localizedHref(locale, ROUTES.home)}
            className="flex items-center gap-3"
            aria-label={dict.header.homeAria}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1">
              <BrandMark className="h-full w-full object-contain" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Hüseyin Baydur
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            {dict.footer.corporateHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={localizedHref(locale, item.path)}
                  className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            {dict.footer.servicesHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {dict.services.map((service) => (
              <li key={service.id}>
                <Link
                  href={localizedHref(locale, ROUTES.hizmetler)}
                  className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            {dict.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nh-yellow" aria-hidden="true" />
              <span className="text-slate-400">{SITE_CONTACT.addressLines.join(' ')}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-nh-yellow" aria-hidden="true" />
              <a
                href={`tel:${SITE_CONTACT.phoneE164}`}
                className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
              >
                {SITE_CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-nh-yellow" aria-hidden="true" />
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
              >
                {SITE_CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-nh-yellow" aria-hidden="true" />
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
              >
                {dict.common.whatsappWrite}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © 1967–{new Date().getFullYear()} {SITE_CONTACT.companyName}. {dict.footer.rights}
          </p>
          <p className="font-mono tracking-wide text-slate-500">
            CNH · FPT INDUSTRIAL · IVECO
          </p>
        </div>
      </div>
    </footer>
  )
}
