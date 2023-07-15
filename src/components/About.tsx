import Image from 'next/image'

import cards from '../assets/cards.png'
import { Button } from './ui/button'
import { Heading } from './ui/heading'

export function About() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row">
        <Image src={cards} alt="" />
        <div className="flex max-w-xl flex-col items-center lg:items-start">
          <span className="mb-2 text-sm text-pink-500">Facilidade</span>
          <Heading.Title size="md" className="text-center lg:text-left">
            Tudo, tudo, tudo em um só{' '}
            <Heading.Gradient>cartão</Heading.Gradient>
          </Heading.Title>
          <p className="my-6 text-center leading-relaxed lg:text-left">
            Tenha vários benefícios em um único cartão, aceito em mais de 4
            milhões de estabelecimentos pela Mastercard®️. Para pagar é só
            aproximar.
          </p>
          <Button size="lg">Conhecer produto</Button>
        </div>
      </div>
    </section>
  )
}
