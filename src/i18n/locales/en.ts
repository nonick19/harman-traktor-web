import type { Dictionary } from '../index'

/** İngilizce sözlük. Yapı `tr` ile birebir aynıdır. */
export const en: Dictionary = {
  localeName: 'English',
  nav: {
    kurumsal: 'Corporate',
    hizmetler: 'Services',
    markalar: 'Brands',
    referanslar: 'References',
    iletisim: 'Contact',
  },
  header: {
    brandSubtitle: 'Authorized Distributor · 1967',
    contactCta: 'Contact Us',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main menu',
    mobileNav: 'Mobile menu',
    homeAria: 'Home',
    languageLabel: 'Language selection',
  },
  common: {
    home: 'Home',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    address: 'Address',
    contact: 'Contact',
    whatsappWrite: 'Message us on WhatsApp',
    quickSupport: 'Message us for quick support',
    mapTitle: 'Hüseyin Baydur — Çorum service centre location',
  },
  footer: {
    tagline:
      'Authorized distributor of New Holland, FPT Industrial and Iveco. From Çorum to the world since 1967.',
    corporateHeading: 'Corporate',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    rights: 'All rights reserved.',
  },
  meta: {
    keywords: [
      'Hüseyin Baydur',
      'New Holland authorized service',
      'FPT Industrial engine overhaul',
      'Iveco spare parts',
      'Çorum tractor service',
      'combine harvester service',
    ],
    home: {
      title: 'Hüseyin Baydur | Authorized Distributor of New Holland, FPT Industrial and Iveco',
      description:
        'Based in Çorum, Hüseyin Baydur has provided authorized service and distribution for New Holland tractors and combine harvesters, FPT Industrial engine overhauls and Iveco spare parts since 1967.',
    },
    kurumsal: {
      title: 'Corporate',
      description:
        'The story of Hüseyin Baydur, which began in a small workshop in Çorum in 1967 and spans more than half a century: vision, mission and corporate history.',
    },
    hizmetler: {
      title: 'Services',
      description:
        'Authorized service and technical support, chassis-verified genuine spare parts supply and FPT Industrial Cursor/NEF engine overhaul — Hüseyin Baydur, based in Çorum.',
    },
    markalar: {
      title: 'Brands',
      description:
        'New Holland tractors and combine harvesters, FPT Industrial engine technologies and Iveco commercial vehicles; authorized distributor of three global brands.',
    },
    referanslar: {
      title: 'References',
      description:
        'More than half a century of experience and uninterrupted service for regional producers and commercial fleets: Hüseyin Baydur references from 1967 to today.',
    },
    iletisim: {
      title: 'Contact',
      description:
        'Contact Hüseyin Baydur: our service centre in the Çorum Industrial Estate, with quick support by phone, email and WhatsApp.',
    },
  },
  stats: {
    eyebrow: 'References',
    heading: 'Trust in numbers',
    intro:
      'Uninterrupted service for the region’s producers, cooperatives and commercial fleets. Our experience is tested in the field every season.',
    items: [
      { value: '1967', label: 'Founded in' },
      { value: '50+', label: 'Years of experience' },
      { value: '3', label: 'Global brand authorizations' },
      { value: '10,000+', label: 'Part references' },
    ],
    tags: [
      'Agriculture',
      'Combine harvesters',
      'Tractors',
      'Commercial vehicles',
      'Engine overhaul',
      'Export',
    ],
  },
  services: [
    {
      id: 'yetkili-servis',
      title: 'Authorized Service & Technical Support',
      summary: 'Scheduled maintenance, fault detection and on-site intervention.',
      description:
        'For your New Holland combine harvesters and tractors and your Iveco commercial vehicles, we provide scheduled maintenance, electronic fault detection and on-site intervention with the assurance of authorized service.',
      imageAlt: 'New Holland authorized service workshop',
      highlights: [
        'Scheduled maintenance and pre-season inspection',
        'Electronic fault detection and diagnostics',
        'On-site and in-field intervention',
      ],
    },
    {
      id: 'yedek-parca',
      title: 'Genuine Spare Parts',
      summary: 'Genuine parts verified against your chassis number.',
      description:
        'We verify genuine CNH, FPT and Iveco spare parts against your chassis number and supply them quickly. Without the risk of the wrong part, we get the right one to you the first time.',
      imageAlt: 'Genuine spare parts warehouse',
      highlights: [
        'Genuine OEM parts guarantee',
        'Chassis-based fitment verification',
        'Fast supply and logistics',
      ],
    },
    {
      id: 'motor-revizyon',
      title: 'FPT Engine Overhaul Centre',
      summary: 'Complete overhaul and calibration for Cursor and NEF engines.',
      description:
        'With complete overhaul, dyno testing and ECU calibration for the FPT Industrial Cursor and NEF engine families, we restore your engines to full performance within factory tolerances.',
      imageAlt: 'FPT Industrial engine overhaul centre',
      highlights: [
        'Cursor and NEF engine expertise',
        'Dyno testing and power-torque measurement',
        'ECU calibration with EST software',
      ],
    },
  ],
  brands: [
    {
      id: 'new-holland',
      name: 'New Holland',
      role: 'Tractors & Combine Harvesters',
      description:
        'Authorized sales, service and genuine spare parts for tractors and agricultural machinery.',
    },
    {
      id: 'fpt-industrial',
      name: 'FPT Industrial',
      role: 'Engine Technologies',
      description:
        'Authorized service, overhaul and electronic calibration for the Cursor and NEF engine families.',
    },
    {
      id: 'iveco',
      name: 'Iveco',
      role: 'Commercial Vehicles & Spare Parts',
      description:
        'Genuine spare parts supply and technical service support for commercial vehicles.',
    },
  ],
  timeline: [
    {
      year: '1967',
      title: 'The first workshop',
      description:
        'Hüseyin Baydur started operating in a small workshop in the Çorum Industrial Estate.',
    },
    {
      year: '1985',
      title: 'Authorized service',
      description:
        'Joined the New Holland authorized service network and became the region’s trusted service address.',
    },
    {
      year: '2005',
      title: 'Engine expertise',
      description:
        'Gained competence in FPT Industrial engine overhaul and electronic calibration.',
    },
    {
      year: '2020',
      title: 'International operations',
      description:
        'Operations grew beyond borders with export and overseas field projects.',
    },
  ],
  home: {
    heroBadge: 'Authorized distributor since 1967',
    heroTitleTop: 'In agriculture and commercial vehicles,',
    heroTitleBottom: 'the address of trust.',
    heroSubtitle:
      'From New Holland tractors and combine harvesters to FPT Industrial engine overhauls and Iveco spare parts — end-to-end authorized service assurance, from pre-sales to field support.',
    heroImageAlt: 'New Holland combine harvester during harvest',
    ctaServices: 'Our Services',
    ctaContact: 'Contact Us',
    statValue: '50+',
    statLabel: 'years of experience',
    aboutEyebrow: 'Corporate',
    aboutTitle: 'A journey from a small workshop to regional strength',
    aboutP1:
      'Hüseyin Baydur set to work in a small workshop in the Çorum Industrial Estate in 1967. He built more than half a century of experience on a disciplined service approach, precision with genuine parts and keeping his word to the customer.',
    aboutP2:
      'Today, as the authorized distributor of New Holland, FPT Industrial and Iveco, we serve the region across a broad field — from tractors to combine harvesters, from commercial vehicles to engine overhauls.',
    aboutLink: 'Our corporate profile',
    founderAlt: 'Founder Hüseyin Baydur',
    founderCaptionName: 'Hüseyin Baydur',
    founderCaptionRole: 'Founder · 1967, Çorum',
    servicesEyebrow: 'Services',
    servicesTitle: 'End-to-end authorized service solutions',
    servicesDescription: 'We are by your side at every step of after-sales support.',
    servicesLink: 'All services',
    brandsEyebrow: 'Brands',
    brandsTitle: 'The global brands we represent',
    brandsDescription:
      'We combine world-class manufacturing strength with local service expertise.',
    ctaTitle: 'We are by your side for your project or vehicle',
    ctaDescription:
      'A maintenance appointment, a spare parts request or technical support — reach us with a single message.',
  },
  kurumsal: {
    eyebrow: 'Corporate',
    breadcrumb: 'Corporate',
    title: 'A journey from a small workshop to regional strength',
    description:
      'Since 1967, Hüseyin Baydur has served the agriculture and commercial vehicle sector with a disciplined service approach and precision with genuine parts.',
    founderAlt: 'Founder Hüseyin Baydur',
    founderCaptionName: 'Hüseyin Baydur',
    founderCaptionRole: 'Founder · 1967, Çorum',
    aboutEyebrow: 'About Us',
    aboutTitle: 'More than half a century of craftsmanship',
    aboutP1:
      'Hüseyin Baydur set to work in a small workshop in the Çorum Industrial Estate in 1967. He built more than half a century of experience on a disciplined service approach, precision with genuine parts and keeping his word to the customer.',
    aboutP2:
      'Today, as the authorized distributor of New Holland, FPT Industrial and Iveco, we serve the region across a broad field — from tractors to combine harvesters, from commercial vehicles to engine overhauls. Our team works with the speed and accuracy that keep your machine running without interruption.',
    visionTitle: 'Our Vision',
    visionText:
      'To be the trusted and innovative distributor that is the benchmark for agricultural and commercial vehicle service in Turkey.',
    missionTitle: 'Our Mission',
    missionText:
      'To deliver fast, accurate and genuine solutions that keep the customer’s work running without interruption.',
    timelineEyebrow: 'History',
    timelineTitle: 'Our milestones',
    timelineDescription: 'A journey from a small workshop to international operations.',
    ctaTitle: 'Let’s talk about corporate collaboration and supply',
    ctaDescription:
      'Reach our team for fleet, cooperative and authorized service network partnerships.',
  },
  hizmetler: {
    eyebrow: 'Services',
    breadcrumb: 'Services',
    title: 'End-to-end authorized service solutions',
    description:
      'At every step of after-sales support — from scheduled maintenance to genuine parts, from engine overhaul to field intervention — we are by your side.',
    ctaTitle: 'A maintenance, parts or overhaul appointment',
    ctaDescription:
      'Share your vehicle details and our team will plan the best solution and time.',
  },
  markalar: {
    eyebrow: 'Brands',
    breadcrumb: 'Brands',
    title: 'The global brands we represent',
    description:
      'We combine world-class manufacturing strength with local service expertise.',
    distEyebrow: 'Distributorship',
    distTitle: 'Genuine products, official assurance',
    distDescription:
      'As an authorized distributor we offer only genuine products and approved service processes; warranty and technical support are managed from a single point.',
    ctaTitle: 'Consult us for the right product and part for your vehicle',
    ctaDescription:
      'Reach us with your model and chassis details and we will determine the right product and part together.',
  },
  referanslar: {
    eyebrow: 'References',
    breadcrumb: 'References',
    title: 'Trust in numbers and in the field',
    description:
      'Our experience is tested in the field every season. We provide uninterrupted service for the region’s producers, cooperatives and commercial fleets.',
    areaEyebrow: 'Service Area',
    areaTitle: 'We are by your side in Çorum and neighbouring provinces',
    areaDescription:
      'Alongside our central service workshop, our field team serves a wide area.',
    ctaTitle: 'Join our references too',
    ctaDescription:
      'Reach us to discuss your business needs and get a solution tailored to you.',
  },
  iletisim: {
    eyebrow: 'Contact',
    breadcrumb: 'Contact',
    title: 'How can we help you?',
    description:
      'Fill in the form for a maintenance appointment, a parts request or technical support, or reach us directly.',
    formTitle: 'Contact form',
    formSubtitle: 'Leave your details and our team will get back to you as soon as possible.',
    whatsappValue: 'Message us for quick support',
  },
  ctaBanner: {
    contact: 'Contact',
  },
  form: {
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name',
    companyLabel: 'Company',
    companyOptional: '(optional)',
    companyPlaceholder: 'Company / business name',
    emailLabel: 'Email',
    emailPlaceholder: 'example@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+90 5__ ___ __ __',
    subjectLabel: 'Subject',
    subjectOptions: [
      'Authorized Service / Maintenance',
      'Genuine Spare Parts',
      'FPT Engine Overhaul',
      'Sales & Pricing',
      'Other',
    ],
    messageLabel: 'Your Message',
    messagePlaceholder: 'How can we help you?',
    privacy:
      'Your details are used only to get back to you and are not shared with third parties.',
    submit: 'Send',
    sending: 'Sending',
    successTitle: 'Your message has been sent',
    successText:
      'Thank you, we will get back to you as soon as possible. For urgent matters you can reach us directly by phone or WhatsApp.',
    newMessage: 'New message',
    errorGeneric: 'Your message could not be sent. Please try again.',
    errorConnection: 'Connection error. Please try again.',
    notConfigured:
      'The online form service is not configured yet. You can reach us via the WhatsApp or email options below.',
    fallbackWhatsApp: 'Send via WhatsApp',
    fallbackEmail: 'Send via email',
  },
  notFound: {
    title: 'The page you are looking for was not found',
    text: 'The page may have been moved or removed. You can continue from the links below.',
    backHome: 'Back to home',
  },
  whatsappMessage: 'Hüseyin Baydur — I would like information via the website.',
  whatsappFormMessage: 'Hello, I am writing from the website form.',
}
