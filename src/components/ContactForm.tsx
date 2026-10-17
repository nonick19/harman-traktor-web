'use client'

import { useState, type FormEvent } from 'react'
import { Send, Check, Loader2, AlertCircle, MessageCircle, Mail } from 'lucide-react'
import { SITE_CONTACT, buildWhatsAppUrl } from '@/lib/site'

const SUBJECTS: readonly string[] = [
  'Yetkili Servis / Bakım',
  'Orijinal Yedek Parça',
  'FPT Motor Revizyonu',
  'Satış ve Fiyat Bilgisi',
  'Diğer',
]

interface FormValues {
  readonly name: string
  readonly company: string
  readonly email: string
  readonly phone: string
  readonly subject: string
  readonly message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

function buildMailto(values: FormValues): string {
  const body = [
    `Ad Soyad: ${values.name}`,
    `Firma: ${values.company || '-'}`,
    `E-posta: ${values.email || '-'}`,
    `Telefon: ${values.phone || '-'}`,
    '',
    values.message,
  ].join('\n')
  return `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(
    `[Web] ${values.subject}`,
  )}&body=${encodeURIComponent(body)}`
}

/** Kurumsal iletişim formu — sunucu tarafında Resend ile e-posta gönderir. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [values, setValues] = useState<FormValues | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload: FormValues = {
      name: String(data.get('name') ?? '').trim(),
      company: String(data.get('company') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      subject: String(data.get('subject') ?? 'Genel').trim(),
      message: String(data.get('message') ?? '').trim(),
    }

    setValues(payload)
    setStatus('sending')
    setErrorMessage('')

    // Statik barındırmada anahtar yoksa form sessizce başarısız olmasın: yedeğe yönlendir.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    if (!accessKey) {
      setStatus('error')
      setErrorMessage(
        'Çevrimiçi form servisi henüz yapılandırılmamış. Aşağıdaki WhatsApp veya e-posta seçeneklerinden bize ulaşabilirsiniz.',
      )
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Web] ${payload.subject}`,
          from_name: `${SITE_CONTACT.companyName} Web`,
          name: payload.name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        }),
      })
      const result: unknown = await response.json().catch(() => ({}))
      const parsed = (result ?? {}) as { success?: boolean; message?: string }

      if (parsed.success) {
        setStatus('success')
        form.reset()
        return
      }

      setStatus('error')
      setErrorMessage(
        typeof parsed.message === 'string' && parsed.message
          ? parsed.message
          : 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.',
      )
    } catch {
      setStatus('error')
      setErrorMessage('Bağlantı hatası. Lütfen tekrar deneyin.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-xl border border-navy/20 bg-canvas px-6 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-nh-yellow">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-lg font-semibold text-navy">Mesajınız iletildi</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Teşekkürler, en kısa sürede size dönüş yapacağız. Acil durumlar için
          doğrudan telefon veya WhatsApp’tan ulaşabilirsiniz.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${SITE_CONTACT.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
          >
            {SITE_CONTACT.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-surface"
          >
            Yeni mesaj
          </button>
        </div>
      </div>
    )
  }

  const sending = status === 'sending'

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

      {status === 'error' ? (
        <div className="flex flex-col gap-3 rounded-lg border border-fpt-red/30 bg-fpt-red/5 px-4 py-3.5 sm:col-span-2">
          <p className="flex items-start gap-2 text-sm text-ink">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-fpt-red" aria-hidden="true" />
            {errorMessage}
          </p>
          {values ? (
            <div className="flex flex-wrap gap-2">
              <a
                href={buildWhatsAppUrl(
                  `Merhaba, web sitesi formundan yazıyorum.\n\n${values.message}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                WhatsApp ile gönder
              </a>
              <a
                href={buildMailto(values)}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-surface"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                E-posta ile gönder
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Bilgileriniz yalnızca size dönüş yapmak için kullanılır, üçüncü taraflarla
          paylaşılmaz.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? (
            <>
              Gönderiliyor
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Gönder
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
