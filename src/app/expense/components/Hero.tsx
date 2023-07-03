'use client'

import Image from 'next/image'

import hero from '../../../assets/hero-expense.png'

export function Hero() {
  return (
    <section className="relative mt-28 w-full overflow-hidden">
      <div className="ml-auto mt-8 flex w-full max-w-[calc(100vw-(100vw-1280px)/2)] items-center gap-16">
        <div className="max-w-[700px] pb-20">
          <span className="mb-2 text-sm text-pink-500">Flash Expense</span>
          <h1 className="font-title text-6xl font-bold tracking-tight text-zinc-800">
            Gerencie as despesas da sua empresa com{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Flash Expense
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Diga adeus às papeladas de reembolso com a ferramenta mais completa
            e segura para gerenciamento de gastos corporativos.
          </p>
          <button
            className="mt-10 rounded-lg border-2 border-pink-400 bg-pink-400 px-8 py-4 font-bold text-white
                        transition-colors duration-200 hover:bg-transparent hover:text-zinc-600"
          >
            Agendar uma demonstração
          </button>
        </div>
        <div className="h-[566px] overflow-hidden">
          <Image
            quality={100}
            src={hero}
            height={586}
            alt=""
            priority={true}
            className="mr-2 h-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  )
}
