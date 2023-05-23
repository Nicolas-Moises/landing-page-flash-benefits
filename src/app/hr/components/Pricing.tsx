import { Check } from 'lucide-react'

export function Pricing() {
  return (
    <section className="w-full py-20 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <span className="text-sm text-pink-500 mb-2">Dentre disso tudo...</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center tracking-tight">
          Por que escolher a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            Flash?
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>

      <div className="mt-20 w-full max-w-xl border-2 border-pink-500/20 rounded-tl-[100px] rounded-br-[100px] px-12 py-14">
        <div className="flex justify-between items-center">
          <span className="font-extrabold text-lg text-zinc-500">Gestão</span>
          <span className="text-sm py-1 px-3 rounded-full bg-pink-500 font-bold text-white">
            Taxa zero
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <p className="text-zinc-500">O produto ideal para seu RH</p>
          <strong className="font-title text-5xl font-black tracking-tighter text-zinc-800">
            R$ 00,00
          </strong>
          <button className="py-4 rounded-lg bg-pink-400 text-white font-bold border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600 transition-colors duration-150">
            Contratar agora
          </button>
          <div className="flex flex-col gap-4 w-full mt-6 items-start">
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500 w-6 h-6" />
              <p className="text-zinc-400 font-semibold flex-1">
                Controle das categorias disponibilizadas aos colaboradores, com
                100% de respaldo jurídico
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500 w-6 h-6" />
              <p className="text-zinc-400 font-semibold flex-1">
                Atendimento via chat pela plataforma de segunda a sexta e
                suporte também por telefone
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500 w-6 h-6" />
              <p className="text-zinc-400 font-semibold flex-1">
                Interface simples e fácil de usar, com layout intuitivo
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500 w-6 h-6" />
              <p className="text-zinc-400 font-semibold flex-1">
                Mais liberdade aos colaboradores e ao RH
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500 w-6 h-6" />
              <p className="text-zinc-400 font-semibold flex-1">
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
