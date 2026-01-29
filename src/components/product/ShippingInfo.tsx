import Accordion from '@/components/ui/Accordion'

export default function ShippingInfo() {
  const shippingItems = [
    {
      title: 'Shipping',
      content: (
        <div className="space-y-2">
          <p>Free standard shipping on orders over $150.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Standard (5-7 business days): $9.95</li>
            <li>Express (2-3 business days): $19.95</li>
            <li>International (7-14 business days): $24.95</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Returns & Exchanges',
      content: (
        <p>
          We accept returns within 30 days of delivery for unworn items in original
          packaging. Custom or personalized pieces are final sale.
        </p>
      ),
    },
    {
      title: 'Gift Packaging',
      content: (
        <p>
          Every order arrives in our signature packaging, ready for gifting. Add a
          personalized message at checkout.
        </p>
      ),
    },
  ]

  return (
    <div className="bg-warm-cream rounded-lg p-6">
      <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider mb-4">
        Shipping & Returns
      </h3>
      <Accordion items={shippingItems} />
    </div>
  )
}
