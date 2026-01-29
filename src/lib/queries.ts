// Product queries
export const allProductsQuery = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    "mainImage": images[0],
    category->{title, slug},
    collection->{title, slug},
    artisan->{name, slug},
    isFeatured,
    isNewArrival,
    isBestSeller,
    isPreOrder,
    sku,
    stock
  }
`

export const featuredProductsQuery = `
  *[_type == "product" && isFeatured == true] | order(_createdAt desc)[0...8] {
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    "mainImage": images[0],
    category->{title, slug},
    artisan->{name},
    isPreOrder
  }
`

export const newArrivalsQuery = `
  *[_type == "product" && isNewArrival == true] | order(_createdAt desc)[0...8] {
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    "mainImage": images[0],
    category->{title, slug},
    artisan->{name},
    isPreOrder
  }
`

export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    images,
    description,
    materials,
    sizes,
    category->{title, slug},
    collection->{title, slug},
    artisan->{
      _id,
      name,
      slug,
      region,
      photo,
      craft,
      quote
    },
    impactStatement,
    careInstructions,
    isPreOrder,
    preOrderMessage,
    sku,
    stock
  }
`

export const productsByCategoryQuery = `
  *[_type == "product" && category->slug.current == $category] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    "mainImage": images[0],
    category->{title, slug},
    artisan->{name},
    isPreOrder,
    isBestSeller
  }
`

export const productsByCollectionQuery = `
  *[_type == "product" && collection->slug.current == $collection] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    "mainImage": images[0],
    category->{title, slug},
    artisan->{name},
    isPreOrder
  }
`

// Category queries
export const allCategoriesQuery = `
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    parentCategory->{title, slug},
    order
  }
`

export const topLevelCategoriesQuery = `
  *[_type == "category" && !defined(parentCategory)] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    "subcategories": *[_type == "category" && parentCategory._ref == ^._id] | order(order asc) {
      _id,
      title,
      slug
    }
  }
`

export const categoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    parentCategory->{title, slug},
    "subcategories": *[_type == "category" && parentCategory._ref == ^._id] | order(order asc) {
      _id,
      title,
      slug
    }
  }
`

// Collection queries
export const allCollectionsQuery = `
  *[_type == "collection"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`

export const featuredCollectionsQuery = `
  *[_type == "collection" && isFeatured == true] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    description,
    image
  }
`

export const collectionBySlugQuery = `
  *[_type == "collection" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    "products": *[_type == "product" && references(^._id)] | order(_createdAt desc) {
      _id,
      title,
      slug,
      price,
      compareAtPrice,
      "mainImage": images[0],
      artisan->{name},
      isPreOrder
    }
  }
`

// Artisan queries
export const allArtisansQuery = `
  *[_type == "artisan"] | order(name asc) {
    _id,
    name,
    slug,
    region,
    photo,
    craft,
    quote
  }
`

export const artisanBySlugQuery = `
  *[_type == "artisan" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    region,
    photo,
    bio,
    quote,
    craft,
    gallery,
    "products": *[_type == "product" && references(^._id)] | order(_createdAt desc) {
      _id,
      title,
      slug,
      price,
      "mainImage": images[0]
    }
  }
`

// Blog queries
export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author,
    categories
  }
`

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    author,
    categories
  }
`

// Press queries
export const allPressItemsQuery = `
  *[_type == "pressItem"] | order(date desc) {
    _id,
    publication,
    title,
    date,
    link,
    logo,
    quote
  }
`

// Impact metrics
export const impactMetricsQuery = `
  *[_type == "impactMetric"] | order(order asc) {
    _id,
    title,
    value,
    description,
    icon
  }
`

// Site settings / Pages
export const homePageQuery = `
  *[_type == "page" && slug.current == "home"][0] {
    _id,
    title,
    heroHeading,
    heroSubheading,
    heroImage,
    heroCtaText,
    heroCtaLink,
    sections
  }
`

export const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content
  }
`
