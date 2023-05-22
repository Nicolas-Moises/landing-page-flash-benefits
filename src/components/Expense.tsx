import Image from "next/image";

import card from '../assets/mock-expense.png'

export function Expense() {
    return (
        <section className="w-full pt-20">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                <Image src={card} alt="" />

                <div className="max-w-2xl">
                    <span className="text-sm text-pink-500 mb-2">Inovação</span>
                    <h4 className="font-title text-5xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">Flash Expense</span>: Organize as despesas corporativas da sua empresa</h4>
                    <p className="leading-relaxed mt-6">
                        Cuidar das despesas e reembolsos dos colaboradores ficou mais fácil com a Flash Expense. Tenha uma visão completa e personalizada de todas as despesas: adiantamentos, relatórios, prestação de contas e muito mais. Tudo pelo app e plataforma. É o fim da papelada!
                    </p>

                    <button className="mt-6 px-8 py-4 rounded-lg bg-pink-400 text-white font-bold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600">
                            Ler mais
                    </button>
                </div>
            </div>
        </section>
    )
}