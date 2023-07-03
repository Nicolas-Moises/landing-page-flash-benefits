import Image from 'next/image'

import featurePreview from '../../../assets/feature-expense.png'

import {
  BarChart3,
  TrendingUp,
  BellDot,
  MonitorSmartphone,
  Car,
  ScrollText,
} from 'lucide-react'

export function Features() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center py-20">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">
          Tudo que você precisa
        </span>
        <h4 className="max-w-4xl text-center font-title text-5xl font-bold text-zinc-700">
          Tenha mais controle e segurança sobre a{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            gestão das despesas
          </span>{' '}
          da sua empresa.
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Sem custo e sem necessidade de contratação do cartão corporativo.
          Confira algumas funcionalidades que você irá amar.
        </p>
      </div>

      <Image
        src={featurePreview}
        alt=""
        className="mt-20 w-full max-w-5xl rounded-t-xl border border-b-0 border-zinc-400/30"
      />

      <div className="mt-20 grid grid-cols-3 gap-x-16 gap-y-14">
        <div className="flex items-start gap-4">
          <BarChart3 size={20} className="h-5 w-5 text-pink-600" />
          <strong className="flex-1 text-zinc-900">
            Aprovar relatórios de despesas.
            <span className="ml-1 font-normal text-zinc-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget.
            </span>
          </strong>
        </div>
        <div className="flex items-start gap-4">
          <BellDot size={20} className="h-5 w-5 text-pink-600" />
          <strong className="flex-1 text-zinc-900">
            Alertar violações à política da empresa.
            <span className="ml-1 font-normal text-zinc-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget.
            </span>
          </strong>
        </div>
        <div className="flex items-start gap-4">
          <MonitorSmartphone size={20} className="h-5 w-5 text-pink-600" />
          <strong className="flex-1 text-zinc-900">
            Integrar com ERP de forma simplificada.
            <span className="ml-1 font-normal text-zinc-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget.
            </span>
          </strong>
        </div>
        <div className="flex items-start gap-4">
          <TrendingUp size={20} className="h-5 w-5 text-pink-600" />
          <strong className="flex-1 text-zinc-900">
            Extrair relatórios.
            <span className="ml-1 font-normal text-zinc-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget.
            </span>
          </strong>
        </div>
        <div className="flex items-start gap-4">
          <Car size={20} className="h-5 w-5 text-pink-600" />
          <strong className="flex-1 text-zinc-900">
            Reembolsar por quilometragem.
            <span className="ml-1 font-normal text-zinc-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget.
            </span>
          </strong>
        </div>
        <div className="flex items-start gap-4">
          <ScrollText size={20} className="h-5 w-5 text-pink-600" />
          <strong className="flex-1 text-zinc-900">
            Emitir notas de débito entre empresas e mais.
            <span className="ml-1 font-normal text-zinc-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget.
            </span>
          </strong>
        </div>
      </div>
    </section>
  )
}
