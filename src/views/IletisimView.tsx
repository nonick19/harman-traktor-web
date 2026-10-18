import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'
import type { Dictionary, Locale } from '@/i18n'

/** İletişim sayfa içeriği (tüm diller için ortak). */
export default function IletisimView({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const d = dict.iletisim
  const whatsappUrl = buildWhatsAppUrl(dict.whatsappMessage)

  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={d.eyebrow}
        breadcrumb={d.breadcrumb}
        title={d.title}
        description={d.description}
      />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="space-y-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{dict.common.address}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {SITE_CONTACT.addressLines.join(' ')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{dict.common.phone}</p>
                  <a
                    href={`tel:${SITE_CONTACT.phoneE164}`}
                    className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                  >
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{dict.common.email}</p>
                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                  >
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{dict.common.whatsapp}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                  >
                    {d.whatsappValue}
                  </a>
                </div>
              </li>
            </ul>

            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-line">
              <iframe
                src={SITE_CONTACT.mapEmbedUrl}
                title={dict.common.mapTitle}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-navy">{d.formTitle}</h2>
            <p className="mt-2 text-sm text-muted">{d.formSubtitle}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {dict.common.whatsapp}
              </a>
              <a
                href={`tel:${SITE_CONTACT.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {dict.common.phone}
              </a>
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {dict.common.email}
              </a>
            </div>
            <div className="mt-8">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
