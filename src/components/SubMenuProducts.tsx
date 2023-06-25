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
          <NavigationMenu.Content className="w-full bg-white absolute top-[88px] right-0 left-0 z-50">
            <NavigationMenu.Link asChild>
              <div className="max-w-7xl w-full mx-auto flex gap-10 divide-x divide-zinc-400/20 items-start py-10">
                <div className="grid grid-cols-2 gap-6">
                  <Link
                    className="flex flex-col gap-4 max-w-xs group hover:bg-pink-50 rounded-lg transition-colors duration-150 p-4"
                    href="/hr"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 p-3 rounded-md">
                        <CreditCard size={18} className="text-zinc-500" />
                      </div>
                      <span className="text-lg text-zinc-600 group-hover:text-pink-400 font-title">
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
                    className="flex flex-col gap-4 max-w-xs group hover:bg-pink-50 rounded-lg transition-colors duration-150 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 p-3 rounded-md">
                        <Building2 size={18} className="text-zinc-500" />
                      </div>
                      <span className="text-lg text-zinc-600 group-hover:text-pink-400 font-title">
                        Flash Expense
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">
                      Tenha mais controle e segurança sobre a gestão das
                      despesas da sua empresa
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="flex flex-col gap-4 max-w-xs group hover:bg-pink-50 rounded-lg transition-colors duration-150 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 p-3 rounded-md">
                        <Users size={18} className="text-zinc-500" />
                      </div>
                      <span className="text-lg text-zinc-600 group-hover:text-pink-400 font-title">
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
                    className="flex flex-col gap-4 max-w-xs group hover:bg-pink-50 rounded-lg transition-colors duration-150 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 p-3 rounded-md">
                        <Calendar size={18} className="text-zinc-500" />
                      </div>
                      <span className="text-lg text-zinc-600 group-hover:text-pink-400 font-title">
                        Folha Certa
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500">
                      A plataforma mais completa para a gestão e controle de
                      ponto
                    </p>
                  </Link>
                </div>

                <div className="flex-1 pl-10 flex flex-col gap-4">
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
                    className="font-bold text-sm text-pink-400 flex items-center gap-2 group hover:text-pink-500 transition-colors "
                  >
                    Ler mais
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-all duration-150"
                    />
                  </Link>
                </div>
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}
