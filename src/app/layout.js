import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Anas - Frontend Developer',
  description: 'Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
