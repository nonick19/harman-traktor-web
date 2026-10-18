import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import BrandStrip from '@/components/sections/BrandStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import BrandsGrid from '@/components/sections/BrandsGrid'
import StatsBand from '@/components/sections/StatsBand'
import SectionHeading from '@/components/SectionHeading'
import CtaBanner from '@/components/CtaBanner'
import { ROUTES } from '@/lib/site'
import { localizedHref, type Dictionary, type Locale } from '@/i18n'

/** Ana sayfa içeriği (tüm diller için ortak). */
export default function HomeView({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const d = dict.home
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
              <ShieldCheck className="h-4 w-4 text-nh-yellow" aria-hidden="true" />
              {d.heroBadge}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {d.heroTitleTop}
              <span className="block text-ink">{d.heroTitleBottom}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {d.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localizedHref(locale, ROUTES.hizmetler)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
              >
                {d.ctaServices}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={localizedHref(locale, ROUTES.iletisim)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-canvas px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                {d.ctaContact}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-sm">
              <Image
                src="/images/bicerdover-hero.png"
                alt={d.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-canvas p-5 shadow-lg sm:block">
              <p className="font-mono text-3xl font-bold text-navy">{d.statValue}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">
                {d.statLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip dict={dict} />

      {/* KURUMSAL ÖZET */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/kurucu-huseyin-baydur.jpg"
                alt={d.founderAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-navy/95 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-white">{d.founderCaptionName}</p>
              <p className="mt-1 text-xs text-slate-300">{d.founderCaptionRole}</p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow={d.aboutEyebrow} title={d.aboutTitle} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>{d.aboutP1}</p>
              <p>{d.aboutP2}</p>
            </div>
            <Link
              href={localizedHref(locale, ROUTES.kurumsal)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-deep"
            >
              {d.aboutLink}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* HİZMETLER ÖZET */}
      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={d.servicesEyebrow}
              title={d.servicesTitle}
              description={d.servicesDescription}
            />
            <Link
              href={localizedHref(locale, ROUTES.hizmetler)}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-deep"
            >
              {d.servicesLink}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-14">
            <ServicesGrid dict={dict} variant="compact" />
          </div>
        </div>
      </section>

      {/* MARKALAR */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={d.brandsEyebrow}
            title={d.brandsTitle}
            description={d.brandsDescription}
          />
          <div className="mt-14">
            <BrandsGrid dict={dict} />
          </div>
        </div>
      </section>

      <StatsBand dict={dict} />

      <CtaBanner
        locale={locale}
        dict={dict}
        title={d.ctaTitle}
        description={d.ctaDescription}
      />
    </>
  )
}
