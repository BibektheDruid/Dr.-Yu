import './globals.css';
import { Inter, Playfair_Display, Roboto, Roboto_Slab } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap', variable: '--font-roboto' });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-slab' });

export const metadata = {
  title: {
    default: 'Holistic Treatment for Retinitis Pigmentosa | Wellspring Clinic',
    template: '%s | Wellspring Clinic',
  },
  description:
    'Traditional Chinese Medicine treatment for Retinitis Pigmentosa. Personalized care, acupuncture, and herbal medicine. Reach out today!',
  icons: { icon: '/wp-content/uploads/2026/06/wellspringicon-150x150.png' },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${roboto.variable} ${robotoSlab.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
