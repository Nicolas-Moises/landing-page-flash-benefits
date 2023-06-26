'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const questions = [
    {
        id: 1,
        value: 'item-1',
        title: 'O que é a Flash Expense?',
        content: 'Somos uma plataforma integrada para gestão de despesas corporativas. Nossa missão é transformar processos obsoletos e te ajudar a compor um gerenciamento financeiro empresarial com maior eficiência, controle e agilidade.',
    },
    {
        id: 2,
        value: 'item-2',
        title: 'O que está incluso na mensalidade?',
        content: 'Todas as funcionalidades que englobam a gestão de gastos corporativos. De lançamento de despesas, integração com cartões corporativos, solicitações de adiantamento, controle de gastos por quilometragem, agendamento de pagamento, aprovações e muito mais. Sim! A Flash Expense oferece integração completa com os principais sistemas de ERP do mercado. Confira a lista: SAP, Protheus, Oracle, Matera, Mega, Lumia, Teknisa, Entre outros – consulte com nossos consultores',
    },
    {
        id: 3,
        value: 'item-3',
        title: 'Consigo integrar aos aplicativos de transporte, como Uber, Cabify e 99Táxi?',
        content: 'Com certeza. Nossa plataforma se conecta à conta corporativa da sua empresa nos aplicativos automaticamente para que você possa gerenciar tudo em um único lugar.',
    },
    {
        id: 4,
        value: 'item-4',
        title: 'Como funciona a integração de cartões corporativos?',
        content: 'Basta fazer a conexão com seu banco e pronto! Você terá o controle de todos os gastos com cartões de crédito corporativos em um painel completo na plataforma.',
    },
    {
        id: 5,
        value: 'item-5',
        title: 'Quanto minha empresa vai economizar ao implementar a Flash Expense?',
        content: 'Em média, nossos clientes reduzem em até 40% os custos com a gestão de despesas corporativas.',
    },
    {
        id: 6,
        value: 'item-6',
        title: 'É verdade que posso testar a ferramenta gratuitamente?',
        content: 'Sim! Para fazer um teste grátis é só se cadastrar e falar com um de nossos consultores.',
    },
]

export function Faq() {
    return (
        <section className="w-full py-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center ">
                <span className="text-sm text-pink-500 mb-2">Dúvidas?</span>
                <h4 className="font-title text-5xl text-zinc-700 font-bold max-w-2xl text-center tracking-tight">
                    Perguntas frequentes
                </h4>
                <p className="leading-relaxed mt-6 text-center max-w-2xl ">
                    Tem uma pergunta diferente que não encontrou aqui? Encaminhe-nos um e-mail clicando aqui e entraremos em contato o mais breve possível!
                </p>
            </div>

            <div className='w-full mt-12 max-w-5xl flex flex-col items-center justify-center'>
                <Accordion.Root type="single" collapsible className='w-full'>
                    {questions.map(question => {
                        return (
                            <Accordion.Item value={question.value} key={question.id} className='group'>
                                <Accordion.Header className='py-5 border-b border-zinc-400/20'>
                                    <Accordion.Trigger className='w-full flex justify-between items-center'>
                                        <h4 className='text-zinc-700 text-lg font-title'>{question.title}</h4>
                                        <ChevronDown className='group-data-[state=open]:rotate-180 transition-transform duration-300' />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className='overflow-hidden data-[state=open]:animate-slideDown group-data-[state=closed]:animate-slideUp'>
                                    <div className='py-5 text-base text-medium text-zinc-600'>
                                        {question.content}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        )
                    })}    
                </Accordion.Root>
                <div className='mt-8 w-full'>
                <span className='text-xs text-zinc-500'>
                    Não encontrou o que procurava? Acesse nossa <Link href="#" className='text-pink-400 hover:text-pink-500'>faq completa</Link>
                </span>
            </div>
            </div>

            
    </section>
    )
}