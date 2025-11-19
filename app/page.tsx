import Link from 'next/link'
import { getPosts, type Post } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function Home() {
  let posts: Post[] = []
  try {
    posts = getPosts()
  } catch (error) {
    console.error('Error loading posts:', error)
    posts = []
  }

  const featuredPosts = posts.slice(0, 3) // 히어로 영역용 최신 3개 포스트

  return (
    <div className="-mt-[100px]">
      {/* 히어로 영역 */}
      <section className="w-full h-[400px] bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center mb-16">
        <div className="max-w-6xl mx-auto px-4 text-center pt-[100px]">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A space to share stories about development and daily life.
          </p>
        </div>
      </section>

      {/* 최신 포스트 3개 */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        {featuredPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            {/* 모든 포스트 보기 버튼 */}
            {posts.length > 3 && (
              <div className="text-center mt-8">
                <Link 
                  href="/blog" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View All Posts →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No posts yet.</p>
          </div>
        )}
      </div>

      {/* 소개 페이지 진입점 */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you'd like to know more about me, check out the about page.
            </p>
            <Link 
              href="/about"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              View About Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

