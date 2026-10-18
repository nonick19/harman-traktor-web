import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import StatsBand from '@/components/sections/StatsBand'
import CtaBanner from '@/components/CtaBanner'
import { AREA_SERVED } from '@/lib/site'
import type { Dictionary, Locale } from '@/i18n'

/** Referanslar sayfa içeriği (tüm diller için ortak). */
export default function ReferanslarView({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const d = dict.referanslar
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

      <StatsBand dict={dict} showTags />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={d.areaEyebrow}
            title={d.areaTitle}
            description={d.areaDescription}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {AREA_SERVED.map((city) => (
              <span
                key={city}
                className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-navy"
              >
                {city}
              </span>
            ))}
          </div>
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
