import Image from 'next/image'
import Link from 'next/link'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { type MDXEntry, type Post } from '@/lib/mdx'
import { getReadingTime } from '@/lib/readingTime'

export function ArticleList({ articles }: { articles: Array<MDXEntry<Post>> }) {
  if (articles.length === 0) {
    return <p className="text-center text-[var(--theme-text-secondary)]">No posts here yet.</p>
  }
  return (
    <FadeInStagger className="grid gap-8 sm:grid-cols-2">
      {articles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((article) => {
          const mins = getReadingTime(article.href.replace('/blog/', ''))
          return (
            <FadeIn key={article.href}>
              <Link
                href={article.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--theme-bg-surface)] shadow-sm ring-1 ring-[var(--theme-card-border)] transition hover:shadow-md"
              >
                {article.image && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      placeholder="blur"
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-sm text-[var(--brand-gold-ink)]">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                    {mins > 0 && (
                      <>
                        <span className="text-[var(--theme-text-muted)]">·</span>
                        <span className="text-[var(--theme-text-muted)]">{mins} min read</span>
                      </>
                    )}
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--brand-teal)]">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base text-[var(--theme-text-secondary)]">{article.description}</p>
                  <span className="mt-5 text-sm font-semibold text-[var(--brand-gold-ink)] transition group-hover:text-[#b07f33]">
                    Read More »
                  </span>
                </div>
              </Link>
            </FadeIn>
          )
        })}
    </FadeInStagger>
  )
}
