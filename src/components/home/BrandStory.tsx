'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { placeholderImages } from '@/lib/placeholders'

export default function BrandStory() {
  return (
    <section className="section-padding bg-royal-blue overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src={placeholderImages.artisanAtWork}
                alt="Afghan artisan at work"
                fill
                className="object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-antique-gold/30 rounded pointer-events-none" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-warm-cream p-6 rounded-lg shadow-xl max-w-[280px]"
            >
              <svg
                className="w-8 h-8 text-antique-gold mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-charcoal text-sm italic">
                "Every piece I create carries a piece of my heart and the spirit of my homeland."
              </p>
              <p className="text-antique-gold text-sm font-medium mt-3">
                — Fatima, Master Artisan
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-antique-gold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-3 mb-6">
              A Window to Afghanistan's Soul
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                "Darichah" means "window" in Dari — and that's exactly what we aim to be.
                A window connecting you to the rich artistry and resilient spirit of
                Afghan craftspeople.
              </p>
              <p>
                For generations, Afghan artisans have perfected techniques passed down
                through families — from the intricate silver filigree of Herat to the
                legendary lapis lazuli settings of Badakhshan.
              </p>
              <p>
                Each purchase directly supports artisan families, preserves ancient
                crafts, and helps rebuild communities. When you wear Darichah, you
                carry a piece of living heritage.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/our-story" variant="primary">
                Read Our Story
              </Button>
              <Button href="/artisans" variant="outline-gold">
                Meet the Artisans
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
