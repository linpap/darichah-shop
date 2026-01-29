import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { allBlogPostsQuery } from '@/lib/queries'
import { getBlogPostUrl } from '@/lib/utils'
import { getBlogImage } from '@/lib/placeholders'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Stories from Afghan artisans, behind-the-scenes looks at traditional craftsmanship, and updates from the Darichah community.',
}

// Placeholder blog posts
const placeholderPosts = [
  {
    _id: '1',
    title: 'The Art of Lapis Lazuli: From Mountain to Masterpiece',
    slug: { current: 'art-of-lapis-lazuli' },
    excerpt: 'Discover the journey of Afghanistan\'s legendary blue stone, from the mines of Badakhshan to the hands of skilled artisans.',
    publishedAt: '2024-01-15',
    author: 'Darichah Team',
    categories: ['Craftsmanship', 'Materials'],
  },
  {
    _id: '2',
    title: 'Meet Fatima: A Master Silversmith',
    slug: { current: 'meet-fatima-silversmith' },
    excerpt: 'Learn about Fatima\'s journey from learning her grandmother\'s craft to becoming one of our most celebrated artisans.',
    publishedAt: '2024-01-08',
    author: 'Darichah Team',
    categories: ['Artisan Stories'],
  },
  {
    _id: '3',
    title: 'The History of Afghan Jewellery Making',
    slug: { current: 'history-afghan-jewellery' },
    excerpt: 'Explore thousands of years of jewellery making tradition in Afghanistan, from ancient civilizations to modern artisans.',
    publishedAt: '2024-01-02',
    author: 'Darichah Team',
    categories: ['History', 'Culture'],
  },
  {
    _id: '4',
    title: 'Caring for Your Handcrafted Pieces',
    slug: { current: 'caring-handcrafted-pieces' },
    excerpt: 'Tips and techniques to keep your Darichah jewellery looking beautiful for generations.',
    publishedAt: '2023-12-20',
    author: 'Darichah Team',
    categories: ['Care Guide'],
  },
]

export default async function JournalPage() {
  const posts = await sanityFetch({
    query: allBlogPostsQuery,
    tags: ['blogPost'],
  }).catch(() => [])

  const displayPosts = (posts as any[]).length > 0 ? posts : placeholderPosts

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="text-antique-gold text-sm uppercase tracking-widest">
            The Darichah Journal
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-6">
            Stories, Craft & Culture
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Discover the stories behind our artisans, learn about traditional
            Afghan craftsmanship, and stay updated on our journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {displayPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <Link
              href={getBlogPostUrl((displayPosts[0] as any).slug)}
              className="group block"
            >
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                  <Image
                    src={(displayPosts[0] as any).mainImage
                      ? urlFor((displayPosts[0] as any).mainImage).width(800).height(600).url()
                      : getBlogImage(0)}
                    alt={(displayPosts[0] as any).title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-antique-gold text-sm uppercase tracking-widest mb-3">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif text-royal-blue group-hover:text-antique-gold transition-colors mb-4">
                    {(displayPosts[0] as any).title}
                  </h2>
                  {(displayPosts[0] as any).excerpt && (
                    <p className="text-charcoal/70 mb-6">
                      {(displayPosts[0] as any).excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-charcoal/50">
                    {(displayPosts[0] as any).publishedAt && (
                      <span>
                        {new Date((displayPosts[0] as any).publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    )}
                    {(displayPosts[0] as any).author && (
                      <>
                        <span>•</span>
                        <span>{(displayPosts[0] as any).author}</span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <h2 className="heading-md mb-10">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(displayPosts as any[]).slice(1).map((post, index) => (
              <Link
                key={post._id}
                href={getBlogPostUrl(post.slug)}
                className="group block"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
                  {/* Image */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.mainImage
                        ? urlFor(post.mainImage).width(600).height(400).url()
                        : getBlogImage(index + 1)}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((cat: string) => (
                          <span
                            key={cat}
                            className="text-xs text-antique-gold uppercase tracking-wider"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-lg font-serif text-royal-blue group-hover:text-antique-gold transition-colors mb-2">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-sm text-charcoal/70 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="text-xs text-charcoal/50">
                      {post.publishedAt &&
                        new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-royal-blue">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Never Miss a Story
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for artisan stories, behind-the-scenes
            content, and exclusive updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-antique-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-antique-gold text-royal-blue font-medium uppercase tracking-wider hover:bg-soft-gold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
