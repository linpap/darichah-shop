import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Product Care',
  description: 'Learn how to care for your Darichah jewellery to keep it beautiful for years to come.',
}

export default function ProductCarePage() {
  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-12 md:py-16">
        <div className="container-custom">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/customer-care" className="hover:text-white">
              Customer Care
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Product Care</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif text-white">
            Caring for Your Jewellery
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-charcoal/80 text-lg">
                Your Darichah jewellery is crafted to last a lifetime. With proper
                care, these pieces will continue to tell their story for generations.
                Here's how to keep your jewellery looking its best.
              </p>
            </div>

            {/* General Care */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                General Care Guidelines
              </h2>
              <ul className="space-y-4 text-charcoal/80">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-soft-gold/30 rounded-full flex items-center justify-center text-antique-gold text-sm">✓</span>
                  <span>Put jewellery on last, after applying makeup, perfume, and lotions</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-soft-gold/30 rounded-full flex items-center justify-center text-antique-gold text-sm">✓</span>
                  <span>Remove jewellery before swimming, bathing, or exercising</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-soft-gold/30 rounded-full flex items-center justify-center text-antique-gold text-sm">✓</span>
                  <span>Clean gently with a soft, lint-free cloth after wearing</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-soft-gold/30 rounded-full flex items-center justify-center text-antique-gold text-sm">✓</span>
                  <span>Store pieces separately to prevent scratching</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-soft-gold/30 rounded-full flex items-center justify-center text-antique-gold text-sm">✓</span>
                  <span>Keep away from extreme heat and direct sunlight</span>
                </li>
              </ul>
            </div>

            {/* Silver Care */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Sterling Silver
              </h2>
              <p className="text-charcoal/80 mb-4">
                Sterling silver naturally develops a patina over time. While some
                prefer this aged look, here's how to maintain a bright finish:
              </p>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2 mb-4">
                <li>Polish with a silver-specific polishing cloth</li>
                <li>Store in anti-tarnish bags or with anti-tarnish strips</li>
                <li>Avoid exposure to chlorine and household chemicals</li>
                <li>For heavy tarnish, use a gentle silver cleaning solution</li>
              </ul>
              <div className="bg-soft-gold/20 p-4 rounded-lg">
                <p className="text-sm text-charcoal">
                  <strong>Pro tip:</strong> Wearing your silver regularly actually
                  helps prevent tarnish, as the natural oils in your skin protect
                  the metal.
                </p>
              </div>
            </div>

            {/* Gemstone Care */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Gemstone Care
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-charcoal mb-2">Lapis Lazuli</h3>
                  <p className="text-charcoal/80">
                    This semi-precious stone is relatively soft. Clean with a damp
                    cloth and avoid ultrasonic cleaners. Keep away from harsh
                    chemicals and prolonged sun exposure.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2">Turquoise</h3>
                  <p className="text-charcoal/80">
                    Turquoise is porous and can absorb oils and chemicals. Never
                    soak turquoise jewellery. Clean with a soft, dry cloth and
                    store away from other jewellery.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2">Coral & Pearl</h3>
                  <p className="text-charcoal/80">
                    These organic materials require extra care. Wipe with a soft
                    cloth after wearing and store in a breathable container. Avoid
                    contact with perfumes and hairspray.
                  </p>
                </div>
              </div>
            </div>

            {/* Storage */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Proper Storage
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-charcoal mb-2">Do:</h3>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                    <li>Store in a cool, dry place</li>
                    <li>Use soft pouches or lined boxes</li>
                    <li>Keep pieces separated</li>
                    <li>Use anti-tarnish strips for silver</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-charcoal mb-2">Don't:</h3>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                    <li>Store in bathrooms (humidity)</li>
                    <li>Keep in direct sunlight</li>
                    <li>Tangle necklaces together</li>
                    <li>Use plastic bags (trap moisture)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Cleaning */}
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Professional Cleaning
              </h2>
              <p className="text-charcoal/80 mb-4">
                For deep cleaning or restoration, we recommend professional jewellery
                care. We offer complimentary cleaning for all Darichah pieces —
                simply bring or send your jewellery to us.
              </p>
              <Link
                href="/customer-care/contact"
                className="inline-flex items-center gap-2 text-antique-gold font-medium hover:text-royal-blue transition-colors"
              >
                Request professional cleaning →
              </Link>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-charcoal/70 mb-4">
                Have questions about caring for your piece?
              </p>
              <Link
                href="/customer-care/contact"
                className="text-antique-gold font-medium hover:text-royal-blue transition-colors"
              >
                Contact our team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
