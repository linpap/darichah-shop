import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-warm-cream">
      <div className="container-custom text-center py-16">
        <div className="max-w-md mx-auto">
          {/* Decorative Element */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-2 border-antique-gold/30 transform rotate-45" />
            <div className="absolute inset-2 border-2 border-antique-gold/50 transform rotate-45" />
            <div className="absolute inset-4 border-2 border-antique-gold transform rotate-45" />
          </div>

          <h1 className="text-6xl font-serif text-royal-blue mb-4">404</h1>
          <h2 className="text-xl font-serif text-charcoal mb-4">Page Not Found</h2>
          <p className="text-charcoal/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let us help you find your way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Go Home
            </Button>
            <Button href="/shop" variant="secondary">
              Browse Shop
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-charcoal/60 mb-4">Popular destinations</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/collections"
                className="text-royal-blue hover:text-antique-gold transition-colors"
              >
                Collections
              </Link>
              <Link
                href="/artisans"
                className="text-royal-blue hover:text-antique-gold transition-colors"
              >
                Artisans
              </Link>
              <Link
                href="/our-story"
                className="text-royal-blue hover:text-antique-gold transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/customer-care"
                className="text-royal-blue hover:text-antique-gold transition-colors"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
