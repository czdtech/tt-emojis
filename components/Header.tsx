'use client';

import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              TikTok Emojis
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-pink-500 transition-colors">
              Home
            </a>
            <a href="/#emojis" className="text-gray-700 hover:text-pink-500 transition-colors">
              Emojis
            </a>
            <a href="/#guide" className="text-gray-700 hover:text-pink-500 transition-colors">
              Guide
            </a>
            <a href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
              About
            </a>
            <Button
              className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white hover:from-pink-600 hover:to-cyan-500"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('download-all'));
                }
              }}
            >
              Download
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
            <a href="/" className="text-gray-700 hover:text-pink-500 transition-colors">
                Home
              </a>
              <a href="/#emojis" className="text-gray-700 hover:text-pink-500 transition-colors">
                Emojis
              </a>
              <a href="/#guide" className="text-gray-700 hover:text-pink-500 transition-colors">
                Guide
              </a>
              <a href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
                About
              </a>
              <Button
                className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white hover:from-pink-600 hover:to-cyan-500 w-full"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('download-all'));
                  }
                }}
              >
                Download
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}