/* eslint-disable jsx-a11y/alt-text */
'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion'
import { AnimatePresence, motion } from 'framer-motion'
import {
  LineChart,
  UserPlus,
  Check,
  GraduationCap,
  Volume2,
  PieChart,
  Wand2,
} from 'lucide-react'

const featureList = [
  {
    key: 'analytics',
    title: 'Admissão Digital',
    icon: <UserPlus className="h-5 w-5 text-zinc-500" />,
    description:
      'Um RH estratégico automatiza seus processos desde a admissão de colaboradores',
    feat: (
      <>
        <div className="flex items-start gap-2">
          <Check size={14} className="text-pink-600" />
          <p className="flex-1 text-sm">
            Gestão de candidatos simples e com automações
          </p>
        </div>
      </>
    ),
    demo: '/videos/admissao.mp4',
    thumbnail: '/_static/features/analytics.png',
  },
  {
    key: 'domains',
    title: 'Treinamentos',
    icon: <GraduationCap className="h-5 w-5 text-zinc-500" />,
    description:
      'Quando você desenvolve seus colaboradores, sua empresa atinge níveis extraordinários de performance',
    feat: (
      <div className="flex items-start gap-2">
        <Check size={14} className="text-pink-600" />
        <p className="flex-1 text-sm">
          Construa e gerencie programas de treinamento e desenvolvimento com
          facilidade
        </p>
      </div>
    ),
    demo: '/videos/treinamento.mp4',
  },
  {
    key: 'link',
    title: 'Engajamento',
    icon: <Volume2 className="h-5 w-5 text-zinc-500" />,
    description:
      'Supere suas metas de engajamento e alcance um nível excepcional de conexão com seus colaboradores',
    feat: (
      <div className="flex items-start gap-2">
        <Check size={14} className="text-pink-600" />
        <p className="flex-1 text-sm">
          Criação e envio de mensagens e pesquisas personalizadas para os
          colaboradores
        </p>
      </div>
    ),
    demo: '/videos/engajamento.mp4',
  },
  {
    key: 'social',
    title: 'Organograma',
    icon: <LineChart className="h-5 w-5 text-zinc-500" />,
    description:
      'O RH se destaca quando a estrutura da organização é visível e acessível para todos os colaboradores',
    feat: (
      <div className="flex items-start gap-2">
        <Check size={14} className="text-pink-600" />
        <p className="flex-1 text-sm">
          Controle e edição do organograma da empresa de forma simplificada
        </p>
      </div>
    ),
    demo: '/videos/organograma.mp4',
  },
  {
    key: 'qr',
    title: 'People Analytics',
    icon: <PieChart className="h-5 w-5 text-zinc-500" />,
    description:
      'O RH alcança resultados transformadores quando se tem dados inteligentes dos colaboradores',
    feat: (
      <div className="flex items-start gap-2">
        <Check size={14} className="text-pink-600" />
        <p className="flex-1 text-sm">Insights baseados emdados reais</p>
      </div>
    ), // custom feat
    demo: '/videos/people-analytic.mp4',
  },
  {
    key: 'team',
    title: 'Gestão personalizada',
    icon: <Wand2 className="h-5 w-5 text-zinc-500" />,
    description:
      'Uma solução de gestão de RH que é a sua cara! Todos os benefícios em uma plataforma prática, intuitiva e segura.',
    feat: (
      <div className="flex items-start gap-2">
        <Check size={14} className="text-pink-600" />
        <p className="flex-1 text-sm">
          Personalização da sua conta dentro da Flash com seu logo e as cores da
          sua empresa
        </p>
      </div>
    ),
    demo: '/videos/gestao-personalizada.mp4',
  },
]

export function Solutions() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <div id="features">
      {featureList.map(({ key, demo }) => (
        // preload videos
        <link key={key} rel="preload" as="video" href={demo} />
      ))}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 pb-10 pt-24 md:px-20">
        <div className="mx-auto max-w-lg text-center sm:max-w-xl">
          <span className="mb-2 text-sm text-pink-500">Exclusividade</span>
          <h4 className="text-center font-title text-5xl font-bold text-zinc-700">
            As principais{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              soluções
            </span>{' '}
            que o RH precisa em uma só{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              plataforma!
            </span>
          </h4>
          <p className="mt-6 max-w-2xl text-center leading-relaxed">
            Com Flash People você paga apenas pelo que usar e tem o
            acompanhamento do seu consumo sempre disponível. Simples e sem
            pegadinhas.
          </p>
        </div>

        <div className="mb-10 mt-20 h-[840px] w-full overflow-hidden rounded-xl border border-zinc-200 bg-white/5 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[630px]">
          <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
            <Accordion
              type="single"
              defaultValue="analytics"
              onValueChange={(e) => {
                setActiveFeature(featureList.findIndex(({ key }) => key === e))
              }}
            >
              {featureList.map(({ key, title, icon, description, feat }) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3 p-3">
                      {icon}
                      <h3 className="font-title text-base text-zinc-700">
                        {title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-3">
                      <p className="mb-4 text-sm text-zinc-500">
                        {description}
                      </p>
                      {feat}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {featureList.map((feature, index) => {
                  if (index === activeFeature) {
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative min-h-[600px] w-full overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-2xl lg:mt-10 lg:w-[800px]"
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          width={800}
                          height={600}
                          poster={feature.thumbnail}
                        >
                          <source src={feature.demo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </motion.div>
                    )
                  }
                  return null
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
