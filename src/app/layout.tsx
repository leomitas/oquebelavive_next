import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import clsx from 'clsx'

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
      <body
        className={clsx(
          inter.className,
          'bg-lavender-rose-0 max-w-full overflow-x-hidden'
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
