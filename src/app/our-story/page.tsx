import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { placeholderImages } from '@/lib/placeholders'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Discover the story behind Darichah - connecting Afghan artisans with the world through handcrafted jewellery that preserves centuries of tradition.',
}

export default function OurStoryPage() {
  return (
    <div className="bg-warm-cream">
      {/* Hero Section */}
      <section className="relative bg-royal-blue py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/images/afghan-pattern.svg)',
              backgroundSize: '150px',
            }}
          />
        </div>
        <div className="container-custom relative text-center">
          <span className="text-antique-gold text-sm uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-4 mb-6">
            A Window to Afghanistan's Soul
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            "Darichah" means "window" in Dari — and that's exactly what we aim to be.
            A window connecting you to the rich artistry and resilient spirit of
            Afghan craftspeople.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src={placeholderImages.artisanAtWork}
                alt="Afghan artisan at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-4 border border-antique-gold/30 rounded pointer-events-none" />
            </div>
            <div>
              <span className="text-antique-gold text-sm uppercase tracking-widest">
                Our Mission
              </span>
              <h2 className="heading-lg mt-2 mb-6">
                Preserving Heritage, Empowering Communities
              </h2>
              <div className="space-y-4 text-charcoal/80">
                <p>
                  For generations, Afghan artisans have perfected techniques passed down
                  through families — from the intricate silver filigree of Herat to the
                  legendary lapis lazuli settings of Badakhshan.
                </p>
                <p>
                  At Darichah, we partner directly with these skilled craftspeople to bring
                  their extraordinary work to the world. Every purchase directly supports
                  artisan families, preserves ancient crafts, and helps rebuild communities
                  affected by decades of conflict.
                </p>
                <p>
                  When you wear Darichah, you carry a piece of living heritage — a story
                  of resilience, beauty, and human connection that spans continents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-antique-gold text-sm uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="heading-lg mt-2">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description:
                  'Every piece is handcrafted using traditional techniques passed down through generations. We never compromise on quality or cultural integrity.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Fair Partnership',
                description:
                  'We pay 40% above local market rates and work directly with artisans. No middlemen, no exploitation — just fair, dignified work.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Sustainable Impact',
                description:
                  'Beyond fair wages, we invest in education, healthcare, and skills training for artisan communities, creating lasting change.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-warm-cream rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-antique-gold/10 text-antique-gold mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-royal-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-royal-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-antique-gold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-2">
              From Kabul to the World
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2020',
                  title: 'The Beginning',
                  description:
                    'Founded with a mission to support Afghan artisans and share their incredible craft with the world.',
                },
                {
                  year: '2021',
                  title: 'Building Partnerships',
                  description:
                    'Established direct relationships with over 20 artisan families across Kabul, Herat, and Badakhshan.',
                },
                {
                  year: '2022',
                  title: 'Growing Impact',
                  description:
                    'Expanded our network to 50+ artisans and launched our education initiative for artisan children.',
                },
                {
                  year: '2023',
                  title: 'Global Recognition',
                  description:
                    'Featured in international press and reached customers in over 30 countries.',
                },
                {
                  year: 'Today',
                  title: 'Looking Forward',
                  description:
                    'Continuing to grow while maintaining our commitment to quality, authenticity, and impact.',
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-antique-gold font-serif text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-antique-gold" />
                    {index < 4 && <div className="w-px h-full bg-white/20 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-medium text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Join Our Journey</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-8">
            Every purchase tells a story. Discover the artisans behind our jewellery
            and the impact you make when you choose Darichah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/artisans" variant="primary">
              Meet the Artisans
            </Button>
            <Button href="/impact" variant="secondary">
              See Our Impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
