'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroEmojiSection, FAQSection } from '@/components/HeroEmojiSection';
import { GuideSection } from '@/components/GuideSection';
import { Footer } from '@/components/Footer';
import { tiktokEmojis } from '@/lib/tiktokEmojis';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(tiktokEmojis);

  useEffect(() => {
    const filtered = tiktokEmojis.filter(emoji => 
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.shortcode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmojis(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main>
        <HeroEmojiSection 
          emojis={filteredEmojis} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        <GuideSection />
        <FAQSection />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}