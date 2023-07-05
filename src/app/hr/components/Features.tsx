import {
  ArrowRight,
  CircleDot,
  CreditCardIcon,
  DollarSign,
  Edit,
  Gift,
  Headphones,
  Home,
  Monitor,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    id: 1,
    icon: <CircleDot size={20} />,
    title: 'Flash Points',
    content: 'Conheça nosso sistema de distribuição em pontos.',
    link: '#',
  },
  {
    id: 2,
    icon: <Edit size={20} />,
    title: 'Customização',
    content: 'Customize totalmente os benefícios de cada colaborador.',
    link: '#',
  },
  {
    id: 3,
    icon: <Home size={20} />,
    title: 'Home Office',
    content:
      'Apoie o trabalho remoto com esse saldo para pagamentos de contas do home office.',
    link: '#',
  },
  {
    id: 4,
    icon: <Gift size={20} />,
    title: 'Premiações',
    content:
      'Presenteie seu colaborador com um saldo ideal para premiações e bonificações em dinheiro.',
    link: '#',
  },
  {
    id: 5,
    icon: <CreditCardIcon size={20} />,
    title: 'Cartões Flash',
    content:
      'Solicite cartões sem custo sempre que precisar abastecer o estoque e receba em até 5 dias úteis.',
    link: '#',
  },
  {
    id: 6,
    icon: <Monitor size={20} />,
    title: 'Plataforma completa',
    content:
      'Faça seus pedidos de benefícios em poucos minutos e ganhe mais produtividade.',
    link: '#',
  },
  {
    id: 7,
    icon: <DollarSign size={20} />,
    title: 'Flash Cash',
    content:
      'Adicione saldo em conta na plataforma para realizar pagamentos em tempo real.',
    link: '#',
  },
  {
    id: 8,
    icon: <Headphones size={20} />,
    title: 'Suporte',
    content:
      'Suporte sempre que precisar via e-mail, telefone, whatsapp ou chat.',
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
          e recursos que você só encontra aqui
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
          faça a prestação de contas direto no aplicativo. Simples e fácil.
        </p>
      </div>

      <div className="mx-auto mt-20 grid grid-cols-4 place-items-center">
        {features.map((feature) => {
          return (
            <div
              className="group flex h-56 flex-1 flex-col items-start border border-dashed border-zinc-400/20 from-pink-100 
              via-pink-50 to-pink-500/20 p-6 transition-colors duration-150 hover:bg-gradient-to-tr"
              key={feature.id}
            >
              <div className="mb-4 flex items-center gap-4">
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
              <Link
                className="group mt-auto flex items-center gap-2 text-sm font-bold text-pink-600 transition-colors hover:text-pink-500"
                href={`${feature.link}`}
              >
                Saiba mais
                <ArrowRight
                  size={16}
                  className="transition-all duration-150 group-hover:translate-x-1"
                />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
