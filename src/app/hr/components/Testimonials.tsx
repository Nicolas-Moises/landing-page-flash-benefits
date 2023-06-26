'use client'

import person1 from '../../../assets/person-1.png'
import person2 from '../../../assets/person-2.webp'
import person3 from '../../../assets/person-3.webp'

import * as Tabs from '@radix-ui/react-tabs';
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
    <section className="w-full py-20 max-w-7xl mx-auto flex flex-col">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Quem é Flash, ama</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center tracking-tight">
          Feedbacks de quem vive a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            liberdade
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>

      <Tabs.Root defaultValue={'1'} className='w-full flex flex-col justify-center items-center mt-20'>
        <Tabs.List className='w-full max-w-4xl flex items-center gap-4 justify-center'>
            {testimonials.map(testimonial => {
                return (
                    <Tabs.Trigger key={testimonial.id} value={`${testimonial.id}`} className='data-[state=active]:-translate-y-3 transition-transform duration-150 group'>
                        <Image 
                            src={testimonial.avatar.src} 
                            width={100} 
                            height={100} 
                            alt="" 
                            className='w-14 h-14 rounded-full border-2 ring-2 ring-pink-500 border-white group-data-[state=active]:ring-pink-600 
                            group-data-[state=inactive]:opacity-40' 
                        />
                    </Tabs.Trigger>
                )
            })}
        </Tabs.List>
        {testimonials.map(testimonial => {
            return (
                <Tabs.Content 
                    key={testimonial.id} 
                    value={`${testimonial.id}`}
                    className='mt-10 max-w-2xl text-center'
                >
                    <strong className='text-2xl font-medium text-center text-zinc-800'>
                        "{testimonial.message}"
                    </strong>
                    <div className='flex flex-col items-center mt-4'>
                        <span className='text-sm font-semibold text-zinc-700'>
                            {testimonial.author}
                        </span>
                        <p className='text-xs text-zinc-500 mt-1'>
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
