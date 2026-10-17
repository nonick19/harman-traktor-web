'use client'

import { useState, type FormEvent } from 'react'
import { Send, Check } from 'lucide-react'
import { SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'

const SUBJECTS: readonly string[] = [
  'Yetkili Servis / Bakım',
  'Orijinal Yedek Parça',
  'FPT Motor Revizyonu',
  'Satış ve Fiyat Bilgisi',
  'Diğer',
]

/** Kurumsal iletişim formu — backend gerektirmez, mesajı e-posta/WhatsApp'a hazırlar. */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const subject = String(data.get('subject') ?? 'Genel').trim()
    const message = String(data.get('message') ?? '').trim()

    const body = [
      `Ad Soyad: ${name}`,
      `Firma: ${company || '-'}`,
      `E-posta: ${email || '-'}`,
      `Telefon: ${phone || '-'}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(
      `[Web] ${subject}`,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Adınız ve soyadınız"
          className="rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-semibold text-ink">
          Firma <span className="font-normal text-muted">(opsiyonel)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Firma / işletme adı"
          className="rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ornek@eposta.com"
          className="rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-ink">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+90 5__ ___ __ __"
          className="rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="subject" className="text-sm font-semibold text-ink">
          Konu
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue={SUBJECTS[0]}
          className="rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-navy focus:ring-1 focus:ring-navy"
        >
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="resize-none rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Gönder’e bastığınızda mesajınız e-posta uygulamanızda hazır bir ileti olarak
          açılır.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
        >
          Gönder
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {submitted && (
        <div className="flex items-center gap-2 rounded-lg border border-navy/20 bg-surface px-4 py-3 text-sm text-navy sm:col-span-2">
          <Check className="h-4 w-4" aria-hidden="true" />
          Teşekkürler, mesajınız iletilmek üzere hazırlandı. Dilerseniz{' '}
          <a
            href={buildWhatsAppUrl('Merhaba, web sitesi formundan ulaşıyorum.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            WhatsApp
          </a>{' '}
          üzerinden de yazabilirsiniz.
        </div>
      )}
    </form>
  )
}
