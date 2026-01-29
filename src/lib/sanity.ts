import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Check if we have valid Sanity configuration
const isConfigured = projectId && projectId !== 'demo-project' && projectId.length > 5

// Create client only if configured, otherwise use a dummy client
export const client = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-03-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  if (!builder || !source) {
    // Return a placeholder image URL builder-like object that supports chaining
    const placeholder: any = {
      width: () => placeholder,
      height: () => placeholder,
      url: () => '',
    }
    return placeholder
  }
  return builder.image(source)
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}): Promise<T> {
  // If Sanity is not configured, return empty array (will use placeholder data)
  if (!client) {
    console.log('Sanity not configured - using placeholder data')
    return [] as T
  }

  try {
    return await client.fetch<T>(query, params, {
      next: {
        tags,
        revalidate: process.env.NODE_ENV === 'production' ? 60 : 0,
      },
    })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return [] as T
  }
}
