import Image from "next/image";

import card from '../assets/mock-corp.png'

export function Corp() {
    return (
        <section className="w-full pt-20 bg-pink-100 px-6">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                
                <div className="max-w-2xl">
                    <span className="text-sm text-pink-500 mb-2">Praticidade</span>
                    <h4 className="font-title text-5xl font-bold">Use o saldo corporativo e <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">simplifique</span> a gestão de gastos da sua empresa</h4>
                    <p className="leading-relaxed mt-6">Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e faça a prestação de contas direto no aplicativo. Simples e fácil.</p>

                    <button className="mt-6 px-8 py-4 rounded-lg bg-pink-400 text-white font-bold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600">
                            Saiba mais
                    </button>
                </div>
                <Image src={card} alt="" className="shadow-2xl" />
            </div>
        </section>
    )
}