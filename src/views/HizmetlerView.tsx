import PageHero from '@/components/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CtaBanner from '@/components/CtaBanner'
import { servicesJsonLd } from '@/lib/seo'
import type { Dictionary, Locale } from '@/i18n'

/** Hizmetler sayfa içeriği (tüm diller için ortak). */
export default function HizmetlerView({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const d = dict.hizmetler
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd(locale)) }}
      />
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={d.eyebrow}
        breadcrumb={d.breadcrumb}
        title={d.title}
        description={d.description}
      />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid dict={dict} variant="detailed" />
        </div>
      </section>

      <CtaBanner
        locale={locale}
        dict={dict}
        title={d.ctaTitle}
        description={d.ctaDescription}
      />
    </>
  )
}
