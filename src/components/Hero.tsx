'use client'

import Image from 'next/image'

import hero from '../assets/hero.png'

export function Hero() {
  return (
    <section className="w-full relative overflow-hidden mt-20">
      <div className="absolute left-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-500 opacity-50 blur-full" />
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mt-8">
        <div className="max-w-[650px]">
          <span className="text-sm text-pink-500 mb-2">Seja livre</span>
          <h1 className="font-title font-bold text-zinc-800 text-7xl tracking-tight">
            Liberdade é ter tudo em um{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              Flash
            </span>
          </h1>
          <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
            Centralize sua gestão de benefícios, despesas corporativas e muito
            mais em um só lugar. Ofereça para seus colaboradores um único cartão
            multibenefícios que também é cartão corporativo pré-pago.
          </p>
          <button
            className="mt-10 px-8 py-4 rounded-lg bg-pink-400 text-white font-bold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
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
          className="max-w-lg w-full"
        />
      </div>
    </section>
  )
}
