'use client';

import { usePathname } from "next/navigation";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion } from 'framer-motion'

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'spring', duration: 0.4 }}
      >
        <div className="min-h-[calc(100vh-470px)] flex max-w-screen-md mx-auto px-6 lg:px-0 mt-1">
          {children}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}