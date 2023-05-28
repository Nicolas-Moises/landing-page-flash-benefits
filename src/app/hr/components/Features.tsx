import Image from 'next/image'

import points from '../../../assets/feature-1.png'
import customizable from '../../../assets/feature-2.png'

export function Features() {
  return (
    <section className="w-full py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Exclusividade</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center">
          Produtos{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            exclusivos
          </span>{' '}
          que você só encontra aqui
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Pague suas despesas a trabalho no mesmo cartão. Gerencie os gastos e
          faça a prestação de contas direto no aplicativo. Simples e fácil.
        </p>
      </div>
    </section>
  )
}
