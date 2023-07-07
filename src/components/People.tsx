import Image from 'next/image'

import people from '../assets/people.png'
import { Heading } from './ui/heading'
import { Button } from './ui/button'

export function People() {
  return (
    <section className="w-full bg-pink-100 py-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">Felicidade</span>
          <Heading.Title>
            <Heading.Gradient>Flash People</Heading.Gradient>: a plataforma
            certa para o RH atingir resultados excepcionais
          </Heading.Title>
          <p className="my-6 leading-relaxed">
            Uma única plataforma com soluções para processos de admissão online,
            treinamentos, desenvolvimento e engajamento dos colaboradores.
            Completa e automatizada para o RH.
          </p>

          <Button size="lg">Saiba mais</Button>
        </div>
        <Image src={people} alt="" />
      </div>
    </section>
  )
}
