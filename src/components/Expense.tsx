import Image from 'next/image'

import card from '../assets/mock-expense.png'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function Expense() {
  return (
    <section className="w-full pt-20 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between lg:flex-row">
        <Image src={card} alt="" className="mt-10 lg:mt-0" />

        <div className="flex max-w-2xl flex-col items-center lg:items-start">
          <span className="mb-2 text-sm text-pink-500">Inovação</span>
          <Heading.Title className="text-center lg:text-left">
            <Heading.Gradient>Flash Expense</Heading.Gradient>: Organize as
            despesas corporativas da sua empresa
          </Heading.Title>
          <p className="my-6 text-center leading-relaxed lg:text-left">
            Cuidar das despesas e reembolsos dos colaboradores ficou mais fácil
            com a Flash Expense. Tenha uma visão completa e personalizada de
            todas as despesas: adiantamentos, relatórios, prestação de contas e
            muito mais. Tudo pelo app e plataforma. É o fim da papelada!
          </p>

          <Button size="lg">Saiba mais</Button>
        </div>
      </div>
    </section>
  )
}
