import Image from 'next/image'

import about from '../../../assets/about-hr.png'

export function About() {
  return (
    <section className="w-full py-20 ">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Image src={about} alt="" />
        <div className="max-w-2xl">
          <span className="text-sm text-pink-500 mb-2">
            Pra que complexidade?
          </span>
          <h4 className="font-title text-5xl font-bold tracking-tight">
            Plataforma de gestão{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              decomplicada
            </span>
          </h4>
          <p className="leading-relaxed mt-6">
            Gerencie todos os benefícios em uma plataforma simples, prática e
            intuitiva com total respaldo jurídico, enquanto oferece a melhor
            experiência para seu colaborador. Ah! E o melhor: a taxa é ZERO.
          </p>

          <button
            className="mt-10 px-8 py-4 rounded-lg bg-pink-400 text-white font-extrabold transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
          >
            Quero ser Flash
          </button>
        </div>
      </div>
    </section>
  )
}
