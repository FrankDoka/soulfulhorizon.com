import { MetadataRoute } from 'next'

// Emit as a static file at build time (required for `output: export`).
export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Soulful Horizon LCSW, PLLC',
    short_name: 'Soulful Horizon',
    description:
      'Faith-based individual therapy, group sessions, and mental health coaching for anxiety, depression, and trauma.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf6ee',
    theme_color: '#1e5663',
    icons: [
      {
        src: '/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}
