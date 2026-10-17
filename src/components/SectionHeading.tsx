/** Sayfa bölümleri için ortak başlık bloğu (üst etiket + başlık + açıklama). */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-nh-yellow" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  )
}
