import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Appbar from '@/components/appbar';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'eCommerce Fake',
  description: 'An eCommerce fake website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
