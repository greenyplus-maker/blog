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
      <section className="w-full h-[400px] bg-white flex items-center justify-center mb-16 border-b border-black">
        <div className="max-w-6xl mx-auto px-4 text-center pt-[100px]">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-600">
            Hello
          </h1>
          <p className="text-base text-black max-w-2xl mx-auto">
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
            {/* View More 버튼 */}
            <div className="text-center mt-8">
              <Link 
                href="/blog" 
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                View More →
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white border border-black rounded-lg">
            <p className="text-black">No posts yet.</p>
          </div>
        )}
      </div>

      {/* 소개 페이지 진입점 */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-white border border-black rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Learn More</h2>
            <p className="text-lg text-black mb-8">
              If you'd like to know more about me, check out the about page.
            </p>
            <Link 
              href="/about"
              className="inline-block px-8 py-4 bg-white text-green-600 border border-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              View About Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

