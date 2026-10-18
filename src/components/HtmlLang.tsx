'use client'

import { useEffect } from 'react'
import { LOCALE_TAGS, type Locale } from '@/i18n'

/**
 * Statik dışa aktarımda `<html>` etiketi kök düzende sabit kaldığından,
 * dile göre `lang` değerini istemci tarafında eşitler.
 */
export default function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[locale]
  }, [locale])

  return null
}
