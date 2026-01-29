import { Metadata } from 'next'
import Link from 'next/link'
import Accordion from '@/components/ui/Accordion'

export const metadata: Metadata = {
  title: 'Customer Care',
  description: 'Find answers to frequently asked questions about Darichah products, shipping, returns, and more.',
}

const faqCategories = [
  {
    title: 'Orders & Shipping',
    faqs: [
      {
        title: 'How long does shipping take?',
        content: (
          <div>
            <p>Shipping times vary by location:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Standard US Shipping: 5-7 business days</li>
              <li>Express US Shipping: 2-3 business days</li>
              <li>International Shipping: 7-14 business days</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Do you offer free shipping?',
        content: (
          <p>
            Yes! We offer free standard shipping on all US orders over $150.
            International orders over $300 also qualify for free shipping.
          </p>
        ),
      },
      {
        title: 'Can I track my order?',
        content: (
          <p>
            Absolutely! Once your order ships, you'll receive an email with
            tracking information. You can also track your order in your account
            dashboard.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    faqs: [
      {
        title: 'What is your return policy?',
        content: (
          <p>
            We accept returns within 30 days of delivery for unworn items in
            their original packaging. Custom or personalized pieces are final
            sale. See our full return policy for details.
          </p>
        ),
      },
      {
        title: 'How do I initiate a return?',
        content: (
          <div>
            <p>To start a return:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Log into your account and go to Order History</li>
              <li>Select the item you wish to return</li>
              <li>Print the prepaid return label</li>
              <li>Ship the item within 14 days</li>
            </ol>
          </div>
        ),
      },
      {
        title: 'Can I exchange for a different size?',
        content: (
          <p>
            Yes! If the same item is available in your desired size, we'll be
            happy to exchange it. Contact us within 30 days of receiving your
            order.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Product Information',
    faqs: [
      {
        title: 'Are your products authentic?',
        content: (
          <p>
            Absolutely. Every piece is handcrafted by Afghan artisans using
            authentic materials. We work directly with our artisan partners
            and can verify the authenticity and origin of each piece.
          </p>
        ),
      },
      {
        title: 'What materials do you use?',
        content: (
          <p>
            Our jewellery features a variety of traditional materials including
            sterling silver, gold vermeil, lapis lazuli, turquoise, and other
            semi-precious stones sourced from Afghanistan.
          </p>
        ),
      },
      {
        title: 'How should I care for my jewellery?',
        content: (
          <p>
            Store pieces separately to prevent scratching. Avoid contact with
            perfumes, lotions, and water. Clean with a soft cloth after wearing.
            See our Product Care page for detailed instructions.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Pre-Orders',
    faqs: [
      {
        title: 'What is a pre-order?',
        content: (
          <p>
            Pre-orders allow you to reserve items that are currently being
            crafted. Because each piece is handmade, some items require
            additional time. Pre-order items include estimated ship dates.
          </p>
        ),
      },
      {
        title: 'When will my pre-order ship?',
        content: (
          <p>
            Pre-order shipping times vary by product and are listed on each
            product page. Typically, pre-orders ship within 2-4 weeks. You'll
            receive updates as your piece is being crafted.
          </p>
        ),
      },
    ],
  },
]

export default function CustomerCarePage() {
  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Customer Care
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            We're here to help. Find answers to common questions or reach out
            to our team directly.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Shipping', href: '/customer-care/shipping', icon: '📦' },
              { label: 'Returns', href: '/customer-care/returns', icon: '↩️' },
              { label: 'Product Care', href: '/customer-care/product-care', icon: '💎' },
              { label: 'Contact Us', href: '/customer-care/contact', icon: '✉️' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center p-4 border border-gray-100 rounded-lg hover:border-antique-gold hover:bg-warm-cream transition-colors"
              >
                <span className="text-2xl mb-2">{link.icon}</span>
                <span className="text-sm font-medium text-royal-blue">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-lg font-serif text-royal-blue mb-4">
                    {category.title}
                  </h3>
                  <div className="bg-white rounded-lg p-6">
                    <Accordion items={category.faqs} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-royal-blue">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-serif text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Our customer care team is here to help. Reach out and we'll get
            back to you within 24 hours.
          </p>
          <Link
            href="/customer-care/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-antique-gold text-royal-blue font-medium uppercase tracking-wider hover:bg-soft-gold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
