'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface PressItem {
  _id: string
  publication: string
  logo?: any
  quote?: string
}

interface PressLogosProps {
  pressItems?: PressItem[]
}

// Placeholder press logos
const placeholderPress: PressItem[] = [
  { _id: '1', publication: 'Vogue', quote: '"Stunning craftsmanship with a purpose"' },
  { _id: '2', publication: 'Elle', quote: '"Where heritage meets modern elegance"' },
  { _id: '3', publication: 'Forbes', quote: '"Redefining ethical luxury"' },
  { _id: '4', publication: 'Bazaar', quote: '"Jewellery that tells a story"' },
  { _id: '5', publication: 'Times', quote: '"Empowering artisans worldwide"' },
]

export default function PressLogos({ pressItems }: PressLogosProps) {
  const displayPress = pressItems?.length ? pressItems : placeholderPress

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm text-charcoal/50 uppercase tracking-widest">
            As Featured In
          </span>
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {displayPress.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {item.logo ? (
                <Image
                  src={urlFor(item.logo).width(150).height(50).url()}
                  alt={item.publication}
                  width={150}
                  height={50}
                  className="object-contain grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
                />
              ) : (
                <span className="text-2xl font-serif text-charcoal/30 hover:text-charcoal/60 transition-colors">
                  {item.publication}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Featured Quote */}
        {displayPress[0]?.quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-xl md:text-2xl font-serif text-charcoal/70 italic max-w-2xl mx-auto">
              {displayPress[0].quote}
            </p>
            <p className="text-sm text-antique-gold mt-3">
              — {displayPress[0].publication}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
