'use client'

import Image from 'next/image'

import hero from '../../../assets/hero-hr.png'

export function Hero() {
  return (
    <section className="w-full relative overflow-hidden mt-28">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mt-8">
        <div className="max-w-[650px] pb-20">
          <span className="text-sm text-pink-500 mb-2">Flash Benefícios</span>
          <h1 className="font-title font-bold text-zinc-800 text-7xl tracking-tight">
            Descubra a liberdade em um{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              Flash
            </span>
          </h1>
          <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
            Engaje o colaborador e tenha um time mais animado e feliz,
            aumentando a retenção de taletos em sua empresa!
          </p>
          <button
            className="mt-10 px-8 py-4 rounded-lg bg-pink-400 text-white font-bold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
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
          className="max-w-lg w-full rounded-tl-[80px] mr-2"
        />
      </div>
    </section>
  )
}
