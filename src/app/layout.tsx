import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'

import { Providers } from './providers'
import { ThemeProvider } from '@/contexts/themeContext'

const publicSans = Public_Sans({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-public-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rotate Dashboard',
  description: 'This is a dashboard for Rotate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${publicSans.className}`}>
        <Providers>
      
          {children}
     
          </Providers>
      </body>
    </html>
  )
}