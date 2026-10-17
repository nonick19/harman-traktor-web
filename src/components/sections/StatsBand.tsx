import { REFERENCE_STATS, SECTOR_TAGS } from '@/lib/site'

/** Lacivert zeminli güven bandı: kurumsal rakamlar ve sektör etiketleri. */
export default function StatsBand({
  showTags = true,
  heading = 'Rakamlarla güven',
  intro = 'Bölgedeki üreticiler, kooperatifler ve ticari filolar için kesintisiz hizmet. Deneyimimiz, sahadaki her sezonda test ediliyor.',
}: {
  showTags?: boolean
  heading?: string
  intro?: string
}) {
  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-nh-yellow" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Referanslar
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              {intro}
            </p>
            {showTags ? (
              <div className="mt-8 flex flex-wrap gap-2.5">
                {SECTOR_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {REFERENCE_STATS.map((stat) => (
              <div key={stat.label} className="bg-navy p-8">
                <p className="font-mono text-3xl font-bold text-nh-yellow sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
