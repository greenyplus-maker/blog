import { getPosts, type Post } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function BlogPage() {
  let posts: Post[] = []
  try {
    posts = getPosts()
  } catch (error) {
    console.error('Error loading posts:', error)
    posts = []
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>
      
      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <p className="text-gray-500">No posts yet.</p>
        )}
      </div>
    </div>
  )
}

