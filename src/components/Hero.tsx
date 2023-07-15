'use client'

import Image from 'next/image'

import hero from '../assets/hero.png'
import { Banner } from './Banner'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative mt-20 w-full overflow-hidden px-6 xl:px-0">
      <Banner />
      <div className="absolute bottom-0 left-1/2 h-[288px] w-[526px] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-400 opacity-60 blur-full" />
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-between lg:flex-row">
        <div className="flex max-w-[650px] flex-col items-center gap-6 lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <span className="mb-2 w-full text-center text-sm text-pink-500 lg:text-left">
              Seja livre
            </span>
            <Heading.Title size="lg" className="text-center lg:text-left">
              Liberdade é ter tudo em um{' '}
              <Heading.Gradient>Flash</Heading.Gradient>
            </Heading.Title>
          </div>
          <p className="text-center text-lg leading-relaxed text-zinc-600 lg:text-left">
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
          className="mt-10 w-full max-w-lg lg:mt-0"
        />
      </div>
    </section>
  )
}
