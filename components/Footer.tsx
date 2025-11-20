import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-300 bg-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-black text-sm">
            © {currentYear} Personal Blog. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link 
              href="/privacy" 
              className="text-black hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

