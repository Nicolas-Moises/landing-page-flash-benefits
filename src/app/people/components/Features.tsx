import { GitFork, Share2, ShieldCheck, Shrink, Volume2 } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: <Shrink size={20} />,
    title: 'Uma única plataforma com diversas soluções para o RH',
    content:
      'Integre todos os processos de RH em uma só ferramenta e aumente a produtividade e eficiência do seu time.',
    link: '#',
  },
  {
    id: 2,
    icon: <ShieldCheck size={20} />,
    title: 'Segurança e confiabilidade em todas as etapas',
    content:
      'Centralize os processos e dados dos colaboradores em um sistema seguro e garanta proteção e confiabilidade de todas as informações da sua empresa.',
    link: '#',
  },
  {
    id: 3,
    icon: <Volume2 size={20} />,
    title: 'Engajamento com colaboradores de ponta a ponta',
    content:
      'Supere suas metas de engajamento e alcance um nível excepcional de conexão com seus colaboradores com gestão de comunicação, pesquisa e benefícios no mesmo sistema.',
    link: '#',
  },
  {
    id: 4,
    icon: <Share2 size={20} />,
    title: 'Geração de dados e insights para um RH mais estratégico',
    content:
      'Impulsione sua empresa com gestão inteligente de pessoas. Todas as informações dos seus colaboradores em um só lugar, mais dados e insights estratégicos para facilitar sua gestão.',
    link: '#',
  },
  {
    id: 5,
    icon: <GitFork size={20} />,
    title: 'Automação do processo de gestão de pessoas',
    content:
      'Automatize seus processos desde a admissão e ganhe tempo para ser um RH mais estratégico e produtivo, com foco nas pessoas.',
    link: '#',
  },
]

export function Features() {
  return (
    <section className="mx-auto w-full max-w-7xl py-20">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">Exclusividade</span>
        <h4 className="max-w-2xl text-center font-title text-5xl font-bold text-zinc-700">
          Impulsione sua empresa com uma{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            gestão inteligente
          </span>{' '}
          de pessoas
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Gestão de marcação de ponto, escalas, férias, faltas e todos os outros
          processos de rotina trabalhista na palma da mão: FolhaCerta agora é
          Flash.
        </p>
      </div>

      <div className="mx-auto mt-20 flex flex-wrap justify-center">
        {features.map((feature) => {
          return (
            <div
              className="group flex w-[400px] flex-col items-start border border-dashed border-zinc-400/20
              from-pink-100 via-pink-50 to-pink-500/20 p-6 transition-colors duration-150 hover:bg-gradient-to-tr"
              key={feature.id}
            >
              <div className="mb-4 flex flex-col items-start gap-2">
                <div
                  className="rounded-full border border-pink-400 bg-gradient-to-r from-pink-400 to-pink-500 p-2 text-white transition-all 
                duration-200 group-hover:bg-none group-hover:text-pink-500"
                >
                  {feature.icon}
                </div>
                <h2 className="text-lg font-bold text-zinc-600">
                  {feature.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500">
                {feature.content}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
