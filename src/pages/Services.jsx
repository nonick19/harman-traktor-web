import Icon from '../components/Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Services() {
  const { t } = useLanguage()

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[614px] min-h-[500px] flex items-center justify-center bg-industrial-gray mb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/bicerdover-hero.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-80"></div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <span className="inline-block bg-power-yellow text-on-secondary-container font-label-bold text-label-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
            {t('services.badge')}
          </span>
          <h1 className="font-display-lg text-display-lg text-on-primary text-shadow-hero mb-6">
            {t('services.hero.title')}
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 max-w-2xl mx-auto">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {/* New Holland Bento Block */}
          <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-64 overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    `url('${import.meta.env.BASE_URL}images/new-holland-servis.jpg')`,
                }}
              ></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="agriculture" fill className="text-heritage-blue text-4xl" />
                <h2 className="font-headline-md text-headline-md text-primary">New Holland</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {t('services.newHolland.description')}
              </p>
              <button className="bg-heritage-blue text-on-primary font-label-bold text-label-bold px-6 py-3 rounded hover:bg-primary-container transition-colors w-full sm:w-auto">
                {t('services.newHolland.cta')}
              </button>
            </div>
          </div>

          {/* FPT Industrial Bento Block */}
          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="h-48 overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/fpt-motor-servis.png')` }}
              ></div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="settings" fill className="text-heritage-blue text-3xl" />
                  <h2 className="font-headline-md text-headline-md text-primary text-2xl">{t('services.fpt.title')}</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {t('services.fpt.description')}
                </p>
              </div>
              <button className="border-2 border-heritage-blue text-heritage-blue font-label-bold text-label-bold px-6 py-3 rounded hover:bg-surface-muted transition-colors w-full">
                {t('services.fpt.cta')}
              </button>
            </div>
          </div>

          {/* Iveco Bento Block */}
          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="p-8 h-full flex flex-col justify-between bg-surface-muted">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="local_shipping" fill className="text-industrial-gray text-3xl" />
                  <h2 className="font-headline-md text-headline-md text-primary text-2xl">Iveco</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {t('services.iveco.description')}
                </p>
              </div>
              <button className="bg-industrial-gray text-on-primary font-label-bold text-label-bold px-6 py-3 rounded hover:bg-tertiary transition-colors w-full mt-4">
                {t('services.iveco.cta')}
              </button>
            </div>
          </div>

          {/* International Operations Block */}
          <div className="lg:col-span-8 bg-tertiary text-on-tertiary rounded-lg overflow-hidden shadow-sm relative group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/bicerdover-hero.png')` }}
            ></div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full">
              <span className="inline-block bg-power-yellow text-on-secondary-container font-label-bold text-label-bold px-3 py-1 rounded-full mb-4 self-start text-xs uppercase">
                {t('services.international.badge')}
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-4">{t('services.international.title')}</h2>
              <p className="font-body-lg text-body-lg opacity-90 mb-8 max-w-2xl">
                {t('services.international.description')}
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-power-yellow text-on-secondary-container font-label-bold text-label-bold px-8 py-3 rounded hover:bg-secondary-fixed transition-colors">
                  {t('services.international.ctaExport')}
                </button>
                <button className="border border-outline text-on-tertiary font-label-bold text-label-bold px-8 py-3 rounded hover:bg-surface-container-lowest/10 transition-colors">
                  {t('services.international.ctaDetails')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
