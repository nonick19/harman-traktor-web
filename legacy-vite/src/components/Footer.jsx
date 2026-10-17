import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-tertiary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-display text-2xl font-semibold text-power-yellow">Hüseyin Baydur</div>
          <p className="text-sm text-on-tertiary-container mt-2">{t('footer.tagline')}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm tracking-wider text-on-tertiary uppercase mb-2">
            {t('footer.operations')}
          </h4>
          <Link to="/hizmetlerimiz" className="text-sm text-on-tertiary-container hover:text-power-yellow transition-colors w-fit">
            {t('footer.serviceCenters')}
          </Link>
          <Link to="/hizmetlerimiz" className="text-sm text-on-tertiary-container hover:text-power-yellow transition-colors w-fit">
            {t('footer.spareParts')}
          </Link>
          <Link to="/hizmetlerimiz" className="text-sm text-on-tertiary-container hover:text-power-yellow transition-colors w-fit">
            {t('footer.globalOperations')}
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm tracking-wider text-on-tertiary uppercase mb-2">
            {t('footer.corporate')}
          </h4>
          <Link to="/hakkimizda" className="text-sm text-on-tertiary-container hover:text-power-yellow transition-colors w-fit">
            {t('footer.about')}
          </Link>
          <Link to="/iletisim" className="text-sm text-on-tertiary-container hover:text-power-yellow transition-colors w-fit">
            {t('footer.contact')}
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm tracking-wider text-on-tertiary uppercase mb-2">
            {t('footer.contactHeading')}
          </h4>
          <div className="flex items-center gap-2 text-on-tertiary-container text-sm">
            <Icon name="location_on" className="text-sm" />
            Mimarsinan Mah., Çorum Sanayi Sitesi Cad. No: 134, Merkez / Çorum
          </div>
          <a href="tel:+905324843395" className="flex items-center gap-2 text-on-tertiary-container text-sm hover:text-power-yellow transition-colors w-fit">
            <Icon name="call" className="text-sm" />
            +90 532 484 33 95
          </a>
        </div>

        <div className="col-span-1 md:col-span-4 mt-12 pt-6 border-t border-industrial-gray flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-on-tertiary-container">
            © 1967-{new Date().getFullYear()} Hüseyin Baydur. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/905324843395"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-industrial-gray flex items-center justify-center text-on-tertiary hover:bg-power-yellow hover:text-tertiary transition-colors"
            >
              <Icon name="chat" className="text-sm" />
            </a>
            <a
              href="https://t.me/+905324843395"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-8 h-8 rounded-full bg-industrial-gray flex items-center justify-center text-on-tertiary hover:bg-power-yellow hover:text-tertiary transition-colors"
            >
              <Icon name="send" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
