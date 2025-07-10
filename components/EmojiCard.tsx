'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Copy, Check, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TikTokEmoji } from '@/lib/tiktokEmojis';
import { toast } from '@/hooks/use-toast';

interface EmojiCardProps {
  emoji: TikTokEmoji;
}

export function EmojiCard({ emoji }: EmojiCardProps) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  function updateEmojiStat(id: string, type: 'copy' | 'view') {
    if (typeof window === 'undefined') return;
    const key = 'tiktokEmojiStats';
    const stats = JSON.parse(localStorage.getItem(key) || '{}');
    if (!stats[id]) stats[id] = { copy: 0, view: 0 };
    stats[id][type] += 1;
    localStorage.setItem(key, JSON.stringify(stats));
  }

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(emoji.shortcode);
      setCopied(true);
      toast({
        title: "Copied!",
        description: `${emoji.shortcode} copied to clipboard`,
      });
      setTimeout(() => setCopied(false), 2000);
      updateEmojiStat(emoji.id, 'copy');
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const viewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateEmojiStat(emoji.id, 'view');
    router.push(`/emoji/${emoji.urlSlug}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-gray-100 hover:border-pink-200">
      <CardContent className="p-4 text-center" onClick={viewDetails}>
        <div className="relative w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
          <Image
            src={emoji.imagePath}
            alt={emoji.name}
            width={64}
            height={64}
            className="object-contain"
            unoptimized
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-sm truncate">
            {emoji.name}
          </h3>
          
          <Badge variant="secondary" className="text-xs">
            {emoji.shortcode}
          </Badge>
          
          <p className="text-xs text-gray-600 line-clamp-2">
            {emoji.shortMeaning}
          </p>
          
          <div className="flex gap-1 mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors"
              onClick={viewDetails}
            >
              <Eye className="w-3 h-3 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}