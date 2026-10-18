import type { Dictionary } from '@/i18n'

/** Kurumsal tarihçe zaman çizelgesi. */
export default function Timeline({ dict }: { dict: Dictionary }) {
  return (
    <ol className="mt-8 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {dict.timeline.map((item) => (
        <li key={item.year} className="relative">
          <span
            className="absolute -top-[41px] left-0 h-3 w-3 rounded-full border-2 border-canvas bg-navy"
            aria-hidden="true"
          />
          <p className="font-mono text-2xl font-bold text-nh-yellow">{item.year}</p>
          <p className="mt-2 text-base font-semibold text-navy">{item.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  )
}
