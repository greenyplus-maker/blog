import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  description?: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <time className="text-sm text-gray-500">{post.date}</time>
        {post.description && (
          <p className="mt-3 text-gray-600">{post.description}</p>
        )}
        <span className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
          읽기 →
        </span>
      </Link>
    </article>
  )
}

