'use client'

import Image from 'next/image'

import hero from '../assets/hero.png'
import { Banner } from './Banner'

export function Hero() {
  return (
    <section className="relative mt-24 w-full overflow-hidden">
      <Banner />
      <div className="absolute left-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-full" />
      <div className="mx-auto mt-8 flex w-full max-w-7xl items-center justify-between">
        <div className="max-w-[650px]">
          <span className="mb-2 text-sm text-pink-500">Seja livre</span>
          <h1 className="font-title text-7xl font-bold tracking-tight text-zinc-800">
            Liberdade é ter tudo em um{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Flash
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Centralize sua gestão de benefícios, despesas corporativas e muito
            mais em um só lugar. Ofereça para seus colaboradores um único cartão
            multibenefícios que também é cartão corporativo pré-pago.
          </p>
          <button
            className="mt-10 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
            transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Quero ser Flash
          </button>
        </div>
        <Image
          quality={100}
          src={hero}
          width={429}
          height={582}
          alt=""
          className="w-full max-w-lg"
        />
      </div>
    </section>
  )
}
