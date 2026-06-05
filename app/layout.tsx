import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devesh Kumar - Portfolio',
  description: 'Business Intelligence & Product Intern at Amazon Luxembourg | HEC Paris MiM Student | Ex-GitHub, GSoC, MPL, InMobi',
  keywords: ['Devesh Kumar', 'Business Intelligence', 'Product Strategy', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Devesh Kumar' }],
  openGraph: {
    title: 'Devesh Kumar - Portfolio',
    description: 'Business Intelligence & Product Intern at Amazon Luxembourg | HEC Paris MiM Student | Ex-GitHub, GSoC, MPL, InMobi',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
