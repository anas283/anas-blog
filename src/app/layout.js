import './globals.css'
import { Instrument_Sans } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
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
        <Navbar />
        <div className="min-h-[calc(100vh-470px)] flex max-w-screen-md mx-auto px-6 lg:px-0 mt-1 fade-up">
          {children}
        </div>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
