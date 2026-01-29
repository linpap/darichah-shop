'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { placeholderImages } from '@/lib/placeholders'

interface HeroProps {
  heading?: string
  subheading?: string
  ctaText?: string
  ctaLink?: string
  image?: string
}

export default function Hero({
  heading = 'Timeless Afghan Artistry',
  subheading = 'Each piece of jewellery tells a story of skilled artisans preserving centuries of tradition. Handcrafted with love, connecting you to the heart of Afghanistan.',
  ctaText = 'Discover Collection',
  ctaLink = '/shop',
  image,
}: HeroProps) {
  const heroImage = image || placeholderImages.hero

  return (
    <section className="relative min-h-[90vh] flex items-center bg-royal-blue overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/images/afghan-pattern.svg)',
              backgroundSize: '200px',
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative element */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-antique-gold" />
              <span className="text-antique-gold text-sm uppercase tracking-widest">
                Handcrafted in Afghanistan
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={ctaLink} variant="primary" size="lg">
                {ctaText}
              </Button>
              <Button href="/our-story" variant="outline-gold" size="lg">
                Our Story
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-serif text-antique-gold">50+</p>
              <p className="text-sm text-white/60 mt-1">Artisans Supported</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-antique-gold">100%</p>
              <p className="text-sm text-white/60 mt-1">Handcrafted</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-antique-gold">200+</p>
              <p className="text-sm text-white/60 mt-1">Families Impacted</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-white/50 uppercase tracking-wider mb-2">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
