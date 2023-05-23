import person1 from '../assets/person-1.png'
import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    id: 1,
    author: 'Nay Kenis',
    role: 'People & Culture Team Lead',
    company: 'Banco Cora',
    message:
      'A Flash reforça a mensagem de autonomia que temos em nossa cultura. Empodera mais o colaborador, o dinheiro da empresa passa a ser mais bem utilizado (pelo colaborador, ele que decide) e economiza o tempo do nosso time com burocracias e gestão de diversos parceiros.',
    avatar: person1,
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-sm text-pink-500 mb-2">Quem é Flash, ama</span>
        <h4 className="font-title text-5xl font-bold max-w-2xl text-center">
          Palavras de quem vive a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            liberdade
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Alguns depoimentos de nossos clientes e usuários sobre nossos
          produtos.
        </p>
      </div>

      <div className="flex justify-center mt-20">
        {testimonials.map((message) => {
          return (
            <TestimonialCard
              key={message.id}
              author={message.author}
              avatar={message.avatar}
              company={message.company}
              message={message.message}
              role={message.role}
            />
          )
        })}
      </div>
    </section>
  )
}
