import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

interface CategorieCardProps {
  category: string
  tag?: string
  description: string
  link: string
  icon: ReactElement
  coverUrl: any
}

export function CategorieCard(props: CategorieCardProps) {
  return (
    <div className="keen-slider__slide relative flex h-[400px] w-full max-w-xs flex-col overflow-hidden rounded-br-[60px] rounded-tl-[60px] border-2 border-pink-500/10 bg-white pb-6">
      {props.tag && (
        <div className="absolute right-6 top-4 rounded-md border border-zinc-500/10 bg-white px-1 py-px text-xs font-medium text-zinc-500">
          {props.tag}
        </div>
      )}

      <Image
        src={props.coverUrl}
        alt=""
        width={540}
        height={400}
        className="aspect-video w-full object-cover"
      />
      <div className="mt-4 flex flex-1 flex-col justify-between px-4">
        <div>
          <div className="mb-3 flex items-center gap-3">
            {props.icon}
            <h4 className="font-title text-xl font-bold text-zinc-800">
              {props.category}
            </h4>
          </div>
          <p className="leading-relaxed text-zinc-500">{props.description}</p>
        </div>

        <Link
          href={props.link}
          className="group flex items-center gap-2 text-sm font-bold text-pink-400 transition-colors hover:text-pink-500"
        >
          Mais informações
          <ArrowRight
            size={16}
            className="transition-all duration-150 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  )
}
