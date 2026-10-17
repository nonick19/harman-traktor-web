import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'İletişim',
  description:
    'Hüseyin Baydur iletişim: Çorum Sanayi Sitesi’ndeki servis merkezimiz, telefon, e-posta ve WhatsApp ile hızlı destek.',
  path: '/iletisim',
  keywords: ['Hüseyin Baydur iletişim', 'Çorum servis adresi', 'New Holland servis iletişim'],
})

export default function IletisimPage() {
  const whatsappUrl = buildWhatsAppUrl(
    `${SITE_CONTACT.companyName} — web sitesi üzerinden bilgi almak istiyorum.`,
  )

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        breadcrumb="İletişim"
        title="Size nasıl yardımcı olabiliriz?"
        description="Bakım randevusu, parça talebi veya teknik destek için formu doldurun ya da doğrudan bize ulaşın."
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
                  <p className="text-sm font-semibold text-ink">Adres</p>
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
                  <p className="text-sm font-semibold text-ink">Telefon</p>
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
                  <p className="text-sm font-semibold text-ink">E-posta</p>
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
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                  >
                    Hızlı destek için yazın
                  </a>
                </div>
              </li>
            </ul>

            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-line">
              <iframe
                src={SITE_CONTACT.mapEmbedUrl}
                title={SITE_CONTACT.mapTitle}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-navy">İletişim formu</h2>
            <p className="mt-2 text-sm text-muted">
              Bilgilerinizi bırakın, ekibimiz en kısa sürede dönüş yapsın.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONTACT.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Telefon
              </a>
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                E-posta
              </a>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
