'use client'

import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'

import integrations from '../../../assets/integrations.gif'
import relatorios from '../../../assets/relatorios.gif'
import fatura from '../../../assets/summary.gif'
import approve from '../../../assets/flow-approve.gif'
import { useState } from 'react'

import { motion } from 'framer-motion'

const excluses = [
  {
    id: '1',
    title: 'Integração com sistemas ERP',
    content:
      'Integre a Flash Expense ao seu ERP e tenha todas as informações em um só lugar. A integração é realizada através da API, possibilitando a automatização do sistema, otimizando o tempo gasto com tarefas repetitivas e garantindo mais transparência para todo o processo.',
    item: integrations,
  },
  {
    id: '2',
    title: 'Relatórios com inteligência analítica',
    content:
      'Tenha insights assertivos através de relatórios automatizados, contando com a economia de tempo e despesas que são possíveis com Flash Expense.',
    item: relatorios,
  },
  {
    id: '3',
    title: 'Conciliação automática',
    content:
      'Prestação de contas de forma simples e automatizada; Apontamento de inconsistências; Validação automática da fatura com as despesas lançadas',
    item: fatura,
  },
  {
    id: '4',
    title: 'Aprovações simples e rápidas.',
    content:
      'Projete um fluxo de aprovação seguro e dinâmico para todos os colaboradores. Nossa ferramenta permite a personalização do sistema de reembolso de acordo com as necessidades de cada empresa, fortalecendo a política de compliance.',
    item: approve,
  },
]

export function Excluses() {
  const [activeTab, setActiveTab] = useState(excluses[0].id)

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center py-20">
      <div className="flex flex-col items-center">
        <h4 className="max-w-4xl text-center font-title text-3xl font-bold text-zinc-700">
          Descubra todas as vantagens e solicite agora o seu cartão corporativo
          de forma gratuita.
        </h4>
      </div>
      <Tabs.Root
        defaultValue={'1'}
        className="mt-20 flex w-full flex-row-reverse items-center"
        orientation="vertical"
      >
        <Tabs.List className="flex flex-col items-start justify-center gap-2">
          {excluses.map((excluse) => {
            return (
              <Tabs.Trigger
                key={excluse.id}
                value={`${excluse.id}`}
                onClick={() => setActiveTab(excluse.id)}
                className="group relative w-full max-w-xl rounded-lg transition-transform duration-150"
              >
                {activeTab === excluse.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-pink-100"
                    layoutId="active-pill"
                  />
                )}
                <div className="relative z-10 flex flex-col items-start gap-2 rounded-lg bg-transparent p-6 transition-colors duration-150 group-hover:bg-pink-300/10">
                  <strong className="font-title text-zinc-800 group-data-[state=active]:text-pink-600">
                    {excluse.title}
                  </strong>
                  <p className="text-left text-sm text-zinc-500">
                    {excluse.content}
                  </p>
                </div>
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
        {excluses.map((excluse) => {
          return (
            <Tabs.Content
              key={excluse.id}
              value={`${excluse.id}`}
              className="flex-1 overflow-hidden rounded-2xl data-[state=active]:animate-scaleIn"
            >
              <Image
                src={excluse.item}
                priority
                alt=""
                className="mr-auto w-[75%] rounded-2xl"
              />
            </Tabs.Content>
          )
        })}
      </Tabs.Root>
    </section>
  )
}
