'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 backdrop-blur-[100px] bg-white/30' 
          : 'absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="w-full px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Blog
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Posts
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

