import Image from 'next/image'

import flashLogo from '../assets/flash-logo.png'
import { Navigation } from './Navigation'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-6">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              src={flashLogo}
              alt="Logo Flash Benefícios"
              className="w-28"
            />
          </Link>
          <Navigation />
        </div>

        <div className="flex items-center gap-10">
          <a
            href=""
            className="text-sm font-semibold text-zinc-600 hover:text-pink-600"
          >
            Entrar
          </a>
          <button
            className="flex items-center justify-center rounded-full border-2 border-pink-400 bg-pink-400 px-3 py-2 text-sm font-semibold text-white
                        transition-colors duration-200 hover:bg-transparent hover:text-zinc-600"
          >
            Contratar agora
          </button>
        </div>
      </div>
    </header>
  )
}
