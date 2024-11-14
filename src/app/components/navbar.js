'use client';

import Image from "next/image";
import AnasLogo from "../../../public/anas_web_logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion'

const tabs = [
  {
    title: 'Projects', 
    url: '/projects'
  },
  {
    title: 'Blogs', 
    url: '/blogs'
  },
  {
    title: 'Uses', 
    url: '/uses'
  },
  {
    title: 'Contact', 
    url: '/contact'
  }
]

const pagesWithTab = ['/', '/projects', '/blogs', '/uses', '/contact']

const Tab = ({ text, url, selected, setSelected }) => {
  return (
    <Link
      href={url}
      onClick={() => setSelected(text)}
      className={`${
        selected ? 'text-white' : 'text-gray-500 hover:text-gray-900'
      } relative rounded-md px-2 py-1 text-sm transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-slate-900"
        ></motion.span>
      )}
    </Link>
  )
}

const Navbar = () => {
  const pathname = usePathname()

  const [selected, setSelected] = useState()

  useEffect(() => {
    if (pathname === '/projects') {
      setSelected(tabs[0].title)
    }
    else if (pathname === '/blogs') {
      setSelected(tabs[1].title)
    }
    else if (pathname === '/uses') {
      setSelected(tabs[2].title)
    }
    else if (pathname === '/contact') {
      setSelected(tabs[3].title)
    }
    else {
      setSelected();
    }
  },[pathname])

  return (
    <div className="border-b">
      <div className="flex max-w-screen-lg mx-auto px-6 py-4 lg:px-0">
        <div className="w-full flex justify-between">
          <Link href="/">
            <Image src={AnasLogo} alt="anas" width={30} height={30} />
          </Link>

          {pagesWithTab.includes(pathname) &&
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((tab, index) => (
                <Tab
                  text={tab.title}
                  url={tab.url}
                  selected={selected === tab.title}
                  setSelected={setSelected}
                  key={tab.title}
                />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar