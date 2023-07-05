import Image from 'next/image'
import heroPreview from '../../../assets/hero-people.png'
import Link from 'next/link'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative mx-auto mt-28 flex w-full max-w-7xl flex-col items-center py-20">
      <div
        className="absolute inset-x-0 top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">Flash People</span>
        <h4 className="max-w-4xl text-center font-title text-7xl font-bold tracking-tight text-zinc-700">
          A plataforma ideal para ser protagonista em{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            gestão de pessoas
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
        <div
          className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full
         border border-pink-300 bg-pink-50/40"
        >
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border border-pink-600/10 bg-pink-50 transition-transform duration-200 
            group-hover:scale-110 group-hover:border-pink-600/30"
          >
            <Play className="fill-pink-600 text-pink-600 transition-colors duration-150 group-hover:scale-100" />
          </div>
        </div>
        <Image
          src={heroPreview}
          priority
          quality={100}
          width={2135}
          height={1348}
          alt=""
          className="mt-20 aspect-video w-full max-w-5xl rounded-t-xl border border-b-0 border-zinc-400/30"
        />
      </div>
    </section>
  )
}
