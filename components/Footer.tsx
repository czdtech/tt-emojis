'use client';

import { Heart, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TikTok Emojis</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for tiktok emojis. Copy, paste, and create amazing content with exclusive tiktok emojis. Discover the world of tiktok emojis and enhance your TikTok experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#emojis" className="text-gray-400 hover:text-white transition-colors">All Emojis</a></li>
              <li><a href="/#guide" className="text-gray-400 hover:text-white transition-colors">How to Use</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Follow us for the latest TikTok emoji updates and tips.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TikTok Emojis . Made with{' '}
            <Heart className="inline w-4 h-4 text-pink-500" />{' '}
            for TikTok creators worldwide. All tiktok emojis are for personal use only.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This site is not affiliated with TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}