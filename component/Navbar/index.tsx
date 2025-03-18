'use client'
import { useMobileState } from "@/lib/state"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react';


const Index = () => {
    const {value, updateValue} = useMobileState(state => state)
    
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Logo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-gray-700 hover:text-blue-600">Features</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 hidden group-hover:block bg-white border rounded-lg shadow-lg py-2 w-48">
                <a href="/solution1" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solution 1</a>
                <a href="/solution2" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solution 2</a>
                <a href="/solution3" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solution 3</a>
              </div>
            </div>
            <a href="/product-guide" className="text-gray-700 hover:text-blue-600">Product guide</a>
            <a href="/templates" className="text-gray-700 hover:text-blue-600">Templates</a>
            <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/signin" className="text-gray-700 hover:text-blue-600">Sign in</a>
            <a
              href="/get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get it free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={()=>updateValue(!value)}
              className="text-gray-700 hover:text-blue-600"
            >
              {value ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {value && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="/features"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Features
            </a>
            <div
              className="relative group"
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600">
              

              Solutions
              <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-4 hidden group-hover:block bg-white border rounded-lg shadow-lg py-2 w-48">
                <a href="/solution1" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solution 1</a>
                <a href="/solution2" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solution 2</a>
                <a href="/solution3" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Solution 3</a>
              </div>

            </div>
            <a
              href="/product-guide"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Product guide
            </a>
            <a
              href="/templates"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Templates
            </a>
            <a
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Pricing
            </a>
            <div className="pt-4 space-y-2">
              <a
                href="/signin"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Sign in
              </a>
              <a
                href="/get-started"
                className="block px-3 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Get it free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Index