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

  const url = `https://tiktokemojishub.com/emoji/${emoji.id}`;
  const imageUrl = `https://tiktokemojishub.com${emoji.imagePath}`;

  return {
    title: `${emoji.name} ${emoji.shortcode} - TikTok Hidden Emoji | Copy & Paste`,
    description: `${emoji.meaning} Copy and paste ${emoji.name} emoji for your TikTok content. ${emoji.usage}`,
    keywords: `${emoji.name}, tiktok emoji, ${emoji.shortcode}, emoji copy paste, tiktok hidden emoji`,
    openGraph: {
      title: `${emoji.name} ${emoji.shortcode} - TikTok Hidden Emoji | Copy & Paste`,
      description: `${emoji.meaning} Copy and paste ${emoji.name} emoji for your TikTok content.`,
      url,
      siteName: 'TikTok Emojis Hub',
      images: [
        {
          url: imageUrl,
          width: 400,
          height: 400,
          alt: `${emoji.name} TikTok Emoji`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${emoji.name} ${emoji.shortcode} - TikTok Hidden Emoji | Copy & Paste`,
      description: `${emoji.meaning}`,
      images: [imageUrl],
    },
  };
}

export default function EmojiDetailPage({ params }: { params: { id: string } }) {
  const emoji = tiktokEmojis.find(e => e.id === params.id);
  
  if (!emoji) {
    notFound();
  }

  return <EmojiDetailClient emoji={emoji} />;
}