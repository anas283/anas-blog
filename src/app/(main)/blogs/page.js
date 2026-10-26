import DateFormatter from '@/components/date-formatter';
import PageHeader from '@/components/page-header';
import { getAllPosts } from '@/lib/api';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Blogs() {
  const allPosts = getAllPosts();

  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Writing"
        title="Blogs"
        description="Notes on building for the web, learning in public, and the small lessons that shape good software."
      >
        <p className="shrink-0 text-sm text-muted-foreground">
          {allPosts.length} {allPosts.length === 1 ? "article" : "articles"}
        </p>
      </PageHeader>

      <div className="mt-4 divide-y divide-border/70">
        {allPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group grid gap-3 py-8 sm:grid-cols-[150px_1fr_auto] sm:gap-8 sm:py-10"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <DateFormatter dateString={post.date} />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground/70 sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
            <span className="hidden h-10 w-10 items-center justify-center self-center rounded-full border border-border text-muted-foreground transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:inline-flex">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      {allPosts.length === 0 && (
        <p className="py-16 text-center text-sm text-muted-foreground">
          Nothing published yet — check back soon.
        </p>
      )}
    </div>
  )
}

export function generateMetadata() {
  const title = 'Blogs | Anas';

  return {
    title,
  };
}
