import './globals.css';

export const metadata = {
  title: 'SecondBrain · Your Brand Kit · Dr. Yu',
  description: 'A simple page to send us everything we need to build your SecondBrain.',
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
