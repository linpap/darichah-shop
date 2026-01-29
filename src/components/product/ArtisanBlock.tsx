import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { getArtisanUrl } from '@/lib/utils'

interface Artisan {
  _id: string
  name: string
  slug: { current: string }
  region?: string
  photo?: any
  craft?: string
  quote?: string
}

interface ArtisanBlockProps {
  artisan: Artisan
}

export default function ArtisanBlock({ artisan }: ArtisanBlockProps) {
  return (
    <div className="bg-warm-cream rounded-lg p-6">
      <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider mb-4">
        Handcrafted By
      </h3>

      <Link href={getArtisanUrl(artisan.slug)} className="flex gap-4 group">
        {/* Artisan Photo */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-antique-gold/30">
          {artisan.photo ? (
            <Image
              src={urlFor(artisan.photo).width(100).height(100).url()}
              alt={artisan.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-royal-blue/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-royal-blue/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>

        {/* Artisan Info */}
        <div className="flex-1">
          <h4 className="font-serif text-lg text-royal-blue group-hover:text-antique-gold transition-colors">
            {artisan.name}
          </h4>
          {artisan.craft && (
            <p className="text-sm text-charcoal/70">{artisan.craft}</p>
          )}
          {artisan.region && (
            <p className="text-xs text-charcoal/50 mt-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {artisan.region}
            </p>
          )}
        </div>
      </Link>

      {/* Quote */}
      {artisan.quote && (
        <blockquote className="mt-4 pt-4 border-t border-charcoal/10">
          <p className="text-sm text-charcoal/70 italic">&ldquo;{artisan.quote}&rdquo;</p>
        </blockquote>
      )}

      {/* View Profile Link */}
      <Link
        href={getArtisanUrl(artisan.slug)}
        className="mt-4 inline-flex items-center gap-1 text-sm text-antique-gold hover:text-royal-blue transition-colors"
      >
        View Artisan Profile
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  )
}
