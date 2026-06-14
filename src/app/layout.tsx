import { RootLayout } from '@/components/layout/RootLayout'
import '@/style/tailwind.css'
import { type Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import Script from 'next/script'

// Warm humanist serif for headings (self-hosted at build time), paired with the
// existing Mona Sans for body text — gives the site a softer, editorial feel.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soulfulhorizon.com'),
  title: {
    template: '%s | Soulful Horizon',
    default: 'Soulful Horizon LCSW, PLLC | Faith-Based Therapy & Coaching',
  },
  creator: 'Soulful Horizon LCSW, PLLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    siteName: 'Soulful Horizon',
    type: 'website',
    url: 'https://soulfulhorizon.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  keywords: [
    'Soulful Horizon',
    'Emmanuelle Lajeunesse LCSW',
    'faith-based therapy',
    'Christian counseling',
    'online therapy New York',
    'online therapy Tennessee',
    'New York therapist',
    'Tennessee therapist',
    'anxiety therapy',
    'depression therapy',
    'trauma therapy',
    'mental health coaching',
    'life coaching',
    'individual therapy',
    'group sessions',
    'Spanish speaking therapist',
    'Haitian Creole therapist',
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Mona-Sans.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col text-base" suppressHydrationWarning>
        <RootLayout>{children}</RootLayout>
        {/* The SimplePractice booking/contact widget is loaded lazily on first
            click by <SpLink> (see SimplePractice.tsx) to keep initial load fast. */}
        {/* Clean up the old service worker from earlier builds so returning
            visitors never get served a stale cached version. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister()})});if(window.caches){caches.keys().then(function(ks){ks.forEach(function(k){caches.delete(k)})})}}`,
          }}
        />
        {process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
