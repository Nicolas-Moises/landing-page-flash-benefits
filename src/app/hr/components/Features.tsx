import { CircleDot, Edit, Gift, Home } from 'lucide-react'
import Link from 'next/link'

export function Features() {
  return (
    <section className="w-full py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Exclusividade</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center">
          Produtos{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            exclusivos
          </span>{' '}
          que você só encontra aqui
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
          faça a prestação de contas direto no aplicativo. Simples e fácil.
        </p>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y mt-10 divide-dashed divide-zinc-400/20 place-items-center mx-auto">
        <div className="flex flex-col gap-2 items-start p-8 max-w-lg">
          <div className="p-2 rounded-full bg-pink-500 text-white">
            <CircleDot size={20} />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-lg font-bold text-zinc-600">Flash Points</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Implemente novas opções de benefícios e atenda às necessidades
              individuais dos colaboradores sem aumentar os custos. Conheça
              nosso sistema de distribuição em pontos.
            </p>
            <Link
              className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
              href="#"
            >
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start p-8 max-w-lg">
          <div className="p-2 rounded-full bg-pink-500 text-white">
            <Edit size={20} />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-lg font-bold text-zinc-600">
              Benefícios customizados
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Ofereça presentes sazonais em parceiros à sua escolha. Mais
              praticidade, sem custo de logística.
            </p>
            <Link
              className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
              href="#"
            >
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start p-8 max-w-lg">
          <div className="p-2 rounded-full bg-pink-500 text-white">
            <Home size={20} />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-lg font-bold text-zinc-600">
              Auxílio Home Office
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Apoie o trabalho remoto, oferecendo um saldo exclusivo aceito para
              pagamentos de contas de concessionárias e infraestrutura.
            </p>
            <Link
              className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
              href="#"
            >
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start p-8 max-w-lg">
          <div className="p-2 rounded-full bg-pink-500 text-white">
            <Gift size={20} />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-lg font-bold text-zinc-600">
              Premiação Virtual
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Presenteie seu colaborador com um saldo separado e com total
              respaldo jurídico, ideal para premiações e bonificações em
              dinheiro.
            </p>
            <Link
              className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
              href="#"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
