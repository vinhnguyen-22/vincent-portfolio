import Outfit from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const outfit = Outfit({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = Outfit({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Vincent Azure ',
  description: 'Reach out to Tamim through this contact form.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${outfit.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
