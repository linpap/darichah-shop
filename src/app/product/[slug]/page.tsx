import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ImageGallery from '@/components/product/ImageGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ArtisanBlock from '@/components/product/ArtisanBlock'
import ImpactStatement from '@/components/product/ImpactStatement'
import ProductCare from '@/components/product/ProductCare'
import ShippingInfo from '@/components/product/ShippingInfo'
import RelatedProducts from '@/components/product/RelatedProducts'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { productBySlugQuery, productsByCategoryQuery } from '@/lib/queries'

interface ProductPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await sanityFetch({
    query: productBySlugQuery,
    params: { slug: params.slug },
    tags: ['product'],
  }).catch(() => null)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  const p = product as any

  return {
    title: p.title,
    description: `${p.title} - Handcrafted Afghan jewellery. ${p.impactStatement || 'Each piece supports artisan families.'}`,
    openGraph: {
      images: p.images?.[0]
        ? [{ url: urlFor(p.images[0]).width(1200).height(630).url() }]
        : [],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await sanityFetch({
    query: productBySlugQuery,
    params: { slug: params.slug },
    tags: ['product'],
  }).catch(() => null)

  if (!product) {
    notFound()
  }

  const p = product as any

  // Fetch related products from same category
  let relatedProducts: any[] = []
  if (p.category?.slug?.current) {
    relatedProducts = await sanityFetch({
      query: productsByCategoryQuery,
      params: { category: p.category.slug.current },
      tags: ['product'],
    }).catch(() => [])
    // Filter out current product and limit to 4
    relatedProducts = (relatedProducts as any[])
      .filter((rp) => rp._id !== p._id)
      .slice(0, 4)
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-warm-cream border-b border-gray-100">
        <div className="container-custom py-4">
          <nav className="text-sm text-charcoal/60">
            <a href="/" className="hover:text-royal-blue">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/shop" className="hover:text-royal-blue">
              Shop
            </a>
            {p.category && (
              <>
                <span className="mx-2">/</span>
                <a
                  href={`/shop/${p.category.slug.current}`}
                  className="hover:text-royal-blue"
                >
                  {p.category.title}
                </a>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-royal-blue">{p.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div>
              <ImageGallery images={p.images || []} productTitle={p.title} category={p.category?.title} />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo product={p} />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Artisan Block */}
            {p.artisan && (
              <ArtisanBlock artisan={p.artisan} />
            )}

            {/* Impact Statement */}
            {p.impactStatement && (
              <ImpactStatement statement={p.impactStatement} />
            )}

            {/* Product Care */}
            <ProductCare careInstructions={p.careInstructions} />

            {/* Shipping Info */}
            <ShippingInfo />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </div>
  )
}
