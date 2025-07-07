'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, MessageSquare, Video, Lightbulb } from 'lucide-react';

export function GuideSection() {
  return (
    <section id="guide" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How to Use TikTok Hidden Emojis
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Follow these simple steps to unlock and use TikTok's exclusive hidden emojis in your content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg">Step 1: Copy Emoji</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Click any emoji above to copy it to your clipboard instantly.</p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg">Step 2: Open TikTok</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Launch TikTok and start creating your video or writing a comment.</p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <Video className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg">Step 3: Paste Emoji</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Paste the emoji in your caption, comment, or video description.</p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg">Step 4: Go Viral!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Share your content with unique emojis that make you stand out!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="text-pink-600 border-pink-600">Engagement</Badge>
              <p className="text-gray-600">Use emojis strategically in your captions to increase engagement and make your content more discoverable.</p>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="text-cyan-600 border-cyan-600">Trending</Badge>
              <p className="text-gray-600">Combine trending hashtags with unique emojis to maximize your reach and visibility.</p>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="text-purple-600 border-purple-600">Creativity</Badge>
              <p className="text-gray-600">Mix hidden emojis with regular ones to create unique emoji combinations that express your personality.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="text-green-600 border-green-600">Moderation</Badge>
              <p className="text-gray-600">Don't overuse emojis - 3-5 per caption is usually optimal for readability and impact.</p>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="text-blue-600 border-blue-600">Relevance</Badge>
              <p className="text-gray-600">Choose emojis that match your content's mood and message to enhance rather than distract.</p>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="text-orange-600 border-orange-600">Testing</Badge>
              <p className="text-gray-600">Test different emoji combinations to see which ones resonate best with your audience.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}