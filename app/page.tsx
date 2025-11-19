import Link from 'next/link'
import { getPosts, type Post } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function Home() {
  let posts: Post[] = []
  try {
    posts = getPosts().slice(0, 5) // 최신 5개 포스트만 표시
  } catch (error) {
    console.error('Error loading posts:', error)
    posts = []
  }

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">안녕하세요 👋</h1>
        <p className="text-xl text-gray-600">
          개발과 일상에 대한 이야기를 공유하는 공간입니다.
        </p>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">최신 포스트</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            모든 포스트 보기 →
          </Link>
        </div>
        
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-gray-500">아직 작성된 포스트가 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  )
}

