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
    <div className="max-w-2xl w-full px-8 pt-14 pb-8 rounded-tl-[60px] rounded-br-[60px] bg-white drop-shadow-2xl">
      <Quote size={32} className="fill-pink-400 text-pink-400" />
      <p className="text-xl font-medium text-zinc-600 text-center flex items-start mt-4">
        {props.message}
      </p>
      <div className="flex flex-col items-center mt-6">
        <Image
          src={props.avatar}
          alt=""
          className="w-14 h-14 object-cover rounded-full"
        />
        <div className="flex flex-col items-center text-zinc-600 gap-2">
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