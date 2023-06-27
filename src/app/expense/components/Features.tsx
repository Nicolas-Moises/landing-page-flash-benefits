import Image from "next/image";

import featurePreview from '../../../assets/feature-expense.png'

import { BarChart3, TrendingUp, BellDot, MonitorSmartphone, Car, ScrollText } from 'lucide-react'

export function Features() {
    return (
        <section className="w-full py-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center">
                <span className="text-sm text-pink-500 mb-2">Tudo que você precisa</span>
                <h4 className="font-title text-5xl font-bold max-w-4xl text-center text-zinc-700">
                Tenha mais controle e segurança sobre a  {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
                        gestão das despesas
                    </span>{' '}
                    da sua empresa.
                </h4>
                <p className="leading-relaxed mt-6 text-center max-w-2xl">
                    Sem custo e sem necessidade de contratação do cartão corporativo. Confira algumas funcionalidades que você irá amar.
                </p>
            </div>

            <Image 
                src={featurePreview}
                alt=""
                className="w-full max-w-5xl mt-20 border border-zinc-400/30 border-b-0 rounded-t-xl"
            />


            <div className="grid grid-cols-3 gap-y-14 gap-x-16 mt-20">
                <div className="flex gap-4 items-start">
                    <BarChart3 size={20} className="text-pink-600 w-5 h-5" />
                    <strong className="text-zinc-900 flex-1">
                        Aprovar relatórios de despesas.
                        <span className="ml-1 font-normal text-zinc-600">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. 
                        </span>
                    </strong>
                </div>
                <div className="flex gap-4 items-start">
                    <BellDot size={20} className="text-pink-600 w-5 h-5" />
                    <strong className="flex-1 text-zinc-900">
                        Alertar violações à política da empresa.
                        <span className="ml-1 font-normal text-zinc-600">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. 
                        </span>
                    </strong>
                </div>
                <div className="flex gap-4 items-start">
                    <MonitorSmartphone size={20} className="text-pink-600 w-5 h-5" />
                    <strong className="flex-1 text-zinc-900">
                        Integrar com ERP de forma simplificada.
                        <span className="ml-1 font-normal text-zinc-600">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. 
                        </span>
                    </strong>
                </div>
                <div className="flex gap-4 items-start">
                    <TrendingUp size={20} className="text-pink-600 w-5 h-5" />
                    <strong className="flex-1 text-zinc-900">
                        Extrair relatórios.
                        <span className="ml-1 font-normal text-zinc-600">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. 
                        </span>
                    </strong>
                </div>
                <div className="flex gap-4 items-start">
                    <Car size={20} className="text-pink-600 w-5 h-5" />
                    <strong className="flex-1 text-zinc-900">
                        Reembolsar por quilometragem.
                        <span className="ml-1 font-normal text-zinc-600">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. 
                        </span>
                    </strong>
                </div>
                <div className="flex gap-4 items-start">
                    <ScrollText size={20} className="text-pink-600 w-5 h-5" />
                    <strong className="flex-1 text-zinc-900">
                        Emitir notas de débito entre empresas e mais.
                        <span className="ml-1 font-normal text-zinc-600">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. 
                        </span>
                    </strong>
                </div>
            </div>
      </section>
    )
}