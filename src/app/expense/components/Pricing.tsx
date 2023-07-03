import { ArrowRight, Check } from 'lucide-react'
import { HighlighterItem, HighlightGroup } from './highlighter'
import { Particles } from './particles'

import { cn } from '@/lib/utils'
import Link from 'next/link'

import logo from '../../../assets/FlashExpense.webp'
import Image from 'next/image'

const tiers = [
  {
    name: 'Free',
    price: 0,
    description: 'Com a expense você tem',
    features: [
      'Painel de gestão dos cartões com visualização de saldo por colaborador',
      'Lançamento automático de despesas com prestação de contas facilitada através da integração com a plataforma',
      'Atualização automática do extrato com visão em tempo real dos gastos de todos os colaboradores',
      'Recarga Manual ou Automática nas datas, valores e regras pré determinadas',
      'Ativação e desligamento de cartões com agilidade',
      'Expiração de saldo automática na data determinada pelo financeiro',
      'Regras e alertas de despesas sinalizadas nos relatórios após a compra',
    ],
    cta: 'Get Started for Free',
  },
]

export function Pricing() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center py-16">
      <div className="flex flex-col items-center ">
        <span className="mb-2 text-sm text-pink-500">Dentro disso tudo...</span>
        <h4 className="max-w-2xl text-center font-title text-5xl font-bold tracking-tight text-zinc-700">
          Confira nossos{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            diferenciais
          </span>
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Aproveite tudo por zero de taxa de contratação e utilização de nossos
          serviços primários.
        </p>
      </div>

      <HighlightGroup className="group mt-20 grid h-full gap-6 md:grid-cols-12">
        {/* Box #1 */}

        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className="group/item h-full md:col-span-6 lg:col-span-12"
            data-aos="fade-down"
          >
            <HighlighterItem>
              <div className="relative z-20 h-full overflow-hidden rounded-xl border-pink-300/60 bg-white">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                  quantity={(i + 1) ** 2 * 10}
                  color={['#FF4478', '#FF4478', '#FF4478'][i]}
                  vy={-0.2}
                />
                <div className="flex flex-col">
                  {/* Radial gradient */}
                  <div
                    className="pointer-events-none absolute -top-[430px] left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-pink-500/90 blur-[180px]" />
                  </div>
                  {/* Text */}

                  <div className="p-8">
                    <div className="flex w-full items-center justify-center">
                      <Image src={logo} alt="" className="w-20" />
                    </div>

                    <p className="mt-4 text-sm leading-6 text-zinc-600">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm leading-6 text-zinc-300"
                    >
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex max-w-xl gap-x-3 text-base text-zinc-500"
                        >
                          <Check
                            className={cn('h-6 w-5 flex-none', {
                              'text-emerald-400': i === 0,
                              'text-yellow-300': i === 1,
                              'text-rose-500': i === 2,
                            })}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="group mt-16 flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-tr from-pink-400/80 via-pink-500 to-pink-600/60 px-5
                           py-4 font-bold text-white transition duration-150 ease-in-out hover:bg-pink-600"
                      href="#"
                    >
                      Solicitar cartão agora{' '}
                      <ArrowRight className="text-primary-500 ml-1 h-3 w-3 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
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
