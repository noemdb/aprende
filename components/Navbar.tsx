'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">
                StudentQwen
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium">Características</a>
              <a href="#benefits" className="text-gray-700 hover:text-indigo-600 font-medium">Beneficios</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium">Cómo Funciona</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium">Testimonios</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white gradient-bg hover:opacity-90 transition-opacity"
            >
              Comenzar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">Características</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">Beneficios</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">Cómo Funciona</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">Testimonios</a>
            <a
              href="#cta"
              className="mt-4 block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}