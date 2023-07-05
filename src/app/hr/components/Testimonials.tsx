'use client'

import person1 from '../../../assets/person-1.png'
import person2 from '../../../assets/person-2.webp'
import person3 from '../../../assets/person-3.webp'

import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'

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
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col py-20">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">Quem é Flash, ama</span>
        <h4 className="max-w-2xl text-center font-title text-5xl font-bold tracking-tight">
          Feedbacks de quem vive a{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            liberdade
          </span>
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>

      <Tabs.Root
        defaultValue={'2'}
        className="mt-20 flex w-full flex-col items-center justify-center"
      >
        <Tabs.List className="flex w-full max-w-4xl items-center justify-center gap-4">
          {testimonials.map((testimonial) => {
            return (
              <Tabs.Trigger
                key={testimonial.id}
                value={`${testimonial.id}`}
                className="group transition-transform duration-150 data-[state=active]:-translate-y-3"
              >
                <Image
                  src={testimonial.avatar.src}
                  width={100}
                  height={100}
                  alt=""
                  className="h-14 w-14 rounded-full border-2 border-white ring-2 ring-pink-500 group-data-[state=inactive]:opacity-40 
                            group-data-[state=active]:ring-pink-600"
                />
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
        {testimonials.map((testimonial) => {
          return (
            <Tabs.Content
              key={testimonial.id}
              value={`${testimonial.id}`}
              className="mt-10 max-w-2xl text-center data-[state=active]:animate-scaleIn"
            >
              <strong className="text-center text-2xl font-medium text-zinc-800">
                &quot;{testimonial.message}&quot;
              </strong>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-sm font-semibold text-zinc-700">
                  {testimonial.author}
                </span>
                <p className="mt-1 text-xs text-zinc-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Tabs.Content>
          )
        })}
      </Tabs.Root>
    </section>
  )
}
