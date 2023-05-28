import Image from 'next/image'

import cards from '../assets/cards.png'

export function About() {
  return (
    <section className="w-full py-20">
      <div className="w-full max-w-7xl mx-auto flex justify-between gap-16 items-center">
        <Image src={cards} alt="" />
        <div className="max-w-xl">
          <span className="text-sm text-pink-500 mb-2">Facilidade</span>
          <h4 className="font-title text-5xl font-bold">
            Tudo, tudo, tudo em um só{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              cartão
            </span>
          </h4>
          <p className="leading-relaxed mt-6">
            Tenha vários benefícios em um único cartão, aceito em mais de 4
            milhões de estabelecimentos pela Mastercard®️. Para pagar é só
            aproximar.
          </p>

          <button
            className="mt-10 px-8 py-4 rounded-lg bg-pink-400 text-white font-bold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
          >
            Conhecer produto
          </button>
        </div>
      </div>
    </section>
  )
}
