import './globals.css'
import { Instrument_Sans, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Anas | Software Engineer',
  description: 'Software Engineer building thoughtful, high-quality web experiences with React, Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrumentSans.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
