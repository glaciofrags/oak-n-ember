"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label:"Blogs", href: "/blogs" },
  { label: "Milestones", href: "/milestones" },
  { label: "Contact Us", href: "/contact-us" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-[#FAF7F2]/80 backdrop-blur border-b border-stone-200"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/oak-n-ember-logo-without-bg.png"
            alt="Oak & Ember"
            width={56}
            height={56}
            priority
          />
          <span className="text-xl font-semibold text-[#6B3F1D]">
            Oak & Ember
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(link.href + "/")

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-1 py-2 text-sm text-[#4B3A2A] hover:text-[#6B3F1D] transition-colors"
              >
                {link.label}

                {(isActive || hovered === link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-[#6B3F1D]"
                  />
                )}
              </Link>
            )
          })}

          <Link href="/menu">
            <Button className="ml-4 bg-[#6B3F1D] hover:bg-[#5A3317] text-white">
              View Menu
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#6B3F1D]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAF7F2] border-t border-stone-200"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-sm ${
                      isActive
                        ? "text-[#6B3F1D] font-medium"
                        : "text-[#4B3A2A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link href="/menu" onClick={() => setOpen(false)}>
                <Button className="mt-3 w-full bg-[#6B3F1D] hover:bg-[#5A3317] text-white">
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
