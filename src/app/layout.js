import './globals.css'
import { Instrument_Sans } from 'next/font/google'
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Anas | Frontend Developer',
  description: 'Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
