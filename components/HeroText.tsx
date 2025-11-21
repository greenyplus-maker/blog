'use client'

import { useState } from 'react'
import HeroCarousel from '@/components/HeroCarousel'

export default function HeroText() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <>
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
    </>
  )
}

