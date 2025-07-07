import { notFound } from 'next/navigation';
import { tiktokEmojis } from '@/lib/tiktokEmojis';
import { EmojiDetailClient } from '@/components/EmojiDetailClient';

// Generate static params for all emoji IDs
export async function generateStaticParams() {
  return tiktokEmojis.map((emoji) => ({
    id: emoji.id,
  }));
}

// Generate metadata for each emoji page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const emoji = tiktokEmojis.find(e => e.id === params.id);
  
  if (!emoji) {
    return {
      title: 'Emoji Not Found - TikTok Emojis Hub',
    };
  }

  return {
    title: `${emoji.name} ${emoji.unicode} - TikTok Hidden Emoji | Copy & Paste`,
    description: `${emoji.meaning} Copy and paste ${emoji.name} emoji for your TikTok content. ${emoji.usage}`,
    keywords: `${emoji.name}, tiktok emoji, ${emoji.shortcode}, emoji copy paste, tiktok hidden emoji`,
  };
}

export default function EmojiDetailPage({ params }: { params: { id: string } }) {
  const emoji = tiktokEmojis.find(e => e.id === params.id);
  
  if (!emoji) {
    notFound();
  }

  return <EmojiDetailClient emoji={emoji} />;
}