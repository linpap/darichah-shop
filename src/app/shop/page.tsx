import { Suspense } from 'react'
import { Metadata } from 'next'
import ProductGrid from '@/components/shop/ProductGrid'
import Filters from '@/components/shop/Filters'
import CategoryNav from '@/components/shop/CategoryNav'
import { sanityFetch } from '@/lib/sanity'
import { allProductsQuery, topLevelCategoriesQuery } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Discover our collection of handcrafted Afghan jewellery. Each piece is made by skilled artisans using traditional techniques.',
}

interface ShopPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const [products, categories] = await Promise.all([
    sanityFetch({ query: allProductsQuery, tags: ['product'] }).catch(() => []),
    sanityFetch({ query: topLevelCategoriesQuery, tags: ['category'] }).catch(() => []),
  ])

  // Filter products based on search params
  let filteredProducts = products as any[]

  const search = searchParams.search as string
  const sort = searchParams.sort as string
  const priceRange = searchParams.price as string
  const material = searchParams.material as string

  if (search) {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number)
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= min && p.price <= max
    )
  }

  if (material) {
    filteredProducts = filteredProducts.filter((p) =>
      p.materials?.some((m: string) =>
        m.toLowerCase().includes(material.toLowerCase())
      )
    )
  }

  // Sort products
  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sort === 'best-sellers') {
    filteredProducts.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
  }

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero Banner */}
      <section className="bg-royal-blue py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Shop All Jewellery
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Each piece is handcrafted by skilled Afghan artisans, carrying centuries
            of tradition and supporting families across Afghanistan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Navigation */}
          <div className="mb-8">
            <CategoryNav categories={categories as any} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <Suspense fallback={<div>Loading filters...</div>}>
                <Filters />
              </Suspense>
            </aside>

            {/* Products */}
            <main className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-charcoal/60">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <ProductGrid products={filteredProducts} />
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
