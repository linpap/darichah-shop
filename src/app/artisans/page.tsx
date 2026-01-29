import { Metadata } from 'next'
import ArtisanCard from '@/components/artisans/ArtisanCard'
import { sanityFetch } from '@/lib/sanity'
import { allArtisansQuery } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Our Artisans',
  description: 'Meet the skilled Afghan artisans behind Darichah jewellery. Each craftsperson brings generations of expertise and passion to their work.',
}

// Placeholder artisans for when CMS has no data
const placeholderArtisans = [
  {
    _id: '1',
    name: 'Fatima Ahmadi',
    slug: { current: 'fatima-ahmadi' },
    region: 'Kabul',
    craft: 'Silver Filigree',
    quote: 'Every piece I create carries a piece of my heart.',
  },
  {
    _id: '2',
    name: 'Ahmad Khan',
    slug: { current: 'ahmad-khan' },
    region: 'Herat',
    craft: 'Lapis Lazuli Setting',
    quote: 'These stones have been in our mountains for millennia.',
  },
  {
    _id: '3',
    name: 'Maryam Rahimi',
    slug: { current: 'maryam-rahimi' },
    region: 'Mazar-i-Sharif',
    craft: 'Turquoise Jewellery',
    quote: 'I learned this craft from my grandmother.',
  },
  {
    _id: '4',
    name: 'Karim Nazari',
    slug: { current: 'karim-nazari' },
    region: 'Badakhshan',
    craft: 'Traditional Metalwork',
    quote: 'Our craft tells the story of our people.',
  },
]

export default async function ArtisansPage() {
  const artisans = await sanityFetch({
    query: allArtisansQuery,
    tags: ['artisan'],
  }).catch(() => [])

  const displayArtisans = (artisans as any[]).length > 0 ? artisans : placeholderArtisans

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="text-antique-gold text-sm uppercase tracking-widest">
            The Heart of Darichah
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-6">
            Meet Our Artisans
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Behind every piece of Darichah jewellery is a skilled artisan with a
            remarkable story. These craftspeople carry forward traditions that span
            generations.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif text-royal-blue">50+</p>
              <p className="text-sm text-charcoal/60 mt-1">Artisans</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-royal-blue">60%</p>
              <p className="text-sm text-charcoal/60 mt-1">Women</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-royal-blue">5</p>
              <p className="text-sm text-charcoal/60 mt-1">Regions</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-royal-blue">200+</p>
              <p className="text-sm text-charcoal/60 mt-1">Families Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(displayArtisans as any[]).map((artisan, index) => (
              <ArtisanCard key={artisan._id} artisan={artisan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Network CTA */}
      <section className="section-padding bg-royal-blue">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Are You an Artisan?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            We're always looking to partner with skilled craftspeople who share our
            values. Join our network and reach customers worldwide.
          </p>
          <a
            href="/customer-care/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-antique-gold text-royal-blue font-medium uppercase tracking-wider hover:bg-soft-gold transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
