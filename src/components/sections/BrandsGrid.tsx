import { BRANDS } from '@/lib/site'

/** Yetkili olunan markaların aksan çizgili kartları. */
export default function BrandsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {BRANDS.map((brand) => (
        <div
          key={brand.id}
          className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8"
        >
          <span
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ backgroundColor: brand.accent }}
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {brand.role}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy">
            {brand.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {brand.description}
          </p>
        </div>
      ))}
    </div>
  )
}
