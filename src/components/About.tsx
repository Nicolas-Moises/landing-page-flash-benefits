import Image from 'next/image'

import cards from '../assets/cards.png'

export function About() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-16">
        <Image src={cards} alt="" />
        <div className="max-w-xl">
          <span className="mb-2 text-sm text-pink-500">Facilidade</span>
          <h4 className="font-title text-5xl font-bold">
            Tudo, tudo, tudo em um só{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              cartão
            </span>
          </h4>
          <p className="mt-6 leading-relaxed">
            Tenha vários benefícios em um único cartão, aceito em mais de 4
            milhões de estabelecimentos pela Mastercard®️. Para pagar é só
            aproximar.
          </p>

          <button
            className="mt-10 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
            transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Conhecer produto
          </button>
        </div>
      </div>
    </section>
  )
}
