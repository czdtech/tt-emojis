import { EmojiDetailClient } from '@/components/EmojiDetailClient'
import { tiktokEmojis } from '@/lib/tiktokEmojis'
import { notFound } from 'next/navigation'

// 生成所有表情的静态参数
export async function generateStaticParams() {
  return tiktokEmojis.map(emoji => ({
    'platform-slug': emoji.urlSlug,
  }))
}

// 为每个表情页面生成元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ 'platform-slug': string }>
}) {
  const resolvedParams = await params
  const emoji = tiktokEmojis.find(
    e => e.urlSlug === resolvedParams['platform-slug']
  )

  if (!emoji) {
    return {
      title: 'Emoji Not Found - TikTok Emojis Hub',
    }
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://tiktokemojihub.org'
  const url = `${baseUrl}/emoji/${emoji.urlSlug}`
  const imageUrl = `${baseUrl}${emoji.imagePath}`

  return {
    title: `${emoji.name} ${emoji.shortcode} - TikTok Hidden Emoji | Copy & Paste`,
    description: `${emoji.meaning} Copy and paste ${emoji.name} emoji for your TikTok content. ${emoji.usage}`,
    keywords: `${emoji.name}, tiktok emoji, ${emoji.shortcode}, emoji copy paste, tiktok hidden emoji`,
    alternates: {
      canonical: url,
    },
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
  }
}

export default async function EmojiDetailPage({
  params,
}: {
  params: Promise<{ 'platform-slug': string }>
}) {
  const resolvedParams = await params
  const emoji = tiktokEmojis.find(
    e => e.urlSlug === resolvedParams['platform-slug']
  )

  if (!emoji) {
    notFound()
  }

  return <EmojiDetailClient emoji={emoji} />
}
