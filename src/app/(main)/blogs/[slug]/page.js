import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import DateFormatter from "@/components/date-formatter";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default async function BlogContent({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const wordCount = (post.content || "").trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <article className="mx-auto w-full max-w-3xl">
      <Link
        href="/blogs"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" />
        All articles
      </Link>

      <header className="mt-8 border-b border-border/70 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <DateFormatter dateString={post.date} />
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <span>{readingTime} min read</span>
        </div>
        <h1 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {post.excerpt}
          </p>
        )}
        {post.author?.name && (
          <p className="mt-5 text-sm text-muted-foreground">
            Written by{" "}
            <span className="font-medium text-foreground">Anas</span>
          </p>
        )}
      </header>

      <div
        className="markdown mt-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer className="mt-14 flex flex-col gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" />
          Back to all articles
        </Link>
        <a
          href="mailto:muhammadanasbinadam@gmail.com"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Share feedback
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </footer>
    </article>
  );
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Anas`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
