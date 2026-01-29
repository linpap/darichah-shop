'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { getCollectionImage } from '@/lib/placeholders'

interface Collection {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  image?: any
}

interface FeaturedCollectionsProps {
  collections?: Collection[]
}

// Placeholder collections for when no data from CMS
const placeholderCollections: Collection[] = [
  {
    _id: '1',
    title: 'Lapis Lazuli',
    slug: { current: 'lapis-lazuli' },
    description: 'Deep blue stones from the mountains of Badakhshan',
  },
  {
    _id: '2',
    title: 'Silver Filigree',
    slug: { current: 'silver-filigree' },
    description: 'Intricate metalwork passed down through generations',
  },
  {
    _id: '3',
    title: 'Turquoise Dreams',
    slug: { current: 'turquoise' },
    description: 'Vibrant stones with ancient significance',
  },
  {
    _id: '4',
    title: 'Bridal Collection',
    slug: { current: 'bridal' },
    description: 'Elegant pieces for your special day',
  },
]

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  const displayCollections = collections?.length ? collections : placeholderCollections

  return (
    <section className="section-padding bg-warm-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-antique-gold text-sm uppercase tracking-widest">
              Explore
            </span>
            <h2 className="heading-lg mt-2">Our Collections</h2>
            <p className="text-charcoal/70 mt-4 max-w-2xl mx-auto">
              Each collection celebrates a different aspect of Afghan heritage,
              from the legendary lapis lazuli mines to ancient silversmithing traditions.
            </p>
          </motion.div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCollections.map((collection, index) => (
            <motion.div
              key={collection._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/collections/${collection.slug.current}`}
                className="group block relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                {/* Image */}
                <div className="absolute inset-0 bg-royal-blue">
                  <Image
                    src={collection.image ? urlFor(collection.image).width(600).height(800).url() : getCollectionImage(index)}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-serif text-white mb-2">
                    {collection.title}
                  </h3>
                  {collection.description && (
                    <p className="text-sm text-white/70 line-clamp-2">
                      {collection.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-2 text-antique-gold text-sm font-medium">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-royal-blue font-medium hover:text-antique-gold transition-colors"
          >
            View All Collections
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
          </Link>
        </div>
      </div>
    </section>
  )
}
