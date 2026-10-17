import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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
  metadataBase: new URL('https://www.baydur.net'),
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
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.baydur.net',
    siteName: 'Hüseyin Baydur',
    title: 'Hüseyin Baydur | New Holland, FPT Industrial ve Iveco Yetkili Distribütörü',
    description:
      '1967’den beri tarım ve ticari araç alanında güvenin adresi: yetkili servis, orijinal yedek parça ve FPT motor revizyonu.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B2A5B',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
