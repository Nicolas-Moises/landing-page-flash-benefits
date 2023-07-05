import Image from 'next/image'

import people from '../assets/people.png'

export function People() {
  return (
    <section className="w-full bg-pink-100 py-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="max-w-2xl">
          <span className="mb-2 text-sm text-pink-500">Felicidade</span>
          <h4 className="font-title text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Flash People
            </span>
            : a plataforma certa para o RH atingir resultados excepcionais
          </h4>
          <p className="mt-6 leading-relaxed">
            Uma única plataforma com soluções para processos de admissão online,
            treinamentos, desenvolvimento e engajamento dos colaboradores.
            Completa e automatizada para o RH.
          </p>

          <button
            className="mt-6 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
            transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Saiba mais
          </button>
        </div>
        <Image src={people} alt="" />
      </div>
    </section>
  )
}
