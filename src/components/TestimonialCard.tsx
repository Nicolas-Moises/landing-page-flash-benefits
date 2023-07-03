import { Quote } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
  message: string
  avatar: any
  author: string
  role: string
  company: string
}

export function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="keen-slider__slide flex flex-col justify-between rounded-br-[60px] rounded-tl-[60px] bg-white px-8 pb-8 pt-14">
      <div className="flex items-start">
        <Quote size={32} className="fill-pink-400 text-pink-400" />
        <p className="mt-4 flex flex-1 items-start text-center text-2xl font-medium text-zinc-600">
          {props.message}
        </p>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <Image
          src={props.avatar}
          alt=""
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <h2 className="font-semibold">{props.author}</h2>
          <span className="text-xs text-zinc-400">{props.role}</span>
          <span className="text-sm font-medium text-zinc-500">
            {props.company}
          </span>
        </div>
      </div>
    </div>
  )
}
