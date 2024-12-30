import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { Toaster } from "react-hot-toast";
import Footer from "../(customComponents)/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div>
          <Toaster position="top-center" reverseOrder={false} />

          <Header />
          <div className='pt-[17vh]'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
