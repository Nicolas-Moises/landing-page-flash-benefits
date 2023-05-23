import { About } from '@/components/About'
import { Benefits } from '@/components/Benefits'
import { Blog } from '@/components/Blog'
import { Companies } from '@/components/Companies'
import { Corp } from '@/components/Corp'
import { Cta } from '@/components/Cta'
import { Expense } from '@/components/Expense'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { People } from '@/components/People'
import { Testimonials } from '@/components/Testimonials'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Companies />
      <About />
      <Corp />
      <Expense />
      <People />
      <Benefits />
      <Testimonials />
      <Blog />
      <Cta />
      <Footer />
    </main>
  )
}
