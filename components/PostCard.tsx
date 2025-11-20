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
    <article className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-2xl font-semibold mb-2 hover:text-green-600 transition-colors text-black">
          {post.title}
        </h3>
        <time className="text-sm text-black">{post.date}</time>
        {post.description && (
          <p className="mt-3 text-black">{post.description}</p>
        )}
        <span className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium">
          Read More →
        </span>
      </Link>
    </article>
  )
}

