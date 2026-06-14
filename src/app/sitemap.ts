import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'
import { loadPosts } from '@/lib/mdx'
import { site } from '@/lib/site'

// Emit as a static file at build time (required for `output: export`).
export const dynamic = 'force-static'

const BASE_URL = site.url

function getFileMtime(filePath: string): Date {
  try {
    return fs.statSync(path.join(process.cwd(), filePath)).mtime
  } catch {
    return new Date()
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await loadPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: getFileMtime('src/app/page.tsx'), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: getFileMtime('src/app/about/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/offerings`, lastModified: getFileMtime('src/app/offerings/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insurance`, lastModified: getFileMtime('src/app/insurance/page.tsx'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: getFileMtime('src/app/contact/page.tsx'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: getFileMtime('src/app/blog/page.tsx'), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: getFileMtime('src/app/privacy/page.tsx'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/no-surprises-act`, lastModified: getFileMtime('src/app/no-surprises-act/page.tsx'), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const postPages: MetadataRoute.Sitemap = posts.map((post) => {
    const slug = post.href.replace('/blog/', '')
    return {
      url: `${BASE_URL}${post.href}`,
      lastModified: getFileMtime(`src/app/blog/${slug}/page.mdx`),
      changeFrequency: 'yearly',
      priority: 0.5,
    }
  })

  return [...staticPages, ...postPages]
}
