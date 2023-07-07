import Image from 'next/image'

import card from '../assets/mock-corp.png'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function Corp() {
  return (
    <section className="w-full bg-pink-100 px-6 pt-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">Praticidade</span>
          <Heading.Title>
            Use o saldo corporativo e{' '}
            <Heading.Gradient>simplifique</Heading.Gradient> a gestão de gastos
            da sua empresa
          </Heading.Title>
          <p className="my-6 leading-relaxed">
            Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
            faça a prestação de contas direto no aplicativo. Simples e fácil.
          </p>
          <Button size="lg">Saiba mais</Button>
        </div>
        <Image src={card} alt="" className="shadow-2xl" />
      </div>
    </section>
  )
}
