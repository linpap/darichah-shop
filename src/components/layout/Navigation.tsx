'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  href: string
  children?: {
    label: string
    href: string
    description?: string
  }[]
}

const navItems: NavItem[] = [
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'All Products', href: '/shop', description: 'Browse our full collection' },
      { label: 'Rings', href: '/shop/rings', description: 'Handcrafted statement rings' },
      { label: 'Necklaces', href: '/shop/necklaces', description: 'Elegant pendants & chains' },
      { label: 'Earrings', href: '/shop/earrings', description: 'From studs to drops' },
      { label: 'Bracelets', href: '/shop/bracelets', description: 'Cuffs & delicate chains' },
      { label: 'Collections', href: '/collections', description: 'Curated collections' },
    ],
  },
  {
    label: 'Our Story',
    href: '/our-story',
  },
  {
    label: 'Artisans',
    href: '/artisans',
  },
  {
    label: 'Impact',
    href: '/impact',
  },
  {
    label: 'Journal',
    href: '/journal',
  },
  {
    label: 'Press',
    href: '/press',
  },
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="flex items-center justify-center gap-8">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            href={item.href}
            className="text-sm font-medium text-royal-blue hover:text-antique-gold transition-colors uppercase tracking-wider py-2"
          >
            {item.label}
          </Link>

          {/* Dropdown */}
          <AnimatePresence>
            {item.children && activeDropdown === item.label && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
              >
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-4 min-w-[280px]">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-3 hover:bg-warm-cream transition-colors"
                    >
                      <span className="text-sm font-medium text-royal-blue">
                        {child.label}
                      </span>
                      {child.description && (
                        <span className="block text-xs text-gray-500 mt-0.5">
                          {child.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}
