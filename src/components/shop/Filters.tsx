'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterOption {
  label: string
  value: string
}

interface FiltersProps {
  categories?: FilterOption[]
  priceRanges?: FilterOption[]
  materials?: FilterOption[]
}

const defaultPriceRanges: FilterOption[] = [
  { label: 'Under $100', value: '0-100' },
  { label: '$100 - $200', value: '100-200' },
  { label: '$200 - $300', value: '200-300' },
  { label: 'Over $300', value: '300-999999' },
]

const defaultMaterials: FilterOption[] = [
  { label: 'Silver', value: 'silver' },
  { label: 'Gold', value: 'gold' },
  { label: 'Lapis Lazuli', value: 'lapis-lazuli' },
  { label: 'Turquoise', value: 'turquoise' },
]

const sortOptions: FilterOption[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Sellers', value: 'best-sellers' },
]

export default function Filters({
  categories = [],
  priceRanges = defaultPriceRanges,
  materials = defaultMaterials,
}: FiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>(['sort'])

  const currentSort = searchParams.get('sort') || 'newest'
  const currentPrice = searchParams.get('price') || ''
  const currentMaterial = searchParams.get('material') || ''

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push(window.location.pathname)
  }

  const hasActiveFilters = currentPrice || currentMaterial

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <button
          onClick={() => toggleSection('sort')}
          className="flex items-center justify-between w-full text-sm font-medium text-royal-blue uppercase tracking-wider pb-2 border-b border-gray-200"
        >
          Sort By
          <svg
            className={`w-4 h-4 transition-transform ${
              openSections.includes('sort') ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {openSections.includes('sort') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFilter('sort', option.value)}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      currentSort === option.value
                        ? 'text-antique-gold font-medium'
                        : 'text-charcoal hover:text-royal-blue'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-sm font-medium text-royal-blue uppercase tracking-wider pb-2 border-b border-gray-200"
        >
          Price
          <svg
            className={`w-4 h-4 transition-transform ${
              openSections.includes('price') ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {openSections.includes('price') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {priceRanges.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      updateFilter('price', currentPrice === option.value ? '' : option.value)
                    }
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      currentPrice === option.value
                        ? 'text-antique-gold font-medium'
                        : 'text-charcoal hover:text-royal-blue'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Materials */}
      <div>
        <button
          onClick={() => toggleSection('material')}
          className="flex items-center justify-between w-full text-sm font-medium text-royal-blue uppercase tracking-wider pb-2 border-b border-gray-200"
        >
          Material
          <svg
            className={`w-4 h-4 transition-transform ${
              openSections.includes('material') ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {openSections.includes('material') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {materials.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      updateFilter('material', currentMaterial === option.value ? '' : option.value)
                    }
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      currentMaterial === option.value
                        ? 'text-antique-gold font-medium'
                        : 'text-charcoal hover:text-royal-blue'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full py-2 text-sm text-charcoal/60 hover:text-royal-blue transition-colors border border-gray-200 rounded"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
        {hasActiveFilters && (
          <span className="w-2 h-2 bg-antique-gold rounded-full" />
        )}
      </button>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 p-6 overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-serif text-royal-blue">Filters</h2>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 -mr-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
