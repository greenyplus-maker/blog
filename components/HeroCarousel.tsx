'use client'

import { useState, useEffect } from 'react'

interface HeroColor {
  bgColor: string
  name: string
}

const heroColors: HeroColor[] = [
  {
    bgColor: 'bg-green-600',
    name: 'Green'
  },
  {
    bgColor: 'bg-black',
    name: 'Black'
  },
  {
    bgColor: 'bg-white',
    name: 'White'
  }
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroColors.length)
    }, 5000) // 5초마다 변경

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {heroColors.map((color, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${color.bgColor}`}
        />
      ))}
      
      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroColors.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-green-600 w-8'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

