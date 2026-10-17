import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { localBusinessJsonLd } from '@/lib/seo'
import { SITE_CONTACT, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hüseyin Baydur | New Holland, FPT Industrial ve Iveco Yetkili Distribütörü',
    template: '%s | Hüseyin Baydur',
  },
  description:
    'Çorum merkezli Hüseyin Baydur; 1967’den beri New Holland traktör ve biçerdöver, FPT Industrial motor revizyonu ve Iveco yedek parça alanında yetkili servis ve distribütörlük hizmeti sunar.',
  keywords: [
    'Hüseyin Baydur',
    'New Holland yetkili servis',
    'FPT Industrial motor revizyon',
    'Iveco yedek parça',
    'Çorum traktör servisi',
    'biçerdöver servisi',
  ],
  applicationName: SITE_CONTACT.companyName,
  authors: [{ name: SITE_CONTACT.companyName, url: SITE_URL }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: SITE_CONTACT.companyName,
    title: 'Hüseyin Baydur | New Holland, FPT Industrial ve Iveco Yetkili Distribütörü',
    description:
      '1967’den beri tarım ve ticari araç alanında güvenin adresi: yetkili servis, orijinal yedek parça ve FPT motor revizyonu.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B2A5B',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = localBusinessJsonLd()

  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
