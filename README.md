# TikTok Emojis Hub

A comprehensive collection of all 46 hidden TikTok emojis. Copy, paste, and enhance your TikTok content with exclusive emojis.

## Features

- 📱 46 exclusive TikTok hidden emojis
- 📋 One-click copy functionality
- 💾 Bulk download support
- 🔍 Search and filter
- 📱 Fully responsive design
- ⚡ Fast static site performance
- 🔍 SEO optimized with dynamic sitemap
- 🌐 Canonical URLs for all pages
- 📊 Google Analytics & Search Console ready

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Website Domain (required for SEO and link generation)
NEXT_PUBLIC_SITE_URL=https://tiktokemojihub.org

# Support Email (required for contact and legal pages)
NEXT_PUBLIC_SUPPORT_EMAIL=support@tiktokemojihub.org

# Google Site Verification (required for Google Search Console)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-code

# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Getting Google Verification Code

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain/property
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag

### Getting Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property
3. Copy the Measurement ID (starts with G-)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# The static files will be generated in the 'out' directory
```

### Deployment

This project is configured for static export and can be deployed to:

- **Vercel** (recommended): Zero config deployment
- **Cloudflare Pages**: Unlimited bandwidth
- **GitHub Pages**: Free hosting
- **Netlify**: Easy deployment

#### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

#### Deploy to Cloudflare Pages

1. Connect repository in Cloudflare Pages dashboard
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Add environment variables in settings

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Export**: Static HTML/CSS/JS

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature components
├── lib/                  # Utility functions and data
├── public/               # Static assets
│   └── emojis/          # Emoji images
├── hooks/                # Custom React hooks
└── ...
```

## SEO Features

- ✅ Complete meta tags
- ✅ Open Graph support
- ✅ Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Google Analytics integration
- ✅ Google Search Console verification

## Performance

- ⚡ Static generation for optimal performance
- 🎯 Core Web Vitals optimized
- 📦 Minimal bundle size
- 🖼️ Optimized images
- 🚀 CDN-ready

## License

This project is for educational and personal use only. TikTok emojis are property of TikTok/ByteDance.

---

Made with ❤️ for the TikTok community
