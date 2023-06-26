import { CircleDot, Edit, Gift, Home } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    id: 1,
    icon: <CircleDot size={20} />,
    title: "Flash Points",
    content: 'Implemente novas opções de benefícios e atenda às necessidades individuais dos colaboradores sem aumentar os custos. Conheça nosso sistema de distribuição em pontos.',
    link: '#'
  },
  {
    id: 2,
    icon: <Edit size={20} />,
    title: "Benefícios customizados",
    content: 'Ofereça presentes sazonais em parceiros à sua escolha. Mais praticidade, sem custo de logística.',
    link: '#'
  },
  {
    id: 3,
    icon: <Home size={20} />,
    title: "Auxílio Home Office",
    content: ' Apoie o trabalho remoto, oferecendo um saldo exclusivo aceito para pagamentos de contas de concessionárias e infraestrutura.',
    link: '#'
  },
  {
    id: 4,
    icon: <Gift size={20} />,
    title: "Premiações",
    content: 'Presenteie seu colaborador com um saldo separado e com total respaldo jurídico, ideal para premiações e bonificações em dinheiro.',
    link: '#'
  },
]

export function Features() {
  return (
    <section className="w-full py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Exclusividade</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center text-zinc-700">
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

      <div className="grid grid-cols-2 mt-10 place-items-center max-w-5xl mx-auto">

        {features.map(feature => {
          return (
            <div 
              className="group flex flex-col gap-2 items-start justify-between p-8 border border-dashed border-zinc-400/20 flex-1 h-full hover:bg-gradient-to-tr 
              from-pink-100 via-pink-50 to-pink-500/20 transition-colors duration-150" 
              key={feature.id}
            >
              <div className='flex items-center gap-4'>
                <div className="p-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 border border-pink-400 text-white group-hover:text-pink-500 
                group-hover:bg-none transition-all duration-200">
                  {feature.icon}
                </div>
                <h2 className="text-lg font-bold text-zinc-600">{feature.title}</h2>
              </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feature.content}
                </p>
              <div className="flex flex-col gap-3 items-start">
                <Link
                  className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                            border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
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
