import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import StatsBand from '@/components/sections/StatsBand'
import CtaBanner from '@/components/CtaBanner'
import { AREA_SERVED } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Referanslar',
  description:
    'Yarım asrı aşan deneyim, bölgedeki üreticiler ve ticari filolar için kesintisiz hizmet: 1967’den bugüne Hüseyin Baydur referansları.',
  path: '/referanslar',
  keywords: ['Hüseyin Baydur referanslar', 'Çorum tarım servisi', 'filo servis'],
})

export default function ReferanslarPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        breadcrumb="Referanslar"
        title="Rakamlarla ve sahayla güven"
        description="Deneyimimiz her sezonda sahada test ediliyor. Bölgenin üreticileri, kooperatifleri ve ticari filoları için kesintisiz hizmet sunuyoruz."
      />

      <StatsBand showTags />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hizmet Bölgesi"
            title="Çorum ve çevre illerde yanınızdayız"
            description="Merkez servis atölyemizin yanı sıra saha ekibimizle geniş bir bölgeye hizmet veriyoruz."
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
        title="Siz de referanslarımıza katılın"
        description="İşletmenizin ihtiyaçlarını konuşmak ve size özel çözüm almak için bize ulaşın."
      />
    </>
  )
}
