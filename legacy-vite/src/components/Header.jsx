import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const LANGUAGES = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/hizmetlerimiz', label: t('nav.services') },
    { to: '/hakkimizda', label: t('nav.about') },
    { to: '/iletisim', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinkClass = ({ isActive }) =>
    `font-bold text-sm tracking-wide transition-colors duration-200 py-2 ${
      isActive
        ? 'text-heritage-blue border-b-2 border-heritage-blue'
        : 'text-on-surface-variant hover:text-heritage-blue'
    }`

  const langButtonClass = (code) =>
    `font-bold text-xs tracking-wider px-2 py-1 rounded transition-colors duration-200 ${
      lang === code
        ? 'text-heritage-blue bg-surface-container'
        : 'text-on-surface-variant hover:text-heritage-blue'
    }`

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface border-b border-outline-variant transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-16 py-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tighter text-heritage-blue uppercase flex items-center gap-2"
        >
          <Icon name="agriculture" fill className="text-3xl" />
          Hüseyin Baydur
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+905324843395"
            className="hidden lg:flex items-center gap-2 text-sm font-bold text-heritage-blue hover:text-primary transition-colors"
          >
            <Icon name="call" className="text-xl" />
            +90 532 484 33 95
          </a>
          <Link
            to="/iletisim"
            className="hidden md:inline-flex bg-heritage-blue text-white font-bold text-sm tracking-wide px-6 py-3 rounded hover:bg-primary-container transition-colors duration-200 shadow-sm"
          >
            {t('nav.appointment')}
          </Link>
          <div className="hidden md:flex items-center gap-1 border-l border-outline-variant pl-4">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLang(language.code)}
                className={langButtonClass(language.code)}
              >
                {language.label}
              </button>
            ))}
          </div>
          <button
            aria-label={t('nav.menu')}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden text-on-surface-variant p-2"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-3xl" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-outline-variant bg-surface px-4 pb-4 flex flex-col">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-bold text-sm tracking-wide py-3 border-b border-surface-container ${
                  isActive ? 'text-heritage-blue' : 'text-on-surface-variant'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/iletisim"
            className="mt-4 bg-heritage-blue text-white text-center font-bold text-sm tracking-wide px-6 py-3 rounded"
          >
            {t('nav.appointment')}
          </Link>
          <div className="mt-4 flex items-center gap-2">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLang(language.code)}
                className={langButtonClass(language.code)}
              >
                {language.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
