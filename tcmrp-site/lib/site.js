// Single source of truth for site-wide data: nav, footer, contact (NAP), socials.
// Mirrors the captured tcmrp.com structure verbatim.

export const ROUTES = {
  home: '/',
  treatment: '/retinitis-pigmentosa-treatment',
  about: '/about-us',
  patientStories: '/patient-stories',
  faq: '/faq',
  travel: '/travel-logistics',
  accommodation: '/accommodation-tips',
  contact: '/contact-us',
  terms: '/terms-of-use',
  news: '/blog',
};

export const BOOK_HREF = ROUTES.contact;

export const NAV = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Treatment', href: ROUTES.treatment },
  {
    label: 'About Us',
    href: ROUTES.about,
    children: [
      { label: 'About Wellspring Clinic', href: `${ROUTES.about}#about-wellspring-clinic` },
      { label: 'About Dr. Yu', href: `${ROUTES.about}#about-our-founder` },
      { label: 'FAQ', href: ROUTES.faq },
      { label: 'News', href: ROUTES.news },
    ],
  },
  { label: 'Patient Stories', href: ROUTES.patientStories },
  {
    label: 'Resource Hub',
    href: '#',
    children: [
      { label: 'Travel logistics', href: ROUTES.travel },
      { label: 'Accommodation tips', href: ROUTES.accommodation },
    ],
  },
  { label: 'Contact', href: ROUTES.contact },
];

export const CONTACT = {
  address: '916 West King Edward Avenue, Vancouver, BC V5Z 2E2',
  addressShort: '916 W King Edward Ave Vancouver, BC V5Z 2E2',
  mapUrl: 'https://maps.app.goo.gl/YkkHyFbLjEJgEYgQ9',
  tollFreeLabel: 'Toll Free: 1-877-737-7876 (USA/Canada)',
  tollFreeTel: '1-877-737-7876',
  localLabel: 'Local: 604-737-7876',
  localTel: '604-737-7876',
  email: 'wellspring2828@gmail.com',
};

export const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/WVIPgroup' },
  { name: 'YouTube', href: 'http://www.youtube.com/user/WellspringClinic' },
  { name: 'LinkedIn', href: 'http://ca.linkedin.com/pub/dr-weidong-yu/21/4a7/16' },
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Retinitis Pigmentosa Treatment', href: ROUTES.treatment },
  { label: 'Patient Stories', href: ROUTES.patientStories },
  { label: 'Travel logistics', href: ROUTES.travel },
  { label: 'Accommodation tips', href: ROUTES.accommodation },
  { label: 'Contact', href: ROUTES.contact },
];

export const FOOTER_ABOUT_LINKS = [
  { label: 'About Wellspring Clinic', href: `${ROUTES.about}#about-wellspring-clinic` },
  { label: 'About Dr. Yu', href: `${ROUTES.about}#about-our-founder` },
  { label: 'FAQ', href: ROUTES.faq },
  { label: 'News', href: ROUTES.news },
];

export const COPYRIGHT =
  '© 1997-2018 Wellspring TCM Technology Institute Ltd. All Rights Reserved.';

// Local asset paths (mirrored into /public from the original site)
export const LOGO_HEADER = '/wp-content/uploads/2026/05/Group-91.svg';
export const LOGO_FOOTER = '/wp-content/uploads/2026/05/Group-55.svg';
