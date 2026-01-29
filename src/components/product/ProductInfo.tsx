'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import { formatPrice, calculateDiscount, getProductUrl } from '@/lib/utils'
import { urlFor } from '@/lib/sanity'

interface ProductInfoProps {
  product: {
    _id: string
    title: string
    slug: { current: string }
    price: number
    compareAtPrice?: number
    description?: any
    materials?: string[]
    sizes?: string[]
    isPreOrder?: boolean
    preOrderMessage?: string
    sku?: string
    stock?: number
    images?: any[]
  }
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [quantity, setQuantity] = useState(1)

  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : 0

  const isOutOfStock = product.stock !== undefined && product.stock <= 0

  return (
    <div className="space-y-6">
      {/* Title & Price */}
      <div>
        <h1 className="text-2xl md:text-3xl font-serif text-royal-blue">
          {product.title}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-serif text-royal-blue">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <>
              <span className="text-lg text-charcoal/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                Save {discount}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Pre-order Notice */}
      {product.isPreOrder && (
        <div className="p-4 bg-soft-gold/20 border border-antique-gold/30 rounded-lg">
          <div className="flex items-center gap-2 text-lapis-blue">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Pre-Order</span>
          </div>
          {product.preOrderMessage && (
            <p className="text-sm text-charcoal/70 mt-1">{product.preOrderMessage}</p>
          )}
        </div>
      )}

      {/* Description */}
      {product.description && (
        <div className="prose prose-sm text-charcoal/80">
          <PortableText value={product.description} />
        </div>
      )}

      {/* Materials */}
      {product.materials && product.materials.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider mb-2">
            Materials
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.materials.map((material) => (
              <span
                key={material}
                className="px-3 py-1 bg-warm-cream text-sm text-charcoal rounded-full"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider">
              Size
            </h3>
            <button className="text-sm text-antique-gold hover:underline">
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded transition-colors ${
                  selectedSize === size
                    ? 'border-royal-blue bg-royal-blue text-white'
                    : 'border-gray-200 hover:border-royal-blue'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider mb-2">
          Quantity
        </h3>
        <div className="flex items-center border border-gray-200 rounded w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-charcoal hover:bg-warm-cream transition-colors"
            disabled={quantity <= 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="px-4 py-2 text-charcoal font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-2 text-charcoal hover:bg-warm-cream transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          className={`snipcart-add-item flex-1 py-4 text-sm font-medium uppercase tracking-wider rounded transition-colors ${
            isOutOfStock
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-antique-gold text-royal-blue hover:bg-soft-gold'
          }`}
          disabled={isOutOfStock}
          data-item-id={product._id}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-url={getProductUrl(product.slug)}
          data-item-quantity={quantity}
          data-item-image={
            product.images?.[0]
              ? urlFor(product.images[0]).width(500).url()
              : ''
          }
          data-item-custom1-name={product.sizes?.length ? 'Size' : undefined}
          data-item-custom1-options={product.sizes?.join('|')}
          data-item-custom1-value={selectedSize}
        >
          {isOutOfStock
            ? 'Out of Stock'
            : product.isPreOrder
            ? 'Pre-Order Now'
            : 'Add to Cart'}
        </button>

        {/* Wishlist Button */}
        <button className="px-4 py-4 border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white transition-colors rounded">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
        <div className="text-center">
          <svg className="w-6 h-6 mx-auto text-antique-gold mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <p className="text-xs text-charcoal/60">Free Shipping</p>
          <p className="text-xs text-charcoal/80">Over $150</p>
        </div>
        <div className="text-center">
          <svg className="w-6 h-6 mx-auto text-antique-gold mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-xs text-charcoal/60">Authenticity</p>
          <p className="text-xs text-charcoal/80">Guaranteed</p>
        </div>
        <div className="text-center">
          <svg className="w-6 h-6 mx-auto text-antique-gold mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <p className="text-xs text-charcoal/60">Easy Returns</p>
          <p className="text-xs text-charcoal/80">30 Days</p>
        </div>
      </div>

      {/* SKU */}
      {product.sku && (
        <p className="text-xs text-charcoal/40">SKU: {product.sku}</p>
      )}
    </div>
  )
}
