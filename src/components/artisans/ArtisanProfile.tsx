import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import { getArtisanImage } from '@/lib/placeholders'

interface Artisan {
  _id: string
  name: string
  region?: string
  photo?: any
  bio?: any
  quote?: string
  craft?: string
  gallery?: any[]
}

interface ArtisanProfileProps {
  artisan: Artisan
  index?: number
}

export default function ArtisanProfile({ artisan, index = 0 }: ArtisanProfileProps) {
  const imageUrl = artisan.photo
    ? urlFor(artisan.photo).width(400).height(400).url()
    : getArtisanImage(index)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Photo */}
        <div className="relative w-full md:w-64 aspect-square rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt={artisan.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-serif text-royal-blue mb-2">
            {artisan.name}
          </h1>

          <div className="flex flex-wrap gap-4 mb-4">
            {artisan.craft && (
              <div className="flex items-center gap-2 text-charcoal/70">
                <svg
                  className="w-4 h-4 text-antique-gold"
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
                {artisan.craft}
              </div>
            )}
            {artisan.region && (
              <div className="flex items-center gap-2 text-charcoal/70">
                <svg
                  className="w-4 h-4 text-antique-gold"
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
                {artisan.region}, Afghanistan
              </div>
            )}
          </div>

          {artisan.quote && (
            <blockquote className="border-l-4 border-antique-gold pl-4 italic text-charcoal/80">
              &ldquo;{artisan.quote}&rdquo;
            </blockquote>
          )}
        </div>
      </div>

      {/* Bio */}
      {artisan.bio && (
        <div className="prose prose-charcoal max-w-none">
          <h2 className="text-xl font-serif text-royal-blue mb-4">About</h2>
          <PortableText value={artisan.bio} />
        </div>
      )}

      {/* Gallery */}
      {artisan.gallery && artisan.gallery.length > 0 && (
        <div>
          <h2 className="text-xl font-serif text-royal-blue mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artisan.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={urlFor(image).width(300).height(300).url()}
                  alt={`${artisan.name} gallery ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
