'use client'
import { useKeenSlider } from 'keen-slider/react'
import person1 from '../assets/person-1.png'
import person2 from '../assets/person-2.webp'
import person3 from '../assets/person-3.webp'
import { TestimonialCard } from './TestimonialCard'

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
]

export function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 48,
    },
  })
  return (
    <section className="w-full py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Quem é Flash, ama</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center tracking-tight">
          Palavras de quem vive a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            liberdade
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>
      <div className="max-w-4xl w-full mx-auto">
        <div className="keen-slider mt-20" ref={sliderRef}>
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
    </section>
  )
}
