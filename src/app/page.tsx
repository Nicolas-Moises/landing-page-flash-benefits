import { About } from '@/components/About'
import { Blog } from '@/components/Blog'
import { Companies } from '@/components/Companies'
import { Corp } from '@/components/Corp'
import { Cta } from '@/components/Cta'
import { Expense } from '@/components/Expense'
import { Hero } from '@/components/Hero'
import { People } from '@/components/People'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'

import preview from '../assets/hero-people.png'

import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Stats />
      <Companies />
      <About />
      <Corp />
      <Expense />
      <People />
      <Testimonials />
      <Blog />
      <div className="relative">
        <Cta
          title="Colaboradores e RHs rosa de satistação"
          link="#"
          description="Os números confirmam: 98% dos profissionais de RHs se sentem satisfeitos com a Flash e 62% percebem melhora na retenção de talentos. E tem mais: nossa nota de recomendação de NPS é +86."
          imageBg={
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 object-contain ring-1 ring-white/10"
              src={preview}
              alt="App screenshot"
              width="1824"
              height="1080"
            />
          }
          ctaLink="Contratar agora"
        />
      </div>
    </main>
  )
}
