// Placeholder images from Unsplash (open-source)
// These are used when Sanity CMS is not configured

export const placeholderImages = {
  // Hero images
  hero: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80',
  heroAlt: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&q=80',

  // Artisan/craftsperson images
  artisans: [
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80', // Woman portrait
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', // Man portrait
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80', // Woman portrait 2
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80', // Man portrait 2
  ],

  // Artisan at work
  artisanAtWork: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80',

  // Collection images
  collections: [
    'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80', // Lapis lazuli blue jewelry
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', // Silver jewelry
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', // Turquoise jewelry
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80', // Gold jewelry/bridal
  ],

  // Product images
  products: {
    rings: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba5b4e5c4c4?w=500&q=80',
    ],
    necklaces: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    ],
    earrings: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80',
    ],
    bracelets: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80',
    ],
  },

  // Generic product placeholder
  product: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80',

  // Instagram feed images
  instagram: [
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
  ],

  // Blog/journal images
  blog: [
    'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80', // Blue jewelry
    'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80', // Crafting
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', // Jewelry display
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80', // Earrings
  ],

  // Press logos placeholder
  press: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80',
}

// Helper function to get a product image based on category and index
export function getProductImage(category?: string, index: number = 0): string {
  if (category) {
    const cat = category.toLowerCase()
    if (cat.includes('ring')) {
      return placeholderImages.products.rings[index % placeholderImages.products.rings.length]
    }
    if (cat.includes('necklace') || cat.includes('pendant')) {
      return placeholderImages.products.necklaces[index % placeholderImages.products.necklaces.length]
    }
    if (cat.includes('earring')) {
      return placeholderImages.products.earrings[index % placeholderImages.products.earrings.length]
    }
    if (cat.includes('bracelet') || cat.includes('cuff')) {
      return placeholderImages.products.bracelets[index % placeholderImages.products.bracelets.length]
    }
  }

  // Return a generic product image based on index
  const allProducts = [
    ...placeholderImages.products.rings,
    ...placeholderImages.products.necklaces,
    ...placeholderImages.products.earrings,
    ...placeholderImages.products.bracelets,
  ]
  return allProducts[index % allProducts.length]
}

// Helper function to get artisan image by index
export function getArtisanImage(index: number = 0): string {
  return placeholderImages.artisans[index % placeholderImages.artisans.length]
}

// Helper function to get collection image by index
export function getCollectionImage(index: number = 0): string {
  return placeholderImages.collections[index % placeholderImages.collections.length]
}

// Helper function to get blog image by index
export function getBlogImage(index: number = 0): string {
  return placeholderImages.blog[index % placeholderImages.blog.length]
}

// Helper function to get Instagram image by index
export function getInstagramImage(index: number = 0): string {
  return placeholderImages.instagram[index % placeholderImages.instagram.length]
}
