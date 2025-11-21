'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getPosts, type Post } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import HeroCarousel from '@/components/HeroCarousel'

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    try {
      const loadedPosts = getPosts()
      setPosts(loadedPosts)
    } catch (error) {
      console.error('Error loading posts:', error)
      setPosts([])
    }
  }, [])

  const featuredPosts = posts.slice(0, 3) // 히어로 영역용 최신 3개 포스트

  return (
    <div className="-mt-[100px]">
      {/* 히어로 영역 */}
      <section className="w-full h-[400px] relative mb-16 border-b border-gray-300 overflow-hidden">
        <HeroCarousel onSlideChange={setCurrentSlideIndex} />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="max-w-6xl mx-auto px-4 text-center pt-[100px] z-10">
            {currentSlideIndex === 0 ? (
              // 첫 번째 슬라이드: 그리팅 메시지
              <>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
                  Hello, I'm Luna
                </h1>
                <p className="text-xl md:text-2xl text-black mb-2 font-medium">
                  workingmom luna
                </p>
                <p className="text-base text-black max-w-2xl mx-auto">
                  Welcome to my space where I share stories about development and daily life.
                </p>
              </>
            ) : (
              // 다른 슬라이드: 기본 메시지
              <>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                  Hello
                </h1>
                <p className="text-base text-black max-w-2xl mx-auto">
                  A space to share stories about development and daily life.
                </p>
              </>
            )}
          </div>
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
          <div className="text-center py-12 bg-white border border-gray-300 rounded-lg">
            <p className="text-black">No posts yet.</p>
          </div>
        )}
      </div>

      {/* 소개 페이지 진입점 */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-white border border-gray-300 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Learn More</h2>
            <p className="text-lg text-black mb-8">
              If you'd like to know more about me, check out the about page.
            </p>
            <Link 
              href="/about"
              className="inline-block px-8 py-4 bg-white text-green-600 border border-gray-300 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              View About Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

