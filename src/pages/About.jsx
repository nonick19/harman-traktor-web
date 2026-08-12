import Icon from '../components/Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full object-cover"
            data-alt="A cinematic, high-contrast photograph of an industrial agricultural setting at dawn. Heavy machinery and tractors are visible in silhouette against a warm, rising sun. The overall aesthetic is 'Corporate Modern' and 'Global Trust', emphasizing rugged industrial authority, reliability, and precision. Deep shadows and bright highlights create a sense of scale and power."
            style={{ backgroundImage: "url('/images/bicerdover-hero.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-tertiary/90 to-tertiary/40"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-desktop relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-power-yellow/20 text-power-yellow font-label-bold text-label-bold mb-6 border border-power-yellow/30">
              <Icon name="history" className="text-sm" />
              {t('about.hero.badge')}
            </div>
            <h1 className="font-display-lg text-display-lg text-on-tertiary mb-6">{t('about.hero.title')}</h1>
            <p className="font-body-lg text-body-lg text-on-tertiary/80 mb-8 max-w-xl">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Narrative Section */}
      <section className="py-24 max-w-max-width mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant bg-surface-container-lowest">
              <img
                className="w-full h-auto object-cover aspect-[4/5]"
                data-alt="A black and white portrait photo of a rugged, experienced founder standing in an early industrial workshop setting (circa 1960s). He is inspecting a heavy metal tractor part. The lighting is dramatic, highlighting the texture of the metal and the determination in his expression. The aesthetic conveys mastery, heritage, and industrial authority, aligning with a corporate modern style."
                src="/images/kurucu-huseyin-baydur.jpg"
                alt={t('about.founder.alt')}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tertiary/80 to-transparent p-6">
                <h3 className="font-headline-md text-headline-md text-on-tertiary">Hüseyin Baydur</h3>
                <p className="font-body-md text-body-md text-power-yellow">{t('about.founder.role')}</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-heritage-blue/20 rounded-xl"></div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-headline-lg text-headline-lg text-heritage-blue mb-8">{t('about.vision.title')}</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>{t('about.vision.p1')}</p>
              <p>{t('about.vision.p2')}</p>
              <blockquote className="border-l-4 border-power-yellow pl-6 py-2 my-8 italic text-tertiary font-headline-md text-headline-md">
                {t('about.vision.quote')}
              </blockquote>
              <p>{t('about.vision.p3')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
