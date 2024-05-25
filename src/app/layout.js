import './globals.css'
import { Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Anas',
  description: 'Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
