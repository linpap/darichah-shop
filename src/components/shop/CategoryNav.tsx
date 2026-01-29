'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Category {
  _id: string
  title: string
  slug: { current: string }
  subcategories?: Category[]
}

interface CategoryNavProps {
  categories?: Category[]
}

const defaultCategories: Category[] = [
  { _id: '1', title: 'All', slug: { current: '' } },
  { _id: '2', title: 'Rings', slug: { current: 'rings' } },
  { _id: '3', title: 'Necklaces', slug: { current: 'necklaces' } },
  { _id: '4', title: 'Earrings', slug: { current: 'earrings' } },
  { _id: '5', title: 'Bracelets', slug: { current: 'bracelets' } },
]

export default function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname()
  const displayCategories = categories?.length ? categories : defaultCategories

  const isActive = (slug: string) => {
    if (slug === '' && pathname === '/shop') return true
    return pathname === `/shop/${slug}`
  }

  return (
    <nav className="flex flex-wrap gap-2">
      {displayCategories.map((category) => (
        <Link
          key={category._id}
          href={category.slug.current ? `/shop/${category.slug.current}` : '/shop'}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            isActive(category.slug.current)
              ? 'bg-royal-blue text-white'
              : 'bg-white text-charcoal hover:bg-royal-blue/10 border border-gray-200'
          }`}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  )
}
