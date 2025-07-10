import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Your privacy is important to us. This Privacy Policy explains how
          TikTok Emojis Hub handles your information.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            No Account or Registration
          </h2>
          <p className="text-gray-700">
            We do not require you to create an account or provide any personal
            information to use this website.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Local Usage Data</h2>
          <p className="text-gray-700">
            We only store emoji usage statistics (such as copy counts) in your
            own browser using localStorage. This data is never sent to our
            servers or shared with third parties.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            No Tracking or Analytics
          </h2>
          <p className="text-gray-700">
            We do not use cookies, analytics, or any third-party tracking
            scripts. Your activity on this site is not monitored or tracked.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Content Usage</h2>
          <p className="text-gray-700">
            This site is for informational and entertainment purposes only. All
            emoji images and data are provided for personal, non-commercial use.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
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
            .
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
