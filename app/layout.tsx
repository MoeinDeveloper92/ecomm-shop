import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const raleway = localFont({
  src: './fonts/raleway.woff2',
  variable: '--font-raleway',
  weight: '100 900',
});
export const metadata: Metadata = {
  title: 'Ecommerce shopping',
  description: 'An Ecommerce app for education dev students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased ${raleway.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
