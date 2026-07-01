import './globals.css';
import { Nunito_Sans, Cabin } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOGO } from '@/lib/site';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-nunito',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});
const cabin = Cabin({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-cabin',
});

export const metadata = {
  title: {
    default: 'SightSage | Holistic Natural Health & Wellness',
    template: '%s – SightSage',
  },
  description:
    'SightSage offers holistic, natural health and wellness products rooted in Traditional Chinese Medicine — eye care, hair, and whole-body wellness developed by Dr. Weidong Yu and Kathy.',
  icons: { icon: LOGO },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#533178',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${cabin.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
