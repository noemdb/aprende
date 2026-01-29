import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StudentQwen - Ecosistema Educativo Inteligente',
  description: 'Plataforma integral de gestión académica y gamificación con IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}