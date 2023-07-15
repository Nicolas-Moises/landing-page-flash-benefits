import Image from 'next/image'

import people from '../assets/people.png'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function People() {
  return (
    <section className="w-full bg-pink-100 px-6 py-20 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between lg:flex-row">
        <div className="flex max-w-2xl flex-col items-center lg:items-start">
          <span className="mb-2 text-sm text-pink-500">Felicidade</span>
          <Heading.Title className="text-center lg:text-left">
            <Heading.Gradient>Flash People</Heading.Gradient>: a plataforma
            certa para o RH atingir resultados excepcionais
          </Heading.Title>
          <p className="my-6 text-center leading-relaxed lg:text-left">
            Uma única plataforma com soluções para processos de admissão online,
            treinamentos, desenvolvimento e engajamento dos colaboradores.
            Completa e automatizada para o RH.
          </p>

          <Button size="lg">Saiba mais</Button>
        </div>
        <Image src={people} alt="" className="mt-10 lg:mt-0" />
      </div>
    </section>
  )
}
