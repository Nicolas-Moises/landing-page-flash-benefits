"use client"

import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs';

import beforeAndAfter from '../../../assets/beforeAndAfter.gif'
import cardOverMachine from '../../../assets/CardOverMachine.gif'
import appExpense from '../../../assets/AppExpense.gif'
import approve from '../../../assets/flow-approve.gif'

const products = [
    {
        id: '1',
        title: 'Gestão automatizada de processos financeiros',
        content: 'Com Flash Expense, você tem total controle da sua gestão financeira. Liberte-se das diversas planilhas, ferramentas e programas diferentes e foque apenas no crescimento da sua empresa.',
        item: beforeAndAfter
    },
    {
        id: '2',
        title: 'Cartão Corporativo integrado ao app',
        content: 'Garanta transparência e controle em todas as transações. Programe e retire os saldos automaticamente da conta, receba alertas contra lançamentos irregulares e muito mais.',
        item: cardOverMachine
    },
    {
        id: '3',
        title: 'As melhores tecnologias a sua disposição',
        content: 'Cartão, aplicativo e plataforma totalmente integrados que trazem as melhores soluções para a sua gestão de despesas e fortalecem a política de compliance da sua empresa.',
        item: appExpense
    },
    {
        id: '4',
        title: 'Aprovações simples e rápidas.',
        content: 'Projete um fluxo de aprovação seguro e dinâmico para todos os colaboradores. Nossa ferramenta permite a personalização do sistema de reembolso de acordo com as necessidades de cada empresa, fortalecendo a política de compliance.',
        item: approve
    },
]

export function Products() {
    return (
        <section className="w-full py-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center">
                <span className="text-sm text-pink-500 mb-2">Tudo que você precisa</span>
                <h4 className="font-title text-5xl font-bold max-w-4xl text-center text-zinc-700">
                    Tudo em um só lugar: do {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
                        cartão corporativo
                    </span>{' '}
                    ao app para gestão dos gastos.
                </h4>
                <p className="leading-relaxed mt-6 text-center max-w-2xl">
                    Sem custo e sem necessidade de contratação do cartão corporativo. Confira algumas funcionalidades que você irá amar.
                </p>
            </div>
            <Tabs.Root 
                defaultValue={'1'} 
                className='w-full flex mt-20 items-center'
                orientation='vertical'
            >
                <Tabs.List className='flex flex-col items-start gap-2 justify-center'>
                    {products.map(product => {
                        return (
                            <Tabs.Trigger 
                                key={product.id} 
                                value={`${product.id}`} 
                                className='group w-full max-w-xl data-[state=active]:translate-x-3 transition-transform duration-150'
                            > 
                                <div className='p-6 rounded-lg bg-transparent group-data-[state=active]:bg-pink-100 flex flex-col items-start gap-2'>
                                    <strong className='text-zinc-800 font-title group-data-[state=active]:text-pink-600'>
                                        {product.title}
                                    </strong>
                                    <p className='text-zinc-500 text-sm text-left'>
                                        {product.content}
                                    </p>
                                </div>
                            </Tabs.Trigger>
                        )
                    })}
                </Tabs.List>
                {products.map(product => {
                    return (
                        <Tabs.Content 
                            key={product.id} 
                            value={`${product.id}`}
                            className='rounded-2xl overflow-hidden flex-1 data-[state=active]:animate-scaleIn'
                        >
                            <Image 
                                src={product.item}
                                alt=''
                                className='w-[75%] rounded-2xl ml-auto'
                            />
                        </Tabs.Content>
                    )
                })}
            </Tabs.Root>
        </section>
    )
}