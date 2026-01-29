import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { getArtisanUrl } from '@/lib/utils'
import { getArtisanImage } from '@/lib/placeholders'

interface Artisan {
  _id: string
  name: string
  slug: { current: string }
  region?: string
  photo?: any
  craft?: string
  quote?: string
}

interface ArtisanCardProps {
  artisan: Artisan
  index?: number
}

export default function ArtisanCard({ artisan, index = 0 }: ArtisanCardProps) {
  const imageUrl = artisan.photo
    ? urlFor(artisan.photo).width(400).height(533).url()
    : getArtisanImage(index)

  return (
    <Link href={getArtisanUrl(artisan.slug)} className="group block">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={imageUrl}
            alt={artisan.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay with quote */}
          {artisan.quote && (
            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white text-sm italic line-clamp-3">
                &ldquo;{artisan.quote}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="text-lg font-serif text-royal-blue group-hover:text-antique-gold transition-colors">
            {artisan.name}
          </h3>

          {artisan.craft && (
            <p className="text-sm text-charcoal/70 mt-1">{artisan.craft}</p>
          )}

          {artisan.region && (
            <p className="text-xs text-charcoal/50 mt-2 flex items-center gap-1">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {artisan.region}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
