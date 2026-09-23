import { MetadataRoute } from 'next'
import { loadPosts } from '@/lib/mdx'
import { site } from '@/lib/site'

// Emit as a static file at build time (required for `output: export`).
export const dynamic = 'force-static'

const BASE_URL = site.url

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await loadPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/offerings`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/coaching`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insurance`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/no-surprises-act`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const postPages: MetadataRoute.Sitemap = posts.map((post) => {
    return {
      url: `${BASE_URL}${post.href}`,
      lastModified: post.updated ?? post.date,
      changeFrequency: 'yearly',
      priority: 0.5,
    }
  })

  return [...staticPages, ...postPages]
}
