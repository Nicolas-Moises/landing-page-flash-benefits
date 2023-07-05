'use client'
import Image from 'next/image'

import hero from '../../../assets/hero-hr-2.png'
import { Banner } from '@/components/Banner'

export function Hero() {
  return (
    <section className="relative mt-20 h-full w-full overflow-x-hidden">
      <div className="absolute left-0 top-1/2 -z-20 h-[288px] w-[726px] -translate-x-1/2 rounded-full bg-pink-600 opacity-30 blur-full" />
      <Banner />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between bg-left">
        <div className="max-w-[650px] pb-20">
          <span className="mb-2 text-sm text-pink-500">Flash Benefícios</span>
          <h1 className="font-title text-7xl font-bold tracking-tight text-zinc-800">
            Descubra a liberdade em um{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Flash
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Engaje o colaborador e tenha um time mais animado e feliz,
            aumentando a retenção de taletos em sua empresa!
          </p>
          <button
            className="mt-10 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
                        transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Agendar uma demonstração
          </button>
        </div>
        <Image
          quality={100}
          src={hero}
          width={429}
          height={582}
          alt=""
          priority={true}
          className="-z-10 mr-2 w-full max-w-xl 2xl:max-w-2xl"
        />
      </div>
    </section>
  )
}
