import Image from 'next/image'

import card from '../assets/mock-expense.png'

export function Expense() {
  return (
    <section className="w-full pt-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Image src={card} alt="" />

        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">Inovação</span>
          <h4 className="font-title text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Flash Expense
            </span>
            : Organize as despesas corporativas da sua empresa
          </h4>
          <p className="mt-6 leading-relaxed">
            Cuidar das despesas e reembolsos dos colaboradores ficou mais fácil
            com a Flash Expense. Tenha uma visão completa e personalizada de
            todas as despesas: adiantamentos, relatórios, prestação de contas e
            muito mais. Tudo pelo app e plataforma. É o fim da papelada!
          </p>

          <button
            className="mt-6 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
            transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Ler mais
          </button>
        </div>
      </div>
    </section>
  )
}
