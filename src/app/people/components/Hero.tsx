import Image from 'next/image'
import heroPreview from '../../../assets/hero-people.png'
import Link from 'next/link'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="mx-auto mt-28 flex w-full max-w-7xl flex-col items-center py-20">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">Flash People</span>
        <h4 className="max-w-4xl text-center font-title text-7xl font-bold tracking-tight text-zinc-700">
          A plataforma ideal para ser protagonista em{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            gestão das despesas
          </span>{' '}
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Uma única plataforma com soluções para processos de admissão online,
          treinamentos, desenvolvimento e engajamento dos colaboradores.
          Completa e automatizada para o RH.
        </p>

        <div className="mt-6 flex items-center gap-6">
          <button
            className="rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
          transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Reserve uma demonstração
          </button>
          <Link
            href="#"
            className="px-8 py-4 font-semibold text-zinc-600 hover:text-pink-400"
          >
            Simulação de preço
          </Link>
        </div>
      </div>
      <div className="group relative hover:cursor-pointer">
        <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full border border-zinc-300 bg-pink-300/10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-pink-600/10 bg-pink-100 group-hover:border-pink-600/30">
            <Play className="fill-pink-600 text-pink-600 transition-colors duration-150 group-hover:fill-pink-400 group-hover:text-pink-400" />
          </div>
        </div>
        <Image
          src={heroPreview}
          priority
          quality={100}
          width={2135}
          height={1348}
          alt=""
          className="mt-20 w-full max-w-5xl rounded-t-xl border border-b-0 border-zinc-400/30"
        />
      </div>
    </section>
  )
}
