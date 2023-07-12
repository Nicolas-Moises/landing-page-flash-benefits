'use client'

import Image from 'next/image'

import hero from '../assets/hero.png'
import { Banner } from './Banner'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative mt-20 w-full overflow-hidden">
      <Banner />
      <div className="absolute bottom-0 left-1/2 h-[288px] w-[526px] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-400 opacity-60 blur-full" />
      <div className="mx-auto mt-8 flex w-full max-w-7xl items-center justify-between">
        <div className="flex max-w-[650px] flex-col items-start gap-6">
          <div>
            <span className="mb-2 text-sm text-pink-500">Seja livre</span>
            <Heading.Title size="lg">
              Liberdade é ter tudo em um{' '}
              <Heading.Gradient>Flash</Heading.Gradient>
            </Heading.Title>
          </div>
          <p className="text-lg leading-relaxed text-zinc-600">
            Centralize sua gestão de benefícios, despesas corporativas e muito
            mais em um só lugar. Ofereça para seus colaboradores um único cartão
            multibenefícios que também é cartão corporativo pré-pago.
          </p>
          <Button size="lg">Quero ser Flash</Button>
        </div>
        <Image
          quality={100}
          src={hero}
          width={429}
          height={582}
          alt=""
          className="w-full max-w-lg"
        />
      </div>
    </section>
  )
}
