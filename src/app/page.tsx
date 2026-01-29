import Hero from '@/components/home/Hero'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import NewArrivals from '@/components/home/NewArrivals'
import BrandStory from '@/components/home/BrandStory'
import ImpactHighlights from '@/components/home/ImpactHighlights'
import PressLogos from '@/components/home/PressLogos'
import InstagramFeed from '@/components/home/InstagramFeed'
import { sanityFetch } from '@/lib/sanity'
import {
  featuredCollectionsQuery,
  newArrivalsQuery,
  impactMetricsQuery,
  allPressItemsQuery,
} from '@/lib/queries'

export default async function HomePage() {
  // Fetch data from Sanity (with fallback to placeholders if no data)
  const [collections, newArrivals, impactMetrics, pressItems] = await Promise.all([
    sanityFetch({ query: featuredCollectionsQuery, tags: ['collection'] }).catch(() => []),
    sanityFetch({ query: newArrivalsQuery, tags: ['product'] }).catch(() => []),
    sanityFetch({ query: impactMetricsQuery, tags: ['impactMetric'] }).catch(() => []),
    sanityFetch({ query: allPressItemsQuery, tags: ['pressItem'] }).catch(() => []),
  ])

  return (
    <>
      <Hero />
      <FeaturedCollections collections={collections as any} />
      <NewArrivals products={newArrivals as any} />
      <BrandStory />
      <ImpactHighlights metrics={impactMetrics as any} />
      <PressLogos pressItems={pressItems as any} />
      <InstagramFeed />
    </>
  )
}
