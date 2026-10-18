/**
 * baydur.net — dile bağlı olmayan yapılandırma.
 * Çevrilen metinler `src/i18n/locales/*` içinde tutulur; burada yalnızca
 * iletişim, coğrafi bilgi, görsel ve rota gibi dile bağlı olmayan veriler yer alır.
 */

export interface SiteContact {
  readonly companyName: string
  readonly legalNote: string
  readonly phoneDisplay: string
  readonly phoneE164: string
  readonly whatsappNumber: string
  readonly email: string
  readonly addressLines: readonly string[]
  readonly mapEmbedUrl: string
}

/** Firmaya ait sabit iletişim bilgileri. */
export const SITE_CONTACT: SiteContact = {
  companyName: 'Hüseyin Baydur',
  legalNote: 'New Holland, FPT Industrial ve Iveco Yetkili Distribütörü',
  phoneDisplay: '+90 532 484 33 95',
  phoneE164: '+905324843395',
  whatsappNumber: '905324843395',
  email: 'info@baydur.net',
  addressLines: [
    'Mimarsinan Mahallesi,',
    'Çorum Sanayi Sitesi Caddesi No: 134,',
    'Merkez / Çorum',
  ],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8422395363464!2d34.92806677548847!3d40.52297794916674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4080d55a413236c5%3A0x518b2b1fedbb5ab1!2zSMOcU0VZxLBOIEJBWURVUiBORVdIT0xMQU5EICwgRlBUIFlFVEvEsEzEsCBTRVJWxLBTIFZFIFlFREVLIFBBUsOHQQ!5e0!3m2!1str!2str!4v1786565106920!5m2!1str!2str',
}

/** Verilen mesajla WhatsApp sohbet bağlantısı üretir. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Site rotaları (dil ön ekleri `src/i18n` tarafından eklenir). */
export const ROUTES = {
  home: '/',
  kurumsal: '/kurumsal',
  hizmetler: '/hizmetler',
  markalar: '/markalar',
  referanslar: '/referanslar',
  iletisim: '/iletisim',
} as const

export type RouteKey = keyof typeof ROUTES

/** Hizmet kimliğine göre görsel yolu (dile bağlı değil). */
export const SERVICE_IMAGES: Record<string, string> = {
  'yetkili-servis': '/images/new-holland-servis.jpg',
  'yedek-parca': '/images/ticari-arac-yedek-parca.jpg',
  'motor-revizyon': '/images/fpt-motor-servis.png',
}

/** Marka kimliğine göre aksan rengi (dile bağlı değil). */
export const BRAND_ACCENTS: Record<string, string> = {
  'new-holland': '#F5B800',
  'fpt-industrial': '#E30613',
  iveco: '#0B2A5B',
}

/** Kurumsal künye ve coğrafi bilgiler (SEO / yapılandırılmış veri için). */
export const SITE_URL = 'https://baydur.net'
export const FOUNDING_YEAR = 1967

export interface SiteGeo {
  readonly latitude: number
  readonly longitude: number
}

/** Servis merkezinin koordinatları. */
export const SITE_GEO: SiteGeo = {
  latitude: 40.5229779,
  longitude: 34.9280667,
}

/** Haftalık çalışma saatleri (schema.org openingHours formatı). */
export const OPENING_HOURS: readonly string[] = [
  'Mo-Fr 08:00-18:00',
  'Sa 08:00-14:00',
]

/** Hizmet verilen başlıca iller. */
export const AREA_SERVED: readonly string[] = [
  'Çorum',
  'Samsun',
  'Amasya',
  'Tokat',
  'Yozgat',
  'Kırıkkale',
]
