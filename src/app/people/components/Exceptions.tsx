import { Award, Heart, Rocket, Trophy } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: <Trophy size={20} />,
    title: 'Pioneira e visionária',
    content:
      'Somos a primeira, maior e melhor empresa de benefícios flexíveis do país.',
    link: '#',
  },
  {
    id: 2,
    icon: <Award size={20} />,
    title: 'Liberdade que retém talentos',
    content:
      '62% dos RHs afirmam que a adesão à Flash melhorou a retenção dos colaboradores.',
    link: '#',
  },
  {
    id: 3,
    icon: <Rocket size={20} />,
    title: 'Tecnológica e inovadora',
    content:
      'Desde o início da nossa jornada, já foram R$650M captados com alto investimento em tecnologia.',
    link: '#',
  },
  {
    id: 4,
    icon: <Heart size={20} />,
    title: 'Quem tem, recomenda',
    content:
      '98% dos profissionais de RHs se sentem satisfeitos com a Flash e recomendam: nossa nota de NPS é +86!',
    link: '#',
  },
]

export function Exceptions() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center py-20">
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm text-pink-500">
          Tudo que você precisa
        </span>
        <h4 className="max-w-4xl text-center font-title text-5xl font-bold text-zinc-700">
          Por que escolher a{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            Flash?
          </span>{' '}
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Existem milhões de motivos para escolher a Flash, mas te daremos um
          pequeno resumo!
        </p>
      </div>

      <div className="mx-auto mt-20 grid grid-cols-2 place-items-center gap-x-10 gap-y-10">
        {features.map((feature) => {
          return (
            <div
              className="group flex w-full max-w-md items-start gap-3"
              key={feature.id}
            >
              <div
                className="rounded-lg border border-pink-400 bg-gradient-to-r from-pink-400 to-pink-500 p-2 text-white transition-all 
                  duration-200 group-hover:bg-none group-hover:text-pink-500"
              >
                {feature.icon}
              </div>
              <div className="mb-4 flex flex-col items-start gap-4">
                <h2 className="text-lg font-bold text-zinc-600">
                  {feature.title}
                </h2>
                <p className="text-base leading-relaxed text-zinc-500">
                  {feature.content}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
