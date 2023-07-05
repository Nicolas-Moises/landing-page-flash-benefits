/* eslint-disable camelcase */
import { ReactNode } from 'react'
import './globals.css'
import { Nunito_Sans, Familjen_Grotesk } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import 'keen-slider/keen-slider.min.css'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  fallback: ['system-ui', 'inter'],
  display: 'swap',
})
const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-familjen-grotesk',
  fallback: ['system-ui', 'mono'],
  weight: '700',
})

export const metadata = {
  title: 'Flash Benefícios',
  description: 'Uma landing page criada com Nextjs, Tailwindcss e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${familjenGrotesk.variable} overflow-x-hidden bg-zinc-50 font-sans text-zinc-600`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
