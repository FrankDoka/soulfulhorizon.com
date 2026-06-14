import { ImageResponse } from 'next/og'

// Prerender at build time (required for `output: export`).
export const dynamic = 'force-static'

export const alt = 'Soulful Horizon LCSW, PLLC — Faith-Based Therapy & Coaching'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#143b45',
          color: '#faf6ee',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #2c6e7a',
            borderRadius: '24px',
            padding: '60px 80px',
            maxWidth: '960px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: '-2px', color: '#e0b878' }}>
            Soulful Horizon
          </div>
          <div style={{ fontSize: 28, color: '#b7c6c9', marginTop: '16px' }}>
            Faith-Based Therapy &amp; Mental Health Coaching
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '32px',
              fontSize: 20,
              color: '#8aa0a4',
            }}
          >
            <span>Anxiety</span>
            <span>·</span>
            <span>Depression</span>
            <span>·</span>
            <span>Trauma</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '32px', fontSize: 18, color: '#8aa0a4' }}>
          soulfulhorizon.com
        </div>
      </div>
    ),
    { ...size }
  )
}
