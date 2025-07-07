'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Search, Heart } from 'lucide-react';
import { EmojiCard } from '@/components/EmojiCard';
import { SearchBar } from '@/components/SearchBar';
import { TikTokEmoji } from '@/lib/tiktokEmojis';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface HeroEmojiSectionProps {
  emojis: TikTokEmoji[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function HeroEmojiSection({ emojis, searchTerm, setSearchTerm }: HeroEmojiSectionProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelect = (id: string, checked: boolean) => {
    setSelectedIds(prev => checked ? [...prev, id] : prev.filter(i => i !== id));
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    const folder = zip.folder('tiktok-emojis');
    for (const emoji of emojis) {
      if (emoji.imagePath) {
        const response = await fetch(emoji.imagePath);
        const blob = await response.blob();
        folder?.file(emoji.imagePath.split('/').pop() || 'emoji.png', blob);
      }
    }
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'tiktok-emojis.zip');
  };

  const handleDownloadSelected = async () => {
    const zip = new JSZip();
    const folder = zip.folder('tiktok-emojis-selected');
    const selectedEmojis = emojis.filter(e => selectedIds.includes(e.id));
    for (const emoji of selectedEmojis) {
      if (emoji.imagePath) {
        const response = await fetch(emoji.imagePath);
        const blob = await response.blob();
        folder?.file(emoji.imagePath.split('/').pop() || 'emoji.png', blob);
      }
    }
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'selected-tiktok-emojis.zip');
  };

  useEffect(() => {
    const handler = () => handleDownloadAll();
    window.addEventListener('download-all', handler);
    return () => window.removeEventListener('download-all', handler);
  }, [emojis]);

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
              {emojis.length} TikTok Emojis Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and copy all exclusive tiktok emojis. These tiktok emojis are only available on TikTok and can make your content stand out. Use tiktok emojis to make your TikTok content unique!
            </p>
          </div>

          {emojis.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No tiktok emojis found</h3>
              <p className="text-gray-600">Try adjusting your search or browse all tiktok emojis.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {emojis.map((emoji) => (
                <div className="relative">
                  <input
                    type="checkbox"
                    className="absolute left-2 top-2 z-10 w-4 h-4 accent-blue-600"
                    checked={selectedIds.includes(emoji.id)}
                    onChange={e => handleSelect(emoji.id, e.target.checked)}
                    aria-label={`Select ${emoji.name}`}
                  />
                  <EmojiCard key={emoji.id} emoji={emoji} />
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={handleDownloadAll}
            >
              Download All
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:bg-gray-300 disabled:text-gray-500"
              onClick={handleDownloadSelected}
              disabled={selectedIds.length === 0}
            >
              Download Selected
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 