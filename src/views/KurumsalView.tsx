import Image from 'next/image'
import { Target, Eye } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import Timeline from '@/components/sections/Timeline'
import CtaBanner from '@/components/CtaBanner'
import type { Dictionary, Locale } from '@/i18n'

/** Kurumsal sayfa içeriği (tüm diller için ortak). */
export default function KurumsalView({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const d = dict.kurumsal
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
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

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-6">
                <Target className="h-6 w-6 text-nh-yellow" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {d.visionTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {d.visionText}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-6">
                <Eye className="h-6 w-6 text-nh-yellow" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {d.missionTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {d.missionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={d.timelineEyebrow}
            title={d.timelineTitle}
            description={d.timelineDescription}
          />
          <Timeline dict={dict} />
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
