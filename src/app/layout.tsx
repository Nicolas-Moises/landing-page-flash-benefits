import './globals.css'
import { Nunito_Sans, Familjen_Grotesk } from 'next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' })
const familjenGrotesk = Familjen_Grotesk({ subsets: ['latin'], variable: '--font-familjen-grotesk', weight: '700' })

export const metadata = {
  title: 'Flash Benefícios',
  description: 'Uma landing page criada com Nextjs, Tailwindcss e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${familjenGrotesk.variable} bg-pink-50 text-pink-800 font-sans`}>{children}</body>
    </html>
  )
}
