import { BRANDS } from '@/lib/site'

/** Ana sayfa ve markalar sayfasında kullanılan ince marka şeridi. */
export default function BrandStrip() {
  return (
    <section className="border-y border-line bg-canvas">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {BRANDS.map((brand) => (
          <div key={brand.id} className="flex items-center justify-center gap-3 py-6">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: brand.accent }}
              aria-hidden="true"
            />
            <span className="text-sm font-semibold tracking-wide text-ink">
              {brand.name}
            </span>
            <span className="text-sm text-muted">· {brand.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
