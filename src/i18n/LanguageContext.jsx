import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'harman-lang'
const DEFAULT_LANG = 'tr'
const SUPPORTED_LANGS = ['tr', 'en', 'ru']

function getInitialLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGS.includes(stored)) return stored
  } catch {
    // localStorage erişilemezse varsayılan dil kullanılır
  }
  return DEFAULT_LANG
}

function lookup(obj, path) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage yazılamazsa yalnızca bellekte tutulur
    }
  }, [lang])

  const setLang = (next) => {
    if (SUPPORTED_LANGS.includes(next)) setLangState(next)
  }

  const value = useMemo(() => {
    const t = (key) => {
      const hit = lookup(translations[lang], key)
      if (typeof hit === 'string') return hit
      const fallback = lookup(translations[DEFAULT_LANG], key)
      return typeof fallback === 'string' ? fallback : key
    }
    return { lang, setLang, t }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
