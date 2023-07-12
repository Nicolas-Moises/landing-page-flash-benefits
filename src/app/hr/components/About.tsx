import Image from 'next/image'

import about from '../../../assets/about-hr.png'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section className="w-full py-20 ">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Image src={about} alt="" className="w-full max-w-lg" />
        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">
            Pra que complexidade?
          </span>
          <h4 className="font-title text-5xl font-bold tracking-tight text-zinc-700">
            Plataforma de gestão{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              decomplicada
            </span>
          </h4>
          <p className="my-6 leading-relaxed">
            Gerencie todos os benefícios em uma plataforma simples, prática e
            intuitiva com total respaldo jurídico, enquanto oferece a melhor
            experiência para seu colaborador. Ah! E o melhor: a taxa é ZERO.
            Plataforma de gestão de benefícios simples e intuitiva.
          </p>
          <Button>Quero ser Flash</Button>
        </div>
      </div>
    </section>
  )
}
