import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { allCollectionsQuery } from '@/lib/queries'
import { getCollectionUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Explore our curated collections of handcrafted Afghan jewellery. Each collection celebrates a unique aspect of Afghan heritage.',
}

export default async function CollectionsPage() {
  const collections = await sanityFetch({
    query: allCollectionsQuery,
    tags: ['collection'],
  }).catch(() => [])

  const cols = collections as any[]

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Our Collections
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Each collection celebrates a different aspect of Afghan heritage,
            from legendary gemstones to ancient crafting techniques.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {cols.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cols.map((collection) => (
                <Link
                  key={collection._id}
                  href={getCollectionUrl(collection.slug)}
                  className="group"
                >
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {collection.image ? (
                        <Image
                          src={urlFor(collection.image).width(600).height(450).url()}
                          alt={collection.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-royal-blue to-lapis-blue" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-serif text-royal-blue group-hover:text-antique-gold transition-colors">
                        {collection.title}
                      </h2>
                      {collection.description && (
                        <p className="text-sm text-charcoal/70 mt-2 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                      {collection.productCount > 0 && (
                        <p className="text-xs text-charcoal/50 mt-3">
                          {collection.productCount} piece{collection.productCount !== 1 ? 's' : ''}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 text-antique-gold text-sm font-medium">
                        <span>Explore Collection</span>
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
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Collections Coming Soon
              </h2>
              <p className="text-charcoal/60">
                We're curating beautiful collections for you. Check back soon!
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 mt-6 text-antique-gold font-medium hover:text-royal-blue transition-colors"
              >
                Browse All Products
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
          )}
        </div>
      </section>
    </div>
  )
}
