'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
  ArrowRight,
  Building2,
  Calendar,
  CreditCard,
  Users,
} from 'lucide-react'

import Link from 'next/link'
import { ReactNode } from 'react'

interface SubMenuProductsProps {
  children: ReactNode
}

export function SubMenuProducts(props: SubMenuProductsProps) {
  return (
    <NavigationMenu.Root delayDuration={100}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild>
            {props.children}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 right-0 top-[88px] z-50 w-full bg-white">
            <NavigationMenu.Link asChild>
              <div className="mx-auto flex w-full max-w-7xl items-start gap-10 divide-x divide-zinc-400/20 py-10">
                <div className="grid grid-cols-2 gap-6">
                  <Link
                    className="group flex max-w-xs flex-col gap-4 rounded-lg p-4 transition-colors duration-150 hover:bg-pink-50"
                    href="/hr"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-pink-100 p-3">
                        <CreditCard size={18} className="text-zinc-500" />
                      </div>
                      <span className="font-title text-lg text-zinc-600 group-hover:text-pink-400">
                        Flash Benefícios
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">
                      A melhor solução para fornecer benefícios aos seus
                      colaboradores
                    </p>
                  </Link>
                  <Link
                    href="/expense"
                    className="group flex max-w-xs flex-col gap-4 rounded-lg p-4 transition-colors duration-150 hover:bg-pink-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-pink-100 p-3">
                        <Building2 size={18} className="text-zinc-500" />
                      </div>
                      <span className="font-title text-lg text-zinc-600 group-hover:text-pink-400">
                        Flash Expense
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">
                      Tenha mais controle e segurança sobre a gestão das
                      despesas da sua empresa
                    </p>
                  </Link>

                  <Link
                    href="/people"
                    className="group flex max-w-xs flex-col gap-4 rounded-lg p-4 transition-colors duration-150 hover:bg-pink-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-pink-100 p-3">
                        <Users size={18} className="text-zinc-500" />
                      </div>
                      <span className="font-title text-lg text-zinc-600 group-hover:text-pink-400">
                        Flash People
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">
                      Tenha mais controle e segurança sobre a gestão das
                      despesas da sua empresa.
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="group flex max-w-xs flex-col gap-4 rounded-lg p-4 transition-colors duration-150 hover:bg-pink-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-pink-100 p-3">
                        <Calendar size={18} className="text-zinc-500" />
                      </div>
                      <span className="font-title text-lg text-zinc-600 group-hover:text-pink-400">
                        Folha Certa
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">
                      A plataforma mais completa para a gestão e controle de
                      ponto
                    </p>
                  </Link>
                </div>

                <div className="flex flex-1 flex-col gap-4 pl-10">
                  <h2 className="font-title text-lg font-bold text-zinc-600">
                    Confira nossos parceiros
                  </h2>
                  <p className="text-zinc-500">
                    Acesse agora mesmo e simule as opções que melhor se encaixam
                    no momento de sua empresa e conte conosco para facilitar sua
                    vida
                  </p>

                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-sm font-bold text-pink-400 transition-colors hover:text-pink-500 "
                  >
                    Ler mais
                    <ArrowRight
                      size={16}
                      className="transition-all duration-150 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
      <NavigationMenu.Viewport className="" />
    </NavigationMenu.Root>
  )
}
