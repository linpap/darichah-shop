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

interface RelatedProductsProps {
  products: Product[]
  title?: string
}

export default function RelatedProducts({
  products,
  title = 'You May Also Like',
}: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="section-padding bg-warm-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="heading-md">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
