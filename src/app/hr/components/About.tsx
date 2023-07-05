import Image from 'next/image'

import about from '../../../assets/about-hr.png'

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
          <p className="mt-6 leading-relaxed">
            Gerencie todos os benefícios em uma plataforma simples, prática e
            intuitiva com total respaldo jurídico, enquanto oferece a melhor
            experiência para seu colaborador. Ah! E o melhor: a taxa é ZERO.
            Plataforma de gestão de benefícios simples e intuitiva.
          </p>
          <button
            className="mt-10 rounded-lg border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
            transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
          >
            Quero ser Flash
          </button>
        </div>
      </div>
    </section>
  )
}
