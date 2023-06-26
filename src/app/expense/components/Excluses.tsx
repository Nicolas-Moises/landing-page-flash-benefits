"use client"

import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs';

import integrations from '../../../assets/integrations.gif'
import relatorios from '../../../assets/relatorios.gif'
import fatura from '../../../assets/summary.gif'
import approve from '../../../assets/summary.gif'

const excluses = [
    {
        id: '1',
        title: 'Integração com sistemas ERP',
        content: 'Integre a Flash Expense ao seu ERP e tenha todas as informações em um só lugar. A integração é realizada através da API, possibilitando a automatização do sistema, otimizando o tempo gasto com tarefas repetitivas e garantindo mais transparência para todo o processo.',
        item: integrations
    },
    {
        id: '2',
        title: 'Relatórios com inteligência analítica',
        content: 'Tenha insights assertivos através de relatórios automatizados, contando com a economia de tempo e despesas que são possíveis com Flash Expense.',
        item: relatorios
    },
    {
        id: '3',
        title: 'Conciliação automática',
        content: 'Prestação de contas de forma simples e automatizada; Apontamento de inconsistências; Validação automática da fatura com as despesas lançadas',
        item: fatura
    },
    {
        id: '4',
        title: 'Aprovações simples e rápidas.',
        content: 'Projete um fluxo de aprovação seguro e dinâmico para todos os colaboradores. Nossa ferramenta permite a personalização do sistema de reembolso de acordo com as necessidades de cada empresa, fortalecendo a política de compliance.',
        item: approve
    },
]

export function Excluses() {
    return (
        <section className="w-full py-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h4 className="font-title text-3xl font-bold max-w-4xl text-center text-zinc-700">
                    Descubra todas as vantagens e solicite agora o seu cartão corporativo de forma gratuita.
                </h4>
            </div>
            <Tabs.Root 
                defaultValue={'1'} 
                className='w-full flex flex-row-reverse mt-20 items-center'
                orientation='vertical'
            >
                <Tabs.List className='flex flex-col items-start gap-2 justify-center'>
                    {excluses.map(excluse => {
                        return (
                            <Tabs.Trigger 
                                key={excluse.id} 
                                value={`${excluse.id}`} 
                                className='group w-full max-w-xl data-[state=active]:-translate-x-3 transition-transform duration-150'
                            > 
                                <div className='p-6 rounded-lg bg-transparent group-data-[state=active]:bg-pink-100 flex flex-col items-start gap-2'>
                                    <strong className='text-zinc-800 font-title group-data-[state=active]:text-pink-600'>
                                        {excluse.title}
                                    </strong>
                                    <p className='text-zinc-500 text-sm text-left'>
                                        {excluse.content}
                                    </p>
                                </div>
                            </Tabs.Trigger>
                        )
                    })}
                </Tabs.List>
                {excluses.map(excluse => {
                    return (
                        <Tabs.Content 
                            key={excluse.id} 
                            value={`${excluse.id}`}
                            className='rounded-2xl overflow-hidden flex-1 data-[state=active]:animate-scaleIn'
                        >
                            <Image 
                                src={excluse.item}
                                alt=''
                                className='w-[75%] rounded-2xl mr-auto'
                            />
                        </Tabs.Content>
                    )
                })}
            </Tabs.Root>
        </section>
    )
}