'use client'

import { PortableText } from '@portabletext/react'
import Accordion from '@/components/ui/Accordion'

interface ProductCareProps {
  careInstructions?: any
}

export default function ProductCare({ careInstructions }: ProductCareProps) {
  const defaultCare = [
    {
      title: 'General Care',
      content: (
        <p>
          Store your jewellery in a cool, dry place away from direct sunlight.
          Use a soft cloth to gently clean your pieces after wearing.
        </p>
      ),
    },
    {
      title: 'Avoid Contact With',
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Perfumes and lotions</li>
          <li>Chlorine and saltwater</li>
          <li>Harsh chemicals</li>
          <li>Extreme temperatures</li>
        </ul>
      ),
    },
    {
      title: 'Storage Tips',
      content: (
        <p>
          Store each piece separately in a soft pouch or lined jewellery box to
          prevent scratching. Keep silver pieces in anti-tarnish bags.
        </p>
      ),
    },
  ]

  return (
    <div className="bg-warm-cream rounded-lg p-6">
      <h3 className="text-sm font-medium text-royal-blue uppercase tracking-wider mb-4">
        Care Instructions
      </h3>

      {careInstructions ? (
        <div className="prose prose-sm text-charcoal/80">
          <PortableText value={careInstructions} />
        </div>
      ) : (
        <Accordion items={defaultCare} />
      )}
    </div>
  )
}
