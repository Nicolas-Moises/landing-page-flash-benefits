'use client'

import Image from 'next/image'

import hero from '../../../assets/hero-expense.png'

export function Hero() {
  return (
    <section className="w-full relative overflow-hidden mt-28">
      <div className="w-full max-w-[calc(100vw-(100vw-1280px)/2)] ml-auto flex items-center mt-8 gap-16">
        <div className="max-w-[700px] pb-20">
          <span className="text-sm text-pink-500 mb-2">Flash Expense</span>
          <h1 className="font-title font-bold text-zinc-800 text-6xl tracking-tight">
            Gerencie as despesas da sua empresa com{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              Flash Expense
            </span>
          </h1>
          <p className="text-zinc-600 text-lg mt-6 leading-relaxed max-w-2xl">
            Diga adeus às papeladas de reembolso com a ferramenta mais completa e segura para gerenciamento de gastos corporativos.
          </p>
          <button
            className="mt-10 px-8 py-4 rounded-lg bg-pink-400 text-white font-bold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
          >
            Agendar uma demonstração
          </button>
        </div>
        <div className='h-[566px] overflow-hidden'>
            <Image
            quality={100}
            src={hero}
            height={586}
            alt=""
            priority={true}
            className="h-full mr-2 object-cover object-left"
            />
        </div>
      </div>
    </section>
  )
}
