import './globals.scss';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const font = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cantinho da Moda',
  description: 'Sua loja de roupas e acessórios femininos',
}

export default function RootLayout( {children}: {children: React.ReactNode} ) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
