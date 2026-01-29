import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description: 'Learn about Darichah return and exchange policies. We want you to love your jewellery.',
}

export default function ReturnsPage() {
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
            <span className="text-white">Returns & Exchanges</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif text-white">
            Returns & Exchanges
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Policy Overview */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Our Return Policy
              </h2>
              <p className="text-charcoal/80 mb-4">
                We want you to love your Darichah jewellery. If for any reason
                you're not completely satisfied, we accept returns within 30 days
                of delivery for unworn items in their original packaging.
              </p>
              <div className="bg-soft-gold/20 p-4 rounded-lg mt-6">
                <p className="text-sm text-charcoal">
                  <strong>Note:</strong> Custom or personalized pieces are final
                  sale and cannot be returned. Pre-order items can be cancelled
                  before they ship.
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Return Eligibility
              </h2>
              <p className="text-charcoal/80 mb-4">
                To be eligible for a return, your item must be:
              </p>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2">
                <li>Unworn and in its original condition</li>
                <li>In the original packaging with all tags attached</li>
                <li>Returned within 30 days of delivery</li>
                <li>Not a custom or personalized piece</li>
              </ul>
            </div>

            {/* How to Return */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                How to Initiate a Return
              </h2>
              <ol className="list-decimal list-inside text-charcoal/80 space-y-4">
                <li>
                  <strong>Log into your account</strong> and navigate to your
                  Order History.
                </li>
                <li>
                  <strong>Select the item</strong> you wish to return and click
                  "Start Return."
                </li>
                <li>
                  <strong>Choose your reason</strong> for the return (this helps
                  us improve!).
                </li>
                <li>
                  <strong>Print the prepaid return label</strong> that we'll
                  email to you.
                </li>
                <li>
                  <strong>Package your item</strong> securely in its original
                  packaging.
                </li>
                <li>
                  <strong>Drop off your package</strong> at any authorized
                  shipping location.
                </li>
              </ol>
            </div>

            {/* Exchanges */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Exchanges
              </h2>
              <p className="text-charcoal/80 mb-4">
                Need a different size? We're happy to exchange your item if it's
                available in your desired size. To request an exchange:
              </p>
              <ol className="list-decimal list-inside text-charcoal/80 space-y-2">
                <li>Contact us within 30 days of receiving your order</li>
                <li>Let us know the size you need</li>
                <li>We'll check availability and send you a prepaid label</li>
                <li>Your new item will ship as soon as we receive the original</li>
              </ol>
            </div>

            {/* Refunds */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Refund Information
              </h2>
              <p className="text-charcoal/80 mb-4">
                Once we receive and inspect your return, we'll process your refund
                within 3-5 business days. Refunds are issued to the original payment
                method.
              </p>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2">
                <li>Original shipping costs are non-refundable</li>
                <li>Return shipping is free for US orders</li>
                <li>International return shipping costs are the customer's responsibility</li>
              </ul>
            </div>

            {/* Damaged Items */}
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-serif text-royal-blue mb-4">
                Damaged or Defective Items
              </h2>
              <p className="text-charcoal/80 mb-4">
                If you receive a damaged or defective item, please contact us
                immediately with photos of the damage. We'll arrange for a
                replacement or full refund, including shipping costs.
              </p>
              <Link
                href="/customer-care/contact"
                className="inline-flex items-center gap-2 text-antique-gold font-medium hover:text-royal-blue transition-colors"
              >
                Report a damaged item →
              </Link>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-charcoal/70 mb-4">
                Need help with a return?
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
