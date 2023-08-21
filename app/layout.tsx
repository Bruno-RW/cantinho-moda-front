import './globals.scss';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const font = Montserrat({ subsets: ['latin'] })

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
