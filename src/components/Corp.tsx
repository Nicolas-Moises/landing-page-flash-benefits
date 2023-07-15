import Image from 'next/image'

import card from '../assets/mock-corp.png'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function Corp() {
  return (
    <section className="w-full bg-pink-100 pt-20 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between lg:flex-row">
        <div className="flex max-w-2xl flex-col items-center lg:items-start">
          <span className="mb-2 text-sm text-pink-500">Praticidade</span>
          <Heading.Title className="text-center lg:text-left">
            Use o saldo corporativo e{' '}
            <Heading.Gradient>simplifique</Heading.Gradient> a gestão de gastos
            da sua empresa
          </Heading.Title>
          <p className="my-6 text-center leading-relaxed lg:text-left">
            Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
            faça a prestação de contas direto no aplicativo. Simples e fácil.
          </p>
          <Button size="lg">Saiba mais</Button>
        </div>
        <Image src={card} alt="" className="mt-10 shadow-2xl lg:mt-0" />
      </div>
    </section>
  )
}
