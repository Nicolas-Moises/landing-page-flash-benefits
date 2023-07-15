import Link from 'next/link'

import post1 from '../assets/post-1.png'
import post2 from '../assets/post-2.png'
import post3 from '../assets/post-3.png'
import { BlogCard } from './BlogCard'
import { ArrowRight } from 'lucide-react'
import { Heading } from './ui/heading'

const posts = [
  {
    id: 1,
    title: 'Leis trabalhistas: 3 novidades para o RH acompanhar em 2023',
    author: 'Jennifer Grisosti',
    coverUrl: post1,
    posted_at: 'Fev 7, de 2023 • Leitura 4 min',
    tag: 'RH',
  },
  {
    id: 2,
    title:
      'Fim do Home Office? Os impactos do retorno obrigatório ao escritório',
    author: 'Ana Paula Souza',
    coverUrl: post2,
    posted_at: 'Fev 1, de 2023 • Leitura 6 min',
    tag: 'Tendências',
  },
  {
    id: 3,
    title:
      'Pesquisa de clima: O que é e qual o seu papel na gestão da saúde mental?',
    author: 'Jennifer Grisosti',
    coverUrl: post3,
    posted_at: 'Jan 31, de 2023 • Leitura 7 min',
    tag: 'RH',
  },
]

export function Blog() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 xl:px-0">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="mb-2 text-sm text-pink-500">Blog</span>
          <Heading.Title>
            Acompanhe nosso <Heading.Gradient>conteúdo</Heading.Gradient>
          </Heading.Title>
        </div>
        <Link
          href="#"
          className="group flex items-center gap-2 text-sm font-bold text-pink-400 transition-colors hover:text-pink-500"
        >
          Acessar blog
          <ArrowRight
            size={16}
            className="transition-all duration-150 group-hover:translate-x-1"
          />
        </Link>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <BlogCard
              key={post.id}
              tag={post.tag}
              title={post.title}
              author={post.author}
              coverUrl={post.coverUrl}
              posted_at={post.posted_at}
            />
          )
        })}
      </div>
    </section>
  )
}
