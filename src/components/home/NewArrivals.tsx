'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/shop/ProductCard'

interface Product {
  _id: string
  title: string
  slug: { current: string }
  price: number
  compareAtPrice?: number
  mainImage?: any
  category?: { title: string; slug: { current: string } }
  artisan?: { name: string }
  isPreOrder?: boolean
}

interface NewArrivalsProps {
  products?: Product[]
}

// Placeholder products for when no data from CMS
const placeholderProducts: Product[] = [
  {
    _id: '1',
    title: 'Lapis Lazuli Statement Ring',
    slug: { current: 'lapis-lazuli-statement-ring' },
    price: 245,
    category: { title: 'Rings', slug: { current: 'rings' } },
    artisan: { name: 'Fatima' },
  },
  {
    _id: '2',
    title: 'Silver Filigree Pendant',
    slug: { current: 'silver-filigree-pendant' },
    price: 185,
    compareAtPrice: 220,
    category: { title: 'Necklaces', slug: { current: 'necklaces' } },
    artisan: { name: 'Ahmad' },
  },
  {
    _id: '3',
    title: 'Turquoise Drop Earrings',
    slug: { current: 'turquoise-drop-earrings' },
    price: 165,
    category: { title: 'Earrings', slug: { current: 'earrings' } },
    artisan: { name: 'Maryam' },
  },
  {
    _id: '4',
    title: 'Hammered Gold Cuff',
    slug: { current: 'hammered-gold-cuff' },
    price: 295,
    category: { title: 'Bracelets', slug: { current: 'bracelets' } },
    artisan: { name: 'Karim' },
  },
]

export default function NewArrivals({ products }: NewArrivalsProps) {
  const displayProducts = products?.length ? products : placeholderProducts

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-antique-gold text-sm uppercase tracking-widest">
              Just Arrived
            </span>
            <h2 className="heading-lg mt-2">New Arrivals</h2>
            <p className="text-charcoal/70 mt-4 max-w-xl">
              Discover our latest creations, fresh from the workshops of our skilled artisans.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="/shop?filter=new"
            className="hidden md:inline-flex items-center gap-2 text-royal-blue font-medium hover:text-antique-gold transition-colors mt-4 md:mt-0"
          >
            View All New Arrivals
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="text-center mt-8 md:hidden">
          <a
            href="/shop?filter=new"
            className="inline-flex items-center gap-2 text-royal-blue font-medium hover:text-antique-gold transition-colors"
          >
            View All New Arrivals
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
