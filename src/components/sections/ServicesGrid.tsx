import Image from 'next/image'
import { Check, Wrench } from 'lucide-react'
import { SERVICE_IMAGES } from '@/lib/site'
import { SERVICE_ICONS } from '@/lib/icons'
import type { Dictionary } from '@/i18n'

/**
 * Hizmet kartları.
 * `compact` ana sayfadaki özet, `detailed` hizmetler sayfasındaki tam içerik içindir.
 */
export default function ServicesGrid({
  dict,
  variant = 'detailed',
}: {
  dict: Dictionary
  variant?: 'compact' | 'detailed'
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {dict.services.map((service) => {
        const Icon = SERVICE_ICONS[service.id] ?? Wrench
        const image = SERVICE_IMAGES[service.id]
        return (
          <article
            key={service.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-colors duration-200 hover:border-navy/40"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-strong text-navy">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-ink">{service.summary}</p>

              {variant === 'detailed' ? (
                <>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-ink"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-nh-yellow"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}
