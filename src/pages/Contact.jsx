import Icon from '../components/Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Header Section */}
      <div className="col-span-1 lg:col-span-12 mb-4">
        <h1 className="font-display text-4xl md:text-[64px] leading-tight md:leading-[72px] tracking-[-0.02em] font-extrabold text-primary mb-4">
          {t('contact.title')}
        </h1>
        <p className="font-body text-lg leading-7 text-on-surface-variant max-w-3xl">
          {t('contact.subtitle')}
        </p>
      </div>

      {/* Contact Information Cards (Bento Style) */}
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
        {/* Primary Contact Person */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-power-yellow opacity-10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary shrink-0">
              <Icon name="person" fill />
            </div>
            <div>
              <h3 className="font-display text-[32px] leading-[40px] font-semibold text-primary">
                Hüseyin Baydur
              </h3>
              <span className="inline-block mt-2 bg-heritage-blue text-white font-body text-xs leading-4 font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                {t('contact.person.role')}
              </span>
            </div>
          </div>
          <div className="space-y-4 font-body text-base leading-6 text-on-surface-variant">
            <div className="flex items-center gap-3">
              <Icon name="call" className="text-outline" />
              <a className="hover:text-heritage-blue transition-colors" href="tel:+905324843395">
                +90 532 484 33 95
              </a>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                className="flex-1 bg-surface-container hover:bg-surface-container-high text-primary font-body text-sm leading-5 font-bold tracking-[0.05em] py-2 rounded flex items-center justify-center gap-2 transition-colors"
                href="https://wa.me/905324843395"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" className="text-[20px]" /> WhatsApp
              </a>
              <a
                className="flex-1 bg-surface-container hover:bg-surface-container-high text-primary font-body text-sm leading-5 font-bold tracking-[0.05em] py-2 rounded flex items-center justify-center gap-2 transition-colors"
                href="https://t.me/+905324843395"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="send" className="text-[20px]" /> Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Phone */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-primary shrink-0">
              <Icon name="phone_iphone" fill />
            </div>
            <h3 className="font-body text-lg leading-7 font-semibold text-primary">
              {t('contact.altLine.title')}
            </h3>
          </div>
          <div className="space-y-4 font-body text-base leading-6 text-on-surface-variant">
            <div className="flex items-center gap-3">
              <Icon name="call" className="text-outline" />
              <a className="hover:text-heritage-blue transition-colors" href="tel:+905337674972">
                +90 533 767 49 72
              </a>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                className="flex-1 bg-surface-container hover:bg-surface-container-high text-primary font-body text-sm leading-5 font-bold tracking-[0.05em] py-2 rounded flex items-center justify-center gap-2 transition-colors"
                href="https://wa.me/905337674972"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" className="text-[20px]" /> WhatsApp
              </a>
              <a
                className="flex-1 bg-surface-container hover:bg-surface-container-high text-primary font-body text-sm leading-5 font-bold tracking-[0.05em] py-2 rounded flex items-center justify-center gap-2 transition-colors"
                href="https://t.me/+905337674972"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="send" className="text-[20px]" /> Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Address Info */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-primary shrink-0">
              <Icon name="location_on" fill />
            </div>
            <div>
              <h3 className="font-body text-lg leading-7 font-semibold text-primary mb-2">
                {t('contact.office.title')}
              </h3>
              <p className="font-body text-base leading-6 text-on-surface-variant leading-relaxed">
                Mimarsinan Mahallesi,
                <br />
                Çorum Sanayi Sitesi Caddesi No: 134,
                <br />
                Merkez / Çorum
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map & Form Column */}
      <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
        {/* Map Container */}
        <div className="w-full h-[400px] bg-surface-container-highest rounded overflow-hidden relative border border-outline-variant shadow-sm group">
          <img
            className="w-full h-full object-cover"
            alt={t('contact.map.alt')}
            src={`${import.meta.env.BASE_URL}images/corum-harita.jpg`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <a
              className="bg-power-yellow text-on-secondary-container font-body text-sm leading-5 font-bold tracking-[0.05em] px-6 py-3 rounded hover:bg-secondary-fixed transition-colors flex items-center gap-2 pointer-events-auto shadow-lg"
              href="https://maps.google.com/?q=Mimarsinan+Mahallesi,+Çorum+Sanayi+Sitesi+Caddesi+No:+134,+Merkez+/+Çorum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="directions" /> {t('contact.map.cta')}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-12 rounded shadow-sm">
          <h2 className="font-display text-[32px] leading-[40px] font-semibold text-primary mb-8">
            {t('contact.form.title')}
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="col-span-1 flex flex-col gap-2">
              <label
                className="font-body text-sm leading-5 font-bold tracking-[0.05em] text-on-surface"
                htmlFor="name"
              >
                {t('contact.form.nameLabel')}
              </label>
              <input
                className="bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body text-base text-on-surface focus:border-heritage-blue focus:ring-1 focus:ring-heritage-blue outline-none transition-colors"
                id="name"
                placeholder={t('contact.form.namePlaceholder')}
                type="text"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <label
                className="font-body text-sm leading-5 font-bold tracking-[0.05em] text-on-surface"
                htmlFor="company"
              >
                {t('contact.form.companyLabel')}
              </label>
              <input
                className="bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body text-base text-on-surface focus:border-heritage-blue focus:ring-1 focus:ring-heritage-blue outline-none transition-colors"
                id="company"
                placeholder={t('contact.form.companyPlaceholder')}
                type="text"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <label
                className="font-body text-sm leading-5 font-bold tracking-[0.05em] text-on-surface"
                htmlFor="email"
              >
                {t('contact.form.emailLabel')}
              </label>
              <input
                className="bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body text-base text-on-surface focus:border-heritage-blue focus:ring-1 focus:ring-heritage-blue outline-none transition-colors"
                id="email"
                placeholder={t('contact.form.emailPlaceholder')}
                type="email"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <label
                className="font-body text-sm leading-5 font-bold tracking-[0.05em] text-on-surface"
                htmlFor="phone"
              >
                {t('contact.form.phoneLabel')}
              </label>
              <input
                className="bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body text-base text-on-surface focus:border-heritage-blue focus:ring-1 focus:ring-heritage-blue outline-none transition-colors"
                id="phone"
                placeholder={t('contact.form.phonePlaceholder')}
                type="tel"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label
                className="font-body text-sm leading-5 font-bold tracking-[0.05em] text-on-surface"
                htmlFor="subject"
              >
                {t('contact.form.subjectLabel')}
              </label>
              <select
                className="bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body text-base text-on-surface focus:border-heritage-blue focus:ring-1 focus:ring-heritage-blue outline-none transition-colors appearance-none"
                id="subject"
                defaultValue=""
              >
                <option value="">{t('contact.form.subjectPlaceholder')}</option>
                <option value="sales">{t('contact.form.subjectSales')}</option>
                <option value="service">{t('contact.form.subjectService')}</option>
                <option value="parts">{t('contact.form.subjectParts')}</option>
                <option value="other">{t('contact.form.subjectOther')}</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label
                className="font-body text-sm leading-5 font-bold tracking-[0.05em] text-on-surface"
                htmlFor="message"
              >
                {t('contact.form.messageLabel')}
              </label>
              <textarea
                className="bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body text-base text-on-surface focus:border-heritage-blue focus:ring-1 focus:ring-heritage-blue outline-none transition-colors resize-none"
                id="message"
                placeholder={t('contact.form.messagePlaceholder')}
                rows="5"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 mt-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <p className="font-body text-xs leading-4 font-medium text-on-surface-variant max-w-sm">
                {t('contact.form.privacy')}
              </p>
              <button
                className="bg-heritage-blue text-white font-body text-sm leading-5 font-bold tracking-[0.05em] px-8 py-4 rounded hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2"
                type="submit"
              >
                {t('contact.form.submit')} <Icon name="arrow_forward" className="text-[20px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
