import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Please read these Terms of Service carefully before using TikTok
          Emojis Hub.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Personal, Non-Commercial Use
          </h2>
          <p className="text-gray-700">
            This website and its content are provided for personal,
            non-commercial use only. You may not use the site or its resources
            for any commercial purpose without prior written consent.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">No Account Required</h2>
          <p className="text-gray-700">
            You do not need to register or provide personal information to use
            this site.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">No Warranty</h2>
          <p className="text-gray-700">
            This site is provided "as is" without warranties of any kind. We do
            not guarantee the accuracy, completeness, or availability of the
            content.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
          <p className="text-gray-700">
            You agree to use this site in compliance with all applicable laws
            and regulations. Do not use the site for any unlawful or harmful
            purpose.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Intellectual Property & Copyright
          </h2>
          <p className="text-gray-700">
            All emoji images and content are for informational and entertainment
            purposes. If you believe any content infringes your rights, please
            contact us at{' '}
            <a
              href={`mailto:${
                process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
                'support@tiktokemojihub.org'
              }`}
              className="text-blue-600 underline"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
                'support@tiktokemojihub.org'}
            </a>{' '}
            and we will address your concerns promptly.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to update or modify these Terms of Service at
            any time. Continued use of the site constitutes acceptance of the
            latest terms.
          </p>
        </div>
      </main>
      <div className="text-center text-xs text-gray-400 pb-6">
        Last updated: July 7, 2025
      </div>
      <Footer />
    </div>
  )
}
