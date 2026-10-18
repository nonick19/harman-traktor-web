type BrandMarkProps = {
  className?: string
}

/**
 * Hüseyin Baydur kurumsal amblemı: biçerdöver silüeti (ön hasat tablası,
 * sarıcı (reel) ve kesme bıçağı tırtıkları, kabin ve gövde, tahıl deposu,
 * tahrik ve yönlendirme tekerlekleri). Çizgi stili lucide-react ikonlarıyla
 * uyumludur: 24x24 kutu, currentColor ve yuvarlatılmış uçlar.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Hasat tablası — sarıcı (reel) çubuğu ve parmakları */}
      <path d="M16.6 13.1H22.4" />
      <path d="M17.4 13.1v1.5M19.1 13.1v1.5M20.8 13.1v1.5" />

      {/* Kesme bıçağı ve tırtıkları */}
      <path d="M16.6 17.2H22.4" />
      <path d="M17.4 17.2v1.3M19.1 17.2v1.3M20.8 17.2v1.3" />

      {/* Tabla arka paneli */}
      <path d="M16.6 13.1v4.1" />

      {/* Yükseltici (feeder) — tablayı gövdeye bağlar */}
      <path d="M13.9 12.4 16.6 14.4" />
      <path d="M13.9 16.7h2.7" />

      {/* Gövde: arka motor, tahıl deposu ve kabin */}
      <path d="M3.7 16.7V11.9H6V9h4.2V6.5h3.7v10.2Z" />
      {/* Kabin camı */}
      <path d="M11 8.1h2.4" />

      {/* Tekerlekler: önde büyük tahrik, arkada küçük yönlendirme */}
      <circle cx="14.3" cy="18.1" r="2.7" />
      <circle cx="4.9" cy="19" r="1.6" />
    </svg>
  )
}
