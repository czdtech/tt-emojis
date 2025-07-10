import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-left">
          We value your feedback and are here to help! If you have any
          questions, suggestions, or want to report an issue, please reach out
          to us.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">
            <a
              href={`mailto:${
                process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
                'support@tiktokemojihub.org'
              }`}
              className="text-blue-600 underline"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
                'support@tiktokemojihub.org'}
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Feedback & Suggestions
          </h2>
          <p className="text-gray-700">
            We welcome your ideas to improve TikTok Emojis Hub. Please email us
            or use the feedback form below.
          </p>
        </div>
        {/* 可扩展：后续可加表单 */}
      </main>
      <Footer />
    </div>
  )
}
