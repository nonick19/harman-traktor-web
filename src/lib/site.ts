/**
 * baydur.net kurumsal site içeriği.
 * Kurumsal metin, hizmet, marka, referans, tarihçe ve iletişim verisi tek yerde tutulur;
 * sayfa bileşenleri yalnızca bu modülden beslenir.
 */

export interface NavLink {
  readonly label: string
  readonly href: string
}

export interface ServiceItem {
  readonly id: string
  readonly title: string
  readonly summary: string
  readonly description: string
  readonly image: string
  readonly imageAlt: string
  readonly highlights: readonly string[]
}

export interface BrandItem {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly description: string
  readonly accent: string
}

export interface ReferenceStat {
  readonly value: string
  readonly label: string
}

export interface TimelineItem {
  readonly year: string
  readonly title: string
  readonly description: string
}

export interface SiteContact {
  readonly companyName: string
  readonly legalNote: string
  readonly phoneDisplay: string
  readonly phoneE164: string
  readonly whatsappNumber: string
  readonly email: string
  readonly addressLines: readonly string[]
  readonly mapEmbedUrl: string
  readonly mapTitle: string
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
  mapTitle: 'Hüseyin Baydur — Çorum servis merkezi konumu',
}

/** Verilen mesajla WhatsApp sohbet bağlantısı üretir. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Üst menü bağlantıları (çok sayfalı yapı rotaları). */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Markalar', href: '/markalar' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'İletişim', href: '/iletisim' },
]

/** Sunulan başlıca hizmetler (tanıtım odaklı). */
export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'yetkili-servis',
    title: 'Yetkili Servis & Teknik Destek',
    summary: 'Periyodik bakım, arıza tespiti ve yerinde müdahale.',
    description:
      'New Holland biçerdöver ve traktörleri ile Iveco ticari araçlarınız için yetkili servis güvencesiyle periyodik bakım, elektronik arıza tespiti ve yerinde müdahale hizmeti sunuyoruz.',
    image: '/images/new-holland-servis.jpg',
    imageAlt: 'New Holland yetkili servis atölyesi',
    highlights: [
      'Periyodik bakım ve sezon öncesi kontrol',
      'Elektronik arıza tespiti ve teşhis',
      'Yerinde ve tarlada müdahale',
    ],
  },
  {
    id: 'yedek-parca',
    title: 'Orijinal Yedek Parça',
    summary: 'Şasiye göre doğrulanmış orijinal parça tedariği.',
    description:
      'Orijinal CNH, FPT ve Iveco yedek parçalarını şasi numaranıza göre doğrulayıp hızlı biçimde tedarik ediyoruz. Yanlış parça riski olmadan, doğru parçayı ilk seferde elinize ulaştırıyoruz.',
    image: '/images/ticari-arac-yedek-parca.jpg',
    imageAlt: 'Orijinal yedek parça deposu',
    highlights: [
      'Orijinal OEM parça garantisi',
      'Şasiye göre uyum doğrulama',
      'Hızlı tedarik ve lojistik',
    ],
  },
  {
    id: 'motor-revizyon',
    title: 'FPT Motor Revizyon Merkezi',
    summary: 'Cursor ve NEF motorlarda komple revizyon ve kalibrasyon.',
    description:
      'FPT Industrial Cursor ve NEF motor ailelerinde komple revizyon, dyna testi ve ECU kalibrasyonu ile motorlarınızı fabrika toleranslarında yeniden tam performansa kavuşturuyoruz.',
    image: '/images/fpt-motor-servis.png',
    imageAlt: 'FPT Industrial motor revizyon merkezi',
    highlights: [
      'Cursor ve NEF motor uzmanlığı',
      'Dyna test ve güç-tork ölçümü',
      'EST yazılımı ile ECU kalibrasyonu',
    ],
  },
]

/** Yetkili olunan küresel markalar. */
export const BRANDS: readonly BrandItem[] = [
  {
    id: 'new-holland',
    name: 'New Holland',
    role: 'Traktör & Biçerdöver',
    description:
      'Traktör ve tarım makinelerinde yetkili satış, servis ve orijinal yedek parça hizmeti.',
    accent: '#F5B800',
  },
  {
    id: 'fpt-industrial',
    name: 'FPT Industrial',
    role: 'Motor Teknolojileri',
    description:
      'Cursor ve NEF motor ailelerinde yetkili servis, revizyon ve elektronik kalibrasyon.',
    accent: '#E30613',
  },
  {
    id: 'iveco',
    name: 'Iveco',
    role: 'Ticari Araç & Yedek Parça',
    description:
      'Ticari araçlar için orijinal yedek parça tedariği ve teknik servis desteği.',
    accent: '#0B2A5B',
  },
]

/** Güven veren kurumsal rakamlar. */
export const REFERENCE_STATS: readonly ReferenceStat[] = [
  { value: '1967', label: 'Kuruluş yılı' },
  { value: '50+', label: 'Yıllık deneyim' },
  { value: '3', label: 'Küresel marka yetkisi' },
  { value: '10.000+', label: 'Parça çeşidi' },
]

/** Hizmet verilen alanları özetleyen etiketler. */
export const SECTOR_TAGS: readonly string[] = [
  'Tarım',
  'Biçerdöver',
  'Traktör',
  'Ticari Araç',
  'Motor Revizyonu',
  'İhracat',
]

/** Kurumsal tarihçe. */
export const TIMELINE: readonly TimelineItem[] = [
  {
    year: '1967',
    title: 'İlk atölye',
    description:
      'Hüseyin Baydur, Çorum Sanayi Sitesi’nde küçük bir atölyede faaliyete başladı.',
  },
  {
    year: '1985',
    title: 'Yetkili servis',
    description:
      'New Holland yetkili servis ağına katılarak bölgenin güvenilir servis adresi hâline geldi.',
  },
  {
    year: '2005',
    title: 'Motor uzmanlığı',
    description:
      'FPT Industrial motor revizyonu ve elektronik kalibrasyon yetkinliği kazanıldı.',
  },
  {
    year: '2020',
    title: 'Uluslararası operasyon',
    description:
      'İhracat ve yurt dışı saha projeleriyle operasyonlar sınırları aşarak büyüdü.',
  },
]

/** Kurumsal künye ve coğrafi bilgiler (SEO / yapılandırılmış veri için). */
export const SITE_URL = 'https://www.baydur.net'
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
