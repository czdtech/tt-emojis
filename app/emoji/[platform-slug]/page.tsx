import { notFound } from 'next/navigation';
import { tiktokEmojis } from '@/lib/tiktokEmojis';
import { EmojiDetailClient } from '@/components/EmojiDetailClient';

// 生成所有表情的静态参数
export async function generateStaticParams() {
  return tiktokEmojis.map((emoji) => ({
    'platform-slug': emoji.urlSlug,
  }));
}

// 为每个表情页面生成元数据
export async function generateMetadata({ params }: { params: { 'platform-slug': string } }) {
  const emoji = tiktokEmojis.find(e => e.urlSlug === params['platform-slug']);
  
  if (!emoji) {
    return {
      title: 'Emoji Not Found - TikTok Emojis Hub',
    };
  }

  const url = `https://tiktokemojishub.com/emoji/${emoji.urlSlug}`;
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

export default function EmojiDetailPage({ params }: { params: { 'platform-slug': string } }) {
  const emoji = tiktokEmojis.find(e => e.urlSlug === params['platform-slug']);
  
  if (!emoji) {
    notFound();
  }

  return <EmojiDetailClient emoji={emoji} />;
} 