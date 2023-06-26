import { Benefits } from '@/components/Benefits'
import { About } from './components/About'
import { Cta } from './components/Cta'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Stats } from './components/Stats'
import { Faq } from '../../components/Faq'
import { Testimonials } from './components/Testimonials'

export default function HumanResources() {
  return (
    <div className="mt-20">
      <Hero />
      <Stats />
      <About />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  )
}
