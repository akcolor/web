export const SITE = {
  name: 'Akcolor Fotoğrafçılık',
  shortName: 'Akcolor',
  url: 'https://akcolor.com',
  founded: 1983,
  locale: 'tr_TR',
  lang: 'tr',
  description:
    "Akcolor Fotoğrafçılık, Bakırköy'de 1983'ten beri profesyonel biyometrik fotoğraf çekimi yapar: vesikalık, Schengen ve ABD vize, pasaport, kimlik ve ehliyet fotoğrafı ile yüksek kaliteli fotoğraf baskısı hizmetleri.",
  address: {
    streetAddress: 'Yeşilyurt Mah. Sipahioğlu Cad. No:4/A',
    locality: 'Bakırköy',
    region: 'İstanbul',
    postalCode: '34149',
    country: 'TR',
  },
  geo: {
    latitude: 40.9817,
    longitude: 28.8777,
  },
  phone: {
    display: '0212 573 10 67',
    tel: '+902125731067',
  },
  whatsapp: {
    display: '0551 451 3223',
    number: '905514513223',
  },
  email: 'info@akcolor.com',
  priceRange: '$$',
  maps: 'https://maps.google.com/maps?q=Akcolor+Fotoğrafçılık+Sipahioğlu+Cd+No:4/A+34149+Bakırköy+İstanbul',
  reviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJtbrhPyKjyhQR60QLWkhpwCE',
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
  ],
  hoursDisplay: [
    { label: 'Hafta içi', value: '09:00 - 19:00' },
    { label: 'Cumartesi', value: '09:00 - 19:00' },
    { label: 'Pazar', value: 'Kapalı' },
  ],
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/#services' },
  { label: 'Fotoğraf Baskısı', href: '/#fotograf-baskisi' },
  { label: 'Hakkımızda', href: '/#about' },
  { label: 'S.S.S.', href: '/sss/' },
  { label: 'İletişim', href: '/#contact' },
];

export const FOOTER_SERVICES: NavItem[] = [
  { label: 'Schengen Vize Fotoğrafı', href: '/schengen-vize/' },
  { label: 'ABD Vize Fotoğrafı', href: '/abd-vize/' },
  { label: 'Pasaport Fotoğrafı', href: '/pasaport-fotografi/' },
  { label: 'Kimlik Fotoğrafı', href: '/kimlik-fotografi/' },
  { label: 'Ehliyet Fotoğrafı', href: '/ehliyet-fotografi/' },
  { label: 'Standart Vesikalık', href: '/standart-vesikalik/' },
];
