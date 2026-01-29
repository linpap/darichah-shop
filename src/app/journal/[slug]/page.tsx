import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { blogPostBySlugQuery } from '@/lib/queries'
import { getBlogImage } from '@/lib/placeholders'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug: params.slug },
    tags: ['blogPost'],
  }).catch(() => null)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  const p = post as any

  return {
    title: p.title,
    description: p.excerpt || `Read ${p.title} on the Darichah Journal`,
    openGraph: {
      images: p.mainImage
        ? [{ url: urlFor(p.mainImage).width(1200).height(630).url() }]
        : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug: params.slug },
    tags: ['blogPost'],
  }).catch(() => null)

  if (!post) {
    notFound()
  }

  const p = post as any

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-4">
          <nav className="text-sm text-charcoal/60">
            <Link href="/" className="hover:text-royal-blue">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/journal" className="hover:text-royal-blue">
              Journal
            </Link>
            <span className="mx-2">/</span>
            <span className="text-royal-blue line-clamp-1">{p.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article>
        <header className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              {/* Categories */}
              {p.categories && p.categories.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {p.categories.map((cat: string) => (
                    <span
                      key={cat}
                      className="text-xs text-antique-gold uppercase tracking-widest"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-royal-blue mb-6">
                {p.title}
              </h1>

              {p.excerpt && (
                <p className="text-lg text-charcoal/70 mb-6">{p.excerpt}</p>
              )}

              <div className="flex items-center justify-center gap-4 text-sm text-charcoal/50">
                {p.publishedAt && (
                  <span>
                    {new Date(p.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                )}
                {p.author && (
                  <>
                    <span>•</span>
                    <span>By {p.author}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container-custom">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden -mt-8 shadow-lg">
            <Image
              src={p.mainImage ? urlFor(p.mainImage).width(1400).height(600).url() : getBlogImage(0)}
              alt={p.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {p.body ? (
                <div className="prose prose-lg prose-charcoal max-w-none">
                  <PortableText
                    value={p.body}
                    components={{
                      types: {
                        image: ({ value }) => (
                          <figure className="my-8">
                            <Image
                              src={urlFor(value).width(800).url()}
                              alt={value.alt || ''}
                              width={800}
                              height={500}
                              className="rounded-lg"
                            />
                            {value.caption && (
                              <figcaption className="text-center text-sm text-charcoal/60 mt-2">
                                {value.caption}
                              </figcaption>
                            )}
                          </figure>
                        ),
                      },
                      marks: {
                        link: ({ children, value }) => (
                          <a
                            href={value.href}
                            target={value.blank ? '_blank' : undefined}
                            rel={value.blank ? 'noopener noreferrer' : undefined}
                            className="text-antique-gold hover:text-royal-blue"
                          >
                            {children}
                          </a>
                        ),
                      },
                    }}
                  />
                </div>
              ) : (
                <div className="prose prose-lg max-w-none">
                  <p className="text-charcoal/70">
                    This article content will be available soon. Check back later for the full story.
                  </p>
                </div>
              )}

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-charcoal/60 mb-4">Share this article</p>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(p.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-antique-gold/20 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-antique-gold/20 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(p.title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    className="p-2 bg-gray-100 rounded-full hover:bg-antique-gold/20 transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* More Articles CTA */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">Continue Reading</h2>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-antique-gold font-medium hover:text-royal-blue transition-colors"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
