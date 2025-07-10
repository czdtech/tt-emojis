import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">About Us</h1>
        <p className="text-lg text-gray-700 mb-6 text-left">
          TikTok Emojis Hub is a community-driven project dedicated to collecting, explaining, and sharing all 46 hidden TikTok emojis. Our mission is to help creators and fans easily discover, copy, and use these unique emojis to make their content stand out.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            We believe in the power of creative expression. By making TikTok's exclusive emojis accessible to everyone, we hope to inspire more fun, engagement, and originality in the global TikTok community.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-700">
            This site is maintained by a small team of TikTok enthusiasts and web developers. We are not affiliated with TikTok, but we are passionate about making digital communication more expressive and enjoyable for all.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 