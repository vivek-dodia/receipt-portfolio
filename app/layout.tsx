import type { Metadata, Viewport } from 'next'
import './globals.css'

const description =
  'Platform Engineer at ResiBridge. Transit, LoRaWAN, and control planes. Open source contributor.'

export const metadata: Metadata = {
  title: 'vivek.engineer',
  description,
  openGraph: {
    title: 'vivek.engineer',
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'vivek.engineer',
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
