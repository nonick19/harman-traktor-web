import Image from 'next/image'
import { Target, Eye } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import Timeline from '@/components/sections/Timeline'
import CtaBanner from '@/components/CtaBanner'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Kurumsal',
  description:
    '1967’de Çorum’da küçük bir atölyede başlayan Hüseyin Baydur’un yarım asrı aşan hikâyesi; vizyon, misyon ve kurumsal tarihçe.',
  path: '/kurumsal',
  keywords: ['Hüseyin Baydur hakkında', 'Çorum New Holland bayi', 'kurumsal tarihçe'],
})

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        breadcrumb="Kurumsal"
        title="Bir atölyeden bölgesel güce uzanan yolculuk"
        description="Hüseyin Baydur, 1967’den bu yana disiplinli servis anlayışı ve orijinal parça hassasiyetiyle tarım ve ticari araç sektörüne hizmet veriyor."
      />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/kurucu-huseyin-baydur.jpg"
                alt="Kurucu Hüseyin Baydur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-navy/95 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-white">Hüseyin Baydur</p>
              <p className="mt-1 text-xs text-slate-300">Kurucu · 1967, Çorum</p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Hakkımızda" title="Yarım asrı aşan bir ustalık" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Hüseyin Baydur, 1967 yılında Çorum Sanayi Sitesi’nde küçük bir atölyede
                işe koyuldu. Yarım asrı aşan deneyimini; disiplinli servis anlayışı,
                orijinal parça hassasiyeti ve müşterisine verdiği sözü tutma ilkesi
                üzerine kurdu.
              </p>
              <p>
                Bugün New Holland, FPT Industrial ve Iveco yetkili distribütörü olarak;
                traktörden biçerdövere, ticari araçtan motor revizyonuna kadar geniş bir
                alanda bölgeye hizmet veriyoruz. Ekibimiz, makinenin işini kesintisiz
                sürdürmesini sağlayacak hız ve doğrulukta çalışır.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-6">
                <Target className="h-6 w-6 text-nh-yellow" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-navy">Vizyonumuz</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Türkiye’nin tarım ve ticari araç servisinde referans alınan, güvenilir
                  ve yenilikçi distribütörü olmak.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-6">
                <Eye className="h-6 w-6 text-nh-yellow" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-navy">Misyonumuz</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Müşterinin işini kesintisiz sürdürmesini sağlayacak hızlı, doğru ve
                  orijinal çözümler sunmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tarihçe"
            title="Kilometre taşlarımız"
            description="Küçük bir atölyeden uluslararası operasyona uzanan yolculuk."
          />
          <Timeline />
        </div>
      </section>

      <CtaBanner
        title="Kurumsal iş birliği ve tedarik için görüşelim"
        description="Filolar, kooperatifler ve yetkili servis ağı iş birlikleri için ekibimize ulaşın."
      />
    </>
  )
}
