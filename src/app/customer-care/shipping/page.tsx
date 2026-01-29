import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping Information',
  description: 'Learn about Darichah shipping options, delivery times, and international shipping policies.',
}

export default function ShippingPage() {
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
            <span className="text-white">Shipping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif text-white">
            Shipping Information
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Shipping Options */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-6">
                Shipping Options & Rates
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-charcoal font-medium">Method</th>
                      <th className="text-left py-3 text-charcoal font-medium">Delivery Time</th>
                      <th className="text-left py-3 text-charcoal font-medium">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Standard (US)</td>
                      <td className="py-3">5-7 business days</td>
                      <td className="py-3">$9.95 (Free over $150)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Express (US)</td>
                      <td className="py-3">2-3 business days</td>
                      <td className="py-3">$19.95</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">International Standard</td>
                      <td className="py-3">7-14 business days</td>
                      <td className="py-3">$24.95 (Free over $300)</td>
                    </tr>
                    <tr>
                      <td className="py-3">International Express</td>
                      <td className="py-3">3-5 business days</td>
                      <td className="py-3">$39.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Processing Time */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Processing Time
              </h2>
              <p className="text-charcoal/80 mb-4">
                Orders are typically processed within 1-2 business days. During
                peak seasons, processing may take up to 3 business days.
              </p>
              <p className="text-charcoal/80">
                Pre-order items have their own processing times, which are listed
                on each product page. You'll receive updates as your piece is
                being crafted.
              </p>
            </div>

            {/* International Shipping */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                International Shipping
              </h2>
              <p className="text-charcoal/80 mb-4">
                We ship to over 50 countries worldwide. International orders may
                be subject to import duties and taxes, which are the responsibility
                of the recipient.
              </p>
              <h3 className="font-medium text-charcoal mt-6 mb-3">
                Countries We Ship To:
              </h3>
              <p className="text-charcoal/80">
                United States, Canada, United Kingdom, Australia, France, Germany,
                Italy, Japan, South Korea, Singapore, UAE, and many more. If your
                country isn't listed at checkout, please contact us.
              </p>
            </div>

            {/* Tracking */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Order Tracking
              </h2>
              <p className="text-charcoal/80 mb-4">
                All orders include tracking. Once your order ships, you'll receive
                an email with your tracking number and a link to track your package.
              </p>
              <p className="text-charcoal/80">
                You can also track your order by logging into your account and
                viewing your order history.
              </p>
            </div>

            {/* Gift Shipping */}
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Gift Shipping
              </h2>
              <p className="text-charcoal/80 mb-4">
                Sending a gift? Every order arrives in our signature packaging,
                ready for gifting. At checkout, you can add a personalized message
                and request that no invoice be included.
              </p>
              <p className="text-charcoal/80">
                For multiple gifts going to different addresses, please place
                separate orders for each recipient.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-charcoal/70 mb-4">
                Have more shipping questions?
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
