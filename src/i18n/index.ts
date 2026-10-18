import { tr } from './locales/tr'
import { en } from './locales/en'
import { ru } from './locales/ru'

/** Desteklenen diller. Varsayılan dil (tr) kök adreste yayınlanır. */
export const LOCALES = ['tr', 'en', 'ru'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'tr'

/** Sözlük tipi Türkçe içerikten türetilir; en/ru bu yapıya uymak zorundadır. */
export type Dictionary = typeof tr

export const dictionaries: Record<Locale, Dictionary> = { tr, en, ru }

/** HTML `lang` değerleri. */
export const LOCALE_TAGS: Record<Locale, string> = {
  tr: 'tr',
  en: 'en',
  ru: 'ru',
}

/** Dil değiştiricide gösterilen kısa etiketler. */
export const LOCALE_SHORT: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
  ru: 'RU',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

/** Geçersiz bir dil değerini güvenli biçimde bir `Locale`'a çevirir. */
export function toLocale(value: string, fallback: Locale = 'en'): Locale {
  return isLocale(value) ? value : fallback
}

/**
 * Dile göre tam yol üretir. Varsayılan dil ön ek almaz.
 * Örn: localizedHref('en', '/kurumsal') → '/en/kurumsal'
 */
export function localizedHref(locale: Locale, path: string): string {
  const clean = path === '' || path === '/' ? '' : path
  if (locale === DEFAULT_LOCALE) return clean === '' ? '/' : clean
  return `/${locale}${clean}`
}

/** Sitemap ve canonical için sonuna "/" eklenmiş mutlak adres üretir. */
export function absoluteUrl(locale: Locale, path: string, siteUrl: string): string {
  const href = localizedHref(locale, path)
  const withSlash = href.endsWith('/') ? href : `${href}/`
  return `${siteUrl}${withSlash}`
}

/**
 * Bir adresten dil ve dil-ön eksiz yolu ayırır (client tarafı dil değiştirici için).
 * Örn: splitLocale('/en/kurumsal') → { locale: 'en', path: '/kurumsal' }
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length > 0 && isLocale(segments[0])) {
    const rest = segments.slice(1)
    return { locale: segments[0], path: rest.length === 0 ? '/' : `/${rest.join('/')}` }
  }
  return { locale: DEFAULT_LOCALE, path: pathname === '' ? '/' : pathname }
}
