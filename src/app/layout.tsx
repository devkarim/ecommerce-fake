import './globals.css';

import type { Metadata } from 'next';
import { Inter, Courgette } from 'next/font/google';

import Navbar from '@/components/navbar';
import Footer from '@/components/ui/footer';
import { APP_URL } from '@/config/constants';
import ToastProvider from '@/providers/toast-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const bebas_neue = Courgette({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-courgette',
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Store',
    template: '%s | Store',
  },
  description: 'Explore the best products from around the world.',
  verification: {
    google:
      'google-site-verification=14WETKbXYtuTBsWM-9UFewRQ1GTtvDlRGVogNc03K9U',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas_neue.variable} ${inter.variable} font-sans`}>
        <ToastProvider />
        <Navbar />
        <div className="min-h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
