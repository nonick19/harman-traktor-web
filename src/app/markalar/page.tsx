import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import BrandsGrid from '@/components/sections/BrandsGrid'
import BrandStrip from '@/components/sections/BrandStrip'
import CtaBanner from '@/components/CtaBanner'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Markalar',
  description:
    'New Holland traktör ve biçerdöver, FPT Industrial motor teknolojileri ve Iveco ticari araç; üç küresel markanın yetkili distribütörü.',
  path: '/markalar',
  keywords: ['New Holland', 'FPT Industrial', 'Iveco', 'yetkili distribütör', 'CNH'],
})

export default function MarkalarPage() {
  return (
    <>
      <PageHero
        eyebrow="Markalar"
        breadcrumb="Markalar"
        title="Yetkili olduğumuz küresel markalar"
        description="Dünya standartlarında üretim gücünü, yerel servis uzmanlığıyla buluşturuyoruz."
      />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandsGrid />
        </div>
      </section>

      <BrandStrip />

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Distribütörlük"
            title="Orijinal ürün, resmî güvence"
            description="Yetkili distribütör olarak yalnızca orijinal ürün ve onaylı servis süreçleri sunarız; garanti ve teknik destek tek noktadan yönetilir."
          />
        </div>
      </section>

      <CtaBanner
        title="Aracınıza uygun ürün ve parça için danışın"
        description="Model ve şasi bilgilerinizle bize ulaşın; doğru ürünü ve parçayı birlikte belirleyelim."
      />
    </>
  )
}
