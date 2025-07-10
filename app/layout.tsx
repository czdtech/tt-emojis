import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fredoka } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: 'TikTok Emojis - 46 Hidden TikTok Emojis | Copy & Paste TikTok Emojis',
  description: 'Discover all 46 exclusive TikTok hidden emojis. Copy and paste unique emojis for your TikTok content. The ultimate resource for TikTok creators and enthusiasts.',
  keywords: 'tiktok emojis, tiktok hidden emojis, tiktok emoji meaning, tiktok emoji copy paste',
  authors: [{ name: 'TikTok Emojis Hub' }],
  creator: 'TikTok Emojis Hub',
  publisher: 'TikTok Emojis Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tiktokemojishub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TikTok Emojis - 46 Hidden TikTok Emojis | Copy & Paste TikTok Emojis',
    description: 'Discover all 46 exclusive TikTok hidden emojis. Copy and paste unique emojis for your TikTok content. The ultimate resource for TikTok creators and enthusiasts.',
    url: 'https://tiktokemojishub.com',
    siteName: 'TikTok Emojis Hub',
    images: [
      {
        url: '/emojis/tiktok-emoji-list.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Emojis  - Hidden Emojis Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Emojis - 46 Hidden TikTok Emojis | Copy & Paste TikTok Emojis',
    description: 'Discover all 46 exclusive TikTok hidden emojis. Copy and paste unique emojis for your TikTok content.',
    images: ['/emojis/tiktok-emoji-list.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tiktokemojishub.com" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TikTok Emojis",
              "url": "https://tiktokemojishub.com",
              "description": "Discover all 46 exclusive TikTok hidden emojis. Copy and paste unique emojis for your TikTok content.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://tiktokemojishub.com/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className + ' ' + fredoka.variable}>{children}</body>
    </html>
  );
}