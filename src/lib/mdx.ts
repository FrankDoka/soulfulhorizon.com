import AuthorPhoto from '@public/img/sh/emmanuelle.webp'
import { type LucideIcon } from 'lucide-react'
import glob from 'fast-glob'
import { type ImageProps, type StaticImageData } from 'next/image'
import { z } from 'zod'

// Zod schemas for build-time validation of MDX metadata
const postSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
  type: z.enum(['Article', 'Reflection', 'Guide']),
  icon: z.any(),
  image: z.any().optional(),
  tags: z.array(z.string()).optional(),
  author: z.object({ name: z.string(), image: z.any() }).optional(),
})

async function loadEntries<T extends MDX>(
  directory: string,
  metaName: string,
  schema: z.ZodType
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
        const raw = (await import(`../app/${directory}/${filename}`))[metaName]
        const result = schema.safeParse(raw)
        if (!result.success) {
          const issues = result.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n')
          throw new Error(`Invalid ${metaName} metadata in ${directory}/${filename}:\n${issues}`)
        }
        const metadata = raw as T
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`
        }
      })
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T extends MDX> = T & {
  metadata: T
}

interface MDX {
  title: string
  description: string
  date: string
  href: string
  tags?: string[]
}

export interface Post extends MDX {
  icon: LucideIcon
  image?: StaticImageData
  type: 'Article' | 'Reflection' | 'Guide'
  author: {
    name: string
    image: ImagePropsWithOptionalAlt
  }
}

export const BlogPost = {
  type: 'Article' as const,
  author: {
    name: 'Emmanuelle Lajeunesse, LCSW',
    image: {
      src: AuthorPhoto,
      alt: 'Emmanuelle Lajeunesse, LCSW',
    },
  },
}

export function loadPosts() {
  return loadEntries<Post>('blog', 'post', postSchema)
}
