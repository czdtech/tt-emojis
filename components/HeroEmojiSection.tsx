'use client';

import { useState } from 'react';
import { Copy, Search, Heart } from 'lucide-react';
import { EmojiCard } from '@/components/EmojiCard';
import { SearchBar } from '@/components/SearchBar';
import { TikTokEmoji } from '@/lib/tiktokEmojis';

interface HeroEmojiSectionProps {
  emojis: TikTokEmoji[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function HeroEmojiSection({ emojis, searchTerm, setSearchTerm }: HeroEmojiSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-cyan-50 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-400/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero 内容 */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              TikTok Emojis
            </span>
          </h1>

        </div>
          {/* 搜索栏 */}
          <div className="mb-12">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        {/* 表情符号网格 */}
        <div id="emojis" className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {emojis.length} TikTok Hidden Emojis Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click any emoji to copy it instantly. These exclusive emojis are only available on TikTok and can make your content stand out.
            </p>
          </div>

          {emojis.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">未找到表情符号</h3>
              <p className="text-gray-600">尝试调整搜索词或浏览所有表情符号。</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {emojis.map((emoji) => (
                <EmojiCard key={emoji.id} emoji={emoji} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 