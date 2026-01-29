import { Metadata } from 'next'
import Image from 'next/image'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { allPressItemsQuery } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Press',
  description: 'Darichah in the news. Read what leading publications are saying about our mission to connect Afghan artisans with the world.',
}

// Placeholder press items
const placeholderPress = [
  {
    _id: '1',
    publication: 'Vogue',
    title: 'Stunning Craftsmanship with a Purpose',
    date: '2023-11-15',
    quote: 'Darichah brings exquisite Afghan artistry to the modern world while empowering the communities behind each piece.',
  },
  {
    _id: '2',
    publication: 'Elle',
    title: 'Where Heritage Meets Modern Elegance',
    date: '2023-09-20',
    quote: 'These pieces tell stories that span generations, each one a window into Afghanistan\'s rich artistic heritage.',
  },
  {
    _id: '3',
    publication: 'Forbes',
    title: 'Redefining Ethical Luxury',
    date: '2023-08-10',
    quote: 'A business model that proves profitability and social impact can go hand in hand.',
  },
  {
    _id: '4',
    publication: 'Harper\'s Bazaar',
    title: 'Jewellery That Tells a Story',
    date: '2023-07-05',
    quote: 'Every piece from Darichah is more than an accessory — it\'s a connection to ancient traditions and modern hope.',
  },
]

export default async function PressPage() {
  const pressItems = await sanityFetch({
    query: allPressItemsQuery,
    tags: ['pressItem'],
  }).catch(() => [])

  const displayPress = (pressItems as any[]).length > 0 ? pressItems : placeholderPress

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="text-antique-gold text-sm uppercase tracking-widest">
            In the News
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-6">
            Press & Media
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            What leading publications are saying about our mission to connect
            Afghan artisans with the world.
          </p>
        </div>
      </section>

      {/* Featured Press Logos */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <p className="text-center text-sm text-charcoal/50 uppercase tracking-widest mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {(displayPress as any[]).slice(0, 5).map((item) => (
              <div key={item._id} className="text-center">
                {item.logo ? (
                  <Image
                    src={urlFor(item.logo).width(150).height(50).url()}
                    alt={item.publication}
                    width={150}
                    height={50}
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <span className="text-2xl font-serif text-charcoal/30 hover:text-charcoal/60 transition-colors">
                    {item.publication}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {(displayPress as any[]).map((item) => (
              <article
                key={item._id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Publication Logo/Name */}
                  <div className="flex-shrink-0 md:w-32">
                    {item.logo ? (
                      <Image
                        src={urlFor(item.logo).width(120).height(40).url()}
                        alt={item.publication}
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-xl font-serif text-royal-blue">
                        {item.publication}
                      </span>
                    )}
                    {item.date && (
                      <p className="text-xs text-charcoal/50 mt-2">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {item.title && (
                      <h3 className="text-lg font-serif text-royal-blue mb-3">
                        {item.title}
                      </h3>
                    )}
                    {item.quote && (
                      <blockquote className="text-charcoal/70 italic border-l-4 border-antique-gold pl-4">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-4 text-sm text-antique-gold hover:text-royal-blue transition-colors"
                      >
                        Read Full Article
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="section-padding bg-royal-blue">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Press Inquiries
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            For press inquiries, interviews, or access to our media kit, please
            reach out to our press team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@darichah.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-antique-gold text-royal-blue font-medium uppercase tracking-wider hover:bg-soft-gold transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              press@darichah.com
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-antique-gold text-antique-gold font-medium uppercase tracking-wider hover:bg-antique-gold hover:text-royal-blue transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Media Kit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
