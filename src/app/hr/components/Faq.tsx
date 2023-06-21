'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const questions = [
    {
        id: 1,
        value: 'item-1',
        title: 'O que é a Flash People?',
        content: 'Flash People é um sistema completo e descomplicado para o RH com soluções para admissão online, treinamentos, desenvolvimento, engajamento dos colaboradores e muito mais! É isso mesmo, temos tudo que o RH precisa para realizar uma gestão mais estratégica e eficiente, com soluções orientadas a dados para sua empresa gerar resultados transformadores - em um só lugar.',
    },
    {
        id: 2,
        value: 'item-2',
        title: 'Qual a diferença entre Flash People e Flash Benefícios? Posso contratar mais de uma solução?',
        content: 'Flash People é um sistema completo e descomplicado para o RH com soluções para admissão online, treinamentos, desenvolvimento, engajamento dos colaboradores e muito mais! É isso mesmo, temos tudo que o RH precisa para realizar uma gestão mais estratégica e eficiente, com soluções orientadas a dados para sua empresa gerar resultados transformadores - em um só lugar.',
    },
    {
        id: 3,
        value: 'item-3',
        title: 'Quais são os módulos disponíveis?',
        content: 'Flash People é um sistema completo e descomplicado para o RH com soluções para admissão online, treinamentos, desenvolvimento, engajamento dos colaboradores e muito mais! É isso mesmo, temos tudo que o RH precisa para realizar uma gestão mais estratégica e eficiente, com soluções orientadas a dados para sua empresa gerar resultados transformadores - em um só lugar.',
    },
    {
        id: 4,
        value: 'item-4',
        title: 'Como é feita a cobrança da assinatura Flash People?',
        content: 'Flash People é um sistema completo e descomplicado para o RH com soluções para admissão online, treinamentos, desenvolvimento, engajamento dos colaboradores e muito mais! É isso mesmo, temos tudo que o RH precisa para realizar uma gestão mais estratégica e eficiente, com soluções orientadas a dados para sua empresa gerar resultados transformadores - em um só lugar.',
    },
    {
        id: 5,
        value: 'item-5',
        title: 'Quando terão novos recursos disponíveis na plataforma?',
        content: 'Flash husduahs é um sistema completo e descomplicado para o RH com soluções para admissão online, treinamentos, desenvolvimento, engajamento dos colaboradores e muito mais! É isso mesmo, temos tudo que o RH precisa para realizar uma gestão mais estratégica e eficiente, com soluções orientadas a dados para sua empresa gerar resultados transformadores - em um só lugar.',
    },
    {
        id: 6,
        value: 'item-6',
        title: 'Se eu precisar, posso cancelar meu plano a qualquer momento?',
        content: 'Flash People é um sistema completo e descomplicado para o RH com soluções para admissão online, treinamentos, desenvolvimento, engajamento dos colaboradores e muito mais! É isso mesmo, temos tudo que o RH precisa para realizar uma gestão mais estratégica e eficiente, com soluções orientadas a dados para sua empresa gerar resultados transformadores - em um só lugar.',
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

            <div className='w-full mt-12'>
                {questions.map(question => {
                    return (
                        <Accordion.Root type='single' collapsible className='w-full'>
                            <Accordion.Item value={question.value} key={question.id} className=''>
                                <Accordion.Header className='py-5 border-b border-zinc-400/20'>
                                    <Accordion.Trigger className='w-full flex justify-between items-center'>
                                        <h4 className='text-zinc-700 text-lg font-title'>{question.title}</h4>
                                        <ChevronDown />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <div className='py-5'>
                                        {question.content}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion.Root>
                    )
                })}    
            </div>
    </section>
    )
}