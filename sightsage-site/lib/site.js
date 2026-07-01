// Site-wide config for the SightSage replica: routes, nav, contact, socials,
// footer links and shared asset paths. Mirrors the data-module pattern of the
// sibling tcmrp-site build.

// ---- Asset paths (mirrored locally under /public) ----
export const LOGO = '/cdn/shop/files/SightSage_-_Logo_ba842c9a-1f25-4b4c-8d73-b452c114d8ae_380x.png';
export const HERO_DESKTOP = '/cdn/shop/files/desktop2_82721171-8bf5-485f-a3c3-621838720041_3750x.png';
export const HERO_BANNER = '/cdn/shop/files/Banner_Website_4320_x_1743_px.png';

// ---- Routes ----
export const ROUTES = {
  home: '/',
  // collections
  wellness: '/collections/wellness',
  hair: '/collections/hair-supplements',
  eyeHealth: '/collections/eye-health',
  bestsellers: '/collections/bestsellers',
  shopAll: '/collections/shop-all',
  bundlesCollection: '/collections/bundles',
  allProducts: '/collections/all',
  // pages
  bundlePage: '/pages/bundle-page',
  whoWeAre: '/pages/who-we-are',
  ourFounder: '/pages/our-founder',
  clinicalStudy: '/pages/our-clinical-study',
  blog: '/pages/blog-all',
  visionClub: '/pages/vision-club-1',
  contact: '/pages/contact',
  reviews: '/pages/reviews',
  deliveryReturns: '/pages/delivery-and-returns',
  privacy: '/pages/privacy-policy',
  refund: '/pages/refund-policy',
  terms: '/pages/terms-of-service',
  ccpa: '/pages/ccpa-opt-out',
  // utility
  search: '/search',
  cart: '/cart',
};

// External links
export const FAQ_HREF = 'https://sightsage.com/a/self-faq';
export const ACCOUNT_HREF = 'https://sightsage.com/customer_authentication/redirect';

// ---- Primary navigation (desktop dropdowns + mobile drawer) ----
export const NAV = [
  { label: 'Wellness', href: ROUTES.wellness },
  { label: 'Hair', href: ROUTES.hair },
  { label: 'Eye Health', href: ROUTES.eyeHealth },
  { label: 'Bundles', href: ROUTES.bundlePage },
  { label: 'Shop All', href: ROUTES.shopAll },
  {
    label: 'About',
    href: ROUTES.whoWeAre,
    children: [
      { label: 'Who We Are', href: ROUTES.whoWeAre },
      { label: 'Our Founder', href: ROUTES.ourFounder },
      { label: 'Clinical Study', href: ROUTES.clinicalStudy },
    ],
  },
  { label: 'Blog', href: ROUTES.blog },
  { label: 'Vision Club', href: ROUTES.visionClub },
  { label: 'Contact', href: ROUTES.contact },
];

// ---- Contact (verbatim from captured contact page) ----
export const CONTACT = {
  brand: 'SightSage',
  legalName: 'SightSage Foods & Wellness Inc.',
  address: '1151-11871 Horseshoe Wy, Richmond, BC V7A 5H5',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=1151-11871+Horseshoe+Wy+Richmond+BC+V7A+5H5',
  email: 'support@sightsage.com',
  phone: '+1 778-988-8053',
  phoneTel: '+17789888053',
};

// ---- Socials ----
export const SOCIALS = [
  { name: 'X', href: 'https://twitter.com/sightsageco' },
  { name: 'Facebook', href: 'https://www.facebook.com/sightsage' },
  { name: 'YouTube', href: 'https://www.youtube.com/@sightsage9117' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@sightsage' },
];

// ---- Footer trust-badge strip (verbatim from the live footer) ----
export const FOOTER_BADGES = [
  'FREE SHIPPING ON ORDERS OVER $99 TO USA & CANADA',
  'SUBSCRIBE AND SAVE',
  'WORLDWIDE SHIPPING',
];

// ---- Footer link groups (mirrors live footer columns) ----
export const FOOTER_LINKS = [
  {
    title: 'Get Help!',
    links: [
      { label: 'Bundles', href: ROUTES.bundlePage },
      { label: 'Shop All', href: ROUTES.shopAll },
      { label: 'Contact Us', href: ROUTES.contact },
      { label: 'HELP / FAQ', href: FAQ_HREF },
    ],
  },
  {
    title: 'Become a Member!',
    links: [
      { label: 'Vision Club', href: ROUTES.visionClub },
      { label: 'Who We Are', href: ROUTES.whoWeAre },
      { label: 'Our Founder', href: ROUTES.ourFounder },
      { label: 'Clinical Study', href: ROUTES.clinicalStudy },
    ],
  },
];

// ---- Footer bottom legal row (verbatim labels from the live footer) ----
export const FOOTER_LEGAL = [
  { label: 'Delivery and Returns', href: ROUTES.deliveryReturns },
  { label: 'Privacy Policy', href: ROUTES.privacy },
  { label: 'Refund policy', href: ROUTES.refund },
  { label: 'Terms of Service', href: ROUTES.terms },
  { label: 'Do not sell my personal information', href: ROUTES.ccpa },
];

// ---- Misc strings ----
// Verbatim announcement-bar lines captured from the live storefront banner.
export const ANNOUNCEMENTS = [
  'FREE SHIPPING TO USA & CANADA ON ORDERS OVER $99 + SUBSCRIBE & SAVE',
  'FREE INTERNATIONAL SHIPPING ON ORDERS OVER $250 USD',
];
export const ANNOUNCEMENT = ANNOUNCEMENTS[0];
export const COPYRIGHT = `© ${new Date().getFullYear()} SightSage Foods & Wellness Inc. All rights reserved.`;
