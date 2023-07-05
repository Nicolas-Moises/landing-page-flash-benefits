import Image from 'next/image'

import card from '../assets/mock-corp.png'

export function Corp() {
  return (
    <section className="w-full bg-pink-100 px-6 pt-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">Praticidade</span>
          <h4 className="font-title text-5xl font-bold">
            Use o saldo corporativo e{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              simplifique
            </span>{' '}
            a gestão de gastos da sua empresa
          </h4>
          <p className="mt-6 leading-relaxed">
            Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
            faça a prestação de contas direto no aplicativo. Simples e fácil.
          </p>

          <button
            className="mt-6 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
            transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Saiba mais
          </button>
        </div>
        <Image src={card} alt="" className="shadow-2xl" />
      </div>
    </section>
  )
}
