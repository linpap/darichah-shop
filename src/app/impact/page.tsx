import { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { impactMetricsQuery } from '@/lib/queries'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'Discover how Darichah creates positive change for Afghan artisan communities through fair wages, education, and sustainable development.',
}

// Placeholder impact metrics
const placeholderMetrics = [
  { _id: '1', title: 'Artisans Supported', value: '50+', description: 'Skilled craftspeople employed' },
  { _id: '2', title: 'Families Impacted', value: '200+', description: 'Lives changed through fair wages' },
  { _id: '3', title: 'Fair Wage Premium', value: '40%', description: 'Above local market rates' },
  { _id: '4', title: 'Women Artisans', value: '60%', description: 'Female empowerment focus' },
  { _id: '5', title: 'Children in School', value: '75', description: 'Through our education program' },
  { _id: '6', title: 'Regions Reached', value: '5', description: 'Across Afghanistan' },
]

export default async function ImpactPage() {
  const metrics = await sanityFetch({
    query: impactMetricsQuery,
    tags: ['impactMetric'],
  }).catch(() => [])

  const displayMetrics = (metrics as any[]).length > 0 ? metrics : placeholderMetrics

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="text-antique-gold text-sm uppercase tracking-widest">
            Our Impact
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-6">
            Every Purchase Makes a Difference
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            When you choose Darichah, you're investing in communities and preserving
            centuries-old traditions. Here's how your support creates lasting change.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {(displayMetrics as any[]).map((metric) => (
              <div
                key={metric._id}
                className="bg-white p-6 md:p-8 rounded-lg text-center shadow-sm"
              >
                <p className="text-4xl md:text-5xl font-serif text-royal-blue">
                  {metric.value}
                </p>
                <p className="text-sm font-medium text-charcoal mt-2">
                  {metric.title}
                </p>
                {metric.description && (
                  <p className="text-xs text-charcoal/60 mt-1">
                    {metric.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg">How We Create Change</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fair Wages & Direct Partnership',
                description:
                  'We pay artisans 40% above local market rates and work directly with them — no middlemen. This ensures fair compensation and dignified work.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Women Empowerment',
                description:
                  '60% of our artisans are women, many of whom are the primary breadwinners for their families. We provide safe working conditions and flexible schedules.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: 'Education Initiative',
                description:
                  'A portion of every sale goes to our education fund, which supports schooling for artisan children. 75 children are currently enrolled through our program.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                ),
              },
              {
                title: 'Skills Training',
                description:
                  'We invest in training programs to help artisans refine their skills and learn new techniques, ensuring their craft evolves while staying rooted in tradition.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
            ].map((area, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-warm-cream rounded-lg"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-antique-gold/20 rounded-full flex items-center justify-center text-antique-gold">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-royal-blue mb-2">
                    {area.title}
                  </h3>
                  <p className="text-charcoal/70">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-royal-blue">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
              A Story of Impact
            </h2>
            <blockquote className="text-lg text-white/80 italic mb-6">
              "Before Darichah, I struggled to support my four children. Now I can
              send them all to school and have hope for their future. My hands create
              beauty, and my family thrives because of it."
            </blockquote>
            <p className="text-antique-gold font-medium">
              — Fatima, Silver Filigree Artisan from Kabul
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Our Commitment to Transparency</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-8">
            We believe you deserve to know exactly where your money goes. Here's
            how every dollar breaks down:
          </p>

          <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              {[
                { label: 'Artisan Wages', percent: 45 },
                { label: 'Materials & Supplies', percent: 20 },
                { label: 'Community Programs', percent: 10 },
                { label: 'Operations & Shipping', percent: 20 },
                { label: 'Business Sustainability', percent: 5 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-charcoal">{item.label}</span>
                    <span className="text-royal-blue font-medium">{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-warm-cream rounded-full overflow-hidden">
                    <div
                      className="h-full bg-antique-gold rounded-full"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-cream border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Join Us in Making a Difference</h2>
          <p className="text-charcoal/70 max-w-xl mx-auto mb-8">
            Every purchase supports artisan families and preserves Afghan heritage.
            Shop with purpose.
          </p>
          <Button href="/shop" variant="primary" size="lg">
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  )
}
