import { ArrowRight, Check } from 'lucide-react'
import { HighlighterItem, HighlightGroup } from "./highlighter";
import { Particles } from './particles';

import { cn } from "@/lib/utils";
import Link from 'next/link';

import logo from '../../../assets/FlashExpense.webp'
import Image from 'next/image';

const tiers = [
    {
      name: "Free",
      price: 0,
      description: "Com a expense você tem",
      features: [
        "Painel de gestão dos cartões com visualização de saldo por colaborador", 
        "Lançamento automático de despesas com prestação de contas facilitada através da integração com a plataforma",
        "Atualização automática do extrato com visão em tempo real dos gastos de todos os colaboradores",
        "Recarga Manual ou Automática nas datas, valores e regras pré determinadas",
        "Ativação e desligamento de cartões com agilidade",
        "Expiração de saldo automática na data determinada pelo financeiro",
        "Regras e alertas de despesas sinalizadas nos relatórios após a compra"
      ],
      cta: "Get Started for Free",
    },
  ];

export function Pricing() {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <span className="text-sm text-pink-500 mb-2">Dentro disso tudo...</span>
        <h4 className="font-title text-5xl text-zinc-700 font-bold max-w-2xl text-center tracking-tight">
          Confira nossos{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            diferenciais
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Aproveite tudo por zero de taxa de contratação e utilização de nossos
          serviços primários.
        </p>
      </div>

      <HighlightGroup className="h-full grid gap-6 md:grid-cols-12 group mt-20">
            {/* Box #1 */}

            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="h-full md:col-span-6 lg:col-span-12 group/item"
                data-aos="fade-down"
              >
                <HighlighterItem>
                  <div className="relative h-full bg-white rounded-xl z-20 overflow-hidden border-pink-300/60">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                      quantity={(i + 1) ** 2 * 10}
                      color={["#FF4478", "#FF4478", "#FF4478"][i]}
                      vy={-0.2}
                    />
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute -top-[430px] w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-pink-500/90 rounded-full blur-[180px]" />
                      </div>
                      {/* Text */}

                      <div className="p-8">
                        <div className='w-full flex items-center justify-center'>
                          <Image src={logo} alt="" className='w-20' />
                        </div>

                       
                        <p className="mt-4 text-sm leading-6 text-zinc-600">{tier.description}</p>
                        <ul role="list" className="mt-8 text-sm space-y-3 leading-6 text-zinc-300">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3 text-zinc-500 text-base max-w-xl">
                              <Check
                                className={cn("h-6 w-5 flex-none", {
                                  "text-emerald-400": i === 0,
                                  "text-yellow-300": i === 1,
                                  "text-rose-500": i === 2,
                                })}
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          className="font-bold mt-16 w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out rounded-lg px-5 py-4
                           text-white bg-gradient-to-tr from-pink-400/80 via-pink-500 to-pink-600/60 hover:bg-pink-600 group"
                          href="#"
                        >
                          Solicitar cartão agora{" "}
                          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            ))}
           
          </HighlightGroup>
    </section>
  )
}
