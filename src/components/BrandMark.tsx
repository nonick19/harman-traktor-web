import Image from 'next/image'

type BrandMarkProps = {
  className?: string
  priority?: boolean
}

/**
 * Hüseyin Baydur kurumsal amblemi (yüklenen logo).
 * Kaynak görselin dış beyaz zemini şeffaflaştırılıp kare olarak kırpılmıştır;
 * böylece hem açık hem koyu zeminlerde temiz görünür.
 */
export function BrandMark({ className, priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/images/logo-baydur.png"
      alt=""
      width={320}
      height={320}
      priority={priority}
      aria-hidden="true"
      className={className}
    />
  )
}
