import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import clsx from 'clsx'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oquebelavive',
  description: 'Site da Isabela do perfil oquebelavive no instagram',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'bg-lavender-rose-100')}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
