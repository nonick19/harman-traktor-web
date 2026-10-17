import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import BrandStrip from '@/components/sections/BrandStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import BrandsGrid from '@/components/sections/BrandsGrid'
import StatsBand from '@/components/sections/StatsBand'
import SectionHeading from '@/components/SectionHeading'
import CtaBanner from '@/components/CtaBanner'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Hüseyin Baydur | New Holland, FPT Industrial ve Iveco Yetkili Distribütörü',
  description:
    'Çorum merkezli Hüseyin Baydur; 1967’den beri New Holland traktör ve biçerdöver, FPT Industrial motor revizyonu ve Iveco yedek parça alanında yetkili servis ve distribütörlük hizmeti sunar.',
  path: '/',
  keywords: [
    'Hüseyin Baydur',
    'New Holland yetkili servis',
    'FPT motor revizyonu',
    'Iveco yedek parça',
    'Çorum traktör servisi',
  ],
})

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
              <ShieldCheck className="h-4 w-4 text-nh-yellow" aria-hidden="true" />
              1967’den beri yetkili distribütör
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Tarım ve ticari araçta
              <span className="block text-ink">güvenin adresi.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              New Holland traktör ve biçerdöver, FPT Industrial motor revizyonu ve
              Iveco yedek parça alanında; satış öncesinden saha desteğine kadar uçtan
              uca yetkili servis güvencesi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
              >
                Hizmetlerimiz
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-canvas px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-sm">
              <Image
                src="/images/bicerdover-hero.png"
                alt="New Holland biçerdöver hasat sırasında"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-canvas p-5 shadow-lg sm:block">
              <p className="font-mono text-3xl font-bold text-navy">50+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">
                yıllık deneyim
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />

      {/* KURUMSAL ÖZET */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
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
            <SectionHeading
              eyebrow="Kurumsal"
              title="Bir atölyeden bölgesel güce uzanan yolculuk"
            />
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
                alanda bölgeye hizmet veriyoruz.
              </p>
            </div>
            <Link
              href="/kurumsal"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-deep"
            >
              Kurumsal profilimiz
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
              eyebrow="Hizmetler"
              title="Uçtan uca yetkili servis çözümleri"
              description="Satış sonrası desteğin her adımında yanınızdayız."
            />
            <Link
              href="/hizmetler"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-deep"
            >
              Tüm hizmetler
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-14">
            <ServicesGrid variant="compact" />
          </div>
        </div>
      </section>

      {/* MARKALAR */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Markalar"
            title="Yetkili olduğumuz küresel markalar"
            description="Dünya standartlarında üretim gücünü, yerel servis uzmanlığıyla buluşturuyoruz."
          />
          <div className="mt-14">
            <BrandsGrid />
          </div>
        </div>
      </section>

      <StatsBand />

      <CtaBanner
        title="Projeniz veya aracınız için yanınızdayız"
        description="Bakım randevusu, yedek parça talebi ya da teknik destek; tek bir mesajla bize ulaşın."
      />
    </>
  )
}
