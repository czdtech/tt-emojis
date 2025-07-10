'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Copy, Check, Share2, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { tiktokEmojis, TikTokEmoji } from '@/lib/tiktokEmojis';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import crypto from 'crypto';

interface EmojiDetailClientProps {
  emoji: TikTokEmoji;
}

function seededShuffle<T>(array: T[], seed: number): T[] {
  // Simple seeded shuffle (Fisher-Yates)
  const result = array.slice();
  let m = result.length, t, i;
  let random = mulberry32(seed);
  while (m) {
    i = Math.floor(random() * m--);
    t = result[m];
    result[m] = result[i];
    result[i] = t;
  }
  return result;
}

function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function updateEmojiStat(id: string, type: 'copy' | 'view') {
  if (typeof window === 'undefined') return;
  const key = 'tiktokEmojiStats';
  const stats = JSON.parse(localStorage.getItem(key) || '{}');
  if (!stats[id]) stats[id] = { copy: 0, view: 0 };
  stats[id][type] += 1;
  localStorage.setItem(key, JSON.stringify(stats));
}

export function EmojiDetailClient({ emoji }: EmojiDetailClientProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [relatedEmojis, setRelatedEmojis] = useState<TikTokEmoji[]>([]);
  const [popularEmojis, setPopularEmojis] = useState<TikTokEmoji[]>([]);

  useEffect(() => {
    // 每12小时一个周期
    const now = Date.now();
    const period = Math.floor(now / (12 * 60 * 60 * 1000));
    // 用emoji.id和period生成种子
    const idNum = parseInt(emoji.id, 10) || 0;
    const seed = period * 1000 + idNum;
    const shuffled = seededShuffle(tiktokEmojis, seed);
    const related = shuffled.filter(e => e.id !== emoji.id).slice(0, 6);
    setRelatedEmojis(related);
  }, [emoji]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const key = 'tiktokEmojiStats';
    const stats = JSON.parse(localStorage.getItem(key) || '{}');
    const sorted = [...tiktokEmojis]
      .map(e => ({ ...e, _copy: stats[e.id]?.copy || 0 }))
      .sort((a, b) => b._copy - a._copy)
      .slice(0, 8);
    setPopularEmojis(sorted.filter(e => e._copy > 0));
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emoji.shortcode);
      setCopied(true);
      toast({
        title: "Copied!",
        description: `${emoji.shortcode} copied to clipboard`,
      });
      updateEmojiStat(emoji.id, 'copy');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = emoji.imagePath;
    link.download = `${emoji.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareEmoji = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${emoji.name} - TikTok Emoji`,
          text: `Check out this TikTok emoji: ${emoji.unicode} ${emoji.name}`,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copying URL
        copyUrlToClipboard();
      }
    } else {
      copyUrlToClipboard();
    }
  };

  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Emoji page link copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Share failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 hover:bg-pink-50 hover:text-pink-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Emoji Display */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={emoji.imagePath}
                    alt={emoji.name}
                    width={128}
                    height={128}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{emoji.name}</h1>
                <Badge variant="secondary" className="text-lg px-4 py-2 mb-6">
                  {emoji.shortcode}
                </Badge>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={copyToClipboard}
                    className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white hover:from-pink-600 hover:to-cyan-500 text-lg px-8 py-3"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 mr-2" />
                        Copy Emoji
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={downloadImage}
                    className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-lg px-8 py-3"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emoji Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  Emoji Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Meaning</h3>
                  <p className="text-gray-700 leading-relaxed">{emoji.meaning}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Usage</h3>
                  <p className="text-gray-700 leading-relaxed">{emoji.shortMeaning}</p>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Category</h3>
                    <Badge variant="outline" className="text-cyan-600 border-cyan-600 capitalize">
                      {emoji.category}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Shortcode</h3>
                    <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                      {emoji.shortcode}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Most Popular Emojis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Most Popular Emojis</CardTitle>
              </CardHeader>
              <CardContent>
                {popularEmojis.length > 0 ? (
                  <ul className="divide-y divide-gray-100">
                    {popularEmojis.map(e => (
                      <li key={e.id} className="flex items-center gap-4 py-3 cursor-pointer hover:bg-pink-50 rounded transition" onClick={() => router.push(`/emoji/${e.urlSlug}`)}>
                        <img src={e.imagePath} alt={e.name} className="w-10 h-10 rounded object-contain bg-white border" />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate">{e.name}</div>
                          <div className="text-xs text-gray-500 truncate">{e.shortMeaning}</div>
                        </div>
                        <span className="text-xs text-pink-600 font-bold ml-2">×{typeof (e as any)._copy === 'number' ? (e as any)._copy : 0}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center text-gray-400 text-sm py-4">No popular emojis yet</div>
                )}
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                    <span>Copy the emoji using the button above</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                    <span>Open TikTok and create your content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                    <span>Paste the emoji in your caption or comment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                    <span>Share your unique content!</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Related Emojis */}
            {relatedEmojis.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Related Emojis</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center items-center">
                  {relatedEmojis.map((e) => (
                    <div key={e.id} className="flex flex-col items-center cursor-pointer" onClick={() => router.push(`/emoji/${e.urlSlug}`)}>
                      <div className="relative w-10 h-10 mb-1">
                        <Image
                          src={e.imagePath}
                          alt={e.name}
                          width={40}
                          height={40}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-xs text-gray-700 truncate w-12 text-center">{e.name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}