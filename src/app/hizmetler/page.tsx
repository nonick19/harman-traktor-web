import PageHero from '@/components/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CtaBanner from '@/components/CtaBanner'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Hizmetler',
  description:
    'Yetkili servis ve teknik destek, şasiye göre orijinal yedek parça tedariği ve FPT Industrial Cursor/NEF motor revizyonu — Çorum merkezli Hüseyin Baydur.',
  path: '/hizmetler',
  keywords: [
    'New Holland yetkili servis',
    'orijinal yedek parça',
    'FPT motor revizyonu',
    'biçerdöver servisi',
    'Çorum servis',
  ],
})

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        breadcrumb="Hizmetler"
        title="Uçtan uca yetkili servis çözümleri"
        description="Satış sonrası desteğin her adımında; periyodik bakımdan orijinal parçaya, motor revizyonundan saha müdahalesine kadar yanınızdayız."
      />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid variant="detailed" />
        </div>
      </section>

      <CtaBanner
        title="Bakım, parça veya revizyon randevusu"
        description="Aracınızın bilgilerini paylaşın; ekibimiz en uygun çözümü ve zamanı planlasın."
      />
    </>
  )
}
