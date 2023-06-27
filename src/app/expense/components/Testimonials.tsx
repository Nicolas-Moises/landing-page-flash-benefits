'use client'

import person1 from '../../../assets/person-4.webp'
import person2 from '../../../assets/person-5.webp'
import person3 from '../../../assets/person-6.webp'

import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    author: 'Carlos Eduardo Bley',
    role: 'Gestor CSI',
    company: 'Grupo NC',
    message:
      'Deixo aqui o meu elogio a equipe da Flash Expense, que é um time de pessoas muito atenciosas, desde a recepção até a execução das solicitações, além de uma super parceira na implementação de melhorias.',
    avatar: person1,
  },
  {
    id: 2,
    author: 'Patrícia Novaes Correa',
    role: 'Gerente de projeto',
    company: 'Sapore',
    message:
      'Com a plataforma foi possível integrar os sistemas Flash Expense e ERP, reduzir o custo e ter maior controle nos processos.',
    avatar: person2,
  },
  {
    id: 3,
    author: 'Alex Araujo',
    role: 'Supervisor de Controladoria',
    company: 'RGIS Brasil',
    message:
      'Obtivemos grandes níveis de gestão, rastreabilidade e transparência nos gastos operacionais. Logo no início, vimos o custo-benefício da plataforma, que é excelente e gerou impacto positivo em toda a empresa.',
    avatar: person3,
  },
]

export function Testimonials() {
  
  return (
    <section className="w-full py-20 max-w-7xl mx-auto flex flex-col">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">É fácil adorar</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center tracking-tight">
          Quem utilizou,{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            amou
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>

      <Tabs.Root defaultValue={'2'} className='w-full flex flex-col justify-center items-center mt-20'>
        <Tabs.List className='w-full max-w-4xl flex items-center gap-4 justify-center'>
            {testimonials.map(testimonial => {
                return (
                    <Tabs.Trigger key={testimonial.id} value={`${testimonial.id}`} className='data-[state=active]:-translate-y-3 transition-transform duration-150 group'>
                        <Image 
                            src={testimonial.avatar.src} 
                            width={100} 
                            height={100} 
                            alt="" 
                            className='w-14 h-14 rounded-full border-2 ring-2 ring-pink-500 border-white group-data-[state=active]:ring-pink-600 group-data-[state=inactive]:opacity-50' 
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
                    className='mt-10 max-w-2xl text-center data-[state=active]:animate-scaleIn'
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
