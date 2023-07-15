'use client'
import { useKeenSlider } from 'keen-slider/react'
import person1 from '../assets/person-1.png'
import person2 from '../assets/person-2.webp'
import person3 from '../assets/person-3.webp'
import person7 from '../assets/person-7.webp'
import { TestimonialCard } from './TestimonialCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Heading } from './ui/heading'

const testimonials = [
  {
    id: 1,
    author: 'Nay Kenis',
    role: 'People & Culture Team Lead',
    company: 'Banco Cora',
    message:
      'A Flash reforça a mensagem de autonomia que temos em nossa cultura. Empodera mais o colaborador, o dinheiro da empresa passa a ser mais bem utilizado (pelo colaborador, ele que decide) e economiza o tempo do nosso time com burocracias e gestão de diversos parceiros.',
    avatar: person1,
  },
  {
    id: 2,
    author: 'Hadassa Lima',
    role: 'Analista de RH',
    company: 'CATHO',
    message:
      'Achei a plataforma da Flash super interativa e fácil de utilizar, isso é muito importante no dia a dia. E como RH posso falar que todas as vezes que precisei da Flash fui super bem atendida, e se colocaram 100% a disposição para ajudar, entender o que eu precisava naquele momento, o atendimento de você é sensacional. Parabéns!',
    avatar: person2,
  },
  {
    id: 3,
    author: 'Diane Queiroz',
    role: 'People & Culture Team Lead',
    company: 'Nagro',
    message:
      'O processo de recarga dos cartões é prático, e a flexibilidade no momento de usar o cartão é satisfatória para a equipe.',
    avatar: person3,
  },
  {
    id: 4,
    author: 'Débora Coelho',
    role: 'People & Culture Team Lead',
    company: 'Elo',
    message:
      'Com a Flash os nossos colaboradores tiveram maior flexibilidade do benefício, podendo utilizar da forma que acharem melhor. A Flash tem uma aceitação maior que as empresas de benefícios comuns, facilitando muito para todos. O sistema de benefícios é bem tranquilo e o suporte atende prontamente!',
    avatar: person7,
  },
  {
    id: 5,
    author: 'Diane Queiroz',
    role: 'People & Culture Team Lead',
    company: 'Nagro',
    message:
      'O processo de recarga dos cartões é prático, e a flexibilidade no momento de usar o cartão é satisfatória para a equipe.',
    avatar: person3,
  },
  {
    id: 6,
    author: 'Diane Queiroz',
    role: 'People & Culture Team Lead',
    company: 'Nagro',
    message:
      'O processo de recarga dos cartões é prático, e a flexibilidade no momento de usar o cartão é satisfatória para a equipe.',
    avatar: person3,
  },
]

export function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 48,
    },
  })
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-20 xl:px-0">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">Quem é Flash, ama</span>

        <Heading.Title>
          Palavras de quem vive a <Heading.Gradient>liberdade</Heading.Gradient>
        </Heading.Title>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl">
        <div
          className="keen-slider mt-20 cursor-grab active:cursor-grabbing"
          ref={sliderRef}
        >
          {testimonials.map((message) => {
            return (
              <TestimonialCard
                key={message.id}
                author={message.author}
                avatar={message.avatar}
                company={message.company}
                message={message.message}
                role={message.role}
              />
            )
          })}
        </div>
      </div>
      <div className="mt-10 flex gap-10 self-end">
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
