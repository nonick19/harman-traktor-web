import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import BrandsGrid from '@/components/sections/BrandsGrid'
import BrandStrip from '@/components/sections/BrandStrip'
import CtaBanner from '@/components/CtaBanner'
import type { Dictionary, Locale } from '@/i18n'

/** Markalar sayfa içeriği (tüm diller için ortak). */
export default function MarkalarView({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const d = dict.markalar
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandsGrid dict={dict} />
        </div>
      </section>

      <BrandStrip dict={dict} />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={d.distEyebrow}
            title={d.distTitle}
            description={d.distDescription}
          />
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
