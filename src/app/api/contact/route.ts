import { NextResponse } from 'next/server'
import { SITE_CONTACT } from '@/lib/site'

/** Sunucu tarafı çalışır (Resend'e güvenli erişim için). */
export const runtime = 'nodejs'

interface ContactPayload {
  readonly name: string
  readonly company: string
  readonly email: string
  readonly phone: string
  readonly subject: string
  readonly message: string
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char)
}

function buildEmailHtml(payload: ContactPayload): string {
  const row = (label: string, value: string): string =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;color:#5b6b83;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#0f1b2d;font-size:14px">${escapeHtml(
          value,
        )}</td></tr>`
      : ''

  return `<!doctype html><html lang="tr"><body style="margin:0;background:#f6f8fb;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:600px;margin:0 auto;padding:24px">
    <div style="background:#0b2a5b;border-radius:12px 12px 0 0;padding:20px 24px">
      <p style="margin:0;color:#fff;font-size:16px;font-weight:bold">${SITE_CONTACT.companyName} — Web İletişim Formu</p>
    </div>
    <div style="background:#fff;border:1px solid #e3e8f0;border-top:0;border-radius:0 0 12px 12px;padding:24px">
      <table style="width:100%;border-collapse:collapse">
        ${row('Ad Soyad', payload.name)}
        ${row('Firma', payload.company)}
        ${row('E-posta', payload.email)}
        ${row('Telefon', payload.phone)}
        ${row('Konu', payload.subject)}
      </table>
      <hr style="border:0;border-top:1px solid #e3e8f0;margin:16px 0" />
      <p style="margin:0;color:#0f1b2d;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(
        payload.message,
      )}</p>
    </div>
  </div>
</body></html>`
}

function buildEmailText(payload: ContactPayload): string {
  return [
    `${SITE_CONTACT.companyName} — Web İletişim Formu`,
    '',
    `Ad Soyad: ${payload.name}`,
    `Firma: ${payload.company || '-'}`,
    `E-posta: ${payload.email}`,
    `Telefon: ${payload.phone || '-'}`,
    `Konu: ${payload.subject}`,
    '',
    payload.message,
  ].join('\n')
}

export async function POST(request: Request): Promise<NextResponse> {
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Geçersiz istek gövdesi.' },
      { status: 400 },
    )
  }

  const data = (raw ?? {}) as Record<string, unknown>
  const payload: ContactPayload = {
    name: asString(data.name),
    company: asString(data.company),
    email: asString(data.email),
    phone: asString(data.phone),
    subject: asString(data.subject) || 'Genel',
    message: asString(data.message),
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { ok: false, error: 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.' },
      { status: 400 },
    )
  }

  if (!isEmail(payload.email)) {
    return NextResponse.json(
      { ok: false, error: 'Geçerli bir e-posta adresi girin.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? SITE_CONTACT.email
  const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

  // Servis yapılandırılmamışsa istemci tarafı WhatsApp/e-posta yedeğine düşsün.
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        code: 'not_configured',
        error: 'E-posta servisi henüz yapılandırılmamış.',
      },
      { status: 503 },
    )
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `${SITE_CONTACT.companyName} Web <${from}>`,
        to: [to],
        reply_to: payload.email,
        subject: `[Web] ${payload.subject}`,
        html: buildEmailHtml(payload),
        text: buildEmailText(payload),
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      return NextResponse.json(
        {
          ok: false,
          error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.',
          detail: detail.slice(0, 300),
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' },
      { status: 502 },
    )
  }
}
