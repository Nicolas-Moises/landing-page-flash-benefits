import { CircleDot, Edit, Gift, Home } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    id: 1,
    icon: <CircleDot size={20} />,
    title: 'Flash Points',
    content:
      'Implemente novas opções de benefícios e atenda às necessidades individuais dos colaboradores sem aumentar os custos. Conheça nosso sistema de distribuição em pontos.',
    link: '#',
  },
  {
    id: 2,
    icon: <Edit size={20} />,
    title: 'Benefícios customizados',
    content:
      'Ofereça presentes sazonais em parceiros à sua escolha. Mais praticidade, sem custo de logística.',
    link: '#',
  },
  {
    id: 3,
    icon: <Home size={20} />,
    title: 'Auxílio Home Office',
    content:
      ' Apoie o trabalho remoto, oferecendo um saldo exclusivo aceito para pagamentos de contas de concessionárias e infraestrutura.',
    link: '#',
  },
  {
    id: 4,
    icon: <Gift size={20} />,
    title: 'Premiações',
    content:
      'Presenteie seu colaborador com um saldo separado e com total respaldo jurídico, ideal para premiações e bonificações em dinheiro.',
    link: '#',
  },
]

export function Features() {
  return (
    <section className="mx-auto w-full max-w-7xl py-20">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">Exclusividade</span>
        <h4 className="max-w-2xl text-center font-title text-5xl font-bold text-zinc-700">
          Produtos{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            exclusivos
          </span>{' '}
          que você só encontra aqui
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
          faça a prestação de contas direto no aplicativo. Simples e fácil.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 place-items-center">
        {features.map((feature) => {
          return (
            <div
              className="group flex h-full flex-1 flex-col items-start justify-between gap-2 border border-dashed border-zinc-400/20 from-pink-100 via-pink-50 
              to-pink-500/20 p-8 transition-colors duration-150 hover:bg-gradient-to-tr"
              key={feature.id}
            >
              <div className="flex items-center gap-4">
                <div
                  className="rounded-full border border-pink-400 bg-gradient-to-r from-pink-400 to-pink-500 p-2 text-white transition-all 
                duration-200 group-hover:bg-none group-hover:text-pink-500"
                >
                  {feature.icon}
                </div>
                <h2 className="text-lg font-bold text-zinc-600">
                  {feature.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500">
                {feature.content}
              </p>
              <div className="flex flex-col items-start gap-3">
                <Link
                  className="flex items-center justify-center rounded-full border-2 border-pink-400 bg-pink-400 px-5 py-2 font-semibold text-white
                            transition-colors duration-200 hover:bg-transparent hover:text-zinc-600"
                  href={`${feature.link}`}
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
