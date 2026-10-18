/**
 * Türkçe sözlük — sözlük tipinin kaynağı.
 * Buradaki yapı `en` ve `ru` dosyaları için şablon görevi görür.
 */
export const tr = {
  localeName: 'Türkçe',
  nav: {
    kurumsal: 'Kurumsal',
    hizmetler: 'Hizmetler',
    markalar: 'Markalar',
    referanslar: 'Referanslar',
    iletisim: 'İletişim',
  },
  header: {
    brandSubtitle: 'Yetkili Distribütör · 1967',
    contactCta: 'Bize Ulaşın',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    mainNav: 'Ana menü',
    mobileNav: 'Mobil menü',
    homeAria: 'Ana sayfa',
    languageLabel: 'Dil seçimi',
  },
  common: {
    home: 'Ana Sayfa',
    phone: 'Telefon',
    email: 'E-posta',
    whatsapp: 'WhatsApp',
    address: 'Adres',
    contact: 'İletişim',
    whatsappWrite: 'WhatsApp ile yazın',
    quickSupport: 'Hızlı destek için yazın',
    mapTitle: 'Hüseyin Baydur — Çorum servis merkezi konumu',
  },
  footer: {
    tagline:
      'New Holland, FPT Industrial ve Iveco yetkili distribütörü. 1967’den beri Çorum’dan dünyaya.',
    corporateHeading: 'Kurumsal',
    servicesHeading: 'Hizmetler',
    contactHeading: 'İletişim',
    rights: 'Tüm hakları saklıdır.',
  },
  meta: {
    keywords: [
      'Hüseyin Baydur',
      'New Holland yetkili servis',
      'FPT Industrial motor revizyon',
      'Iveco yedek parça',
      'Çorum traktör servisi',
      'biçerdöver servisi',
    ],
    home: {
      title: 'Hüseyin Baydur | New Holland, FPT Industrial ve Iveco Yetkili Distribütörü',
      description:
        'Çorum merkezli Hüseyin Baydur; 1967’den beri New Holland traktör ve biçerdöver, FPT Industrial motor revizyonu ve Iveco yedek parça alanında yetkili servis ve distribütörlük hizmeti sunar.',
    },
    kurumsal: {
      title: 'Kurumsal',
      description:
        '1967’de Çorum’da küçük bir atölyede başlayan Hüseyin Baydur’un yarım asrı aşan hikâyesi; vizyon, misyon ve kurumsal tarihçe.',
    },
    hizmetler: {
      title: 'Hizmetler',
      description:
        'Yetkili servis ve teknik destek, şasiye göre orijinal yedek parça tedariği ve FPT Industrial Cursor/NEF motor revizyonu — Çorum merkezli Hüseyin Baydur.',
    },
    markalar: {
      title: 'Markalar',
      description:
        'New Holland traktör ve biçerdöver, FPT Industrial motor teknolojileri ve Iveco ticari araç; üç küresel markanın yetkili distribütörü.',
    },
    referanslar: {
      title: 'Referanslar',
      description:
        'Yarım asrı aşan deneyim, bölgedeki üreticiler ve ticari filolar için kesintisiz hizmet: 1967’den bugüne Hüseyin Baydur referansları.',
    },
    iletisim: {
      title: 'İletişim',
      description:
        'Hüseyin Baydur iletişim: Çorum Sanayi Sitesi’ndeki servis merkezimiz, telefon, e-posta ve WhatsApp ile hızlı destek.',
    },
  },
  stats: {
    eyebrow: 'Referanslar',
    heading: 'Rakamlarla güven',
    intro:
      'Bölgedeki üreticiler, kooperatifler ve ticari filolar için kesintisiz hizmet. Deneyimimiz, sahadaki her sezonda test ediliyor.',
    items: [
      { value: '1967', label: 'Kuruluş yılı' },
      { value: '50+', label: 'Yıllık deneyim' },
      { value: '3', label: 'Küresel marka yetkisi' },
      { value: '10.000+', label: 'Parça çeşidi' },
    ],
    tags: ['Tarım', 'Biçerdöver', 'Traktör', 'Ticari Araç', 'Motor Revizyonu', 'İhracat'],
  },
  services: [
    {
      id: 'yetkili-servis',
      title: 'Yetkili Servis & Teknik Destek',
      summary: 'Periyodik bakım, arıza tespiti ve yerinde müdahale.',
      description:
        'New Holland biçerdöver ve traktörleri ile Iveco ticari araçlarınız için yetkili servis güvencesiyle periyodik bakım, elektronik arıza tespiti ve yerinde müdahale hizmeti sunuyoruz.',
      imageAlt: 'New Holland yetkili servis atölyesi',
      highlights: [
        'Periyodik bakım ve sezon öncesi kontrol',
        'Elektronik arıza tespiti ve teşhis',
        'Yerinde ve tarlada müdahale',
      ],
    },
    {
      id: 'yedek-parca',
      title: 'Orijinal Yedek Parça',
      summary: 'Şasiye göre doğrulanmış orijinal parça tedariği.',
      description:
        'Orijinal CNH, FPT ve Iveco yedek parçalarını şasi numaranıza göre doğrulayıp hızlı biçimde tedarik ediyoruz. Yanlış parça riski olmadan, doğru parçayı ilk seferde elinize ulaştırıyoruz.',
      imageAlt: 'Orijinal yedek parça deposu',
      highlights: [
        'Orijinal OEM parça garantisi',
        'Şasiye göre uyum doğrulama',
        'Hızlı tedarik ve lojistik',
      ],
    },
    {
      id: 'motor-revizyon',
      title: 'FPT Motor Revizyon Merkezi',
      summary: 'Cursor ve NEF motorlarda komple revizyon ve kalibrasyon.',
      description:
        'FPT Industrial Cursor ve NEF motor ailelerinde komple revizyon, dyna testi ve ECU kalibrasyonu ile motorlarınızı fabrika toleranslarında yeniden tam performansa kavuşturuyoruz.',
      imageAlt: 'FPT Industrial motor revizyon merkezi',
      highlights: [
        'Cursor ve NEF motor uzmanlığı',
        'Dyna test ve güç-tork ölçümü',
        'EST yazılımı ile ECU kalibrasyonu',
      ],
    },
  ],
  brands: [
    {
      id: 'new-holland',
      name: 'New Holland',
      role: 'Traktör & Biçerdöver',
      description:
        'Traktör ve tarım makinelerinde yetkili satış, servis ve orijinal yedek parça hizmeti.',
    },
    {
      id: 'fpt-industrial',
      name: 'FPT Industrial',
      role: 'Motor Teknolojileri',
      description:
        'Cursor ve NEF motor ailelerinde yetkili servis, revizyon ve elektronik kalibrasyon.',
    },
    {
      id: 'iveco',
      name: 'Iveco',
      role: 'Ticari Araç & Yedek Parça',
      description:
        'Ticari araçlar için orijinal yedek parça tedariği ve teknik servis desteği.',
    },
  ],
  timeline: [
    {
      year: '1967',
      title: 'İlk atölye',
      description:
        'Hüseyin Baydur, Çorum Sanayi Sitesi’nde küçük bir atölyede faaliyete başladı.',
    },
    {
      year: '1985',
      title: 'Yetkili servis',
      description:
        'New Holland yetkili servis ağına katılarak bölgenin güvenilir servis adresi hâline geldi.',
    },
    {
      year: '2005',
      title: 'Motor uzmanlığı',
      description:
        'FPT Industrial motor revizyonu ve elektronik kalibrasyon yetkinliği kazanıldı.',
    },
    {
      year: '2020',
      title: 'Uluslararası operasyon',
      description:
        'İhracat ve yurt dışı saha projeleriyle operasyonlar sınırları aşarak büyüdü.',
    },
  ],
  home: {
    heroBadge: '1967’den beri yetkili distribütör',
    heroTitleTop: 'Tarım ve ticari araçta',
    heroTitleBottom: 'güvenin adresi.',
    heroSubtitle:
      'New Holland traktör ve biçerdöver, FPT Industrial motor revizyonu ve Iveco yedek parça alanında; satış öncesinden saha desteğine kadar uçtan uca yetkili servis güvencesi.',
    heroImageAlt: 'New Holland biçerdöver hasat sırasında',
    ctaServices: 'Hizmetlerimiz',
    ctaContact: 'Bize Ulaşın',
    statValue: '50+',
    statLabel: 'yıllık deneyim',
    aboutEyebrow: 'Kurumsal',
    aboutTitle: 'Bir atölyeden bölgesel güce uzanan yolculuk',
    aboutP1:
      'Hüseyin Baydur, 1967 yılında Çorum Sanayi Sitesi’nde küçük bir atölyede işe koyuldu. Yarım asrı aşan deneyimini; disiplinli servis anlayışı, orijinal parça hassasiyeti ve müşterisine verdiği sözü tutma ilkesi üzerine kurdu.',
    aboutP2:
      'Bugün New Holland, FPT Industrial ve Iveco yetkili distribütörü olarak; traktörden biçerdövere, ticari araçtan motor revizyonuna kadar geniş bir alanda bölgeye hizmet veriyoruz.',
    aboutLink: 'Kurumsal profilimiz',
    founderAlt: 'Kurucu Hüseyin Baydur',
    founderCaptionName: 'Hüseyin Baydur',
    founderCaptionRole: 'Kurucu · 1967, Çorum',
    servicesEyebrow: 'Hizmetler',
    servicesTitle: 'Uçtan uca yetkili servis çözümleri',
    servicesDescription: 'Satış sonrası desteğin her adımında yanınızdayız.',
    servicesLink: 'Tüm hizmetler',
    brandsEyebrow: 'Markalar',
    brandsTitle: 'Yetkili olduğumuz küresel markalar',
    brandsDescription:
      'Dünya standartlarında üretim gücünü, yerel servis uzmanlığıyla buluşturuyoruz.',
    ctaTitle: 'Projeniz veya aracınız için yanınızdayız',
    ctaDescription:
      'Bakım randevusu, yedek parça talebi ya da teknik destek; tek bir mesajla bize ulaşın.',
  },
  kurumsal: {
    eyebrow: 'Kurumsal',
    breadcrumb: 'Kurumsal',
    title: 'Bir atölyeden bölgesel güce uzanan yolculuk',
    description:
      'Hüseyin Baydur, 1967’den bu yana disiplinli servis anlayışı ve orijinal parça hassasiyetiyle tarım ve ticari araç sektörüne hizmet veriyor.',
    founderAlt: 'Kurucu Hüseyin Baydur',
    founderCaptionName: 'Hüseyin Baydur',
    founderCaptionRole: 'Kurucu · 1967, Çorum',
    aboutEyebrow: 'Hakkımızda',
    aboutTitle: 'Yarım asrı aşan bir ustalık',
    aboutP1:
      'Hüseyin Baydur, 1967 yılında Çorum Sanayi Sitesi’nde küçük bir atölyede işe koyuldu. Yarım asrı aşan deneyimini; disiplinli servis anlayışı, orijinal parça hassasiyeti ve müşterisine verdiği sözü tutma ilkesi üzerine kurdu.',
    aboutP2:
      'Bugün New Holland, FPT Industrial ve Iveco yetkili distribütörü olarak; traktörden biçerdövere, ticari araçtan motor revizyonuna kadar geniş bir alanda bölgeye hizmet veriyoruz. Ekibimiz, makinenin işini kesintisiz sürdürmesini sağlayacak hız ve doğrulukta çalışır.',
    visionTitle: 'Vizyonumuz',
    visionText:
      'Türkiye’nin tarım ve ticari araç servisinde referans alınan, güvenilir ve yenilikçi distribütörü olmak.',
    missionTitle: 'Misyonumuz',
    missionText:
      'Müşterinin işini kesintisiz sürdürmesini sağlayacak hızlı, doğru ve orijinal çözümler sunmak.',
    timelineEyebrow: 'Tarihçe',
    timelineTitle: 'Kilometre taşlarımız',
    timelineDescription: 'Küçük bir atölyeden uluslararası operasyona uzanan yolculuk.',
    ctaTitle: 'Kurumsal iş birliği ve tedarik için görüşelim',
    ctaDescription:
      'Filolar, kooperatifler ve yetkili servis ağı iş birlikleri için ekibimize ulaşın.',
  },
  hizmetler: {
    eyebrow: 'Hizmetler',
    breadcrumb: 'Hizmetler',
    title: 'Uçtan uca yetkili servis çözümleri',
    description:
      'Satış sonrası desteğin her adımında; periyodik bakımdan orijinal parçaya, motor revizyonundan saha müdahalesine kadar yanınızdayız.',
    ctaTitle: 'Bakım, parça veya revizyon randevusu',
    ctaDescription:
      'Aracınızın bilgilerini paylaşın; ekibimiz en uygun çözümü ve zamanı planlasın.',
  },
  markalar: {
    eyebrow: 'Markalar',
    breadcrumb: 'Markalar',
    title: 'Yetkili olduğumuz küresel markalar',
    description:
      'Dünya standartlarında üretim gücünü, yerel servis uzmanlığıyla buluşturuyoruz.',
    distEyebrow: 'Distribütörlük',
    distTitle: 'Orijinal ürün, resmî güvence',
    distDescription:
      'Yetkili distribütör olarak yalnızca orijinal ürün ve onaylı servis süreçleri sunarız; garanti ve teknik destek tek noktadan yönetilir.',
    ctaTitle: 'Aracınıza uygun ürün ve parça için danışın',
    ctaDescription:
      'Model ve şasi bilgilerinizle bize ulaşın; doğru ürünü ve parçayı birlikte belirleyelim.',
  },
  referanslar: {
    eyebrow: 'Referanslar',
    breadcrumb: 'Referanslar',
    title: 'Rakamlarla ve sahayla güven',
    description:
      'Deneyimimiz her sezonda sahada test ediliyor. Bölgenin üreticileri, kooperatifleri ve ticari filoları için kesintisiz hizmet sunuyoruz.',
    areaEyebrow: 'Hizmet Bölgesi',
    areaTitle: 'Çorum ve çevre illerde yanınızdayız',
    areaDescription:
      'Merkez servis atölyemizin yanı sıra saha ekibimizle geniş bir bölgeye hizmet veriyoruz.',
    ctaTitle: 'Siz de referanslarımıza katılın',
    ctaDescription:
      'İşletmenizin ihtiyaçlarını konuşmak ve size özel çözüm almak için bize ulaşın.',
  },
  iletisim: {
    eyebrow: 'İletişim',
    breadcrumb: 'İletişim',
    title: 'Size nasıl yardımcı olabiliriz?',
    description:
      'Bakım randevusu, parça talebi veya teknik destek için formu doldurun ya da doğrudan bize ulaşın.',
    formTitle: 'İletişim formu',
    formSubtitle: 'Bilgilerinizi bırakın, ekibimiz en kısa sürede dönüş yapsın.',
    whatsappValue: 'Hızlı destek için yazın',
  },
  ctaBanner: {
    contact: 'İletişim',
  },
  form: {
    nameLabel: 'Ad Soyad',
    namePlaceholder: 'Adınız ve soyadınız',
    companyLabel: 'Firma',
    companyOptional: '(opsiyonel)',
    companyPlaceholder: 'Firma / işletme adı',
    emailLabel: 'E-posta',
    emailPlaceholder: 'ornek@eposta.com',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+90 5__ ___ __ __',
    subjectLabel: 'Konu',
    subjectOptions: [
      'Yetkili Servis / Bakım',
      'Orijinal Yedek Parça',
      'FPT Motor Revizyonu',
      'Satış ve Fiyat Bilgisi',
      'Diğer',
    ],
    messageLabel: 'Mesajınız',
    messagePlaceholder: 'Size nasıl yardımcı olabiliriz?',
    privacy:
      'Bilgileriniz yalnızca size dönüş yapmak için kullanılır, üçüncü taraflarla paylaşılmaz.',
    submit: 'Gönder',
    sending: 'Gönderiliyor',
    successTitle: 'Mesajınız iletildi',
    successText:
      'Teşekkürler, en kısa sürede size dönüş yapacağız. Acil durumlar için doğrudan telefon veya WhatsApp’tan ulaşabilirsiniz.',
    newMessage: 'Yeni mesaj',
    errorGeneric: 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.',
    errorConnection: 'Bağlantı hatası. Lütfen tekrar deneyin.',
    notConfigured:
      'Çevrimiçi form servisi henüz yapılandırılmamış. Aşağıdaki WhatsApp veya e-posta seçeneklerinden bize ulaşabilirsiniz.',
    fallbackWhatsApp: 'WhatsApp ile gönder',
    fallbackEmail: 'E-posta ile gönder',
  },
  notFound: {
    title: 'Aradığınız sayfa bulunamadı',
    text: 'Sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.',
    backHome: 'Ana sayfaya dön',
  },
  whatsappMessage: 'Hüseyin Baydur — web sitesi üzerinden bilgi almak istiyorum.',
  whatsappFormMessage: 'Merhaba, web sitesi formundan yazıyorum.',
}
