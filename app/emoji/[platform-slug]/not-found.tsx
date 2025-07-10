import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl mb-8">😵</div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emoji Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the TikTok emoji you're looking for. It may have been moved or doesn't exist.
          </p>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link href="/#emojis">
                <Search className="w-4 h-4 mr-2" />
                Browse All Emojis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 