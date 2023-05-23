import Image from 'next/image'

import people from '../assets/people.png'

export function People() {
  return (
    <section className="w-full py-20 bg-pink-100">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="max-w-2xl">
          <span className="text-sm text-pink-500 mb-2">Felicidade</span>
          <h4 className="font-title text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              Flash People
            </span>
            : a plataforma certa para o RH atingir resultados excepcionais
          </h4>
          <p className="leading-relaxed mt-6">
            Uma única plataforma com soluções para processos de admissão online,
            treinamentos, desenvolvimento e engajamento dos colaboradores.
            Completa e automatizada para o RH.
          </p>

          <button
            className="mt-10 px-8 py-4 rounded-lg bg-pink-400 text-white font-extrabold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
          >
            Saiba mais
          </button>
        </div>
        <Image src={people} alt="" />
      </div>
    </section>
  )
}
