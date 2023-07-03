import { Check } from 'lucide-react'

export function Pricing() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center py-16">
      <div className="flex flex-col items-center ">
        <span className="mb-2 text-sm text-pink-500">Dentro disso tudo...</span>
        <h4 className="max-w-2xl text-center font-title text-5xl font-bold tracking-tight text-zinc-700">
          Por que escolher a{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            Flash?
          </span>
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Aproveite tudo por zero de taxa de contratação e utilização de nossos
          serviços primários.
        </p>
      </div>

      <div className="mt-20 w-full max-w-lg rounded-br-[100px] rounded-tl-[100px] border-2 border-t-8 border-pink-500 bg-white px-12 py-14">
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-zinc-500">Gestão</span>
          <span className="rounded-full bg-pink-500 px-3 py-1 text-sm font-bold text-white">
            Taxa zero
          </span>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <p className="text-zinc-500">
            Perfeito para a gestão dos benefícios de sua empresa e felicidade de
            seus colaboradores
          </p>
          <strong className="font-title text-5xl font-bold tracking-tighter text-zinc-700">
            R$ 0
            <span className="ml-4 font-sans text-base font-medium tracking-normal text-zinc-700">
              / mês
            </span>
          </strong>
          <button className="rounded-lg border-2 border-pink-400 bg-pink-400 py-4 font-bold text-white transition-colors duration-150 hover:bg-transparent hover:text-zinc-600">
            Contratar agora
          </button>
          <div className="mt-6 flex w-full flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <Check size={20} className="h-6 w-6 text-green-500" />
              <p className="flex-1 text-sm text-zinc-600">
                Controle das categorias disponibilizadas aos colaboradores, com
                100% de respaldo jurídico
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="h-6 w-6 text-green-500" />
              <p className="flex-1 text-sm text-zinc-600">
                Atendimento via chat pela plataforma de segunda a sexta e
                suporte também por telefone
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="h-6 w-6 text-green-500" />
              <p className="flex-1 text-sm text-zinc-600">
                Interface simples e fácil de usar, com layout intuitivo
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="h-6 w-6 text-green-500" />
              <p className="flex-1 text-sm text-zinc-600">
                Mais liberdade aos colaboradores e ao RH
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="h-6 w-6 text-green-500" />
              <p className="flex-1 text-sm text-zinc-600">
                Cartões entregues em até 5 dias úteis, no escritório ou na casa
                do colaborador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
