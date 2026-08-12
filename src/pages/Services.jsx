import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      key: 'newHolland',
      name: 'New Holland',
      icon: 'agriculture',
      image: `${import.meta.env.BASE_URL}images/new-holland-servis.jpg`,
    },
    {
      key: 'fpt',
      name: 'FPT Industrial',
      icon: 'settings',
      image: `${import.meta.env.BASE_URL}images/fpt-motor-servis.png`,
    },
    {
      key: 'iveco',
      name: 'Iveco',
      icon: 'local_shipping',
      image: `${import.meta.env.BASE_URL}images/ticari-arac-yedek-parca.jpg`,
    },
  ]

  const labelClass = 'font-body text-sm leading-5 font-bold uppercase tracking-widest'

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/bicerdover-hero.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className={`inline-flex items-center gap-2 bg-power-yellow text-on-secondary-container ${labelClass} px-4 py-1.5 rounded-xs mb-6`}>
              {t('services.badge')}
            </span>
            <h1 className="font-display text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] font-extrabold text-on-primary text-shadow-hero mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="font-body text-[18px] leading-[28px] text-inverse-on-surface/90 max-w-xl">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary mb-4">
            {t('services.section.title')}
          </h2>
          <p className="font-body text-[18px] leading-[28px] text-on-surface-variant">
            {t('services.section.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.key}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
            >
              <div className="h-52 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
                <span className={`absolute top-4 left-4 bg-surface-container-lowest/95 text-primary ${labelClass} px-3 py-1 rounded-xs text-xs shadow-sm`}>
                  {t(`services.${service.key}.tag`)}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xs bg-primary/5 text-heritage-blue shrink-0">
                    <Icon name={service.icon} fill className="text-2xl" />
                  </span>
                  <h3 className="font-display text-[24px] leading-[32px] font-semibold text-primary">{service.name}</h3>
                </div>
                <p className="font-body text-base leading-6 text-on-surface-variant mb-8 flex-grow">
                  {t(`services.${service.key}.description`)}
                </p>
                <Link
                  to="/iletisim"
                  className={`inline-flex items-center gap-2 border-t border-outline-variant pt-6 ${labelClass} text-heritage-blue hover:text-primary-container transition-colors`}
                >
                  {t(`services.${service.key}.cta`)}
                  <Icon name="arrow_forward" className="text-lg" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* International Operations Band */}
      <section className="bg-tertiary text-on-tertiary relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/bicerdover-hero.png')` }}
        ></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className={`inline-block bg-power-yellow text-on-secondary-container ${labelClass} px-3 py-1 rounded-xs mb-5 text-xs`}>
              {t('services.international.badge')}
            </span>
            <h2 className="font-display text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] tracking-[-0.01em] font-bold mb-4">
              {t('services.international.title')}
            </h2>
            <p className="font-body text-[18px] leading-[28px] opacity-90 max-w-2xl">
              {t('services.international.description')}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <Link
              to="/iletisim"
              className={`inline-flex items-center justify-center gap-2 bg-power-yellow text-on-secondary-container ${labelClass} px-8 py-3.5 rounded-xs hover:bg-secondary-fixed transition-colors w-full lg:w-auto`}
            >
              {t('services.international.ctaExport')}
            </Link>
            <Link
              to="/hakkimizda"
              className={`inline-flex items-center justify-center gap-2 border border-outline text-on-tertiary ${labelClass} px-8 py-3.5 rounded-xs hover:bg-surface-container-lowest/10 transition-colors w-full lg:w-auto`}
            >
              {t('services.international.ctaDetails')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Strip */}
      <section className="bg-surface-muted">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.01em] font-bold text-primary mb-3">
              {t('services.cta.title')}
            </h2>
            <p className="font-body text-[18px] leading-[28px] text-on-surface-variant">
              {t('services.cta.subtitle')}
            </p>
          </div>
          <Link
            to="/iletisim"
            className={`inline-flex items-center justify-center gap-2 bg-heritage-blue text-on-primary ${labelClass} px-8 py-4 rounded-xs hover:bg-primary-container transition-colors shrink-0`}
          >
            {t('services.cta.button')}
            <Icon name="arrow_forward" className="text-lg" />
          </Link>
        </div>
      </section>
    </div>
  )
}
