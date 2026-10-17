import { MapPin, Phone, Mail, MessageCircle, Tractor } from 'lucide-react'
import { NAV_LINKS, SERVICES, SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'

export default function SiteFooter() {
  const waUrl = buildWhatsAppUrl(
    `${SITE_CONTACT.companyName} — web sitesi üzerinden bilgi almak istiyorum.`,
  )

  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-nh-yellow">
              <Tractor className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Hüseyin Baydur
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {SITE_CONTACT.legalNote}. 1967’den beri Çorum’dan dünyaya; yetkili servis,
            orijinal yedek parça ve motor revizyonu.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Kurumsal
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Hizmetler
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <a
                  href="#hizmetler"
                  className="text-slate-400 transition-colors duration-200 hover:text-nh-yellow"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            İletişim
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nh-yellow" aria-hidden="true" />
              <span className="text-slate-400">
                {SITE_CONTACT.addressLines.join(' ')}
              </span>
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
                WhatsApp ile yazın
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © 1967–{new Date().getFullYear()} {SITE_CONTACT.companyName}. Tüm hakları
            saklıdır.
          </p>
          <p className="font-mono tracking-wide text-slate-500">
            CNH · FPT INDUSTRIAL · IVECO
          </p>
        </div>
      </div>
    </footer>
  )
}
