import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ProductGrid from '@/components/shop/ProductGrid'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { collectionBySlugQuery } from '@/lib/queries'

interface CollectionPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const collection = await sanityFetch({
    query: collectionBySlugQuery,
    params: { slug: params.slug },
    tags: ['collection'],
  }).catch(() => null)

  if (!collection) {
    return { title: 'Collection Not Found' }
  }

  const c = collection as any

  return {
    title: `${c.title} Collection`,
    description: c.description || `Explore our ${c.title} collection of handcrafted Afghan jewellery.`,
    openGraph: {
      images: c.image
        ? [{ url: urlFor(c.image).width(1200).height(630).url() }]
        : [],
    },
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const collection = await sanityFetch({
    query: collectionBySlugQuery,
    params: { slug: params.slug },
    tags: ['collection'],
  }).catch(() => null)

  if (!collection) {
    notFound()
  }

  const c = collection as any

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[400px] md:h-[500px]">
          {c.image ? (
            <Image
              src={urlFor(c.image).width(1920).height(500).url()}
              alt={c.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-royal-blue to-lapis-blue" />
          )}
          <div className="absolute inset-0 bg-royal-blue/70" />
        </div>

        {/* Content */}
        <div className="relative container-custom py-24 md:py-32 text-center">
          <nav className="text-sm text-white/60 mb-4">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/collections" className="hover:text-white">
              Collections
            </a>
            <span className="mx-2">/</span>
            <span className="text-white">{c.title}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">
            {c.title} Collection
          </h1>
          {c.description && (
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              {c.description}
            </p>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-custom">
          {c.products && c.products.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-sm text-charcoal/60">
                  {c.products.length} piece{c.products.length !== 1 ? 's' : ''} in this collection
                </p>
              </div>
              <ProductGrid products={c.products} />
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Products Coming Soon
              </h2>
              <p className="text-charcoal/60">
                We're adding beautiful pieces to this collection. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
