"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h2 className="text-4xl font-bold">AAQwire</h2>
          <p className="text-sm font-sans text-gray-500">Delivering Solutions</p>
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
          <div className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden">
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