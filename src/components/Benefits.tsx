'use client'

import {
  ArrowLeft,
  ArrowRight,
  Car,
  GraduationCap,
  Sandwich,
  ShoppingCart,
  Stethoscope,
  Utensils,
} from 'lucide-react'
import { CategorieCard } from './CategorieCard'

import market from '../assets/market.jpg'
import restaurant from '../assets/restaurant.jpg'
import food from '../assets/food.jpg'
import mobility from '../assets/mobility.webp'

import { useKeenSlider } from 'keen-slider/react'

const cards = [
  {
    id: 1,
    category: 'Alimentação',
    description:
      'Aceito exclusivamente em estabelecimentos como supermercados, açougues, padarias e muito mais.',
    link: '#',
    tag: 'Saldo pat',
    icon: ShoppingCart,
    coverUrl: market,
  },
  {
    id: 2,
    category: 'Refeição e Alimentação',
    description:
      'Aceito exclusivamente em estabelecimentos como supermercados, açougues, padarias e muito mais.',
    link: '#',
    tag: 'Saldo pat',
    icon: Utensils,
    coverUrl: food,
  },
  {
    id: 3,
    category: 'Refeição',
    description:
      'Aceito exclusivamente em estabelecimentos como supermercados, açougues, padarias e muito mais.',
    link: '#',
    tag: 'Saldo pat',
    icon: Sandwich,
    coverUrl: restaurant,
  },
  {
    id: 4,
    category: 'Mobilidade',
    description:
      'Aceito em postos de combustível, estacionamentos, aluguel de bikes e patinetes, além de aplicativos de corrida como Uber e 99.',
    link: '#',
    icon: Car,
    coverUrl: mobility,
  },
  {
    id: 5,
    category: 'Saúde',
    description:
      'Aceito em estabelecimentos como laboratórios, consultas e outras categorias do segmento.',
    link: '#',
    icon: Stethoscope,
    coverUrl: mobility,
  },
  {
    id: 6,
    category: 'Educação',
    description:
      'Aceito em estabelecimentos como creches, escolas primárias, faculdades, cursos técnicos e cursos de idiomas.',
    link: '#',
    icon: GraduationCap,
    coverUrl: mobility,
  },
]

export function Benefits() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
  })
  return (
    <section className="w-full py-20 max-w-7xl mx-auto flex flex-col">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Categorias</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center text-zinc-700">
          Tenha mais{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            poder de escolha
          </span>{' '}
          para aproveitar seus benefícios
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
          faça a prestação de contas direto no aplicativo. Simples e fácil.
        </p>
      </div>

      <div className="keen-slider mt-20" ref={sliderRef}>
        {cards.map((card) => {
          return (
            <CategorieCard
              key={card.id}
              coverUrl={card.coverUrl}
              category={card.category}
              description={card.description}
              icon={<card.icon size={24} className="text-pink-500" />}
              link={card.link}
              tag={card.tag}
            />
          )
        })}
      </div>

      <div className="flex gap-10 self-end mt-10">
        <ArrowLeft
          size={24}
          className="cursor-pointer text-zinc-500 hover:text-pink-400"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />

        <ArrowRight
          size={24}
          className="cursor-pointer text-zinc-500 hover:text-pink-400"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </div>
    </section>
  )
}
