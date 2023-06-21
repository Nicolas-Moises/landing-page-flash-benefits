import { About } from '@/components/About'
import { Blog } from '@/components/Blog'
import { Companies } from '@/components/Companies'
import { Corp } from '@/components/Corp'
import { Cta } from '@/components/Cta'
import { Expense } from '@/components/Expense'
import { Hero } from '@/components/Hero'
import { People } from '@/components/People'
import { Testimonials } from '@/components/Testimonials'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Companies />
      <About />
      <Corp />
      <Expense />
      <People />
      <Testimonials />
      <Blog />
      <div className="relative">
        <Cta />
        <div className="absolute right-0 top-1/2 h-[288px] w-[726px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-pink-500 opacity-30 blur-full rotate-45" />
      </div>
    </main>
  )
}
