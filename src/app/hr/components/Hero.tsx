import Image from 'next/image'

import hero from '../../../assets/hero-hr-3.png'
import { Banner } from '@/components/Banner'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative mt-20 h-full w-full overflow-x-hidden">
      <div className="absolute left-0 top-1/2 -z-20 h-[288px] w-[726px] -translate-x-1/2 rounded-full bg-pink-600 opacity-30 blur-full" />
      <Banner />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between bg-left">
        <div className="max-w-[650px] pb-20">
          <span className="mb-2 text-sm text-pink-500">Flash Benefícios</span>
          <Heading.Title size="lg">
            Descubra a liberdade em um{' '}
            <Heading.Gradient>Flash</Heading.Gradient>
          </Heading.Title>
          <p className="my-6 text-lg leading-relaxed text-zinc-600">
            Engaje o colaborador e tenha um time mais animado e feliz,
            aumentando a retenção de taletos em sua empresa!
          </p>
          <Button>Agendar uma demonstração</Button>
        </div>
        <Image
          quality={100}
          src={hero}
          width={429}
          height={582}
          alt=""
          priority={true}
          className="-z-10 mr-2 w-full max-w-xl 2xl:max-w-2xl"
        />
      </div>
    </section>
  )
}
