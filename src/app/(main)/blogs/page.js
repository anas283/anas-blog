import DateFormatter from '@/components/date-formatter';
import { getAllPosts } from '@/lib/api';
import Link from 'next/link';

export default function Blogs() {
  const allPosts = getAllPosts();

  return (
    <div>
      <div className="w-full flex flex-col gap-6">
        {allPosts.map((post, key) => {
          return (
            <Link
              key={key}
              href={`blogs/` + post.slug}
              className="cursor-pointer ease-in-out duration-150 rounded hover:bg-slate-100 hover:p-2"
            >
              <div className="flex flex-row items-center gap-2">
                <h5 className="text-lg font-medium">
                  {post.title}
                </h5>
                <h6 className="text-xs text-slate-500 mt-1">
                  <DateFormatter dateString={post.date} />
                </h6>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                {post.excerpt}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}