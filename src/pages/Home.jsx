import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Home() {
  const { t } = useLanguage()

  const partners = [
    {
      key: 'newHolland',
      name: 'New Holland',
      image: '/images/bicerdover-hero.png',
    },
    {
      key: 'fpt',
      name: 'FPT Industrial',
      image: '/images/fpt-motor-servis.png',
    },
    {
      key: 'iveco',
      name: 'Iveco',
      image: '/images/ticari-arac-yedek-parca.jpg',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] w-full bg-tertiary overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bicerdover-hero.png')" }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full max-w-[1440px] mx-auto px-4 md:px-16 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-4 py-2 bg-power-yellow text-on-secondary-container font-body text-sm leading-5 tracking-[0.05em] font-bold rounded-sm mb-6 uppercase tracking-widest">
              {t('home.hero.badge')}
            </div>
            <h1 className="font-display text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] tracking-[-0.02em] font-extrabold mb-6 text-shadow-hero">
              {t('home.hero.title')}
            </h1>
            <p className="font-body text-[18px] leading-[28px] mb-10 text-surface-container-low max-w-xl text-shadow-hero">
              {t('home.hero.subtitle')}
            </p>
            <Link
              to="/hizmetlerimiz"
              className="inline-block bg-heritage-blue text-white px-8 py-4 rounded font-body text-sm leading-5 tracking-[0.05em] font-bold hover:bg-primary-container transition-colors duration-300 shadow-sm"
            >
              {t('home.hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section (Bento Grid) */}
      <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] tracking-[-0.01em] font-bold text-heritage-blue mb-4">
            {t('home.partners.title')}
          </h2>
          <p className="font-body text-base leading-6 text-on-surface-variant max-w-2xl mx-auto">
            {t('home.partners.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow group relative overflow-hidden h-[400px] flex flex-col justify-end"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${partner.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-90" />
              <div className="relative z-10 text-white">
                <div className="font-body text-sm leading-5 tracking-[0.05em] font-bold text-power-yellow mb-2 uppercase tracking-wide">
                  {t(`home.partners.${partner.key}.label`)}
                </div>
                <h3 className="font-display text-[32px] leading-[40px] font-semibold mb-2">
                  {partner.name}
                </h3>
                <p className="font-body text-base leading-6 text-surface-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {t(`home.partners.${partner.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
