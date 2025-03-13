'use client'
import { useMobileState } from "@/lib/state"
import Image from "next/image"
import Link from "next/link"

const Index = () => {
    const {value, updateValue} = useMobileState(state => state)
    
  return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          
            <Image src="/logo.png" alt="Atlassian Jira" width={120} height={40} />
          
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/features" className="text-gray-700 hover:text-blue-600">
          Features
        </Link>
        <Link href="/product-guide" className="text-gray-700 hover:text-blue-600">
          Product Guide
        </Link>
        <Link href="/templates"className="text-gray-700 hover:text-blue-600">
          Templates
        </Link>
        <Link href="/pricing"className="text-gray-700 hover:text-blue-600">
          Pricing
        </Link>
        <Link href="/enterprise"className="text-gray-700 hover:text-blue-600">
          Enterprise
        </Link>
      </div>

      {/* CTA Button (Desktop Only) */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get it Free
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={()=>updateValue(!value)} className="text-gray-700 focus:outline-none">
          {value ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    {value && (
      <div className="md:hidden bg-white border-t border-gray-200">
        <div className="px-4 py-2 flex flex-col space-y-2">
          <Link href="/features" onClick={() => updateValue(false)} className="text-gray-700 hover:text-blue-600">
            
              Features
            
          </Link>
          <Link href="/product-guide" onClick={() => updateValue(false)} className="text-gray-700 hover:text-blue-600">
              Product Guide
          </Link>
          <Link href="/templates" onClick={() => updateValue(false)} className="text-gray-700 hover:text-blue-600">
              Templates
            
          </Link>
          <Link href="/pricing" onClick={() => updateValue(false)} className="text-gray-700 hover:text-blue-600">
              Pricing
          </Link>
          <Link href="/enterprise" onClick={() => updateValue(false)} className="text-gray-700 hover:text-blue-600">
              Enterprise
          </Link>
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => updateValue(false)}
          >
            Get it Free
          </button>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Index