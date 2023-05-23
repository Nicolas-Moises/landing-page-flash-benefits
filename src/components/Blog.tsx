import Link from 'next/link'

import post1 from '../assets/post-1.png'
import post2 from '../assets/post-2.png'
import post3 from '../assets/post-3.png'
import { BlogCard } from './BlogCard'
import { ArrowRight } from 'lucide-react'

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
    <section className="w-full py-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-sm text-pink-500 mb-2">Blog</span>
          <h4 className="font-title text-5xl font-bold max-w-2xl text-center">
            Acompanhe nosso{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
              conteúdo
            </span>
          </h4>
        </div>
        <Link
          href="#"
          className="font-bold text-sm text-pink-400 flex items-center gap-2 group hover:text-pink-500 transition-colors"
        >
          Ver tudo
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-all duration-150"
          />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-20">
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
