'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { usePageContext } from '@/contexts/PageContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { pageTitle, showBackButton } = usePageContext()
  
  // Check if we're on a nested page (dynamic route)
  const isNestedPage = showBackButton || pathname.split('/').length > 2

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header 
      className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 border-b border-gray-300 backdrop-blur-[100px] bg-white/30' 
          : 'absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="w-full px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-center items-center relative">
          {isNestedPage ? (
            /* Back Button and Title for Nested Pages */
            <>
              <button
                onClick={() => router.back()}
                className="absolute left-0 text-black hover:text-green-600 transition-colors flex items-center gap-2"
                aria-label="Go back"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back</span>
              </button>
              {pageTitle && (
                <h1 className="text-lg font-semibold text-black truncate max-w-md">
                  {pageTitle}
                </h1>
              )}
            </>
          ) : (
            <>
              {/* Desktop Menu - Centered */}
              <div className="hidden md:flex gap-6">
                <Link 
                  href="/" 
                  className="text-black hover:text-green-600 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  className="text-black hover:text-green-600 transition-colors"
                >
                  Posts
                </Link>
                <Link 
                  href="/contact" 
                  className="text-black hover:text-green-600 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden absolute right-0 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Toggle menu"
              >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
            </>
          )}

          {/* Mobile Drawer Overlay - Only show on non-nested pages */}
          {!isNestedPage && isMobileMenuOpen && (
            <>
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-end p-4 border-b border-gray-300">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-black hover:text-green-600 transition-colors"
                      aria-label="Close menu"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-col px-4 py-6 gap-4 flex-grow">
                    <Link
                      href="/"
                      className="text-black hover:text-green-600 transition-colors text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/blog"
                      className="text-black hover:text-green-600 transition-colors text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Posts
                    </Link>
                    <Link
                      href="/contact"
                      className="text-black hover:text-green-600 transition-colors text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

