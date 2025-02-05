"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AAQwire
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Products
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-900 p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/products"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 