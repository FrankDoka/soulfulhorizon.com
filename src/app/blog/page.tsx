import { type Metadata } from 'next'

import { ArticleList } from '@/components/blocks/ArticleList'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { loadPosts } from '@/lib/mdx'

const description =
  'Reflections on faith, mental health, healing, and growth — practical encouragement for the journey toward wholeness.'

export const metadata: Metadata = {
  title: 'Soulful Insights',
  description,
  openGraph: {
    title: 'Soulful Insights — Soulful Horizon',
    description,
    url: 'https://soulfulhorizon.com/blog',
  },
}

export default async function Blog() {
  const articles = await loadPosts()

  return (
    <>
      <PageIntro eyebrow="Soulful Insights" title="Reflections for the Journey">
        <p>{description}</p>
      </PageIntro>

      <Container className="mt-12 sm:mt-16">
        <ArticleList articles={articles} />
      </Container>
    </>
  )
}
