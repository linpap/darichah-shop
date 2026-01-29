// Sanity document types
export interface SanitySlug {
  current: string
  _type: 'slug'
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
}

export interface Product {
  _id: string
  _type: 'product'
  title: string
  slug: SanitySlug
  price: number
  compareAtPrice?: number
  images?: SanityImage[]
  mainImage?: SanityImage
  description?: any // Portable Text
  materials?: string[]
  sizes?: string[]
  category?: Category
  collection?: Collection
  artisan?: Artisan
  impactStatement?: string
  careInstructions?: any // Portable Text
  isPreOrder?: boolean
  preOrderMessage?: string
  isFeatured?: boolean
  isNewArrival?: boolean
  isBestSeller?: boolean
  sku?: string
  stock?: number
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: SanitySlug
  parentCategory?: Category
  description?: string
  image?: SanityImage
  order?: number
  subcategories?: Category[]
}

export interface Collection {
  _id: string
  _type: 'collection'
  title: string
  slug: SanitySlug
  description?: string
  image?: SanityImage
  isFeatured?: boolean
  products?: Product[]
  productCount?: number
}

export interface Artisan {
  _id: string
  _type: 'artisan'
  name: string
  slug: SanitySlug
  region?: string
  photo?: SanityImage
  bio?: any // Portable Text
  quote?: string
  craft?: string
  gallery?: SanityImage[]
  products?: Product[]
}

export interface ImpactMetric {
  _id: string
  _type: 'impactMetric'
  title: string
  value: string
  description?: string
  icon?: string
  order?: number
}

export interface PressItem {
  _id: string
  _type: 'pressItem'
  publication: string
  title?: string
  date?: string
  link?: string
  logo?: SanityImage
  quote?: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: SanitySlug
  excerpt?: string
  mainImage?: SanityImage
  body?: any // Portable Text
  publishedAt?: string
  author?: string
  categories?: string[]
}

export interface Page {
  _id: string
  _type: 'page'
  title: string
  slug: SanitySlug
  heroHeading?: string
  heroSubheading?: string
  heroImage?: SanityImage
  heroCtaText?: string
  heroCtaLink?: string
  content?: any // Portable Text
  seoTitle?: string
  seoDescription?: string
}
