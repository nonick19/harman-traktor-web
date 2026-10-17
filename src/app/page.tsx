import Image from 'next/image'
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  Wrench,
  PackageSearch,
  Gauge,
  Check,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ContactForm from '@/components/ContactForm'
import {
  SERVICES,
  BRANDS,
  REFERENCE_STATS,
  SECTOR_TAGS,
  TIMELINE,
  SITE_CONTACT,
  buildWhatsAppUrl,
} from '@/lib/site'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  'yetkili-servis': Wrench,
  'yedek-parca': PackageSearch,
  'motor-revizyon': Gauge,
}

function SectionHeading({
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
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
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

export default function HomePage() {
  const whatsappUrl = buildWhatsAppUrl(
    `Merhaba, ${SITE_CONTACT.companyName} hizmetleri hakkında bilgi almak istiyorum.`,
  )

  return (
    <div id="top" className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-surface">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
                <ShieldCheck className="h-4 w-4 text-nh-yellow" aria-hidden="true" />
                1967’den beri yetkili distribütör
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
                Tarım ve ticari araçta
                <span className="block text-ink">güvenin adresi.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                New Holland traktör ve biçerdöver, FPT Industrial motor revizyonu
                ve Iveco yedek parça alanında; satış öncesinden saha desteğine
                kadar uçtan uca yetkili servis güvencesi.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#hizmetler"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
                >
                  Hizmetlerimiz
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-canvas px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-surface-strong"
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-sm">
                <Image
                  src="/images/bicerdover-hero.png"
                  alt="New Holland biçerdöver hasat sırasında"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-canvas p-5 shadow-lg sm:block">
                <p className="font-mono text-3xl font-bold text-navy">50+</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">
                  yıllık deneyim
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MARKA ŞERİDİ */}
        <section className="border-y border-line bg-canvas">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center gap-3 py-6"
              >
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

        {/* KURUMSAL */}
        <section id="kurumsal" className="scroll-mt-24 bg-canvas py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
                  <Image
                    src="/images/kurucu-huseyin-baydur.jpg"
                    alt="Kurucu Hüseyin Baydur"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-navy/95 p-5 backdrop-blur">
                  <p className="text-sm font-semibold text-white">
                    Hüseyin Baydur
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Kurucu · 1967, Çorum
                  </p>
                </div>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Kurumsal"
                  title="Bir atölyeden bölgesel güce uzanan yolculuk"
                />
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                  <p>
                    Hüseyin Baydur, 1967 yılında Çorum Sanayi Sitesi’nde küçük bir
                    atölyede işe koyuldu. Yarım asrı aşan deneyimini; disiplinli
                    servis anlayışı, orijinal parça hassasiyeti ve müşterisine
                    verdiği sözü tutma ilkesi üzerine kurdu.
                  </p>
                  <p>
                    Bugün New Holland, FPT Industrial ve Iveco yetkili distribütörü
                    olarak; traktörden biçerdövere, ticari araçtan motor
                    revizyonuna kadar geniş bir alanda bölgeye hizmet veriyoruz.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-line bg-surface p-6">
                    <Target className="h-6 w-6 text-nh-yellow" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-semibold text-navy">
                      Vizyonumuz
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Türkiye’nin tarım ve ticari araç servisinde referans alınan,
                      güvenilir ve yenilikçi distribütörü olmak.
                    </p>
                  </div>
                  <div className="rounded-xl border border-line bg-surface p-6">
                    <Eye className="h-6 w-6 text-nh-yellow" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-semibold text-navy">
                      Misyonumuz
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Müşterinin işini kesintisiz sürdürmesini sağlayacak hızlı,
                      doğru ve orijinal çözümler sunmak.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TARİHÇE */}
            <div className="mt-20">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Tarihçe
              </h3>
              <ol className="mt-8 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {TIMELINE.map((item) => (
                  <li key={item.year} className="relative">
                    <span
                      className="absolute -top-[41px] left-0 h-3 w-3 rounded-full border-2 border-canvas bg-navy"
                      aria-hidden="true"
                    />
                    <p className="font-mono text-2xl font-bold text-nh-yellow">
                      {item.year}
                    </p>
                    <p className="mt-2 text-base font-semibold text-navy">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* HİZMETLER */}
        <section
          id="hizmetler"
          className="scroll-mt-24 border-y border-line bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="center"
              eyebrow="Hizmetler"
              title="Uçtan uca yetkili servis çözümleri"
              description="Satış sonrası desteğin her adımında; bakımdan orijinal parçaya, motor revizyonundan saha müdahalesine kadar yanınızdayız."
            />

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.id] ?? Wrench
                return (
                  <article
                    key={service.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-colors duration-200 hover:border-navy/40"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-strong text-navy">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-ink">
                        {service.summary}
                      </p>
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
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* MARKALAR */}
        <section id="markalar" className="scroll-mt-24 bg-canvas py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Markalar"
              title="Yetkili olduğumuz küresel markalar"
              description="Dünya standartlarında üretim gücünü, yerel servis uzmanlığıyla buluşturuyoruz."
            />

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
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
          </div>
        </section>

        {/* REFERANSLAR */}
        <section
          id="referanslar"
          className="scroll-mt-24 border-y border-line bg-navy py-20 text-white lg:py-28"
        >
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
                  Rakamlarla güven
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                  Bölgedeki üreticiler, kooperatifler ve ticari filolar için
                  kesintisiz hizmet. Deneyimimiz, sahadaki her sezonda test
                  ediliyor.
                </p>
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

        {/* İLETİŞİM */}
        <section id="iletisim" className="scroll-mt-24 bg-canvas py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="İletişim"
              title="Size nasıl yardımcı olabiliriz?"
              description="Bakım randevusu, parça talebi veya teknik destek için formu doldurun ya da doğrudan bize ulaşın."
            />

            <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Adres</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {SITE_CONTACT.addressLines.join(' ')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Telefon</p>
                      <a
                        href={`tel:${SITE_CONTACT.phoneE164}`}
                        className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                      >
                        {SITE_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">E-posta</p>
                      <a
                        href={`mailto:${SITE_CONTACT.email}`}
                        className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                      >
                        {SITE_CONTACT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-navy">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">WhatsApp</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-navy"
                      >
                        Hızlı destek için yazın
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="relative h-[320px] overflow-hidden rounded-2xl border border-line">
                  <iframe
                    src={SITE_CONTACT.mapEmbedUrl}
                    title={SITE_CONTACT.mapTitle}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-navy">
                  İletişim formu
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Bilgilerinizi bırakın, ekibimiz en kısa sürede dönüş yapsın.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
