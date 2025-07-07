'use client';

import { useState } from 'react';
import { EmojiCard } from '@/components/EmojiCard';
import { TikTokEmoji } from '@/lib/tiktokEmojis';

interface EmojiGridProps {
  emojis: TikTokEmoji[];
}

export function EmojiGrid({ emojis }: EmojiGridProps) {
  return (
    <section id="emojis" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {emojis.length} TikTok Hidden Emojis
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click any emoji to copy it instantly. These exclusive emojis are only available on TikTok and can make your content stand out.
        </p>
      </div>

      {emojis.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No emojis found</h3>
          <p className="text-gray-600">Try adjusting your search terms or browse all emojis.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {emojis.map((emoji) => (
            <EmojiCard key={emoji.id} emoji={emoji} />
          ))}
        </div>
      )}
    </section>
  );
}