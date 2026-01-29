import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function calculateDiscount(price: number, compareAtPrice: number): number {
  if (!compareAtPrice || compareAtPrice <= price) return 0
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function getProductUrl(slug: { current: string } | string): string {
  const slugValue = typeof slug === 'string' ? slug : slug.current
  return `/product/${slugValue}`
}

export function getCategoryUrl(slug: { current: string } | string): string {
  const slugValue = typeof slug === 'string' ? slug : slug.current
  return `/shop/${slugValue}`
}

export function getCollectionUrl(slug: { current: string } | string): string {
  const slugValue = typeof slug === 'string' ? slug : slug.current
  return `/collections/${slugValue}`
}

export function getArtisanUrl(slug: { current: string } | string): string {
  const slugValue = typeof slug === 'string' ? slug : slug.current
  return `/artisans/${slugValue}`
}

export function getBlogPostUrl(slug: { current: string } | string): string {
  const slugValue = typeof slug === 'string' ? slug : slug.current
  return `/journal/${slugValue}`
}
