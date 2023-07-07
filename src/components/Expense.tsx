import Image from 'next/image'

import card from '../assets/mock-expense.png'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function Expense() {
  return (
    <section className="w-full pt-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Image src={card} alt="" />

        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">Inovação</span>
          <Heading.Title>
            <Heading.Gradient>Flash Expense</Heading.Gradient>: Organize as
            despesas corporativas da sua empresa
          </Heading.Title>
          <p className="my-6 leading-relaxed">
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
