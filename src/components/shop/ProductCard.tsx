'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { formatPrice, calculateDiscount, getProductUrl } from '@/lib/utils'
import { getProductImage } from '@/lib/placeholders'

interface Product {
  _id: string
  title: string
  slug: { current: string }
  price: number
  compareAtPrice?: number
  mainImage?: any
  category?: { title: string; slug: { current: string } }
  artisan?: { name: string }
  isPreOrder?: boolean
  isBestSeller?: boolean
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : 0

  const imageUrl = product.mainImage
    ? urlFor(product.mainImage).width(500).height(500).url()
    : getProductImage(product.category?.title, index)

  return (
    <article className="product-card group">
      <Link href={getProductUrl(product.slug)}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-warm-cream">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isPreOrder && (
              <span className="px-2 py-1 bg-lapis-blue text-white text-xs font-medium rounded">
                Pre-Order
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-2 py-1 bg-antique-gold text-royal-blue text-xs font-medium rounded">
                Best Seller
              </span>
            )}
            {discount > 0 && (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
            <button
              className="snipcart-add-item w-full py-2 bg-royal-blue text-white text-sm font-medium hover:bg-lapis-blue transition-colors rounded"
              data-item-id={product._id}
              data-item-name={product.title}
              data-item-price={product.price}
              data-item-url={getProductUrl(product.slug)}
              data-item-image={imageUrl}
              onClick={(e) => e.preventDefault()}
            >
              {product.isPreOrder ? 'Pre-Order' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          {product.category && (
            <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-1">
              {product.category.title}
            </p>
          )}

          {/* Title */}
          <h3 className="text-sm font-medium text-charcoal group-hover:text-royal-blue transition-colors line-clamp-2">
            {product.title}
          </h3>

          {/* Artisan Badge */}
          {product.artisan && (
            <p className="artisan-badge mt-2">
              <svg
                className="w-3 h-3"
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
              By {product.artisan.name}
            </p>
          )}

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-serif text-royal-blue">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-sm text-charcoal/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
