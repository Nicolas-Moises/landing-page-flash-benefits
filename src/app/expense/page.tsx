import { Cta } from '@/components/Cta'
import { Companies } from './components/Companies'
import { Excluses } from './components/Excluses'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Products } from './components/Products'
import { Testimonials } from './components/Testimonials'

import preview from '../../assets/hero-expense.png'

import Image from 'next/image'

export default function Expense() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Products />
      <Excluses />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta
        title="O futuro do trabalho começa agora"
        description="Simplifique processos de gestão de reembolsos e aumente a produtividade do seu time."
        imageBg={
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 object-contain ring-1 ring-white/10"
            src={preview}
            alt="App screenshot"
            width="1824"
            height="1080"
          />
        }
        link="#"
        ctaButton="Contratar agora"
        ctaLink="Fale conosco"
      />
    </>
  )
}
