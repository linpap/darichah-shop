import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductGrid from '@/components/shop/ProductGrid'
import Filters from '@/components/shop/Filters'
import CategoryNav from '@/components/shop/CategoryNav'
import { sanityFetch } from '@/lib/sanity'
import {
  productsByCategoryQuery,
  categoryBySlugQuery,
  topLevelCategoriesQuery,
} from '@/lib/queries'

interface CategoryPageProps {
  params: { category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = await sanityFetch({
    query: categoryBySlugQuery,
    params: { slug: params.category },
    tags: ['category'],
  }).catch(() => null)

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  const cat = category as any

  return {
    title: `${cat.title} | Shop`,
    description:
      cat.description ||
      `Shop our collection of handcrafted Afghan ${cat.title.toLowerCase()}. Each piece is made by skilled artisans.`,
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const [category, products, categories] = await Promise.all([
    sanityFetch({
      query: categoryBySlugQuery,
      params: { slug: params.category },
      tags: ['category'],
    }).catch(() => null),
    sanityFetch({
      query: productsByCategoryQuery,
      params: { category: params.category },
      tags: ['product'],
    }).catch(() => []),
    sanityFetch({ query: topLevelCategoriesQuery, tags: ['category'] }).catch(() => []),
  ])

  if (!category) {
    notFound()
  }

  const cat = category as any
  let filteredProducts = products as any[]

  // Apply filters from search params
  const sort = searchParams.sort as string
  const priceRange = searchParams.price as string
  const material = searchParams.material as string

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
            {cat.title}
          </h1>
          {cat.description && (
            <p className="text-white/70 max-w-2xl mx-auto">{cat.description}</p>
          )}
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <nav className="text-sm text-charcoal/60">
          <a href="/" className="hover:text-royal-blue">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-royal-blue">
            Shop
          </a>
          <span className="mx-2">/</span>
          <span className="text-royal-blue">{cat.title}</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="pb-16 md:pb-24">
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
