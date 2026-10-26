'use client';

import Image from "next/image";
import AnasLogo from "../../../public/anas_web_logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

const EMAIL = "muhammadanasbinadam@gmail.com"

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (url) => pathname === url || pathname.startsWith(`${url}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5">
          <Image
            src={AnasLogo}
            alt="Anas"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full ring-1 ring-border transition-transform duration-300 group-hover:-rotate-6"
          />
          <span className="font-display text-base font-semibold tracking-tight">
            Anas
          </span>
          <span className="hidden text-xs text-muted-foreground lg:inline">
            / Software Engineer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              href={tab.url}
              aria-current={isActive(tab.url) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(tab.url)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="relative z-10">{tab.title}</span>
              {isActive(tab.url) && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-muted"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${EMAIL}`}
            className="hidden h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
              {tabs.map((tab) => (
                <Link
                  key={tab.title}
                  href={tab.url}
                  aria-current={isActive(tab.url) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                    isActive(tab.url)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {tab.title}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 flex h-11 items-center justify-center gap-1.5 rounded-xl bg-foreground px-4 text-sm font-medium text-background"
              >
                Say hello
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
