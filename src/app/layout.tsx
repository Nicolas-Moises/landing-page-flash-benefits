import { ReactNode } from 'react'
import './globals.css'
import { Nunito_Sans, Familjen_Grotesk } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import 'keen-slider/keen-slider.min.css'

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito', display: 'swap', })
const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-familjen-grotesk',
  weight: '700',
  display: 'swap',
})

export const metadata = {
  title: 'Flash Benefícios',
  description: 'Uma landing page criada com Nextjs, Tailwindcss e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${familjenGrotesk.variable} bg-zinc-50 text-pink-800 font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
