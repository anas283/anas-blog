import './globals.css'
import { Instrument_Sans } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Analytics } from '@vercel/analytics/react';

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Anas - Frontend Developer',
  description: 'Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        {/* <Navbar /> */}
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
