'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface NavSection {
  title: string
  links: { label: string; href: string }[]
}

const navSections: NavSection[] = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '/shop' },
      { label: 'Rings', href: '/shop/rings' },
      { label: 'Necklaces', href: '/shop/necklaces' },
      { label: 'Earrings', href: '/shop/earrings' },
      { label: 'Bracelets', href: '/shop/bracelets' },
      { label: 'Collections', href: '/collections' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Artisans', href: '/artisans' },
      { label: 'Impact', href: '/impact' },
      { label: 'Press', href: '/press' },
      { label: 'Journal', href: '/journal' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'FAQ', href: '/customer-care' },
      { label: 'Shipping', href: '/customer-care/shipping' },
      { label: 'Returns', href: '/customer-care/returns' },
      { label: 'Product Care', href: '/customer-care/product-care' },
      { label: 'Contact Us', href: '/customer-care/contact' },
    ],
  },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('Shop')

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" onClick={onClose}>
                <span className="text-xl font-serif text-royal-blue tracking-wider">
                  DARICHAH
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-royal-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              {navSections.map((section) => (
                <div key={section.title} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === section.title ? null : section.title
                      )
                    }
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="text-sm font-medium text-royal-blue uppercase tracking-wider">
                      {section.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-royal-blue transition-transform ${
                        expandedSection === section.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {expandedSection === section.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-4 space-y-3">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={onClose}
                              className="block text-sm text-charcoal hover:text-antique-gold transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 mt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Link
                  href="/account"
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm text-royal-blue"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Account
                </Link>
              </div>

              <div className="text-xs text-gray-500">
                <p>Free shipping on orders over $150</p>
                <p className="mt-1">Handcrafted with love in Afghanistan</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
