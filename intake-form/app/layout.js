import './globals.css';

export const metadata = {
  title: 'SecondBrain · Dr. Yu',
  description: 'Your Growth plan agreement and brand kit, in one place.',
  robots: { index: false, follow: false },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
