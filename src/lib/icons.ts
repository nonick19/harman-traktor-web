import { Gauge, PackageSearch, Wrench, type LucideIcon } from 'lucide-react'

/** Hizmet kimliğine göre ikon eşlemesi (birden fazla sayfada paylaşılır). */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  'yetkili-servis': Wrench,
  'yedek-parca': PackageSearch,
  'motor-revizyon': Gauge,
}
