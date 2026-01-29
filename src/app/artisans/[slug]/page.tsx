import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import ProductGrid from '@/components/shop/ProductGrid'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { artisanBySlugQuery } from '@/lib/queries'
import { getArtisanImage } from '@/lib/placeholders'

interface ArtisanPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: ArtisanPageProps): Promise<Metadata> {
  const artisan = await sanityFetch({
    query: artisanBySlugQuery,
    params: { slug: params.slug },
    tags: ['artisan'],
  }).catch(() => null)

  if (!artisan) {
    return { title: 'Artisan Not Found' }
  }

  const a = artisan as any

  return {
    title: `${a.name} | Artisan`,
    description: `Meet ${a.name}, a skilled ${a.craft || 'artisan'} from ${a.region || 'Afghanistan'}. Discover their story and handcrafted creations.`,
    openGraph: {
      images: a.photo
        ? [{ url: urlFor(a.photo).width(1200).height(630).url() }]
        : [],
    },
  }
}

export default async function ArtisanPage({ params }: ArtisanPageProps) {
  const artisan = await sanityFetch({
    query: artisanBySlugQuery,
    params: { slug: params.slug },
    tags: ['artisan'],
  }).catch(() => null)

  if (!artisan) {
    notFound()
  }

  const a = artisan as any

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-4">
          <nav className="text-sm text-charcoal/60">
            <a href="/" className="hover:text-royal-blue">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/artisans" className="hover:text-royal-blue">
              Artisans
            </a>
            <span className="mx-2">/</span>
            <span className="text-royal-blue">{a.name}</span>
          </nav>
        </div>
      </div>

      {/* Profile Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src={a.photo ? urlFor(a.photo).width(800).height(1000).url() : getArtisanImage(0)}
                alt={a.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <span className="text-antique-gold text-sm uppercase tracking-widest">
                Master Artisan
              </span>
              <h1 className="text-3xl md:text-4xl font-serif text-royal-blue mt-2 mb-4">
                {a.name}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                {a.craft && (
                  <div className="flex items-center gap-2 text-charcoal/70">
                    <svg
                      className="w-4 h-4 text-antique-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    {a.craft}
                  </div>
                )}
                {a.region && (
                  <div className="flex items-center gap-2 text-charcoal/70">
                    <svg
                      className="w-4 h-4 text-antique-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {a.region}, Afghanistan
                  </div>
                )}
              </div>

              {/* Quote */}
              {a.quote && (
                <blockquote className="border-l-4 border-antique-gold pl-6 mb-8">
                  <p className="text-xl font-serif text-charcoal/80 italic">
                    &ldquo;{a.quote}&rdquo;
                  </p>
                </blockquote>
              )}

              {/* Bio */}
              {a.bio && (
                <div className="prose prose-charcoal max-w-none">
                  <PortableText value={a.bio} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {a.gallery && a.gallery.length > 0 && (
        <section className="section-padding bg-warm-cream">
          <div className="container-custom">
            <h2 className="heading-md text-center mb-10">Behind the Scenes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {a.gallery.map((image: any, index: number) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(image).width(400).height(400).url()}
                    alt={image.caption || `${a.name}'s work ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products by this Artisan */}
      {a.products && a.products.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-md text-center mb-10">
              Creations by {a.name}
            </h2>
            <ProductGrid products={a.products} />
          </div>
        </section>
      )}
    </div>
  )
}
